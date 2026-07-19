# Unit 4B2 — Replace Platform Strip With Supplied Original Logos

## 1. Status

Unit 4B2 is a bounded logo-asset integration, HTML/CSS correction, and documentation unit. It replaces the locally drawn platform approximations with the four supplied PNG logo files. It does not deploy, merge, or alter production.

## 2. Purpose

The purpose of this unit is to make the platform strip match the approved template direction more closely by using the Project Owner's supplied original logo assets for Meta, Shopify, Google, and TikTok.

Core law:

- Use supplied logo assets.
- Do not recreate platform logos manually.
- Logo-strip context is not a partnership claim.
- Platform references describe service coverage, not endorsement.
- No fake claims.
- No deployment.

## 3. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `_local-reference/platform-logos/`
- `_local-reference/v3-template-reference-02.png`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`

## 4. Owner feedback

The Project Owner rejected the hand-drawn SVG approximations used in Unit 4B-Fix and required the supplied local original-logo files instead. This unit follows that correction without reopening the proof strip or other homepage sections.

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Supplied logo sources

The following local source files were inspected and copied without changing their binary contents:

- `_local-reference/platform-logos/meta.png`
- `_local-reference/platform-logos/shopify.png`
- `_local-reference/platform-logos/google.png`
- `_local-reference/platform-logos/tiktok.png`

Production copies:

- `assets/img/platforms/meta.png`
- `assets/img/platforms/shopify.png`
- `assets/img/platforms/google.png`
- `assets/img/platforms/tiktok.png`

No logo was downloaded, traced, redrawn, or replaced with an external URL.

## 7. Platform-strip implementation

The strip retains the approved label:

> Platforms and systems we work across

It now uses `<img>` elements for:

- Meta — alt text: `Meta Ads`
- Shopify — alt text: `Shopify`
- Google — alt text: `Google Ads`
- TikTok — alt text: `TikTok`

The previous six inline platform SVG approximations and their drawing-specific CSS are removed. CRO and Analytics remain plain service labels after the logo row rather than being presented as brand logos.

## 8. CSS treatment

- The platform area remains dark.
- Individual logos have no pill backgrounds or button borders.
- Logo widths and maximum heights are balanced independently because the supplied files have different aspect ratios.
- Dark wordmarks receive a light monochrome CSS treatment for legibility without changing the supplied files.
- The Google wordmark retains its supplied color treatment.
- Spacing and alignment follow the horizontal template-strip rhythm.

## 9. Proof-strip preservation

The compact proof strip remains intact with:

- `$100K+` / `Upwork Earnings`
- `74` / `Completed Jobs`
- `5,000+` / `Hours`
- `100%` / `Job Success`
- `Top Rated Plus` / `Upwork Status`

No proof value, icon, or claim is added by Unit 4B2.

## 10. Partnership and claim boundary

The logo strip identifies platforms and systems used in the service context. It does not state or imply partnership, certification, sponsorship, platform verification, endorsement, or client ownership.

Forbidden partnership wording is absent from implementation:

- `Trusted by platforms`
- `Verified partner`
- `Official partner`
- `Powered by`
- `Meta Marketing Partner`

No fake metrics, testimonials, client logos, or performance claims are introduced.

## 11. Responsive behavior

- `375px` and `390px`: the four logos form a compact two-column grid, followed by the CRO and Analytics service text.
- `768px`: the logos align in a four-column row; the service text remains on its own centered row.
- `1024px` and `1440px`: the left strip label is followed by a four-logo horizontal row and the CRO/Analytics service text.
- Grid tracks use `minmax(0, 1fr)`, images use bounded responsive dimensions, and no horizontal overflow is introduced.

## 12. Compatibility preserved

`assets/js/main.js` is unchanged. Existing header, navigation, reveal, smooth-scroll, active-navigation, back-to-top, and current-year hooks remain intact.

The hero image, hero content, proof values, services section, mailto targets, section IDs, and other image assets remain unchanged.

## 13. Files changed

Added:

- `assets/img/platforms/meta.png`
- `assets/img/platforms/shopify.png`
- `assets/img/platforms/google.png`
- `assets/img/platforms/tiktok.png`
- `docs/UNIT_4B2_REPLACE_PLATFORM_STRIP_WITH_SUPPLIED_ORIGINAL_LOGOS.md`

Changed:

- `index.html`
- `assets/css/style.css`

## 14. Verification record

- Branch verified as `refine/v3-section-review`.
- Each production PNG is byte-for-byte identical to its supplied local source.
- The platform strip uses four local `<img>` references with the required alt text.
- Fake inline platform SVGs and their drawing-specific CSS are removed.
- CRO and Analytics are plain service labels.
- No external asset URL, logo package, font, or dependency is added.
- Partnership language is absent from implementation.
- JavaScript and the hero PNG have no Unit 4B2 diff.
- Mailto links remain `mailto:dadastore.co@gmail.com`.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 15. Recommended next section review

**Unit 4C — Solutions/Services Section Review**

Goal: review the light Solutions/Services section as the next bounded homepage surface without reopening the approved hero, proof strip, or corrected original-logo strip.

## 16. Explicitly not next

- external or downloaded platform assets
- hand-drawn platform-logo replacements
- partnership, certification, sponsorship, or endorsement claims
- new proof values or performance claims
- client logos, testimonials, or case-study publication
- JavaScript feature work
- analytics or contact-backend integration
- framework, build-tool, package, or external-font adoption
- broad redesign
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 17. Test record

No automated application tests are required for this bounded static integration. Static asset-integrity, HTML-reference, alt-text, SVG-removal, responsive-rule, claim-boundary, protected-file, mailto, dependency, and Git checks are used. Browser and physical-device visual approval remain separate owner-QA steps.
