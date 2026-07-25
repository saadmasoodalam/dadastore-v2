# Unit 3D4 — Hero Visual Panel Replacement

## 1. Status

Unit 3D4 replaces the Project Owner-rejected V3 hero visual panel through HTML and CSS only. This bounded correction preserves the Unit 3D3 header and hero-text work, all existing JavaScript behavior, image assets, proof boundaries, contact architecture, and deployment state.

## 2. Purpose

The purpose of this unit is to replace the generic circular mark/radar composition with a more template-aligned commerce-growth operating-system preview that communicates DaDaStore’s connected capabilities without presenting fake business data.

Core law:

- Hero visual replacement is not full-site redesign.
- Template alignment is not fake-proof permission.
- Visual dashboard language is not real performance data.
- Abstract flow is not a measured result.
- Branch work is not deployment or production cutover.

## 3. Owner feedback

The Project Owner accepted that the text/header direction was closer to the desired template but rejected the hero’s right-side visual. The centered DaDaStore mark, circular rings, and floating cards read as a generic logo/radar or AI-orb treatment rather than a premium commerce-growth system.

Unit 3D4 removes that concept completely and limits its correction to the hero visual and the directly associated proof strip.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_3D2_TEMPLATE_ALIGNED_V3_REDESIGN_PASS.md`
- `docs/UNIT_3D3_HERO_TEXT_AND_HEADER_LOGO_CORRECTION.md`
- `_local-reference/v3-template-reference-01.png`
- all files matching `_local-reference/v3-template-reference-*.png` (one file was present)
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- current Git repository state

The reference was inspected at full resolution. Its layered information panels, compact status cards, structured hierarchy, dark gradient surfaces, and dashboard-like composition informed the replacement. Its product imagery, client logos, screenshots, testimonials, and numerical business metrics were not copied.

## 5. Branch

- Implementation branch: `design/commerce-intelligence-v3`
- Unit 3D4 builds on the current Unit 3D3 working-tree correction.
- `main` remains the stable V2 fallback.
- No merge, deployment, DNS, CNAME, custom-domain, or production action is included.

## 6. Hero visual problem

The rejected panel depended on:

- a large centered DaDaStore mark
- three concentric circular orbit/radar rings
- small absolutely positioned signal cards
- a visual hierarchy dominated by the logo rather than the operating system
- substantial decorative space without enough meaningful structure

Those elements and all associated `intelligence-core`, `orbit`, `core-mark`, `signal-card`, `signal-bars`, and `signal-line` styles were removed.

## 7. Replacement visual direction

The new panel is a layered **Commerce OS** interface composed entirely from semantic HTML and native CSS:

- a compact top identity/status row labelled `Commerce OS`
- a `Live Growth System` status chip with a non-metric indicator
- four stacked operating layers: Paid Media, Creative Testing, Shopify / CRO, and Tracking & Analytics
- approved safe status phrases: Structured acquisition, Testing angles, Store journey, and Signal clarity
- abstract bars and paths that indicate flow without numerical values or measured results
- three integrated Upwork proof mini-cards
- a Signal → Strategy → System → Scale footer path
- a grid surface, restrained cyan/pink/blue accents, layered borders, and low-intensity shadows

The panel contains no hero logo, product image, screenshot, performance graph, client identity, or fake metric.

## 8. HTML changes

- Replaced the hero panel’s circular logo/orbit markup with the Commerce OS structure.
- Added the top status identity and decorative indicator dots.
- Added four semantic operating-layer articles with safe descriptive phrases.
- Added abstract flow indicators marked as decorative.
- Moved `100% Job Success`, `Top Rated Plus`, and `$100K+ Earned on Upwork` into the panel as attributed proof mini-cards.
- Reduced the existing hero proof strip to the two secondary approved values: `5,000+ Hours` and `74 Jobs Completed`.
- Preserved the Unit 3D3 headline, hero copy, CTAs, header, contact email, and all required section IDs.

## 9. CSS changes

- Rebuilt `.hero-panel` as a content-sized grid panel with a subtle background grid, restrained gradient edge, and layered dark surfaces.
- Added dedicated styles for panel identity, status dots, operating stack, layer indices, layer copy, flow indicators, proof cards, and system path.
- Removed all radar/orbit/logo-panel and floating-signal-card styles.
- Removed obsolete desktop/mobile overrides tied to the rejected composition.
- Changed proof-mini-card layout from two-plus-one on smaller widths to three columns only at desktop widths.
- Removed fixed hero-panel minimum heights so content controls height and avoids large empty areas.
- Added narrow-mobile reductions for padding, grid columns, type, status-chip width, and flow composition.

## 10. Proof values preserved

The same five approved values remain present once each across the hero panel and secondary proof strip:

- `100% Job Success`
- `Top Rated Plus`
- `$100K+ Earned on Upwork`
- `5,000+ Hours`
- `74 Jobs Completed`

Every value remains visibly attributed to Upwork. Abstract operating bars contain no numbers and are not described as performance results.

## 11. Fake claims excluded

The replacement does not include:

- `$55/hr`
- `$50M+`, `120M+`, or `98%`
- revenue-generated or ad-spend-managed claims
- ROAS, CPA, conversion lift, satisfaction, orders, sales, or revenue data
- fake analytics or a fake dashboard screenshot
- client names, identities, logos, testimonials, or reviews
- Upwork screenshots or raw portfolio imagery
- new images or externally loaded visual assets

## 12. JavaScript compatibility preserved

`assets/js/main.js` is unchanged. The replacement preserves all behavior-critical hooks and classes:

- `[data-header]`, `[data-nav]`, and `[data-nav-toggle]`
- mobile navigation state classes and `aria-expanded`
- all internal hash links and active-navigation section IDs
- `.reveal` on the hero panel and secondary proof strip
- `[data-back-to-top]`
- `[data-year]`

The new operating-layer and proof elements require no new JavaScript and add no event handlers.

## 13. Responsive considerations

- `375px` and `390px`: the complete panel stacks below hero text; four layers retain title/status/flow columns; proof cards use two columns with the third spanning full width; compact padding prevents clipping.
- `768px`: the panel remains in the established split hero with content-driven height; the proof cards remain readable without forcing three narrow columns.
- `1024px`: panel padding increases and the three proof cards form one row within the wider visual column.
- `1440px`: the visual remains balanced against the Unit 3D3 headline and uses the capped page container rather than expanding into empty space.
- The secondary proof strip remains a two-column layout and spans the complete hero grid.

Source safeguards include `min-width: 0`, `minmax()` tracks, wrapping copy, content-driven height, bounded type, and mobile-specific layer columns. Browser verification remains required in Unit 3E2.

## 14. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_3D4_HERO_VISUAL_PANEL_REPLACEMENT.md`

Not changed:

- `assets/js/main.js`
- files under `assets/img/`
- favicon, Open Graph, or other assets
- `_local-reference/` private planning sources

## 15. Verification record

- Current branch is `design/commerce-intelligence-v3`.
- `assets/js/main.js` matches its HEAD object exactly.
- No file under `assets/img/` has a tracked diff.
- No external dependency, font, image, framework, library, analytics, or contact backend was added.
- Rejected hero selectors and markup are absent.
- Commerce OS, all four required system layers, all four safe status phrases, and Live Growth System are present.
- All five approved proof values remain present.
- Forbidden-claim search found no `$50M`, `120M`, `98%`, `ROAS`, `CPA`, `revenue generated`, or `ad spend managed` implementation content.
- Required IDs `services`, `process`, `proof`, `work`, and `contact` remain present and unique.
- All four public mailto links remain `mailto:dadastore.co@gmail.com`.
- CSS braces and major HTML structural tag counts are balanced.
- `git diff --check` passed.

## 16. Known limitations

- Static source inspection is not browser/device or Project Owner visual approval.
- The panel is an abstract service-system composition, not software, a live product, or a data dashboard.
- Exact wrapping and density of the three desktop proof cards require browser verification.
- The four flow indicators intentionally communicate sequence only and must not be interpreted as measured performance.
- Marketplace values require revalidation before public preview approval because they can change.
- No formal accessibility, screen-reader, Lighthouse, social-preview, or physical-device result is claimed.
- The branch is not deployed, merged, or approved for production.

## 17. Recommended next unit

**Unit 3E2 — Post-Redesign Interaction and Browser QA Pass**

Goal: verify the Unit 3D3 header/text correction and Unit 3D4 Commerce OS panel across required browser widths, including interaction, console, network, overflow, reduced-motion, visual-density, and accessibility-foundation checks.

## 18. Explicitly not next

- broader hero or full-site redesign
- JavaScript feature expansion
- new images, screenshots, external fonts, dependencies, frameworks, or animation libraries
- real or fake analytics-dashboard behavior
- new proof claims, testimonials, reviews, client identities, or client logos
- analytics or contact backend
- merging without Project Owner approval
- deployment or production cutover
- DNS, CNAME, or custom-domain changes
- live DaDaStore repository/site modification

## 19. Test record

No automated test suite is required for this bounded HTML/CSS/docs correction. Static structure, selector, asset-integrity, content-boundary, responsive-rule, and Git verification are used. Browser QA remains deferred to Unit 3E2.
