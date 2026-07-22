# Unit 4C-Fix — Services Density and Icon Consistency

## 1. Status

Unit 4C-Fix is a bounded HTML, CSS, and documentation correction to the Solutions/Services section. It does not change JavaScript, image assets, dependencies, deployment, or production state.

## 2. Purpose

The purpose of this fix is to reduce heading dominance, tighten card copy, and make all six service-card icons visually consistent with the compact template direction.

Core law:

- Compact copy is not loss of meaning.
- Icon consistency is not removal of Shopify expertise.
- Section polish is not full-page redesign.
- No deployment.

## 3. Owner review

The Project Owner confirmed that Unit 4C improved the section substantially but identified three remaining issues:

- the left heading was still too dominant
- the service cards remained too text-heavy
- the full-color Shopify image did not match the other neon line icons

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4C_SOLUTIONS_AND_SERVICES_SECTION_REVIEW.md`
- `_local-reference/v3-template-reference-02.png`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Heading correction

The approved heading remains:

> End-to-End Growth Systems That Drive Results

Its desktop maximum is reduced to `2.45rem`, with a controlled width and line height intended to produce approximately three to four balanced lines in the left column. It remains clearly subordinate to the hero headline.

## 7. Experience distinction

The shorter experience statement is:

> Built on 25+ years of creative and technical work, including 10+ years across ecommerce, paid advertising, tracking, troubleshooting, and conversion systems.

Both approved chips remain:

- `25+ Years Creative & Technical`
- `10+ Years Ecommerce & Paid Ads`

The implementation does not imply 25+ years specifically in paid advertising.

## 8. Card-density correction

Each of the six cards retains:

- one numbered label
- one icon
- one title
- one strong summary
- one concise detail paragraph

The approved shortened copy removes long list construction while preserving the intended service meaning and platform coverage. Card padding, icon-column width, copy gap, and introduction spacing are tightened.

## 9. Icon consistency

All six cards now use:

- a `52px × 52px` icon wrapper
- the same border, background, shadow, and alignment system
- a locally authored inline SVG
- the existing neon pink, violet, and blue color rotation

The Shopify raster image is removed from the card and replaced by a neutral inline shopping-bag/store icon. The `Shopify Growth` title and service copy remain, without implying partnership.

## 10. Responsive considerations

- `375px` and `390px`: cards stack in one column with bounded icon and copy columns.
- `768px`: cards retain a balanced two-column grid.
- `1024px`: the smaller left heading supports the two-column card layout without dominating it.
- `1440px`: the cards retain the compact three-column by two-row layout.
- No fixed page width, clipped text, icon misalignment, or horizontal overflow is introduced.

## 11. Guardrails preserved

The section remains free of:

- guaranteed ROAS
- guaranteed sales
- revenue generated
- ad spend managed
- partnership or certification claims
- client-specific results

The `#services` ID, `.reveal` hooks, internal CTA, navigation target, proof strip, platform strip, header, hero, and contact behavior remain intact.

## 12. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4C_FIX_SERVICES_DENSITY_AND_ICON_CONSISTENCY.md`

Not changed:

- `assets/js/main.js`
- any image or other asset
- dependency, build, analytics, backend, or deployment configuration

## 13. Verification record

- Branch verified as `refine/v3-section-review`.
- Six service cards and six inline SVG service icons remain present.
- No Shopify image is referenced inside the Services section.
- The accurate 25+/10+ experience distinction and both chips remain.
- JavaScript and every image-file hash remain unchanged.
- No external dependency is added.
- All mailto links remain `mailto:dadastore.co@gmail.com`.
- Forbidden claims are absent.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 14. Recommended next section review

**Unit 4D — Work and Framework Cards Review**

Goal: review the Work/Framework section as the next bounded homepage surface without reopening the approved hero, proof strip, platform strip, or corrected Solutions/Services section.

## 15. Explicitly not next

- client case-study publication
- fake performance metrics or client results
- testimonials or client logos
- partnership, certification, sponsorship, or endorsement claims
- JavaScript feature work
- image generation, replacement, or modification
- analytics or contact-backend integration
- framework, build-tool, package, icon-library, or external-font adoption
- broad redesign
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 16. Test record

No automated application tests are required for this bounded static HTML, CSS, and documentation fix. Static copy, card-count, icon-consistency, responsive-rule, claim-boundary, protected-file hash, mailto, dependency, and Git checks are used. Browser and physical-device visual approval remain separate owner-QA steps.
