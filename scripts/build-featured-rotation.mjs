import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BLOG_DIR = path.join(ROOT, "blog");
const POSTS_FILE = path.join(BLOG_DIR, "data", "posts.json");
const ROTATION_FILE = path.join(BLOG_DIR, "data", "featured-rotation.json");
const INDEX_FILE = path.join(BLOG_DIR, "index.html");
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const LOOKBACK_WEEKS = 8;
const FUTURE_WEEKS = 52;
const DEFAULT_FALLBACK_SLUG = "how-to-create-a-social-media-marketing-plan-that-drives-results";

const exists = (file) => access(file).then(() => true, () => false);
const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function attribute(markup, name) {
  return markup.match(new RegExp(`\\b${name}=["']([^"']+)["']`, "i"))?.[1] ?? "";
}

export function utcMondayWeekId(value = new Date()) {
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);
  if (Number.isNaN(date.getTime())) throw new TypeError("A valid date is required.");
  const midnight = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const day = new Date(midnight).getUTCDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  return new Date(midnight + mondayOffset * 86400000).toISOString().slice(0, 10);
}

export function addUtcWeeks(weekId, count) {
  const date = new Date(`${weekId}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || utcMondayWeekId(date) !== weekId) throw new TypeError(`Invalid UTC Monday week: ${weekId}`);
  return new Date(date.getTime() + count * WEEK_MS).toISOString().slice(0, 10);
}

export function isStructurallyEligible(post) {
  return Boolean(
    post &&
    post.status === "published" &&
    typeof post.slug === "string" && post.slug.trim() &&
    typeof post.title === "string" && post.title.trim() &&
    typeof post.category === "string" && post.category.trim() &&
    typeof post.excerpt === "string" && post.excerpt.trim() &&
    /^\d{4}-\d{2}-\d{2}$/.test(post.date ?? "") &&
    typeof post.readingTime === "string" && post.readingTime.trim() &&
    typeof post.url === "string" && /^\.\/[a-z0-9-]+\/$/.test(post.url) &&
    post.cover &&
    typeof post.cover.src === "string" && /^\.\.\/assets\/images\/blog\/[a-z0-9-]+\.jpg$/.test(post.cover.src) &&
    typeof post.cover.alt === "string" && post.cover.alt.trim().length >= 20 &&
    post.cover.width === 1280 && post.cover.height === 720
  );
}

export function extractCoverMetadata(indexHtml) {
  const covers = new Map();
  for (const match of indexHtml.matchAll(/<article\b[^>]*class=["'][^"']*\bblog-article-card\b[^"']*["'][^>]*>([\s\S]*?)<\/article>/gi)) {
    const article = match[1];
    const image = article.match(/<img\b[^>]*class=["'][^"']*\bblog-card-cover\b[^"']*["'][^>]*>/i)?.[0] ?? "";
    const href = attribute(article.match(/<a\b[^>]*class=["'][^"']*\bblog-read-link\b[^"']*["'][^>]*>/i)?.[0] ?? "", "href");
    const slug = href.match(/(?:^|\.\.\/)([a-z0-9-]+)\/$/)?.[1];
    if (!slug || !image) continue;
    covers.set(slug, {
      src: attribute(image, "src"),
      alt: attribute(image, "alt"),
      width: Number(attribute(image, "width")),
      height: Number(attribute(image, "height")),
    });
  }
  return covers;
}

export function attachCoverMetadata(posts, indexHtml) {
  const covers = extractCoverMetadata(indexHtml);
  return posts.map((post) => post.status === "published" && covers.has(post.slug)
    ? { ...post, cover: covers.get(post.slug) }
    : post);
}

export async function eligibleFeaturedArticles(posts, root = ROOT) {
  const unique = new Set();
  const eligible = [];
  for (const post of posts) {
    if (!isStructurallyEligible(post) || unique.has(post.slug)) continue;
    const articleFile = path.resolve(BLOG_DIR, post.url, "index.html");
    const coverFile = path.resolve(BLOG_DIR, post.cover.src);
    if (!articleFile.startsWith(BLOG_DIR) || !coverFile.startsWith(root)) continue;
    if (!(await exists(articleFile)) || !(await exists(coverFile))) continue;
    unique.add(post.slug);
    eligible.push(post);
  }
  return eligible.sort((a, b) => a.slug.localeCompare(b.slug));
}

export function selectFeaturedSlug(eligible, assignments, week) {
  const slugs = new Set(eligible.map((post) => post.slug));
  const existing = assignments.find((item) => item.week === week);
  if (existing && slugs.has(existing.slug)) return existing.slug;

  const history = assignments
    .filter((item) => item.week < week && slugs.has(item.slug))
    .sort((a, b) => a.week.localeCompare(b.week));
  const excluded = new Set(history.slice(-LOOKBACK_WEEKS).map((item) => item.slug));
  const candidates = eligible.filter((post) => !excluded.has(post.slug));
  if (!candidates.length) return eligible[0]?.slug ?? null;

  const lastFeatured = new Map();
  history.forEach((item) => lastFeatured.set(item.slug, item.week));
  return candidates
    .slice()
    .sort((a, b) => (lastFeatured.get(a.slug) ?? "").localeCompare(lastFeatured.get(b.slug) ?? "") || a.slug.localeCompare(b.slug))[0].slug;
}

export function validateRotation(rotation, eligible) {
  const errors = [];
  const eligibleSlugs = new Set(eligible.map((post) => post.slug));
  if (!rotation || rotation.schemaVersion !== 1) errors.push("schemaVersion must be 1");
  if (rotation?.timeZone !== "UTC") errors.push("timeZone must be UTC");
  if (rotation?.weekStarts !== "Monday") errors.push("weekStarts must be Monday");
  if (rotation?.lookbackWeeks !== LOOKBACK_WEEKS) errors.push("lookbackWeeks must be 8");
  if (!eligibleSlugs.has(rotation?.fallbackSlug)) errors.push("fallbackSlug must be eligible");
  if (!Array.isArray(rotation?.assignments)) return [...errors, "assignments must be an array"];

  const seenWeeks = new Set();
  const prior = [];
  let previousWeek = "";
  for (const assignment of rotation.assignments) {
    const validWeek = /^\d{4}-\d{2}-\d{2}$/.test(assignment?.week ?? "") && utcMondayWeekId(`${assignment.week}T00:00:00.000Z`) === assignment.week;
    if (!validWeek) errors.push(`invalid week: ${assignment?.week ?? "missing"}`);
    if (seenWeeks.has(assignment?.week)) errors.push(`duplicate week: ${assignment.week}`);
    if (previousWeek && assignment.week <= previousWeek) errors.push("assignments must be chronological");
    if (!eligibleSlugs.has(assignment?.slug)) errors.push(`ineligible slug: ${assignment?.slug ?? "missing"}`);
    if (prior.slice(-LOOKBACK_WEEKS).some((item) => item.slug === assignment?.slug)) errors.push(`lookback repeat: ${assignment.slug} in ${assignment.week}`);
    seenWeeks.add(assignment?.week);
    previousWeek = assignment?.week ?? previousWeek;
    prior.push(assignment);
  }
  return errors;
}

export function generateRotation(eligible, existing, startWeek, futureWeeks = FUTURE_WEEKS) {
  if (eligible.length < LOOKBACK_WEEKS + 1) throw new Error("At least nine eligible articles are required for strict eight-week exclusion.");
  const existingErrors = validateRotation(existing, eligible);
  const fallbackSlug = eligible.some((post) => post.slug === existing?.fallbackSlug)
    ? existing.fallbackSlug
    : (eligible.find((post) => post.slug === DEFAULT_FALLBACK_SLUG)?.slug ?? eligible[0].slug);
  const assignments = existingErrors.length ? [] : existing.assignments.filter((item) => item.week < startWeek);
  if (
    !assignments.length &&
    !existing.assignments.some((item) => item.week === startWeek) &&
    eligible.some((post) => post.slug === DEFAULT_FALLBACK_SLUG)
  ) {
    assignments.push({ week: addUtcWeeks(startWeek, -1), slug: DEFAULT_FALLBACK_SLUG });
  }
  for (let offset = 0; offset <= futureWeeks; offset++) {
    const week = addUtcWeeks(startWeek, offset);
    const preserved = existingErrors.length ? null : existing.assignments.find((item) => item.week === week);
    const slug = preserved?.slug ?? selectFeaturedSlug(eligible, assignments, week);
    assignments.push({ week, slug });
  }
  return {
    rotation: {
      schemaVersion: 1,
      timeZone: "UTC",
      weekStarts: "Monday",
      lookbackWeeks: LOOKBACK_WEEKS,
      minimumStrictPool: LOOKBACK_WEEKS + 1,
      generatedAt: `${startWeek}T00:00:00.000Z`,
      generatedThroughWeek: addUtcWeeks(startWeek, futureWeeks),
      fallbackSlug,
      assignments: assignments.sort((a, b) => a.week.localeCompare(b.week)),
    },
    warnings: existingErrors.map((error) => `Ignored malformed rotation history: ${error}`),
  };
}

export function resolveScheduledFeature(posts, rotation, week) {
  const eligible = posts.filter(isStructurallyEligible).sort((a, b) => a.slug.localeCompare(b.slug));
  const errors = validateRotation(rotation, eligible);
  const scheduled = errors.length ? null : rotation.assignments.find((item) => item.week === week);
  const selected = eligible.find((post) => post.slug === scheduled?.slug)
    ?? eligible.find((post) => post.slug === rotation?.fallbackSlug)
    ?? eligible[0]
    ?? null;
  return { selected, errors };
}

export function featuredPayload(post) {
  return {
    slug: post.slug,
    category: post.category,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    dateLabel: new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${post.date}T00:00:00.000Z`)),
    readingTime: post.readingTime,
    url: post.url,
    cover: { ...post.cover },
  };
}

export function renderFeaturedSection(post) {
  const data = featuredPayload(post);
  return `      <section class="blog-section blog-featured-section" aria-labelledby="featured-title" data-featured-section>
        <div class="blog-shell">
          <div class="blog-section-heading">
            <div>
              <p class="blog-eyebrow">Featured Insight</p>
              <h2 id="featured-title">Featured this week</h2>
            </div>
            <p>One practical guide selected from the DaDaStore Knowledge Library.</p>
          </div>

          <article class="blog-featured-card" data-featured-card data-featured-slug="${escapeHtml(data.slug)}">
            <div class="blog-featured-visual">
              <img class="blog-featured-cover" src="${escapeHtml(data.cover.src)}" width="${data.cover.width}" height="${data.cover.height}" loading="eager" decoding="async" alt="${escapeHtml(data.cover.alt)}" data-featured-image />
            </div>
            <div class="blog-featured-copy">
              <div class="blog-card-kicker"><span data-featured-category>${escapeHtml(data.category)}</span></div>
              <h3 data-featured-title>${escapeHtml(data.title)}</h3>
              <p data-featured-excerpt>${escapeHtml(data.excerpt)}</p>
              <div class="blog-card-meta">
                <time datetime="${data.date}" data-featured-date>${escapeHtml(data.dateLabel)}</time>
                <span data-featured-reading-time>${escapeHtml(data.readingTime)}</span>
              </div>
              <a class="blog-read-link" href="${escapeHtml(data.url)}" data-featured-link>Read Article <span aria-hidden="true">→</span></a>
            </div>
          </article>
        </div>
      </section>`;
}

export function replaceFeaturedSection(indexHtml, post) {
  const replacement = renderFeaturedSection(post);
  const pattern = /      <section class="blog-section blog-featured-section"[\s\S]*?      <\/section>/;
  if (!pattern.test(indexHtml)) throw new Error("Featured section markup was not found.");
  return indexHtml.replace(pattern, replacement);
}

export async function buildFeaturedRotation({ now = new Date() } = {}) {
  const indexHtml = await readFile(INDEX_FILE, "utf8");
  const originalPosts = await readJson(POSTS_FILE);
  const posts = attachCoverMetadata(originalPosts, indexHtml);
  const eligible = await eligibleFeaturedArticles(posts);
  if (eligible.length !== 61) throw new Error(`Expected 61 eligible published articles; found ${eligible.length}.`);

  let existing = null;
  if (await exists(ROTATION_FILE)) {
    try { existing = await readJson(ROTATION_FILE); }
    catch (error) { console.warn(`[featured-rotation] Ignoring malformed JSON: ${error.message}`); }
  }
  const startWeek = utcMondayWeekId(now);
  const seed = existing ?? {
    schemaVersion: 1, timeZone: "UTC", weekStarts: "Monday", lookbackWeeks: LOOKBACK_WEEKS,
    minimumStrictPool: LOOKBACK_WEEKS + 1, fallbackSlug: DEFAULT_FALLBACK_SLUG, assignments: [],
  };
  const { rotation, warnings } = generateRotation(eligible, seed, startWeek);
  warnings.forEach((warning) => console.warn(`[featured-rotation] ${warning}`));
  const { selected, errors } = resolveScheduledFeature(posts, rotation, startWeek);
  if (!selected || errors.length) throw new Error(`Unable to resolve current feature: ${errors.join("; ")}`);

  await writeFile(POSTS_FILE, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
  await writeFile(ROTATION_FILE, `${JSON.stringify(rotation, null, 2)}\n`, "utf8");
  await writeFile(INDEX_FILE, replaceFeaturedSection(indexHtml, selected), "utf8");
  return { eligible: eligible.length, selected: selected.slug, startWeek, assignments: rotation.assignments.length, generatedThroughWeek: rotation.generatedThroughWeek };
}

if (globalThis.process?.argv?.[1] && import.meta.url === pathToFileURL(globalThis.process.argv[1]).href) {
  const dateFlag = globalThis.process.argv.indexOf("--date");
  const now = dateFlag >= 0 ? new Date(globalThis.process.argv[dateFlag + 1]) : new Date();
  buildFeaturedRotation({ now }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error) => {
    console.error(error);
    globalThis.process.exitCode = 1;
  });
}
