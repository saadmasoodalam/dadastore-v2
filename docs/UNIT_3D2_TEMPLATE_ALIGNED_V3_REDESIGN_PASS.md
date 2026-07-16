# Unit 3D2 — Template-Aligned V3 Redesign Pass

## 1. Status

Unit 3D2 applies the Project Owner’s visual correction to the V3 design branch through HTML composition and CSS only. It makes the homepage clearly more advanced and template-aligned without changing JavaScript, assets, approved proof boundaries, contact architecture, dependencies, or deployment state.

## 2. Purpose

The purpose of this correction is to move the V3 homepage beyond a conservative V2 polish and establish a distinct premium commerce-growth landing-page composition inspired by the approved template reference.

Core law:

- Template alignment is not fake-claim permission.
- Visual redesign is not production cutover.
- HTML/CSS correction is not JavaScript expansion.
- Reference matching is not copying fake metrics.
- Design branch work is not live `dadastore.co` replacement.

## 3. Owner correction

The Project Owner reported that the technically sound V3 preview still felt too close to V2 and did not sufficiently reflect the uploaded template direction. Unit 3D2 responds by changing the page’s structural rhythm, hero balance, proof integration, surface contrast, and panel hierarchy rather than adding more decoration to the prior layout.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_3A_COMMERCE_INTELLIGENCE_DESIGN_DIRECTION_AND_PROOF_BOUNDARY.md`
- `docs/UNIT_3B_COMMERCE_INTELLIGENCE_HOMEPAGE_WIREFRAME_AND_CONTENT_MAP.md`
- `docs/UNIT_3C_V3_HTML_STRUCTURE_IMPLEMENTATION.md`
- `docs/UNIT_3D_V3_VISUAL_SYSTEM_IMPLEMENTATION.md`
- `docs/UNIT_3E_V3_INTERACTION_COMPATIBILITY_PASS.md`
- `_local-reference/v3-template-reference-01.png`
- all files matching `_local-reference/v3-template-reference-*.png` (one file was present)
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- current Git repository state

The template reference was inspected at full resolution. Its split hero, layered panels, dark-to-light section transition, stat-strip placement, capability grouping, process rhythm, and strong closing CTA informed the redesign. Its product image, client logos, testimonials, case study, numerical performance claims, and third-party content were not copied.

## 5. Branch

- Implementation branch: `design/commerce-intelligence-v3`
- `main` remains the stable V2 fallback and comparison point.
- No merge, deployment, production cutover, DNS, CNAME, or custom-domain change is included.

## 6. Template-alignment changes made

- Replaced the previously uniform dark-page treatment with a deliberate dark hero, bright editorial sections, focused dark capability/proof panels, and a compact dark closing CTA.
- Reduced hero headline dominance and balanced it against a layered commerce-intelligence composition.
- Added an integrated marketplace-proof strip at the hero transition using only approved Upwork values.
- Reframed Services as one connected capability system rather than six independent generic cards.
- Converted Commerce Intelligence into a two-part operating-model composition with a connected Signal → Strategy → System → Scale sequence.
- Refined Process into premium numbered steps with a clearer visual flow.
- Added abstract CSS-only framework previews that keep Work visibly provisional.
- Strengthened the final CTA with an existing brand mark, clearer content/action separation, and high-contrast treatment.
- Preserved system-first typography while improving scale, spacing, hierarchy, and above-the-fold balance.

## 7. HTML changes

- Split the approved hero headline into layout spans without changing its wording.
- Replaced the generic hero metric panel with a layered operating-model composition using the existing DaDaStore mark.
- Added five approved Upwork proof cards next to the hero transition.
- Added semantic wrappers and labels for the Services capability system.
- Rebuilt the Commerce Intelligence card grid as four connected model steps.
- Added a supporting Process introduction.
- Reframed the Proof section as an attributed marketplace narrative and credential panel instead of repeating large metric cards.
- Added decorative, explicitly hidden CSS-only framework structures to each Work placeholder.
- Split the Contact CTA into brand mark, message, and mailto action regions.
- Preserved all approved page copy, six services, six process steps, three Work placeholders, and required section IDs.

## 8. CSS changes

- Replaced the prior V3 stylesheet with a template-aligned light/dark editorial system.
- Added a compact floating capsule header with desktop and mobile states compatible with existing JavaScript.
- Added layered hero atmosphere, orbital brand composition, native signal panels, and proof-strip styling without external images or libraries.
- Added dedicated capability-system, operating-model, process-flow, credential, framework-preview, CTA, and footer treatments.
- Reduced desktop hero type scale and added narrow-mobile safeguards to avoid excessive height and clipping.
- Preserved established `760px`, `1024px`, and `1180px` responsive transitions plus the `479px` narrow-mobile safeguard.
- Preserved focus-visible, reduced-motion, reveal, no-JavaScript reveal fallback, mobile-nav, active-nav, scrolled-header, and back-to-top state selectors.

## 9. Proof values preserved

The only marketplace values displayed are:

- `100% Job Success`
- `Top Rated Plus`
- `$100K+ Earned on Upwork`
- `5,000+ Hours`
- `74 Jobs Completed`

They remain labelled as Upwork marketplace proof and are visually separated from client-performance or case-study claims.

## 10. Fake claims excluded

The redesign does not include:

- the `$55/hr` profile rate
- `$50M+`, `120M+`, or `98%`
- revenue-generated or ad-spend-managed claims
- ROAS, CPA, conversion-lift, or satisfaction claims
- fake dashboards containing business metrics
- testimonials, reviews, ratings, or private messages
- client names, identities, or logos
- Upwork or portfolio screenshots
- completed case studies or invented performance outcomes

Abstract lines, bars, nodes, and panels communicate workflow concepts only; they contain no numerical performance data.

## 11. JavaScript compatibility preserved

`assets/js/main.js` is unchanged. The redesign retains:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `aria-expanded="false"`
- `.site-nav` and `.site-nav.is-open`
- `.nav-toggle` and `.nav-toggle.is-open`
- `body.nav-open`
- internal hash links and required section IDs
- `.site-nav a.is-active`
- `.reveal` and `.reveal.is-visible`
- `[data-back-to-top]` and `.back-to-top.is-visible`
- `[data-year]`

Mobile menu, Escape/outside closing, smooth/reduced-motion scrolling, active navigation, reveals, back-to-top, and current-year behavior therefore retain their existing setup paths.

## 12. Responsive considerations

- `375px` and `390px`: single-column content, two-column/last-wide proof strip, full-width hero actions, compact layered hero panel, readable mobile menu, and stacked contact action.
- `768px`: balanced split hero, five-column proof strip, two-column capability/process/framework grids, and mobile navigation.
- `1024px`: floating desktop capsule navigation, stronger split hero, two-column model layout, multi-column systems, and three-part closing CTA.
- `1180px`: three-column capability system and six-step process flow.
- `1440px`: content remains capped at `1240px` with intentional whitespace and no uncontrolled line length.

Source safeguards include capped containers, `minmax(0, 1fr)` tracks, `min-width: 0`, fluid typography, wrapping proof labels, grid transitions, and mobile-specific panel sizing. Browser QA remains required in Unit 3E2.

## 13. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_3D2_TEMPLATE_ALIGNED_V3_REDESIGN_PASS.md`

Not changed:

- `assets/js/main.js`
- logo, mark, favicon, Open Graph, or other assets
- `_local-reference/` private planning sources

## 14. Verification record

- Current branch is `design/commerce-intelligence-v3`.
- `assets/js/main.js` has no tracked diff.
- CSS braces are balanced.
- HTML opening/closing counts are balanced for major structural elements.
- Required IDs `services`, `process`, `proof`, `work`, and `contact` exist and are unique.
- All public mailto links target `mailto:dadastore.co@gmail.com`.
- All five approved proof values remain present.
- Forbidden-claim search found no `$50M`, `120M`, `98%`, `ROAS`, `CPA`, `revenue generated`, or `ad spend managed` content in implementation.
- No external CSS, JavaScript, font, image, framework, library, analytics, or contact-backend dependency was added.
- Existing local logo/mark, stylesheet, JavaScript, favicon, and Open Graph references remain valid repository paths.
- `git diff --check` passed.

## 15. Known limitations

- Static source inspection is not browser/device or Project Owner visual approval.
- Final line wrapping, panel proportions, header density, and above-the-fold height require browser QA at all required widths.
- The hero’s abstract signal panels describe operating concepts and are not live data visualizations.
- Marketplace values must be revalidated before public preview approval because they can change.
- Mobile navigation still requires JavaScript; focus is restored after Escape but no focus trap is implemented.
- No formal accessibility compliance, screen-reader, Lighthouse, social-preview, or physical-device result is claimed.
- The branch is not deployed, merged, or approved for production.

## 16. Recommended next unit

**Unit 3E2 — Post-Redesign Interaction and Browser QA Pass**

Goal: verify the preserved interactions against the corrected HTML/CSS composition and perform the required browser, console, network, responsive, visual, and accessibility-foundation checks before any approval checkpoint.

## 17. Explicitly not next

- production cutover
- DNS or CNAME changes
- replacing `dadastore.co`
- merging without Project Owner approval
- JavaScript feature expansion
- new images, screenshots, or copied template assets
- external fonts, dependencies, frameworks, or animation libraries
- analytics or tracking
- contact form or backend
- fake case studies, metrics, testimonials, reviews, or client logos
- live DaDaStore repository/site modification
- copying or committing `_local-reference/` files

## 18. Test record

No automated test suite is required for this bounded HTML/CSS/docs correction. Static structure, selector, content-boundary, dependency, responsive-rule, and Git verification are used. Browser QA is explicitly deferred to Unit 3E2.
