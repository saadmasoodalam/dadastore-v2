# Unit 4C6 — Find and Remove Actual Services Height Constraint

## 1. Status

Unit 4C6 is a bounded CSS diagnosis, minimal correction, and documentation unit. It identifies the rendered source of the apparent empty area below the Services cards and changes only the confirmed desktop layout constraint.

## 2. Purpose

The purpose of this unit is to stop iterative spacing guesses, inspect the complete Services cascade and rendered geometry, and correct the exact rule responsible for the unused lower-right area.

Core law:

- Diagnose before editing.
- Report the exact culprit.
- Do not change card copy or HTML.
- Do not redesign the section.
- No deployment.

## 3. Owner feedback

The Project Owner reported that prior card-height and section-spacing changes produced no visible improvement. Unit 4C6 therefore measures the section in a browser instead of assuming that a height or padding declaration is responsible.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4C2_COMPACT_SERVICE_CARD_REDESIGN.md`
- `docs/UNIT_4C4_REMOVE_FORCED_SERVICE_CARD_HEIGHTS.md`
- `docs/UNIT_4C5_TIGHTEN_SERVICES_SECTION_CONTAINER.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Exact section structure

- Services section: `section.section#services`
- Inner width container: `#services > .container`
- Two-column layout wrapper: `.services-shell`
- Left content column: `.section-heading.section-heading-inverse.reveal`
- Service-card grid: `.card-grid.services-grid`
- Individual cards: `article.card.service-card.reveal`

There is no additional Services parent between `#services` and the shared page `<main>`.

## 7. Complete height-source diagnosis

The complete cascade search covered `height`, `min-height`, `block-size`, `min-block-size`, viewport-height units, block and bottom padding, bottom margins, grid row sizing, alignment, and pseudo-elements across base rules and every media query.

The Services section and its wrappers contain no fixed, minimum, viewport-based, or block-size height constraint:

- `#services`: no `height`, `min-height`, `block-size`, or `min-block-size`
- `#services > .container`: no height constraint
- `.services-shell`: no height constraint
- `.services-grid`: `grid-auto-rows: auto` and `align-items: start`
- `.service-card`: `height: auto`, `min-height: 0`, and `align-self: start`
- `#services::before` and `#services::after`: no generated pseudo-elements
- Services wrappers and cards: no layout-extending pseudo-elements

The generic tablet rule `.section { padding: 104px 0; }` is not the cause because the more specific `#services { padding-block: 56px; }` wins in the cascade.

## 8. Exact culprit

The confirmed culprit is the desktop track-allocation rule inside `@media (min-width: 1024px)`:

```css
.services-shell {
  grid-template-columns: minmax(260px, 0.66fr) minmax(0, 1.84fr);
}
```

This is a width constraint that creates the excess height indirectly. At a 1440-class browser width it allocates approximately `316.8px` to the unchanged left copy and `883.2px` to the card grid. The narrow left track wraps to approximately `468.6px` high while the natural-height card grid is approximately `374.8px` high.

Both columns occupy the same automatic CSS Grid row. The row must therefore use the taller `468.6px` left item, leaving approximately `93.8px` of unused space below the card grid before the section's legitimate bottom padding.

The exact source is therefore:

- Selector: `.services-shell`
- Property/value: `grid-template-columns: minmax(260px, 0.66fr) minmax(0, 1.84fr)`
- Source: `@media (min-width: 1024px)`
- Mechanism: the narrow left track increases text wrapping and becomes the shared auto row's height

## 9. Minimal correction

Only the confirmed desktop track allocation is replaced:

```css
.services-shell {
  grid-template-columns: minmax(360px, 0.8fr) minmax(0, 1.7fr);
}
```

This gives the unchanged left content enough width to wrap more compactly while preserving the card grid as the larger column. No card height, section padding, content, HTML structure, negative margin, transform, or fixed section height is introduced.

## 10. Rendered result

At the 1440-class verification width:

- the left copy becomes approximately `370px` high
- the natural-height card grid becomes approximately `393px` high
- the grid becomes the content-height source instead of leaving unused space below itself
- `#services` ends with its declared `56px` bottom padding after the lowest in-flow content
- the section height falls from approximately `581px` to approximately `505px`

Cards remain natural-height content panels and may retain uneven bottoms.

## 11. Pseudo-element finding

No Services pseudo-element contributes to section height. Computed `::before` and `::after` content for `#services`, its container, shell, left column, grid, and cards is absent. The decorative pseudo-element on the following Commerce Intelligence section is absolutely positioned and does not affect Services layout.

## 12. Preserved content and behavior

Unit 4C6 preserves:

- all HTML, heading copy, experience text, and chips
- all six service cards, descriptions, and icons
- the CTA and `#services` ID
- natural card-height rules
- all other sections
- JavaScript behavior and mailto links
- all images and other assets

## 13. Files changed

Changed:

- `assets/css/style.css`

Added:

- `docs/UNIT_4C6_FIND_AND_REMOVE_ACTUAL_SERVICES_HEIGHT_CONSTRAINT.md`

Not changed:

- `index.html`
- `assets/js/main.js`
- any image or other asset
- dependency, build, analytics, backend, or deployment configuration

## 14. Verification record

- Branch verified as `refine/v3-section-review`.
- Browser-computed geometry identifies the media-query column allocation as the exact source of the mismatch.
- The Services section and its wrappers retain no fixed, minimum, viewport, or block-size height constraint.
- Service cards retain `height: auto`, `min-height: 0`, and `align-self: start`.
- `grid-auto-rows: auto` and top alignment remain present.
- No Services pseudo-element extends layout.
- `index.html`, JavaScript, and image assets remain unchanged from the Unit 4C6 baseline.
- No dependency is added.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 15. Recommended next section review

**Unit 4D — Work and Framework Cards Review**

Goal: review the Work/Framework section as the next bounded homepage surface without reopening the completed Services diagnosis.

## 16. Explicitly not next

- further Services spacing guesses or redesign
- service copy, heading, experience-chip, CTA, icon, or HTML changes
- fixed section heights, negative margins, or transform-based hiding
- client case-study publication
- fake performance metrics, testimonials, or client logos
- JavaScript feature work
- analytics or contact-backend integration
- dependency, framework, build-tool, external-font, or icon-library adoption
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 17. Test record

No automated application test suite is required for this bounded CSS diagnosis and documentation correction. Headless-browser geometry plus static cascade, structure, protected-file hash, dependency, and Git checks are used. Final visual approval remains a separate Project Owner browser-QA step.
