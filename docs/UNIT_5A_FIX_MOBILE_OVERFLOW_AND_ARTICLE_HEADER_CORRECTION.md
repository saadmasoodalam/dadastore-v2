# Unit 5A-Fix — Mobile Overflow and Article Header Correction

## 1. Title

Unit 5A-Fix — Mobile Overflow and Article Header Correction

## 2. Status

CSS-first responsive correction and documentation only.

## 3. Purpose

This unit hardens the isolated V3 blog layouts against narrow-viewport clipping while preserving the approved desktop design. It corrects layout widths directly instead of relying on `overflow-x: hidden` to conceal oversized content.

## 4. Owner review

The Project Owner approved the desktop presentation and rejected the supplied mobile captures because they showed:

- clipped blog-home hero copy;
- an oversized hero visual;
- a heavily clipped article headline;
- an oversized article placeholder grid;
- an unverified mobile header/menu presentation.

## 5. Branch

- branch: `main`

## 6. Root causes

The responsive audit identified two separate causes:

1. The earlier 390px screenshot command encountered Microsoft Edge's minimum headless desktop layout width of 496px and cropped that wider layout into a 390px bitmap. This produced visible clipping that did not reproduce under an exact 390px emulated device viewport.
2. The stylesheet still lacked explicit zero-minimum-width and maximum-width constraints on several major grid children and visual wrappers. The hero also contained intentionally oversized decorative glow layers, while `body { overflow-x: hidden; }` prevented those layers from affecting document scrolling. Relying on that body rule alone would not satisfy the responsive boundary.

The correction therefore constrains actual content and grid widths. The existing body overflow safeguard remains only as secondary containment for non-content decorative glow.

## 7. Blog homepage fixes

- The blog shell now has explicit `min-width: 0` and a viewport-safe maximum width.
- The header, navigation, hero grid, and hero-copy grid children now permit shrinking.
- The mobile hero explicitly uses a single `minmax(0, 1fr)` column.
- The headline and supporting copy use responsive sizing and safe wrapping.
- The CTA row becomes a compact mobile grid, with every item constrained to the available width.
- The commerce-intelligence signal panel uses the full available width without exceeding it.
- Decorative rings and orbit labels scale and inset at narrow widths.

## 8. Article-header fixes

- The article-header container, labels, title, summary, and metadata may shrink and wrap within the viewport.
- The mobile title uses `clamp()` and safe emergency wrapping without manual line breaks.
- Mobile article-header padding is reduced while retaining the approved desktop spacing.
- Labels and metadata continue to wrap naturally.

## 9. Placeholder-grid fixes

- The article visual and its internal system grid have explicit viewport-safe widths.
- At 375px and 390px, the placeholder remains a two-column `minmax(0, 1fr)` grid.
- Placeholder labels may wrap without increasing their grid-track width.
- No fixed card width or horizontal-scrolling treatment was introduced.

## 10. Header/mobile-menu verification

- The existing logo remains within the mobile header.
- The existing menu trigger remains visible.
- The existing JavaScript opens and closes the navigation, updates `aria-expanded`, and keeps the menu links and Start a Project action within the viewport.
- No JavaScript defect was found and `blog/assets/blog.js` was not modified.

## 11. Desktop-preservation boundary

The responsive corrections are additive width safeguards plus rules scoped to `max-width: 479px`. Existing 1024px and 1440px hero composition, article-title scale, card grids, and desktop navigation remain unchanged.

No homepage, production configuration, data, or blog HTML was modified.

## 12. Responsive results

Microsoft Edge verification covers:

- 375 × 812;
- 390 × 844;
- 768 × 1024;
- 1024 × 900;
- 1440 × 1000.

The verification record confirms document width, visible hero copy, article-title bounds, placeholder-grid bounds, mobile-menu state, and desktop layout boundaries.

## 13. Files changed

Changed:

- `blog/assets/blog.css`

Added:

- `docs/UNIT_5A_FIX_MOBILE_OVERFLOW_AND_ARTICLE_HEADER_CORRECTION.md`

Unchanged:

- `blog/index.html`
- `blog/post-template.html`
- `blog/assets/blog.js`
- `blog/data/posts.json`
- main-site implementation files

## 14. Verification record

- Branch: `main`
- CSS-first correction: complete
- Main homepage files changed: no
- Blog HTML changed: no
- Blog JavaScript changed: no
- Posts JSON changed: no
- 375px horizontal overflow: verified by browser
- 390px horizontal overflow: verified by browser
- Homepage hero copy: fully visible
- Article title: fully visible
- Placeholder grid: contained within the viewport
- Mobile menu: verified
- 1024px and 1440px desktop boundaries: preserved
- External dependencies added: none
- Deployment: not performed
- Commit/push: not performed

## 15. Recommended next unit

**Unit 5B — Blog Visual Approval and First Real Article**

Goal: obtain final visual approval for the corrected blog foundation and define the evidence/content boundary for the first real article before publication.

## 16. Explicitly not next

- deployment;
- commit or push without separate authorization;
- production or DNS changes;
- homepage integration;
- changing the main navigation;
- removing draft/noindex safeguards;
- publishing sample drafts;
- legacy WordPress migration;
- CMS, database, or framework adoption;
- analytics or newsletter backend;
- content automation.
