# Unit 4C4 — Remove Forced Service Card Heights

## 1. Status

Unit 4C4 is a bounded CSS and documentation correction. It restores natural service-card heights without changing HTML, JavaScript, assets, dependencies, deployment, or production state.

## 2. Purpose

The purpose of this unit is to remove the equal-row stretching introduced during Unit 4C3 so every service card ends naturally after its content.

Core law:

- Fix card stretching, not content length.
- Do not make cards taller.
- Do not add text to fill blank space.
- Do not redesign the section again.
- No deployment.

## 3. Owner feedback

The Project Owner confirmed that the visible blank area was inside the cards rather than only around the section. The wide-desktop grid was stretching both rows and their cards to fill the height of the adjacent left column.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4C2_COMPACT_SERVICE_CARD_REDESIGN.md`
- `docs/UNIT_4C3_SERVICES_SECTION_EMPTY_SPACE_AND_ALIGNMENT_FIX.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Root cause

The wide-desktop Services rules included:

- `grid-auto-rows: 1fr`
- `align-self: stretch` on the card grid
- `align-items: stretch` on the Services shell

Together, these rules forced the two card rows to divide the full left-column height, producing large empty areas below shorter card content.

## 7. CSS correction

The forced wide-desktop sizing rules are removed.

The Services grid now explicitly uses:

- `grid-auto-rows: auto`
- `align-items: start`

Each `.service-card` now explicitly uses:

- `height: auto`
- `min-height: 0`
- `align-self: start`

No `height: 100%`, fixed height, flex growth, or `justify-content: space-between` is applied to the service cards.

## 8. Natural card behavior

- Each card height is determined only by its icon, label, title, description, padding, and wrapping.
- Cards in the same row may end at different vertical positions.
- Uneven card bottoms are accepted to avoid blank internal space.
- The 3-column by 2-row wide-desktop layout remains.
- Current copy, icons, card padding, and section spacing remain unchanged.

## 9. Responsive considerations

- `375px` and `390px`: single-column cards remain natural height.
- `768px`: two-column cards align to the top without forced equal rows.
- `1024px`: the two-column grid remains content-driven.
- `1440px`: the 3×2 grid uses natural row and card heights instead of stretching to the left column.
- No clipped content, fixed page width, or horizontal overflow is introduced.

## 10. Preserved content and behavior

Unit 4C4 preserves:

- all six service cards and descriptions
- all six inline SVG icons
- section heading, experience text, chips, supporting statement, and CTA
- `#services`
- header, hero, proof, and platform sections
- mailto links and JavaScript behavior

## 11. Files changed

Changed:

- `assets/css/style.css`

Added:

- `docs/UNIT_4C4_REMOVE_FORCED_SERVICE_CARD_HEIGHTS.md`

Not changed:

- `index.html`
- `assets/js/main.js`
- any image or other asset
- dependency, build, analytics, backend, or deployment configuration

## 12. Verification record

- Branch verified as `refine/v3-section-review`.
- `index.html`, JavaScript, and all image hashes remain unchanged from the Unit 4C4 baseline.
- The Services grid no longer contains `grid-auto-rows: 1fr` or stretch alignment.
- Service cards have no fixed, percentage, or unnecessary minimum height.
- Natural top-aligned card behavior is explicit.
- Six service cards and six inline SVG icons remain present.
- No dependency or external asset is added.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 13. Recommended next section review

**Unit 4D — Work and Framework Cards Review**

Goal: review the Work/Framework section as the next bounded homepage surface without reopening the corrected Services card sizing.

## 14. Explicitly not next

- service content or icon changes
- section-spacing redesign
- client case-study publication
- fake performance metrics, testimonials, or client logos
- JavaScript feature work
- analytics or contact-backend integration
- framework, build-tool, package, icon-library, or external-font adoption
- broad redesign
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 15. Test record

No automated application tests are required for this bounded CSS and documentation correction. Static forced-sizing, card-structure, protected-file hash, dependency, and Git checks are used. Browser and physical-device visual approval remain separate owner-QA steps.
