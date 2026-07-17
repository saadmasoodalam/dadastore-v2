# Unit 3D7 — Raster Hero Visual Integration

## 1. Status

Unit 3D7 replaces the coded SVG hero usage with a local raster hero image and updates only the bounded HTML/CSS integration and unit record. JavaScript, page copy, external dependencies, deployment state, and production infrastructure remain unchanged.

## 2. Purpose

The purpose of this unit is to give the hero the polished generated-image quality requested by the Project Owner: stronger glow, greater three-dimensional depth, a luminous holographic platform, and a cinematic neon atmosphere that is difficult to reproduce with the prior coded SVG.

Core law:

- Raster hero asset is not fake-claim permission.
- Hero image integration is not full-site redesign.
- Visual approval is not production cutover.
- No fake metrics.
- No external dependencies.

## 3. Owner feedback

The Project Owner reported that the Unit 3D6 SVG was structurally close but did not feel as premium or visually impactful as the intended target. The corrected asset therefore prioritizes cinematic rendering, volumetric neon light, reflective depth, dimensional glass panels, and a finished high-impact commerce-platform scene.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_3D6_EXACT_HERO_VISUAL_TARGET_CORRECTION.md`
- requested `_local-reference/v3-hero-final-target.png`
- available `_local-reference/v3-hero-orbit-cart-target.png`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- current Git repository state

The requested `_local-reference/v3-hero-final-target.png` was not present in the repository. The available orbit/cart target was inspected as the composition and lighting reference, but it was not copied because it includes prohibited metrics and product content.

## 5. Branch

- Implementation branch: `design/commerce-intelligence-v3`
- No commit, push, merge, preview deployment, production deployment, or domain action is included.

## 6. Raster asset source

The final project asset was generated with the built-in image-generation tool using the available orbit/cart target as a composition and mood reference only.

The generated prompt required:

- a wide premium ecommerce-agency hero image
- a central glowing cart-mark-inspired symbol
- concentric cyan, pink, and violet rings
- a holographic platform and vertical energy beams
- three abstract glass dashboard cards on each side
- a dark digital environment with perspective grid, particles, and atmospheric haze
- no readable text, numbers, currency, percentages, business metrics, product, testimonials, client content, brand logos, email addresses, rates, or watermark

The final selected image was copied into:

```text
assets/img/hero-commerce-intelligence.png
```

## 7. Image composition

The final `1584 × 993` PNG includes:

- one dominant neon commerce cart at the center
- multiple concentric illuminated rings
- a strong cyan/pink/violet holographic platform
- vertical light columns and volumetric energy
- six surrounding glass interface panels
- abstract line charts, bars, storefront tiles, nodes, and UI blocks
- a dark reflective floor and perspective grid
- dense electric-blue network detail and atmospheric light

It contains no readable claims or fabricated performance data.

## 8. HTML integration

`index.html` now references:

```text
assets/img/hero-commerce-intelligence.png
```

The alt text remains:

> Glowing DaDaStore commerce intelligence platform with neon rings, dashboard cards, and holographic growth system visual

The old SVG is no longer referenced by `index.html`. The SVG file remains in the repository as prior-unit history and is not deleted by this bounded integration unit.

Hero headline, supporting copy, CTA links, proof values, navigation, section IDs, and mailto links remain unchanged.

## 9. CSS integration

The existing `.hero-visual` wrapper already supplies the appropriate dark surface, border, centered violet glow, blue/pink ambient glow, and layered shadow.

The image integration adds:

- inherited rounded corners
- centered object positioning
- full fluid width
- automatic height
- contained rendering without fixed-height clipping

No crop, absolute image width, or overflow-producing rule was added.

## 10. Proof and claim guardrails

The generated image contains no readable text or numerical metric. The forbidden business-claim language is absent from the changed HTML and CSS.

The existing approved proof values remain outside the image:

- `100% Job Success`
- `Top Rated Plus`
- `$100K+ Earned on Upwork`
- `5,000+ Hours`
- `74 Jobs Completed`

No testimonial, client identity, client logo, product claim, fake performance result, unapproved email address, or hourly rate was introduced.

## 11. JavaScript compatibility

`assets/js/main.js` is unchanged. The integration preserves:

- mobile navigation
- smooth internal scrolling
- active navigation state
- reveal behavior
- back-to-top behavior
- current-year behavior
- all existing data hooks and section targets

No runtime behavior, external request, analytics call, dependency, or contact backend was added.

## 12. Responsive considerations

Static source checks cover:

- `375px` and `390px`: the hero remains single-column, the complete image stacks below the copy, CTA buttons remain visible, and the image cannot exceed its fluid wrapper.
- `768px`: the established split hero places the image in a fluid `minmax()` track.
- `1024px`: the image occupies the larger hero visual track without fixed-height clipping.
- `1440px`: the capped page container maintains balance between the hero copy and cinematic image.

The PNG's approximately `16:10` landscape ratio closely matches the target composition. `width: 100%`, `height: auto`, `object-fit: contain`, `object-position: center`, `min-width: 0`, and wrapper overflow containment protect the central mark and side cards from page-level horizontal overflow.

## 13. Files changed

Added:

- `assets/img/hero-commerce-intelligence.png`
- `docs/UNIT_3D7_RASTER_HERO_VISUAL_INTEGRATION.md`

Changed:

- `index.html`
- `assets/css/style.css`

Not changed:

- `assets/js/main.js`
- logo, favicon, or other existing raster assets
- dependency or build configuration
- analytics or contact behavior
- live or deployed repositories

## 14. Verification record

- Current branch is `design/commerce-intelligence-v3`.
- `assets/js/main.js` has no Git diff.
- The PNG exists and decodes as a `1584 × 993`, 24-bit RGB image.
- `index.html` references `assets/img/hero-commerce-intelligence.png`.
- `index.html` no longer references `assets/img/hero-commerce-intelligence.svg`.
- The generated asset was visually inspected after being copied into the repository.
- No external dependency or font was added.
- Forbidden claim language is absent from the changed HTML and CSS.
- Required IDs `services`, `process`, `proof`, `work`, and `contact` remain present and unique.
- All mailto links target `mailto:dadastore.co@gmail.com`.
- `git diff --check` is used for final whitespace verification.

## 15. Known limitations

- The specifically named `_local-reference/v3-hero-final-target.png` was unavailable; the image was generated from the available approved composition reference under the Unit 3D7 claim guardrails.
- Generated imagery is not a pixel-identical copy of the reference.
- Static source and image inspection are not browser, physical-device, or Project Owner visual approval.
- The surrounding panels are intentionally abstract and do not represent live software.
- The 1.9 MB PNG should be assessed during browser/performance QA; optimization should remain a separate bounded unit if required.
- No formal browser, screen-reader, Lighthouse, console, network, social-preview, or performance result is claimed.
- The branch is not merged, deployed, or approved for production.

## 16. Recommended next unit

**Unit 3E2 — Post-Hero Visual Browser QA and Visual Review**

Goal: verify the raster hero and current page across required browsers and viewport widths, including image sharpness, loading, visual balance, side-card visibility, central-mark prominence, overflow, CTA visibility, proof-bar placement, navigation behavior, console/network state, reduced motion, and accessibility foundations before owner approval.

## 17. Explicitly not next

- further broad redesign before browser and owner review
- fake metrics, live dashboard behavior, client claims, testimonials, or product claims
- JavaScript feature expansion
- external fonts, dependencies, frameworks, or libraries
- analytics or contact backend
- case-study publication
- merge to `main`
- preview or production deployment
- DNS, CNAME, or custom-domain changes
- live DaDaStore repository or site modification

## 18. Test record

No automated application test suite is required for this bounded raster-asset integration. Static image validity, HTML reference, forbidden-content, section-ID, mailto, JavaScript-integrity, responsive-rule, dependency, and Git checks are used. Browser visual and performance QA remain deferred to Unit 3E2.
