# Unit 4D-Fix — Navigation Order and Framework Visuals

## 1. Status

Unit 4D-Fix is a bounded HTML, CSS, local SVG asset, and documentation update. It does not change JavaScript, dependencies, deployment configuration, or production state.

## 2. Purpose

This unit aligns the primary navigation with the current page sequence and replaces the six abstract CSS skeleton panels in Work with distinct, evidence-safe framework diagrams.

## 3. Owner feedback

The Project Owner identified two issues after Unit 4D:

- Work became the second main content section, but the navigation still listed Process before Work.
- The framework-card visuals appeared to be empty skeleton placeholders rather than intentional data-system visuals.

## 4. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site change is included.

## 5. Navigation-order correction

The shared primary navigation now follows the page order:

1. Services — `#services`
2. Work — `#work`
3. Process — `#process`
4. Proof — `#proof`
5. Contact — `#contact`

The same markup drives desktop and mobile navigation, so both modes use the same order. Existing classes, data hooks, target IDs, and the Start a Project mailto CTA remain unchanged.

## 6. Framework visual assets created

Six local SVG assets were created:

- `assets/img/frameworks/ecommerce-growth-system.svg`
- `assets/img/frameworks/lead-generation-campaign.svg`
- `assets/img/frameworks/creative-testing-framework.svg`
- `assets/img/frameworks/tracking-repair-sprint.svg`
- `assets/img/frameworks/shopify-cro-path.svg`
- `assets/img/frameworks/paid-media-reset.svg`

They use dark dashboard surfaces with cyan, pink, violet, and blue accents. They contain only abstract system elements and safe generic labels.

## 7. Visual direction per framework

- **Ecommerce Growth System:** storefront journey linking offer, product, and checkout nodes.
- **Lead Generation Campaign:** audience groups feeding a message, qualification, and campaign-routing funnel.
- **Creative Testing Framework:** Test A and Test B creative panels beside a hook, angle, offer, and creative matrix.
- **Tracking Repair Sprint:** diagnostics and a broken-to-connected Pixel/Event signal map.
- **Shopify CRO Path:** product, offer, cart, and checkout panels connected by an optimization journey.
- **Paid Media Reset:** campaign allocation bars, audience branches, and an optimization panel.

## 8. Evidence and claim boundary

The visuals are generic framework illustrations. They are not client dashboards, completed projects, performance evidence, or platform-partnership claims.

The SVGs contain no:

- client or product-brand names
- client or platform logos
- testimonials
- dollar values
- percentages
- revenue, ROAS, CPA, sales, order, or ad-spend claims

Every Work card retains the visible status `Framework / Coming Soon`.

## 9. HTML integration

Each old three-element CSS skeleton is removed and replaced with a local `<img>` reference inside the existing `.framework-visual` wrapper. Each image has the required meaningful alt text, and every SVG is paired with its matching card.

The current Work heading, supporting copy, CTA, categories, titles, descriptions, evidence boundary, and section ID remain unchanged.

## 10. CSS integration

The shared visual wrapper now:

- uses a consistent `5 / 2` aspect ratio
- contains overflow within the existing rounded panel
- gives every SVG a compatible dark surface
- scales images to `width: 100%`
- preserves the complete SVG with `object-fit: contain`

Obsolete placeholder `<i>` styling and per-placeholder background variants are removed.

## 11. JavaScript compatibility

`assets/js/main.js` remains unchanged.

Its existing active-navigation observer works by matching link targets to observed section IDs, so the reordered navigation is compatible without logic changes. The existing mobile-menu, smooth-scroll, reveal, and active-state hooks remain intact.

## 12. Responsive considerations

- The shared navigation order is consistent at desktop and mobile widths.
- SVGs use a viewBox and scale within a consistent aspect-ratio wrapper.
- Work cards retain the existing one-, two-, and three-column responsive layout.
- No fixed image width, external asset request, or horizontal scrolling is introduced.
- Visual content is kept inside the SVG safe area to avoid clipping.

Static and browser checks cover `375px`, `390px`, `768px`, `1024px`, and `1440px`.

## 13. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- the six SVG files under `assets/img/frameworks/`
- `docs/UNIT_4D_FIX_NAVIGATION_ORDER_AND_FRAMEWORK_VISUALS.md`

Not changed:

- `assets/js/main.js`
- existing image assets
- dependencies or build configuration

## 14. Verification record

- Branch is `refine/v3-section-review`.
- Desktop and mobile navigation order is Services, Work, Process, Proof, Contact.
- Each required target ID exists exactly once.
- JavaScript is unchanged.
- All six SVG files parse as valid XML.
- All six framework cards reference their matching SVG.
- Old skeleton `<i>` markup and its CSS are absent.
- All six cards retain `Framework / Coming Soon`.
- Forbidden claims are absent from the HTML and SVGs.
- Mailto links remain `mailto:dadastore.co@gmail.com`.
- Responsive layout and horizontal overflow are checked at the required widths.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 15. Recommended next section review

**Unit 4E — Process Section Review**

Goal: evaluate how Signal / Strategy / System / Scale should inform the existing Process section without duplicating the page structure or adding unapproved claims.

## 16. Explicitly not next

- completed case studies without approved evidence
- client names, logos, private data, testimonials, or unapproved results
- Process implementation inside Unit 4D-Fix
- JavaScript feature changes
- hero, Services, Proof, Contact, header, or footer redesign
- new external images, fonts, libraries, or dependencies
- analytics or contact-backend integration
- merge, deployment, DNS, CNAME, or production cutover
- modification of the live DaDaStore repository
