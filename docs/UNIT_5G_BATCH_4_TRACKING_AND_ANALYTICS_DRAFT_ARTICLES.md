# Unit 5G — Batch 4 Tracking and Analytics Draft Articles

## Status

Complete as a draft-content unit. Ten Batch 4 articles were generated locally. No article was published, deployed, committed, or pushed.

## Purpose

Create the Tracking & Analytics batch defined by the approved article plan while preserving draft isolation, the V3 editorial system, practical content boundaries, and the existing published article.

## Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `blog/README.md`
- `blog/data/article-plan.json`
- `blog/data/editorial-rules.json`
- the existing V3 article templates
- the existing Batch 1, Batch 2, and Batch 3 articles

## Batch boundary

Exactly the ten records identified as Batch 4 (`B4-01` through `B4-10`) were generated. Each has:

- one local `blog/<slug>/index.html` page;
- category `Tracking & Analytics`;
- author `DaDaStore`;
- a draft label and `noindex, nofollow` directive;
- plan-aligned metadata, reading time, and related links;
- practical H2/H3 sections, common mistakes, an actionable checklist, and a DaDaStore contact CTA;
- draft status with a null public URL in `blog/data/posts.json`.

The public blog index and category grid were not changed.

## Editorial composition and module map

Each article uses exactly one topic-specific module:

| Record | Article | Module |
| --- | --- | --- |
| B4-01 | GA4 ecommerce measurement plan | Tracking architecture map |
| B4-02 | Meta Pixel planning and validation | Pixel troubleshooting flow |
| B4-03 | Meta CAPI vs browser tracking | Event taxonomy table |
| B4-04 | Marketing attribution models | Attribution decision tree |
| B4-05 | UTM governance | UTM framework |
| B4-06 | Cross-channel dashboard | Dashboard planning grid |
| B4-07 | Marketing tracking audit | GA4/tracking audit matrix |
| B4-08 | Reporting discrepancies | Reporting interpretation framework |
| B4-09 | Privacy-conscious measurement | Measurement maturity ladder |
| B4-10 | Lead-generation measurement | Conversion-event checklist |

The table/matrix presentation is the only visual family used twice. Every other module family is used once. Openings, section order, examples, checklist language, and CTA wording vary by topic.

## Content guardrails

The drafts contain no fake statistics, guarantees, invented client stories, private proof data, unsupported platform claims, copied passages, or references to content-generation tooling. Measurement limitations, consent boundaries, attribution uncertainty, source ownership, and validation responsibilities are stated directly.

## Data updates

- The ten Batch 4 plan records are marked `generated: true`.
- Their plan status remains `draft`.
- Ten matching draft records were added to `blog/data/posts.json`.
- Every new post has `date: null`, `status: "draft"`, and `url: null`.
- Draft records are not rendered by the public grids.

## Files changed

- Ten new article pages under `blog/`
- `blog/data/posts.json`
- `blog/data/article-plan.json`
- `docs/UNIT_5G_BATCH_4_TRACKING_AND_ANALYTICS_DRAFT_ARTICLES.md`

No main-site implementation file or shared blog asset was changed.

## Verification record

- Batch 4 article folders: 10
- Generated Batch 4 plan records: 10
- Article word-count target: 1,400–2,200 words
- Creative modules: exactly one per article
- Maximum visual-family reuse: two
- Draft status and null URLs: preserved
- Public-grid visibility: hidden
- Duplicate titles/slugs: none
- Placeholder text: none
- Existing published article: unchanged
- Relative internal links and local assets: validated
- Responsive samples: checked at 375px, 390px, and 1440px
- Horizontal overflow, console errors, and failed requests: checked during local browser QA
- `git diff --check`: required before handoff

## Recommended next unit

**Unit 5G-QA — Batch 4 Browser Sampling and Project Owner Review**

Record focused owner review of representative Tracking & Analytics drafts and their distinct visual modules before any publication decision.

## Explicitly not next

- publishing Batch 4;
- exposing draft URLs on blog grids;
- production deployment;
- changing the main site;
- committing or pushing without Project Owner approval;
- starting a later batch before this batch is reviewed.
