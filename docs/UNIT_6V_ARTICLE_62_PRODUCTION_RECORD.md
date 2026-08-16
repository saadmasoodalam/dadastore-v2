# Unit 6V — Article 62 Production Record

## Status

One owner-authorized Article 62 canary package passed all mandatory pre-publication gates on the fresh PKT quota date `2026-08-17`. This record is committed atomically with the publication files. Authoritative deployment and live-verification results are retained in GitHub Pages workflow history and the private Unit 6V audit record after the immutable publication boundary.

## Purpose

Record the bounded production transfer for exactly one canary article after Unit 6U restored GitHub Pages deployment health.

## Production baseline

- Production head before transfer: `68deda871b6b720b50b6507c52a8c9b7582b5f43`
- Published articles before transfer: 61
- Strict UTF-8 validation: passed
- Latest Pages workflow before transfer: passed
- `blog/data/article-plan.json`: protected and unchanged

## Canary identity

- Candidate ID: `unit-6m-candidate-001-r2-2026-08-17`
- Title: Marketing Automation Governance: How to Control Changes, QA, and Ownership
- Slug: `marketing-automation-governance-how-to-control-changes-qa-and-ownership`
- Category: Marketing Automation
- Word count: 2,009
- Raw quality score: 100
- Final editorial score: 100
- Mandatory gate status: passed
- Exact duplicate paragraph instances: 0
- Near-duplicate failures: 0
- Sources reviewed: 1

## Safety verification

- Unsupported claims: 0
- Unknown statements: 0
- Invalid source mappings: 0
- Invented statistics: 0
- Fabricated case studies: 0
- Private client disclosures: 0
- Guaranteed-result claims: 0
- Paid API calls: 0
- Cloud AI calls: 0
- LLM calls: 0

## Production transfer boundary

Only the new article, SVG cover, published registry/index outputs, category directory, sitemap, feed, and this Unit 6V record are included. CNAME, workflows, domain configuration, existing article content, and `blog/data/article-plan.json` are excluded.

## Quota boundary

- Candidate quota consumed: true
- Publication quota is consumed at creation of the atomic publication commit.
- No second canary is permitted on `2026-08-17` regardless of deployment outcome.

## Rollback

If GitHub Pages deployment or any mandatory live gate fails after bounded verification, revert only the Unit 6V publication commit, push the revert, verify restoration to 61 articles, and quarantine the candidate. Do not reset or rewrite history.

## Scheduler state

- Scheduler installed: false
- Scheduled production enabled: false
- Autonomous activation approved: false

## Publication commit

Commit subject: `Publish article: Marketing Automation Governance: How to Control Changes, QA, and Ownership`
