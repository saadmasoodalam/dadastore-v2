# Unit 4C7 — Remove Pre-Services Transition Gap

## 1. Status

Unit 4C7 is a bounded CSS diagnosis, minimal correction, and documentation unit. It removes the excessive dark transition band above Services without changing the corrected Services layout.

## 2. Purpose

The purpose of this unit is to identify the exact cascade rule creating unused dark space after the platform strip and restore a normal transition into `#services`.

Core law:

- Do not modify the corrected Services cards or copy.
- Diagnose the transition gap before editing.
- Do not use negative margins, transforms, fixed section heights, or hidden content.
- No deployment.

## 3. Owner feedback

The Project Owner confirmed that the Services section itself is balanced after Unit 4C6, but a large empty dark band remains immediately above it.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4C6_FIND_AND_REMOVE_ACTUAL_SERVICES_HEIGHT_CONSTRAINT.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Transition structure

The relevant HTML sequence is:

- preceding dark section: `section.hero.section`
- proof strip: `.hero-proof-grid`
- final platform wrapper: `.platform-strip`
- platform logos: `.platform-logos`
- following light section: `section.section#services`

The proof and platform strips are children of `.container.hero-grid` inside the hero. `#services` follows the hero directly. There is no spacer element, empty wrapper, or intervening section.

## 7. Complete gap diagnosis

The relevant base rules and every media-query override were checked for minimum and fixed heights, top and bottom padding, top and bottom margins, block sizes, viewport units, scroll spacing, empty wrappers, and pseudo-elements.

The hero base rule correctly contains:

```css
.hero {
  padding-top: 112px;
  padding-bottom: 0;
}
```

At `min-width: 760px`, however, the later generic section rule applies to the same element:

```css
.section {
  padding: 104px 0;
}
```

Because the hero element has both classes and these class selectors have equal specificity, the later media-query `.section` rule overrides the base hero's `padding-bottom: 0` with `104px`. The media-query hero rule then resets only `padding-top: 130px`, leaving the unintended `104px` bottom padding in force.

## 8. Exact culprit

- Previous section selector: `.hero.section`
- Services selector: `#services`
- Culprit selector: `.section`
- Culprit property/value: `padding: 104px 0`
- Source: `@media (min-width: 760px)`
- Effective unwanted value on the hero: `padding-bottom: 104px`

The hero `min-height` is not the culprit. At the measured tablet and desktop widths, content makes the hero taller than its minimum, and the hero grid has no unused alignment space. No pseudo-element contributes to the transition gap.

## 9. Rendered evidence before correction

Headless-browser geometry measured the distance from the bottom of `.platform-strip` to the top of `#services` as:

- `768px`: `104px`
- `1024px`: `104px`
- `1440px`: `104px`

The platform strip itself ends at the bottom of `.hero-grid`; the entire measured band is the hero's computed bottom padding.

At `375px` and `390px`, the later narrow-mobile hero rule uses natural height and the base `padding-bottom: 0` remains effective, so the excessive band is not present.

## 10. Minimal correction

Only the hero's bottom padding is made explicit inside the existing `@media (min-width: 760px)` hero rule:

```css
.hero {
  min-height: 880px;
  padding-top: 130px;
  padding-bottom: 48px;
}
```

This replaces the inherited `104px` dark band with a controlled `48px` transition. It does not alter hero content, proof-strip structure, platform-logo structure, Services layout, header positioning, navigation, or mobile behavior.

## 11. Pseudo-elements, scroll spacing, and wrappers

- `.hero::before` and `.hero::after`: no generated content
- `.hero-atmosphere::after`: absolutely positioned decoration; no layout contribution
- `.platform-strip`: no pseudo-element extending its box
- `#services`: no generated pseudo-element
- `.section { scroll-margin-top: var(--header-height) }`: affects anchor scrolling only, not document layout
- no spacer element or empty wrapper exists between the two sections

## 12. Responsive result

- `375px` and `390px`: natural-height mobile hero remains unchanged and has no excessive gap or overlap.
- `768px`: the transition after `.platform-strip` is `48px`.
- `1024px`: the transition after `.platform-strip` is approximately `54px`; the existing `900px` hero minimum contributes roughly `6px` of centered free space at this intermediate width.
- `1440px`: the transition after `.platform-strip` is `48px`.
- All checked widths retain readable proof and platform strips with no horizontal overflow.

## 13. Services preservation

Unit 4C7 does not change any Services selector or declaration. It preserves:

- the corrected `.services-shell` desktop tracks from Unit 4C6
- natural-height `.services-grid` rows and `.service-card` elements
- all six cards, icons, copy, experience chips, heading, and CTA
- `#services` padding and section boundary

## 14. Files changed

Changed:

- `assets/css/style.css`

Added:

- `docs/UNIT_4C7_REMOVE_PRE_SERVICES_TRANSITION_GAP.md`

Not changed:

- `index.html`
- `assets/js/main.js`
- any image or other asset
- dependency, build, analytics, backend, or deployment configuration

## 15. Verification record

- Branch verified as `refine/v3-section-review`.
- The exact culprit is the tablet `.section { padding: 104px 0; }` cascade onto `.hero.section`.
- The correction is the explicit media-query `.hero { padding-bottom: 48px; }` override.
- Browser geometry confirms the platform-to-Services distance is reduced from `104px` to `48px` at `768px` and `1440px`, and to approximately `54px` at `1024px`.
- Mobile has no excessive transition gap.
- No overlap or horizontal overflow is introduced.
- Services computed geometry and CSS declarations remain unchanged from the Unit 4C7 baseline.
- `index.html`, JavaScript, and image assets remain unchanged.
- No dependency is added.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 16. Recommended next section review

**Unit 4D — Work and Framework Cards Review**

Goal: review the Work/Framework section as the next bounded homepage surface without reopening the corrected hero-to-Services transition or Services layout.

## 17. Explicitly not next

- Services card, copy, icon, track, or spacing changes
- hero, proof-strip, or platform-strip redesign
- negative margins, transforms, fixed section heights, or hidden content
- header or mobile-navigation changes
- client case-study publication
- fake performance metrics, testimonials, or client logos
- JavaScript feature work
- analytics or contact-backend integration
- dependency, framework, build-tool, external-font, or icon-library adoption
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 18. Test record

No automated application test suite is required for this bounded CSS diagnosis and documentation correction. Headless-browser geometry plus static cascade, protected-file hash, dependency, and Git checks are used. Final visual approval remains a separate Project Owner browser-QA step.
