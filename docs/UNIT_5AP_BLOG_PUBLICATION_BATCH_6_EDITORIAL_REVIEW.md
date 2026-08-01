# Unit 5AP — Select and Review Blog Publication Batch 6

## 2. Status

Docs-only selection and editorial/technical review. This unit selects ten drafts for the sixth publication-review batch. It does not edit, approve, publish, list, index, deploy, commit, or push any article.

## 3. Purpose

Choose the strongest ten of the fifteen remaining drafts, review their actual source content and publication boundaries, identify the corrections required before approval, and defer five articles whose overlap or positioning makes them lower priority for this batch.

Core boundaries:

- Selection is not approval.
- Review is not editing.
- Editing is not publication.
- Technical readiness is not factual approval.
- Draft completeness is not permission for public exposure.

## 4. Current blog state

- Published articles: **46**
- Draft articles: **15**
- Draft records with non-null public URLs: **0**
- Public listing, sitemap, or RSS exposure among the fifteen drafts: **0**
- Current branch: `main`
- Unit 5AO remains a local, uncommitted publication state; Unit 5AP does not modify it.
- The pre-existing `blog/data/article-plan.json` modification remains protected and outside this unit.

## 5. Batch-selection method

The review used the current `posts.json` registry as publication-state authority, the article plan for assigned intent/audience/reading-time context only, and each draft HTML file as content authority. Selection considered:

1. search intent and standalone usefulness;
2. category coverage and missing Knowledge Library topics;
3. overlap with the 46 published articles;
4. the usefulness of current and potential internal links;
5. claim, privacy, and platform-volatility risk;
6. metadata, word-count, visual-module, navigation, and draft-boundary validity;
7. repeated prose, duplicate sentences, article pacing, and CTA order;
8. the amount of topic-specific rewriting required to produce a publishable article.

All fifteen drafts pass the existing static checks for metadata, category, target word-count range, local links, draft URL state, visual-module presence, prohibited statistics, guaranteed-result language, empty sections, and full-body duplication. A deeper sentence-level review found a shared editorial defect not detected by the full-body duplicate check: the remaining drafts contain extensive repeated boilerplate inside and across articles.

The selected group favors strong, distinct search intent and six-category coverage. The five deferred drafts either overlap more directly with the published library or need their purpose differentiated from a selected topic before revision.

## 6. Ten selected articles

| # | Article | Slug | Category | Search intent | Audience | Words | Reading time | Verdict |
|---:|---|---|---|---|---|---:|---|---|
| 1 | How to Write and Test Ad Hooks Without Chasing Novelty | `how-to-write-ad-hooks` | Creative Strategy | Informational | Copywriters, media buyers, and creative strategists | 1,451 | 8 min read | Requires major revision |
| 2 | How to Write a Creative Brief for Performance Marketing | `creative-brief-for-performance-marketing` | Creative Strategy | Informational | Marketing teams briefing performance creative | 1,452 | 8 min read | Requires major revision |
| 3 | How to Diagnose Creative Fatigue in Paid Campaigns | `how-to-diagnose-creative-fatigue` | Creative Strategy | Problem-solving | Advertisers investigating declining creative performance | 1,441 | 9 min read | Requires major revision |
| 4 | A Content Repurposing System That Preserves Meaning | `content-repurposing-system` | Content Marketing | Informational | Lean content teams extending useful source material | 1,441 | 8 min read | Requires major revision |
| 5 | How to Build an Editorial Calendar Around Business Priorities | `editorial-calendar-workflow` | Content Marketing | Informational | Marketing teams managing ongoing editorial production | 1,426 | 9 min read | Requires major revision |
| 6 | Abandoned Cart Email Strategy: Timing, Message, and Measurement | `abandoned-cart-email-strategy` | Email Marketing | Informational | Ecommerce teams planning cart-recovery email journeys | 1,429 | 8 min read | Requires major revision |
| 7 | Email Segmentation for Lifecycle Marketing | `email-segmentation-lifecycle-strategy` | Email Marketing | Informational | Email marketers improving lifecycle relevance | 1,437 | 9 min read | Requires major revision |
| 8 | How to Choose Marketing Automation Software Without Starting With Features | `how-to-choose-marketing-automation-software` | Marketing Automation | Commercial investigation | Marketing leaders evaluating automation platforms | 1,426 | 10 min read | Requires major revision |
| 9 | How to Build SEO Topic Clusters Around Real Customer Questions | `seo-topic-clusters-customer-questions` | SEO | Informational | Content and SEO teams planning connected editorial coverage | 1,424 | 10 min read | Requires major revision |
| 10 | How to Run a Quarterly Marketing Review That Produces Decisions | `quarterly-marketing-review` | Business Growth Systems | Informational | Marketing leaders and business owners reviewing growth priorities | 1,408 | 9 min read | Requires major revision |

## 7. Five deferred draft articles

| Article | Slug | Reason deferred |
|---|---|---|
| CRM Lead Nurturing Automation: A Practical Planning Guide | `crm-lead-nurturing-automation` | Strong topic, but currently overlaps the published lead-measurement and automation-workflow articles. Its later revision should make CRM state design, sales ownership, nurture eligibility, and exit logic unmistakably primary. |
| Ecommerce SEO Foundations for Product and Collection Pages | `ecommerce-seo-foundations` | Valuable SEO topic, but it overlaps published technical-SEO, Shopify navigation, collection-page, product-page, and ecommerce measurement coverage. It needs a sharper catalog-specific boundary before publication review. |
| How to Build a Client Acquisition System for a Service Business | `client-acquisition-system-for-service-businesses` | Broad scope overlaps published lead-generation planning and B2B strategy material. A later unit should narrow the service-business operating loop and define what it adds beyond channel and lead guidance. |
| A Small-Budget Marketing Plan Built Around Focus | `small-budget-marketing-plan` | The library already publishes “How to Plan Paid Advertising With a Small Budget.” This draft needs a clear all-channel operating-budget distinction before it can avoid near-duplicate search intent. |
| A Marketing Operating System for Small Teams | `marketing-operating-system-for-small-teams` | Useful but broad, with material overlap with the selected quarterly-review article and several published process/system pieces. Deferral allows the operating-system article to establish a distinct cadence, artifact, and ownership boundary later. |

All five deferred articles remain drafts with null public URLs and no public-listing, sitemap, or RSS exposure. Deferral is not a rejection or publication hold; it only removes them from this bounded batch.

## 8. Article-by-article editorial review

### 8.1 How to Write and Test Ad Hooks Without Chasing Novelty

- **Title, intent, and audience:** Clear informational title with a useful anti-novelty position. It fits creative strategists, copywriters, and media buyers without promising performance.
- **Introduction:** Strongly distinguishes a relevant hook from a dramatic phrase and correctly begins with audience evidence.
- **Structure and usefulness:** The progression from raw material through hook families, proof, testing, quality review, and learning records is appropriate. The layers visual is topic-specific.
- **Editorial blocker:** The body contains **15 within-article repeated-sentence groups** and shares **14 exact boilerplate sentences** with six other selected drafts. Generic operating language repeatedly replaces hook-specific explanation. The generated mistakes list also repeats a mechanical “optional or without an owner” construction.
- **Claims and factual safety:** No unsupported statistic, guaranteed result, private material, or fake case study was found. The article appropriately avoids universal winning-hook claims.
- **Metadata and technical state:** Metadata is complete; 1,451 words pass the range; visible, registry, and plan reading time agree at 8 minutes; mobile navigation and the topic visual are present; the article remains `noindex, nofollow` with a null public URL.
- **Links and overlap:** The published creative-testing article is relevant. The creative-brief link targets another selected draft and becomes public-safe only if both are later approved and published together. The topic overlaps creative testing but remains distinct when focused on message openings and proof continuity.
- **CTA and mobile readability:** CTA language is relevant and concise. A substantive “structured hook review” section appears after the CTA, so the CTA is not the true conclusion. Source structure is responsive in principle, but browser QA belongs after revision.
- **Required revision:** Replace repeated boilerplate with hook examples, decision criteria, test controls, and interpretation guidance; rewrite the mistakes section; move the post-CTA review content into the main body; keep the CTA last; preserve the visual and public-safe boundaries.
- **Verdict:** **Requires major revision**.

### 8.2 How to Write a Creative Brief for Performance Marketing

- **Title, intent, and audience:** Direct informational title and a clear audience of teams commissioning performance creative.
- **Introduction:** Correctly frames a brief as a decision and learning tool rather than a request for more versions.
- **Structure and usefulness:** Audience context, communication objective, offer/proof boundary, format guidance, feedback, testing, and post-launch learning form a useful brief lifecycle. The campaign-blueprint visual supports the topic.
- **Editorial blocker:** The body contains **14 within-article repeated-sentence groups** and shares **14 exact boilerplate sentences** with six selected drafts. Much of the explanatory copy is interchangeable with unrelated articles instead of showing what belongs in a creative brief.
- **Claims and factual safety:** No unsafe claim, invented evidence, or private-client detail was found. The proof-boundary language is appropriately cautious.
- **Metadata and technical state:** Metadata is complete; 1,452 words pass; reading time matches at 8 minutes; draft robots, null URL, mobile toggle, and visual module are present.
- **Links and overlap:** The published creative-testing article and selected hooks article form a coherent cluster. The revision should distinguish the brief as the pre-production contract rather than a testing framework or hook-writing guide.
- **CTA and mobile readability:** CTA is relevant, but the useful brief-readiness checkpoint and final-brief hierarchy appear after the CTA. This breaks conclusion order.
- **Required revision:** Replace boilerplate with field-level brief guidance and realistic approval examples; make the mistakes specific; move readiness-checkpoint content before related links and CTA; retain a final CTA and the blueprint visual.
- **Verdict:** **Requires major revision**.

### 8.3 How to Diagnose Creative Fatigue in Paid Campaigns

- **Title, intent, and audience:** Strong problem-solving intent and a useful diagnostic audience. The title avoids treating fatigue as a proven cause.
- **Introduction:** One of the stronger openings in the set: it names competing explanations before recommending new creative.
- **Structure and usefulness:** Measurement context, delivery, audience exposure, offer/journey, creative signals, matched response, and monitoring create a sound diagnostic sequence. The comparison module is relevant.
- **Editorial blocker:** The article contains **15 within-article repeated-sentence groups** and shares **14 exact boilerplate sentences** with the same seven-article cohort. The generic prose weakens otherwise useful diagnostic distinctions.
- **Claims and factual safety:** No universal fatigue threshold, unsupported performance claim, or fake statistic is used. Qualitative signals are correctly treated as clues rather than prevalence evidence.
- **Metadata and technical state:** Complete metadata; 1,441 valid words; reading time matches at 9 minutes; draft and navigation boundaries are intact.
- **Links and overlap:** The published creative-testing and Meta Ads troubleshooting articles are relevant. The revision must preserve the narrower differential-diagnosis purpose rather than becoming another general campaign troubleshooting checklist.
- **CTA and mobile readability:** CTA is specific. The evidence-record and proportional-diagnosis section follows the CTA and should be integrated before the conclusion.
- **Required revision:** Replace boilerplate with symptom-specific evidence, competing-hypothesis examples, measurement checks, intervention thresholds, and rollback guidance; rewrite mechanical mistakes; repair article order.
- **Verdict:** **Requires major revision**.

### 8.4 A Content Repurposing System That Preserves Meaning

- **Title, intent, and audience:** Clear informational topic with a useful distinction between adaptation and volume production.
- **Introduction:** Strongly challenges the “cut one asset into many pieces” misconception and establishes meaning preservation as the governing idea.
- **Structure and usefulness:** Source selection, durable idea extraction, lifecycle mapping, contextual adaptation, evidence, production, distribution, and maintenance are appropriate. The timeline visual fits.
- **Editorial blocker:** **14 within-article repeated-sentence groups** and **14 shared exact boilerplate sentences** make much of the body generic. The same sentences appear under unrelated creative, email, and calendar headings.
- **Claims and factual safety:** No content-volume promise, fake result, copied case study, or unsupported statistic was found.
- **Metadata and technical state:** Metadata complete; 1,441 words; 8-minute reading time aligned; valid draft boundary, mobile toggle, and visual module.
- **Links and overlap:** The published customer-journey article is useful. The editorial-calendar link points to another selected draft and should remain only if both later publish together. The article must stay focused on transformation and derivative governance, not general calendar management.
- **CTA and mobile readability:** CTA is relevant, but the derivative-register section follows it.
- **Required revision:** Replace generic operations prose with source-to-derivative examples, adaptation decisions, evidence preservation, versioning, and retirement criteria; move the derivative register into the body and make CTA final.
- **Verdict:** **Requires major revision**.

### 8.5 How to Build an Editorial Calendar Around Business Priorities

- **Title, intent, and audience:** Strong informational intent for teams managing editorial production.
- **Introduction:** Correctly defines an editorial calendar as an operating view rather than a date list.
- **Structure and usefulness:** Planning horizon, priorities, fields, responsive capacity, approvals, distribution, reviews, and maintenance are all relevant. The process visual supports the workflow.
- **Editorial blocker:** **15 within-article repeated-sentence groups** and **14 exact shared sentences** create patterned filler. Mistake descriptions are mechanical rather than editorially diagnostic.
- **Claims and factual safety:** No unsupported publication-frequency, traffic, or revenue promise appears.
- **Metadata and technical state:** Metadata complete; 1,426 valid words; 9-minute value matches; draft, navigation, and visual boundaries remain valid.
- **Links and overlap:** The repurposing article is selected, and the social-media calendar article is published. The revision must explicitly distinguish a multi-channel editorial operating calendar from the published social scheduling and production system.
- **CTA and mobile readability:** CTA fits, but the monthly retrospective appears after it.
- **Required revision:** Add editorial-priority tradeoffs, intake/capacity rules, field examples, approval failure modes, and maintenance decisions; remove duplicate boilerplate; state the difference from a social media calendar; move the retrospective before the final CTA.
- **Verdict:** **Requires major revision**.

### 8.6 Abandoned Cart Email Strategy: Timing, Message, and Measurement

- **Title, intent, and audience:** Clear lifecycle-email topic with practical search intent for ecommerce teams.
- **Introduction:** Public-safe and nuanced: it treats cart state as ambiguous rather than guaranteed lost revenue.
- **Structure and usefulness:** Eligibility, likely causes, sequence roles, incentive policy, timing, consent, validation, and attribution limits provide an appropriate recovery framework. The channel-map visual is relevant.
- **Editorial blocker:** The article has **17 within-article repeated-sentence groups**, the highest count in its seven-article cohort, and shares **14 exact boilerplate sentences** across selected drafts.
- **Claims and factual safety:** Strong boundaries around consent, intent, incentives, and inflated recovery credit. No unsupported recovery statistic or revenue promise was found.
- **Metadata and technical state:** Complete metadata; 1,429 valid words; 8-minute reading time aligned; draft status, null URL, mobile toggle, and visual module verified.
- **Links and overlap:** The published cart-abandonment diagnosis article is directly relevant; the selected segmentation article is a suitable companion if co-published. Revision must keep email eligibility and message sequencing distinct from broader checkout-friction diagnosis.
- **CTA and mobile readability:** CTA is appropriately bounded. A recovery-review-record section follows the CTA.
- **Required revision:** Replace generic prose with eligibility rules, message-role examples, incentive decision logic, suppression/exit cases, QA, and measurement limitations; rewrite mistakes; integrate the review record before a final CTA.
- **Verdict:** **Requires major revision**.

### 8.7 Email Segmentation for Lifecycle Marketing

- **Title, intent, and audience:** Clear informational topic, though the final revision may benefit from retaining the current practical/governance emphasis in metadata and opening copy.
- **Introduction:** Strongly rejects complexity for its own sake and defines segmentation around meaningful message differences.
- **Structure and usefulness:** Decision-first fields, lifecycle model, entry/exit/priority/suppression, message differences, privacy, profile testing, and retirement are relevant. The checklist visual is appropriate.
- **Editorial blocker:** **14 within-article repeated-sentence groups** and **14 shared exact sentences** leave substantial generic copy beneath topic-specific subheads.
- **Claims and factual safety:** No personalization guarantee, fake uplift, unsupported platform claim, or private data is used. Governance and privacy boundaries are suitable.
- **Metadata and technical state:** Metadata complete; 1,437 words; reading time matches at 9 minutes; draft/public boundaries and mobile navigation are intact.
- **Links and overlap:** The welcome-sequence and lead-measurement articles are both published. The article remains distinct when centered on segment logic, priority, suppression, and maintenance.
- **CTA and mobile readability:** CTA is relevant, but the segment-register section appears afterward.
- **Required revision:** Replace boilerplate with profile examples, conflicting-segment resolution, lifecycle transitions, suppression cases, testing records, and retirement criteria; integrate the segment register and end on the CTA.
- **Verdict:** **Requires major revision**.

### 8.8 How to Choose Marketing Automation Software Without Starting With Features

- **Title, intent, and audience:** Strong commercial-investigation intent and a credible non-feature-first angle for marketing leaders.
- **Introduction:** Clearly states the correct evaluation order: journeys, constraints, data, ownership, maintenance, then products.
- **Structure and usefulness:** Requirements, integration reality, prioritization, workflow exceptions, governance, adoption, proof of fit, and reversibility create a good vendor-evaluation architecture. The audit/matrix visual is useful.
- **Editorial blocker:** The body contains **20 within-article repeated-sentence groups** and shares **20 exact sentences** with the selected SEO and quarterly-review drafts. The repeated material is broad operating advice rather than tool-selection analysis.
- **Claims and factual safety:** No vendor ranking, unsupported product capability, price assertion, or guarantee is present. The use of synthetic proof-of-fit records is safe.
- **Metadata and technical state:** Metadata complete; 1,426 valid words; registry, plan, and visible reading time agree at 10 minutes; draft state, null URL, mobile toggle, and visual are valid.
- **Links and overlap:** The automation-workflow article is published and useful. The CRM nurture link points to a deferred draft and must be replaced, removed, or withheld until that article is approved. The revision should use the published workflow article to establish requirements without duplicating it.
- **CTA and mobile readability:** CTA is relevant, but vendor-session and exit-burden guidance appears after it.
- **Required revision:** Replace boilerplate with selection evidence, representative use cases, integration/permission/export checks, operator tasks, scoring cautions, proof-of-fit scenarios, and switching-cost boundaries; move vendor and exit guidance into the body; CTA last.
- **Verdict:** **Requires major revision**.

### 8.9 How to Build SEO Topic Clusters Around Real Customer Questions

- **Title, intent, and audience:** Strong informational search intent and a clear customer-question angle for SEO/content teams.
- **Introduction:** Correctly rejects keyword-export-driven thin content and makes expertise and decision context primary.
- **Structure and usefulness:** Problem ownership, evidence sources, opportunity mapping, intent separation, pillar/support roles, internal links, publishing capacity, and system evaluation form a sound cluster process. The channel-map visual supports relationships.
- **Editorial blocker:** The article contains **20 within-article repeated-sentence groups** and shares **20 exact sentences** with two selected drafts. Generic governance text displaces needed SEO examples and content-role distinctions.
- **Claims and factual safety:** No ranking guarantee, traffic forecast, search-volume statistic, or unsupported platform claim appears.
- **Metadata and technical state:** Complete metadata; 1,424 valid words; 10-minute reading time aligned; valid draft, mobile-toggle, and visual state.
- **Links and overlap:** The customer-journey article is published and useful. Ecommerce SEO is deferred, so that related link cannot become public in this batch. The article is distinct from published technical SEO when it stays focused on question evidence, intent architecture, and content relationships.
- **CTA and mobile readability:** CTA is relevant; publication-sequence and maintenance material currently follows it.
- **Required revision:** Replace boilerplate with question-source examples, intent separation tests, page-role boundaries, internal-link decisions, thin-content avoidance, maintenance triggers, and cluster evaluation; fix related links; integrate the post-CTA material before a final CTA.
- **Verdict:** **Requires major revision**.

### 8.10 How to Run a Quarterly Marketing Review That Produces Decisions

- **Title, intent, and audience:** Strong informational title with a clear decision-oriented promise that does not guarantee business results.
- **Introduction:** Properly distinguishes a decision review from a reporting presentation and begins with evidence quality and previous commitments.
- **Structure and usefulness:** Preparation, data quality, scorecard interpretation, customer/business movement, channel roles, constraints, decisions, ownership, and follow-through fit the intended review. The scorecard visual is relevant.
- **Editorial blocker:** The body contains **20 within-article repeated-sentence groups** and shares **20 exact sentences** with the selected automation-software and SEO-cluster drafts. These repeated sentences make unrelated topics read like one template.
- **Claims and factual safety:** No invented benchmark, private metric, or guaranteed improvement is present. The article appropriately cautions against complete conclusions from platform reporting.
- **Metadata and technical state:** Metadata complete; 1,408 words pass; reading time matches at 9 minutes; draft/public safeguards, mobile toggle, and visual module are present.
- **Links and overlap:** The published cross-channel dashboard article is relevant. The marketing-operating-system link targets a deferred draft and must not become a public dependency. The revision should distinguish the quarterly decision cadence from dashboard construction and daily operating process.
- **CTA and mobile readability:** CTA is specific, but decision-record and future-review material appears after it.
- **Required revision:** Replace boilerplate with preparation artifacts, evidence-quality questions, interpretation examples, decision records, owner/deadline rules, and follow-through; correct deferred links; move supplemental content before the final CTA.
- **Verdict:** **Requires major revision**.

## 9. Comparison against the published library

The selection fills or deepens six useful library areas:

- **Creative Strategy:** hook development, creative briefing, and fatigue diagnosis extend the published creative-testing framework without repeating its primary test-system purpose.
- **Content Marketing:** repurposing and editorial operations extend the published customer-journey material. The editorial-calendar revision must explicitly differentiate itself from the published social-media content calendar.
- **Email Marketing:** abandoned-cart recovery and lifecycle segmentation complement the published welcome-sequence article and the broader cart-abandonment diagnosis.
- **Marketing Automation:** software selection adds commercial-investigation intent beside the published workflow-mapping article, provided vendor evaluation—not workflow design—remains primary.
- **SEO:** customer-question topic clusters add information-architecture and editorial-planning coverage beside published technical SEO.
- **Business Growth Systems:** quarterly review adds a bounded decision cadence linked to the published dashboard article.

No selected article is a full title or slug duplicate. The main overlap risks are editorial-calendar versus social content calendar, abandoned-cart email versus cart-abandonment diagnosis, automation software versus workflow mapping, and quarterly review versus dashboard reporting. Each risk has a clear differentiation requirement above.

## 10. Cross-batch duplication review

The source-level sentence audit found:

- **34 exact sentence strings** repeated across the ten selected articles;
- **14 shared sentences per article** across the seven selected original-Batch-5 drafts;
- **20 shared sentences per article** across the three selected original-Batch-6 drafts;
- **14–20 within-article repeated-sentence groups** in every selected article;
- no duplicate full article bodies, duplicate titles, or duplicate slugs.

Representative repeated lines include “Translate this into an observable workflow with a clear input, action, and output” and “Start with a boundary small enough to validate and maintain.” The ideas can be valid in context, but their exact repetition under unrelated headings makes the articles patterned and insufficiently topic-specific.

This is the decisive batch-wide blocker. Revision must not perform a superficial synonym swap. Each affected paragraph needs topic-specific explanation, examples, checks, and decision guidance. Every selected article also contains one substantive editorial section after the contact CTA. That section must move into the main body so related reading and the CTA form the true ending.

## 11. Category balance

| Category | Selected |
|---|---:|
| Creative Strategy | 3 |
| Content Marketing | 2 |
| Email Marketing | 2 |
| Marketing Automation | 1 |
| SEO | 1 |
| Business Growth Systems | 1 |
| **Total** | **10** |

The mix broadens the current library while keeping three connected creative topics together. Paid Media, Ecommerce & CRO, Tracking & Analytics, and Social Media Strategy already have substantial published coverage and do not need an additional selection merely to make the count symmetrical.

## 12. Internal-link plan

Retain or add links only when the destination is published at the time of release:

- Hooks ↔ creative brief; both → published creative testing.
- Creative fatigue → published creative testing and Meta Ads troubleshooting.
- Repurposing ↔ editorial calendar; both → published customer journey or social content calendar where contextually useful.
- Abandoned-cart email ↔ lifecycle segmentation; abandoned-cart email → published cart-abandonment diagnosis.
- Lifecycle segmentation → published welcome sequence and lead-measurement framework.
- Automation software → published automation workflow; remove or defer the CRM nurture link.
- SEO topic clusters → published customer journey and technical SEO where useful; remove or defer the ecommerce SEO link.
- Quarterly review → published cross-channel dashboard; remove or defer the marketing operating system link.

Anchor text must describe the reader’s next question rather than repeat exact-match keywords. No draft-to-public link may be introduced before publication approval.

## 13. Minor-edit requirements

No article is classified as “Ready after minor edits,” so no minor-only correction unit is appropriate. Grammar, punctuation, metadata, and isolated wording changes may occur inside the required major revisions, but they would not resolve the batch blocker by themselves.

## 14. Major-revision requirements

All ten selected articles require bounded major revision:

1. remove the 34 cross-article repeated sentence strings and all within-article repeated sentence groups;
2. replace generic filler with topic-specific explanation, examples, decisions, failure cases, and practical checks;
3. rewrite mechanical mistakes lists so each item explains a real topic-specific failure;
4. preserve each article’s search intent, audience, title, slug, category, safe claim boundaries, and distinctive visual module;
5. move the substantive post-CTA section into the main editorial flow;
6. keep related reading immediately before the final CTA and make the CTA the article ending;
7. replace links to deferred drafts with published destinations unless coordinated publication later makes the target valid;
8. preserve 1,400–2,200 words and recalculate reading time only if revision materially changes length;
9. maintain short paragraphs, meaningful hierarchy, responsive containment, mobile navigation, and static lightweight implementation;
10. rerun sentence duplication, metadata, link, draft exposure, responsive, console, network, and duplicate-ID checks after revision.

## 15. Articles held from publication

None is assigned **Hold from publication**. All ten selected articles have useful topics and public-safe foundations. Their blocker is correctable editorial quality and structure, not unsupported evidence, private material, outdated statistics, or an invalid premise.

The five deferred drafts are not held; they are outside this batch and remain eligible for a later bounded review.

## 16. Recommended publication order

Conditional on successful revision, final review, and explicit Project Owner approval:

1. How to Write a Creative Brief for Performance Marketing
2. How to Write and Test Ad Hooks Without Chasing Novelty
3. How to Diagnose Creative Fatigue in Paid Campaigns
4. A Content Repurposing System That Preserves Meaning
5. How to Build an Editorial Calendar Around Business Priorities
6. Email Segmentation for Lifecycle Marketing
7. Abandoned Cart Email Strategy: Timing, Message, and Measurement
8. How to Choose Marketing Automation Software Without Starting With Features
9. How to Build SEO Topic Clusters Around Real Customer Questions
10. How to Run a Quarterly Marketing Review That Produces Decisions

This order groups related learning paths while moving from creative production to content operations, lifecycle communication, tooling, discoverability, and management cadence. It is a recommendation, not publication approval.

## 17. Expected state after Batch 6 publication

Only after revision, final approval review, Project Owner approval, and a separate publication unit:

- Published articles: **56**
- Remaining drafts: **5**

Unit 5AP itself leaves the repository at 46 published and 15 drafts.

## 18. Allowed next work

- Apply bounded topic-specific major revisions to exactly these ten selected drafts.
- Update reading times in `posts.json` only if changed article length genuinely requires it.
- Correct selected related links while preserving draft/public boundaries.
- Run focused static and browser QA after revision.
- Create a separate final editorial approval review after corrections.

## 19. Disallowed next work

- Publishing or assigning public URLs to any selected or deferred draft
- Editing the five deferred articles
- Modifying the 46 published article bodies
- Adding drafts to Insights, category listings, sitemap, or RSS
- Changing the featured section or implementing featured rotation
- Modifying the pre-existing `blog/data/article-plan.json` change
- Main-site redesign, deployment, commit, or push

## 20. Recommended next unit

**Unit 5AQ — Apply Batch 6 Major Editorial Revisions**

Goal: remove repeated boilerplate, restore topic-specific prose, correct CTA/content order, and repair publication-safe related links in exactly the ten selected drafts without publishing them.

## 21. Verification record

- Selected articles: exactly 10
- Deferred drafts: exactly 5
- Selected slugs and folders: confirmed
- Selected records remain `draft`: confirmed
- Selected public URLs remain null: confirmed
- All fifteen draft source files unchanged during Unit 5AP: confirmed by SHA-256 comparison
- `posts.json` unchanged during Unit 5AP: confirmed
- Insights and category listings unchanged during Unit 5AP: confirmed
- Sitemap and RSS unchanged during Unit 5AP: confirmed
- Published articles remain 46: confirmed
- Remaining drafts remain 15: confirmed
- Unapproved draft exposure: 0
- Static library results: duplicate titles 0; duplicate slugs 0; missing metadata 0; invalid categories 0; word-count failures 0; broken links 0; prohibited statistic flags 0; guaranteed-result flags 0; visual-module failures 0; draft URL failures 0
- Selected reading-time mismatches between plan, registry, and visible article metadata: 0
- Selected mobile navigation toggles present: 10 of 10
- `git diff --check`: passed

No automated runtime or browser tests were required because this was a docs-only review. The source audit and existing dependency-free validation logic were run read-only.

## 22. Suggested commit message

`Add Batch 6 editorial review`
