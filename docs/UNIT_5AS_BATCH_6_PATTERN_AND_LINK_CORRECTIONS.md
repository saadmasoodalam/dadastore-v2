# Unit 5AS — Remove Remaining Batch 6 Pattern Repetition and Link Defects

## 2. Status

Content and documentation complete. Exactly the ten Batch 6 drafts reviewed in Unit 5AR were corrected. Correction is not approval, publication, or deployment.

## 3. Purpose

Resolve the remaining Unit 5AR blockers by replacing the shared 24-pattern prose sequence with genuinely topic-specific explanation, correcting one encoding defect, repairing two inaccurate related-link labels, and removing one related link to a deferred draft.

## 4. Articles corrected

1. `how-to-write-ad-hooks`
2. `creative-brief-for-performance-marketing`
3. `how-to-diagnose-creative-fatigue`
4. `content-repurposing-system`
5. `editorial-calendar-workflow`
6. `abandoned-cart-email-strategy`
7. `email-segmentation-lifecycle-strategy`
8. `how-to-choose-marketing-automation-software`
9. `seo-topic-clusters-customer-questions`
10. `quarterly-marketing-review`

Titles, slugs, categories, visual modules, navigation, draft robots behavior, status, and null public URLs were preserved.

## 5. Unit 5AR blockers

Unit 5AR found:

- 24 shared sentence-pattern families appearing in the same order in all ten articles;
- malformed quotation encoding around “creative fatigue”;
- an inaccurate lead-measurement link label in the automation-software article;
- an inaccurate technical-SEO link label in the topic-cluster article;
- a quarterly-review related link pointing to deferred draft `marketing-operating-system-for-small-teams`.

Exact duplicate-sentence and CTA-order checks already passed before this unit and remained protected during correction.

## 6. Pattern-family correction method

The correction replaced all 240 patterned explanatory passages rather than swapping individual nouns or synonyms. Each replacement was written around the actual responsibility of its heading and principle.

The new prose varies:

- sentence openings and length;
- evidence-to-decision order;
- paragraph purpose;
- transitions and pacing;
- operational examples;
- failure cases and limitations;
- review and ownership logic.

One additional topic-specific example or decision scenario was added within every major article stage. No universal replacement template was applied. Automated sentence review found no old pattern-family hits, repeated sentences within an article, or duplicate body sentences across the corrected batch.

## 7. Article-specific pattern changes

| Article | Distinct correction emphasis |
|---|---|
| Ad hooks | Customer-language sources, hook-family differences, proof continuity, mobile delivery, controlled comparisons, and learning records |
| Creative brief | Business context, single communication objectives, claims boundaries, format constraints, staged review, test variables, and archival learning |
| Creative fatigue | Precise symptoms, incident timing, competing causes, audience distributions, journey diagnosis, proportional interventions, and baseline preservation |
| Content repurposing | Source quality, durable ideas, derivative roles, channel adaptation, inherited evidence, production governance, sequencing, and retirement |
| Editorial calendar | Planning horizons, theme evidence, operational fields, interruption trade-offs, stage ownership, distribution, retrospectives, and maintenance capacity |
| Abandoned cart email | Send-time eligibility, journey friction, message roles, incentive policy, pressure limits, privacy, synthetic QA, and attribution boundaries |
| Lifecycle segmentation | Treatment-first logic, lifecycle windows, segment contracts, overlap priority, safe defaults, privacy, boundary profiles, and retirement decisions |
| Automation software | Representative workflows, data reality, weighted evaluation, exception behavior, security, operating cost, proof-of-fit tasks, and exit readiness |
| SEO topic clusters | Expertise boundaries, multi-source questions, opportunity mapping, intent separation, page responsibilities, link usefulness, evidence gates, and maintenance |
| Quarterly review | Decision-focused pre-reads, evidence quality, contextual timelines, channel roles, system constraints, explicit trade-offs, ownership, and decision records |

These changes preserve each article's factual meaning while making the explanation and examples specific to its search intent and audience.

## 8. Encoding correction

The malformed encoded quotation around “creative fatigue” was replaced with valid `&ldquo;` and `&rdquo;` entities. A scan across all ten corrected files found:

- malformed encoding sequences: **0**;
- additional encoding defects: **0**.

## 9. Related-link label corrections

Two labels now match their published destination titles:

- automation software: **A Lead Generation Measurement Framework From Click to Sales Follow-Up**;
- SEO topic clusters: **Technical SEO Audit Priorities for a Growing Website**.

Their destination URLs were already correct and remain unchanged.

## 10. Deferred-draft link correction

The quarterly-review article no longer links to deferred draft `marketing-operating-system-for-small-teams`. It now links to the currently published:

- **A Paid Media Reporting Framework Built Around Better Decisions**
- `../paid-media-reporting-framework/`

No corrected article links to any of the five deferred drafts.

## 11. Reading-time changes

The revisions were checked against the approved 1,400–2,200-word body range:

| Slug | Corrected body words | Reading time |
|---|---:|---|
| `how-to-write-ad-hooks` | 1,436 | 8 min read |
| `creative-brief-for-performance-marketing` | 1,435 | 8 min read |
| `how-to-diagnose-creative-fatigue` | 1,448 | 9 min read |
| `content-repurposing-system` | 1,421 | 8 min read |
| `editorial-calendar-workflow` | 1,400 | 9 min read |
| `abandoned-cart-email-strategy` | 1,400 | 8 min read |
| `email-segmentation-lifecycle-strategy` | 1,401 | 9 min read |
| `how-to-choose-marketing-automation-software` | 1,402 | 10 min read |
| `seo-topic-clusters-customer-questions` | 1,450 | 10 min read |
| `quarterly-marketing-review` | 1,405 | 9 min read |

Visible reading-time values remain aligned with both the registry and article plan. No reading-time value required a change.

## 12. Registry changes

`blog/data/posts.json` was not modified. All ten records retain:

- `status: draft`;
- `url: null`;
- existing approved category and reading-time values.

## 13. Verification results

- Revised article files: **10**
- Shared Unit 5AR sentence-pattern families remaining: **0**
- Exact duplicate sentences within articles: **0**
- Duplicate body sentences across corrected batch: **0**
- Encoding defects: **0**
- Inaccurate identified related-link labels: **0**
- Links to deferred drafts: **0**
- Substantive words after CTA: **0**
- Metadata failures: **0**
- Reading-time mismatches: **0**
- Word-count failures: **0**
- Broken links: **0**
- Draft exposure: **0**
- Sitemap leaks: **0**
- RSS leaks: **0**
- Mobile-navigation failures: **0**
- Duplicate IDs: **0**
- Repository validator duplicate title/slug failures: **0**
- Repository validator invalid category failures: **0**
- Repository validator placeholder, unsupported-statistic, guaranteed-result, empty-section, duplicate-body, and visual-module failures: **0**
- Browser cases checked: **20**
- Responsive failures at 390px and 1440px: **0**
- Horizontal-overflow failures: **0**
- Title-clipping failures: **0**
- Console errors: **0**
- Failed requests: **0**
- `git diff --check`: **passed**

## 14. Current draft state

All ten corrected articles remain drafts with null public URLs and `noindex, nofollow`. They remain absent from public listings, sitemap, and RSS. The five deferred drafts, 46 published articles, Insights page, category page, sitemap, RSS, and main site were not modified.

## 15. Remaining approval requirement

The Unit 5AR blockers are corrected, but the batch still requires a new docs-only final editorial and technical re-review followed by an explicit Project Owner decision. This unit does not approve or publish the articles.

## 16. Allowed next work

- Perform a narrow final re-review of these exact ten corrected drafts.
- Confirm the prose is editorially distinct and all Unit 5AR blockers remain resolved.
- Present the batch verdict to the Project Owner for an explicit approval decision only after that review.

## 17. Disallowed next work

- Publishing or assigning public URLs
- Adding drafts to listings, sitemap, or RSS
- Editing the five deferred drafts
- Editing published articles
- Insights-page or featured-rotation changes
- Modifying the protected pre-existing article-plan change
- Deployment, commit, or push without separate authorization

## 18. Recommended next unit

**Unit 5AT — Re-review Corrected Batch 6 Articles**

Perform a docs-only final editorial and technical review of the exact ten corrected drafts and determine whether Batch 6 is ready for Project Owner approval.

## 19. Suggested commit message

`Fix Batch 6 pattern and link issues`
