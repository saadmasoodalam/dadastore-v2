# Unit 4A2 — Hero Left Copy and Layout Alignment

## 1. Status

Unit 4A2 is a bounded HTML, CSS, and documentation refinement of the V3 hero's left column. It does not change JavaScript, the approved hero raster, proof values, dependencies, deployment state, or any other homepage section.

## 2. Purpose

The purpose of this unit is to align the hero's copy hierarchy and left-column composition more closely with the approved template direction while retaining DaDaStore's real-proof and static-site boundaries.

Core law:

- Hero copy alignment is not fake claim permission.
- Template reference is not production cutover.
- Copy refinement is not full-site redesign.
- No fake performance claims.

## 3. Owner feedback

The Project Owner approved the current right-side raster hero but reported that the left side remained less focused than the desired template. The requested correction is a sharper SaaS/agency headline, more compact copy positioning, and three concise value cards beneath the CTA row.

## 4. Template reference used

`_local-reference/v3-template-reference-02.png` was inspected for:

- three-line headline rhythm
- restrained pink/cyan gradient emphasis
- compact body-copy width
- paired CTA presentation
- three small value cards beneath the actions
- balanced left-copy/right-visual proportions

The reference's unapproved metrics, rate, client material, testimonials, logos, contact choices, and business claims were not copied.

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, preview deployment, production deployment, DNS action, or live-site modification is included.

## 6. Hero copy changes

The hero eyebrow is now:

> Ecommerce Intelligence Platform

The headline is now:

> Turn Data Into  
> Demand. Scale  
> With Intelligence.

Only `Scale` and `Intelligence.` use the established gradient treatment.

The supporting copy is now:

> DaDaStore helps ecommerce and service brands improve paid acquisition, conversion flow, tracking, and profitable scaling through hands-on performance marketing systems backed by real Upwork-proven execution.

The existing actions remain:

- `Start a Project` → `mailto:dadastore.co@gmail.com`
- `See How It Works` → `#process`

## 7. Hero value-card changes

The former platform credibility line beneath the CTA row is replaced by three compact positioning cards:

- `Data-Driven Decisions`
- `Performance Marketing`
- `Scalable Growth Systems`

The cards use local HTML and CSS only. They are positioning labels, not metrics, testimonials, client results, or product-performance claims.

## 8. Proof guardrails preserved

The verified proof bar remains below the hero visual and is not changed by this unit:

- `$100K+ Earned on Upwork`
- `74 Jobs Completed`
- `5,000+ Hours`
- `100% Job Success`
- `Top Rated Plus`

The unit does not add ROAS, CPA, generated-revenue, managed-ad-spend, order, sales, hourly-rate, testimonial, client-logo, or percentage-growth claims.

The approved `assets/img/hero-commerce-intelligence.png` raster remains unchanged.

## 9. Responsive considerations

The left column remains mobile-first and bounded by the existing container:

- `375px` and `390px`: headline lines may wrap safely without clipping; CTA buttons retain the existing full-width narrow-mobile behavior; value cards stack in one column.
- `768px`: the hero uses a compact split layout, the value cards remain stacked to protect readable card width, and the image remains fluid.
- `1024px`: the refined column ratio gives the approved raster more visual weight while value cards move into three columns.
- `1440px`: headline width, copy width, CTA row, and three-card row remain capped so the composition stays close to the reference.

All card tracks use `minmax(0, 1fr)` or a single fluid column. The hero copy and grid retain `min-width: 0`, and the image retains fluid width and automatic height. No fixed-height crop or page-level horizontal overflow rule is introduced.

## 10. JS compatibility preserved

`assets/js/main.js` is unchanged. This unit preserves all hooks and classes used by the current runtime, including:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `.reveal`
- `[data-back-to-top]`
- `[data-year]`
- the observed section IDs

Navigation, smooth scrolling, active navigation, reveal behavior, back-to-top behavior, and current-year output remain compatible.

## 11. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4A2_HERO_LEFT_COPY_AND_LAYOUT_ALIGNMENT.md`

Not changed:

- `assets/js/main.js`
- `assets/img/hero-commerce-intelligence.png`
- logo, favicon, or any other image
- dependency, build, analytics, contact-backend, or deployment configuration

## 12. Verification record

- Current branch is verified as `refine/v3-section-review`.
- The hero PNG and JavaScript SHA-256 hashes are compared with their pre-unit values.
- The requested headline text is present in the intended three-line structure.
- Gradient emphasis is limited to `Scale` and `Intelligence.`.
- All three approved hero value cards are present.
- The existing CTA targets remain unchanged.
- All five approved proof-bar values remain present.
- All mailto links continue to use `mailto:dadastore.co@gmail.com`.
- No external font, library, framework, package, or runtime dependency is added.
- Forbidden-claim checks cover the changed hero content and CSS.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 13. Recommended next section review

**Unit 4B — Proof Bar and Platform Strip Review**

Goal: review the verified proof bar and platform strip as the next bounded homepage surfaces without reopening the approved hero image or the Unit 4A2 copy direction.

## 14. Explicitly not next

- further hero-image generation or editing
- global logo or brand-name changes
- public brand switch to DaDaStore.co
- fake metrics, client claims, testimonials, or logos
- broad homepage redesign
- JavaScript changes
- external fonts or dependencies
- analytics or contact backend
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 15. Test record

No automated application test suite is required for this bounded HTML, CSS, and documentation refinement. Static content, responsive-rule, protected-file hash, proof-value, mailto, dependency, and Git checks are used. Browser and physical-device visual review remain separate owner-QA steps.
