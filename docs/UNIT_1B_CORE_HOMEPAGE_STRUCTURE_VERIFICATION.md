# Unit 1B — Core Homepage Structure Verification

## Status

Unit 1B formally verifies the structure of the existing DaDaStore V2 homepage. This is a docs-only, verification-only unit.

## Purpose

The homepage already exists. This unit records and verifies its current structure against Unit 1A rather than rebuilding, redesigning, or changing it.

## Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_1A_V2_PROJECT_BOUNDARY_AND_ARCHITECTURE.md`
- `index.html`
- `README.md`

All four authority sources were read completely. The repository is the source of truth for this verification.

## Core boundary

- Structure verification is not redesign.
- Content presence is not content approval.
- Placeholder work is not a published case study.

## Document structure

Verified document order and presence:

1. HTML5 document doctype: `<!DOCTYPE html>`
2. HTML root with language declaration: `<html lang="en">`
3. `<head>`
4. `<body>`
5. `<header>`
6. `<main id="top">`
7. `<footer>`
8. back-to-top control
9. script inclusion: `assets/js/main.js`

The principal page landmarks are correctly nested within the body. No evidence-based document-order or landmark anomaly was found.

## Head and metadata structure

The head structurally contains:

- UTF-8 charset
- responsive viewport
- document title
- meta description
- theme color
- Open Graph title
- Open Graph description
- Open Graph type
- Open Graph URL
- Open Graph site name
- stylesheet inclusion

An Open Graph image is absent. This unit does not approve or validate the accuracy of the marketing language, URL, or other metadata values.

## Header structure

The header contains:

- a DaDaStore site-identity link targeting `#top`
- a primary navigation element
- navigation links for Services, Process, Work, and Contact
- a desktop “Start a Project” CTA
- a mobile-menu button with an accessible label and `aria-expanded`
- a mobile “Start a Project” CTA within the navigation structure

All four primary internal navigation references target real section IDs. The mobile and desktop link sets share the same primary navigation structure; CSS controls their presentation.

## Hero structure

The hero contains:

- one primary `h1` heading
- a supporting paragraph
- a “Start a Project” CTA targeting `#contact`
- a “View Services” CTA targeting `#services`
- a credibility/expertise line
- a labeled visual/metrics panel containing growth-system, creative, and media elements

Copy quality and claim accuracy are not assessed here.

## Expertise strip structure

The expertise strip exists and contains these exact implemented items:

1. Meta Ads
2. Google Ads
3. TikTok Ads
4. Shopify
5. CRO
6. Analytics
7. Creative Strategy

## Services structure

The Services section exists at `id="services"` and contains a section label, an introductory `h2`, and four service cards.

Exact card titles:

1. Paid Advertising
2. Shopify Growth
3. Creative Strategy
4. Tracking & Analytics

Each card contains an identifying title, an outcome/supporting line, and main descriptive copy.

## Process structure

The Process section exists at `id="process"` and contains a section label, an introductory `h2`, and six ordered process steps.

Exact step names in order:

1. Audit
2. Strategy
3. Build
4. Launch
5. Optimize
6. Scale

Each step includes supporting copy.

## Why DaDaStore structure

A dedicated Why DaDaStore section exists. It contains the “Why DaDaStore” positioning label, an `h2` heading, and supporting positioning copy. The section has no navigation ID, and none is required by the current navigation map. Factual or marketing approval is outside this unit.

## Work structure

The Work section exists at `id="work"` and contains a section label, an introductory `h2`, and three work cards.

Exact card titles:

1. Ecommerce Growth System
2. Lead Generation Campaign
3. Creative Testing Framework

Every card is labeled `Framework / Coming soon`. The framework and coming-soon state is therefore explicit. No client name or numerical client-performance metric is presented as a factual result.

## Contact structure

The Contact section exists at `id="contact"` and contains:

- the “Contact” section label
- the primary contact heading “Ready to grow?”
- supporting copy
- a “Start a Project” CTA

The exact current target is `mailto:hello@dadastore.co`.

## Footer structure

The footer contains:

- the linked DaDaStore identity “DaDaStore.co” targeting `#top`
- the positioning summary “Performance Marketing / Creative Strategy / Shopify Growth”
- a copyright line
- an empty `span` carrying the `data-year` hook for current-year output

The year target is a data attribute, not an HTML `id`. The expected structural hook is present. Its script behavior is reserved for Unit 1D.

## Section ID and navigation map

| Navigation source | Target ID | Section exists |
| --- | --- | --- |
| Services | `#services` | Yes |
| Process | `#process` | Yes |
| Work | `#work` | Yes |
| Contact | `#contact` | Yes |
| View Services CTA | `#services` | Yes |

The hero “Start a Project” CTA also resolves to `#contact`, and the header/footer identity links resolve to `#top` on `main`.

## Semantic structure assessment

Evidence-based semantic elements include:

- `header` for the site header
- `nav` for primary navigation
- `main` for primary page content
- `section` for principal homepage sections
- `footer` for site-footer content
- `h1`, `h2`, and `h3` headings
- an ordered list for process steps
- `article` elements for service and work cards
- anchor links for navigation and CTAs
- button elements for the mobile-menu and back-to-top controls

This semantic foundation does not establish full accessibility compliance.

## Content-boundary verification

- Existing homepage copy remains prototype content.
- Work cards remain explicitly labeled placeholders.
- No case-study metric may be treated as an approved claim.
- Contact information still requires Project Owner verification before production.
- Content presence does not constitute content or factual approval.

## Structural findings

### Verified

- The HTML document and primary landmarks are present in coherent order.
- All principal homepage sections required by Unit 1A are present.
- Every primary navigation target resolves to an existing section ID.
- Service, process, and work counts and titles match the current HTML.
- Work placeholders are explicitly distinguished from published case studies.
- Required metadata fields are structurally present except for the already-recorded Open Graph image gap.

### Gap

- Open Graph image metadata is absent, as already recorded in Unit 1A. Integration is not part of Unit 1B.

### Out of scope for Unit 1B

- visual polish and visual-system QA
- responsive behavior and device QA
- JavaScript behavior and interaction QA
- full accessibility compliance
- performance measurement
- marketing and contact-content accuracy
- production readiness

## Current capabilities verified

Unit 1B verifies that the source contains a complete single-page homepage structure: header and navigation, hero, expertise strip, services, process, Why DaDaStore positioning, placeholder work, contact CTA, footer, metadata, and valid internal targets for the current navigation map.

## Current boundaries

This unit does not verify visual QA, responsive QA, interaction behavior, accessibility compliance, performance, content accuracy, or production readiness. It does not approve brand assets, claims, contact details, deployment, or production cutover.

## Acceptance conditions

Unit 1B is complete because:

- all principal homepage sections are structurally verified
- navigation targets are mapped to real section IDs
- service, process, and work card counts and titles are recorded
- placeholder boundaries are verified
- metadata structural presence and the absent Open Graph image are recorded
- no implementation file was changed

## Recommended next unit

**Unit 1C — Visual System and Responsive Layout Verification**

The structure is now formally recorded. The next bounded unit should verify the existing visual system and responsive layout without redesigning them.

## Explicitly not next

- logo integration
- brand asset changes
- JavaScript refactoring
- form backend
- analytics integration
- case-study publication
- broad redesign
- deployment
- production cutover

## Test record

No tests run, since this was docs-only.
