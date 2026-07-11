# Unit 1F — Static Site Guardrails and QA

## Status

Unit 1F performs formal guardrail and static QA verification for the DaDaStore V2 foundation after approved brand integration. This unit changes documentation only and does not change production behavior.

## Purpose

This unit verifies what the V2 foundation currently does and does not do before its completion checkpoint. It records source-level evidence, non-regression boundaries, known limitations, and the manual browser checks still required.

## Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_1A_V2_PROJECT_BOUNDARY_AND_ARCHITECTURE.md`
- `docs/UNIT_1B_CORE_HOMEPAGE_STRUCTURE_VERIFICATION.md`
- `docs/UNIT_1C_VISUAL_SYSTEM_AND_RESPONSIVE_LAYOUT_VERIFICATION.md`
- `docs/UNIT_1D_NAVIGATION_AND_INTERACTION_VERIFICATION.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/`
- `favicon.ico`
- `favicon-16.png`
- `favicon-32.png`
- `favicon-64.png`
- `apple-touch-icon.png`
- `favicon-192.png`
- `favicon-512.png`
- `README.md`
- current Git repository state and history

All text authority and implementation files were read completely. Image and icon assets were checked for presence, size, reference integrity, and approved-source identity where applicable.

## Core boundary

- Verification is not redesign.
- A working page is not production readiness.
- Brand integration is not content approval.
- Accessibility foundations are not accessibility compliance.
- Responsive CSS is not device certification.
- Lightweight architecture is not measured performance.
- Preview readiness is not production cutover.

## Git-state guardrail

- Current branch: `main`.
- Origin fetch/push URL: `https://github.com/saadmasoodalam/dadastore-v2.git`.
- Latest five commits:
  1. `3d6ab9b Integrate approved DaDaStore brand assets`
  2. `4e4294d Verify V2 navigation and interactions`
  3. `d539b8f Verify V2 visual and responsive system`
  4. `e63cebe Verify V2 homepage structure`
  5. `12cd5e8 Add V2 architecture boundary plan`
- Unit 1E exists as commit `3d6ab9b`.
- `index.html`, the CSS/JavaScript files, production brand assets, favicons, README, authority file, and Units 1A–1D are tracked.
- `git status --short` reports only `?? Microsoft/` and `?? incoming-brand/` before this Unit 1F document is added.
- The approved source pack remains untracked as required by Unit 1E. The PowerShell `Microsoft/` cache also remains untracked.

Unrelated untracked files must not be mixed into V2 commits. A Unit 1F commit must select only the intended Unit 1F document unless the Project Owner separately decides how to handle those directories.

## File-structure guardrail

All expected production structure exists:

- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/dadastore-logo.png`
- `assets/img/dadastore-mark.png`
- `assets/img/og-dadastore.png`
- `favicon.ico`
- `favicon-16.png`
- `favicon-32.png`
- `favicon-64.png`
- `apple-touch-icon.png`
- `favicon-192.png`
- `favicon-512.png`
- `README.md`
- `docs/`
- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`

No expected item is missing.

## Asset-path verification

Every local `src` or `href` asset reference in `index.html` resolves to a repository file:

- `favicon.ico`
- `favicon-16.png`
- `favicon-32.png`
- `apple-touch-icon.png`
- `assets/css/style.css`
- `assets/img/dadastore-logo.png` (header and footer)
- `assets/js/main.js`

Additional local favicon sizes and brand assets exist even though they are not all linked directly from the head. No Windows path, `file://` URL, WordPress URL, legacy asset URL, or external image-hosting URL is present. The Open Graph image is declared at exactly:

`https://dadastore.co/assets/img/og-dadastore.png`

That URL is public metadata, not a runtime image-hosting dependency for page rendering.

## Brand guardrails

- The header uses local `assets/img/dadastore-logo.png` in an `img` element with `alt="DaDaStore"`.
- The footer reuses the same approved logo at a restrained CSS width and preserves its existing content.
- Favicon and Apple touch-icon references are local.
- The Open Graph image file is local, with only its production public URL used in metadata.
- The production logo, mark, and Open Graph files are byte-identical to their selected approved `incoming-brand/` sources.
- No SVG, traced, generated, alternate, remotely loaded, or legacy-site logo is introduced.
- JavaScript does not access or modify brand artwork.

## Homepage structure guardrail

The principal structure remains in the approved order:

1. header
2. hero
3. expertise strip
4. services
5. process
6. Why DaDaStore
7. work
8. contact
9. footer

The approved header, main, and footer landmarks remain. Navigation targets still resolve:

- Services → `#services`
- Process → `#process`
- Work → `#work`
- Contact → `#contact`
- View Services → `#services`
- Hero Start a Project → `#contact`

## Content guardrails

- All three work cards remain labeled `Framework / Coming soon`.
- No numerical client-performance metric is presented as a factual case-study result.
- No award or certification is introduced.
- No unsupported partnership claim is introduced.
- Homepage copy remains prototype content pending Project Owner review.

This verification does not assess marketing quality or approve factual claims.

## Contact guardrails

- The current browser contact target is `mailto:hello@dadastore.co`.
- Mailto remains the only contact action.
- No form element or hidden form endpoint exists.
- No third-party form service, API submission, persistence, database, or contact-storage logic exists.

## JavaScript non-regression guardrail

`assets/js/main.js` remains the same 103-line implementation mapped by Unit 1D and retains SHA-256:

`9EC8DED4A4E8F3E4D71EBD326CCB148D97CBDC57F51C7A1646B995EE26F8FA1C`

Source evidence remains for:

- mobile navigation open/close state
- body scroll lock through `nav-open`
- scoped internal hash scrolling
- active-navigation IntersectionObserver
- back-to-top visibility and action
- one-time scroll reveals with an IntersectionObserver fallback
- current-year footer output

Searches found no external API client, analytics library, persistence logic, action/execution integration, `eval`, dynamic script creation/injection, external script loading, `fetch`, `XMLHttpRequest`, `localStorage`, or `sessionStorage`.

## Navigation guardrails

| Label/action | Target | Result |
| --- | --- | --- |
| Services | `#services` | Existing section |
| Process | `#process` | Existing section |
| Work | `#work` | Existing section |
| Contact | `#contact` | Existing section |
| View Services | `#services` | Existing section |
| Header/mobile/contact Start a Project | `mailto:hello@dadastore.co` | Browser/mail-client navigation |
| Hero Start a Project | `#contact` | Existing section |

Internal interception is scoped to `a[href^="#"]`, and default behavior is prevented only after a matching target is found. Mailto links are outside that selector and are not prevented.

## Mobile-menu QA

Static verification confirms:

- the semantic button toggle exists
- `aria-expanded="false"` exists in initial markup
- JavaScript updates the expanded state and accessible label
- menu and toggle open/closed classes exist
- body scroll locking exists
- direct nav-link selection closes the menu

Known gaps:

| Gap | Classification | Reason |
| --- | --- | --- |
| Escape-key close absent | Non-blocking; future accessibility unit | Current pointer/touch close path still exists; keyboard behavior needs explicit design and QA |
| Outside-click close absent | Non-blocking | Not required for basic operation; usability enhancement candidate |
| Focus trap absent | Non-blocking; future accessibility unit | Does not block checkpoint but prevents accessibility-compliance claims |
| Focus movement/restoration absent | Non-blocking; future accessibility unit | Requires an explicit focus-management implementation unit |

No gap is fixed in Unit 1F.

## Focus and keyboard foundations

- Semantic links and buttons remain intact.
- Navigation links, shared buttons, and back-to-top have custom `:focus-visible` state selectors.
- Focus outlines are not globally disabled.
- Reduced-motion CSS remains present.
- The mobile toggle still has no explicit custom `:focus-visible` selector; it depends on browser-default focus indication.

This is a non-blocking accessibility gap and requires browser/keyboard QA. No WCAG compliance claim is made.

## Reduced-motion QA

- `@media (prefers-reduced-motion: reduce)` exists.
- It removes CSS smooth scrolling, reduces transition and animation durations, and forces reveal content visible without transforms.
- JavaScript explicitly requests smooth behavior from `scrollIntoView` and `window.scrollTo` and does not query reduced-motion preference.

The CSS/JavaScript mismatch is non-blocking for Unit 1G but is a recommended future guardrail fix. Browser behavior under reduced-motion preference must be verified manually.

## No-JavaScript QA

Static evidence shows:

- document content remains in the HTML
- native hash navigation still works for visible links
- mailto remains browser-native
- desktop navigation remains structurally available
- hero reveal content is forced visible by CSS
- mobile navigation cannot open because the panel defaults hidden and requires JavaScript state classes
- active navigation, back-to-top, current year, and JavaScript scrolling do not run
- most non-hero `.reveal` content remains at opacity zero unless reduced-motion CSS applies

The page does not offer complete no-JavaScript support. This is a verified non-blocking limitation and future guardrail candidate, not a production-readiness approval.

## Responsive QA map

| Area | Base/mobile | 760px | 1024px | 1180px |
| --- | --- | --- | --- | --- |
| Header/logo | Floating header; 148px image; mobile toggle/panel | 164px logo | 176px logo; inline nav pill; desktop CTA | Same desktop identity sizing |
| Navigation | Fixed hidden/open mobile panel | Mobile mode retained | Toggle hidden; desktop navigation visible | Desktop mode retained |
| Hero | One column; 330px visual panel | Wider gutters/copy | Two columns; 430px panel | Final heading size |
| Services | One column | Two columns | Four columns | Four columns |
| Process | One column | Two columns | Three columns | Six columns; taller steps |
| Work | One column | Three columns | Three columns | Three columns |
| Contact | Fluid inset panel and padding | Wider shared gutters/spacing | No special structural change | No special structural change |
| Footer | One-column grid; 164px logo | Two-column grid; 176px footer logo | Two-column grid | Two-column grid |

Static inspection found no obvious new header overlap or horizontal-overflow defect from brand integration. Safeguards include constrained containers, flexible grids, wrapping, `minmax(0, 1fr)`, `min-width: 0`, heading wrapping, and horizontal overflow clipping. Actual layout at breakpoints, long-content behavior, backdrop-filter fallback, and physical-device rendering require manual browser/device QA.

## Browser QA checklist

These checks are pending and must not be recorded as passed until performed by the Project Owner.

Test desktop Chrome and Edge, then mobile emulation at 375px, 390px, and 768px. For each environment/viewport:

- [ ] Page loads.
- [ ] DaDaStore logo is visible and legible.
- [ ] Favicon is visible where the browser exposes it.
- [ ] Header does not overlap content.
- [ ] All visible navigation links work.
- [ ] Mobile menu opens and closes where mobile navigation is active.
- [ ] Start a Project invokes the browser/mail-client handler.
- [ ] View Services scrolls to Services correctly.
- [ ] Active navigation updates while scrolling.
- [ ] Back-to-top appears after sufficient scroll.
- [ ] Back-to-top returns to the top.
- [ ] Reveal content becomes visible.
- [ ] No horizontal scrollbar appears.
- [ ] No image is broken.
- [ ] Browser console has no errors.
- [ ] Network panel has no failed local assets.

Additional focused checks:

- [ ] Keyboard focus remains visible, including on the mobile toggle.
- [ ] Mobile tab order and menu focus behavior are recorded.
- [ ] Reduced-motion preference behavior is recorded.
- [ ] Active navigation is checked around section boundaries.
- [ ] Back-to-top behavior is checked around the 500px threshold.

No manual browser test in this checklist was run by Unit 1F.

## Metadata QA

The head contains:

- title
- meta description
- theme color
- Open Graph title
- Open Graph description
- Open Graph type
- Open Graph URL
- Open Graph site name
- Open Graph image
- Open Graph image alt text

Exact Open Graph image URL:

`https://dadastore.co/assets/img/og-dadastore.png`

The referenced local Open Graph source exists. No live social-preview validation was performed.

## Performance guardrails

Static inspection verifies:

- no framework bundle
- no package runtime or package manifest
- no external UI library
- no external font dependency
- one local CSS file
- one local JavaScript file
- local runtime image assets only

Practical file sizes:

| File | Bytes |
| --- | ---: |
| `index.html` | 10,620 |
| `assets/css/style.css` | 16,457 |
| `assets/js/main.js` | 3,122 |
| `assets/img/dadastore-logo.png` | 217,325 |
| `assets/img/og-dadastore.png` | 479,712 |

No Lighthouse run, measured performance result, transfer-size analysis, cache validation, or production-host timing is claimed.

## Security/static-surface guardrails

Repository and implementation searches found:

- no PHP
- no database configuration
- no form posting data
- no API endpoint configuration
- no inline secret
- no authentication token
- no private key
- no environment file containing secrets
- no third-party script injection
- no dynamic script injection

The current runtime surface is static HTML/CSS/JavaScript with browser-native navigation and mailto actions.

## External dependency guardrail

External/public references found in implementation are classified as follows:

| Reference | Classification |
| --- | --- |
| `https://dadastore.co/` in `og:url` | Metadata/public canonical URL |
| `https://dadastore.co/assets/img/og-dadastore.png` in `og:image` | Metadata/public social-image URL |
| `mailto:hello@dadastore.co` | Mailto/browser action |
| `assets/js/main.js` | Local runtime dependency |
| `assets/css/style.css` and local icon links | Local runtime dependencies |

No unexpected external runtime dependency, remote script, remote stylesheet, external font, or external image-hosting URL was found. No `http://` URL was found.

## Guardrail findings

### Verified

- Expected production files and local references exist.
- Brand assets match approved source files byte-for-byte.
- Homepage structure, content boundaries, contact boundary, navigation targets, and Unit 1D JavaScript mapping remain intact.
- Metadata and favicon references are present.
- No unexpected runtime dependency, dynamic script injection, persistence, secret, backend, API client, analytics, framework, or build tooling exists.
- Git contains the Unit 1E integration commit and tracked production assets.

### Non-blocking gap

- Mobile menu lacks Escape, outside-click, focus containment, and focus restoration behavior.
- Mobile toggle lacks a custom focus-visible selector.
- JavaScript smooth scrolling does not explicitly honor reduced-motion preference.
- No active-navigation fallback exists without IntersectionObserver.
- No-JavaScript mobile navigation and reveal-content behavior are incomplete.
- Content and contact details lack formal owner approval.

### Blocking defect

None found through static verification.

### Requires manual browser QA

- Chrome and Edge desktop behavior
- 375px, 390px, and 768px emulated layouts
- navigation, mobile menu, active state, reveal, and back-to-top runtime behavior
- focus, keyboard, reduced-motion, and mailto behavior
- horizontal overflow, header overlap, image loading, console, and network checks
- favicon display and social-preview behavior

### Future unit candidate

- focused accessibility interaction design/fixes
- no-JavaScript visibility/navigation guardrails
- reduced-motion-aware JavaScript scrolling
- content and contact verification
- measured performance and social-preview validation

## Known limitations

- Work remains placeholder content labeled `Framework / Coming soon`.
- Contact is mailto-only.
- Homepage content and contact details lack formal production approval.
- Formal browser/device QA has not yet been performed.
- Formal accessibility compliance has not been established.
- No Lighthouse record exists.
- Social-preview rendering has not been validated on live platforms.
- Mobile-menu keyboard and focus management are incomplete.
- JavaScript-requested smooth scrolling does not explicitly check reduced-motion preference.
- Without JavaScript, the mobile menu cannot open and most non-hero reveal content remains hidden.
- Production deployment, release readiness, cutover, and rollback validation remain separate future work.

## Foundation readiness assessment

**Ready for Unit 1G completion checkpoint.**

No blocking defect was found through the required static verification. Non-blocking gaps and pending manual browser QA are explicitly recorded and must remain visible in the checkpoint; readiness for Unit 1G is not production readiness.

## Recommended next unit

**Unit 1G — V2 Foundation Completion Checkpoint**

Units 1A–1F now establish architecture boundaries, verify structure, visual/responsive implementation, interactions, approved brand integration, and static guardrails. Unit 1G should record the foundation state, limitations, test record, and bounded next phase without deploying.

## Explicitly not next

- deployment
- production cutover
- DNS or custom-domain changes
- changes to the live DaDaStore repository/site
- contact backend
- analytics integration
- case-study claims or publication
- broad redesign
- framework adoption
- build tooling

## Verification record

- `git diff --check`: passed before this document was added.
- `git status --short`: `?? Microsoft/` and `?? incoming-brand/` before this document was added.
- `git branch --show-current`: `main`.
- `git remote -v`: origin fetch/push both use `https://github.com/saadmasoodalam/dadastore-v2.git`.
- `git log -5 --oneline`: recorded in the Git-state guardrail section.
- Local asset references: all resolve.
- Forbidden path/runtime-pattern search: no matches.
- External runtime dependencies: none.
- Tests: static inspections only; no dependency installation or browser automation was run.
