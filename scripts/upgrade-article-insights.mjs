import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const POSTS_FILE = path.join(ROOT, "blog", "data", "posts.json");
const WRITE = process.argv.includes("--write");
const VERIFY_HEAD = process.argv.includes("--verify-head");

const PATTERN_KIND = Object.freeze({
  "blog-visual-audit": "decision-framework",
  "blog-visual-channel-map": "layered-architecture",
  "blog-visual-checklist": "decision-framework",
  "blog-visual-compare": "comparison-diagram",
  "blog-visual-decision": "decision-framework",
  "blog-visual-framework": "layered-architecture",
  "blog-visual-funnel": "process-flow",
  "blog-visual-layers": "layered-architecture",
  "blog-visual-matrix": "comparison-diagram",
  "blog-visual-orbit": "process-flow",
  "blog-visual-pillars": "layered-architecture",
  "blog-visual-process": "process-flow",
  "blog-visual-scorecard": "measurement-system",
  "blog-visual-timeline": "process-flow",
  "blog-visual-troubleshoot": "decision-framework",
});

const ARTICLE_KIND_OVERRIDES = Object.freeze({
  "abandoned-cart-email-strategy": "process-flow",
  "ecommerce-offer-testing-framework": "decision-framework",
  "ecommerce-seo-foundations": "layered-architecture",
  "ga4-ecommerce-measurement-plan": "measurement-system",
  "google-search-campaign-structure": "layered-architecture",
  "lead-generation-measurement-framework": "measurement-system",
  "marketing-tracking-audit-checklist": "measurement-system",
  "meta-capi-vs-browser-tracking": "comparison-diagram",
  "social-media-competitor-analysis": "comparison-diagram",
});

const slugify = (value) => String(value)
  .toLowerCase()
  .replaceAll("&", "and")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const visibleText = (html) => html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const patternFrom = (html) => {
  const match = html.match(/class="blog-post-visual[^\"]*\b(blog-visual-[a-z0-9-]+)\b[^\"]*"/);
  return match?.[1] ?? null;
};

const setAttribute = (tag, name, value) => {
  const pattern = new RegExp("\\s" + name + "=\"[^\"]*\"", "i");
  return pattern.test(tag)
    ? tag.replace(pattern, " " + name + "=\"" + value + "\"")
    : tag.replace(/>$/, " " + name + "=\"" + value + "\">");
};

const upgradePage = (html, post) => {
  const pattern = patternFrom(html);
  if (!pattern) return { html, pattern: null, kind: null, changed: false };
  const defaultKind = PATTERN_KIND[pattern];
  if (!defaultKind) throw new Error("Unknown visual pattern " + pattern + " in " + post.slug + ".");
  const kind = ARTICLE_KIND_OVERRIDES[post.slug] ?? defaultKind;
  const topic = slugify(post.category);
  const heroPattern = /<div\b[^>]*class="[^"]*\bblog-post-hero\b[^"]*"[^>]*>/i;
  const heroTag = html.match(heroPattern)?.[0] ?? "";
  const label = heroTag.match(/\baria-label="([^"]+)"/i)?.[1];
  if (!label) throw new Error("Insight label missing in " + post.slug + ".");

  let next = html.replace(heroPattern, (tag) => {
    const classes = tag.match(/\bclass="([^"]*)"/i)?.[1].split(/\s+/).filter(Boolean) ?? [];
    if (!classes.includes("blog-insight-block")) classes.push("blog-insight-block");
    let updated = setAttribute(tag, "class", classes.join(" "));
    updated = setAttribute(updated, "role", "group");
    updated = setAttribute(updated, "data-insight-kind", kind);
    return setAttribute(updated, "data-insight-topic", topic);
  });
  next = next.replace(
    new RegExp("<div\\s+class=\"blog-post-visual(?: blog-insight-diagram)? " + pattern + "(?: blog-insight-diagram)?\"(?:\\s+aria-hidden=\"true\")?\\s*>"),
    "<div class=\"blog-post-visual " + pattern + " blog-insight-diagram\">",
  );

  if (visibleText(next) !== visibleText(html)) throw new Error("Visible article text changed in " + post.slug + ".");
  return { html: next, pattern, kind, changed: next !== html };
};

export async function auditAndUpgrade({ write = WRITE } = {}) {
  const posts = JSON.parse(await readFile(POSTS_FILE, "utf8"));
  const published = posts.filter((post) => post.status === "published");
  const report = [];

  for (const post of published) {
    const file = path.join(ROOT, "blog", post.slug, "index.html");
    const html = await readFile(file, "utf8");
    const relative = path.relative(ROOT, file).replaceAll(path.sep, "/");
    const headTextMatches = !VERIFY_HEAD || visibleText(execFileSync("git", ["show", `HEAD:${relative}`], { cwd: ROOT, encoding: "utf8" })) === visibleText(html);
    const result = upgradePage(html, post);
    if (write && result.changed) await writeFile(file, result.html, "utf8");
    report.push({ slug: post.slug, category: post.category, pattern: result.pattern, kind: result.kind, changed: result.changed, headTextMatches });
  }

  const applicable = report.filter((item) => item.pattern);
  const kinds = Object.fromEntries([...new Set(applicable.map((item) => item.kind))]
    .sort()
    .map((kind) => [kind, applicable.filter((item) => item.kind === kind).length]));
  const patterns = Object.fromEntries([...new Set(applicable.map((item) => item.pattern))]
    .sort()
    .map((pattern) => [pattern, applicable.filter((item) => item.pattern === pattern).length]));

  if (report.length !== published.length) throw new Error(`Expected every published article to be audited; found ${report.length} of ${published.length}.`);
  if (Object.keys(kinds).length !== 5) throw new Error(`Expected five diagram families; found ${Object.keys(kinds).length}.`);
  if (VERIFY_HEAD && report.some((item) => !item.headTextMatches)) throw new Error("Visible article text differs from HEAD.");

  return {
    published: published.length,
    applicable: applicable.length,
    withoutInsight: report.filter((item) => !item.pattern).map((item) => item.slug),
    kinds,
    patterns,
    changed: report.filter((item) => item.changed).length,
    visibleTextMismatches: VERIFY_HEAD ? report.filter((item) => !item.headTextMatches).map((item) => item.slug) : null,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(await auditAndUpgrade(), null, 2));
}
