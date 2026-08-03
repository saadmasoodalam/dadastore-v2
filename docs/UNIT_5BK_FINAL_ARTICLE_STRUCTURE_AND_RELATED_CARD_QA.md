# Unit 5BK — Final Article Structure and Related-Card QA

## 1. Title

Unit 5BK — Final Article Structure and Related-Card QA.

## 2. Status

Completed as a docs-only QA checkpoint. This unit records final full-library verification of the current Unit 5BJ implementation state; it does not change article markup, shared styles, JavaScript, scripts, registry data, publication state, generated indexes, or deployment state.

## 3. Purpose

Confirm that the 61 published article pages have complete and correctly contained reading content, a consistent terminal-section order, valid table-of-contents targets, and three safe Related Articles cards after the CTA. The checkpoint also records the relevant responsive, accessibility, and public-library regression evidence before any later commit or deployment decision.

## 4. Authority reviewed

- `docs/UNIT_5BI_RELATED_ARTICLE_CARD_UPGRADE.md`
- `docs/UNIT_5BJ_ORPHANED_ARTICLE_CONTENT_STRUCTURE_FIX.md`
- all 61 current published `blog/<slug>/index.html` pages
- `blog/data/posts.json`
- `blog/assets/blog.css`
- `blog/assets/blog.js`
- `scripts/upgrade-related-articles.mjs`
- `scripts/test-related-articles.mjs`
- `scripts/test-article-structure.mjs`
- `scripts/test-article-link-encoding.mjs`
- `scripts/test-blog-directory.mjs`
- `scripts/test-featured-rotation.mjs`
- current `blog/index.html`, `blog/category/index.html`, `blog/sitemap.xml`, and `blog/feed.xml`

## 5. Published-library state

The registry contains 61 published articles and zero drafts. All 61 published records have public URLs, article folders, and cover metadata. No publication-state change occurred during this unit.

The current working tree also contains the uncommitted Unit 5BJ implementation and its regression test. That implementation state is the state audited here. The pre-existing unrelated modification to `blog/data/article-plan.json` remains outside Unit 5BK and was not modified or resolved.

## 6. Article structural-order QA

All 61 published pages satisfy the required order:

1. article header and cover;
2. article body and insight sections;
3. conclusion;
4. CTA as the final substantive article section;
5. Related Articles;
6. footer/end-of-document structure.

The structural audit reports zero content between the CTA and Related Articles, zero substantive content after Related Articles, zero premature wrapper closures, zero invalid wrapper nesting, and zero empty structural wrappers.

## 7. Reading-container QA

Every substantive heading, paragraph, list, blockquote, table, preformatted example, and authored section is contained by `.blog-article-body` or by its explicitly permitted header, CTA, or Related Articles region. No substantive reading content is orphaned on the outer page shell.

The charcoal/grey reading surface, readable content column, heading spacing, paragraph rhythm, list treatment, and terminal-section spacing remain intact. The same current implementation passed the 61-page browser matrix at all four required widths with zero horizontal-overflow or structural-layout failures. Excessive structural gaps attributable to broken wrapper boundaries were not found.

## 8. CTA placement QA

Each page has exactly one `.blog-cta-section`. The CTA follows the complete article body and conclusion, is the final substantive article section, and precedes Related Articles. Ordinary article content after the CTA: zero.

## 9. Related Articles QA

All 61 pages contain exactly three compact Related Articles cards, for 183 cards total. Every section appears after its CTA.

The focused Related Articles test confirms:

- current-article self-links: 0;
- duplicate cards within a section: 0;
- draft links: 0;
- broken article links: 0;
- broken cover references: 0;
- missing or empty cover alt text: 0;
- invalid title, category, reading-time, URL, or cover fields: 0;
- duplicate IDs: 0;
- unqualified global fallbacks: 0;
- deterministic rebuild changes: 0.

The existing source-relation hints and deterministic selection behavior remain stable. The responsive card system remains one column at 390px, two columns at 768px, and three columns at 1024px and 1440px.

## 10. TOC and heading-anchor QA

All table-of-contents fragment targets resolve exactly once and inside the article reading body. Missing anchors: zero. Duplicate heading IDs: zero. Heading targets follow their source-document order, and no TOC target points into the page shell, CTA, Related Articles, or footer.

## 11. Insight-diagram containment QA

Sixty published pages contain a topic-specific `.blog-insight-block`; the one legacy article without a diagram remains valid. The structural hierarchy and full-page browser evidence confirm that all 60 insight diagrams remain inside the reading body. Diagram containment failures: zero. No diagram was edited, reclassified, or animated in this unit.

## 12. Responsive QA

The unchanged current implementation has full-library browser evidence at:

- 390px: 61/61 article pages passed;
- 768px: 61/61 article pages passed;
- 1024px: 61/61 article pages passed;
- 1440px: 61/61 article pages passed.

Across 244 article-page/viewport scenarios, responsive failures were 0, horizontal-overflow failures were 0, console errors were 0, and failed requests were 0. The structural and related-card source tests were rerun for this checkpoint and remained clean.

## 13. Accessibility QA

Related cards remain semantic anchors with native `h3` titles, meaningful cover alt text, and category/title/reading-time information that does not depend on color alone. Shared `:focus-visible` rules remain present, and the established full browser matrix recorded zero keyboard-focus failures. Shared `prefers-reduced-motion: reduce` behavior remains present and recorded zero reduced-motion failures. Mobile-menu hooks remain present on the 61 article pages plus the Insights and category pages.

Microsoft Edge/Chromium is the available automated browser used for the full matrix. This unit does not add a broader Firefox or WebKit compatibility claim.

## 14. Insights regression

The Insights page remains connected to the published-only registry. Article-link encoding validation passes across the public HTML surface. No Insights markup, styling, filtering, card data, or public-link behavior changed during Unit 5BK.

## 15. Category-directory regression

The category-directory test passes all nine checks: 10 active categories represent all 61 published articles, with zero empty categories or count mismatches. Category graphics and navigation were not changed. Category-directory regressions: zero.

## 16. Featured-rotation regression

The featured-rotation test passes all 10 checks, including published-only eligibility, deterministic same-week behavior, and the eight-week repeat exclusion. Featured-rotation regressions: zero.

## 17. Sitemap/feed verification

Direct registry-to-output comparison confirms:

- published registry records: 61;
- draft registry records: 0;
- sitemap entries: 63 (Insights home, category directory, and 61 articles);
- feed items: 61;
- published articles missing from the sitemap: 0;
- published articles missing from the feed: 0;
- unexpected article entries: 0.

No sitemap or feed semantic change occurred during this unit.

## 18. Defects found

No blocking article-structure, containment, CTA, Related Articles, TOC, responsive, accessibility, or public-library regression defect was found in the audited state.

## 19. Required corrections

None. Unit 5BK requires no implementation correction.

## 20. Final verdict

**ARTICLE STRUCTURE AND RELATED CARDS READY**

## 21. Current boundaries

- This checkpoint confirms the current 61-article structure and Related Articles implementation; it does not approve future content changes.
- It does not publish, deploy, commit, push, or change production settings.
- It does not alter article wording, metadata, URLs, covers, diagrams, categories, or publication states.
- It does not decide the disposition of the unrelated `blog/data/article-plan.json` modification.
- It does not claim Firefox or WebKit execution where those browser engines were unavailable.

## 22. Recommended next unit

Unit 5BL — Controlled Article Structure Worktree Commit.

Goal: verify the exact Unit 5BJ and Unit 5BK file scope, explicitly exclude the unrelated `blog/data/article-plan.json` modification, and create a bounded commit only after Project Owner approval. Commit, push, and deployment remain separate permissions.

## 23. Test record

- `node scripts/test-article-structure.mjs`: passed; 61 pages; orphaned content 0; content after CTA 0; content after Related Articles 0; malformed wrappers 0; broken TOC targets 0; duplicate heading IDs 0; related placement/count failures 0.
- `node scripts/test-related-articles.mjs`: passed; 183 cards; count, placement, links, covers, alt text, registry fields, and deterministic rebuild failures all 0.
- `node scripts/test-article-link-encoding.mjs`: passed; 63 public HTML pages checked and no encoding or destination failures found.
- `node scripts/test-blog-directory.mjs`: passed; 9 checks, 10 active categories, and 61 represented articles.
- `node scripts/test-featured-rotation.mjs`: passed; 10 checks including deterministic weekly behavior and eight-week exclusion.
- Registry/sitemap/feed comparison: passed; 61 published, 0 drafts, 63 sitemap entries, 61 feed items, and no missing or unexpected article entries.
- Browser QA evidence for the unchanged current implementation: 244/244 article-page/viewport scenarios passed in Microsoft Edge at 390px, 768px, 1024px, and 1440px.
- Published pages reviewed: 61.
- Pages with orphaned substantive content: 0.
- Headings outside article body: 0.
- Paragraphs outside article body: 0.
- Content after CTA: 0.
- Content after Related Articles: 0.
- Malformed article wrappers: 0.
- Excessive structural gaps: 0.
- Broken TOC targets: 0.
- Duplicate heading IDs: 0.
- Related cards verified: 183.
- Related-card failures: 0.
- Insight-diagram containment failures: 0.
- Responsive failures: 0.
- Horizontal overflow: 0.
- Keyboard-focus failures: 0.
- Reduced-motion failures: 0.
- Mobile-navigation failures: 0.
- Category-directory regressions: 0.
- Featured-rotation regressions: 0.
- Console errors: 0.
- Failed requests: 0.
- Article wording changes during Unit 5BK: 0.
- Publication-state changes during Unit 5BK: 0.
- Sitemap/feed semantic changes during Unit 5BK: 0.
- `git diff --check`: passed.

## 24. Suggested commit message

`Add final article structure and related card QA`
