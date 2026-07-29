import { createHash } from "node:crypto";
import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const BLOG_DIR = path.join(ROOT, "blog");
export const DATA_DIR = path.join(BLOG_DIR, "data");
export const DEFAULT_PUBLIC_BASE = "https://saadmasoodalam.github.io/dadastore-v2/blog/";
const REQUIRED_PLAN_FIELDS = [
  "id", "title", "slug", "category", "excerpt", "primaryKeyword",
  "searchIntent", "audience", "articleType", "readingTime", "status", "batch",
];

const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const exists = async (file) => access(file).then(() => true, () => false);
const compactText = (html) => decodeEntities(
  html.replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
).replace(/\s+/g, " ").trim();

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&mdash;/gi, "\u2014")
    .replace(/&ndash;/gi, "\u2013")
    .replace(/&larr;/gi, "\u2190")
    .replace(/&middot;/gi, "\u00b7")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

export function xmlEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

export function normalizeBase(value = DEFAULT_PUBLIC_BASE) {
  const base = new URL(value);
  return base.href.endsWith("/") ? base.href : `${base.href}/`;
}

export async function loadBlogData() {
  const [plan, posts, categories, rules] = await Promise.all([
    readJson(path.join(DATA_DIR, "article-plan.json")),
    readJson(path.join(DATA_DIR, "posts.json")),
    readJson(path.join(DATA_DIR, "categories.json")),
    readJson(path.join(DATA_DIR, "editorial-rules.json")),
  ]);
  return { plan, posts, categories, rules };
}

export function publishedRecords(posts) {
  return posts.filter((post) => post.status === "published" && typeof post.url === "string" && post.url.trim());
}

export function buildPublicIndexData(posts) {
  return publishedRecords(posts)
    .slice()
    .sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.slug.localeCompare(b.slug))
    .map(({ slug, title, excerpt, category, date, readingTime, url, featured }) => ({
      slug, title, excerpt, category, date, readingTime, url, featured: Boolean(featured),
    }));
}

function duplicateGroups(records, field) {
  const map = new Map();
  for (const record of records) {
    const key = String(record[field] ?? "").trim().toLowerCase();
    if (!key) continue;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(record.slug ?? record.id ?? key);
  }
  return [...map.entries()]
    .filter(([, values]) => values.length > 1)
    .map(([value, articles]) => ({ value, articles }));
}

function countWords(articleHtml) {
  const match = articleHtml.match(/<article\b[^>]*class=["'][^"']*\bblog-post\b[^"']*["'][^>]*>([\s\S]*?)<\/article>/i);
  const text = compactText(match?.[1] ?? articleHtml);
  return (text.match(/[\p{L}\p{N}][\p{L}\p{N}'\u2019\u2013\u2014-]*/gu) ?? []).length;
}

function metaContent(html, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const direct = html.match(new RegExp(`<meta\\s+[^>]*(?:name|property)=["']${escaped}["'][^>]*content=["']([^"']+)["'][^>]*>`, "i"));
  const reversed = html.match(new RegExp(`<meta\\s+[^>]*content=["']([^"']+)["'][^>]*(?:name|property)=["']${escaped}["'][^>]*>`, "i"));
  return (direct?.[1] ?? reversed?.[1] ?? "").trim();
}

function getArticleBody(html) {
  const match = html.match(/<div\b[^>]*class=["'][^"']*\bblog-article-body\b[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);
  return compactText(match?.[1] ?? html);
}

function localReferences(html) {
  return [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function claimContexts(text, regex) {
  const contexts = [];
  for (const match of text.matchAll(regex)) {
    const start = Math.max(0, match.index - 55);
    const end = Math.min(text.length, match.index + match[0].length + 55);
    contexts.push(text.slice(start, end));
  }
  return contexts;
}

export async function validateLibrary({ browserQa = null } = {}) {
  const { plan, posts, categories, rules } = await loadBlogData();
  const plannedDrafts = plan.filter((record) => /^Batch \d+$/.test(record.batch));
  const publishedPlan = plan.filter((record) => record.status === "published");
  const categoryTitles = new Set(categories.map((category) => category.title));
  const duplicateTitles = duplicateGroups(plan, "title");
  const duplicateSlugs = duplicateGroups(plan, "slug");
  const missingMetadata = [];
  const invalidCategories = [];
  const wordCountFailures = [];
  const brokenLinks = [];
  const relatedReferenceFailures = [];
  const placeholderFlags = [];
  const aiWordingFlags = [];
  const unsupportedStatisticFlags = [];
  const guaranteedResultFlags = [];
  const emptySectionFlags = [];
  const visualModuleFailures = [];
  const bodyHashes = new Map();
  const visualFamilies = new Map();
  const visualFamiliesByBatch = new Map();
  const generatedSlugs = new Set();
  const articleDetails = [];

  for (const record of plan) {
    if (!categoryTitles.has(record.category)) invalidCategories.push({ slug: record.slug, category: record.category });
    const file = path.join(BLOG_DIR, record.slug, "index.html");
    if (!(await exists(file))) {
      if (/^Batch \d+$/.test(record.batch)) missingMetadata.push({ slug: record.slug, missing: ["article file"] });
      continue;
    }
    generatedSlugs.add(record.slug);
    const html = await readFile(file, "utf8");
    const missing = REQUIRED_PLAN_FIELDS.filter((field) => record[field] === undefined || record[field] === null || record[field] === "");
    if (!/<title>[^<]+<\/title>/i.test(html)) missing.push("html title");
    if (!metaContent(html, "description")) missing.push("meta description");
    if (!metaContent(html, "author")) missing.push("meta author");
    if (!metaContent(html, "robots")) missing.push("robots");
    if (!metaContent(html, "og:title")) missing.push("Open Graph title");
    if (!metaContent(html, "og:description")) missing.push("Open Graph description");
    if (metaContent(html, "og:type") !== "article") missing.push("Open Graph type");
    const openGraphUrl = metaContent(html, "og:url");
    if (!openGraphUrl || !openGraphUrl.endsWith(`/blog/${record.slug}/`)) missing.push("Open Graph URL");
    if (!html.includes(record.category.replace("&", "&amp;")) && !html.includes(record.category)) missing.push("visible category");
    if (!html.includes(record.readingTime)) missing.push("reading time");
    if (missing.length) missingMetadata.push({ slug: record.slug, missing: [...new Set(missing)] });

    const words = countWords(html);
    if (/^Batch \d+$/.test(record.batch) && (words < rules.targetArticleLength.minimumWords || words > rules.targetArticleLength.maximumWords)) {
      wordCountFailures.push({ slug: record.slug, words });
    }

    const body = getArticleBody(html);
    const hash = createHash("sha256").update(body.toLowerCase().replace(/\s+/g, " ")).digest("hex");
    if (!bodyHashes.has(hash)) bodyHashes.set(hash, []);
    bodyHashes.get(hash).push(record.slug);

    const modules = [...html.matchAll(/class=["'][^"']*\bblog-post-visual\s+([a-z0-9-]+)[^"']*["']/gi)].map((match) => match[1]);
    if (/^Batch \d+$/.test(record.batch) && modules.length !== 1) visualModuleFailures.push({ slug: record.slug, count: modules.length });
    for (const family of modules) {
      if (!visualFamilies.has(family)) visualFamilies.set(family, []);
      visualFamilies.get(family).push(record.slug);
      const batchKey = `${record.batch}:${family}`;
      if (!visualFamiliesByBatch.has(batchKey)) visualFamiliesByBatch.set(batchKey, []);
      visualFamiliesByBatch.get(batchKey).push(record.slug);
    }

    for (const reference of localReferences(html)) {
      if (/^(?:https?:|mailto:|tel:|data:|#)/i.test(reference)) continue;
      const relative = reference.split("#")[0].split("?")[0];
      if (!relative) continue;
      const resolved = path.resolve(path.dirname(file), decodeURIComponent(relative));
      if (!(await exists(resolved))) brokenLinks.push({ slug: record.slug, reference });
    }
    for (const relatedSlug of record.relatedArticles ?? []) {
      if (!plan.some((candidate) => candidate.slug === relatedSlug) || !(await exists(path.join(BLOG_DIR, relatedSlug, "index.html")))) {
        relatedReferenceFailures.push({ slug: record.slug, relatedSlug });
      }
    }

    const text = compactText(html);
    if (/\b(?:lorem ipsum|placeholder|todo|tbd|coming soon)\b/i.test(text)) placeholderFlags.push(record.slug);
    if (/\b(?:artificial intelligence|generated by ai|as an ai|\bAI\b)\b/i.test(text)) aiWordingFlags.push(record.slug);
    const numericClaims = claimContexts(text, /(?:\$\s?\d[\d,.]*|\b\d+(?:\.\d+)?%)/g);
    if (numericClaims.length) unsupportedStatisticFlags.push({ slug: record.slug, contexts: numericClaims });
    const guaranteeContexts = claimContexts(
      text,
      /\bguarantee(?:d|s)?\s+(?:result|outcome|revenue|growth|sales|performance|return|conversion|profit)s?\b/gi
    ).filter((context) =>
      !/\b(?:no|not|cannot|can't|without|avoid|avoiding|claiming|does not|do not)\b[^.]{0,55}\bguarantee/i.test(context)
    );
    if (guaranteeContexts.length) guaranteedResultFlags.push({ slug: record.slug, contexts: guaranteeContexts });
    if ([...html.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/gi)].some((match) => compactText(match[1]).length === 0)) {
      emptySectionFlags.push(record.slug);
    }
    articleDetails.push({ slug: record.slug, status: record.status, batch: record.batch, words, visualModule: modules[0] ?? null });
  }

  const duplicateBodies = [...bodyHashes.entries()]
    .filter(([, slugs]) => slugs.length > 1)
    .map(([hash, slugs]) => ({ hash, slugs }));
  const creativeModuleReuse = [...visualFamilies.entries()]
    .map(([family, articles]) => ({ family, reuseCount: articles.length, articles }))
    .sort((a, b) => b.reuseCount - a.reuseCount || a.family.localeCompare(b.family));
  const excessiveCreativeReuse = [...visualFamiliesByBatch.entries()]
    .filter(([, articles]) => articles.length > rules.visualPresentation.maximumUsesPerStructurePerBatch)
    .map(([key, articles]) => {
      const split = key.indexOf(":");
      return { batch: key.slice(0, split), family: key.slice(split + 1), reuseCount: articles.length, articles };
    });

  const publicIndex = buildPublicIndexData(posts);
  const draftPosts = posts.filter((post) => post.status === "draft");
  const draftUrlFailures = draftPosts.filter((post) => post.url !== null);
  const publicHtml = `${await readFile(path.join(BLOG_DIR, "index.html"), "utf8")}\n${await readFile(path.join(BLOG_DIR, "category", "index.html"), "utf8")}`;
  const publiclyExposedDrafts = plannedDrafts.filter((record) => publicHtml.includes(record.slug)).map((record) => record.slug);
  const orphanPostRecords = posts.filter((post) => !plan.some((record) => record.slug === post.slug)).map((post) => post.slug);
  const publishedWithoutPlan = publicIndex.filter((post) => !plan.some((record) => record.slug === post.slug)).map((post) => post.slug);

  const sitemapFile = path.join(BLOG_DIR, "sitemap.xml");
  const rssFile = path.join(BLOG_DIR, "feed.xml");
  const sitemapXml = await exists(sitemapFile) ? await readFile(sitemapFile, "utf8") : "";
  const rssXml = await exists(rssFile) ? await readFile(rssFile, "utf8") : "";
  const sitemapEntryCount = (sitemapXml.match(/<url>/g) ?? []).length;
  const rssEntryCount = (rssXml.match(/<item>/g) ?? []).length;
  const sitemapDraftLeaks = plannedDrafts.filter((record) => sitemapXml.includes(record.slug)).map((record) => record.slug);
  const rssDraftLeaks = plannedDrafts.filter((record) => rssXml.includes(record.slug)).map((record) => record.slug);

  const browserFailures = browserQa
    ? browserQa.pages.filter((page) => page.overflow || page.clipping || page.consoleErrors || page.failedRequests || page.mobileMenu === false)
    : [];
  const criticalCount =
    (plannedDrafts.length !== 60 ? 1 : 0) +
    (publishedPlan.length !== 1 ? 1 : 0) +
    (plannedDrafts.filter((record) => record.generated === true).length !== 60 ? 1 : 0) +
    duplicateTitles.length + duplicateSlugs.length + missingMetadata.length + invalidCategories.length +
    wordCountFailures.length + brokenLinks.length + relatedReferenceFailures.length + placeholderFlags.length +
    aiWordingFlags.length + unsupportedStatisticFlags.length + guaranteedResultFlags.length + emptySectionFlags.length +
    duplicateBodies.length + visualModuleFailures.length + excessiveCreativeReuse.length +
    draftUrlFailures.length + publiclyExposedDrafts.length + sitemapDraftLeaks.length + rssDraftLeaks.length +
    (sitemapXml && sitemapEntryCount !== publicIndex.length + 2 ? 1 : 0) +
    (rssXml && rssEntryCount !== publicIndex.length ? 1 : 0) + browserFailures.length;

  return {
    generatedAt: new Date().toISOString(),
    totalPlanned: plannedDrafts.length,
    totalGenerated: plannedDrafts.filter((record) => record.generated === true && generatedSlugs.has(record.slug)).length,
    totalDrafts: plannedDrafts.filter((record) => record.status === "draft").length,
    totalPublished: publicIndex.length,
    duplicateTitleCount: duplicateTitles.length,
    duplicateSlugCount: duplicateSlugs.length,
    brokenLinkCount: brokenLinks.length + relatedReferenceFailures.length,
    missingMetadataCount: missingMetadata.length,
    invalidCategoryCount: invalidCategories.length,
    wordCountFailures,
    creativeModuleReuse,
    sitemapEntryCount,
    rssEntryCount,
    publishingReadinessVerdict: criticalCount === 0
      ? "BLOG LIBRARY READY"
      : "BLOG LIBRARY BLOCKED",
    details: {
      articleDetails,
      duplicateTitles,
      duplicateSlugs,
      missingMetadata,
      invalidCategories,
      brokenLinks,
      relatedReferenceFailures,
      placeholderFlags,
      aiWordingFlags,
      unsupportedStatisticFlags,
      guaranteedResultFlags,
      emptySectionFlags,
      duplicateBodies,
      visualModuleFailures,
      excessiveCreativeReuse,
      draftRegistryCount: draftPosts.length,
      draftUrlFailures: draftUrlFailures.map((post) => post.slug),
      publiclyExposedDrafts,
      sitemapDraftLeaks,
      rssDraftLeaks,
      orphanPostRecords,
      publishedWithoutPlan,
      publicIndex,
      browserQa,
      browserFailures,
    },
  };
}

export async function writeQaReport(browserQa = null) {
  const report = await validateLibrary({ browserQa });
  await writeFile(path.join(DATA_DIR, "qa-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  const { posts } = await loadBlogData();
  const publicIndex = buildPublicIndexData(posts);
  console.log(JSON.stringify({
    publicArticleCount: publicIndex.length,
    publicArticles: publicIndex,
    qaReport: "blog/data/qa-report.json",
    verdict: report.publishingReadinessVerdict,
  }, null, 2));
  return report;
}

async function main() {
  const argv = globalThis.process?.argv ?? [];
  const browserFlag = argv.indexOf("--browser-report");
  const browserQa = browserFlag >= 0 && argv[browserFlag + 1]
    ? await readJson(path.resolve(ROOT, argv[browserFlag + 1]))
    : null;
  await writeQaReport(browserQa);
}

if (Array.isArray(globalThis.process?.argv) && globalThis.process.argv[1] && import.meta.url === pathToFileURL(globalThis.process.argv[1]).href) {
  main().catch((error) => {
    console.error(error);
    globalThis.process.exitCode = 1;
  });
}
