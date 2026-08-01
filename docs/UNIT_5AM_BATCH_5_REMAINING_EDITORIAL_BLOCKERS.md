# Unit 5AM — Batch 5 Remaining Editorial Blockers

## 1. Title

Unit 5AM — Fix Remaining Batch 5 Editorial Blockers

## 2. Status

Content, one bounded registry correction, and documentation complete.

This unit corrects five Batch 5 drafts. It is not Project Owner approval, publication, public exposure, deployment, commit, or push.

## 3. Purpose

Resolve the exact blockers recorded by Unit 5AL: one reading-time inconsistency, one misplaced post-CTA paragraph, and 18 formulaic common-mistake items across three articles. The corrections remain limited to those findings and preserve every draft/publication boundary.

## 4. Five articles corrected

### Minor-correction articles

1. **A B2B Social Media Strategy Framework for Complex Buying Journeys** — `b2b-social-media-strategy-framework`
2. **How to Design a Cross-Channel Marketing Dashboard** — `cross-channel-marketing-dashboard`

### Further-revision articles

3. **How to Map Content Marketing to the Customer Journey** — `content-marketing-customer-journey`
4. **How to Plan a Welcome Email Sequence** — `welcome-email-sequence-planning`
5. **How to Map a Marketing Automation Workflow Before Building It** — `marketing-automation-workflow-map`

Exactly these five article files changed.

## 5. Five ready articles preserved

The five articles classified Ready for Project Owner approval by Unit 5AL remained unchanged:

1. **How to Create a Social Media Content Calendar Your Team Can Maintain** — `how-to-create-a-social-media-content-calendar`
2. **TikTok Ads Planning Guide for a First Campaign** — `tiktok-ads-planning-guide`
3. **How to Diagnose and Reduce Ecommerce Cart Abandonment** — `how-to-reduce-ecommerce-cart-abandonment`
4. **Meta CAPI vs Browser Tracking: Roles, Limits, and Planning** — `meta-capi-vs-browser-tracking`
5. **A Lead Generation Measurement Framework From Click to Sales Follow-Up** — `lead-generation-measurement-framework`

Their SHA-256 hashes match the Unit 5AL baseline.

## 6. Unit 5AL blockers

Unit 5AL recorded five bounded blockers:

- The B2B article displayed and planned `10 min read`, while `posts.json` recorded `9 min read`.
- The dashboard article placed one governance paragraph after its contact CTA.
- The customer-journey article contained six mistake items using one interchangeable “Treating ... as optional” formula.
- The welcome-sequence article contained six mistake items using the same formula.
- The automation-workflow article contained six mistake items using one interchangeable “Leaving ... undefined” formula.

No other article-level blocker was brought into this unit.

## 7. Minor corrections applied

### B2B social media strategy framework

- Reconfirmed the approved reading-time estimate as `10 min read`, consistent with the visible article and `article-plan.json`.
- Added explicit machine-readable `reading-time` metadata with a value of `10 minutes`.
- Updated only the matching `posts.json` registry record from `9 min read` to `10 min read`.
- Preserved the title, slug, category, body, visible reading time, draft status, and null public URL.

### Cross-channel marketing dashboard

- Moved the existing data-question and product-feedback paragraph into the dashboard-operations section.
- Positioned it before the mistakes and checklist sections.
- Removed its former post-CTA placement so the contact CTA is again the final editorial section.
- Did not rewrite or expand the article.

## 8. Further revisions applied

### Content marketing customer journey

The six formulaic mistake items were replaced with distinct customer-journey failure modes:

- vague journey-stage labels;
- channel-first planning that ignores customer intent;
- dead-end assets without a useful transition;
- evaluation claims without adequate evidence;
- publication without a distribution path; and
- judging every content role by traffic.

The replacements now address stage ambiguity, intent mismatch, transition design, evidence depth, distribution gaps, and measurement blind spots directly.

### Welcome email sequence

The six formulaic mistake items were replaced with distinct welcome-sequence failures:

- using one path for every signup source;
- burying the entry promise;
- assigning competing jobs to one email;
- choosing delays without subscriber context;
- omitting exits and suppressions; and
- interpreting opens and clicks without downstream or qualitative evidence.

Each item now contains sequence-specific diagnosis and practical corrective logic.

### Marketing automation workflow map

The six formulaic mistake items were replaced with distinct workflow-design failures:

- ambiguous trigger semantics;
- unsafe assumptions when eligibility data is missing;
- unbounded retries or loops;
- branches controlled by stale or unowned fields;
- unstaffed human queues; and
- release without incident or rollback evidence.

Each replacement now describes an automation-specific operating risk and its bounded remedy.

## 9. Patterned prose removed

- Patterned items identified by Unit 5AL: **18**
- Patterned items remaining after correction: **0**
- Interchangeable “Treating ... as optional or leaving it without a named owner” items remaining in the three affected articles: **0**
- Interchangeable “Leaving ... undefined or without accountable ownership” items remaining in the automation article: **0**
- Duplicate substantive body sentences found across the ten Batch 5 articles: **0**

The replacement lists retain the existing visual and editorial system while giving each article topic-specific decision guidance.

## 10. Reading-time correction

The B2B article contains 1,497 validated words and retains its approved `10 min read` editorial estimate. Its visible display and `article-plan.json` already used that value. The inconsistent `posts.json` value was corrected from `9 min read` to `10 min read`.

After correction, visible article, registry, and article-plan reading-time values match for all ten Batch 5 articles. Reading-time mismatches: **0**.

## 11. Registry changes

`blog/data/posts.json` changed only for the B2B record:

- Slug: `b2b-social-media-strategy-framework`
- Before: `"readingTime": "9 min read"`
- After: `"readingTime": "10 min read"`

The record remains:

- status: `draft`
- date: `null`
- public URL: `null`
- featured: `false`

No other registry value or publication state changed.

## 12. Metadata changes

The B2B article received one machine-readable metadata field:

```html
<meta name="reading-time" content="10 minutes" />
```

No title, description, Open Graph field, slug, category, robots directive, or canonical draft behavior changed. Required metadata failures across the selected set: **0**.

## 13. Internal-link changes

None. Existing related-article and in-body links were preserved. Repository validation reports zero broken internal links or local asset references.

No draft link was added to a public listing, sitemap, or RSS feed.

## 14. Verification results

### Scope and registry

- Revised article files: **exactly 5**
- Minor-correction article files revised: **2**
- Further-revision article files revised: **3**
- Ready article files changed: **0**
- Batch 5 drafts: **10 of 10**
- Batch 5 null public URLs: **10 of 10**
- Published registry records: **36**
- Draft registry records: **25**
- Pre-existing `blog/data/article-plan.json` modification: **unchanged**

### Editorial and static validation

- Reading-time mismatches: **0**
- Patterned/repeated prose items remaining: **0**
- Metadata failures: **0**
- Word-count failures: **0**
- Revised article word counts: B2B 1,497; dashboard 1,430; customer journey 1,430; welcome sequence 1,418; automation workflow 1,460
- Duplicate body sentences: **0**
- Broken internal links/assets: **0**
- Duplicate IDs: **0**
- Mobile-navigation markup failures: **0**
- Dashboard governance paragraph occurrences: **1**, inside the article body before related content and CTA
- Selected draft exposure in public listings: **0**
- Selected draft entries in sitemap: **0**
- Selected draft entries in RSS: **0**

### Browser QA

All ten Batch 5 pages were loaded locally at 390px and 1440px, for 20 article/viewport checks.

- Responsive QA: **passed**
- Article-title clipping: **0**
- Horizontal overflow: **0**
- Mobile navigation failures: **0**
- Console errors: **0**
- Failed requests: **0**
- Rendered duplicate IDs: **0**

The repository-wide validator continues to report protected article-plan/registry drift from prior publication work. That pre-existing `blog/data/article-plan.json` condition is outside Unit 5AM and was not modified. The Batch 5 scoped checks use current registry and public artifacts and show zero exposure or feed leaks for these ten drafts.

## 15. Current draft state

All ten Batch 5 publication candidates remain drafts with null public URLs. They remain absent from the Insights listing, category listing, sitemap, and RSS feed. Unit 5AM did not approve or publish any article.

## 16. Remaining approval requirement

The five corrected articles require a narrow final editorial and technical re-review. If that review finds no remaining blocker, the complete Batch 5 set may be presented to the Project Owner for explicit approval.

Correction is not approval. Approval is not publication. Publication is not deployment.

## 17. Allowed next work

- Re-review the exact five Unit 5AM-corrected articles.
- Confirm the complete Batch 5 verdict after that review.
- Request explicit Project Owner approval only if the final review passes.
- Apply a newly documented narrow correction if the re-review finds a specific defect.

## 18. Disallowed next work

- Publishing or assigning public URLs.
- Adding Batch 5 drafts to public listings, sitemap, or RSS.
- Editing the five already-ready articles without a newly documented defect.
- Editing unrelated drafts or any of the 36 published articles.
- Changing the Insights page or implementing featured rotation.
- Modifying the protected pre-existing `blog/data/article-plan.json` change.
- Deploying, committing, or pushing as part of this unit.

## 19. Recommended next unit

**Unit 5AN — Re-review Corrected Batch 5 Articles**

Goal: perform a docs-only final review of the five Unit 5AM corrections, confirm all ten Batch 5 articles remain technically safe drafts, and determine whether the complete batch is ready for Project Owner approval.

## 20. Suggested commit message

`Fix remaining Batch 5 editorial blockers`
