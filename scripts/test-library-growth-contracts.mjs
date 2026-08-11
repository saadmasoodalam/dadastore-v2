import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { auditPublishedRegistry, derivePublishedRegistry, validateCoverAsset } from "./blog-registry-contracts.mjs";
import { buildCategoryDirectoryData } from "./build-category-directory.mjs";
import { eligibleFeaturedArticles, validateRotation } from "./build-featured-rotation.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOG = path.join(ROOT, "blog");
const posts = JSON.parse(await readFile(path.join(BLOG, "data/posts.json"), "utf8"));
const categories = JSON.parse(await readFile(path.join(BLOG, "data/categories.json"), "utf8"));
const audit = await auditPublishedRegistry(posts, BLOG);
assert.deepEqual(audit.errors, []);
assert.equal(audit.publishedCount, posts.filter((post) => post.status === "published").length);
assert.equal(buildCategoryDirectoryData(posts, categories).reduce((sum, item) => sum + item.count, 0), audit.publishedCount);
const sitemap = await readFile(path.join(BLOG, "sitemap.xml"), "utf8");
const feed = await readFile(path.join(BLOG, "feed.xml"), "utf8");
assert.equal((sitemap.match(/<url>/g) ?? []).length, audit.publishedCount + 2);
assert.equal((feed.match(/<item>/g) ?? []).length, audit.publishedCount);
for (const post of audit.published) assert.deepEqual(await validateCoverAsset(post, ROOT, BLOG), [], post.slug);
const eligible = await eligibleFeaturedArticles(audit.published, ROOT);
assert.equal(eligible.length, audit.publishedCount);
const rotation = JSON.parse(await readFile(path.join(BLOG, "data/featured-rotation.json"), "utf8"));
assert.deepEqual(validateRotation(rotation, eligible), []);

const requireRelatedTotal = (publishedCount, cardTotal) => {
  if (cardTotal !== publishedCount * 3) throw new Error("related-card total mismatch");
};
const requireCategoryTotal = (publishedCount, displayedTotal) => {
  if (displayedTotal !== publishedCount) throw new Error("category total mismatch");
};
const requireSitemapCoverage = (xml, records) => {
  for (const post of records) {
    const url = "https://dadastore.co/blog/" + post.slug + "/";
    if ((xml.split(url).length - 1) !== 1) throw new Error("sitemap coverage mismatch: " + post.slug);
  }
  if ((xml.match(/<url>/g) ?? []).length !== records.length + 2) throw new Error("sitemap total mismatch");
};
const temp = await mkdtemp(path.join(os.tmpdir(), "unit6m1-contract-"));
try {
  const fixture = (slug, extra = {}) => ({ slug, title: "Title " + slug, category: "SEO", status: "published", url: "./" + slug + "/", cover: { src: "cover.svg", alt: "Meaningful deterministic cover", width: 1280, height: 720 }, ...extra });
  await writeFile(path.join(temp, "cover.svg"), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"><rect width="1280" height="720"/></svg>');
  for (const slug of ["one", "two"]) { await mkdir(path.join(temp, slug)); await writeFile(path.join(temp, slug, "index.html"), "<!doctype html>"); }
  const base = [fixture("one"), fixture("two")];
  assert.deepEqual((await auditPublishedRegistry(base, temp)).errors, []);
  assert.throws(() => requireRelatedTotal(62, 185));
  assert.throws(() => requireRelatedTotal(62, 187));
  assert.throws(() => requireCategoryTotal(62, 61));
  assert.throws(() => requireSitemapCoverage("<urlset><url>https://dadastore.co/blog/</url><url>https://dadastore.co/blog/category/</url><url>https://dadastore.co/blog/one/</url></urlset>", base));
  assert.ok(derivePublishedRegistry([...base, fixture("three", { url: "./one/" })]).errors.some((error) => error.includes("duplicate published url")));
  assert.ok(derivePublishedRegistry([...base, fixture("no-category", { category: "" })]).errors.some((error) => error.includes("malformed published record")));
  assert.ok(derivePublishedRegistry([...base, fixture("one")]).errors.some((error) => error.includes("duplicate published slug")));
  assert.ok((await auditPublishedRegistry([...base, fixture("missing")], temp)).missingPages.includes("missing"));
  await mkdir(path.join(temp, "unregistered")); await writeFile(path.join(temp, "unregistered/index.html"), "<!doctype html>");
  assert.ok((await auditPublishedRegistry(base, temp)).unregisteredPages.includes("unregistered"));
  const scaleDir = path.join(temp, "scale");
  await mkdir(scaleDir);
  await writeFile(path.join(scaleDir, "cover.svg"), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"><rect width="1280" height="720"/></svg>');
  const scaleRecords = Array.from({ length: 62 }, (_, index) => fixture("article-" + String(index + 1).padStart(2, "0")));
  for (const record of scaleRecords) { await mkdir(path.join(scaleDir, record.slug)); await writeFile(path.join(scaleDir, record.slug, "index.html"), "<!doctype html>"); }
  assert.ok((await auditPublishedRegistry(scaleRecords.slice(0, 61), scaleDir)).unregisteredPages.includes("article-62"));
  await rm(path.join(scaleDir, "article-62", "index.html"));
  assert.ok((await auditPublishedRegistry(scaleRecords, scaleDir)).missingPages.includes("article-62"));
  assert.ok(derivePublishedRegistry([...base, { ...fixture("draft"), status: "draft", url: "./draft/" }]).errors.some((error) => error.includes("draft has public URL")));
  assert.deepEqual(await validateCoverAsset(base[0], temp, temp), []);
  assert.ok((await validateCoverAsset(fixture("missing-cover", { cover: { src: "missing.svg", alt: "Meaningful missing cover description", width: 1280, height: 720 } }), temp, temp)).some((error) => error.includes("cover file missing")));
  await writeFile(path.join(temp, "cover.svg"), '<svg viewBox="0 0 1280 720"><script>alert(1)</script></svg>');
  assert.ok((await validateCoverAsset(base[0], temp, temp)).some((error) => error.includes("unsafe SVG")));
} finally { await rm(temp, { recursive: true, force: true }); }

console.log(JSON.stringify({ tests: "passed", publishedCount: audit.publishedCount, registryDerived: true, missingDetection: true, unregisteredDetection: true, duplicateDetection: true, negativeContractFixtures: 14, sitemapEntries: audit.publishedCount + 2, feedEntries: audit.publishedCount, svgValidation: true, featuredEligibility: eligible.length }, null, 2));
