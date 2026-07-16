# Unit 3F — V3 Guardrails and Browser QA Plan

## 1. Status

Unit 3F is the docs-only guardrail and manual browser QA plan for the V3 design branch. It defines what must be inspected and tested before visual owner approval or any merge decision. It does not record QA completion, modify implementation, deploy the site, merge branches, or authorize production cutover.

## 2. Purpose

This plan provides a repeatable check of V3 visual quality, approved content and proof, responsive behavior, interaction safety, local asset loading, and accessibility foundations before the Project Owner decides whether the branch is ready for a preview approval checkpoint.

Core law:

- QA plan is not QA completion.
- Preview branch is not production cutover.
- Visual approval is not merge approval.
- Merge approval is not DNS or custom-domain change.
- Proof verification is not permission to invent new claims.

## 3. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_3A_COMMERCE_INTELLIGENCE_DESIGN_DIRECTION_AND_PROOF_BOUNDARY.md`
- `docs/UNIT_3B_COMMERCE_INTELLIGENCE_HOMEPAGE_WIREFRAME_AND_CONTENT_MAP.md`
- `docs/UNIT_3C_V3_HTML_STRUCTURE_IMPLEMENTATION.md`
- `docs/UNIT_3D_V3_VISUAL_SYSTEM_IMPLEMENTATION.md`
- `docs/UNIT_3E_V3_INTERACTION_COMPATIBILITY_PASS.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- current Git repository state

All listed authority documents and implementation files were read completely. The workflow rules remain the process authority; Units 3A–3E control the V3 design, proof, content, implementation, and interaction boundaries.

## 4. Branch state

- Current branch: `design/commerce-intelligence-v3`
- V3 remains isolated branch work.
- The current `main`/V2 preview remains the stable fallback and comparison point.
- No merge, deployment, production cutover, DNS change, CNAME change, or custom-domain change is approved by this plan.

## 5. Implementation files to verify

Manual QA and source guardrail review must cover:

- `index.html` — structure, content, proof, metadata, navigation targets, contact links, and local asset references
- `assets/css/style.css` — visual system, breakpoints, overflow protection, state styles, focus visibility, and reduced-motion behavior
- `assets/js/main.js` — menu, scrolling, active navigation, reveals, back-to-top, year, reduced-motion, and null-safe behavior

## 6. Proof/content guardrails

Confirm by page review and source inspection:

- [ ] The only published proof values are `100% Job Success`, `Top Rated Plus`, `$100K+ Earned on Upwork`, `5,000+ Hours`, and `74 Jobs Completed`.
- [ ] Marketplace proof is clearly attributed to Upwork and is not presented as client revenue or campaign performance.
- [ ] The `$55/hr` profile rate is not displayed.
- [ ] No fake revenue, ad-spend, ROAS, CPA, conversion-lift, satisfaction, or other performance claim appears.
- [ ] No fake testimonial or review excerpt appears.
- [ ] No fake or unapproved client logo appears.
- [ ] No private client name, private message, or sensitive client detail appears.
- [ ] No raw Upwork profile, review, or portfolio screenshot is published.
- [ ] Every Work card remains visibly labelled `Framework / Coming soon` and is not presented as a factual case study.
- [ ] All project contact links and visible contact copy use `dadastore.co@gmail.com`.
- [ ] Marketplace values are revalidated against the approved source before public preview approval because they can change.

## 7. Technical guardrails

Confirm by repository/source inspection and browser network review:

- [ ] The site remains static HTML, plain CSS, and vanilla JavaScript only.
- [ ] No framework, build tool, or package-manager runtime is introduced.
- [ ] No external CSS dependency is loaded.
- [ ] No external JavaScript dependency is loaded.
- [ ] No external font dependency is loaded.
- [ ] No analytics or tracking code is present or requested.
- [ ] No contact backend, client-side email sender, API submission, or persistence is present.
- [ ] No form submits or stores visitor data.
- [ ] No WordPress, PHP, or database runtime/reference is introduced.
- [ ] No `wp-content`, `wp-admin`, or `wp-json` path is present or requested.
- [ ] No production `CNAME`, DNS, custom-domain, or `dadastore.co` cutover change is included.
- [ ] No `_local-reference/` file is published or requested by the page.

## 8. Navigation QA checklist

Test with pointer and keyboard where applicable:

- [ ] Header logo/home link moves to `#top`.
- [ ] Services moves to `#services`.
- [ ] Process moves to `#process`.
- [ ] Proof moves to `#proof`.
- [ ] Work moves to `#work`.
- [ ] Contact moves to `#contact`.
- [ ] Every Start a Project CTA opens `mailto:dadastore.co@gmail.com` or prompts for a mail application.
- [ ] View Growth Systems moves to `#services`.
- [ ] Internal targets are not hidden unacceptably behind the fixed header.
- [ ] The mobile menu opens and closes with its toggle.
- [ ] `aria-expanded` changes between `false` and `true` with mobile-menu state.
- [ ] Selecting an internal mobile navigation link closes the menu.
- [ ] Selecting the mobile mailto CTA does not trigger hash scrolling or a JavaScript error.
- [ ] Escape closes the mobile menu and restores focus to the toggle.
- [ ] Clicking outside the open mobile menu closes it.
- [ ] Active navigation updates for Services, Process, Proof, Work, and Contact while scrolling.
- [ ] The back-to-top button appears after the established scroll threshold and returns to the page top.

## 9. Responsive QA checklist

Test these exact viewport widths in responsive mode: `375px`, `390px`, `768px`, `1024px`, `1180px`, and `1440px`. Use a representative viewport height and also inspect with a shorter height where the mobile menu could overflow.

At every width, confirm:

- [ ] No horizontal page scroll appears.
- [ ] The floating header is usable and does not cover essential content.
- [ ] The logo remains readable and appropriately sized.
- [ ] Hero heading, supporting copy, CTAs, and visual panel remain readable.
- [ ] Proof cards and labels remain readable without clipping.
- [ ] The six Services cards stack or form a balanced grid correctly.
- [ ] Signal, Strategy, System, and Scale blocks remain readable.
- [ ] The six-step Process remains readable and ordered.
- [ ] Work cards clearly remain placeholders.
- [ ] The Contact CTA is visible, readable, and usable.
- [ ] Footer content is aligned, readable, and not broken.
- [ ] No text collision, clipping, overlap, or off-screen control appears.

Width-specific expectations:

| Width | Expected layout emphasis |
| ---: | --- |
| `375px` | Single-column content, full-width hero CTAs, compact hero panel, readable mobile menu |
| `390px` | Same narrow-mobile protections with fluid headings and cards |
| `768px` | Two-column card grids where defined, three Work cards, mobile navigation retained |
| `1024px` | Desktop navigation, two-column hero, multi-column V3 content |
| `1180px` | Six-step process row and wider desktop navigation spacing |
| `1440px` | Content remains capped with intentional surrounding whitespace |

## 10. Browser QA checklist

Run the checklist in:

- Chrome desktop
- Edge desktop
- Chrome mobile emulation
- a real phone, if available (recommended but optional)

For each tested environment, confirm:

- [ ] The page loads from a local static server or the intended non-production V3 preview URL.
- [ ] DevTools Console shows zero errors after reload and interaction.
- [ ] DevTools Network shows no failed required local assets.
- [ ] Menu and navigation behavior works for that viewport.
- [ ] Mailto opens the configured handler or the browser asks which application to use.
- [ ] Internal scrolling is smooth and offset acceptably, or immediate when reduced motion is requested.
- [ ] Reveal behavior does not leave content hidden.
- [ ] Emulated reduced motion does not hide content or force animated scrolling.

Record the exact browser/version and operating system when practical. A result in one browser must not be copied as the result for another.

## 11. Network QA checklist

Open DevTools Network, enable **Disable cache**, and reload. Confirm successful loading of:

- [ ] the page document / `index.html`
- [ ] `assets/css/style.css`
- [ ] `assets/js/main.js`
- [ ] `assets/img/dadastore-logo.png`
- [ ] `favicon.ico`
- [ ] `favicon-16.png`
- [ ] `favicon-32.png`
- [ ] `apple-touch-icon.png` when requested by the browser/device
- [ ] the Open Graph image reference when it is explicitly requested or validated in a social-preview check; normal page rendering may not request metadata images

Confirm there are no failed requests for:

- [ ] local image files
- [ ] CSS
- [ ] JavaScript
- [ ] favicon or touch-icon assets requested by the environment

Confirm there are no unexpected requests for:

- [ ] external tracking or analytics
- [ ] third-party scripts, styles, fonts, or libraries
- [ ] WordPress files or endpoints
- [ ] contact APIs or form-submission services
- [ ] `_local-reference/` content

## 12. Console QA checklist

Confirm the Console remains at zero JavaScript errors:

- [ ] immediately after a cache-disabled reload
- [ ] after opening and closing the mobile menu repeatedly
- [ ] after closing the menu with Escape
- [ ] after closing the menu with an outside click
- [ ] after using each internal navigation link
- [ ] after using the back-to-top button
- [ ] after testing or emulating reduced-motion preference

Warnings should be recorded separately and assessed; do not silently classify an unexplained warning as a pass.

## 13. Visual QA checklist

The Project Owner should confirm:

- [ ] V3 feels clearly more premium than V2 while remaining recognizably DaDaStore.
- [ ] The dark luxury-tech direction is visible without reducing clarity.
- [ ] The hero feels strong, balanced, and readable.
- [ ] The Upwork proof block feels credible and does not resemble invented dashboard data.
- [ ] Service names, outcomes, and detail copy are understandable.
- [ ] The primary CTA is prominent without overwhelming the page.
- [ ] Section spacing and editorial rhythm feel clean.
- [ ] No section feels broken, accidentally empty, or misleadingly finished.
- [ ] No text collision, clipping, awkward orphan, or unreadable line wrap is visible.
- [ ] Glow, gradients, blur, and hover effects do not reduce readability.
- [ ] Work placeholders cannot reasonably be mistaken for published case studies.

Visual preference is an owner decision. A visual pass does not by itself approve merging, deployment, or production cutover.

## 14. Accessibility foundation checklist

Confirm by keyboard and visual inspection:

- [ ] Tab reaches the logo, navigation links, CTAs, mobile-menu toggle, and back-to-top control when available.
- [ ] `:focus-visible` treatment is clearly visible on interactive controls.
- [ ] The mobile-menu button updates `aria-expanded` accurately.
- [ ] Escape closing returns focus to the mobile-menu toggle.
- [ ] Headings follow a sensible `h1` → `h2` → `h3` structure by visual/source inspection.
- [ ] Meaningful images include appropriate alt text; decorative signal elements remain hidden from assistive technology where intended.
- [ ] Text and controls have readable contrast on their surfaces.
- [ ] Reduced-motion preference does not hide content or require motion to understand the page.
- [ ] Content remains usable at the tested responsive widths and browser zoom should be spot-checked if practical.

This checklist verifies accessibility foundations only. It does not establish WCAG compliance, screen-reader certification, or a formal accessibility audit.

## 15. Manual QA result template

Copy and fill this template without converting untested items into passes:

```text
Chrome desktop:
Load:
Header:
Navigation:
Hero:
Proof:
Services:
Commerce Intelligence:
Process:
Work:
Contact:
Footer:
Console:
Network:
Horizontal overflow:

Edge desktop:
Load:
Navigation:
Console:
Network:

375px:
Result / issues:

390px:
Result / issues:

768px:
Result / issues:

1024px:
Result / issues:

1180px:
Result / issues:

1440px:
Result / issues:

Overall:
Pass / Fix required

Blocking issues:
- none / list

Non-blocking issues:
- none / list
```

If a browser, width, console state, network state, or interaction was not tested, record `Not tested`; do not infer a pass from another environment.

## 16. Stop rules

Do not proceed to Unit 3G if:

- any JavaScript console error exists
- layout breaks at a required mobile or responsive width
- any mailto link is wrong or intercepted incorrectly
- any approved proof claim is wrong, stale, or unattributed
- a fake or unsupported metric, testimonial, logo, identity, or case study appears
- a required navigation target fails
- a required local asset fails to load
- horizontal page scrolling appears at a required width
- the current V2/main fallback is lost, overwritten, or no longer available

Record the issue, affected environment, reproduction steps, severity, and smallest proposed fix unit before continuing.

## 17. Recommended next unit

**Unit 3G — V3 Preview Approval Checkpoint**

Proceed only after the Project Owner performs this manual browser QA and reports the result. Unit 3G should record the environments actually tested, the owner’s explicit result, remaining limitations, fallback state, and whether further bounded fixes or a separate merge/preview decision may be planned.

## 18. Explicitly not next

- production cutover
- DNS changes
- CNAME changes
- replacing `dadastore.co`
- replacing or losing the current V2/main fallback
- merging without explicit Project Owner approval
- deployment merely because this plan exists
- analytics or tracking
- contact form or backend
- fake case studies or new performance claims
- review excerpts
- client logos or testimonials
- framework, build-tool, package-manager, or external-library adoption
- live DaDaStore repository/site modification
- copying or committing `_local-reference/` files

## 19. Test record

No browser QA result is recorded by this plan. No automated tests are required or run because Unit 3F is docs-only QA planning. Manual browser QA remains a Project Owner action before Unit 3G.
