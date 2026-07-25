# Unit 4A3 — Header Logo Lockup and Hero Value Card Icons

## 1. Status

Unit 4A3 is a bounded HTML, CSS, and documentation refinement. It updates the editable header lockup and adds inline decorative icons to the existing hero value cards without changing JavaScript, image assets, dependencies, deployment state, or page-wide brand copy.

## 2. Purpose

The purpose of this unit is to bring the header identity and hero value cards closer to the approved template's polished SaaS/agency presentation while preserving DaDaStore's brand, proof, and static-site boundaries.

Core law:

- Header lockup refinement is not full brand rename.
- Icon styling is not new feature expansion.
- Visual polish is not production cutover.
- No fake claims.

## 3. Owner feedback

The Project Owner approved the Unit 4A2 hero-copy direction and requested two focused refinements:

- a header lockup closer to the template's cart-mark, `.co`, and small-tagline treatment
- stronger icon-led value cards instead of the previous simple decorative dots

## 4. Template reference used

`_local-reference/v3-template-reference-02.png` was inspected for:

- the compact relationship between the cart mark and editable brand text
- a small cyan `.co` suffix
- a tightly spaced tagline below the wordmark
- compact glass value cards with distinct neon line icons
- responsive header proportions

The reference's external fonts, fake metrics, platform/client logos, testimonials, rate, contact choices, and global DaDaStore.co branding were not copied.

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Header lockup changes

The header continues to use the existing unmodified cart mark:

```text
assets/img/dadastore-mark.png
```

Editable HTML now presents:

- `DaDaStore.co`
- `Ecommerce Growth. Engineered.`

The `DaDaStore` core retains the existing white-to-brand-gradient treatment. The smaller `.co` suffix and tagline use cyan accents. The complete text lockup sits beside the cart mark inside the existing home link.

The link remains labelled `DaDaStore home` and continues to target `#top`.

## 7. Hero value-card icon changes

Each existing value card now includes one small decorative inline SVG:

- `Data-Driven Decisions`: target, center dot, and signal-ring icon
- `Performance Marketing`: connected-node and growth-path icon
- `Scalable Growth Systems`: stacked system-layer icon

The SVGs use local markup and inherited CSS color. They are hidden from assistive technology because the adjacent text supplies each card's meaning.

The icon wrappers use bounded pink, violet, and cyan strokes, subtle glass surfaces, and restrained glow. No icon library, external request, raster image, platform logo, client logo, metric, or JavaScript behavior is introduced.

## 8. Brand boundary

The `.co` treatment is limited to the header's visual lockup. Primary brand identity remains `DaDaStore` throughout:

- page title and metadata
- hero copy
- proof language
- section content
- footer identity
- accessible home-link label

This unit does not globally rename the business to DaDaStore.co and does not create or alter a logo file.

## 9. Proof and claim guardrails

The hero headline, supporting copy, CTA targets, approved raster, and proof bar are preserved.

This unit does not add:

- generated-revenue or managed-ad-spend claims
- ROAS or CPA claims
- order or sales metrics
- growth percentages
- hourly rates
- testimonials
- client names or client logos
- fake platform marks

The three value-card labels remain positioning statements rather than proof or performance claims.

## 10. Responsive considerations

Static layout rules cover the requested widths:

- `375px` and `390px`: the cart mark remains `40px`, the text lockup stays compact, the small tagline remains visible, the menu control retains its fixed touch target, and hero cards remain stacked.
- `768px`: the header retains its mobile navigation control while the stacked value cards protect icon and label width in the split hero.
- `1024px`: desktop navigation activates, the cart mark increases to `48px`, the text lockup scales modestly, and value cards form a three-column row.
- `1440px`: the capped floating header and hero container prevent uncontrolled spacing or icon growth.

The lockup and cards use `min-width: 0`; the brand text remains on bounded single lines; icons have fixed compact dimensions; card text remains flexible. No page-level width, fixed hero height, or horizontal-overflow behavior is added.

## 11. JS compatibility preserved

`assets/js/main.js` is unchanged. This unit preserves:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `.reveal`
- `[data-back-to-top]`
- `[data-year]`
- all observed navigation section IDs

Navigation, header scroll state, smooth scrolling, active navigation, reveal behavior, back-to-top behavior, and current-year output remain compatible.

## 12. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4A3_HEADER_LOGO_LOCKUP_AND_HERO_VALUE_CARD_ICONS.md`

Not changed:

- `assets/js/main.js`
- `assets/img/dadastore-mark.png`
- `assets/img/dadastore-logo.png`
- `assets/img/hero-commerce-intelligence.png`
- any other image or asset
- dependency, build, analytics, contact-backend, or deployment configuration

## 13. Verification record

- Current branch is verified as `refine/v3-section-review`.
- JavaScript and all files in `assets/img/` are compared with their pre-unit SHA-256 hashes.
- The header contains `DaDaStore.co` as editable text and the required tagline.
- The header home link still targets `#top`.
- All three hero value labels remain present.
- Three local inline SVG icon wrappers are present and decorative.
- No external icon library, font, package, or runtime dependency is added.
- Hero image source, hero copy, CTA links, proof values, mailto targets, section IDs, and JavaScript hooks remain present.
- Forbidden-claim checks cover the changed header/hero region and CSS.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 14. Recommended next section review

**Unit 4B — Proof Bar and Platform Strip Review**

Goal: review the verified proof bar and platform strip as the next bounded homepage surfaces without reopening the approved hero image, headline, or Unit 4A3 header treatment.

## 15. Explicitly not next

- global DaDaStore.co rename
- new or modified logo/image assets
- external fonts, icon libraries, frameworks, or dependencies
- further hero-image generation
- fake metrics, testimonials, client identities, or logos
- JavaScript feature work
- broad homepage redesign
- analytics or contact backend
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 16. Test record

No automated application test suite is required for this bounded HTML, CSS, and documentation refinement. Static content, responsive-rule, protected-file hash, image-integrity, proof/claim, mailto, dependency, and Git checks are used. Browser and physical-device visual review remain separate owner-QA steps.
