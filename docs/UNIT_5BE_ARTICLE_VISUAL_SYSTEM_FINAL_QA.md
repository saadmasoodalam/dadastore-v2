# Unit 5BE — Article Visual System Final QA

## 1. Title

Unit 5BE — Article Visual System Final QA.

## 2. Status

Docs-only QA checkpoint. The complete published article experience was reviewed after the reading-surface, category-directory, and insight-diagram upgrades. No implementation or publication state was changed.

## 3. Purpose

This checkpoint determines whether the current 61-page article visual system is ready to close. It covers the shared reading surface, typography, insight diagrams, responsive behavior, accessibility safeguards, and public blog regressions. A QA finding is not permission to correct code inside this unit.

## 4. Authority reviewed

- `docs/UNIT_5BA_BLOG_GRID_CATEGORY_AND_READING_EXPERIENCE_FIXES.md`
- `docs/UNIT_5BC_CATEGORY_DIRECTORY_GRAPHICS.md`
- `docs/UNIT_5BD_ARTICLE_INSIGHT_DIAGRAM_UPGRADE.md`
- `blog/data/posts.json`
- all 61 published article pages
- `blog/assets/blog.css`
- `blog/assets/blog.js`
- the current Insights page and category directory
- the current featured-rotation data and build/test scripts
- `blog/sitemap.xml` and `blog/feed.xml`

## 5. Published library state

- Published registry records: 61.
- Draft registry records: 0.
- Published page files found: 61.
- Published URLs represented in the sitemap: 61 of 61.
- Published URLs represented in the feed: 61 of 61.
- Pages with semantic insight diagrams: 60.
- Intentional legacy page without an insight diagram: `how-to-create-a-social-media-marketing-plan-that-drives-results`.
- Publication-state changes during Unit 5BE: 0.
- Article-body changes during Unit 5BE: 0.

## 6. Article reading-surface QA

The approved charcoal/grey reading-surface rules are present: `.blog-article-body` uses `#171b23`, light body copy, a restrained border, rounded corners, and a contained reading width. The page files retain their cover, article body, related links, and final CTA structure.

The rendered desktop/tablet layout is not acceptable. At `min-width: 680px`, the shared rule is:

```css
.blog-post-layout {
  grid-template-columns: 190px minmax(0, 760px);
}
```

The 61 published pages do not contain a `.blog-post-aside` sibling. CSS Grid therefore auto-places `.blog-article-body` into the first 190px track. At 768px, 1024px, and 1440px, the reading card remains approximately 190px wide while the intended 760px track is empty. This produces an excessively narrow text column and a large unused region to its right.

Reading-surface failures: 61 published pages, caused by one shared CSS grid defect.

The 390px single-column layout does not activate this rule and passed the tested page-width, clipping, image, and mobile-navigation checks.

## 7. Typography QA

The shared typography system provides readable color, `clamp()`-based sizing, approximately 1.82–1.85 body line height, bounded paragraph measure, balanced headings, and visible underlined inline links. Automated contrast sampling found no WCAG AA body-copy failures, and the static heading audit found no missing H1 or skipped heading-level failures.

Typography cannot receive final visual approval at 768px and above because the 190px grid track forces excessive wrapping and breaks the intended comfortable reading measure. The underlying font sizes, line heights, heading hierarchy, and link treatment are otherwise intact.

## 8. Insight-diagram QA

The audit found 60 semantic diagrams and the five approved families:

- Comparison diagrams: 5.
- Process flows: 16.
- Decision frameworks: 16.
- Measurement systems: 8.
- Layered architectures: 15.

All diagram groups retain meaningful `aria-label` values, visible HTML labels, topic attributes, and topic-specific patterns. No animation is required to understand them, and reduced-motion emulation reduced transitions to the approved minimal duration.

The same desktop grid defect compresses all 60 diagrams into the 190px article track at 768px and above, so diagram failures total 60 pages. Five Ecommerce & CRO diagrams additionally clip a long caption at 1024px and 1440px:

- `ecommerce-offer-testing-framework` — “Offer-strength canvas”.
- `mobile-ecommerce-conversion-optimization` — “Mobile-commerce checklist”.
- `ecommerce-site-speed-and-conversion` — “Performance roadmap”; the “Verify” output is also clipped.
- `ecommerce-funnel-analysis` — “Conversion funnel”.
- `shopify-navigation-and-collection-page-cro` — “Merchandising framework”.

Hidden labels: 0. Clipped-label failures: 5 pages across 10 rendered scenarios. Document-level horizontal overflow: 0. The problem is containment inside the abnormally narrow article track, not page-level scrolling.

## 9. Responsive QA

All 61 pages were rendered in Microsoft Edge Chromium at 390px, 768px, 1024px, and 1440px, for 244 scenarios.

- 390px: pass across all 61 pages.
- 768px: fail across all 61 pages because the desktop grid assigns the article to the 190px track.
- 1024px: fail across all 61 pages for the same reason; five pages also clip diagram labels.
- 1440px: fail across all 61 pages for the same reason; five pages also clip diagram labels.
- Horizontal page overflow: 0 scenarios.
- Broken images: 0 scenarios.
- Console errors: 0 scenarios.
- Failed requests: 0 scenarios.

Google Chrome Chromium received a representative 20-scenario smoke review across the four widths, covering the five diagram families and the legacy non-diagram article. It showed no engine-specific console, request, mobile-menu, contrast, or motion defect. The shared CSS grid defect is engine-independent and remains applicable.

Responsive failures: 61 pages.

## 10. Accessibility QA

Verified safeguards:

- semantic H1/H2/H3 hierarchy checks passed;
- meaningful cover-image alt text was present on all 61 pages;
- diagram groups retained meaningful labels and readable child text;
- sampled body-copy contrast met the 4.5:1 threshold;
- inline links use both color and underline treatment;
- real keyboard Tab input produced visible focus treatment;
- mobile navigation retained an accessible toggle and updated `aria-expanded`;
- diagrams do not rely on animation or color alone;
- reduced-motion emulation matched and reduced transitions;
- the 390px reflow had no page overflow.

Measured contrast failures: 0. Keyboard-navigation failures: 0. Reduced-motion failures: 0. Meaningful-alt failures: 0. Mobile-navigation failures: 0.

A separate manual browser-zoom acceptance pass was not completed after the blocking layout defect was confirmed. That coverage remains required after correction; it is not represented as a pass here.

## 11. Cross-browser QA

- Microsoft Edge 151 (Chromium): all 61 articles at all four target widths.
- Google Chrome 150 (Chromium): representative five-family plus legacy smoke coverage at all four target widths.
- Firefox: not installed in the available environment; no pass claimed.
- WebKit: not installed in the available environment; no pass claimed.

The available coverage confirms Chromium behavior. Firefox and WebKit remain manual follow-up coverage after the shared grid correction.

## 12. Category-directory regression

The repository category-directory test passed all nine assertions:

- 10 active categories;
- category counts total 61;
- no empty categories;
- unique category slugs;
- 10 directory links;
- no duplicated default archive grid.

Category-directory regressions: 0. Category graphics and category files were not changed.

## 13. Featured-rotation regression

The featured-rotation test passed all 10 assertions. Same-week output remains stable, the previous eight weeks remain excluded, ninth-week reuse remains eligible, malformed history retains a deterministic fallback, and payload fields remain atomic. Eligibility is limited to structurally valid published records.

Featured-rotation regressions: 0. Rotation data and implementation were not changed.

## 14. Navigation regression

All 61 articles retain the shared navigation and mobile toggle. Browser checks found 0 mobile-toggle failures, 0 keyboard-focus failures, 0 console errors, and 0 failed requests. Article-relative links and assets resolved in the static audit.

Navigation regressions: 0.

## 15. Sitemap/feed verification

Direct registry-to-output comparison found all 61 published article URLs in `blog/sitemap.xml` and all 61 published article entries in `blog/feed.xml`. No registry drafts exist, so public draft exposure is 0. Local reference validation found 0 broken links and 0 broken assets.

Sitemap inconsistencies: 0. Feed inconsistencies: 0. Sitemap/feed semantic changes during this unit: 0.

The older `validateLibrary()` report still derives 45 historical “draft” states from `blog/data/article-plan.json`; that pre-existing planning-data condition does not match the authoritative 61-published/0-draft registry and was not changed or used as the public-state verdict in this unit.

## 16. Defects found

One blocking shared defect was found:

1. `.blog-post-layout` always creates a 190px sidebar track at widths of 680px and above, while the published article markup has no sidebar. The article body is consequently placed in that narrow track on all 61 pages.

Direct consequences:

- 61 reading surfaces are unacceptably narrow at 768px, 1024px, and 1440px;
- 60 insight diagrams are compressed into the same narrow track;
- five diagram captions have confirmed clipping at 1024px and 1440px;
- a large unused desktop region undermines the approved reading experience.

No broken images, broken links, page-level overflow, console errors, failed requests, contrast defects, keyboard defects, reduced-motion defects, category regressions, featured regressions, or publication-state changes were found.

## 17. Required corrections

A bounded follow-up must:

1. make `.blog-article-body` occupy the intended reading column when `.blog-post-aside` is absent;
2. activate the two-column `190px / 760px` grid only when an actual sidebar is present, or explicitly place the lone article body in the full reading track;
3. preserve the 390px single-column behavior;
4. retest all 61 pages at 390px, 768px, 1024px, and 1440px;
5. confirm all 60 diagrams regain useful width and the five identified captions no longer clip;
6. perform the remaining browser-zoom, Firefox, and WebKit checks where those environments are available.

No negative margins, transforms, fixed article heights, article rewrites, or diagram-label removal should be used to conceal the grid defect.

## 18. Final verdict

**NOT READY**

The publication registry, content integrity, category directory, featured rotation, navigation, sitemap, feed, contrast, focus, reduced motion, and network behavior are stable. The shared desktop/tablet reading grid is nevertheless a blocking visual regression affecting every published article, so the article visual system cannot be accepted yet.

## 19. Current boundaries

- This unit changed documentation only.
- It did not edit article HTML, CSS, JavaScript, images, registry data, sitemap, feed, category pages, or featured rotation.
- It did not alter `blog/data/article-plan.json`; its pre-existing modification remains outside this unit.
- It did not deploy, commit, or push.
- Browser coverage is Chromium-based because Firefox and WebKit were unavailable.
- The QA verdict is not an implementation authorization or publication-state decision.

## 20. Recommended next unit

**Unit 5BF — Article Desktop Reading Grid Correction**

Goal: correct the shared no-sidebar article grid so the 61 reading surfaces and 60 diagrams use the intended content width at 768px, 1024px, and 1440px, then rerun the blocked visual, responsive, accessibility, and cross-browser checks without changing article content or publication state.

## 21. Test record

- Static published-page audit: 61 of 61 pages; passed structural, heading, image-alt, CTA-order, mobile-toggle, local-link, local-asset, sitemap, and feed checks.
- Insight integrity audit: 61 pages; 60 applicable diagrams; five semantic families; 0 visible-text mismatches; 0 generated changes.
- Edge Chromium rendered matrix: 244 scenarios across 61 pages and four widths.
- Chrome Chromium smoke matrix: 20 scenarios across representative pages and four widths.
- Reading-surface failures: 61 pages.
- Diagram failures: 60 pages.
- Hidden labels: 0.
- Clipped labels: 5 pages / 10 scenarios.
- Horizontal overflow: 0.
- Broken images: 0.
- Broken links: 0.
- Contrast failures: 0.
- Keyboard-navigation failures: 0.
- Reduced-motion failures: 0.
- Mobile-navigation failures: 0.
- Featured-rotation regressions: 0.
- Category-directory regressions: 0.
- Console errors: 0.
- Failed requests: 0.
- Publication-state changes: 0.
- Article-body changes: 0.
- Sitemap/feed semantic changes: 0.
- Firefox/WebKit: unavailable; no pass claimed.

## 22. Suggested commit message

`Add article visual system final QA`
