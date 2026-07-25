# Unit 4A5 — Replace Header Text Lockup With Original Logo Asset

## 1. Status

Unit 4A5 is a bounded image-asset integration, HTML, CSS, and documentation correction. It replaces the rejected manually recreated header wordmark with approved original DaDaStore artwork and does not change JavaScript, hero content, hero icons, proof, dependencies, deployment state, or unrelated sections.

## 2. Purpose

The purpose of this unit is to make the header use the real DaDaStore wordmark typography instead of attempting to approximate the logo with editable HTML and system-font CSS.

Core law:

- Do not recreate the logo font manually.
- Approved logo artwork is the brand source.
- Logo correction is not brand redesign.
- Header polish is not production cutover.

## 3. Owner feedback

The Project Owner reported that the Unit 4A4 header treatment remained visually incorrect because the DaDaStore wordmark had been manually recreated. The required correction is to use an approved original raster logo in the header.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4A4_HEADER_LOCKUP_AND_HERO_ICON_POLISH.md`
- approved files in `incoming-brand/`
- `assets/img/dadastore-logo.png`
- `assets/img/dadastore-mark.png`
- `index.html`
- `assets/css/style.css`
- JavaScript hook usage in `assets/js/main.js`
- current Git repository state

## 5. Source inspection and decision

The preferred approved dark-background sources were inspected:

- `incoming-brand/dadastore-logo-horizontal-dark-bg.png` — `1101 × 289`, includes a long tagline
- `incoming-brand/dadastore-logo-horizontal-no-tagline-dark-bg.png` — `1101 × 204`, horizontal wordmark without tagline
- `incoming-brand/dadastore-logo-stacked-dark-bg.png` — `1169 × 1003`, stacked composition

The approved no-tagline horizontal file was selected because:

- it preserves the original DaDaStore cart and wordmark typography
- its `1101:204` aspect ratio is appropriate for a compact horizontal header
- the wordmark remains larger and clearer at mobile and desktop header sizes
- the tagline in the taller source would become too small to read at the available header height
- the stacked source would consume excessive vertical space

No tagline was manually recreated as a fallback.

## 6. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 7. Production header asset

The approved source was copied without image editing into:

```text
assets/img/dadastore-header-logo.png
```

Source:

```text
incoming-brand/dadastore-logo-horizontal-no-tagline-dark-bg.png
```

The production copy retains the source's original dimensions, pixel data, aspect ratio, transparency, cart mark, and wordmark artwork.

The original `incoming-brand/` file remains unchanged and excluded from staging.

## 8. HTML integration

The header home link now contains one image:

```html
<img class="header-brand-logo" src="assets/img/dadastore-header-logo.png" alt="DaDaStore" />
```

The link continues to:

- target `#top`
- use `aria-label="DaDaStore home"`
- remain inside the existing header structure

The manually created cart-mark image, wordmark spans, `.co` text, and tagline text are removed from the header.

## 9. CSS integration

The former `.header-brand-mark`, `.header-brand-lockup`, `.header-brand-name`, `.header-brand-core`, `.header-brand-suffix`, and `.header-brand-tagline` rules are removed.

The new `.header-brand-logo` rule provides:

- fluid automatic height
- contained rendering
- left-aligned object positioning
- bounded header height
- a `170px` base width
- a `154px` narrow-mobile width
- a `202px` desktop width

No crop, fixed aspect-ratio distortion, external font, or text-logo fallback is introduced.

## 10. Hero value-card icons preserved

The Unit 4A4 value cards and inline SVGs remain unchanged:

- `Data-Driven Decisions`
- `Performance Marketing`
- `Scalable Growth Systems`

Their local gradients, orbit/node details, glass wrappers, and responsive layout remain intact.

## 11. Brand boundary

This unit uses approved DaDaStore artwork only in the header. It does not:

- redesign the logo
- recreate or modify the logo font
- globally rename the business
- alter metadata, page copy, proof, or footer identity
- modify any original file in `incoming-brand/`

## 12. Responsive considerations

Static sizing covers:

- `375px` and `390px`: the dedicated logo uses a `154px` width and remains clear beside the existing `44px` menu control.
- `768px`: the base `170px` logo remains compact while mobile navigation behavior is retained.
- `1024px` and `1440px`: the logo uses a `202px` width with a `44px` maximum height inside the existing `64px` desktop header.

The logo uses `height: auto`, `object-fit: contain`, and its original horizontal aspect ratio. No header-height growth or horizontal-overflow rule is introduced.

## 13. JS compatibility preserved

`assets/js/main.js` is unchanged. The implementation preserves:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `.reveal`
- `[data-back-to-top]`
- `[data-year]`
- all observed navigation section IDs

Header scroll state, navigation, smooth scrolling, active links, reveal behavior, back-to-top behavior, and current-year output remain compatible.

## 14. Files changed

Added:

- `assets/img/dadastore-header-logo.png`
- `docs/UNIT_4A5_REPLACE_HEADER_TEXT_LOCKUP_WITH_ORIGINAL_LOGO_ASSET.md`

Changed:

- `index.html`
- `assets/css/style.css`

Not changed:

- `assets/js/main.js`
- `assets/img/hero-commerce-intelligence.png`
- hero copy, CTA links, proof bar, navigation links, section IDs, or hero value cards
- original files under `incoming-brand/`
- dependency, build, analytics, contact-backend, or deployment configuration

## 15. Verification record

- Current branch is verified as `refine/v3-section-review`.
- The new production header asset exists and decodes as `1101 × 204`.
- Its SHA-256 hash matches the selected approved incoming source.
- The header references `assets/img/dadastore-header-logo.png`.
- The image alt text is `DaDaStore`.
- Manual header-logo text and its CSS classes are absent.
- JavaScript and the hero PNG retain their pre-unit SHA-256 hashes.
- The `incoming-brand/` aggregate hash is compared before and after implementation.
- No file under `incoming-brand/` is staged.
- All mailto links continue to use `mailto:dadastore.co@gmail.com`.
- No external dependency, font, icon library, or runtime integration is added.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 16. Recommended next section review

**Unit 4B — Proof Bar and Platform Strip Review**

Goal: review the proof bar and platform strip as the next bounded homepage surfaces without reopening the approved header asset or hero direction.

## 17. Explicitly not next

- manual wordmark recreation
- logo redesign or image editing
- tagline recreation with HTML/CSS
- committing `incoming-brand/`
- global brand rename
- new external fonts, icon libraries, frameworks, or dependencies
- hero image or value-card changes
- fake metrics, testimonials, client names, or logos
- JavaScript feature work
- broad redesign
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 18. Test record

No automated application test suite is required for this bounded asset integration. Static image validity, source-hash equality, responsive CSS, protected-file hashes, hook preservation, mailto targets, incoming-source integrity, staging state, and Git checks are used. Browser and physical-device visual review remain separate owner-QA steps.
