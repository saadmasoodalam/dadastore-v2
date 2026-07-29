# Unit 4H — Automated Multi-Resolution Screenshot QA Report

## 1. Title

DaDaStore V3 automated multi-resolution screenshot and browser QA.

## 2. Branch

`refine/v3-section-review`

## 3. Test date

2026-07-26

## 4. Browser and version

Microsoft Edge `151.0.4129.35`, running headlessly through the browser DevTools protocol.

## 5. Local URL used

- Screenshot session: `http://127.0.0.1:8773/index.html`
- Clean network and functional verification session: `http://127.0.0.1:8772/index.html`
- Mobile-menu interaction capture session: `http://127.0.0.1:8765/index.html`

Each temporary localhost server used the same current branch state. No deployment or external host was involved.

## 6. Screenshot inventory

| Evidence | Requested viewport | PNG dimensions |
| --- | ---: | ---: |
| `desktop-1440.png` | 1440 × 1000 | 1425 × 5145 |
| `desktop-1180.png` | 1180 × 900 | 1165 × 5343 |
| `tablet-1024.png` | 1024 × 900 | 1009 × 5509 |
| `tablet-768.png` | 768 × 1024 | 753 × 6947 |
| `mobile-390.png` | 390 × 844 | 390 × 10050 |
| `mobile-375.png` | 375 × 812 | 375 × 10053 |
| `mobile-menu-390.png` | 390 × 844 | 390 × 844 |

The full-page desktop and tablet PNG widths reflect the browser content surface after its 15px vertical-scrollbar gutter. Browser viewport emulation used the exact requested widths and heights.

Full-page captures set existing `.reveal` elements to the final `is-visible` state before capture. This reproduces the final state applied by the current JavaScript after scrolling and prevents screenshot automation from capturing off-screen elements during their reveal transition.

## 7. Overall result

**Pass**

- All required screenshots exist and are readable PNG files.
- All major sections render at all required widths.
- No horizontal overflow was measured.
- No browser console errors, HTTP errors, failed local requests, or broken images were found in the clean-load verification.
- Navigation, active states, mobile-menu close paths, focus restoration, back-to-top, mailto targets, internal targets, and current-year output passed.
- No blocking or non-blocking site defect was found.

## 8. Desktop 1440 result

Viewport:
- Load: Pass
- Header: Pass
- Navigation: Pass
- Hero: Pass
- Services: Pass
- Work: Pass
- Process: Pass
- Proof: Pass
- Reviews: Pass
- Contact/Footer: Pass
- Horizontal overflow: No
- Notes: Header logo and cart wheels are fully visible. Six Services cards, six Work cards and visuals, four Process stages, two experience cards, five balanced Reviews cards, Contact CTA, and three-column footer are readable. The hero, proof strip, and platform strip remain visually balanced.

## 9. Desktop 1180 result

Viewport:
- Load: Pass
- Header: Pass
- Navigation: Pass
- Hero: Pass
- Services: Pass
- Work: Pass
- Process: Pass
- Proof: Pass
- Reviews: Pass
- Contact/Footer: Pass
- Horizontal overflow: No
- Notes: Desktop navigation remains complete and usable. Content grids retain their intended desktop structure without clipping. Reviews retain a full-width balanced second row.

## 10. Tablet 1024 result

Viewport:
- Load: Pass
- Header: Pass
- Navigation: Pass
- Hero: Pass
- Services: Pass
- Work: Pass
- Process: Pass
- Proof: Pass
- Reviews: Pass
- Contact/Footer: Pass
- Horizontal overflow: No
- Notes: The compact desktop header remains readable at the 1024px breakpoint. Services, Work, Process, Reviews, Contact, and footer columns remain balanced without broken wrapping.

## 11. Tablet 768 result

Viewport:
- Load: Pass
- Header: Pass
- Navigation: Pass
- Hero: Pass
- Services: Pass
- Work: Pass
- Process: Pass
- Proof: Pass
- Reviews: Pass
- Contact/Footer: Pass
- Horizontal overflow: No
- Notes: The header switches to the mobile-menu control. Two-column card layouts stack cleanly, the Process progression remains readable, the final Reviews card spans the available row, and footer groups wrap without collision.

## 12. Mobile 390 result

Viewport:
- Load: Pass
- Header: Pass
- Navigation: Pass
- Hero: Pass
- Services: Pass
- Work: Pass
- Process: Pass
- Proof: Pass
- Reviews: Pass
- Contact/Footer: Pass
- Horizontal overflow: No
- Notes: Hero content stacks correctly, the raster visual remains legible, all cards use a single-column flow, review cards retain natural heights, contact controls remain readable, and footer content stacks fully inside the viewport.

## 13. Mobile 375 result

Viewport:
- Load: Pass
- Header: Pass
- Navigation: Pass
- Hero: Pass
- Services: Pass
- Work: Pass
- Process: Pass
- Proof: Pass
- Reviews: Pass
- Contact/Footer: Pass
- Horizontal overflow: No
- Notes: The narrowest required viewport remains usable with no clipped major content, broken image, horizontal scroll region, or unreadable section transition.

## 14. Mobile menu result

**Pass**

The 390 × 844 open-menu capture visibly contains:

- Services
- Work
- Process
- Proof
- Reviews
- Contact
- Start a Project

Interaction checks:

- Opens from the menu toggle: Pass
- `aria-expanded="true"` while open: Pass
- Closes after link click: Pass
- Closes with Escape: Pass
- Restores focus to the toggle after Escape: Pass
- Closes after outside click: Pass
- Start a Project remains visible and usable: Pass

## 15. Navigation result

**Pass**

- Desktop order: Services, Work, Process, Proof, Reviews, Contact
- Mobile order: Services, Work, Process, Proof, Reviews, Contact
- Every internal hash link has a matching target.
- Services, Work, Process, Proof, Reviews, and Contact each acquired the active navigation state after navigation.
- Section landing positions were `87.86px` to `106.17px` from the viewport top, while the fixed header ended at `85.55px`; no tested section start was hidden by the header.
- Back-to-top returned the page to `scrollY = 0`.

## 16. Console result

**Pass — 0 console errors**

No runtime exception, console error, or browser log error was recorded during the clean localhost load.

## 17. Network result

**Pass**

- Failed local requests: 0
- HTTP responses at 400 or above: 0
- Broken PNG/SVG images: 0
- Missing CSS or JavaScript: 0
- External runtime requests/dependencies: 0
- WordPress paths (`wp-content`, `wp-admin`, `wp-json`): absent

An earlier multi-navigation automation pass observed one expected canceled document navigation. The isolated clean-load run from `about:blank` recorded zero failures and is the authoritative network result.

## 18. Mailto result

**Pass**

- Invalid mailto targets: 0
- Required target: `mailto:dadastore.co@gmail.com`
- All eight current mailto links use the required target.

## 19. Horizontal overflow result

**Pass — no horizontal overflow**

For every required viewport, `document.documentElement.scrollWidth` did not exceed `clientWidth`.

## 20. Defect inventory

No site defects recorded.

The initial screenshot pass exposed an automation artifact in which off-screen reveal elements were captured before their transition completed. The six full-page screenshots were regenerated with the existing final `is-visible` state. This was a QA-capture issue, not an implementation defect.

## 21. Blocking defects

None.

## 22. Non-blocking defects

None.

## 23. Recommended next action

**Unit 4I — Final Branch Approval and Merge Readiness**

Record the Project Owner’s final branch decision and merge-readiness boundary. This QA result does not itself authorize a merge, deployment, DNS change, or production cutover.
