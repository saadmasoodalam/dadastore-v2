# Unit 3C — V3 HTML Structure Implementation

## 1. Status

Unit 3C implements the approved V3 Commerce Intelligence homepage structure in `index.html` and records the result. This is an HTML-and-docs unit only. It does not redesign CSS, change JavaScript, add assets, deploy the site, or authorize production cutover.

## 2. Purpose

Unit 3C converts the owner-approved Unit 3B structure and copy/proof decisions into semantic homepage markup while preserving the static architecture, approved brand and contact paths, existing interaction hooks, and V2 rollback history.

Core law:

- HTML structure is not CSS redesign.
- Approved proof is not permission to invent new metrics.
- Upwork proof is not permission to expose private client details.
- Implementation is not deployment.
- V3 branch work is not production cutover.

## 3. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_1G_V2_FOUNDATION_COMPLETION_CHECKPOINT.md`
- `docs/UNIT_2B_APPROVED_CONTENT_AND_CONTACT_IMPLEMENTATION.md`
- `docs/UNIT_3A_COMMERCE_INTELLIGENCE_DESIGN_DIRECTION_AND_PROOF_BOUNDARY.md`
- `docs/UNIT_3B_COMMERCE_INTELLIGENCE_HOMEPAGE_WIREFRAME_AND_CONTENT_MAP.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- Project Owner decisions supplied in the Unit 3C task
- current Git repository state

All authority documents and current HTML were read completely. JavaScript selectors and hooks were inspected before the markup change. Repository source and the explicit Unit 3C Project Owner decisions are the implementation authority.

## 4. Branch

- Implementation branch: `design/commerce-intelligence-v3`
- `main` is not modified by this unit and remains the stable V2 history/fallback.
- No branch, commit, push, deployment, DNS, custom-domain, or production action is included.

## 5. Approved owner decisions applied

1. The V3 Commerce Intelligence homepage concept is used.
2. The approved hero headline and supporting copy are implemented exactly.
3. The approved real Upwork proof labels are published in the HTML.
4. Upwork is named explicitly.
5. The `$55/hr` profile rate is not shown.
6. No review excerpt is used.
7. No portfolio screenshot is used.
8. The approved six-card services model is implemented.
9. Work Option A remains three `Framework / Coming soon` placeholders.
10. Target-market wording uses ecommerce and service brands.
11. Public project CTAs remain `mailto:dadastore.co@gmail.com`.
12. No client identity, logo, testimonial, award, private message, or unapproved performance result is introduced.

## 6. HTML sections implemented

The homepage now contains:

1. floating header with Services, Process, Proof, Work, Contact, and Start a Project controls
2. V3 Commerce Intelligence hero
3. six-card Growth Systems / Services section (`#services`)
4. Commerce Intelligence method section (`#commerce-intelligence`) with Signal, Strategy, System, and Scale blocks
5. six-step Operating Rhythm / Process section (`#process`)
6. combined Upwork proof narrative and approved proof-card section (`#proof`)
7. preserved Work Option A placeholder section (`#work`)
8. approved mailto Contact CTA (`#contact`)
9. footer with approved identity, positioning summary, and current-year hook

The separate proof-strip and proof-narrative concepts are consolidated into one semantic `#proof` section to avoid duplicate IDs and repetitive proof surfaces.

## 7. Proof values used

Only the Project Owner-approved public labels are included:

- `100% Job Success`
- `Top Rated Plus`
- `$100K+ Earned on Upwork`
- `5,000+ Hours`
- `74 Jobs Completed`

The values are explicitly presented as Upwork marketplace proof. They are not described as client revenue, campaign performance, ad spend, or guaranteed outcomes.

## 8. Excluded claims

The homepage does not include:

- the profile rate
- review excerpts
- profile, review, or portfolio screenshots
- client names, private messages, or private details
- client logos
- testimonials
- awards or invented certifications
- fabricated revenue or ad-spend figures
- ROAS, CPA, satisfaction, conversion-lift, or named case-study results
- template/mockup metrics or identities
- factual claims inside the Work placeholders

## 9. Navigation map

| Control | Target | State |
| --- | --- | --- |
| Logo / home | `#top` | Preserved |
| Services | `#services` | Implemented |
| Process | `#process` | Implemented |
| Proof | `#proof` | Implemented; active-state observation deferred to Unit 3E |
| Work | `#work` | Implemented |
| Contact | `#contact` | Implemented |
| Header desktop Start a Project | `mailto:dadastore.co@gmail.com` | Preserved |
| Header mobile Start a Project | `mailto:dadastore.co@gmail.com` | Preserved |
| Hero Start a Project | `mailto:dadastore.co@gmail.com` | Preserved |
| Hero View Growth Systems | `#services` | Implemented |
| Contact Start a Project | `mailto:dadastore.co@gmail.com` | Preserved |

All required section IDs exist and are unique. The new `#commerce-intelligence` section is not a required header target.

## 10. Contact state

- Official public email: `dadastore.co@gmail.com`
- Contact method: mailto only
- CTA target: `mailto:dadastore.co@gmail.com`
- Visible contact note: `Response path: dadastore.co@gmail.com`
- No form, scheduler, backend, API submission, persistence, or contact JavaScript is added.

## 11. JavaScript compatibility preservation

The markup preserves the selectors and hooks used by `assets/js/main.js`:

- `[data-header]`
- `[data-nav]`
- `[data-nav-toggle]`
- `aria-expanded="false"` on the mobile toggle
- internal `href="#..."` links for smooth scrolling
- `.site-nav` and its internal navigation links
- `.reveal` elements
- `[data-back-to-top]`
- `[data-year]`
- `#services`, `#process`, `#work`, and `#contact`

`#proof` works with the current generic internal hash-scrolling handler. It is not yet included in the JavaScript `sections` NodeList used for active navigation. Adding that active-state compatibility belongs to Unit 3E; JavaScript is intentionally unchanged here.

## 12. Accessibility foundations

The implementation preserves or provides:

- semantic `header`, `nav`, `main`, `section`, `article`, `ol`, and `footer` elements
- one page-level `h1` followed by section `h2` and card/step `h3` headings where appropriate
- link semantics for navigation and mailto actions
- button semantics for the mobile toggle and back-to-top control
- meaningful logo alt text
- primary-navigation and control labels
- `aria-expanded` on the mobile-menu toggle
- a descriptive label for the abstract hero signal composition
- a descriptive label for the verified Upwork proof-card group

No WCAG or full accessibility-compliance claim is made. Existing mobile-menu focus-management and no-JavaScript limitations remain outside this HTML-only unit.

## 13. Files changed

Changed:

- `index.html`

Added:

- `docs/UNIT_3C_V3_HTML_STRUCTURE_IMPLEMENTATION.md`

Not changed:

- `assets/css/style.css`
- `assets/js/main.js`
- brand, favicon, Open Graph, or other assets
- `_local-reference/` private planning sources

## 14. Verification record

- Current branch: `design/commerce-intelligence-v3`.
- Required IDs `services`, `process`, `proof`, `work`, and `contact` are present.
- Additional IDs `top` and `commerce-intelligence` are present.
- No duplicate IDs were found.
- All four mailto links target `mailto:dadastore.co@gmail.com`.
- Forbidden-claim search in `index.html` found no `$50M`, `120M`, `98%`, `ROAS`, `revenue generated`, `ad spend managed`, fake client-logo, or testimonial content.
- Existing favicon, logo, Open Graph image, CSS, and JavaScript paths remain local and unchanged.
- CSS has no tracked diff.
- JavaScript has no tracked diff.
- `git diff --check` passed.

## 15. Known limitations

- Unit 3C changes structure before the dedicated V3 CSS unit; shared V2 classes provide only an interim presentation.
- New structural classes and the six-card/proof layouts do not yet have their final V3 visual treatment.
- The Proof navigation link scrolls correctly, but Proof cannot receive the current active-nav state until the fixed JavaScript selector is updated in Unit 3E.
- Existing mobile-menu focus-management gaps remain.
- JavaScript smooth scrolling still does not explicitly honor reduced-motion preference.
- No-JavaScript mobile navigation and reveal visibility limitations remain.
- No browser/device QA, accessibility audit, Lighthouse record, or social-preview validation is claimed for the V3 markup.
- Marketplace values can change and should be revalidated before preview approval or public release.
- This branch is not deployed and has no production approval.

## 16. Recommended next unit

**Unit 3D — V3 Visual System Implementation**

Goal: implement the approved Commerce Intelligence visual direction and responsive layout in `assets/css/style.css` only, using the Unit 3C semantic structure while preserving JavaScript behavior and all proof/content boundaries.

## 17. Explicitly not next

- JavaScript changes before Unit 3E
- analytics
- contact form or backend
- review excerpts
- portfolio screenshots
- client logos or testimonials
- factual case studies or new performance metrics
- external animation library
- framework, build-tool, or package-manager adoption
- deployment or replacement of the current preview
- production cutover
- DNS or custom-domain changes
- live DaDaStore repository/site modification
- copying or committing `_local-reference/` files

## 18. Test record

No automated tests are required for this bounded HTML-and-docs unit. Static source and Git verification are used instead.
