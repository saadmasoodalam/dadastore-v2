# Unit 4F3-Fix3 — Equalize Review Card Row Heights

## 1. Status

Unit 4F3-Fix3 is a bounded CSS and documentation correction for review-card row heights. It does not change HTML, JavaScript, assets, dependencies, navigation behavior, review content, deployment, or production state.

## 2. Purpose

This unit equalizes review-card containers within each tablet and desktop grid row so shorter reviews fill the row height without changing or padding their approved wording.

## 3. Owner review

The Project Owner confirmed that Reviews navigation and grid widths are correct, but identified uneven card heights:

- Review 1 was shorter than the other cards in the first desktop row.
- Review 5 was shorter than Review 4 in the second desktop row.
- The resulting blank grid areas made the otherwise balanced layout appear incomplete.

## 4. Branch

- Current branch: `refine/v3-section-review`
- This unit does not include a commit, push, merge, deployment, DNS change, production cutover, or live-site modification.

## 5. CSS correction

From the tablet breakpoint upward:

- `.reviews-grid` uses `align-items: stretch`.
- `.review-card` uses column flex layout, `height: 100%`, and `align-self: stretch`.
- `.review-card footer` uses `margin-top: auto`.

These Reviews-specific rules let each card match the tallest card in its own grid row while keeping the rating, verification label, and quote grouped naturally above a consistently aligned attribution block.

No fixed pixel card height, filler content, vertical centering, or broad `space-between` distribution is used.

## 6. Desktop row behavior

The existing six-column structure and spans remain unchanged:

- Reviews 1–3 each span two columns and share the first row height.
- Reviews 4–5 each span three columns and share the second row height.

Review 1 therefore matches the tallest first-row card, and Review 5 matches Review 4.

## 7. Tablet and mobile behavior

- Tablet retains its two-column layout and equalizes cards that share a row.
- The final tablet card continues to span both columns.
- Mobile remains below the stretching breakpoint and keeps the original grid-based, natural-height card behavior.
- Minmax tracks and existing width constraints continue to prevent horizontal overflow and clipped content.

## 8. Content and behavior preserved

Preserved exactly:

- all five approved quotes
- all five anonymized attributions
- all five engagement categories
- all five per-review `5.0` treatments
- all five `Verified Upwork Review` labels
- the privacy and evidence note
- review-grid column spans
- Reviews navigation and active-state behavior

No HTML, JavaScript, images, logos, dependencies, or unrelated sections were changed.

## 9. Files changed

Changed:

- `assets/css/style.css`

Added:

- `docs/UNIT_4F3_FIX3_EQUALIZE_REVIEW_CARD_ROW_HEIGHTS.md`

## 10. Verification record

- Branch is `refine/v3-section-review`.
- `index.html` remains unchanged from the start of this unit.
- `assets/js/main.js` remains unchanged from the start of this unit.
- Assets remain unchanged.
- Tablet and desktop review grids stretch cards within each row.
- Attribution/category blocks align consistently at the bottom of each card.
- Mobile cards retain natural heights.
- A local headless-browser render at `1440px` confirms equal top-row and bottom-row card heights.
- A local headless-browser render at `390px` confirms natural mobile card heights with no clipping or horizontal overflow.
- The responsive CSS cascade was checked at `375px`, `390px`, `768px`, `1024px`, and `1440px`.
- The five exact approved quotes and all review metadata remain unchanged.
- Grid spans from Unit 4F3-Fix2 remain unchanged.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 11. Recommended next unit

**Unit 4G — Contact CTA and Footer Review**

Goal: review the final conversion surface and footer hierarchy without expanding into a backend, analytics, or production cutover.

## 12. Explicitly not next

- review copy changes or filler text
- additional or unapproved reviews
- R15 or truncated reviews
- fixed pixel review-card heights
- review grid-span changes
- navigation or JavaScript changes
- images, portraits, client logos, or identities
- analytics or contact-backend integration
- external dependencies, frameworks, fonts, or build tools
- merge, deployment, DNS, CNAME, production cutover, or live-site replacement
