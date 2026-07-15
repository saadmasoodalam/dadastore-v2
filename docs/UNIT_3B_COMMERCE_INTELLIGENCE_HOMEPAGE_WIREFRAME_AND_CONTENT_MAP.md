# Unit 3B — Commerce Intelligence Homepage Wireframe and Content Map

## 1. Status

Unit 3B is the docs-only V3 homepage wireframe and content-map planning unit. It defines the proposed page structure, content roles, proof placement, navigation targets, approval states, and future implementation sequence without changing the current website.

## 2. Purpose

This unit converts the approved Unit 3A design direction into a section-level implementation plan. It provides a practical map for later bounded HTML, CSS, and JavaScript units while preserving the current V2 site as the stable fallback.

Core law:

- Wireframe is not implementation.
- Content map is not final copy approval.
- Proof block is not permission to invent metrics.
- Template inspiration is not template cloning.
- Preview direction is not production cutover.

## 3. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_1G_V2_FOUNDATION_COMPLETION_CHECKPOINT.md`
- `docs/UNIT_2B_APPROVED_CONTENT_AND_CONTACT_IMPLEMENTATION.md`
- `docs/UNIT_3A_COMMERCE_INTELLIGENCE_DESIGN_DIRECTION_AND_PROOF_BOUNDARY.md`
- `_local-reference/DaDaStore_Upwork_Proof_Pack.pdf`
- `_local-reference/v3-template-reference-01.png`
- all files matching `_local-reference/v3-template-reference-*.png` (one file was present)
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- current Git repository state

The workflow rules remain the process authority. Unit 3A controls the V3 design and proof boundary. The proof pack is the evidence source for the marketplace facts recorded here. The template is visual inspiration only. Files under `_local-reference/` remain private planning references and must not be modified, copied into production, or committed.

## 4. Current V2 foundation reuse

The V3 plan must reuse or preserve these approved foundations:

- static HTML, plain CSS, and vanilla JavaScript architecture
- approved DaDaStore logo and mark assets
- approved favicon family, Apple touch icon, and Open Graph image unless a later bounded unit explicitly changes them
- official public email: `dadastore.co@gmail.com`
- approved contact path: `mailto:dadastore.co@gmail.com`
- Work Option A and its `Framework / Coming soon` placeholder boundary
- current semantic single-page approach
- current internal navigation, mobile-menu, reveal, active-state, back-to-top, and current-year concepts where compatible
- no framework or build tooling
- no package manager or external animation library
- no contact backend, form submission, persistence, or API
- no analytics

V3 planning does not remove the current V2 fallback or authorize deployment.

## 5. V3 homepage concept

**Concept:** Commerce Intelligence for performance-led ecommerce and service growth.

**Core message:** DaDaStore builds growth systems across paid traffic, creative testing, Shopify/CRO, tracking, and optimization.

“Commerce Intelligence” describes a strategic method for connecting signals, creative decisions, channel structure, and conversion behavior. It must not imply proprietary software, artificial intelligence, automated decision-making, or a technology platform that does not exist.

## 6. Information architecture

The proposed final section order is:

1. Floating header
2. Hero / Commerce Intelligence
3. Proof strip
4. Growth systems / services
5. Commerce intelligence section
6. Operating rhythm / process
7. Upwork proof section
8. Work frameworks / coming soon
9. Contact CTA
10. Footer

Proposed section identifiers:

| Page area | Proposed ID | Navigation role |
| --- | --- | --- |
| Hero / page top | `top` | Logo/home target |
| Proof strip | none | Supporting content; avoid duplicate `proof` target |
| Growth systems / services | `services` | Header and hero target |
| Commerce intelligence | `intelligence` | Section-level structure; no required header link |
| Operating rhythm / process | `process` | Header target |
| Upwork proof | `proof` | Header target |
| Work frameworks | `work` | Header target |
| Contact CTA | `contact` | Header target |

These IDs do not conflict with the existing `top`, `services`, `process`, `work`, or `contact` IDs. `proof` and `intelligence` are new. The current JavaScript active-section selector observes only `#services, #process, #work, #contact`; a later interaction unit must add `#proof` if Proof requires an active navigation state.

## 7. Section 1 — Floating header

### Purpose

Keep the brand and principal page routes available in a compact premium navigation surface.

### Content

- approved DaDaStore logo and brand identity
- Services
- Process
- Proof
- Work
- Contact
- Start a Project CTA
- no additional claim or metric

### Behavior

- Logo links to `#top`.
- Section links scroll internally to their mapped IDs.
- Start a Project uses `mailto:dadastore.co@gmail.com` on desktop and mobile.
- A mobile navigation menu remains required.
- Existing mobile open/close state, body scroll lock, and accessible-label behavior should be preserved unless a later interaction unit improves them.

### Wireframe

```text
[DaDaStore logo]  [Services] [Process] [Proof] [Work] [Contact]  [Start a Project]
Mobile: [DaDaStore logo]                                      [Menu toggle]
```

## 8. Section 2 — Hero / Commerce Intelligence

### Purpose

Immediately communicate the new positioning, audience, and conversion offer.

### Proposed content

**Headline:**

> Commerce growth systems built for performance, creative testing, and Shopify scale.

**Supporting copy:**

> DaDaStore helps ecommerce and service brands turn paid traffic, creative strategy, tracking, and conversion journeys into clearer growth systems.

**Primary CTA:** `Start a Project` → `mailto:dadastore.co@gmail.com`

**Secondary CTA:** `View Growth Systems` → `#services`

**Proof microline:** `Meta Ads • Google Ads • Shopify • CRO • Analytics • Creative Strategy`

### Visual direction

- dark premium hero with cyan, magenta, blue, and violet accents
- strong editorial headline on one side
- abstract signal, capability, or proof cards on the other
- cards must describe systems or owner-approved marketplace facts, not a fake client dashboard
- no fabricated revenue, orders, ROAS, ad spend, product performance, or growth charts
- no unapproved third-party product image or interface artwork

### Wireframe

```text
[Commerce Intelligence eyebrow]
[Headline]                         [Abstract signal/proof composition]
[Supporting copy]                  [No fake client dashboard]
[Start a Project] [View Growth Systems]
[Proof microline]
```

## 9. Section 3 — Proof strip

### Purpose

Replace the template’s invented company metrics with concise, source-backed marketplace credibility.

### Proposed proof cards

- `100% Job Success`
- `Top Rated Plus`
- `$100K+ Earned on Upwork`
- `5,000+ Hours`
- `74 Jobs Completed`

The proof pack visibly supports `100% Job Success`, `Top Rated Plus`, `$100K+` total earnings, `5,084` total hours, and `74` total jobs. The presentation labels above remain pending Project Owner approval. For the most evidence-exact wording, `74 Total Jobs` is safer than `74 Jobs Completed` unless the owner confirms the latter label.

### Softer fallback labels

If the Project Owner does not approve numerical marketplace proof, possible non-numerical directions are:

- Verified marketplace track record
- Long-term client work
- Performance marketing specialist
- Ecommerce and conversion systems

These fallback labels are also proposed copy, not automatically approved facts. They require accurate wording against the proof source.

### Recommendation

Default to the real, source-backed Upwork values after explicit Project Owner approval and current-value revalidation. Attribute marketplace-derived facts to Upwork and do not present them as client performance outcomes.

### Wireframe

```text
[100% Job Success] [Top Rated Plus] [$100K+ Earned] [5,000+ Hours] [74 Total Jobs]
```

On narrow screens, cards may wrap or use a readable grid. The content must not depend on horizontal auto-scrolling for access.

## 10. Section 4 — Growth systems / services

### Purpose

Present the service offer as six connected growth-system pillars rather than an undifferentiated list.

### Card 1 — Paid Advertising

- **Outcome:** Cleaner acquisition systems across Meta, Google, and TikTok.
- **Detail:** Campaign architecture, targeting, testing, optimization, and scaling.

### Card 2 — Creative Strategy

- **Outcome:** Better hooks, angles, and testing direction.
- **Detail:** Performance creative frameworks shaped around attention, messaging, and conversion signals.

### Card 3 — Shopify & CRO

- **Outcome:** Stronger store journeys and conversion paths.
- **Detail:** Landing pages, offers, funnels, store improvements, and customer-flow optimization.

### Card 4 — Tracking & Analytics

- **Outcome:** Clearer data for smarter decisions.
- **Detail:** Pixel setup, analytics hygiene, event tracking, audits, and decision-ready reporting.

### Card 5 — Audits & Troubleshooting

- **Outcome:** Faster clarity when accounts, tracking, or campaigns break.
- **Detail:** Technical diagnosis across ads accounts, pixels, platform issues, and campaign systems.

### Card 6 — Coaching & Strategy Support

- **Outcome:** Better decisions without guessing.
- **Detail:** Consultation, reviews, account walkthroughs, and strategic guidance.

### Wireframe

```text
[Section eyebrow + heading + short introduction]
[Paid Advertising] [Creative Strategy] [Shopify & CRO]
[Tracking & Analytics] [Audits & Troubleshooting] [Coaching & Strategy Support]
```

The proposed service wording is pending owner approval. Service categories are supported by the current V2 direction and visible Upwork skill categories, but this map does not approve new public copy.

## 11. Section 5 — Commerce intelligence section

### Purpose

Explain the strategic method behind the positioning without implying a software product.

### Proposed heading

> Creative intelligence with performance discipline.

### Proposed copy

> We connect creative thinking with measurement, channel structure, and conversion behavior so growth decisions become clearer, faster, and less dependent on guesswork.

### Content blocks

1. **Signal** — Read the data, audience behavior, and conversion friction.
2. **Strategy** — Convert signals into offers, angles, campaigns, and journeys.
3. **System** — Build repeatable campaign, creative, and conversion workflows.
4. **Scale** — Expand what works while protecting clarity and control.

### Wireframe

```text
[Strategic heading]                [Signal]
[Method explanation]               [Strategy]
                                   [System]
                                   [Scale]
```

The visual treatment may suggest connected signals and workflows, but must not resemble a live client dashboard or claim automated optimization.

## 12. Section 6 — Operating rhythm / process

### Purpose

Retain the approved V2 process model while presenting it with stronger operating-system language.

### Steps

1. **Audit** — Find gaps, friction, and wasted spend.
2. **Strategy** — Define the growth path and channel priorities.
3. **Build** — Prepare campaigns, assets, pages, and tracking.
4. **Launch** — Deploy with clean structure and clear testing logic.
5. **Optimize** — Read the data and improve what matters.
6. **Scale** — Expand what works without losing control.

### Wireframe

```text
[Operating rhythm heading]
[01 Audit] — [02 Strategy] — [03 Build] — [04 Launch] — [05 Optimize] — [06 Scale]
```

The sequence and current step copy are approved V2 foundations. Layout may adapt from stacked cards on mobile to a connected rhythm on wider screens without implying that every engagement follows an identical guaranteed timeline.

## 13. Section 7 — Upwork proof section

### Purpose

Provide a responsible narrative and attribution layer for the approved proof source. This section complements the compact proof strip rather than duplicating every metric card.

### Proposed heading

> Marketplace-proven performance support.

### Proposed copy

> With verified Upwork marketplace history across Meta Ads, CRO, Shopify, analytics, troubleshooting, and consulting, DaDaStore brings hands-on growth execution backed by public platform proof.

### Allowed facts for owner review

- `100% Job Success`
- `Top Rated Plus`
- `$100K+` earned
- `74` total jobs
- `5,084` total hours
- profile title: `Meta Ads Specialist | CRO & Performance Marketing | Data-Driven Growth`
- visible skill and service categories

### Recommended content role

- Use the proof strip for the short numerical summary.
- Use this section for the public profile title, selected skill categories, careful Upwork attribution, and a short credibility explanation.
- If a value appears in both places, repeat it only when necessary for context.
- Revalidate marketplace values immediately before implementation or publication because they can change.

### Do not include

- private client names or messages
- raw profile, review, or portfolio screenshots unless separately approved and privacy-reviewed
- direct review excerpts unless separately approved
- client logos without documented public approval
- revenue generated, ad spend managed, ROAS, CPA, conversion lift, or named case-study outcomes
- claims copied from the template/mockup

### Wireframe

```text
[Marketplace-proven heading]       [Upwork attribution]
[Short evidence-based narrative]   [Profile title]
                                   [Selected verified skill categories]
```

## 14. Section 8 — Work frameworks / coming soon

### Purpose

Retain the approved Work Option A boundary until factual, client-approved case-study evidence is available.

### Card 1 — Ecommerce Growth System

- **Label:** `Framework / Coming soon`
- **Copy:** Acquisition, offer testing, landing page strategy, and retention loops for scalable commerce brands.

### Card 2 — Lead Generation Campaign

- **Label:** `Framework / Coming soon`
- **Copy:** Paid media and conversion paths designed to turn qualified attention into sales conversations.

### Card 3 — Creative Testing Framework

- **Label:** `Framework / Coming soon`
- **Copy:** Structured creative experiments that reveal winning angles and reduce wasted media spend.

### Guardrail

No client names, logos, testimonials, numerical metrics, or fake case studies may appear. The existing placeholder copy and classification remain approved; visual restyling is not permission to turn a framework into a factual result.

## 15. Section 9 — Contact CTA

### Purpose

Convert qualified interest through the already approved contact path.

### Proposed content

**Heading:**

> Ready to build a clearer growth system?

**Supporting copy:**

> Tell us what you are building, where growth is stuck, and what you want to improve next.

**CTA:** `Start a Project` → `mailto:dadastore.co@gmail.com`

**Secondary note:** `Response path: dadastore.co@gmail.com`

The heading, supporting copy, and secondary-note presentation are pending owner approval. The email address and mailto path are already approved. This remains mailto-only; no form or backend is implied.

## 16. Section 10 — Footer

Include:

- approved DaDaStore logo or restrained brand identity
- positioning summary: `Performance Marketing / Creative Strategy / Shopify Growth`
- current year output
- contact email if the Project Owner wants it displayed as visible text

The existing JavaScript current-year hook can be preserved. Visible footer-email placement is optional and requires a content decision, even though the contact address itself is approved.

## 17. Navigation map

| Control | Target | Type | Compatibility note |
| --- | --- | --- | --- |
| Logo / home | `#top` | Internal | Existing target |
| Services | `#services` | Internal | Existing observed section |
| Process | `#process` | Internal | Existing observed section |
| Proof | `#proof` | Internal | New target; add to active observer in Unit 3E if active state is required |
| Work | `#work` | Internal | Existing observed section |
| Contact | `#contact` | Internal | Existing observed section |
| Start a Project | `mailto:dadastore.co@gmail.com` | External mail-client action | Must not be intercepted by hash scrolling |
| View Growth Systems | `#services` | Internal | Replaces the current `View Services` label if approved |

All proposed internal targets have unique IDs. The current hash-scrolling handler will work for a future `#proof` element because it selects all internal hash links dynamically. Only the fixed `sections` selector used by active-navigation observation requires future compatibility review.

## 18. Proof publication decision

**Owner decision required:** Should V3 publish the real Upwork proof values?

**Recommendation:** Yes, after explicit approval and current-value revalidation, publish:

- `100% Job Success`
- `Top Rated Plus`
- `$100K+ Earned on Upwork`
- `5,000+ Hours`
- an evidence-precise jobs label, preferably `74 Total Jobs` unless `74 Jobs Completed` is separately confirmed

Do not publish:

- `$50M+` revenue or any revenue-generated claim from the mockup
- `120M+` ad spend or any ad-spend-managed claim from the mockup
- `98%` satisfaction or any invented satisfaction score
- mockup ROAS, CPA, sales-lift, or case-study results
- fake client logos
- fake testimonials, identities, ratings, or platform reviews

The decision must also state whether Upwork may be named explicitly, whether the profile rate may be shown, and whether any raw proof imagery is approved. Until recorded, all proposed proof publication remains pending.

## 19. Copy approval status

| Content group | Status | Source/boundary |
| --- | --- | --- |
| Proposed hero headline and supporting copy | Pending owner approval | Unit 3A/3B planning option |
| Hero CTA targets | Approved | Unit 2B email and mailto decision; `#services` remains internal |
| Proposed proof microline | Pending owner approval | Supported service categories, new presentation |
| Proposed service outcomes and detail copy | Pending owner approval | V2 direction plus visible proof-pack skills |
| Commerce intelligence heading and method copy | Pending owner approval | New V3 positioning; must not imply software |
| Process steps and copy | Approved foundation retained | Existing V2 content |
| Proposed proof values and display labels | Pending owner approval | Verified source facts; publication not yet approved |
| Proposed Upwork proof heading and narrative | Pending owner approval | New V3 copy |
| Work placeholder labels, titles, and copy | Approved boundary retained | Work Option A from Unit 2B |
| Contact CTA heading and supporting copy | Pending owner approval | New V3 copy |
| Contact email and mailto path | Approved | Unit 2B |
| Footer positioning summary | Approved V2 foundation | Current implementation |

Content marked pending must not be treated as final implementation input until the Project Owner approves it or provides edits.

## 20. Technical implementation plan

Implementation may proceed only after the Project Owner V3 Copy/Proof Approval Review.

### Unit 3C — V3 HTML Structure Implementation

- Expected implementation file: `index.html` only.
- Replace the section structure and approved copy according to Unit 3B.
- Preserve approved assets, metadata direction, mailto targets, semantic structure, and JavaScript hooks where possible.
- Add unique `services`, `intelligence`, `process`, `proof`, `work`, and `contact` section IDs.
- Do not implement the visual redesign in this unit.

### Unit 3D — V3 Visual System Implementation

- Expected implementation file: `assets/css/style.css` only.
- Implement the approved commerce-intelligence visual system and responsive layouts.
- Preserve accessibility foundations and reduced-motion CSS.
- Do not add external libraries or tooling.

### Unit 3E — V3 Interaction Compatibility Pass

- Expected implementation file: `assets/js/main.js` only if changes are required.
- Preserve mobile navigation, internal scrolling, active navigation, reveal, back-to-top, and current-year behavior.
- Include `#proof` in active-section behavior if the approved navigation requires it.
- Verify reduced-motion and no-JavaScript limitations; fix only what the bounded Unit 3E scope explicitly authorizes.

### Unit 3F — V3 Guardrails and Browser QA

- Expected scope: documentation and verification.
- Verify content/proof boundaries, asset paths, responsive behavior, navigation, console/network state, accessibility foundations, and non-regression.

### Unit 3G — V3 Preview Approval Checkpoint

- Expected scope: docs only.
- Record completed V3 stages, owner preview result, remaining limitations, rollback state, and the next bounded decision.

## 21. Implementation boundaries

Do not implement yet:

- HTML replacement or section restructuring
- CSS redesign
- JavaScript behavior changes
- new or copied assets
- proof cards or public Upwork claims
- analytics
- contact backend, form, persistence, or API
- framework, build tool, package manager, or animation library
- deployment or preview replacement
- production cutover

## 22. Recommended next step

**Project Owner V3 Copy/Proof Approval Review**

Before Unit 3C begins, the Project Owner must approve or edit:

- the V3 audience definition
- hero headline, supporting copy, CTA labels, and proof microline
- six service-card titles, outcomes, and detail copy
- commerce-intelligence heading, copy, and four-block method
- Upwork publication permission, attribution, values, and exact display labels
- Upwork proof-section heading and narrative
- contact CTA copy
- optional visible footer email

The review should explicitly mark each group approved, approved with edits, or rejected. A general visual approval of V2 does not approve V3 copy or proof publication.

## 23. Explicitly not next

- editing `index.html`
- editing `assets/css/style.css`
- editing `assets/js/main.js`
- replacing the current V2 preview
- deployment
- production cutover
- DNS or custom-domain changes
- changes to the live DaDaStore repository/site
- fake metrics or performance results
- testimonials or review excerpts
- client logos
- framework or build-tool adoption
- contact backend
- analytics
- copying or committing `_local-reference/` files

## 24. Verification record

- The workflow authority, Unit 1G, Unit 2B, Unit 3A, current HTML, current CSS, and current JavaScript were read completely.
- The Upwork proof pack was rechecked against its embedded profile overview and skills evidence.
- Verified source values remain `100% Job Success`, `Top Rated Plus`, `$100K+` total earnings, `74` total jobs, `5,084` total hours, `$55.00/hr`, the recorded profile title, and the visible skill categories.
- The one available template/mockup reference was reviewed at full resolution.
- The proposed V3 direction and exclusions match Unit 3A.
- Proposed section IDs are unique and compatible with current hash scrolling; the new `#proof` active-navigation dependency is explicitly deferred to Unit 3E.
- No tests were required or run because this was docs-only planning.
