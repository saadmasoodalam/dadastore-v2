# Unit 3D5 — Dedicated Hero Visual Asset

## 1. Status

Unit 3D5 replaces the generic HTML/CSS hero dashboard with one dedicated local SVG illustration. This is a bounded SVG asset, HTML, CSS, and documentation unit. It does not change JavaScript, dependencies, deployment state, or production infrastructure.

## 2. Purpose

The purpose of this unit is to give the V3 hero a more deliberate commerce-intelligence visual that follows the hierarchy and premium dark technology direction of the approved template reference without copying its unapproved claims, products, clients, or logos.

Core law:

- Hero asset creation is not fake metric permission.
- SVG asset is not an external dependency.
- Visual reference is not claim approval.
- Hero correction is not full-site redesign.
- No deployment.

## 3. Owner feedback

The Project Owner reported that the page direction was improving but that the existing hero image was not close enough to the desired reference. The HTML/CSS dashboard felt generic, so a dedicated hero visual asset was required.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_3D4_NEW_TEMPLATE_ALIGNED_HERO_AND_PAGE_DIRECTION_PASS.md`
- `_local-reference/v3-template-reference-02.png`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- current Git repository state

The workflow authority and Unit 3D4 were read completely. The primary template reference was inspected at its original resolution. The current HTML and CSS were read completely, and JavaScript hooks were inspected and preserved.

## 5. Branch

- Implementation branch: `design/commerce-intelligence-v3`
- No merge, commit, push, preview deployment, or production action is included.

## 6. Why SVG asset was needed

The prior hero panel assembled four similarly shaped HTML cards and bar charts. Although safe, it read as a generic card stack and did not capture the reference's layered product-dashboard composition.

A dedicated SVG permits one intentional visual system with asymmetric modules, storefront structure, creative cards, acquisition flow, tracking connections, and proof chips while remaining local, scalable, dependency-free, and editable in the repository.

## 7. SVG visual direction

`assets/img/hero-commerce-intelligence.svg` provides:

- a dark rounded commerce-intelligence dashboard frame
- a compact Commerce Intelligence / Growth System header
- an Acquisition module with Meta, Google, and TikTok capability labels and an abstract flow line
- a Creative Testing module with Hooks, Angles, and Offers represented by abstract creative cards
- a Shopify / CRO module with Journey, Offers, and Checkout represented by an abstract storefront path
- a Tracking Clarity module with Pixel, Analytics, and Events represented by abstract connected nodes
- a connected system-layer module
- safe proof chips for Top Rated Plus, 100% Job Success, and $100K+ Upwork
- cyan, pink, blue, and violet accents within the established dark palette

The composition uses abstract vector shapes only. It contains no product image, client image, client identity, client logo, testimonial, dashboard screenshot, circular logo focus, radar/orbit panel, or external asset.

## 8. HTML changes

The former `.hero-panel` markup and its nested platform cards were replaced by a clean `.hero-visual` wrapper containing:

```html
<img
  src="assets/img/hero-commerce-intelligence.svg"
  alt="Commerce intelligence dashboard illustration for paid media, creative testing, Shopify CRO, and tracking systems"
/>
```

Hero copy, CTA links, proof values, platform strip, navigation, mailto targets, and required section IDs remain unchanged.

## 9. CSS changes

The unused hero-panel component rules were replaced by bounded `.hero-visual` and `.hero-visual img` rules. The wrapper supplies the existing rounded dark surface, border, top accent, glow, and shadow. The image uses `width: 100%`, `height: auto`, and `object-fit: contain`.

No fixed image height or cropping rule is used. Obsolete mobile overrides for the removed HTML dashboard were removed.

## 10. Proof/claim guardrails

The SVG uses only the approved proof-chip language:

- `Top Rated Plus`
- `100% Job Success`
- `$100K+ Upwork`

It excludes the reference's fabricated financial figures, conversion ratios, order totals, lift percentages, product details, rate, location, partnership language, testimonials, clients, and client logos. The full approved proof values remain in the HTML proof bar and proof section.

## 11. JS compatibility preserved

`assets/js/main.js` is unchanged. The implementation preserves:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `.reveal`
- `[data-back-to-top]`
- `[data-year]`
- navigation targets for Services, Process, Proof, Work, and Contact
- existing active-navigation, smooth-scroll, mobile-navigation, reveal, and back-to-top behavior

No runtime behavior, listener, request, analytics call, or dependency is added.

## 12. Responsive considerations

Static source checks cover the required widths:

- `375px` and `390px`: the single-column hero places the SVG below the copy; full-width CTA safeguards and the proof bar remain below it.
- `768px`: the established split hero places the visual in the second fluid grid track.
- `1024px` and `1440px`: the visual expands in the wider hero track while the page container remains capped.

The SVG uses a `viewBox` and no external dimensions. The wrapper and image use fluid width, automatic height, `min-width: 0`, contained overflow, and no cropping. These rules prevent the asset itself from creating horizontal overflow. Browser/device verification remains required in the next unit.

## 13. Files changed

Added:

- `assets/img/hero-commerce-intelligence.svg`
- `docs/UNIT_3D5_DEDICATED_HERO_VISUAL_ASSET.md`

Changed:

- `index.html`
- `assets/css/style.css`

Not changed:

- `assets/js/main.js`
- existing logo, favicon, Open Graph, and raster assets
- dependency or build configuration
- private local references

## 14. Verification record

- Current branch is `design/commerce-intelligence-v3`.
- The new SVG exists and parses as valid XML.
- `index.html` references `assets/img/hero-commerce-intelligence.svg` once.
- The SVG contains none of the forbidden claims specified by Unit 3D5.
- All five approved full proof values remain present in `index.html`.
- Required IDs `services`, `process`, `proof`, `work`, and `contact` remain present and unique.
- All five mailto links target `mailto:dadastore.co@gmail.com`.
- `assets/js/main.js` has no Git diff.
- No external URL, font import, dependency, raster asset, analytics code, or contact backend was added.
- `git diff --check` is used as the final whitespace verification.

## 15. Known limitations

- Static inspection is not browser, physical-device, or Project Owner visual approval.
- The illustration is an abstract service-system visual, not operating software or a real analytics screenshot.
- Text inside a single scalable SVG becomes smaller on narrow screens; it supports the visual hierarchy but does not replace the surrounding accessible HTML content.
- Marketplace proof can change and requires revalidation before public preview approval.
- No formal accessibility, screen-reader, Lighthouse, social-preview, console, network, or performance result is claimed.
- Exact hero balance, SVG label legibility, proof-bar spacing, and page rhythm at each target width require browser review.
- The branch is not deployed, merged, or approved for production.

## 16. Recommended next unit

**Unit 3E2 — Post-Template Browser QA and Visual Review**

Goal: verify the template-aligned page and dedicated hero SVG across the required browsers and viewport widths, including image loading, legibility, overflow, layout rhythm, navigation behavior, console/network state, reduced motion, mailto targets, and accessibility foundations before owner approval.

## 17. Explicitly not next

- another broad redesign before browser and owner review
- production cutover
- preview or production deployment
- merge to `main`
- DNS, CNAME, or custom-domain changes
- JavaScript feature expansion
- fake metrics, client results, testimonials, clients, or product images
- external fonts, dependencies, frameworks, or animation libraries
- analytics or contact backend
- case-study publication
- live DaDaStore repository or site modification

## 18. Test record

No automated test suite is required for this bounded SVG/HTML/CSS/docs visual unit. Static SVG validity, content-boundary, asset-reference, structure, selector, responsive-rule, mailto, JavaScript-integrity, and Git checks are used. Browser QA is deferred to Unit 3E2.
