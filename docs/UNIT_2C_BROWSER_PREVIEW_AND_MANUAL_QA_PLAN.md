# Unit 2C — Browser Preview and Manual QA Plan

## Status

Unit 2C defines the browser-preview and manual-QA procedure for the current DaDaStore V2 implementation. It is docs-only test planning; no browser result is claimed.

## Purpose

The current static site must be manually reviewed through a local HTTP preview before preview-deployment planning. This plan defines a repeatable environment matrix, section-by-section checks, result record, defect classification, and stop rule for the Project Owner’s QA run.

## Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_1G_V2_FOUNDATION_COMPLETION_CHECKPOINT.md`
- `docs/UNIT_2A_CONTENT_AND_CONTACT_BOUNDARY_DECISION.md`
- `docs/UNIT_2B_APPROVED_CONTENT_AND_CONTACT_IMPLEMENTATION.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- current Git repository state and history

All authority and implementation files were read completely. Repository files are the source of truth.

## Core boundary

- A QA plan is not a QA result.
- Local preview is not deployment.
- Browser emulation is not physical-device certification.
- A visual pass is not accessibility compliance.
- Preview readiness is not production cutover.

## Current preview state

- DaDaStore V2 is a static HTML/CSS/JavaScript project.
- It has no build step or package manager.
- A Python local server is not currently available on the Project Owner laptop.
- Direct `file://` opening is not the preferred final-QA path because it does not reproduce normal HTTP asset loading.
- VS Code Live Preview is the recommended local HTTP preview path for Unit 2C.
- Unit 2C does not install or configure software.

## Local preview procedure

Using VS Code Live Preview:

1. Open the `dadastore-v2` repository folder in VS Code.
2. Open `index.html`.
3. Start Live Preview using the already-available VS Code command or editor control.
4. Open the generated localhost preview URL in the target browser.
5. Keep DevTools available throughout the run.
6. Run final manual QA from the HTTP preview, not from a `file://` URL.

The preview extension may assign the localhost port. Record the generated URL and do not assume a fixed port.

## QA environments

### Desktop browsers

- Google Chrome
- Microsoft Edge

### Responsive/browser-emulation widths

| Width | Classification | Review purpose |
| ---: | --- | --- |
| 375px | Mobile | Narrow mobile layout and interaction |
| 390px | Mobile | Common mobile layout and interaction |
| 768px | Tablet boundary review | Behavior just above the 760px CSS breakpoint |
| 1024px | Layout breakpoint review | Desktop navigation/hero breakpoint |
| 1180px | Layout breakpoint review | Wide process/heading breakpoint |
| 1440px | Large desktop review | Maximum-width composition and whitespace |

Record browser version, operating system, device-pixel ratio when relevant, viewport width, and viewport height for each result.

## Initial load QA

For every environment:

- [ ] Page loads.
- [ ] No blank screen appears.
- [ ] Logo is visible.
- [ ] Favicon is visible where browser UI exposes it.
- [ ] No image is broken.
- [ ] No horizontal page scroll appears.
- [ ] Content appears in the expected order.
- [ ] Hero is visible at load.
- [ ] No unexpected overlay appears at load.
- [ ] Console has no site errors.
- [ ] Network panel has no failed local asset request.

## Header QA

- [ ] Logo is visible and legible.
- [ ] Logo link returns to page top/home.
- [ ] Desktop floating navigation appears at desktop widths.
- [ ] Start a Project remains a separate desktop CTA.
- [ ] Header does not overlap hero content.
- [ ] Scrolled-header state appears after scrolling.
- [ ] Navigation remains above page content.
- [ ] Header introduces no horizontal overflow.

## Desktop navigation QA

- [ ] Services scrolls to Services.
- [ ] Process scrolls to Process.
- [ ] Work scrolls to Work.
- [ ] Contact scrolls to Contact.
- [ ] Active navigation changes while scrolling.
- [ ] Active navigation does not become obviously stuck.
- [ ] Section targets align visibly below the floating header.

## Mobile navigation QA

- [ ] Mobile menu button is visible.
- [ ] Menu opens.
- [ ] `aria-expanded` changes from `false` to `true` while open.
- [ ] Menu panel is readable.
- [ ] Hero content does not bleed through excessively.
- [ ] Services link works.
- [ ] Process link works.
- [ ] Work link works.
- [ ] Contact link works.
- [ ] Menu closes after selecting a navigation link.
- [ ] Body scrolling is locked while the menu is open.
- [ ] Body scrolling returns after the menu closes.
- [ ] Start a Project is visible inside the menu.
- [ ] No horizontal overflow appears.

Known limitations to observe, not newly classify unless actual behavior differs from the documented implementation:

- no Escape-key close
- no outside-click close
- no focus trap
- no focus restoration

## Hero QA

- [ ] Approved logo/header relationship is balanced.
- [ ] Heading remains readable.
- [ ] Supporting copy is visible.
- [ ] Start a Project is visible.
- [ ] View Services is visible.
- [ ] Credibility line is visible.
- [ ] Metrics panel is visible.
- [ ] Hero columns do not overlap.
- [ ] Mobile stacking works.
- [ ] No horizontal overflow appears.

## Expertise strip QA

- [ ] All expertise items are visible or intentionally wrap.
- [ ] First and last items are not clipped.
- [ ] Marker spacing is consistent.
- [ ] The strip causes no horizontal page scroll.

## Services QA

- [ ] Four service cards are visible.
- [ ] Titles are Paid Advertising, Shopify Growth, Creative Strategy, and Tracking & Analytics.
- [ ] Outcome lines are visible.
- [ ] Descriptive copy is visible.
- [ ] Card layout changes appropriately across widths.
- [ ] Hover state is visible on pointer devices.
- [ ] Cards do not overlap.

## Process QA

- [ ] Six process steps are visible.
- [ ] Order is Audit, Strategy, Build, Launch, Optimize, Scale.
- [ ] Supporting copy is visible for every step.
- [ ] Grid adapts across widths.
- [ ] Text is not clipped.
- [ ] Cards do not overlap.

## Why DaDaStore QA

- [ ] Section is visible.
- [ ] Heading is readable.
- [ ] Positioning copy is visible.
- [ ] Desktop layout is balanced.
- [ ] Mobile stacking remains readable.

## Work QA

- [ ] Three cards are visible.
- [ ] `Framework` labeling is visible.
- [ ] `Coming soon` state is visible.
- [ ] No numerical client metric appears.
- [ ] No client name appears.
- [ ] No factual case-study result is presented.
- [ ] Layout adapts correctly across widths.

## Contact QA

- [ ] “Ready to grow?” is visible.
- [ ] Supporting text is visible.
- [ ] Start a Project is visible.
- [ ] CTA invokes browser/mail-client handling for `dadastore.co@gmail.com`.

Mailto behavior depends on browser and operating-system handler configuration. Record exactly what happens rather than treating a missing local handler as an incorrect target.

## Footer QA

- [ ] DaDaStore brand presentation is visible.
- [ ] Service summary is visible.
- [ ] Current year displays.
- [ ] Alignment works across widths.
- [ ] No overflow appears.

## Back-to-top QA

- [ ] Control is hidden near page top.
- [ ] Control appears after sufficient scroll.
- [ ] It remains fixed at bottom-right.
- [ ] It does not cover key content or another control.
- [ ] Clicking returns to page top.
- [ ] Smooth behavior is observed and recorded.
- [ ] Control remains usable at mobile widths.

## Scroll reveal QA

- [ ] Non-hero sections become visible while scrolling.
- [ ] Reveal does not leave any section permanently hidden.
- [ ] No obvious repeated flicker occurs.
- [ ] Refreshing at a deep scroll position does not leave content inaccessible.

## Reduced-motion observation

When browser/OS reduced-motion emulation is available:

- [ ] Enable reduced motion before reload.
- [ ] Observe and record CSS transition behavior.
- [ ] Confirm reveal content remains visible.
- [ ] Record whether JavaScript-requested smooth scrolling still occurs.

The known CSS/JavaScript reduced-motion mismatch is observed only; Unit 2C does not fix it.

## Contact mailto QA

Test each CTA separately:

| CTA | Expected target | Actual result to record |
| --- | --- | --- |
| Header desktop Start a Project | `mailto:dadastore.co@gmail.com` | Handler opened / browser prompt / no handler / other |
| Header mobile Start a Project | `mailto:dadastore.co@gmail.com` | Handler opened / browser prompt / no handler / other |
| Hero Start a Project | `mailto:dadastore.co@gmail.com` | Handler opened / browser prompt / no handler / other |
| Contact Start a Project | `mailto:dadastore.co@gmail.com` | Handler opened / browser prompt / no handler / other |

Record browser behavior exactly, including whether the visible address/compose target is correct.

## Console QA

For every tested browser/environment:

1. Open DevTools and clear the console.
2. Reload the page.
3. Scroll through the full page.
4. Open and close the mobile menu where applicable.
5. Click each internal navigation link.
6. Test back-to-top.
7. Test mailto CTAs.
8. Record every site-related error or warning, source file, and line number where available.

Do not classify a browser-extension message as a site defect without evidence that the repository page caused it.

## Network QA

- [ ] `index.html` loads successfully.
- [ ] `assets/css/style.css` loads successfully.
- [ ] `assets/js/main.js` loads successfully.
- [ ] `assets/img/dadastore-logo.png` loads successfully.
- [ ] `assets/img/dadastore-mark.png` is marked Not applicable if the page does not request it; if requested, it loads successfully.
- [ ] Browser-requested favicon references resolve.
- [ ] Every requested local image returns successfully.
- [ ] No local asset request fails.
- [ ] No legacy WordPress request appears.
- [ ] No `wp-content`, `wp-admin`, or `wp-json` request appears.

## Manual QA result template

Allowed result values: **Pass**, **Fail**, **Not applicable**, **Not tested**.

| Environment | Viewport | Load | Header | Navigation | Mobile menu | Content | Mailto | Back to top | Console | Network | Horizontal overflow | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chrome desktop | 1440px | Not tested | Not tested | Not tested | Not applicable | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | |
| Edge desktop | 1440px | Not tested | Not tested | Not tested | Not applicable | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | |
| Chrome emulation | 375px | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | |
| Chrome emulation | 390px | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | |
| Chrome emulation | 768px | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | |
| Chrome emulation | 1024px | Not tested | Not tested | Not tested | Not applicable | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | |
| Chrome emulation | 1180px | Not tested | Not tested | Not tested | Not applicable | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | |
| Chrome emulation | 1440px | Not tested | Not tested | Not tested | Not applicable | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | Not tested | |

Duplicate or extend rows for Edge responsive checks, physical devices, different viewport heights, or retests. Preserve earlier results rather than overwriting failed evidence.

## Defect classification rules

### Blocking defect

- page cannot load
- major content is missing
- navigation to a principal section is broken
- approved logo is unavailable
- approved production contact target is broken or incorrect
- horizontal overflow materially breaks use
- repeated JavaScript error breaks an interaction
- principal CSS or JavaScript asset is missing

### Non-blocking defect

- minor spacing problem
- small visual-alignment issue
- known accessibility interaction gap already documented
- minor browser inconsistency
- non-critical console warning

### Requires separate unit

- interaction-logic fix
- accessibility-behavior fix
- broad responsive CSS change
- content rewrite
- contact-architecture change

Record severity, reproducibility, affected environments, and evidence. Do not combine unrelated fixes.

## Stop rule

If a blocking defect is found, do not continue to preview-deployment planning.

The Project Owner must report:

- environment/browser and version
- viewport width and height
- exact observed and expected behavior
- console error where present
- screenshot or recording where useful

Then create one narrowly scoped fix unit. Rerun affected checks and the regression matrix before reconsidering preview planning.

## Current known gaps to observe

- mobile-toggle custom focus-visible gap
- no Escape-key menu close
- no outside-click menu close
- no focus trap
- no focus restoration
- JavaScript smooth-scrolling/reduced-motion mismatch
- no-JavaScript mobile-navigation and reveal limitations
- active-nav boundary behavior requiring browser observation

These are existing recorded limitations. Actual deviations or broader impact should be reported with evidence.

## Current boundaries

- no implementation change
- no accessibility fix
- no JavaScript fix
- no CSS fix
- no deployment
- no production cutover
- no DNS/custom-domain change
- no change to the live DaDaStore repository/site

## Acceptance conditions

Unit 2C is complete when:

- the local-preview procedure is documented
- the browser/viewport matrix is defined
- a section-by-section QA checklist exists
- console and network QA are defined
- a reusable result template exists
- defect classification is defined
- the blocking-defect stop rule is defined
- no implementation file is changed

## Recommended next step

**Project Owner Manual Browser QA Run**

No numbered implementation unit is recommended yet. After the Project Owner reports QA results, the next bounded unit depends on whether blocking or non-blocking defects are found. If no defect is found, the evidence can support a separately bounded preview-readiness decision.

## Explicitly not next

- preview deployment before manual-QA results
- production cutover
- DNS/custom-domain changes
- live-site replacement
- contact backend
- analytics integration
- broad redesign
- framework adoption
- build tooling

## Test record

No tests run, since this was docs-only QA planning. All manual result-table entries remain Not tested or Not applicable.
