# Unit 5BH — Article-Link Arrow Encoding Fix

## 1. Title

Unit 5BH — Fix Article-Link Arrow Encoding.

## 2. Status

Implemented as a narrow public-listing encoding correction, source-template normalization, regression test, and documentation unit. No article content, publication data, category data, sitemap, feed, or design behavior changed.

## 3. Purpose

This unit removes malformed arrow text from public article-card links, standardizes the static and server-generated source representation, and prevents the same mojibake sequence from returning unnoticed.

## 4. Project Owner report

The Project Owner supplied a screenshot showing some public card links rendered as `Read Article Ã¢â€ â€™` rather than the intended right arrow.

## 5. Visible defect

The repository-level code-point audit found 10 affected Knowledge Library cards in `blog/index.html`. Each bad arrow was stored as the three-character sequence `U+00E2 U+2020 U+2019`, displayed as `â†’` by a correct UTF-8 browser and capable of appearing as the longer double-decoded sequence in other presentation paths.

The same audit found no malformed arrow marker in the category page, any of the 61 published article pages, `blog/assets/blog.js`, or the current category and featured generation sources.

## 6. Root cause

The confirmed root cause was malformed generated/static HTML already stored in the Insights listing. UTF-8 arrow bytes had previously been decoded as a legacy single-byte encoding and the resulting characters were then saved into `blog/index.html`.

The current Knowledge Library cards are maintained in that static public file; there is no separate active script that rebuilds the complete 61-card archive. The category-filtered listing is generated client-side and already uses the encoding-safe JavaScript escape `\u2192`. The featured-card generator contained a valid literal Unicode arrow and was not the source of the observed corruption.

## 7. Source-level correction

- All 62 static `Read Article` links on the Insights page—one featured link and 61 library cards—now use one ASCII-safe source representation.
- `scripts/build-featured-rotation.mjs` now emits the same representation, so rebuilding the featured section preserves the corrected source form.
- `blog/assets/blog.js` remains unchanged because its `arrow.textContent = "\u2192"` path is already encoding-safe.
- `scripts/build-category-directory.mjs` remains unchanged because it does not generate the affected `Read Article` label and its intentional navigation arrows are valid UTF-8.

## 8. Approved arrow representation

The approved HTML source representation is:

```html
Read Article <span aria-hidden="true">&rarr;</span>
```

The browser renders the entity as `Read Article →`. The arrow remains decorative to assistive technology, while the meaningful link label remains `Read Article`.

The client-side category renderer uses `\u2192` with `textContent`, which produces the same visible character without an HTML parsing step and is the safe equivalent for that rendering path.

## 9. Generated pages updated

- `blog/index.html` was normalized across the featured card and all 61 Knowledge Library cards.
- The featured-section source template was aligned with the normalized output.
- `blog/category/index.html` required no update.
- Published article pages required no update.

A regeneration check was performed against the featured generator. Its incidental date-driven rotation output was deliberately removed afterward so this encoding unit did not change featured selection or rotation history.

## 10. Mojibake audit

The regression audit scanned:

- the Insights page;
- the Categories page;
- all 61 published article HTML files;
- the featured generator;
- the category-directory generator;
- the category client renderer.

Known arrow mojibake markers, including `U+00E2 U+2020 U+2019`, double-decoded arrow forms, `Ã¢â‚¬`, `Ãƒ`, and `Ã‚`, were absent from all audited public files and sources after correction. Malformed sequences remaining: 0.

## 11. Link-destination preservation

The test resolved every static `Read Article` `href` against the local repository and checked every published article directory recorded in `posts.json`.

- Static `Read Article` links checked: 62.
- Published article paths checked: 61.
- Broken affected links: 0.
- Titles, excerpts, dates, reading times, slugs, and URLs changed: 0.

## 12. Regression test

Added `scripts/test-article-link-encoding.mjs`.

The test:

- scans 63 public HTML files and three relevant generation sources;
- fails on known mojibake markers;
- verifies every static `Read Article` link contains an approved arrow;
- verifies every affected static link has a valid local destination;
- verifies the featured generator emits `&rarr;`;
- verifies the client-side category renderer constructs `Read Article` plus `\u2192` safely;
- verifies all 61 published article paths exist.

Result: passed.

## 13. Files changed

- `blog/index.html` — normalized public article-link arrow source only.
- `scripts/build-featured-rotation.mjs` — normalized the featured-link template to `&rarr;`.
- `scripts/test-article-link-encoding.mjs` — added the encoding and link-destination regression test.
- `docs/UNIT_5BH_ARTICLE_LINK_ARROW_ENCODING_FIX.md` — added this implementation and verification record.

`blog/data/article-plan.json` has a pre-existing unrelated working-tree modification and remained untouched.

## 14. Verification results

- Malformed arrow occurrences: 0.
- Other confirmed mojibake sequences: 0.
- Correct static article-link arrows: 62 of 62.
- Published article paths: 61 of 61.
- Broken article links: 0.
- Published articles: 61.
- Draft articles: 0.
- Active categories: 10, totaling 61 articles.
- Featured-link regressions: 0.
- Category-link regressions: 0.
- Responsive scenarios: 4 of 4 passed.
- Horizontal overflow: 0.
- Console errors: 0.
- Failed requests: 0.
- Article-body changes: 0.
- Publication-state changes: 0.
- Category-count changes: 0.
- Sitemap/feed coverage changes: 0.
- Protected-file hash changes across 66 files: 0.
- Encoding regression test: passed.
- Category-directory guardrails: 9 passed.
- Featured-rotation guardrails: 10 passed.
- `git diff --check`: passed.

## 15. Rollback procedure

Revert only:

1. the `Read Article` arrow-source normalization in `blog/index.html`;
2. the matching featured-template line in `scripts/build-featured-rotation.mjs`;
3. `scripts/test-article-link-encoding.mjs`;
4. this unit document.

Do not revert article files, `posts.json`, category data, featured-rotation history, sitemap, feed, or `blog/data/article-plan.json`. After rollback, rerun the encoding test to demonstrate the expected failure before applying another encoding strategy.

## 16. Allowed next work

- Project Owner visual confirmation of the corrected public link labels.
- A separately bounded blog-maintenance workflow unit.
- Future publication work that runs the new encoding regression test before approval.

## 17. Disallowed next work

- Article-card redesign.
- Article body, title, excerpt, date, reading-time, slug, or URL changes.
- Publication-state changes.
- Featured-rotation logic or history changes.
- Category-count changes.
- Sitemap or feed semantic changes.
- Changes to `blog/data/article-plan.json`.
- Deployment, commit, or push without separate authorization.

## 18. Recommended next unit

**Unit 5BI — Blog Library Maintenance and Future Publishing Workflow**

Goal: define the controlled maintenance process for future articles, editorial review, encoding checks, visual QA, category assignment, featured eligibility, sitemap/feed generation, rollback, and publication.

## 19. Suggested commit message

`Fix article link arrow encoding`
