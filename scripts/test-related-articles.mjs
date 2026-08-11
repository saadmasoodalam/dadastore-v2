import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { upgradeRelatedArticles } from "./upgrade-related-articles.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOG_DIR = path.join(ROOT, "blog");
const posts = JSON.parse(await readFile(path.join(BLOG_DIR, "data", "posts.json"), "utf8"));
const published = posts.filter((post) => post.status === "published");
const drafts = posts.filter((post) => post.status === "draft");
const bySlug = new Map(posts.map((post) => [post.slug, post]));

const failures = [];
const fail = (slug, message) => failures.push(`${slug}: ${message}`);
const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");
const counts = { cards: 0, selfLinks: 0, duplicates: 0, draftLinks: 0, brokenLinks: 0, brokenCovers: 0, missingAlt: 0, emptySections: 0, invalidFields: 0, duplicateIds: 0 };

for (const current of published) {
  const file = path.join(BLOG_DIR, current.slug, "index.html");
  const html = await readFile(file, "utf8");
  const section = html.match(/<section\s+class="blog-section blog-related"[^>]*>[\s\S]*?<\/section>/i)?.[0];
  if (!section) {
    counts.emptySections += 1;
    fail(current.slug, "related section missing");
    continue;
  }

  const cards = [...section.matchAll(/<article\s+class="blog-related-card"\s+data-related-slug="([^"]+)">([\s\S]*?)<\/article>/gi)];
  counts.cards += cards.length;
  if (cards.length !== 3) fail(current.slug, `expected 3 cards; found ${cards.length}`);
  const slugs = cards.map((match) => match[1]);
  if (slugs.includes(current.slug)) { counts.selfLinks += 1; fail(current.slug, "self-link found"); }
  if (new Set(slugs).size !== slugs.length) { counts.duplicates += 1; fail(current.slug, "duplicate card found"); }

  for (const match of cards) {
    const related = bySlug.get(match[1]);
    const card = match[2];
    if (!related || related.status !== "published") { counts.draftLinks += 1; fail(current.slug, `ineligible related record ${match[1]}`); continue; }
    const href = card.match(/<a\s+class="blog-related-card-link"\s+href="([^"]+)"/i)?.[1];
    if (href !== related.url.replace(/^\.\//, "../")) { counts.brokenLinks += 1; fail(current.slug, `invalid href for ${related.slug}`); }
    await access(path.join(BLOG_DIR, related.slug, "index.html")).catch(() => { counts.brokenLinks += 1; fail(current.slug, `missing page for ${related.slug}`); });
    const image = card.match(/<img\s+src="([^"]+)"[^>]*\salt="([^"]*)"/i);
    if (!image?.[2]?.trim()) { counts.missingAlt += 1; fail(current.slug, `missing alt for ${related.slug}`); }
    if (image) await access(path.resolve(path.dirname(file), image[1])).catch(() => { counts.brokenCovers += 1; fail(current.slug, `missing cover for ${related.slug}`); });
    if (!card.includes(escapeHtml(related.title)) || !card.includes(escapeHtml(related.category)) || !card.includes(escapeHtml(related.readingTime))) {
      counts.invalidFields += 1;
      fail(current.slug, `registry fields do not match ${related.slug}`);
    }
  }

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  if (new Set(ids).size !== ids.length) { counts.duplicateIds += 1; fail(current.slug, "duplicate id found"); }
}

const rebuild = await upgradeRelatedArticles({ write: false });
if (rebuild.changed !== 0) fail("rebuild", `${rebuild.changed} pages would change on an unchanged-data rebuild`);
if (rebuild.globalFallbacks !== 0) fail("relevance", `${rebuild.globalFallbacks} unqualified global fallbacks found`);

if (drafts.length !== 0) fail("registry", `expected 0 drafts; found ${drafts.length}`);
const expectedCards = published.length * 3;
if (counts.cards !== expectedCards) fail("coverage", "expected " + expectedCards + " related cards; found " + counts.cards);

const result = {
  tests: failures.length === 0 ? "passed" : "failed",
  publishedPages: published.length,
  relatedCards: counts.cards,
  cardsPerPage: counts.cards / published.length,
  ...counts,
  topicIrrelevantFallbacks: rebuild.globalFallbacks,
  deterministicRebuildChanges: rebuild.changed,
  failures,
};

console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
