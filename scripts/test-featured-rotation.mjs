import assert from "node:assert/strict";
import {
  addUtcWeeks,
  featuredPayload,
  generateRotation,
  isStructurallyEligible,
  resolveScheduledFeature,
  selectFeaturedSlug,
  utcMondayWeekId,
  validateRotation,
} from "./build-featured-rotation.mjs";

const post = (slug, overrides = {}) => ({
  slug,
  title: `Title ${slug}`,
  excerpt: `A sufficiently useful excerpt for ${slug}.`,
  category: "SEO",
  date: "2026-08-02",
  readingTime: "9 min read",
  featured: false,
  status: "published",
  url: `./${slug}/`,
  cover: { src: `../assets/images/blog/${slug}.jpg`, alt: `Meaningful cover description for ${slug}`, width: 1280, height: 720 },
  ...overrides,
});
const eligible = Array.from({ length: 12 }, (_, index) => post(`article-${String(index + 1).padStart(2, "0")}`));
const seed = { schemaVersion: 1, timeZone: "UTC", weekStarts: "Monday", lookbackWeeks: 8, minimumStrictPool: 9, fallbackSlug: eligible[0].slug, assignments: [] };

assert.equal(utcMondayWeekId("2026-08-03T00:00:00.000Z"), "2026-08-03");
assert.equal(utcMondayWeekId("2026-08-09T23:59:59.999Z"), "2026-08-03");
assert.equal(utcMondayWeekId("2026-08-10T00:00:00.000Z"), "2026-08-10");

const first = generateRotation(eligible, seed, "2026-08-03", 16).rotation;
const second = generateRotation(eligible, first, "2026-08-03", 16).rotation;
assert.deepEqual(second, first, "same-week rebuilds must be byte-stable at the data level");
assert.equal(validateRotation(first, eligible).length, 0);

const currentWeek = addUtcWeeks("2026-08-03", 8);
const history = first.assignments.filter((item) => item.week < currentWeek);
const previousEight = new Set(history.slice(-8).map((item) => item.slug));
assert.equal(previousEight.has(selectFeaturedSlug(eligible, history, currentWeek)), false);

const nine = eligible.slice(0, 9);
const nineHistory = nine.map((item, index) => ({ week: addUtcWeeks("2026-06-08", index), slug: item.slug }));
assert.equal(selectFeaturedSlug(nine, nineHistory, addUtcWeeks("2026-06-08", 9)), nine[0].slug, "ninth-week-old content may be eligible again");

assert.equal(isStructurallyEligible(post("draft", { status: "draft", url: null })), false);
assert.equal(isStructurallyEligible(post("no-url", { url: null })), false);
assert.equal(isStructurallyEligible(post("no-cover", { cover: null })), false);

const malformed = { ...seed, assignments: [{ week: "not-a-week", slug: "missing" }] };
const fallbackResult = resolveScheduledFeature(eligible, malformed, "2026-08-03");
assert.ok(fallbackResult.errors.length > 0);
assert.equal(fallbackResult.selected.slug, seed.fallbackSlug);

const payload = featuredPayload(eligible[2]);
assert.deepEqual(Object.keys(payload).sort(), ["category", "cover", "date", "dateLabel", "excerpt", "readingTime", "slug", "title", "url"].sort());
assert.equal(payload.cover.src, eligible[2].cover.src);

console.log(JSON.stringify({
  tests: 10,
  sameWeekStable: true,
  previousEightExcluded: true,
  ninthWeekEligible: true,
  malformedHistoryFallback: true,
  atomicFields: Object.keys(payload),
}, null, 2));
