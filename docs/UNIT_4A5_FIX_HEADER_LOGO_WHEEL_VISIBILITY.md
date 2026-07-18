# Unit 4A5-Fix — Header Logo Wheel Visibility Fix

## 1. Status

Unit 4A5-Fix is a bounded logo-asset, CSS, and documentation correction. It replaces the production header logo with the exact owner-specified approved source and removes sizing constraints that could reduce or clip the full cart artwork.

No JavaScript, hero, navigation, proof, dependency, deployment, merge, commit, or push action is included.

## 2. Purpose

The purpose of this correction is to ensure the header shows the complete original DaDaStore cart mark, including both wheels, while preserving the original wordmark typography and source artwork.

Core law:

- Logo display must preserve original artwork.
- Do not recreate logo text manually.
- Do not crop the brand mark.
- Logo correction is not redesign expansion.

## 3. Owner feedback

The Project Owner identified `incoming-brand/dadastore-logo-horizontal-dark-bg.png` as the correct source and reported that the current header display appeared to lose the cart wheels.

The previous production asset used the approved no-tagline `1101 × 204` variant. That source did not contain the wheel/tagline area visible in the owner-specified `1101 × 289` file.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4A5_REPLACE_HEADER_TEXT_LOCKUP_WITH_ORIGINAL_LOGO_ASSET.md`
- `incoming-brand/dadastore-logo-horizontal-dark-bg.png`
- pre-fix `assets/img/dadastore-header-logo.png`
- `index.html`
- `assets/css/style.css`
- JavaScript hook usage in `assets/js/main.js`
- current Git repository state

## 5. Branch

- Current branch: `refine/v3-section-review`
- No deployment, merge, DNS action, production cutover, or live-site modification is included.

## 6. Corrected source

The production asset is now copied byte-for-byte from:

```text
incoming-brand/dadastore-logo-horizontal-dark-bg.png
```

Production path:

```text
assets/img/dadastore-header-logo.png
```

The corrected asset retains the source's:

- `1101 × 289` dimensions
- original cart mark
- both cart wheels
- original DaDaStore wordmark typography
- original `Digital Marketing • Ecommerce Growth` tagline artwork
- original aspect ratio and pixel data

The approved source file itself is not modified.

## 7. Header integration

The existing header reference was already correct and remains:

```html
<img class="header-brand-logo" src="assets/img/dadastore-header-logo.png" alt="DaDaStore" />
```

The containing brand link continues to target `#top` and use the accessible label `DaDaStore home`.

`index.html` required no additional correction in this fix because it already referenced the production asset with the required alt text.

## 8. Wheel visibility and CSS correction

The header logo is now sized by width while retaining `height: auto`.

The correction:

- removes all `max-height` constraints from `.header-brand-logo`
- adds `display: block`
- retains `object-fit: contain`
- retains left-centered object positioning
- keeps the original aspect ratio
- keeps the header brand link overflow visible
- adds one pixel of vertical link padding
- uses bounded widths of `156px` on narrow mobile, `180px` by default, and `204px` on desktop

The header and logo wrapper do not use `overflow: hidden`, so the lower wheel area is not clipped.

## 9. Manual logo text remains removed

The header contains no manually recreated:

- DaDaStore wordmark text
- `.co` suffix
- tagline
- CSS approximation of the logo font

All visible brand artwork in the header comes from the approved raster asset.

## 10. Responsive considerations

- `375px` and `390px`: the full source renders at `156px` wide with automatic height, keeping both wheels visible while preserving the existing `44px` menu control.
- `768px`: the logo renders at `180px` wide and remains inside the mobile-navigation header.
- `1024px` and `1440px`: the logo renders at `204px` wide; the desktop header grows only as required by the preserved source ratio and existing padding.

No fixed image height, cropping container, aspect-ratio override, transform, or horizontal-overflow behavior is introduced.

## 11. Protected behavior preserved

The following remain unchanged:

- hero headline and supporting copy
- `assets/img/hero-commerce-intelligence.png`
- hero value cards and inline icons
- proof bar
- navigation links
- all section IDs
- all mailto targets
- `assets/js/main.js`

No external font, icon library, framework, package, or runtime dependency is added.

## 12. Files changed

Changed:

- `assets/img/dadastore-header-logo.png`
- `assets/css/style.css`

Added:

- `docs/UNIT_4A5_FIX_HEADER_LOGO_WHEEL_VISIBILITY.md`

Inspected but not additionally changed by this fix:

- `index.html`

Not changed:

- `assets/js/main.js`
- `assets/img/hero-commerce-intelligence.png`
- original files under `incoming-brand/`

## 13. Verification record

- Current branch is verified as `refine/v3-section-review`.
- Production logo exists and decodes as `1101 × 289`.
- Production-logo SHA-256 matches the exact owner-specified source.
- Source and production assets were visually inspected with both cart wheels present.
- Header reference and alt text remain correct.
- Manual logo text/classes remain absent.
- Header/logo CSS contains no `overflow: hidden` or `max-height` crop constraint.
- JavaScript and hero PNG retain their protected hashes and have no Git diff.
- The `incoming-brand/` aggregate hash remains unchanged.
- No `incoming-brand/` file is staged.
- All mailto links use `mailto:dadastore.co@gmail.com`.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 14. Recommended next section review

**Unit 4B — Proof Bar and Platform Strip Review**

Goal: review the proof bar and platform strip as the next bounded homepage surfaces after owner confirmation of the corrected header logo.

## 15. Explicitly not next

- manual wordmark or tagline recreation
- logo redesign or image editing
- committing `incoming-brand/`
- hero-image or hero-card changes
- JavaScript feature work
- external dependencies
- broad redesign
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 16. Test record

No automated application test suite is required for this bounded asset/CSS correction. Source equality, raster dimensions, visual inspection, CSS guardrails, protected hashes, mailto targets, incoming-source integrity, staging state, and Git checks are used. Browser and physical-device review remain separate owner-QA steps.
