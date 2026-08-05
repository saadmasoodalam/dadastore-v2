# Unit 6A — DaDaStore Automation Module Boundary and Architecture Plan

## 1. Title

Unit 6A — DaDaStore Automation Module Boundary and Architecture Plan.

## 2. Status

Docs only / architecture and planning only.

This unit defines a proposed product boundary. It does not create a user interface, schema, generator, integration, AI call, saved workflow, or executable automation.

## 3. Purpose

Define a safe, bounded architecture for a DaDaStore Marketing Automation Module that helps a business turn a described process into an editable automation blueprint.

The first version is a planning and preview tool. It must help users clarify their process, surface missing information, visualize decision paths, assign ownership, identify integration needs, and prepare implementation and testing checklists without performing external actions.

## 4. Product vision

The Automation Module should function as a structured workflow-planning workspace, not as a chatbot or automation runner.

A user should be able to describe how work happens today, specify the business event that starts it, identify records and required data, define eligibility and exceptions, place meaningful human approvals, and receive a professional workflow blueprint that can be reviewed with marketing, operations, sales, ecommerce, analytics, or technical teams.

The module should express DaDaStore's practical positioning across acquisition, ecommerce, CRO, tracking, troubleshooting, integrations, workflow planning, and data analysis. It should make operational logic visible before a team chooses software or builds an integration.

## 5. User problem

Businesses frequently begin automation with a platform feature instead of a clear operating model. This creates common failures:

- an unclear trigger;
- incomplete or unreliable source data;
- broad eligibility with missing exclusions;
- hidden branches and exceptions;
- no named owner;
- automation that conflicts with sales, support, or fulfillment work;
- timing without an operational reason;
- no human review at consequential decisions;
- inflated or disconnected success metrics;
- no failure, retry, fallback, or exit path;
- implementation that cannot be tested or reversed safely.

The module should convert these ambiguities into structured decisions and explicit gaps before implementation begins.

## 6. Intended users

Primary users:

- small-business owners mapping a repeatable process;
- marketing and growth leads coordinating channels and lifecycle work;
- ecommerce operators planning customer journeys;
- sales or CRM owners defining qualification, routing, and follow-up;
- content and creative teams planning review and publishing flows;
- analysts and tracking specialists planning measurement and reporting checks;
- consultants or agencies preparing an implementation specification with a client;
- operations leads reducing repetitive manual coordination.

V1 assumes a user who understands the business process well enough to review and correct the blueprint. It is not intended to replace accountable process owners, legal review, security review, platform administrators, or implementation specialists.

## 7. Primary use cases

- Map lead capture, validation, qualification, routing, and follow-up.
- Plan CRM lifecycle stages and nurture eligibility.
- Design an abandoned-cart follow-up sequence without sending messages.
- Plan customer onboarding, handoffs, reminders, and exception handling.
- Define internal campaign-launch or reporting notifications.
- Map ecommerce customer journeys across intent, purchase, and post-purchase stages.
- Plan content briefing, review, approval, and publishing responsibilities.
- Define marketing approval workflows and escalation paths.
- Plan tracking QA, attribution checks, and ownership of defects.
- Identify manual tasks that may be candidates for later automation.
- Document required platform boundaries before evaluating software.
- Prepare an implementation and testing checklist for a human delivery team.

## 8. Supported automation categories

V1 supports planning in these controlled categories:

1. Lead capture and routing.
2. Lead qualification.
3. CRM nurturing.
4. Email lifecycle planning.
5. Ecommerce follow-up.
6. Abandoned-cart workflow planning.
7. Customer onboarding.
8. Campaign reporting.
9. Tracking QA.
10. Content workflow.
11. Internal notification flow.
12. Review and approval flow.

Categories guide questions and deterministic recommendations. They do not authorize category-specific execution.

## 9. Explicitly unsupported use cases

V1 must not:

- send email, SMS, WhatsApp, direct messages, or notifications;
- modify CRM, ecommerce, advertising, analytics, or content records;
- publish content;
- change campaigns, bids, budgets, targeting, audiences, or creative;
- create, cancel, fulfill, refund, or modify orders;
- charge customers or initiate financial transactions;
- connect to private client accounts;
- request or store API keys, access tokens, passwords, cookies, OAuth grants, or webhook secrets;
- create webhooks, scheduled jobs, background workers, or autonomous agents;
- scrape private systems or bypass platform access controls;
- make legal, medical, credit, employment, safety, or other high-impact eligibility decisions;
- generate deceptive messaging, spam plans, dark patterns, or unauthorized surveillance;
- guarantee conversion, revenue, reach, lead, or efficiency outcomes;
- serve as a production integration specification without human technical review.

## 10. Core module laws

- Planning is not execution.
- Recommendation is not authorization.
- Preview is not activation.
- Validation is not deployment.
- Integration guidance is not an active integration.
- A workflow diagram is not a running automation.
- Saving a workflow is not enabling it.
- Exporting a plan is not sending it to a third-party platform.
- AI-generated guidance must remain reviewable and editable.
- Human approval must remain available at meaningful decision points.
- Missing information must be shown as missing; it must not be invented.
- A technically coherent plan is not proof that a process is lawful, ethical, secure, or commercially effective.
- A recommended KPI is not a promised result.

## 11. Planning-versus-execution boundary

The module may collect planning inputs, normalize them, validate completeness, compose recommendations, display warnings, render a diagram, and prepare user-initiated copy/export output.

It may not call a marketing platform, trigger a message, mutate an external record, schedule future work, or represent that an integration has been tested. Every action node must be labeled as a recommendation or proposed implementation step.

The V1 architecture should include no execution interface. There should be no hidden `run`, `activate`, `connect`, `send`, `publish`, or `sync` service behind the preview. Buttons and labels should use terms such as `Generate blueprint`, `Review`, `Edit`, `Copy plan`, and `Export plan`.

## 12. User journey

1. Choose an automation objective and category.
2. Read the planning-only boundary and confirm no secrets or private records should be entered.
3. Describe the current manual process.
4. Identify the trigger or initiating event.
5. Identify the audience, customer, lead, order, content item, campaign, or internal record involved.
6. Define eligibility conditions and exclusions.
7. Define required data and its expected source.
8. Define intended actions as recommendations.
9. Define timing, delays, expiry, and retry expectations.
10. Identify the responsible owner for each meaningful stage.
11. Define exceptions, failure paths, and fallbacks.
12. Define human-review and approval points.
13. Define measurement signals and success criteria.
14. Generate a workflow blueprint.
15. Review blockers, warnings, assumptions, and missing information.
16. Edit the structured blueprint.
17. Review the visual workflow and text-equivalent sequence.
18. Copy or export the plan through an explicit local user action.

The user must be able to return to earlier inputs without losing in-memory work during the current page session. Refreshing or closing the page clears V1 state.

## 13. Input architecture

V1 should use a guided, multi-step questionnaire with structured fields for critical facts and optional free-text context for nuance.

Structured inputs should cover:

- objective and category;
- current-state process summary;
- initiating trigger;
- subject or record type;
- eligibility rules and exclusions;
- required data and data-source descriptions;
- intended recommendations;
- timing and expiry;
- owners and approvers;
- exceptions and fallbacks;
- desired measurement signals;
- known tools or integration boundaries;
- known risks and constraints.

Optional free text should add context, not replace required fields. The interface should present examples and plain-language help while avoiding prompts for actual customer records, credentials, account identifiers, private messages, or proprietary client evidence.

## 14. Workflow-analysis architecture

Recommended processing pipeline:

```text
Guided inputs
  → normalization
  → deterministic field validation
  → dependency and risk analysis
  → deterministic blueprint composition
  → optional future AI enrichment boundary
  → deterministic output validation
  → editable structured blueprint state
  → visual and text preview
  → user-initiated local copy/export
```

The structured blueprint is the canonical state. The visual canvas and text report are views of that state, not separate sources of truth.

Deterministic analysis must remain sufficient to generate a useful baseline plan when AI is absent, unavailable, rejected, or disabled. A future AI layer may suggest wording, stages, questions, or risks, but it may not bypass validation, create executable instructions, or silently change structured facts supplied by the user.

## 15. Output architecture

The recommended V1 output contains:

- workflow title;
- objective;
- current-state summary;
- scope and explicit exclusions;
- trigger;
- required inputs and data sources;
- eligibility conditions;
- ordered workflow stages;
- proposed branches;
- action recommendations;
- human-review points;
- delays, expiry, and retry expectations;
- exceptions and failure paths;
- fallback behavior;
- responsible ownership;
- required integration boundaries;
- tracking requirements;
- KPI recommendations;
- risks, dependencies, warnings, assumptions, and missing information;
- implementation checklist;
- testing checklist;
- visual workflow preview;
- text-equivalent workflow sequence.

Each output item should remain editable. Generated recommendations should identify whether they came from a user input, deterministic template, validation rule, or future AI suggestion.

## 16. Suggested workflow data model

Unit 6A defines direction only; Unit 6B must define the actual schema and types.

The model should conceptually contain:

- a versioned workflow identity;
- objective and category metadata;
- a current-state description;
- subject/record and data requirements;
- a normalized trigger;
- a collection of ordered or connected nodes;
- explicit conditions and branch outcomes;
- ownership and human-review assignments;
- timing information;
- integration boundaries;
- exceptions and fallbacks;
- measurement recommendations;
- risk, dependency, warning, assumption, and missing-input collections;
- implementation and testing checklists;
- source/provenance markers for recommendations;
- a draft completeness state.

Node references should use stable local identifiers. The model should support branching and bounded review loops without requiring an execution engine. It should be serializable for local export but should not imply persistence.

## 17. Workflow-node types

Required planning node types:

| Node type | Planning purpose |
| --- | --- |
| Start | Marks the beginning of the documented workflow. |
| Trigger | Describes the event that may initiate evaluation. |
| Input | Identifies required information and its expected source. |
| Validation | Describes a proposed data or state check. |
| Condition | Defines a decision criterion. |
| Branch | Represents named outcomes from a condition. |
| Action recommendation | Describes a proposed action for later implementation. |
| Delay | Documents proposed waiting, expiry, or retry timing. |
| Human review | Requires a named person or role to inspect or approve. |
| Notification recommendation | Describes a proposed message or internal alert. |
| Data update recommendation | Describes a proposed record change without performing it. |
| Integration boundary | Marks where a third-party capability would be required. |
| Exception | Describes an abnormal or excluded path. |
| Fallback | Describes the safe alternative when a path cannot continue. |
| Measurement | Identifies an event, quality check, or KPI recommendation. |
| End | Marks a documented terminal outcome. |

Visual and accessible text labels must distinguish recommendations from actual actions.

## 18. Trigger model

A trigger is a proposed initiating event, not a subscribed webhook or active listener.

The plan should capture:

- event name and plain-language meaning;
- event source category;
- subject or record involved;
- minimum required data;
- expected frequency or volume band, if known;
- duplicate-event handling expectation;
- freshness or expiry expectation;
- whether consent or authorization is relevant;
- trigger validation questions;
- conditions that prevent the workflow from starting.

V1 should offer category-specific examples while allowing a custom description. It must not claim that a described trigger exists in a selected platform.

## 19. Condition and eligibility model

Conditions should be structured as reviewable criteria with named outcomes. The planning model should distinguish:

- required eligibility;
- exclusions and suppression rules;
- data-presence checks;
- consent or permission checks;
- state or lifecycle checks;
- ownership checks;
- frequency and duplication checks;
- expiry checks;
- branch priority when multiple rules apply;
- an explicit unknown/missing-data outcome.

Unknown data should route to a warning, fallback, or human review rather than being treated as eligible by default. V1 must not implement a high-impact eligibility decision.

## 20. Action recommendation model

Every proposed action should state:

- intended outcome;
- action category;
- responsible owner;
- information required;
- proposed destination or platform boundary;
- preconditions;
- expected confirmation signal;
- failure and fallback expectation;
- whether human approval is required;
- implementation dependency;
- measurement recommendation.

Wording must consistently use `recommend`, `propose`, or `implementation team should consider`. It must never imply that the module performed the action.

## 21. Delay and timing model

The plan should support:

- delay duration or timing window;
- business-time versus elapsed-time intent;
- timezone assumption;
- start and expiry conditions;
- cancellation conditions;
- maximum retries or review attempts;
- quiet-hour or frequency considerations;
- owner for delayed-path review;
- behavior when timing data is unknown.

V1 records timing intent only. It has no clock, scheduler, queue, retry worker, or background process.

## 22. Human-review model

Human review should be a first-class node, not an afterthought.

Each review point should identify:

- why review is required;
- responsible role;
- evidence or fields to inspect;
- possible decisions;
- expected response window;
- escalation owner;
- safe behavior when no decision is received;
- audit or documentation recommendation;
- whether the review is mandatory or advisory.

Meaningful review should be recommended at ambiguous eligibility, sensitive messaging, consequential record changes, exceptions, low-confidence recommendations, and pre-activation testing.

## 23. Exception and fallback model

The module should actively ask what happens when:

- required data is absent, invalid, stale, or contradictory;
- a record is duplicated;
- consent or authorization is unclear;
- ownership is missing;
- an integration is unavailable;
- a proposed message or update fails;
- a delay expires;
- a person does not approve;
- the subject changes state during the workflow;
- a measurement event is not observed;
- an unexpected branch occurs.

Every critical path should end in a safe fallback, explicit stop, or human review. The blueprint must flag branches with no defined outcome.

## 24. Integration recommendation model

V1 may identify an integration need using platform-neutral boundaries such as:

- form or lead source;
- CRM;
- email service;
- ecommerce platform;
- analytics or tracking system;
- advertising platform;
- collaboration or notification tool;
- content-management system;
- reporting destination.

The blueprint may list candidate capabilities and questions to ask a vendor. It must not request credentials, claim compatibility, promise an API capability, generate live OAuth links, configure webhooks, or send data.

Specific platforms such as Shopify, Wix, Squarespace, Meta, Google, TikTok, X/Twitter, or Snapchat may appear as user-selected context or implementation boundaries. Platform-specific guidance must be clearly reviewable and cannot substitute for current platform documentation or account-level validation.

## 25. Risk and dependency model

Risks and dependencies should be grouped by:

- data quality and availability;
- consent, privacy, and retention;
- ownership and operational coverage;
- platform or integration capability;
- volume, rate, and timing assumptions;
- customer-experience risk;
- duplicate or conflicting automation;
- measurement quality;
- security review;
- exception coverage;
- vendor lock-in and exit burden;
- implementation and maintenance effort.

Each item should include severity, rationale, mitigation recommendation, owner, and whether it blocks implementation. Severity should never be presented as a legal or security certification.

## 26. Measurement and KPI model

The module should recommend a small set of decision-supporting signals rather than invent targets.

Possible measurement groups:

- input completeness and validation failure rate;
- eligibility and exclusion counts;
- branch distribution;
- human-review volume and response time;
- exception and fallback rate;
- delivery or update confirmation rate after later implementation;
- lifecycle progression;
- manual effort and rework;
- data-quality defects;
- customer-experience complaints or opt-outs;
- business outcome indicators supplied and approved by the user.

Every KPI recommendation should state what decision it supports, its data dependency, owner, review cadence, and known interpretation limit. No target, benchmark, attribution, revenue, or performance number should be invented.

## 27. Public-safe output boundary

Public module output must:

- identify itself as a draft planning blueprint;
- use recommendation language;
- list assumptions and missing information;
- avoid guaranteed results;
- avoid fabricated platform capabilities or implementation claims;
- avoid claiming legal, security, accessibility, privacy, or compliance approval;
- avoid fake client stories, private proof, and unsupported metrics;
- separate a recommended integration from a verified integration;
- separate a proposed measurement event from a working tracking event;
- retain a visible requirement for human technical review before implementation.

## 28. Private-data boundary

V1 should ask for data categories and field descriptions, not real records.

Users should be warned not to enter:

- names, email addresses, phone numbers, postal addresses, order details, or customer IDs;
- health, financial, employment, identity, or other sensitive personal data;
- account numbers or internal identifiers;
- private client results, messages, documents, or screenshots;
- API keys, passwords, tokens, cookies, webhook secrets, or OAuth data;
- unpublished commercial terms or confidential platform data.

Because V1 has no persistence or network submission, input remains in the active browser session. The plan should still minimize and avoid private data because copy/export can move user-entered text outside the page.

## 29. AI usage boundary

Architecture decision: **C, a hybrid model**, is recommended as the product direction.

Critical workflow facts must use structured fields. Optional free text may provide context. Deterministic validation and a deterministic baseline blueprint are mandatory. AI may be considered later as an optional enrichment layer for suggestions, summaries, missing-question prompts, and draft wording.

V1 implementation through Unit 6I should remain useful without an AI service. No browser-exposed credential or direct client-side AI API call is acceptable. A live AI layer requires a later, separately approved boundary covering data minimization, provider behavior, server-side credential handling, retention, cost/rate limits, failure behavior, output validation, and user consent.

If a later AI layer is approved:

- structured user input remains authoritative;
- minimized normalized data is sent only after clear disclosure;
- secrets and personal records remain prohibited;
- AI output is treated as an untrusted suggestion;
- deterministic validation runs after generation;
- unsupported nodes or claims are rejected or flagged;
- provenance is visible;
- the user can edit or discard every suggestion;
- deterministic fallback remains available;
- AI cannot activate, connect, schedule, publish, send, or mutate anything.

Option evaluation:

| Option | Assessment |
| --- | --- |
| A. Guided deterministic form | Safe and testable, but can be rigid when a process has unusual context. It becomes the required V1 baseline. |
| B. Free-text AI generator | Rejected. Critical facts would depend on unstructured interpretation, omissions would be hard to detect, and safe client-side credentials are incompatible with the current static site. |
| C. Hybrid | Recommended architecture. Structured facts, deterministic validation, optional context, editable output, and a separately gated future AI enrichment layer provide the best safety and flexibility. |

## 30. Runtime boundary

The current DaDaStore site uses plain HTML, CSS, and minimal vanilla JavaScript with no framework, build system, package manager, PHP, WordPress runtime, database, or server application.

The recommended V1 module should preserve that boundary:

- a separate static `/automation/` surface;
- dependency-free HTML/CSS/JavaScript;
- pure deterministic models, validators, and generation rules;
- in-browser, in-memory state;
- no service worker, scheduled process, backend, API route, external call, or execution engine;
- no changes to the existing homepage or blog until a later narrow navigation/wiring unit is explicitly approved.

## 31. Persistence boundary

V1 persistence: **none**.

- State exists only in memory for the active page session.
- Refresh or close clears the plan.
- No database, browser storage, cookie, server session, analytics payload, or remote draft store is included.
- A downloaded or copied export is user-controlled output, not application persistence.
- Autosave, resume links, history, collaboration, and account workspaces are excluded.

Any future persistence requires a separate design covering consent, retention, deletion, ownership, encryption, access control, export, recovery, and migration.

## 32. Authentication boundary

V1 has no accounts, sign-in, roles, sessions, authorization, team membership, or private workspace.

The absence of authentication is a reason to prohibit private data and persistence; it is not permission to expose sensitive plans. Any future authenticated feature requires separate identity, authorization, session, threat, privacy, and recovery units before workflow storage.

## 33. Export boundary

Unit 6G may add local, explicit export and copy controls only after the model, validation, generation, preview, and tests exist.

Allowed V1 export direction:

- copy a plain-text or Markdown implementation plan;
- download a versioned JSON planning record;
- optionally download a printable text report if it can be produced locally and accessibly;
- include the planning-only disclaimer, warnings, assumptions, and schema version;
- initiate export only after a direct user action.

Excluded:

- sending to a CRM, automation platform, email service, ad platform, webhook, cloud drive, or collaboration tool;
- silently downloading or uploading;
- including secrets or real customer records;
- treating export as validation, approval, activation, or deployment.

## 34. Recommended visual architecture

Recommended direction: a premium editorial-tech workspace using a dark DaDaStore shell and a light or soft-charcoal working canvas.

This direction preserves current tokens—ink/navy, paper surfaces, cyan, violet, and pink—while prioritizing diagram readability over decorative glow.

Desktop layout:

- top boundary/status bar showing `Planning only` and completion state;
- left guided stepper/questionnaire;
- center structured workflow canvas;
- right inspector for node details, risks, warnings, and missing inputs;
- bottom or final implementation/testing checklist;
- persistent but non-dominant edit/review controls.

Node-role treatment:

- start/end: neutral strong boundary;
- trigger/input: cyan;
- validation/condition/branch: violet;
- action/data/notification recommendation: blue-cyan with explicit `recommended` label;
- delay: neutral/amber-safe accent;
- human review: magenta-violet with person/approval label;
- integration boundary: outlined/dashed boundary;
- exception/fallback: high-contrast warning treatment that does not rely on red alone;
- measurement: chart/signal treatment.

Connectors should show direction, branch labels, and outcomes without excessive neon. The canvas must have an equivalent ordered text view and must not require drag-and-drop.

## 35. Responsive behavior

Desktop-first does not mean desktop-only.

Recommended breakpoints and behavior:

- 1200px and above: three-column planner, canvas, and inspector.
- 768–1199px: two-column form/canvas with inspector as an accessible panel below or beside the selected node.
- Below 768px: linear stepper followed by warnings, ordered workflow cards, and edit controls; the graphical canvas becomes a simplified vertical flow.
- At 390px and 375px: single-column cards, full-width controls, no fixed canvas width, no horizontal page scrolling, and no essential connector labels positioned offscreen.

Zoom and text resizing must not hide controls. Mobile must retain the complete planning and editing capability rather than presenting a read-only diagram.

## 36. Accessibility requirements

- One logical `h1` and semantic heading order.
- Native form controls, labels, descriptions, fieldsets, and legends.
- Error text connected with `aria-describedby`; focus moved to a clear error summary on failed submission.
- Keyboard access to every step, node, inspector, edit control, and export control.
- No drag-only editing; provide move, insert, delete, and branch controls as buttons.
- Visible focus on dark and light surfaces.
- Node roles and branch outcomes communicated by text, icon, shape, and color rather than color alone.
- Minimum readable contrast for text, focus, borders, errors, and disabled states.
- A complete text equivalent for the visual workflow.
- Status announcements through restrained live regions without repeated interruption.
- Reduced-motion support; workflow meaning must not depend on animation.
- Touch targets sized for mobile use.
- Diagram scaling and wrapping that remain usable at 200% zoom.
- Validation must not erase user input or trap focus.

## 37. Failure-safe behavior

- Missing critical input blocks a `ready` classification and appears in a missing-input panel.
- A partial blueprint may be shown only as `Incomplete draft` with explicit blockers.
- Unknown eligibility routes to review/fallback, not automatic inclusion.
- Unsupported objectives are declined with a safe explanation and no invented workflow.
- Invalid node or branch references prevent export until corrected.
- Conflicting inputs remain visible and require user resolution.
- Future AI failure falls back to deterministic output without losing input.
- A rendering failure preserves an ordered text blueprint.
- Copy/export failure leaves the blueprint visible and offers a manual copy path.
- Refresh warns only if a browser-native, non-persistent confirmation can be added accessibly; it must not imply autosave.
- No error condition may trigger an external action.

## 38. Validation requirements

Unit 6C should implement pure validation for:

- required objective, category, process, trigger, subject, and owner fields;
- stable unique local node identifiers;
- valid node-type vocabulary;
- valid references and branch destinations;
- at least one start and one explicit terminal outcome;
- reachable nodes and no orphaned stages;
- branch labels and safe unknown/fallback paths;
- nonnegative timing and bounded retry recommendations;
- declared ownership for meaningful actions and reviews;
- explicit human review for sensitive or ambiguous paths;
- declared integration boundaries;
- exception coverage for critical recommendations;
- measurement recommendations connected to decisions;
- prohibited execution, credential, private-data, and guaranteed-result language;
- output provenance and editable fields;
- schema/version compatibility after Unit 6B;
- bounded node and text limits to protect usability;
- no mutation of input data by validators or generators.

Validation reports should separate blocking errors, safety blockers, missing information, warnings, and optional improvements.

## 39. Testing strategy

Planned test layers:

1. **Model tests:** valid defaults, serialization, versioning, node vocabulary, and immutability expectations.
2. **Pure validator tests:** required fields, references, branches, fallbacks, timing, owners, reviews, risks, and forbidden inputs.
3. **Generation-rule tests:** deterministic fixtures for all 12 V1 categories, stable output, no invented facts, and no execution language.
4. **Integration tests:** normalized input → validation → blueprint → post-validation → preview model.
5. **Guardrail tests:** no fetch/XHR/WebSocket, credentials, storage, cookies, timers for execution, background workers, external SDKs, or platform mutations.
6. **Export tests:** explicit user action, local-only output, valid version, disclaimer/warnings retained, and no external send.
7. **Browser tests:** 375px, 390px, 768px, 1024px, and 1440px; keyboard, focus, zoom, reduced motion, overflow, console, and request checks.
8. **Regression tests:** homepage, Services, Work, Insights, Categories, articles, navigation, and production discovery files unchanged.
9. **Content-safety tests:** no guarantees, fake metrics, platform-capability claims, secrets, or active-integration language.

Unit 6A requires only documentation verification and `git diff --check`; it does not create or run module tests.

## 40. Proposed file architecture

Proposed future structure, subject to Unit 6B confirmation:

```text
automation/
├── index.html
├── assets/
│   ├── automation.css
│   └── automation.js
├── js/
│   ├── workflow-models.js
│   ├── objective-templates.js
│   ├── workflow-validation.js
│   ├── blueprint-rules.js
│   ├── workflow-preview.js
│   └── workflow-export.js
└── examples/
    └── planning-only-samples.js

tests/
├── automation-models.test.mjs
├── automation-validation.test.mjs
├── automation-blueprints.test.mjs
├── automation-export.test.mjs
└── automation-guardrails.test.mjs

docs/
└── UNIT_6*_AUTOMATION_*.md
```

The exact split should follow tested responsibilities rather than file count. Scripts should load in a documented order and remain compatible with the current dependency-free static architecture. No schema, file, or runtime surface in this tree is authorized by Unit 6A.

## 41. Recommended implementation stages

### Unit 6A — Automation Module Boundary and Architecture Plan

Docs only. Define product laws, architecture, safety, stages, and next work. Current unit.

### Unit 6B — Workflow Models and Schemas

Define versioned pure workflow/input/output models, node vocabulary, validation-result shape, and fixtures with focused tests. No UI, generator, runtime wiring, export, persistence, AI, or external calls.

### Unit 6C — Pure Workflow Validation Logic

Implement deterministic, side-effect-free validation against Unit 6B models. Prove missing-input, branch, exception, review, credential, private-data, and execution-language guardrails. No generation or UI.

### Unit 6D — Blueprint Generation Rules

Implement deterministic category templates and pure blueprint composition for the 12 supported categories. Output remains draft, editable, and planning-only. No AI calls, UI wiring, export, or external action.

### Unit 6E — Visual Module UI Prototype

Create a static, accessible automation landing/planner prototype using approved sample data only. Establish responsive questionnaire, canvas, inspector, warnings, and text-equivalent flow. Do not connect the real generator.

### Unit 6F — Workflow Preview Integration

Connect the tested in-memory models, validation, and deterministic generation rules to the smallest V1 preview surface. No persistence, authentication, export, AI, or external integration. Add focused browser and regression tests.

### Unit 6G — Export Boundary

Add explicit local copy/download behavior for validated planning output. Prove that export contains boundaries and sends no network request. No storage, third-party destination, or activation.

### Unit 6H — Guardrail and Regression Tests

Verify no execution, integration, credential, persistence, authentication, private-data exposure, unexpected network call, or unrelated-site regression. Complete responsive and accessibility QA.

### Unit 6I — Automation Module Completion Checkpoint

Docs only. Record delivered planning capabilities, test results, known limitations, production/publication decision, and any separately gated future AI, persistence, authentication, or integration phase.

Each unit is independently bounded, testable, reversible, and prohibited from assuming the next unit is approved.

## 42. Allowed next work

- Create Unit 6B models, schema direction, fixtures, and focused model tests.
- Refine controlled vocabularies for objectives, node types, severity, provenance, and validation results within Unit 6B.
- Use synthetic planning examples without customer data, credentials, or performance claims.
- Keep the architecture dependency-free and detached from the current website runtime.

## 43. Disallowed next work

- UI implementation before Unit 6B–6D foundations.
- Homepage, Services, Work, blog, navigation, sitemap, feed, or production routing changes.
- Active integrations, API routes, webhooks, OAuth, platform SDKs, or credentials.
- Email, message, notification, publishing, campaign, order, budget, audience, or record execution.
- Database, local storage, cookies, authentication, user accounts, or saved workspaces.
- AI API calls or client-side AI credentials.
- Background workers, schedulers, queues, or autonomous decisions.
- Export before Unit 6G.
- Deployment, commit, or push in Unit 6A.
- Modification of `blog/data/article-plan.json`.

## 44. Recommended next unit

**Unit 6B — Workflow Models and Schemas**

Goal: define and test the pure, versioned data contracts for workflow inputs, planning nodes, editable blueprint output, validation findings, risk/dependency items, ownership, review, exception, measurement, and export-ready serialization without adding UI, persistence, AI, integrations, or runtime wiring.

Expected scope:

- pure model/schema files;
- synthetic fixtures;
- focused model tests;
- Unit 6B documentation.

## 45. Test record

- Generic Coding Project Workflow Rules: read completely.
- Current branch: `main`.
- Existing worktree state: pre-existing `blog/data/article-plan.json` modification only before Unit 6A.
- Current architecture: plain HTML, CSS, and vanilla JavaScript; no application framework, build tool, package manager, server runtime, database, authentication, or active integration.
- Current Services and Work sections: inspected.
- Current Insights visual system and responsive selectors: inspected.
- Relevant published automation/workflow guidance: inspected, including software selection, workflow mapping, CRM nurture, abandoned cart, client acquisition, and small-team operating systems.
- Existing Automation Module implementation: none found.
- Active execution authorized: no.
- External integrations implemented: no.
- API credentials requested: no.
- Database or authentication included: no.
- Editable structured output supported by the proposed architecture: yes.
- Recommended implementation units bounded: yes.
- Implementation files changed: 0.
- Automated tests: not run, because Unit 6A is docs only.
- `git diff --check`: passed after documentation creation.

## 46. Suggested commit message

`Add automation module architecture plan`
