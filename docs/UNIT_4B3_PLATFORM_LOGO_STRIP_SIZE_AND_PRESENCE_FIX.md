# Unit 4B3 — Platform Logo Strip Size and Presence Fix

## 1. Status

Unit 4B3 is a bounded CSS-polish and documentation unit. It increases the visual presence of the supplied platform logos without changing HTML, JavaScript, images, dependencies, or runtime behavior.

## 2. Purpose

The purpose of this unit is to make the original Meta, Shopify, Google, and TikTok logo row feel closer to the strong horizontal strip in the template reference.

Core law:

- Logo sizing is not a partnership claim.
- Platform references describe service context, not endorsement.
- CSS polish is not layout redesign.
- No fake claims.
- No deployment.

## 3. Owner feedback

The Project Owner confirmed that Unit 4B2 uses the correct supplied logos, but the logos appeared too small and the surrounding strip felt too empty. This unit corrects size, spacing, and alignment only.

## 4. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 5. CSS sizing changes

The supplied PNG files contain different canvas proportions and substantial transparent margins. The previous shared `max-height: 38px` constraint reduced the visible Meta and Google artwork to a much smaller effective height than the CSS value suggested.

This unit:

- removes the shared maximum-height bottleneck
- increases the individual image widths according to each asset's visible bounds
- uses a controlled logo-item height with hidden overflow to clip transparent canvas space only
- balances Meta, Shopify, Google, and TikTok so no single wordmark dominates
- tightens strip padding and row gaps to reduce unused vertical space
- strengthens alignment between the left label, four-logo row, and `CRO • Analytics` service text
- retains the dark premium background and border-free logo presentation

No image file is cropped, rewritten, recolored, or recompressed.

## 6. Platform and partnership boundary

The platform logos continue to identify systems used in the service context. Their larger presentation does not state or imply partnership, certification, verification, sponsorship, platform endorsement, or client ownership.

Implementation remains free of:

- `trusted by`
- `verified partner`
- `official partner`
- `powered by`
- `Meta Marketing Partner`

No fake metric or performance claim is added.

## 7. Responsive considerations

- `375px` and `390px`: logos retain a two-column layout with bounded widths, controlled item heights, and no horizontal overflow.
- `768px`: the four logos use one balanced row with centered alignment; the service text remains centered below.
- `1024px` and `1440px`: larger per-logo widths, tighter gaps, and reduced strip padding create a stronger template-like horizontal band.
- Transparent canvas margins are clipped inside fixed-height logo items while the visible logo artwork remains intact.
- The `CRO • Analytics` text aligns with the logo row on desktop and remains a separate service label rather than a logo.

## 8. Files changed

Changed:

- `assets/css/style.css`

Added:

- `docs/UNIT_4B3_PLATFORM_LOGO_STRIP_SIZE_AND_PRESENCE_FIX.md`

Preserved:

- `index.html`
- `assets/js/main.js`
- `assets/img/platforms/meta.png`
- `assets/img/platforms/shopify.png`
- `assets/img/platforms/google.png`
- `assets/img/platforms/tiktok.png`
- `assets/img/hero-commerce-intelligence.png`

## 9. Verification record

- Branch verified as `refine/v3-section-review`.
- `index.html`, JavaScript, hero PNG, and all platform PNG hashes remain unchanged from the Unit 4B3 baseline.
- All four logo references remain local under `assets/img/platforms/`.
- No external dependency, asset URL, font, or package is added.
- Partnership wording is absent from implementation.
- The logo strip remains free of pill-button styling and heavy per-logo borders.
- Responsive rules cover mobile, tablet, and desktop layouts without introducing fixed page widths.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 10. Recommended next section review

**Unit 4C — Solutions/Services Section Review**

Goal: review the light Solutions/Services section as the next bounded homepage surface without reopening the approved hero, proof strip, or platform-logo strip.

## 11. Explicitly not next

- HTML or JavaScript changes
- platform-image modification or replacement
- external or downloaded logos
- partnership, certification, sponsorship, or endorsement claims
- new proof values or performance claims
- client logos, testimonials, or case-study publication
- analytics or contact-backend integration
- framework, build-tool, package, or external-font adoption
- broad redesign
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 12. Test record

No automated application tests are required for this bounded CSS and documentation unit. Static CSS, responsive-rule, protected-file hash, local-reference, claim-boundary, dependency, and Git checks are used. Browser and physical-device visual approval remain separate owner-QA steps.
