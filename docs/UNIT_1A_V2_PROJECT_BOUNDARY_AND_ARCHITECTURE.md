# Unit 1A — DaDaStore V2 Project Boundary and Architecture Plan

## Status

This document is the formal Unit 1A architecture and boundary plan for the existing DaDaStore V2 static prototype. It documents the repository as it currently exists; it does not change or approve implementation, deployment, or production cutover.

## Project identity

DaDaStore V2 is a static marketing-agency website for:

- performance marketing
- creative strategy
- Shopify growth
- conversion rate optimization (CRO)
- analytics

## Purpose

V2 replaces the legacy WordPress-derived site with a clean static implementation. The current live `dadastore.co` site must remain unchanged and available until an explicit release unit receives Project Owner approval for production cutover.

## Core project law

- Design is not implementation.
- Implementation is not deployment.
- Deployment to V2 preview is not production cutover.
- Production cutover is not approval to remove the legacy fallback immediately.
- Content presence is not content verification.
- Placeholder work is not a published case study.

## Current architecture

The current repository architecture is:

```text
GENERIC_CODING_PROJECT_WORKFLOW_RULES.md
README.md
index.html
assets/
  css/
    style.css
  js/
    main.js
docs/
  UNIT_1A_V2_PROJECT_BOUNDARY_AND_ARCHITECTURE.md
```

The application is a single-page static site composed of semantic HTML, plain CSS, and vanilla JavaScript. It has:

- no framework
- no build tool
- no package manager
- no WordPress runtime
- no PHP
- no database
- no external UI library
- no required external runtime dependency

`index.html` is the page and content entry point. `assets/css/style.css` owns the visual system, responsive layout, and interaction states. `assets/js/main.js` owns the small browser-interaction layer. `README.md` describes local use and customization. `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md` is the workflow authority. `docs/` contains formal project-unit documentation.

## Current implemented capabilities

The repository currently contains:

- a fixed/floating desktop header
- a floating desktop navigation pill
- a separate project CTA
- mobile navigation
- a hero section
- an expertise strip
- a services section
- a process section
- a Why DaDaStore section
- work/case-study placeholders
- a contact CTA
- a footer with current-year output
- native CSS smooth scrolling
- JavaScript internal-link scroll behavior
- an observed active navigation state
- scroll reveal behavior
- back-to-top visibility and action
- mobile-first responsive behavior with defined breakpoints
- reduced-motion handling
- an SEO title and meta description
- Open Graph title, description, type, URL, and site name

These capabilities are functionally present in source. Their presence is not formal browser, accessibility, responsive, metadata, or production verification.

## Visual system boundary

The approved current visual direction is:

- background: `#050505`
- surface: `#111111`
- primary text: `#ffffff`
- muted text: `#a3a3a3`
- cyan accent: `#00fff0`
- pink accent: `#ff2b8a`
- system-first typography with no external font dependency
- large display headings
- a premium dark growth-agency style
- restrained glow and gradient treatments

Future visual changes must preserve this established direction unless the Project Owner explicitly approves a redesign.

## Live-site protection boundary

- The current production site is already live at `dadastore.co`.
- The live production repository and site must not be modified during V2 implementation units.
- V2 remains isolated until explicit preview and release units.
- Production DNS and custom-domain changes are out of scope before release approval.
- The current live site must remain available because the official domain has business and verification significance.

This is an operational protection requirement only. It makes no claim about external platform rules.

## Brand asset boundary

- Final brand and logo work is approved separately from website implementation.
- Unit 1E may integrate approved assets only.
- Unit 1E must not redesign the logo.
- The temporary text/CSS identity remains until approved asset files are provided.
- Favicon and Open Graph image integration belong to brand asset integration and QA scope.

## Content boundary

- Existing homepage copy is prototype content.
- Project Owner review is required before production.
- The “Framework / Coming soon” work cards are placeholders.
- Placeholders must not be presented as factual client results.
- No case-study metric or claim may be invented.
- Contact details must be verified before release.

## Interaction boundary

Current JavaScript is limited to:

- mobile navigation state
- body scroll lock
- internal section scrolling
- active navigation observation
- back-to-top visibility and action
- scroll reveal behavior
- current-year footer output

No analytics integration is formally approved. No form backend or persistence exists. No external action or execution exists beyond normal browser navigation and `mailto:` behavior.

## Contact boundary

Current contact behavior is `mailto:hello@dadastore.co`. A `mailto:` link is not a contact backend. Form integration requires a separate design or decision unit, and no form service may be added implicitly during unrelated work.

## SEO and metadata boundary

Current metadata includes:

- document title
- meta description
- Open Graph title
- Open Graph description
- Open Graph type
- Open Graph URL
- Open Graph site name

An Open Graph image is currently absent. Metadata correctness and social-preview validation belong to formal QA.

## Accessibility boundary

Existing accessibility foundations include:

- semantic sections and elements
- navigation labels
- `aria-expanded` state on the mobile navigation toggle
- button labels
- `focus-visible` styling
- reduced-motion handling

The following remain unverified:

- full keyboard navigation
- focus order
- mobile-menu focus management
- Escape-key close behavior
- focus trapping
- screen-reader behavior
- color-contrast compliance

Accessibility presence is not accessibility verification.

## Responsive boundary

The stylesheet uses:

- a mobile-first base
- a `760px` breakpoint
- a `1024px` breakpoint
- a `1180px` breakpoint

Responsive CSS existence is not responsive QA.

## Performance boundary

The implementation is intentionally lightweight, and its static architecture suggests a small runtime surface. No Lighthouse or other formal performance record exists. Perceived lightness is not formal performance verification.

## Git and workflow boundary

- `main` is the current branch.
- Git history and repository state are continuity sources of truth.
- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md` is the workflow authority.
- Work proceeds in small, bounded units.
- Each unit requires scope-appropriate verification before moving on.
- Unrelated changes must not be mixed into a unit.
- Production deployment requires a separate explicit unit.

## Recommended staged sequence

The V2 foundation sequence is:

1. Unit 1A — V2 Project Boundary and Architecture Plan
2. Unit 1B — Core Homepage Structure Verification
3. Unit 1C — Visual System and Responsive Layout Verification
4. Unit 1D — Navigation and Interaction Verification
5. Unit 1E — Brand Asset Integration
6. Unit 1F — Static Site Guardrails and QA
7. Unit 1G — V2 Foundation Completion Checkpoint

Later work should use separate bounded phases for:

- content verification
- contact decision and integration
- case-study publication
- preview deployment
- release readiness
- production cutover
- post-cutover rollback/fallback checkpoint

## Current capabilities

DaDaStore V2 can currently render a complete static agency homepage directly in a browser without installation or a build step. It presents the core marketing sections, adapts its layout across defined breakpoints, supports desktop and mobile navigation, highlights observed sections, scrolls between internal targets, reveals content on entry, exposes a back-to-top control, and provides email contact links. It also carries basic SEO and Open Graph metadata.

## Current boundaries

V2 is an isolated static prototype, not an approved production replacement. It has no server runtime, persistence, form backend, analytics integration, external UI dependency, or deployment workflow in scope. The established visual direction remains protected. Brand integration requires approved assets; content requires owner verification; and production actions require explicit later units.

## Known limitations

- The current logo treatment is temporary text and CSS, not the final approved brand asset.
- No favicon or Open Graph image is integrated.
- Work cards are placeholders rather than published case studies.
- Homepage copy and contact details have not received recorded production verification.
- Contact behavior is limited to `mailto:` links.
- Accessibility behavior has foundations but no formal verification record.
- Responsive behavior has source support but no documented browser/device QA.
- No formal performance record exists.
- No analytics integration is approved or present.
- No preview, release-readiness, production-cutover, or rollback checkpoint has been completed.

## Acceptance conditions for Unit 1A

Unit 1A is complete only when:

- this document exists at `docs/UNIT_1A_V2_PROJECT_BOUNDARY_AND_ARCHITECTURE.md`
- it reflects actual current repository behavior
- architecture boundaries are explicit
- live-site protection is explicit
- brand, content, contact, SEO, accessibility, responsive, and performance boundaries are explicit
- staged next work is defined
- no implementation file is changed

## Recommended next unit

**Unit 1B — Core Homepage Structure Verification**

The homepage already exists functionally. The next bounded unit should verify its existing structure against this plan rather than rebuild or redesign it.

## Explicitly not next

- logo integration
- broad redesign
- form backend
- analytics integration
- case-study claims
- framework adoption
- build tooling
- WordPress restoration
- PHP or database work
- deployment
- production DNS or custom-domain changes
- changes to the live DaDaStore repository or site

## Test record

No tests run, since this was docs-only.
