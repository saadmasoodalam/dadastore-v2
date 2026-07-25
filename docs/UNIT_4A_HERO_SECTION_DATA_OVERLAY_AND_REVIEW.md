# Unit 4A — Hero Section Data Overlay and Review

## 1. Status

Unit 4A is a bounded HTML, CSS, and documentation refinement of the approved V3 hero. It adds editable proof overlays around the raster hero without modifying the image, JavaScript, dependencies, deployment state, or any other page section.

## 2. Purpose

The purpose of this unit is to enhance the approved hero with a premium proof layer that remains readable, editable, attributable, and independent of the raster image.

Core law:

- Hero data overlay is not fake metric permission.
- Editable HTML proof is safer than baked image text.
- Hero refinement is not full-site redesign.
- Refinement branch is not production cutover.

## 3. Owner feedback

The Project Owner approved the final raster hero as visually strong and asked whether data around the image could make the composition feel more complete. The selected approach adds real proof as HTML/CSS overlays rather than baking text into the PNG.

Current hero review:

- the visual direction is approved
- the raster hero image is approved
- editable overlay data has been added as a separate proof layer
- final mobile browser QA is still required after the overlay change

## 4. Branch

- Current branch: `refine/v3-section-review`
- No merge, deployment, production action, commit, or push is included.

## 5. Hero overlay decision

The proof layer is implemented as five small glass/neon HTML cards inside the existing `.hero-visual` wrapper.

On tablet and desktop, the cards sit at the visual's outer edges:

- two at the top corners
- two at the bottom corners
- one centered vertically at the right edge

This keeps the central glowing cart and holographic platform as the primary focal point. On narrow mobile screens, the cards leave overlay mode and become a normal grid below the image.

## 6. Approved data used

Only the approved public Upwork proof is used:

- `100% Job Success`
- `Top Rated Plus`
- `$100K+ Earned`
- `5,000+ Hours`
- `74 Jobs`

Each card is visibly labelled `Upwork`. The shorter overlay labels remain consistent with the fuller approved values in the proof bar below the hero.

## 7. Forbidden data excluded

The overlays do not introduce:

- ROAS
- revenue-generated claims
- ad-spend-managed claims
- sales or order metrics
- growth percentages
- testimonials
- client logos
- `$55/hr`

The existing phrase `sales conversations` remains in a Work-framework description; it is not a numerical sales claim and was not introduced or changed by this hero-only unit.

## 8. HTML changes

`index.html` now includes `.hero-data-overlays` immediately after the existing hero PNG inside `.hero-visual`.

Each `.hero-data-chip` contains:

- a small `Upwork` source label
- one approved proof value
- a position-specific modifier class

The group uses `aria-label="Verified Upwork marketplace proof"`. Hero copy, CTA links, raster-image source and alt text, the separate proof bar, navigation, section IDs, and mailto targets remain unchanged.

## 9. CSS changes

The new styles provide:

- a responsive mobile-first proof grid
- glass/neon surfaces using the established cyan, pink, violet, and mint accents
- small balanced typography
- translucent borders, inset highlights, bounded glow, and backdrop blur
- absolute edge positioning from `760px` upward
- `min-width: 0` and constrained chip widths
- pointer-event-free overlays that do not interfere with interaction

No fixed hero-image height, crop, page-level width, or external font/dependency was added.

## 10. Responsive considerations

- `375px` and `390px`: the image remains fully visible above a two-column proof grid; the final value spans both columns; CTAs remain above the visual and the main proof bar remains below it.
- `768px`: compact edge cards use a maximum width of `122px` inside the fluid hero-image track, leaving the central cart visible.
- `1024px`: the wider visual track gives the edge cards additional separation from the central focal point.
- `1440px`: the capped layout preserves the same bounded positions without allowing the chips to drift outside the wrapper.

The wrapper retains contained overflow. The mobile grid uses `minmax(0, 1fr)` tracks, while desktop chips use bounded `max-width` values. No horizontal-scrolling behavior is introduced.

Static layout review confirms the intended breakpoint behavior. Final browser/mobile visual QA remains required because this unit changes above-fold density.

## 11. JS compatibility preserved

`assets/js/main.js` is unchanged. The implementation does not rename or remove:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `.reveal`
- `[data-back-to-top]`
- `[data-year]`
- observed section IDs

Mobile navigation, smooth scrolling, active navigation, reveal effects, back-to-top behavior, and current-year output remain compatible.

## 12. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4A_HERO_SECTION_DATA_OVERLAY_AND_REVIEW.md`

Not changed:

- `assets/js/main.js`
- `assets/img/hero-commerce-intelligence.png`
- any logo, favicon, or other asset
- dependency or build configuration

## 13. Verification record

- Current branch is `refine/v3-section-review`.
- The hero PNG SHA-256 hash was captured before and after implementation.
- The JavaScript SHA-256 hash was captured before and after implementation.
- All five approved overlay values are present in the hero overlay.
- The overlay contains no fake metric, testimonial, client logo, rate, or unapproved proof.
- All mailto links continue to target `mailto:dadastore.co@gmail.com`.
- No external font, library, framework, or runtime dependency was added.
- CSS braces and the hero's responsive positioning rules are statically checked.
- `git diff --check` is used for final whitespace validation.

## 14. Recommended next section review

**Unit 4B — Proof Bar and Platform Strip Review**

Goal: review the proof bar and platform strip after the hero-overlay refinement, decide whether duplicated proof remains useful, and apply only bounded content/visual changes approved for those two surfaces.

## 15. Explicitly not next

- full-site redesign
- changes to the hero PNG
- new images or external visual assets
- JavaScript changes
- fake metrics or unapproved proof
- testimonials, client logos, or private client data
- analytics or contact backend
- merge or deployment
- DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 16. Test record

No automated application test suite is required for this bounded HTML/CSS/docs visual refinement. Static content, structure, responsive-rule, protected-file hash, mailto, dependency, and Git checks are used. Final mobile/browser review is deferred to the next owner QA step.
