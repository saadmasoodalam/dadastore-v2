# Unit 4C2 — Compact Service Card Redesign

## 1. Status

Unit 4C2 is a bounded HTML, CSS, and documentation redesign of the six service cards. It does not modify JavaScript, assets, dependencies, deployment, or production state.

## 2. Purpose

The purpose of this unit is to make the Services cards substantially shorter, faster to scan, and more visually integrated with the compact template reference.

Core law:

- Compact cards are not permission to remove service meaning.
- Shorter copy is not loss of credibility.
- Card redesign is not full-page redesign.
- No deployment.

## 3. Owner feedback

The Project Owner confirmed that icon consistency and copy density had improved, but the cards still appeared too large and visually disconnected. Unit 4C2 resolves that through a single-description structure and a lighter, tighter card system.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4C_SOLUTIONS_AND_SERVICES_SECTION_REVIEW.md`
- `docs/UNIT_4C_FIX_SERVICES_DENSITY_AND_ICON_CONSISTENCY.md`
- `_local-reference/v3-template-reference-02.png`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Compact card structure

Each of the six cards now contains only:

- one number/category label
- one compact neon inline SVG icon
- one title
- one concise description

The separate summary and detail paragraphs are replaced by the single approved description for each service.

## 7. Visual redesign

The card system now uses:

- smaller `46px × 46px` icon wrappers
- reduced `14px` card padding
- a tighter `13px` corner radius
- lighter white surfaces
- subtler borders and shadows
- smaller grid gaps
- stronger title-to-description hierarchy
- restrained hover movement

Tablet cards use a controlled minimum height of `150px`; wide-desktop cards use `160px`, keeping the target visual range near 150–190px while allowing mobile cards to remain content-driven.

## 8. Copy preservation

The six compact descriptions preserve the intended service meaning across:

- Meta, Google Search, TikTok, X, and Snapchat campaign systems
- CRO, landing pages, offers, funnels, messaging, and customer journeys
- Pixel, CAPI, analytics, attribution, integrations, event diagnosis, and signal troubleshooting
- Shopify, Wix, and Squarespace page, offer, product-presentation, and funnel improvements
- hooks, angles, offers, messaging, graphics, animation, 3D, and structured testing
- consultation, positioning, audience strategy, account reviews, troubleshooting, and practical support

No second detail paragraph remains in any card.

## 9. Left-column preservation

The section retains:

- `Our Solutions`
- `End-to-End Growth Systems That Drive Results`
- the accurate 25+ years creative/technical and 10+ years ecommerce/paid-advertising distinction
- both experience chips
- the supporting statement
- the `Build your growth system` internal contact CTA

At desktop widths, the left track is reduced slightly and the gap is tightened so the card grid receives more visual space.

## 10. Responsive considerations

- `375px` and `390px`: one-column cards remain content-driven without oversized minimum heights.
- `768px`: cards use two columns and a controlled 150px minimum height.
- `1024px`: the compact left track and two-column card grid remain balanced.
- `1180px` and `1440px`: the cards use three columns by two rows with a 160px minimum height.
- Icon and copy columns use bounded widths and `minmax(0, 1fr)` wrapping, preventing clipping and horizontal overflow.

## 11. Guardrails

The implementation does not add:

- guaranteed ROAS
- guaranteed sales
- revenue generated
- ad spend managed
- fake results
- fake testimonials
- client logos
- external icon libraries or dependencies

The header, hero, proof strip, platform logos, hero image, `#services` ID, mailto targets, and JavaScript hooks remain intact.

## 12. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4C2_COMPACT_SERVICE_CARD_REDESIGN.md`

Not changed:

- `assets/js/main.js`
- any image or other asset
- dependency, build, analytics, backend, or deployment configuration

## 13. Verification record

- Branch verified as `refine/v3-section-review`.
- Six service cards and six inline SVG icons remain.
- Every card contains exactly one description paragraph.
- All `.service-detail` and `.outcome-line` markup is removed from the Services section.
- The accurate experience distinction and both chips remain.
- JavaScript and asset hashes remain unchanged from the Unit 4C2 baseline.
- No external dependency is added.
- All mailto links remain `mailto:dadastore.co@gmail.com`.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 14. Recommended next section review

**Unit 4D — Work and Framework Cards Review**

Goal: review the Work/Framework section as the next bounded homepage surface without reopening the approved hero, proof strip, platform strip, or compact Services section.

## 15. Explicitly not next

- client case-study publication
- fake performance metrics or client results
- testimonials or client logos
- JavaScript feature work
- image generation, replacement, or modification
- analytics or contact-backend integration
- framework, build-tool, package, icon-library, or external-font adoption
- broad redesign
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 16. Test record

No automated application tests are required for this bounded static HTML, CSS, and documentation redesign. Static card-structure, exact-copy, icon, responsive-rule, protected-file hash, mailto, dependency, and Git checks are used. Browser and physical-device visual approval remain separate owner-QA steps.
