import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOG_DIR = path.join(ROOT, "blog");
const POSTS_FILE = path.join(BLOG_DIR, "data", "posts.json");
const WRITE = process.argv.includes("--write");
const RELATED_SECTION = /<section\s+class="blog-section blog-related"[^>]*>[\s\S]*?<\/section>/i;
const CTA_SECTION = /<section\s+class="blog-section blog-cta-section"[^>]*>[\s\S]*?<\/section>/i;

const STOP_WORDS = new Set([
  "about", "after", "against", "also", "among", "and", "article", "better", "build", "business", "checklist",
  "choose", "content", "create", "creating", "explained", "for", "framework", "from", "guide", "how", "into",
  "marketing", "more", "plan", "planning", "practical", "strategy", "system", "that", "the", "their", "this",
  "through", "using", "what", "when", "where", "which", "with", "without", "your",
]);

const RELATED_CATEGORIES = Object.freeze({
  "Social Media Strategy": ["Content Marketing", "Creative Strategy", "Paid Media"],
  "Paid Media": ["Creative Strategy", "Tracking & Analytics", "Ecommerce & CRO"],
  "Ecommerce & CRO": ["Paid Media", "Email Marketing", "Tracking & Analytics", "SEO"],
  "Tracking & Analytics": ["Paid Media", "Marketing Automation", "Business Growth Systems"],
  "Creative Strategy": ["Paid Media", "Content Marketing", "Social Media Strategy"],
  "Content Marketing": ["Social Media Strategy", "Creative Strategy", "SEO"],
  "Email Marketing": ["Ecommerce & CRO", "Marketing Automation", "Content Marketing"],
  "Marketing Automation": ["Email Marketing", "Tracking & Analytics", "Business Growth Systems"],
  "SEO": ["Content Marketing", "Ecommerce & CRO", "Tracking & Analytics"],
  "Business Growth Systems": ["Marketing Automation", "Tracking & Analytics", "Content Marketing"],
});

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const tokensFor = (post) => new Set(`${post.title} ${post.excerpt ?? ""} ${post.slug}`
  .toLowerCase()
  .replaceAll("&", " and ")
  .split(/[^a-z0-9]+/)
  .filter((token) => token.length >= 3 && !STOP_WORDS.has(token)));

const overlapCount = (left, right) => [...left].filter((token) => right.has(token)).length;

const relationSlugsFrom = (html) => {
  const section = html.match(RELATED_SECTION)?.[0] ?? "";
  const storedMatch = section.match(/\bdata-source-relations="([^"]*)"/i);
  if (storedMatch) {
    const stored = storedMatch[1].split(",").map((slug) => slug.trim()).filter(Boolean);
    return [...new Set(stored)];
  }
  return [...new Set([...section.matchAll(/href="\.\.\/([^/]+)\//gi)].map((match) => match[1]))];
};

const eligiblePost = (post) => post.status === "published"
  && typeof post.slug === "string" && post.slug.length > 0
  && typeof post.title === "string" && post.title.length > 0
  && typeof post.category === "string" && post.category.length > 0
  && typeof post.readingTime === "string" && post.readingTime.length > 0
  && post.url === `./${post.slug}/`
  && typeof post.cover?.src === "string" && post.cover.src.length > 0
  && typeof post.cover?.alt === "string" && post.cover.alt.trim().length > 0
  && Number(post.cover?.width) > 0 && Number(post.cover?.height) > 0;

export function selectRelatedPosts(current, candidates, sourceRelations = []) {
  const currentTokens = tokensFor(current);
  const sourceSet = new Set(sourceRelations);
  const adjacent = new Set(RELATED_CATEGORIES[current.category] ?? []);

  return candidates
    .filter((candidate) => candidate.slug !== current.slug && eligiblePost(candidate))
    .map((candidate) => {
      const overlap = overlapCount(currentTokens, tokensFor(candidate));
      const sameCategory = candidate.category === current.category;
      const sourceRelation = sourceSet.has(candidate.slug);
      const adjacentCategory = adjacent.has(candidate.category);
      const tier = sameCategory ? 0 : overlap > 0 ? 1 : sourceRelation ? 2 : adjacentCategory ? 3 : 4;
      return { post: candidate, tier, overlap, sourceRelation };
    })
    .sort((left, right) => left.tier - right.tier
      || right.overlap - left.overlap
      || Number(right.sourceRelation) - Number(left.sourceRelation)
      || left.post.slug.localeCompare(right.post.slug))
    .slice(0, 3);
}

const articleHref = (post) => post.url.replace(/^\.\//, "../");
const articleCoverSrc = (post) => `../${post.cover.src}`;

export function renderRelatedSection(current, selected, sourceRelations) {
  if (selected.length < 2) throw new Error(`Fewer than two eligible related articles for ${current.slug}.`);
  const cards = selected.map(({ post }) => `        <article class="blog-related-card" data-related-slug="${escapeHtml(post.slug)}">
          <a class="blog-related-card-link" href="${escapeHtml(articleHref(post))}">
            <span class="blog-related-card-media">
              <img src="${escapeHtml(articleCoverSrc(post))}" width="${Number(post.cover.width)}" height="${Number(post.cover.height)}" loading="lazy" decoding="async" alt="${escapeHtml(post.cover.alt)}" />
            </span>
            <span class="blog-related-card-body">
              <span class="blog-related-card-category">${escapeHtml(post.category)}</span>
              <h3 class="blog-related-card-title">${escapeHtml(post.title)}</h3>
              <span class="blog-related-card-time">${escapeHtml(post.readingTime)}</span>
            </span>
          </a>
        </article>`).join("\n");

  return `<section class="blog-section blog-related" aria-labelledby="related-articles" data-source-relations="${escapeHtml(sourceRelations.join(","))}">
  <div class="blog-shell">
    <div class="blog-related-header">
      <p class="blog-eyebrow">Continue reading</p>
      <h2 id="related-articles">Related articles</h2>
    </div>
    <div class="blog-related-grid">
${cards}
    </div>
  </div>
</section>`;
}

const withoutRelatedSection = (html) => html.replace(RELATED_SECTION, "").replace(/>\s+</g, "><");

export async function upgradeRelatedArticles({ write = WRITE } = {}) {
  const posts = JSON.parse(await readFile(POSTS_FILE, "utf8"));
  const published = posts.filter((post) => post.status === "published");
  const eligible = published.filter(eligiblePost);
  if (published.length !== 61) throw new Error(`Expected 61 published articles; found ${published.length}.`);
  if (eligible.length !== published.length) throw new Error(`Expected 61 eligible published records; found ${eligible.length}.`);

  for (const post of eligible) {
    await access(path.resolve(BLOG_DIR, post.cover.src));
  }

  const report = [];
  for (const post of eligible) {
    const file = path.join(BLOG_DIR, post.slug, "index.html");
    const html = await readFile(file, "utf8");
    const sourceRelations = relationSlugsFrom(html).filter((slug) => slug !== post.slug);
    const selected = selectRelatedPosts(post, eligible, sourceRelations);
    const section = renderRelatedSection(post, selected, sourceRelations);
    const withoutRelated = html.replace(RELATED_SECTION, "").replace(/[ \t]+(?=\r?\n|$)/gm, "").replace(/\s+(?=<\/article>)/i, "");
    const next = CTA_SECTION.test(withoutRelated)
      ? withoutRelated.replace(CTA_SECTION, (cta) => `${cta}\n${section}`)
      : withoutRelated;

    if (!CTA_SECTION.test(html)) throw new Error(`Unable to locate CTA section for ${post.slug}.`);
    if (withoutRelatedSection(next) !== withoutRelatedSection(html)) throw new Error(`Non-related article markup changed in ${post.slug}.`);
    if (write && next !== html) await writeFile(file, next, "utf8");

    report.push({
      slug: post.slug,
      sourceRelations,
      selected: selected.map(({ post: related, tier, overlap }) => ({ slug: related.slug, category: related.category, tier, overlap })),
      changed: next !== html,
    });
  }

  return {
    published: published.length,
    eligible: eligible.length,
    pages: report.length,
    cards: report.reduce((total, item) => total + item.selected.length, 0),
    changed: report.filter((item) => item.changed).length,
    globalFallbacks: report.flatMap((item) => item.selected).filter((item) => item.tier === 4).length,
    report,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(await upgradeRelatedArticles(), null, 2));
}
