# Unit 4G — Contact CTA and Footer Review

## 1. Status

Unit 4G is a bounded HTML, CSS, and documentation refinement of the Contact CTA and public footer. It does not modify JavaScript, assets, dependencies, deployment, or production state.

## 2. Purpose

This unit removes implementation-facing wording, aligns footer navigation with the live page structure, and improves the final conversion surface for public visitors.

## 3. Owner review

The Project Owner approved the Contact CTA direction but identified outdated footer links and technical language that did not belong in the visitor-facing experience.

## 4. Branch

- Current branch: `refine/v3-section-review`
- This unit does not include a commit, push, merge, deployment, DNS change, production cutover, or live-site modification.

## 5. Contact CTA changes

The existing dark premium panel, DaDaStore mark, heading, supporting copy, Start a Project button, and View Services button remain intact.

The former response-path line is replaced with a readable, clickable email line:

`Email: dadastore.co@gmail.com`

The target remains `mailto:dadastore.co@gmail.com`.

## 6. Footer brand changes

The footer now uses the approved original horizontal logo:

`assets/img/dadastore-header-logo.png`

CSS preserves the image aspect ratio, keeps overflow visible, and gives the artwork enough width for the cart wheels and wordmark to remain readable.

The public brand description is:

> DaDaStore builds practical growth systems across paid acquisition, creative strategy, ecommerce, tracking, troubleshooting, and conversion improvement.

## 7. Footer navigation changes

The former Company, Solutions, and Resources structure is replaced with an Explore column that follows the live page order:

1. Services
2. Work
3. Process
4. Proof
5. Reviews
6. Contact

Every link points to its existing section ID. The stale About link is removed.

## 8. Footer capability links

The Capabilities column links the following visitor-facing service labels to `#services`:

- Paid Media
- Ecommerce & CRO
- Tracking & Analytics
- Creative Strategy
- Troubleshooting & Integrations
- Marketing Coaching

## 9. Contact-path correction

The Contact panel and footer both expose `dadastore.co@gmail.com` as a clickable mailto target. The footer also includes a visitor-facing Start a Project mailto link.

No response-path or mailto-path implementation labels remain.

## 10. Public-facing copy boundary

Removed from the public page:

- `Response path`
- `Mailto contact path`
- `Static HTML / CSS / JavaScript`

The footer bottom statement is now:

`Commerce Growth. Engineered.`

No booking claims, free-audit language, or technical implementation notes were added.

## 11. Responsive considerations

- At `375px` and `390px`, the Contact panel and footer use their natural single-column flow.
- Below `480px`, the footer bottom row stacks so the copyright and closing tagline remain fully readable.
- At `768px`, footer navigation wraps into two columns and the contact group spans the available row.
- At `1024px` and `1440px`, Explore, Capabilities, and Get in Touch form three balanced columns beside the brand area.
- The approved logo scales without cropping or distortion.
- Email targets wrap safely without horizontal overflow.
- Contact buttons remain full-width within their action column.

## 12. JS compatibility preserved

`assets/js/main.js` remains unchanged.

The existing `#contact`, `#services`, `#work`, `#process`, `#proof`, and `#reviews` targets remain intact, so smooth scrolling, active navigation, mobile navigation, reveal behavior, dynamic year output, and back-to-top behavior keep their existing hooks.

## 13. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4G_CONTACT_CTA_AND_FOOTER_REVIEW.md`

No JavaScript, image, logo, dependency, build, or deployment file was changed.

## 14. Verification record

- Branch is `refine/v3-section-review`.
- `assets/js/main.js` remains unchanged from the start of this unit.
- All image and logo assets remain unchanged.
- `#contact` remains unique.
- Every email link uses `mailto:dadastore.co@gmail.com`.
- Response-path, mailto-path, and static-implementation wording are absent.
- Footer Explore links follow Services, Work, Process, Proof, Reviews, Contact.
- Reviews appears in footer navigation.
- The footer references `assets/img/dadastore-header-logo.png`.
- No duplicate IDs are present.
- Responsive CSS is checked at `375px`, `390px`, `768px`, `1024px`, and `1440px`.
- Local headless-browser review at `1440px` confirms balanced contact and footer columns.
- Local headless-browser review at `390px` confirms clean stacking, readable email and logo treatment, and no visible horizontal overflow.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 15. Recommended next unit

**Unit 4H — Full Responsive Browser QA and Final Refinement Checkpoint**

Goal: perform full-page browser QA across the agreed viewport set and record the final refinement state before any merge or deployment decision.

## 16. Explicitly not next

- contact backend, form, scheduling, or booking integration
- free-audit or guaranteed-response claims
- analytics or tracking additions
- header, hero, Services, Work, Process, Proof, or Reviews redesign
- review or proof-content changes
- new images, logos, fonts, frameworks, libraries, or dependencies
- merge, deployment, DNS, CNAME, production cutover, or live-site replacement
