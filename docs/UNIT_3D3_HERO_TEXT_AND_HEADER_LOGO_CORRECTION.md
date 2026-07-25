# Unit 3D3 — Hero Text and Header Logo Correction

## 1. Status

Unit 3D3 applies the Project Owner’s bounded hero-text and header-logo corrections to the V3 design branch. This is an HTML, CSS, and documentation correction only. It does not expand the redesign, change JavaScript or image assets, add dependencies, deploy, merge, or authorize production cutover.

## 2. Purpose

The purpose of this unit is to make the approved hero headline feel intentionally composed and to restore the complete DaDaStore cart-and-wheel identity in the floating header.

Core law:

- Correction pass is not redesign expansion.
- Logo correction is not brand replacement.
- Text balance is not copy rewrite.
- Visual fix is not deployment.
- Proof preservation is not permission for new claims.

## 3. Owner feedback

The Project Owner confirmed that Unit 3D2 moved the page closer to the uploaded template direction but identified two visible issues:

- the hero headline remained too heavy and awkwardly stacked
- the navigation logo lost the cart/wheel detail and did not read as the complete DaDaStore identity

Unit 3D3 addresses only these issues plus the minimum supporting spacing and responsive safeguards.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_3D2_TEMPLATE_ALIGNED_V3_REDESIGN_PASS.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/dadastore-logo.png`
- `assets/img/dadastore-mark.png`
- current Git repository state

The current Unit 3D2 implementation and both approved logo assets were inspected. JavaScript hooks were checked only for compatibility and were not changed.

## 5. Branch

- Implementation branch: `design/commerce-intelligence-v3`
- `main` remains the stable V2 fallback.
- No branch creation, merge, deployment, DNS, CNAME, custom-domain, or production action is included.

## 6. Header logo correction

The approved horizontal raster logo contains the cart body and DaDaStore wordmark, but its source artwork does not include the separate wheel detail visible in the approved mark asset. Scaling, `object-fit`, or wrapper changes could not restore pixels absent from that source.

The permitted fallback was therefore used in the header:

- `assets/img/dadastore-mark.png` supplies the complete approved cart-and-wheel mark
- an adjacent styled `DaDaStore` text label preserves the horizontal brand presentation
- the link retains `aria-label="DaDaStore home"`; the composed visual pieces are hidden from redundant assistive-technology announcement
- explicit width, height, flex-basis, `object-fit: contain`, and centered object positioning protect the mark from cropping or compression
- the dark capsule background preserves contrast
- mobile and desktop sizes keep the mark legible without allowing it to dominate the header

The existing horizontal logo remains unchanged and continues to be used in the footer.

## 7. Hero text correction

The approved headline wording remains exactly:

> Commerce growth systems built for performance, creative testing, and Shopify scale.

The HTML now groups it into four intentional editorial lines:

1. Commerce growth systems
2. built for performance,
3. creative testing,
4. and Shopify scale.

`performance` and `creative testing` retain the approved gradient emphasis. Desktop/tablet type scales were reduced, line-height was opened slightly, and each line uses a dedicated span so the hierarchy is intentional rather than dependent on accidental wrapping.

Supporting copy spacing was tightened from the headline while its line-height was increased for readability. CTA and credibility-microline spacing were also tightened so the left hero column reads as one connected composition.

## 8. Responsive considerations

- `375px` and `390px`: mark size reduces to `40px`, brand text remains compact, hero type stays fluid between `2.3rem` and `2.65rem`, and CTAs remain full width.
- `768px`: hero type is capped at `3.2rem` to prevent the four-line composition from overpowering its split layout.
- `1024px`: the text/visual grid balance shifts slightly toward the visual panel while hero type uses a lower `2.75rem`–`3.5rem` range.
- `1440px`: headline remains capped at `3.5rem`, preserving editorial presence without returning to Unit 3D2’s oversized dominance.
- Header mark, label, navigation, and CTA retain bounded flex sizes and do not introduce fixed page width or horizontal overflow.

Browser QA remains required in Unit 3E2; this unit records static responsive safeguards only.

## 9. Proof/claims preserved

The approved proof values remain unchanged:

- `100% Job Success`
- `Top Rated Plus`
- `$100K+ Earned on Upwork`
- `5,000+ Hours`
- `74 Jobs Completed`

No `$55/hr`, `$50M+`, `120M+`, `98%`, revenue-generated, ad-spend-managed, ROAS, CPA, testimonial, client-logo, private-client, or Upwork-screenshot content was added.

## 10. JavaScript compatibility preserved

`assets/js/main.js` is unchanged. The correction preserves:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `.site-nav` and mobile open state
- `.nav-toggle` and `aria-expanded`
- internal hash links and active-navigation IDs
- `.reveal`
- `[data-back-to-top]`
- `[data-year]`

The header logo remains the same `#top` link, so smooth scrolling and navigation behavior are unaffected.

## 11. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_3D3_HERO_TEXT_AND_HEADER_LOGO_CORRECTION.md`

Not changed:

- `assets/js/main.js`
- `assets/img/dadastore-logo.png`
- `assets/img/dadastore-mark.png`
- favicon, Open Graph, or other assets
- `_local-reference/` private planning sources

## 12. Verification record

- Current branch is `design/commerce-intelligence-v3`.
- `assets/js/main.js` matches its HEAD object exactly.
- No file under `assets/img/` has a tracked diff.
- No external dependency, font, image, library, analytics, or contact backend was added.
- The four headline line groups preserve every word of the approved headline.
- The header uses the complete approved mark asset and a text label; explicit sizing and object-fit rules are present.
- All five approved proof values remain present.
- Forbidden-claim search found no `$50M`, `120M`, `98%`, `ROAS`, `CPA`, `revenue generated`, or `ad spend managed` implementation content.
- Required IDs `services`, `process`, `proof`, `work`, and `contact` remain present and unique.
- All four public mailto links remain `mailto:dadastore.co@gmail.com`.
- CSS braces and major HTML structural tag counts are balanced.
- `git diff --check` passed.

## 13. Known limitations

- Static source inspection is not browser/device or Project Owner visual approval.
- The composed header wordmark uses system typography rather than modifying or recreating the approved raster logo file.
- Exact raster sharpness varies with device pixel ratio and browser scaling and must be checked in Unit 3E2.
- Final line wrapping must still be verified at all required viewport widths and browser zoom levels.
- Marketplace values require revalidation before public preview approval because they can change.
- No formal accessibility, screen-reader, Lighthouse, or social-preview result is claimed.
- The branch is not deployed, merged, or approved for production.

## 14. Recommended next unit

**Unit 3E2 — Post-Redesign Interaction and Browser QA Pass**

Goal: verify the corrected logo and hero composition alongside all preserved interactions at required desktop/mobile widths, including console, network, overflow, reduced-motion, and accessibility-foundation checks.

## 15. Explicitly not next

- broader hero or page redesign
- logo-asset editing or replacement
- JavaScript feature expansion
- new images, screenshots, external fonts, dependencies, frameworks, or animation libraries
- new proof claims, testimonials, reviews, client names, or client logos
- analytics or contact backend
- merging without Project Owner approval
- deployment or production cutover
- DNS, CNAME, or custom-domain changes
- live DaDaStore repository/site modification

## 16. Test record

No automated test suite is required for this bounded HTML/CSS/docs correction. Static structure, selector, asset-integrity, content-boundary, responsive-rule, and Git verification are used. Browser QA remains deferred to Unit 3E2.
