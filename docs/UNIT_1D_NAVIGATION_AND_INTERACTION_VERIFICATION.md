# Unit 1D — Navigation and Interaction Verification

## Status

Unit 1D formally verifies the existing DaDaStore V2 navigation and interaction behavior. This is a docs-only, verification-only unit.

## Purpose

This unit inspects and maps the current interaction implementation rather than changing it. Evidence-based gaps are recorded for later guardrail and QA work; they are not fixed here.

## Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_1A_V2_PROJECT_BOUNDARY_AND_ARCHITECTURE.md`
- `docs/UNIT_1B_CORE_HOMEPAGE_STRUCTURE_VERIFICATION.md`
- `docs/UNIT_1C_VISUAL_SYSTEM_AND_RESPONSIVE_LAYOUT_VERIFICATION.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `README.md`

All authority files were read completely. Repository files are the source of truth.

## Core boundary

- Interaction presence is not interaction verification.
- Verification is not refactoring.
- A discovered gap is not permission to fix it in the same verification unit.
- Browser behavior is not assumed from static code inspection alone.

## JavaScript architecture

- Script path: `assets/js/main.js`.
- Loading: a normal script element appears at the end of `body`; it has neither `defer` nor `async`. Its placement means the preceding page DOM has been parsed before execution under normal HTML processing.
- Top-level structure: cached DOM queries, immediate year/scroll-state setup, a `closeNav` helper, an `updateScrollState` helper, guarded listener registration, and two IntersectionObservers.
- Events are registered directly with `addEventListener`; there is no event framework or application lifecycle layer.
- One passive window scroll listener is registered.
- Two IntersectionObserver instances are conditionally created.
- DOM access uses `querySelector` and `querySelectorAll` with data attributes, classes, IDs, and hash-link selectors.
- There is no `DOMContentLoaded` listener because the script is loaded after the document content.
- No external JavaScript dependency, module import, package, analytics library, or UI library exists.

## Internal navigation map

| Source | Target | Classification | Current handling |
| --- | --- | --- | --- |
| Services | `#services` | Internal section navigation | Valid hash target; JavaScript smooth scroll |
| Process | `#process` | Internal section navigation | Valid hash target; JavaScript smooth scroll |
| Work | `#work` | Internal section navigation | Valid hash target; JavaScript smooth scroll |
| Contact | `#contact` | Internal section navigation | Valid hash target; JavaScript smooth scroll |
| View Services | `#services` | Internal section navigation | Valid hash target; JavaScript smooth scroll |
| Hero Start a Project | `#contact` | Internal section navigation | Valid hash target; JavaScript smooth scroll |
| Header Start a Project | `mailto:hello@dadastore.co` | Mailto/browser navigation | Not selected by hash-link handler |
| Mobile Start a Project | `mailto:hello@dadastore.co` | Mailto/browser navigation | Not selected by hash-link handler; nav click handler closes menu |
| Contact Start a Project | `mailto:hello@dadastore.co` | Mailto/browser navigation | Not selected by hash-link handler |

The header/footer identity links to `#top` are also valid internal navigation links handled by the same smooth-scroll path.

## Smooth internal scrolling

- CSS sets `scroll-behavior: smooth` on `html`.
- JavaScript selects only anchors whose `href` begins with `#`.
- On click, it reads the `href`, uses `document.querySelector(targetId)`, and continues only when a matching target exists.
- For a valid target, it prevents default navigation, closes the mobile navigation, and calls `scrollIntoView({ behavior: "smooth", block: "start" })`.
- If no target exists, the handler returns before `preventDefault`, leaving native browser handling intact.
- `mailto:` links do not begin with `#`, so the smooth-scroll handler does not intercept them.

The target strings are sourced from repository-controlled markup. Browser execution and history/hash behavior still require browser QA.

## Desktop navigation behavior

The desktop navigation uses the same `.site-nav` markup and hash links as mobile presentation. CSS makes it a permanently visible inline pill at `1024px`; JavaScript does not create a separate desktop navigation tree. The active-link observer applies `.is-active` to matching internal links in `.site-nav`.

Without JavaScript, desktop navigation remains structurally usable through native anchor navigation, and `mailto:` CTAs remain browser links. Smooth scrolling can still be supplied by CSS. Active-link state and scroll-state classes are not available without JavaScript.

## Mobile menu behavior

- The menu, toggle, and body are selected through `[data-nav]`, `[data-nav-toggle]`, and `document.body`.
- Toggle clicks add/remove `.is-open` on the menu and toggle.
- `aria-expanded` is updated to the string form of the open state.
- The accessible label changes between “Open navigation” and “Close navigation”.
- `body.nav-open` applies body scroll locking through CSS.
- Clicking a direct anchor target inside the nav invokes `closeNav`, including the mobile `mailto:` CTA.
- Internal hash-link handling also invokes `closeNav` before scrolling.
- The CSS panel changes transform, visibility, and pointer-event state through `.is-open`.

Absent from the implementation:

- Escape-key closing
- outside-click closing
- focus trap
- focus movement into the opened menu
- focus restoration to the toggle after close

The nav click check requires `event.target` itself to be an `HTMLAnchorElement`. Current nav anchors contain only text, so this matches current markup; nested content inside a future anchor would not satisfy that specific check.

## Active navigation state

- An IntersectionObserver is created when the API exists and the section collection is non-empty.
- Observed sections are `#services`, `#process`, `#work`, and `#contact`.
- Options are `rootMargin: "-35% 0px -55% 0px"` and `threshold: 0`.
- When an entry is intersecting, every `.site-nav a[href^="#"]` receives `.is-active` only when its `href` equals the observed section ID.
- The four observed IDs match the four primary internal navigation links.

Evidence-based edge cases:

- The observer’s effective activation band is narrow and needs browser/viewport verification near boundaries.
- If multiple entries are delivered as intersecting in one callback, entry iteration order determines the final active state.
- When no observed section is intersecting, the previous active class is not explicitly cleared.
- There is no active state for the top/hero region because `#top` is not observed and is not a primary `.site-nav` link.
- Without IntersectionObserver, no fallback active-navigation behavior is provided.

## Back-to-top behavior

- The HTML button is selected with `[data-back-to-top]`.
- It has the accessible label “Back to top”.
- `updateScrollState` applies `.is-visible` when `window.scrollY > 500` and removes it otherwise.
- CSS uses that class to change opacity, pointer events, and translation.
- A click calls `window.scrollTo({ top: 0, behavior: "smooth" })`.

The 500px threshold and browser behavior are statically identified, not browser-tested.

## Scroll reveal behavior

- Reveal candidates are selected once with `.reveal`.
- When IntersectionObserver exists, a reveal observer uses `threshold: 0.14`.
- Intersecting elements receive `.is-visible` and are immediately unobserved, making reveal one-time.
- CSS transitions opacity and a 16px vertical transform.
- If JavaScript runs but IntersectionObserver is unavailable, all reveal items receive `.is-visible` as a fallback.
- Hero reveal elements are forced visible by CSS independently of observer state.

There is no equivalent fallback when JavaScript itself is unavailable; most non-hero `.reveal` content remains at the CSS hidden state unless the reduced-motion media query applies.

## Current-year footer behavior

- The year target is selected with `[data-year]`.
- The value comes from `new Date().getFullYear()` in the visitor’s runtime environment.
- When the target exists, its `textContent` is replaced with that numeric year.

## Scroll event behavior

The implementation registers one listener:

```js
window.addEventListener("scroll", updateScrollState, { passive: true });
```

It runs `updateScrollState`, which toggles:

- `.is-scrolled` on the cached header when `scrollY > 12`
- `.is-visible` on the cached back-to-top button when `scrollY > 500`

The function uses cached element references and does not execute repeated DOM queries inside the scroll path. It is not throttled or scheduled with `requestAnimationFrame`; formal performance impact is not assessed here.

## IntersectionObserver map

| Observer | Purpose | Observed elements | Options | Result |
| --- | --- | --- | --- | --- |
| Active navigation observer | Track current primary section | `#services`, `#process`, `#work`, `#contact` | `rootMargin: -35% 0px -55% 0px`; `threshold: 0` | Toggles `.is-active` on matching `.site-nav` hash link |
| Reveal observer | Reveal marked content once | All `.reveal` elements | `threshold: 0.14` | Adds `.is-visible`, then unobserves the element |

If IntersectionObserver is unavailable, reveal items receive the visible class, but active navigation receives no fallback.

## Event listener map

| Element/source | Event | Resulting behavior |
| --- | --- | --- |
| Window | `scroll` | Updates header scrolled state and back-to-top visibility; passive listener |
| Mobile menu toggle | `click` | Toggles menu/toggle classes, ARIA state/label, and body scroll lock |
| Navigation container | `click` | Closes menu when the direct event target is an anchor |
| Every `a[href^="#"]` | `click` | For valid targets, prevents default, closes menu, and smooth-scrolls to target |
| Back-to-top button | `click` | Smooth-scrolls window to top |
| `DOMContentLoaded` | Not present | Script relies on end-of-body placement |

No keydown, outside-pointer, resize, load, submit, mouseover, or focus event listener is present.

## Progressive enhancement assessment

When JavaScript is unavailable:

- Basic HTML content remains in the document.
- Native hash navigation remains available for visible desktop links.
- CSS `scroll-behavior: smooth` can still smooth native anchor movement.
- `mailto:` contact links remain standard browser navigation.
- The mobile panel remains in its CSS hidden/non-interactive state, and the toggle cannot open it.
- Active navigation, header scroll state, back-to-top visibility/action, dynamic year output, and observer-driven reveals do not run.
- Hero reveal content remains visible because `.hero .reveal` overrides the generic hidden state.
- Most non-hero elements carrying `.reveal` remain visually hidden because `.reveal` defaults to opacity zero and translated position. The JavaScript fallback only helps when JavaScript runs but IntersectionObserver is missing.

The site therefore does not provide complete no-JavaScript support.

## Reduced-motion interaction relationship

CSS responds to `prefers-reduced-motion: reduce` by disabling smooth CSS scrolling, reducing transition/animation duration, and forcing reveal items visible without transforms.

JavaScript does not query or check `prefers-reduced-motion`. Its `scrollIntoView` and `window.scrollTo` calls explicitly request `behavior: "smooth"`. Whether browser preference handling overrides those explicit calls is browser-dependent and requires Unit 1F verification.

## Accessibility interaction foundations

Verified foundations:

- the mobile toggle begins with `aria-expanded="false"` and JavaScript updates it
- the toggle label switches between open and close language
- the back-to-top button has an `aria-label`
- navigation uses links; toggle and back-to-top use buttons
- Unit 1C records focus-visible styling for navigation links, buttons, and back-to-top

Absent or unverified:

- Escape-key menu close
- focus trap
- focus movement and restoration
- custom focus-visible styling for the mobile toggle
- full keyboard interaction QA
- screen-reader interaction QA

These foundations do not establish accessibility compliance.

## Browser-navigation safety

- `mailto:` links are excluded from internal interception because the selector is restricted to `a[href^="#"]`.
- The implementation does not broadly prevent default behavior on all links or clicks.
- Hash-link default navigation is prevented only after a matching target is found.
- Invalid/unmatched hash targets return before `preventDefault`.
- Normal browser handling remains for mailto and any future non-hash link.

Actual mail-client/browser behavior is environment-dependent and remains a QA item.

## Interaction findings

### Verified

- Valid internal links are narrowly intercepted and smoothly scrolled.
- Mailto links are not hijacked by the hash handler.
- Mobile open/close state, ARIA state, label, and body lock are implemented.
- Active navigation, back-to-top, reveal, header scroll state, and current year are mapped to source evidence.
- Scroll work uses cached references and a passive listener.
- A no-IntersectionObserver reveal fallback exists when JavaScript runs.

### Gap

- No Escape-key or outside-click mobile-menu close exists.
- No mobile-menu focus trap, focus movement, or focus restoration exists.
- The mobile toggle lacks an explicit custom focus-visible rule.
- JavaScript smooth scrolling does not explicitly honor reduced-motion preference.
- No active-navigation fallback exists without IntersectionObserver.
- With JavaScript unavailable, mobile navigation cannot open and most non-hero reveal content stays hidden.

### Requires browser QA in Unit 1F

- active-section state at section boundaries and across viewport sizes
- mobile-menu keyboard, focus, viewport-height, and scroll-lock behavior
- reduced-motion behavior during JavaScript-requested smooth scrolling
- anchor history/hash behavior
- mailto behavior
- back-to-top threshold and smooth action
- scroll/reveal behavior and fallback conditions
- repeated scrolling and header/back-to-top state changes

### Out of scope for Unit 1D

- implementing gap fixes
- broad JavaScript or CSS refactoring
- formal performance benchmarking
- final accessibility compliance
- content, brand, deployment, or production approval

## Known guardrail candidates for Unit 1F

- Verify or address the mobile toggle custom focus-visible gap recorded in Unit 1C.
- Verify Escape-key closing expectations for the mobile menu.
- Verify focus entry, containment, close restoration, and tab order for the mobile menu.
- Test active-nav behavior at section boundaries, during rapid scrolling, and when no section occupies the observer band.
- Verify reduced-motion behavior for JavaScript `scrollIntoView` and `scrollTo` calls.
- Exercise repeated scrolling around the 12px and 500px thresholds and observe class stability.
- Verify mailto behavior without interception across target browsers.
- Verify back-to-top visibility at exactly and around 500px.
- Verify no-JavaScript content visibility and mobile navigation behavior.
- Verify the reveal fallback when IntersectionObserver is unavailable.
- Verify that future nested nav-link content does not invalidate direct-target menu closing.

## Current capabilities verified

Unit 1D verifies source-level support for internal smooth scrolling, desktop hash navigation, mobile-menu state and body locking, active primary navigation, header scroll styling state, back-to-top visibility and action, one-time scroll reveals with an API fallback, and dynamic footer-year output.

## Current boundaries

Unit 1D does not verify final accessibility compliance, actual browser/device behavior, performance benchmarks, content accuracy, brand asset integration, production readiness, or production deployment.

## Acceptance conditions

Unit 1D is complete because:

- internal navigation behavior is mapped
- mobile-menu behavior is mapped
- active-navigation behavior is mapped
- back-to-top behavior is verified from source
- scroll-reveal behavior and fallback are verified from source
- current-year behavior is verified from source
- event listeners and observers are mapped
- accessibility and progressive-enhancement interaction gaps are recorded
- no implementation file was changed

## Recommended next unit

**Unit 1E — Brand Asset Integration**

Units 1B–1D have now formally verified the prototype structure, visual/responsive system, and interactions. Approved brand assets can therefore be integrated as a narrow implementation unit before Unit 1F guardrails and QA.

## Explicitly not next

- broad JavaScript refactor
- interaction gap fixes
- broad redesign
- contact backend
- analytics integration
- case-study publication
- framework adoption
- build tooling
- deployment
- production cutover
- live DaDaStore repository changes

## Test record

No tests run, since this was docs-only.
