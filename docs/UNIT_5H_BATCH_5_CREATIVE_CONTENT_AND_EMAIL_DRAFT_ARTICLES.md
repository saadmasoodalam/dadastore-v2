# Unit 5H — Batch 5 Creative, Content, and Email Draft Articles

## Status

Complete as a draft-only editorial unit. Ten Batch 5 articles were generated locally. None were published, deployed, committed, or pushed.

## Purpose

Create the Creative Strategy, Content Marketing, and Email Marketing drafts defined by Batch 5 while preserving public-grid isolation, the approved V3 editorial system, and the existing published article.

## Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `blog/README.md`
- `blog/data/article-plan.json`
- `blog/data/editorial-rules.json`
- the approved V3 article system
- existing draft batches and the published article

## Batch boundary

Exactly records `B5-01` through `B5-10` were generated. Each article includes complete metadata, author DaDaStore, its planned category and reading time, a draft label, `noindex, nofollow`, practical H2/H3 content, common mistakes, an actionable checklist, related links, and a DaDaStore contact CTA.

The public blog index and category page were not modified. Every new registry record retains `status: "draft"`, `date: null`, and `url: null`.

## Creative-module inventory

| Record | Article focus | Visual module | V3 visual family |
| --- | --- | --- | --- |
| B5-01 | Paid-ad creative testing | Testing board | Audit grid |
| B5-02 | Ad hooks | Messaging framework | Layer system |
| B5-03 | Performance creative brief | Campaign blueprint | Framework cards |
| B5-04 | Creative fatigue | Comparison matrix | Split comparison |
| B5-05 | Customer-journey content | Content funnel | Funnel diagram |
| B5-06 | Content repurposing | Lifecycle diagram | Timeline |
| B5-07 | Editorial planning | Editorial calendar | Process map |
| B5-08 | Welcome email | Email sequence map | Timeline |
| B5-09 | Abandoned cart email | Campaign blueprint | Channel map |
| B5-10 | Lifecycle segmentation | Checklist system | Checklist board |

Nine visual families are used. Timeline is the only family used twice; all others are used once. Each article has exactly one visual module, and each module supports the article’s decision process rather than acting as decoration.

## Editorial variation

The batch varies its opening situations, heading sequence, operational examples, diagnostic emphasis, checklist content, visual placement, and CTA wording. Creative Strategy articles emphasize hypotheses, briefs, evidence, and diagnosis. Content Marketing articles emphasize journey roles, source integrity, workflows, distribution, and maintenance. Email Marketing articles emphasize eligibility, consent, sequence behavior, suppression, lifecycle rules, and responsible measurement.

## Guardrails

The drafts contain no fake statistics, guaranteed outcomes, invented client stories, private proof data, copied content, unsupported platform claims, or references to content-generation tooling. Claims, attribution, consent, and evidence limitations are qualified where relevant.

## Files changed

- ten new `blog/<slug>/index.html` article pages;
- `blog/data/article-plan.json`;
- `blog/data/posts.json`;
- `docs/UNIT_5H_BATCH_5_CREATIVE_CONTENT_AND_EMAIL_DRAFT_ARTICLES.md`.

No main-site implementation file or shared blog asset was changed.

## Verification record

- Batch 5 folders and generated plan records: 10
- Word-count boundary: 1,400–2,200 words per article
- Creative modules: exactly one per article
- Maximum visual-family reuse: two
- Draft/null URL state: preserved
- Public-grid visibility: hidden
- Duplicate titles/slugs: none
- Relative links and assets: validated
- Published article: unchanged
- Responsive browser samples: checked at 375px, 390px, and 1440px
- Horizontal overflow, console errors, and failed requests: checked locally
- `git diff --check`: required before handoff

## Recommended next unit

**Unit 5H-QA — Batch 5 Browser Sampling and Project Owner Review**

Review representative Creative Strategy, Content Marketing, and Email Marketing drafts before any publication decision.

## Explicitly not next

- publishing or exposing Batch 5 drafts;
- production deployment;
- modifying the main site;
- committing or pushing without Project Owner approval;
- replacing the approved static V3 article system.
