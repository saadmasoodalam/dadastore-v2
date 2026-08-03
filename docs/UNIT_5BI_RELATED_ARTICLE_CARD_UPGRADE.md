# Unit 5BI — Related Article Card Upgrade

## 1. Title

Unit 5BI — Upgrade Related Articles into Compact Image Cards.

## 2. Status

Implemented as generated article markup, shared CSS, deterministic registry-derived selection, focused testing, full responsive browser QA, and documentation. No article body, registry, publication, sitemap, feed, category-directory, or featured-rotation behavior changed.

## 3. Purpose

This unit replaces sparse plain related links with compact, topic-relevant image cards on every published article page while preserving the reading system and public-link boundary.

## 4. Project Owner feedback

The Project Owner requested more related articles, presented as smaller image cards rather than two plain text links with excessive unused space.

## 5. Previous related-article behavior

The pre-change inventory found:

- 61 published article pages;
- 60 pages with a Related Articles section;
- 55 sections containing two plain links;
- five sections containing one plain link;
- one legacy published article without a Related Articles section;
- no shared card-generation source for those sections.

## 6. New compact-card design

Every published article now has a dark charcoal related section containing three compact cards. Each card is one accessible link with a topic-specific existing cover, restrained border and elevation, cyan category treatment, off-white semantic heading, and muted reading time.

The section is intentionally lighter and shallower than the full Knowledge Library cards. The existing CTA remains after the related section so the CTA stays the final substantive article-page section.

## 7. Card data fields

Every card renders registry-authoritative:

- existing cover image;
- meaningful existing cover alt text;
- category;
- article title as an `h3` inside the link;
- reading time;
- public article destination.

Dates and excerpts are omitted to keep the cards compact.

## 8. Selection algorithm

`scripts/upgrade-related-articles.mjs` loads `blog/data/posts.json`, rejects malformed or non-published records, validates cover paths, preserves the source page’s previous related-link hints, and ranks candidates using a deterministic tuple:

1. same category;
2. shared meaningful title, excerpt, or slug terms;
3. a preserved existing related-link relationship;
4. an explicitly mapped adjacent category;
5. deterministic global fallback only if earlier tiers cannot fill the section.

Within a tier, higher semantic overlap ranks first, then preserved source relationships, then stable slug ordering. The current article is excluded before ranking, and the first three unique eligible results are used.

## 9. Category and topic relevance rules

The resulting 183 selections comprise:

- 171 same-category selections;
- 12 shared-topic cross-category selections;
- zero unqualified global fallbacks.

Categories with only three published articles use their two available peers first and fill the third position through meaningful shared-topic matching. Explicit adjacent-category maps remain available as a safe fallback for future registry changes.

## 10. Deterministic behavior

Each section stores only its original source-relation slugs in `data-source-relations`. Generated card choices do not become new source hints on later runs.

With unchanged registry and source data:

- visitor randomness: none;
- cookies or local storage: none;
- runtime API calls: none;
- external services: none;
- rebuild changes: 0.

## 11. Fallback behavior

Malformed records, drafts, records without public URLs, records without meaningful titles, records without reading times, and records without valid cover metadata are ineligible.

The generator requires at least two valid candidates and never renders an empty card. In the current 61-article library, all pages receive three valid cards without using the final global fallback tier.

## 12. Responsive behavior

- 390px: one related card per grid row; each compact card uses a landscape image/content split.
- 768px: two columns; the third card wraps cleanly.
- 1024px and 1440px: three cards in one row.
- Card and grid tracks use `min-width: 0` and responsive image containment.
- No fixed pixel card height is used.
- All four required widths passed across every published article page with no horizontal overflow.

## 13. Accessibility

- Each card is one semantic anchor with one native `h3` title.
- Existing meaningful cover alt text is preserved.
- The related heading is connected to the section with `aria-labelledby`.
- Global `:focus-visible` styling produces a visible three-pixel cyan outline for keyboard users.
- Hover elevation is supplementary and not required for comprehension.
- Existing reduced-motion rules collapse card and image transitions to 1ms.
- Category, title, and reading time provide non-color context.

Real Tab-key testing reported zero keyboard-focus failures across the full browser matrix.

## 14. Performance impact

- No new images were generated.
- No external dependency, library, API, font, cookie, storage, or runtime selection code was added.
- Cards reuse the 61 existing 1280×720 cover assets.
- Related covers use native `loading="lazy"` and `decoding="async"`.
- Only three additional image requests can become eligible near the end of a page, and browser caching can reuse covers already encountered.

## 15. Files changed

- all 61 published `blog/<slug>/index.html` pages — related section only;
- `blog/assets/blog.css` — shared compact-card and responsive styling;
- `scripts/upgrade-related-articles.mjs` — deterministic generator and source-preservation guard;
- `scripts/test-related-articles.mjs` — focused coverage, integrity, relevance, and idempotence tests;
- `docs/UNIT_5BI_RELATED_ARTICLE_CARD_UPGRADE.md` — this implementation and QA record.

`blog/assets/blog.js` was not changed because the feature is static and requires no runtime behavior. The pre-existing unrelated `blog/data/article-plan.json` modification remained untouched.

## 16. Article-page coverage

- Published pages updated: 61.
- Related sections present: 61.
- Related cards generated: 183.
- Cards per eligible page: 3.
- Legacy page newly given a related section: one.
- Empty related sections: 0.

## 17. Verification results

Focused generator/test results:

- published records: 61;
- draft records: 0;
- self-links: 0;
- duplicate cards within a section: 0;
- draft links: 0;
- broken related links: 0;
- broken cover references: 0;
- missing alt text: 0;
- invalid registry fields: 0;
- duplicate IDs: 0;
- topic-irrelevant global fallbacks: 0;
- deterministic rebuild changes: 0;
- focused related-card test: passed.

Browser QA in Microsoft Edge:

- article pages: 61;
- widths: 390px, 768px, 1024px, and 1440px;
- scenarios: 244;
- scenarios passed: 244;
- lazy-loaded card images checked: 732;
- responsive failures: 0;
- horizontal overflow: 0;
- keyboard-focus failures: 0;
- reduced-motion failures: 0;
- console errors: 0;
- failed requests: 0.

Preservation and regression results:

- non-related article markup changes across 61 pages: 0;
- article body changes: 0;
- protected registry/listing/category/JavaScript/featured/sitemap/feed/cover changes across 68 files: 0;
- publication-state changes: 0;
- category-directory tests: 9 passed;
- featured-rotation tests: 10 passed;
- article-link encoding test: passed;
- sitemap/feed semantic changes: 0;
- `git diff --check`: passed.

## 18. Rollback procedure

1. Revert the related-section changes in the 61 article pages.
2. Remove only the Unit 5BI CSS block from `blog/assets/blog.css`.
3. Remove `scripts/upgrade-related-articles.mjs` and `scripts/test-related-articles.mjs`.
4. Remove this unit document.

Do not revert article bodies, covers, `posts.json`, the Insights page, category directory, featured rotation, sitemap, feed, or `blog/data/article-plan.json`. After rollback, rerun the related-card test; it should fail because the upgraded markup is no longer present.

## 19. Allowed next work

- Project Owner visual confirmation of representative related-card sections.
- A docs-only completion checkpoint for the related-content navigation layer.
- Future registry additions that rerun the generator and focused test.
- A separately bounded relevance adjustment supported by specific article examples.

## 20. Disallowed next work

- Article body rewriting.
- Title, slug, URL, metadata, reading-time, or publication-state changes.
- New cover generation.
- Visitor-specific recommendations, cookies, local storage, runtime APIs, or external services.
- Insights hero, featured rotation, category directory, sitemap, feed, or `blog/data/article-plan.json` changes.
- Deployment, commit, or push without separate authorization.

## 21. Recommended next unit

**Unit 5BJ — Related Article Card Visual Approval Checkpoint**

Goal: record Project Owner approval of the compact related-card presentation and selection quality on representative mobile, tablet, and desktop pages without changing implementation.

## 22. Suggested commit message

`Upgrade related article cards`
