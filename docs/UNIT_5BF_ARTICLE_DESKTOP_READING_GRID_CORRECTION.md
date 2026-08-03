# Unit 5BF — Article Desktop Reading Grid Correction

## 1. Title

Unit 5BF — Correct Article Desktop Reading Grid and Diagram Caption Clipping.

## 2. Status

Implemented as a shared CSS layout correction with browser, accessibility, and regression verification. No article markup, article content, publication data, or runtime behavior was changed.

## 3. Purpose

This unit corrects the desktop/tablet grid defect recorded by Unit 5BE while preserving the valid article contents sidebar on pages that use it. It also resolves the five caption-clipping cases that resulted from the same narrow-track placement.

## 4. Unit 5BE defects

Unit 5BE reported an unintended 190px reading column at 768px, 1024px, and 1440px, compressed insight diagrams, and clipped captions on five Ecommerce & CRO pages. The follow-up structure audit refined the scope: 56 published pages contain a real `.blog-post-aside`; the five affected pages do not.

The exact no-sidebar pages were:

- `ecommerce-offer-testing-framework`
- `mobile-ecommerce-conversion-optimization`
- `ecommerce-site-speed-and-conversion`
- `ecommerce-funnel-analysis`
- `shopify-navigation-and-collection-page-cro`

## 5. Confirmed grid root cause

At widths of 680px and above, `.blog-post-layout` defines `190px minmax(0, 760px)`. This is correct when the first child is the article contents sidebar and the second child is `.blog-article-body`.

On the five pages without `.blog-post-aside`, automatic grid placement put the only child—the article body—into the first 190px track. The intended 760px reading track remained unused. The narrow body also constrained the insight wrapper, causing long captions to extend into its clipping boundary.

## 6. Shared layout correction

The valid two-column rule remains unchanged. One conditional rule was added inside the existing `min-width: 680px` media query:

```css
.blog-post-layout:not(:has(> .blog-post-aside)) {
  grid-template-columns: minmax(0, 760px);
  gap: 0;
}
```

This makes no-sidebar layouts use one centered content track. It removes the phantom 190px allocation and its unused 64px inter-column gap without changing 56 valid sidebar layouts or adding per-article overrides.

## 7. Reading-width behavior

The article body remains capped at the established 760px maximum. Paragraphs retain their 68ch maximum, charcoal `#171b23` surface, existing padding, border, radius, line height, and heading hierarchy. The correction restores useful width without creating full-screen text lines.

Browser checks rejected bodies narrower than the appropriate tablet/desktop threshold and bodies wider than 800px, and rejected paragraph measures above 760px. All 61 pages passed.

## 8. Tablet behavior

At 768px, the five no-sidebar pages now use one responsive track within the available shell width instead of the 190px sidebar track. The 56 sidebar pages retain their contents rail and readable adjacent article column. Narrow-column failures at 768px: 0.

## 9. Desktop behavior

At 1024px and 1440px, no-sidebar articles use the centered track capped at 760px. Sidebar articles retain the established centered `190px / 760px` composition. Phantom-sidebar failures at 1024px and 1440px: 0. Excessively wide reading-line failures: 0.

## 10. Mobile preservation

The correction is inside the existing `min-width: 680px` media query and therefore does not apply at 390px. All 61 pages retained the passing single-column mobile layout, readable padding, functional menu, visible CTA, and zero horizontal overflow. Mobile regressions: 0.

## 11. Five caption defects

Unit 5BE identified these clipped captions or outputs:

- “Offer-strength canvas” on `ecommerce-offer-testing-framework`.
- “Mobile-commerce checklist” on `mobile-ecommerce-conversion-optimization`.
- “Performance roadmap” and the “Verify” output on `ecommerce-site-speed-and-conversion`.
- “Conversion funnel” on `ecommerce-funnel-analysis`.
- “Merchandising framework” on `shopify-navigation-and-collection-page-cro`.

The captions were not defective article text. Their available containing width was defective because each associated article lacked a sidebar but occupied the sidebar grid track.

## 12. Caption corrections

Restoring the five articles to the single 760px-capped track gives each insight block its intended width. No caption wording, diagram node, arrow, border, semantic family, or topic-specific design was altered.

Automated browser checks tested every caption and leaf label against visible clipping ancestors. Complete caption text is visible, natural layout is preserved, hidden labels are 0, clipped captions are 0, diagram failures are 0, and page-level horizontal overflow is 0.

## 13. Files changed

- `blog/assets/blog.css` — one conditional no-sidebar grid rule.
- `docs/UNIT_5BF_ARTICLE_DESKTOP_READING_GRID_CORRECTION.md` — implementation and verification record.

No shared template or article file required a markup correction.

## 14. Article-content preservation

SHA-256 comparison covered all 61 published article files before and after implementation. Article-file changes: 0. The same protected comparison confirmed no change to `blog/data/posts.json`, `blog/assets/blog.js`, the Insights page, category directory, sitemap, or feed.

Titles, slugs, URLs, metadata, cover references, article bodies, insight meanings, and publication states remain unchanged. `scripts/upgrade-article-insights.mjs --verify-head` reported 0 visible-text mismatches and 0 pending generated changes.

## 15. Responsive verification

Microsoft Edge 151 and Google Chrome 150 each rendered all 61 published pages at 390px, 768px, 1024px, and 1440px.

- Edge: 244 of 244 scenarios passed.
- Chrome: 244 of 244 scenarios passed.
- Total: 488 of 488 scenarios passed.
- Sidebar pages verified: 56.
- Corrected no-sidebar pages verified: 5.
- Reading-surface failures: 0.
- Phantom-sidebar failures: 0.
- Narrow-column failures: 0.
- Excessive-width failures: 0.
- Diagram failures: 0.
- Clipped captions: 0.
- Hidden labels: 0.
- Horizontal overflow: 0.
- Broken images: 0.
- Console errors: 0.
- Failed requests: 0.

## 16. Accessibility verification

The browser matrix checked the charcoal reading-surface color, body font size and line height, sampled text contrast, real keyboard Tab focus, visible diagram labels, caption containment, reduced-motion emulation, CTA order, and mobile navigation behavior.

- Contrast failures: 0.
- Keyboard-focus failures: 0.
- Reduced-motion failures: 0.
- Hidden diagram labels: 0.
- Mobile-navigation failures: 0.

The correction changes track allocation only; it does not remove semantics, focus targets, alt text, or non-color diagram meaning.

## 17. Regression verification

- Published records: 61.
- Publication-state changes: 0.
- Article-body changes: 0.
- Broken internal links: 0.
- Missing metadata: 0.
- Duplicate titles/slugs: 0.
- Category-directory tests: 9 passed; 10 active categories representing 61 articles.
- Featured-rotation tests: 10 passed, including eight-week exclusion and deterministic fallback.
- Insight audit: 61 pages, 60 diagrams, five families, 0 visible-text mismatches.
- Sitemap/feed semantic changes: 0.
- Insights, category directory, featured rotation, navigation JavaScript, registry, sitemap, and feed remained hash-identical.

The pre-existing modification to `blog/data/article-plan.json` remained outside this unit and was not edited.

## 18. Rollback procedure

Remove only this conditional rule from the `min-width: 680px` media query:

```css
.blog-post-layout:not(:has(> .blog-post-aside)) {
  grid-template-columns: minmax(0, 760px);
  gap: 0;
}
```

Do not revert article files, registry data, diagram markup, sidebar markup, category data, featured rotation, sitemap, or feed. After rollback, rerun the four-width article matrix because the five no-sidebar pages would again occupy the 190px track.

## 19. Allowed next work

- A docs-only final article visual-system re-approval checkpoint.
- Optional Firefox and WebKit confirmation where those engines are available.
- A separately authorized correction for a newly observed article-specific visual defect.

## 20. Disallowed next work

- Article rewriting or metadata changes.
- Removing the valid contents sidebar from the other 56 pages.
- Per-article grid overrides.
- Broad article-page redesign.
- Changes to Insights, category directory, featured rotation, navigation, registry, sitemap, feed, or `blog/data/article-plan.json`.
- Deployment, commit, or push without separate authorization.

## 21. Recommended next unit

Unit 5BG — Article Visual System Final Re-approval Checkpoint.

Goal: record final Project Owner and QA approval of the corrected 61-page reading system without changing implementation or publication state.

## 22. Suggested commit message

`Fix article reading grid and diagram captions`
