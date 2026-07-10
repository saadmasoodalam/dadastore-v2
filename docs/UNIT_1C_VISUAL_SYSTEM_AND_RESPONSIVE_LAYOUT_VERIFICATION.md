# Unit 1C — Visual System and Responsive Layout Verification

## Status

Unit 1C formally verifies the existing DaDaStore V2 visual system and responsive layout. This is a docs-only, verification-only unit.

## Purpose

The current design is being verified against the Unit 1A boundaries, not redesigned. This record describes the CSS that exists and does not approve subjective changes or claim browser/device validation.

## Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_1A_V2_PROJECT_BOUNDARY_AND_ARCHITECTURE.md`
- `docs/UNIT_1B_CORE_HOMEPAGE_STRUCTURE_VERIFICATION.md`
- `index.html`
- `assets/css/style.css`
- `README.md`

All authority files were read completely. Repository files are the source of truth.

## Core boundary

- Visual presence is not visual QA.
- Responsive CSS is not responsive device verification.
- Verification is not redesign.
- Hover styling is not interaction verification.

## Visual design system

The root custom properties define this exact core palette:

| Role | CSS property | Value |
| --- | --- | --- |
| Background | `--bg` | `#050505` |
| Surface | `--surface` | `#111111` |
| Primary text | `--text` | `#ffffff` |
| Muted text | `--muted` | `#a3a3a3` |
| Cyan accent | `--cyan` | `#00fff0` |
| Pink accent | `--pink` | `#ff2b8a` |

Supporting tokens include translucent white borders at `rgba(255, 255, 255, 0.12)` and `rgba(255, 255, 255, 0.2)`, plus a cyan shadow token of `0 0 34px rgba(0, 255, 240, 0.16)`. The body combines the near-black background with restrained cyan and pink radial gradients.

## CSS architecture

The stylesheet is organized evidence-first into:

- `:root` custom properties for palette, borders, shadow, maximum width, and header height
- global box sizing and base element styles
- shared `.container` and `.section` rules
- header and navigation rules
- hero rules
- shared button rules
- expertise strip rules
- shared section and card rules
- process rules
- Why DaDaStore and work rules
- contact and footer rules
- motion and reveal rules
- a reduced-motion media query
- tablet and desktop min-width media queries

The file is a single plain-CSS stylesheet; no preprocessor, generated layer, framework, or imported component library is present.

## Typography system

The body font stack is:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

This is system-first at runtime: `Inter` is named but no font file, `@font-face`, stylesheet import, or external font request is present. If Inter is unavailable locally, the system fallbacks apply.

- `h1` and `h2` use heavy `850` weight and tight `1` line height.
- `h3` uses a compact `1.08` line height.
- Body text inherits a `1.5` line height.
- Eyebrows, metric labels, card indices, work labels, and expertise items use small heavy uppercase text.
- Muted body/supporting copy uses `--muted`.
- Fluid type is implemented with `clamp()` for `h1`, `h2`, `h3`, hero/lead text, metrics, process labels, and contact copy.

Copy quality is outside this verification.

## Layout system

- Maximum content width is `1180px` via `--max-width`.
- Base containers use `width: min(calc(100% - 40px), var(--max-width))`, producing 20px side gutters.
- At `760px`, containers use `calc(100% - 64px)`, producing 32px side gutters.
- Base sections use `82px 0` padding; at `760px`, this becomes `108px 0`.
- Grid is used for the hero, card collections, process, split layout, signal display, metrics, mobile navigation, and footer.
- Flex is used for header alignment, navigation actions/links, buttons, expertise items, cards, and work-card content.
- Shared gaps and responsive column definitions provide layout changes without a framework.
- Section scroll offsets use the `72px` header-height token.

## Header visual treatment

- `.site-header` is fixed, 18px from the top, full-width, and layered at `z-index: 50`.
- The text brand sits in a rounded translucent capsule with a cyan CSS-generated circular marker.
- The mobile toggle is a 44px square translucent cyan-accented control.
- At desktop width, navigation becomes a rounded pill with translucent surface, border, shadow, and `backdrop-filter: blur(14px)`.
- The separate header CTA is hidden below desktop and shown at `1024px`.
- Header logo, navigation, toggle, and CTA surfaces use backdrop blur between 12px and 14px; the mobile panel uses 20px.
- `.is-scrolled` selectors define a subtle header gradient plus stronger logo/navigation surface and border treatments.

This verifies CSS state styling, not the JavaScript that applies the state.

## Hero visual system

- The base hero is a single-column grid with a 34px gap and viewport-relative minimum height.
- At `1024px`, it becomes a two-column `1.08fr / 0.92fr` grid with a 56px gap and a minimum 360px visual column.
- The `h1` uses fluid sizing, explicit line wrappers, overflow wrapping, and a desktop-specific clamp before becoming fixed at `4.9rem` at `1180px`.
- Primary and secondary CTAs share button structure but use cyan-filled and transparent/pink-accent hover treatments respectively.
- The credibility line uses smaller heavy muted text.
- The metrics panel has a dark surface, cyan and pink diagonal gradients, thin borders, an 8px radius, cyan glow, an inset decorative border, bar-like signal marks, and two lower metric cells.
- Body-level cyan and pink radial gradients support the hero background atmosphere.

## Expertise strip treatment

The strip uses hidden overflow, block borders, and a translucent dark surface. Its inner ticker is a centered wrapping flex row with responsive-safe width, horizontal and vertical gaps, uppercase muted labels, and 20px vertical padding. Items after the first receive a small pink circular marker with a restrained glow.

## Services visual system

- The card grid is one column at base, two columns at `760px`, and four columns at `1024px`.
- Cards use translucent `#111111`-based surfaces, thin shared borders, 8px radii, 24px padding, and a 300px minimum height.
- Cards are flex columns with generous space before their headings.
- Card indices use the pink accent.
- Outcome lines use primary text and weight `750`; main descriptions use muted text.
- Hover styling moves cards up 4px, strengthens the cyan border, darkens the surface, and adds a cyan glow.

Hover styling presence is not runtime interaction verification.

## Process visual system

- The process list is a grid: one column at base, two at `760px`, three at `1024px`, and six at `1180px`.
- Steps use CSS counters displayed as cyan `01` through `06` labels.
- Each step has a translucent near-black surface, thin border, 8px radius, and 22px padding.
- Step titles use fluid heavy typography; supporting copy is smaller and muted.
- Minimum step height is 180px, increasing to 260px in the six-column layout.

## Why DaDaStore visual system

- The base `.split-layout` is a one-column grid with a 24px gap.
- At `760px`, it becomes a two-column `1.05fr / 0.95fr` layout with vertically centered items.
- The section uses the shared cyan eyebrow, large `h2`, and muted fluid lead-copy treatment.
- The normal section-heading bottom margin is removed within this section to suit the split layout.

## Work visual system

- The work grid is one column at base and three columns from `760px`.
- Work cards share the card border, 8px radius, 24px padding, transitions, and hover treatment.
- Cards use a 320px minimum height and bottom-aligned flex content.
- Cyan or pink translucent gradients distinguish placeholder cards while preserving the dark surface.
- `Framework / Coming soon` labels use small heavy uppercase cyan text, visually separating placeholder state from titles and descriptions.

## Contact visual system

- The contact section has an explicit 110px bottom padding.
- Its inner panel uses a cyan-tinted border, 8px radius, fluid `clamp()` padding, layered cyan/pink gradients, the shared surface, and cyan glow.
- The heading follows the shared display scale; supporting copy is fluid and muted.
- The primary cyan-filled CTA is separated by a 30px top margin.
- Shared container and section rules adjust gutters and general vertical spacing at `760px`; no contact-specific column change is defined.

## Footer visual system

- The footer uses a top border, 30px vertical padding, and muted text.
- Its inner layout is a one-column grid with a 12px gap at base.
- At `760px`, it becomes a two-column layout aligned centrally; the final copyright paragraph spans all columns.
- The DaDaStore identity is promoted with primary text while supporting text remains muted.

## Shared component treatment

- Buttons: inline-flex alignment, minimum heights of 48px or 42px for small variants, 8px radii, heavy text, borders, glow, and 180ms transitions.
- Cards: shared translucent surfaces, borders, 8px radii, padding, elevation-on-hover, and cyan emphasis.
- Borders: translucent white structural lines plus cyan-accented states.
- Radii: principally 8px, with 18px for the mobile panel and pill/circular `999px` treatments for desktop navigation, logo capsule, and back-to-top control.
- Shadows: restrained cyan, pink, white, and neutral shadows rather than large opaque elevation.
- Transitions: primarily 160–220ms for controls/cards and 480ms for reveal motion.
- Focus-visible: navigation links, buttons, secondary buttons, and back-to-top share visible color/background/border state styling with hover selectors.

## Breakpoint map

The complete responsive breakpoint map is:

| Condition | Purpose |
| --- | --- |
| Base styles | Mobile-first layout |
| `prefers-reduced-motion: reduce` | Motion preference, not a width breakpoint |
| `min-width: 760px` | Tablet/layout expansion |
| `min-width: 1024px` | Desktop header, hero, and grid expansion |
| `min-width: 1180px` | Final heading/process expansion |

No additional width breakpoints exist.

## Responsive behavior map

| Area | Base/mobile | 760px | 1024px | 1180px |
| --- | --- | --- | --- | --- |
| Header | Mobile panel, toggle shown, separate desktop CTA hidden | No specific mode change | Toggle hidden; nav becomes inline pill; desktop CTA shown; mobile CTA hidden | No further change |
| Hero | One column; constrained copy; 330px panel | Wider copy; adjusted top padding | Two columns; 56px gap; 430px panel; desktop heading behavior | `h1` fixed at `4.9rem` |
| Services | One column | Two columns | Four columns | No further change |
| Process | One column | Two columns | Three columns | Six columns; taller steps |
| Work | One column | Three columns | No further change | No further change |
| Contact | Shared mobile container and fluid panel padding | Wider gutters and shared section spacing | No contact-specific change | No contact-specific change |
| Footer | One-column grid | Two-column grid with copyright spanning | No further change | No further change |

The Why DaDaStore split changes from one column to two at `760px`.

## Mobile navigation visual structure

- The panel is fixed below the floating header with 20px side insets.
- Its maximum height is `calc(100vh - 86px)` with vertical scrolling, protecting against viewport-height overlap.
- It uses a near-opaque dark background, cyan-tinted border, 18px radius, large neutral shadow, and 20px backdrop blur.
- Links are stacked through grid layout and have 44px minimum heights.
- The mobile CTA spans the panel width and has a top margin.
- The closed state is translated upward, invisible, and non-interactive; `.is-open` restores position, visibility, and pointer events.

Only CSS state treatment is verified here.

## Horizontal overflow guardrails

CSS-level safeguards include:

- `overflow-x: hidden` on both `html` and `body`
- global `box-sizing: border-box`
- percentage-based widths constrained by `min()` and `--max-width`
- `min-width: 0` on hero columns that need to shrink
- `minmax(0, 1fr)` for the metric-row grid and desktop hero grid
- `overflow-wrap: break-word` on `h1`
- flexible/wrapping button and expertise rows
- hidden overflow inside the hero panel and expertise strip
- a declared 320px minimum body width

No obvious unintended horizontal-overflow source is proven by static inspection. The 320px body floor intentionally does not support viewports narrower than 320px, and actual browser/device overflow still requires Unit 1F QA.

## Motion and reduced-motion treatment

- Controls, cards, header surfaces, and back-to-top states use transitions.
- Hover states use small upward transforms.
- Mobile navigation uses a translated closed state and a 220ms transform transition.
- `.reveal` begins transparent and translated 16px downward; `.is-visible` restores opacity and position over 480ms.
- `prefers-reduced-motion: reduce` reduces animation/transition durations to 1ms, disables repeated animation, forces automatic scroll behavior, and displays reveal elements without transforms.

Motion CSS existence is not interaction verification.

## Accessibility-related visual foundations

- Focus-visible styling exists for navigation links, primary/secondary buttons, and the back-to-top control.
- The palette distinguishes primary, muted, cyan, and pink roles, but no measured contrast record exists.
- Explicit control sizing includes 44px mobile navigation links, a 44px menu toggle, 48px primary buttons, 42px small buttons, and a 46px back-to-top control.
- Reduced-motion preferences receive a dedicated treatment.

The mobile toggle has no custom `:focus-visible` selector, so any focus indication there depends on browser defaults. These foundations do not prove WCAG compliance or touch-target conformance.

## Visual findings

### Verified

- The implemented palette exactly matches Unit 1A.
- Typography is fluid, system-first, and free of an external font dependency.
- Layout, card, navigation, CTA, gradient, border, glow, and shared-component treatments are consistently defined.
- Component-level focus-visible and reduced-motion foundations exist.

### Gap

- The mobile navigation toggle has no explicit custom focus-visible rule; browser-default focus behavior is not verified.
- Formal visual, contrast, and cross-browser QA records do not exist.

### Out of scope for Unit 1C

- subjective design changes
- JavaScript state correctness
- brand-asset integration
- content accuracy
- measured accessibility compliance
- performance and production readiness

## Responsive findings

### Verified

- The stylesheet is mobile-first and contains only the documented 760px, 1024px, and 1180px width breakpoints.
- Major grids and navigation mode have explicit responsive transitions.
- CSS includes width, shrink, wrapping, and overflow protections.

### Gap

- No repository record demonstrates browser, operating-system, or physical-device rendering.

### Requires browser/device QA in Unit 1F

- viewport behavior at and around each breakpoint
- 320px-width behavior and long-content wrapping
- three-column work cards at tablet widths
- six-column process layout at wide desktop widths
- mobile-menu viewport-height and scrolling behavior
- focus visibility, contrast, backdrop-filter fallbacks, and reduced-motion behavior

## Current capabilities verified

Unit 1C verifies a coherent dark visual system with exact reusable color tokens, system-first fluid typography, shared buttons and cards, translucent/glow treatments, mobile-first grids, desktop navigation presentation, responsive section layouts, overflow safeguards, motion states, and reduced-motion support.

## Current boundaries

Unit 1C does not verify interaction behavior, JavaScript correctness, accessibility compliance, content accuracy, performance, actual device rendering, cross-browser rendering, or production readiness.

## Acceptance conditions

Unit 1C is complete because:

- the exact color system is recorded
- the typography system is recorded
- the layout system is recorded
- component visual treatments are verified
- the complete breakpoint map is recorded
- responsive CSS behavior is mapped
- reduced-motion treatment is verified
- no implementation file was changed

## Recommended next unit

**Unit 1D — Navigation and Interaction Verification**

The visual and responsive CSS is now formally recorded. The next bounded unit should verify the existing navigation and JavaScript interaction behavior without refactoring it.

## Explicitly not next

- logo integration
- brand asset changes
- broad redesign
- CSS refactor
- form backend
- analytics integration
- case-study publication
- deployment
- production cutover

## Test record

No tests run, since this was docs-only.
