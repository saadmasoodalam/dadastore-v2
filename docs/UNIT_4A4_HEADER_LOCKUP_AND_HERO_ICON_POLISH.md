# Unit 4A4 — Header Lockup and Hero Icon Polish

## 1. Status

Unit 4A4 is a bounded HTML, CSS, and documentation polish pass. It refines the existing header text lockup and upgrades the three existing inline hero icons without modifying JavaScript, image assets, dependencies, content claims, deployment state, or unrelated page sections.

## 2. Purpose

The purpose of this unit is to make the header identity cleaner and the hero value-card icons more premium, cyber/neon, and template-aligned while preserving the approved brand and proof boundaries.

Core law:

- Polish is not brand replacement.
- Header lockup is not global rename.
- Icon polish is not feature expansion.
- No fake claims.
- No deployment.

## 3. Owner feedback

The Project Owner confirmed that Unit 4A3 improved the header and value cards, then identified two remaining issues:

- the logo text and `.co` treatment still felt visually forced
- the hero icons needed more futuristic depth and detail

This unit addresses only those presentation concerns.

## 4. Template reference used

`_local-reference/v3-template-reference-02.png` was inspected for:

- the visual dominance of `DaDaStore` over the smaller `.co` suffix
- the compact alignment between cart mark, wordmark, and tagline
- softer tagline typography
- layered neon line icons
- compact glass icon surfaces
- controlled glow rather than oversized icon treatment

The reference's metrics, rate, client content, platform/client logos, testimonials, global brand naming, external fonts, and page-wide structure were not copied.

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Header polish

The existing unmodified cart mark remains:

```text
assets/img/dadastore-mark.png
```

The preferred lockup approach is used:

- `DaDaStore` remains the dominant editable wordmark
- `.co` is reduced to a lighter cyan superscript-style accent
- wordmark weight and spacing are softened
- `Ecommerce Growth. Engineered.` remains in title case
- tagline color, size, tracking, line height, and alignment are made subtler

The header link still targets `#top` and retains the accessible label `DaDaStore home`.

## 7. Hero icon polish

The three card icons remain local inline SVGs and are upgraded as follows:

- `Data-Driven Decisions`: layered target rings, signal ticks, illuminated core, and orbit pulse
- `Performance Marketing`: two connected growth paths, network nodes, a small spark, and illuminated endpoint
- `Scalable Growth Systems`: perspective system layers, connected sides, core point, and active node

Each SVG contains a unique local pink/violet/cyan gradient. CSS adds:

- layered neon strokes
- dashed orbit detail
- compact glow cores and pulse dots
- bounded glass icon wrappers
- a soft internal bloom
- a narrow gradient highlight across each value card

The icons remain decorative and do not replace the visible card labels.

## 8. Brand boundary

The `.co` accent remains limited to the header's visual lockup. Primary identity remains `DaDaStore` in:

- title and metadata
- accessible header label
- hero and section copy
- proof language
- footer branding

This unit does not globally rename the business, create a new logo, or modify an existing logo asset.

## 9. Proof and claim guardrails

Hero headline, supporting copy, CTA targets, raster image, proof bar, navigation, section IDs, and mailto links remain unchanged.

No new:

- ROAS or CPA claim
- revenue or ad-spend claim
- sales or order metric
- growth percentage
- hourly rate
- testimonial
- client identity or logo
- fake platform mark

is introduced. Icon polish is decorative presentation, not evidence or product functionality.

## 10. Responsive considerations

Static layout review covers:

- `375px` and `390px`: the `40px` cart mark, compact wordmark, softened tagline, fixed menu target, and stacked hero cards remain within the floating header and page container.
- `768px`: the tagline remains compact beside the mark; hero cards remain stacked so icon and label widths are protected.
- `1024px`: desktop navigation activates; the wordmark scales modestly; the three value cards form one row with compact `32px` icons.
- `1440px`: the capped header and hero widths preserve the same controlled proportions.
- below `360px`: the tagline may hide to protect the home link and navigation control from crowding.

The lockup, cards, and labels retain `min-width: 0`. Icons use fixed bounded dimensions, SVGs scale inside their wrappers, and no page-level width or overflow behavior is added.

## 11. JS compatibility preserved

`assets/js/main.js` is unchanged. This unit preserves:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `.reveal`
- `[data-back-to-top]`
- `[data-year]`
- all observed navigation section IDs

Header scroll state, mobile navigation, smooth scrolling, active navigation, reveal behavior, back-to-top behavior, and current-year output remain compatible.

## 12. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4A4_HEADER_LOCKUP_AND_HERO_ICON_POLISH.md`

Not changed:

- `assets/js/main.js`
- `assets/img/dadastore-mark.png`
- `assets/img/hero-commerce-intelligence.png`
- any other image or asset
- dependency, build, analytics, contact-backend, or deployment configuration

## 13. Verification record

- Current branch is verified as `refine/v3-section-review`.
- JavaScript and image assets are checked against their pre-unit Git state and SHA-256 values.
- Header text still contains `DaDaStore`, the `.co` accent, and `Ecommerce Growth. Engineered.`.
- The home link still targets `#top`.
- All three approved hero value labels remain present.
- Three inline SVG icon systems and three unique local SVG gradients are present.
- No external icon library, font, image, package, or runtime dependency is added.
- Protected hero content, proof values, mailto targets, navigation links, section IDs, and JavaScript hooks remain present.
- Forbidden-claim checks cover the changed header/hero region and CSS.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 14. Recommended next section review

**Unit 4B — Proof Bar and Platform Strip Review**

Goal: review the verified proof bar and platform strip as the next bounded homepage surfaces without reopening the approved hero image, headline, or Unit 4A4 header/icon direction.

## 15. Explicitly not next

- global DaDaStore.co rename
- new or modified image/logo assets
- external fonts, icon libraries, frameworks, or dependencies
- further hero-image generation
- fake metrics, testimonials, client identities, or logos
- JavaScript feature work
- broad redesign
- analytics or contact backend
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 16. Test record

No automated application test suite is required for this bounded HTML, CSS, and documentation refinement. Static content, responsive-rule, protected-file hash, image-integrity, proof/claim, mailto, dependency, SVG-structure, and Git checks are used. Browser and physical-device visual review remain separate owner-QA steps.
