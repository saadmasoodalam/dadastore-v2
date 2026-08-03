# Unit 5BJ — Orphaned Article Content and Article-Container Structure Fix

## 1. Status

Implemented as an HTML structure correction, source-level prevention update, full-library audit, automated regression test, and responsive browser verification. No article was rewritten, unpublished, deployed, committed, or pushed.

## 2. Purpose

Correct published article markup that allowed legitimate headings and paragraphs to render outside the approved charcoal reading surface, restore the required article/CTA/Related Articles order, and prevent the defect from returning during future Related Articles regeneration.

## 3. Project Owner report

The Project Owner supplied screenshots showing later article sections on the dark page shell instead of inside the charcoal reading container, including “Build an acquisition operating worksheet” and “Use a constraint review.” The screenshots also showed unusually large gaps produced by the broken container boundary.

## 4. Visible defect

The visible example was `client-acquisition-system-for-service-businesses`. Its `.blog-article-body` and `.blog-post-layout` wrappers closed before the final worksheet, constraint-review, evidence-pack, and review-cadence content. Those legitimate nodes therefore rendered as full-width shell content.

The audit also found the same premature body/layout boundary pattern in four other recently rebuilt articles.

## 5. Full-library audit

All 61 records with `status: published` in `blog/data/posts.json` were audited. The audit checked wrapper hierarchy and balance, substantive-node containment, CTA and Related Articles placement, empty section wrappers, heading IDs, table-of-contents targets, related-card count, and related-card destinations.

The initial audit found:

- five articles with 32 substantive nodes outside `.blog-article-body`;
- all 61 articles using the legacy body → Related Articles → CTA order;
- seven unresolved table-of-contents targets across three articles;
- no duplicate heading IDs, missing Related Articles sections, or related-card count failures.

## 6. Affected articles

### Orphaned substantive content

- `crm-lead-nurturing-automation` — six substantive nodes followed an early body/layout closure.
- `ecommerce-seo-foundations` — seven substantive nodes followed an early body/layout closure.
- `client-acquisition-system-for-service-businesses` — seven substantive nodes, including the two headings shown by the Project Owner, followed an early body/layout closure.
- `small-budget-marketing-plan` — six substantive nodes followed an early body/layout closure.
- `marketing-operating-system-for-small-teams` — six substantive nodes followed an early body/layout closure.

### Invalid TOC targets

- `landing-page-cro-for-paid-traffic` — `#score` lacked a target.
- `marketing-attribution-models-explained` — `#question`, `#tree`, and `#limits` lacked targets.
- `privacy-conscious-marketing-measurement` — `#principles`, `#ladder`, and `#consent` lacked targets.

### Legacy section order

All 61 published article pages placed Related Articles before the CTA. Unit 5BJ establishes body → CTA → Related Articles as the required order, so all 61 pages required a structural placement update.

## 7. Root cause

The orphaned-content defect originated in article markup: the body and layout closing tags appeared before complete authored content blocks. The content itself was intact and in the correct prose order; only its wrapper boundary was wrong.

The section-order defect originated in `scripts/upgrade-related-articles.mjs`. The updater replaced an existing Related Articles section in place, preserving whichever legacy position already existed. It did not normalize placement after the CTA.

The TOC defects were source-anchor omissions: navigation links named valid article concepts, but the corresponding existing content nodes did not expose those IDs.

The insight-diagram upgrader and shared reading CSS were not the cause of the orphaned body boundary.

## 8. Source-level correction

`scripts/upgrade-related-articles.mjs` now removes the existing Related Articles section and reinserts the same deterministic section immediately after the complete CTA. It requires a CTA marker, preserves the existing source-relation data, normalizes only boundary whitespace, and is idempotent: a dry rebuild reports zero changes.

`scripts/test-article-structure.mjs` now provides a 61-page structural gate so a premature reading-body closure, misplaced CTA/Related section, unresolved TOC target, broken related destination, or invalid wrapper cannot pass silently.

## 9. Article-specific corrections

For the five orphaned-content articles, the existing headings, paragraphs, and lists were moved inside `.blog-article-body` before the body/layout closing tags. Their order and wording were preserved. No substantive node was removed.

For the three TOC-defect articles, IDs were added to the already existing and semantically matching opening paragraph, insight module, heading, or scorecard. Visible labels and article wording did not change.

## 10. Restored structural order

Every published article now follows:

1. article header and cover;
2. article body and insight sections;
3. conclusion;
4. CTA as the final substantive article section;
5. Related Articles;
6. page footer/end-of-document structure.

The structural test reports zero content between CTA and Related Articles and zero substantive content after Related Articles.

## 11. Reading-container verification

Every substantive article heading, paragraph, list, blockquote, table, and preformatted block is now either inside `.blog-article-body` or inside an explicitly permitted header, CTA, or Related Articles region. The full-library test reports zero orphaned substantive nodes and zero premature wrapper closures.

Browser QA confirmed that the corrected reading surface remains contained at 390, 768, 1024, and 1440 pixels without horizontal overflow.

## 12. CTA placement verification

Each of the 61 pages has exactly one `.blog-cta-section`. It follows the completed article body and precedes Related Articles. No ordinary article content appears after the CTA.

## 13. Related Articles placement verification

Each page has exactly one `.blog-related` section after the CTA and exactly three compact cards. All 183 links resolve to published article records. Covers, categories, reading times, original source-relation data, and deterministic selection remain intact. A no-write regeneration reports zero pending changes and zero global fallbacks.

## 14. TOC verification

All table-of-contents fragments resolve exactly once, and every target is inside the article reading body. Heading IDs are unique across every page. Final failures: zero broken targets and zero duplicate heading IDs.

## 15. Files changed

- all 61 published `blog/<slug>/index.html` pages, for normalized CTA/Related placement;
- the five affected pages listed above, for body-boundary correction;
- the three TOC pages listed above, for missing target IDs;
- `scripts/upgrade-related-articles.mjs`;
- `scripts/test-article-structure.mjs`;
- `docs/UNIT_5BJ_ORPHANED_ARTICLE_CONTENT_STRUCTURE_FIX.md`.

The pre-existing unrelated modification to `blog/data/article-plan.json` was not changed or resolved by Unit 5BJ.

## 16. Regression-test coverage

`scripts/test-article-structure.mjs` checks:

- exactly 61 published pages;
- exactly one article, layout, body, CTA, and Related Articles region per page;
- intended wrapper hierarchy and balanced structural tags;
- substantive-node containment;
- body → CTA → Related ordering;
- no substantive nodes between or after terminal sections;
- no empty article section wrappers;
- unique heading IDs and valid in-body TOC targets;
- exactly three related cards per page;
- published-record and filesystem validity for related links.

The existing `scripts/test-related-articles.mjs` also passes with 183 cards, zero broken links or covers, and zero deterministic rebuild changes.

## 17. Responsive verification

Headless Chromium/Edge loaded all 61 pages at each required width:

- 390px: 61/61 passed;
- 768px: 61/61 passed;
- 1024px: 61/61 passed;
- 1440px: 61/61 passed.

Across 244 page/viewport combinations there were zero structure failures, horizontal-overflow failures, console errors, or failed requests.

## 18. Content-preservation verification

The correction changed container boundaries, fragment IDs, and terminal-section placement only. Article prose was compared against the repository baseline with CTA and Related markup excluded: article wording changes were zero and article body deletions were zero. Titles, slugs, canonical/public URLs, metadata, publication states, cover assets, diagram meanings, and related selections remain unchanged.

## 19. Rollback procedure

Before any later commit, rollback consists of reverting only the 61 article-page structural changes, `scripts/upgrade-related-articles.mjs`, `scripts/test-article-structure.mjs`, and this Unit 5BJ document. Do not revert or alter the pre-existing `blog/data/article-plan.json` modification. After rollback, rerun the structural and Related Articles tests to confirm the intended prior state.

## 20. Allowed next work

- Project Owner visual review of the corrected screenshot articles.
- A bounded final article-library regression checkpoint.
- A deliberate commit containing only Unit 5BJ files after owner approval.

## 21. Disallowed next work

- article rewriting or deletion;
- publication-state, URL, title, slug, or metadata changes;
- Related Articles selection changes unrelated to a defect;
- article visual redesign;
- Insights, category-directory, featured-rotation, sitemap, or feed changes;
- disposition of `blog/data/article-plan.json`;
- deployment, merge, commit, or push without a separate approved unit.

## 22. Recommended next unit

Unit 5BK — Article Structure Project Owner Visual Confirmation.

Goal: record the Project Owner’s visual confirmation that the previously orphaned sections now remain inside the charcoal reading surface and that the corrected CTA/Related order is acceptable.

## 23. Test record

- `node scripts/test-article-structure.mjs`: passed, 61 pages, all reported failure counts zero.
- `node scripts/test-related-articles.mjs`: passed, 183 cards, three per page, zero deterministic rebuild changes.
- Browser QA: 244 page/viewport combinations passed at 390, 768, 1024, and 1440 pixels.
- Console errors: 0.
- Failed requests: 0.
- Horizontal overflow: 0.
- `git diff --check`: passed.

## 24. Suggested commit message

`Fix orphaned article content structure`
