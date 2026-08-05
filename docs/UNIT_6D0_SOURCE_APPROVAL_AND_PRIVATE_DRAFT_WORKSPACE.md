# Unit 6D0 — Source Approval and Private Draft Workspace

## 1. Title

Unit 6D0 — Complete Brief Source Review and Establish Private Draft Workspace.

## 2. Status

Source and editorial review completed for all five `batch-001` briefs. A private companion repository was created, committed, pushed, and verified as isolated from GitHub Pages. No article draft was generated.

## 3. Purpose

Resolve the two blockers recorded before controlled draft generation: incomplete brief-level source approval and the absence of a private, non-Pages draft workspace.

## 4. Unit 6D blockers

Before this unit, four moderate-risk briefs were `under_review`, one low-risk brief was `draft`, and Unit 6C required source/editorial review before drafting. The production repository is served from `main:/`; tracked draft files inside it could become publicly reachable even when omitted from navigation.

## 5. Batch reviewed

Five briefs in `batch-001` were reviewed:

1. `brief-topic-20260806-profitmodel-v01` — ecommerce contribution-margin model;
2. `brief-topic-20260806-budgetshift-v01` — paid-media budget reallocation;
3. `brief-topic-20260806-retention-v01` — ecommerce customer-retention operating plan;
4. `brief-topic-20260806-autogovern-v01` — marketing-automation governance;
5. `brief-topic-20260806-channelrisk-v01` — single-platform acquisition dependence.

All corresponding topics remain `brief_generated`. No topic advanced to `draft_generated`, `published`, or another publication state.

## 6. Brief risk summary

| Brief | Risk | Previous state | Review result | Draft approval state |
| --- | --- | --- | --- | --- |
| Contribution margin model | Moderate | `under_review` | Approved with constraints | `approved_for_draft_with_constraints` |
| Paid-media budget reallocation | Moderate | `under_review` | Approved with constraints | `approved_for_draft_with_constraints` |
| Customer-retention plan | Moderate | `under_review` | Approved with constraints | `approved_for_draft_with_constraints` |
| Automation governance | Moderate | `under_review` | Approved with constraints | `approved_for_draft_with_constraints` |
| Channel-dependence plan | Low | `draft` | Approved for draft | `approved_for_draft` |

None of the briefs proposes an approved performance statistic, client result, quotation, study result, pricing claim, or guaranteed outcome. Legal, provider-policy, accounting, and forecast statements remain bounded as described below.

## 7. Source-review methodology

Each brief's factual question, source requirement, prohibited claims, time sensitivity, and risk class were inspected. Sources were opened and reviewed on 2026-08-06. A source supports only the claim recorded beside it; it does not approve broader claims. Unsupported or overly broad claims were retained as explicit exclusions rather than inferred from the sources.

## 8. Source hierarchy

The review used official government, standards, and platform documentation. No scraped summary, generated URL, invented citation, unattributed statistic, client evidence, or unreviewed source was accepted. Where a source provides only an analogy or planning foundation, that limitation is explicit.

## 9. Sources reviewed

Six sources were reviewed:

1. **Plan your business — Break-even point**, U.S. Small Business Administration: https://www.sba.gov/counseling/plan-your-business/#breakeven-point
   - Supports the reviewed contribution-margin and break-even foundation.
   - Does not provide ecommerce-specific accounting advice or universal cost classifications.
2. **About Performance Planner**, Google Ads Help: https://support.google.com/google-ads/answer/9230124?hl=en
   - Supports the existence of modeled budget scenarios for eligible Google Ads campaigns.
   - Does not prove incrementality, guarantee results, or describe other platforms.
3. **CAN-SPAM Act: A Compliance Guide for Business**, U.S. Federal Trade Commission: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
   - Supports current U.S. federal commercial-email requirements described by the FTC.
   - Is not legal advice and does not resolve other jurisdictions.
4. **Email sender guidelines**, Google Gmail Help: https://support.google.com/mail/answer/81126?hl=en
   - Supports current Gmail sender, authentication, subscription, unsubscribe, and monitoring requirements.
   - Is Gmail-specific and time-sensitive.
5. **The NIST Cybersecurity Framework (CSF) 2.0**, National Institute of Standards and Technology: https://doi.org/10.6028/NIST.CSWP.29
   - Supports governance concepts including roles, responsibilities, policy, oversight, prioritization, and recurring review.
   - Is a cybersecurity framework, not a marketing-automation standard.
6. **Manage your business — Marketing and sales**, U.S. Small Business Administration: https://www.sba.gov/counseling/manage-your-business/#marketing-and-sales
   - Supports documenting marketing channels, costs, and a consistent review process.
   - Does not prove that diversification improves acquisition performance.

Every source entry in `blog/data/source-review-registry.json` records title, publisher, URL, access date, supported claim, and limitation.

## 10. Supported claims

- Contribution-margin inputs can support bounded break-even reasoning.
- Google Ads provides modeled planning scenarios for eligible campaigns and selected goals.
- Retention-email operations should account for applicable sender identification, opt-out, authentication, recipient expectation, and monitoring requirements.
- Governance can define roles, responsibility, policy, oversight, risk priorities, and review cycles.
- A marketing plan can document channels, costs, and consistent measurement.

## 11. Unsupported claims

- Universal ecommerce cost classifications, profit thresholds, benchmarks, or guaranteed profitable decisions.
- Forecasts as causal or incremental proof; cross-platform equivalence; guaranteed media returns.
- Universal legal compliance, deliverability, retention, cadence, revenue, or repeat-purchase claims.
- Claims that NIST mandates a marketing-automation process or that governance guarantees security or compliance.
- Claims that adding channels necessarily lowers acquisition cost, improves growth, or creates an optimal mix.

No unsupported numerical claim was approved.

## 12. Drafting constraints

All examples must be synthetic and label assumptions. Moderate-risk facts must remain tied to the reviewed source and its limitation. Time-sensitive platform or legal details must be rechecked before publication. Drafts must not provide accounting, financial, tax, or legal advice; generalize provider-specific features; state benchmarks; imply causal proof; disclose client information; or promise outcomes. Platform-concentration guidance must remain a staged capacity-and-risk framework rather than a universal diversification prescription.

## 13. Brief approval results

- Approved for drafting: 1.
- Approved for drafting with constraints: 4.
- Blocked pending source review: 0.
- Rejected: 0.
- Unresolved manual reviews: 0.

The source-review fields were added to each brief, and the schema now recognizes those optional post-generation review fields and the two approved-for-draft states. Approval permits private draft generation only. It is not editorial approval, publication approval, or deployment approval.

## 14. Topic queue updates

Each `batch-001` topic retains `status: brief_generated`. Each now records `editorial_review_status`, `source_review_status`, the 2026-08-06 review timestamp, and `Project Owner — Unit 6D0` as the authorizing workflow owner. No publication-related field changed.

## 15. Why production-repository draft storage is unsafe

`dadastore-v2` uses branch-based GitHub Pages with `main:/` as its source and `dadastore.co` as its production domain. A tracked file under `content/drafts` could be served directly from the repository-root artifact. `noindex`, absent navigation links, or an unadvertised URL would not make it private. Therefore this unit created no `content/drafts` directory in `dadastore-v2`.

## 16. Private workspace architecture

The isolated workspace is a sibling checkout:

`C:\Users\sunny\OneDrive\Documents\GitHub\dadastore-content-workbench`

It contains `README.md`, `.gitignore`, `docs/`, `data/`, `drafts/`, and `scripts/`. Its initial controlled data is limited to the reviewed briefs, source-review registry, and editorial rules. Draft transfer to production requires a separately authorized publication workflow.

## 17. Private repository details

- Repository: `saadmasoodalam/dadastore-content-workbench`
- Clone URL: `https://github.com/saadmasoodalam/dadastore-content-workbench.git`
- Visibility: private
- Default branch: `main`
- Production website: none
- Custom domain: none

## 18. GitHub Pages isolation verification

GitHub API verification returned Pages disabled. The repository contains no `CNAME`, `.github/workflows` directory, Pages workflow, deployment workflow, homepage URL, or production-domain configuration. Public draft exposure is zero.

## 19. Snapshot and traceability model

- Source repository: `saadmasoodalam/dadastore-v2`
- Source baseline commit: `f2b3ea4`
- Batch: `batch-001`
- Snapshot date: 2026-08-06
- Reviewed briefs SHA-256: `b43551b058639c1ca77e74b1b7dbae8465d6f996aebc40e8fb99f1b0f2803a9b`
- Source-review registry SHA-256: `8416afaac701fb2a9a34e41520ad7f3105a9768e44963c0eb8921ae2666692e6`
- Editorial rules SHA-256: `1cb817a830b54c6c80cc719cc41176b5a2e41e1549a9a287564f8a55a5d701ea`

The source commit records the production-repository baseline; the hashes identify the reviewed Unit 6D0 snapshots derived from its uncommitted review changes.

## 20. Production boundaries

No draft, public article, article status, sitemap entry, feed item, category, featured record, Related Articles card, domain setting, Pages setting, or deployment artifact changed. `blog/data/article-plan.json` remains an unrelated pre-existing worktree modification and was not touched.

## 21. Files changed in dadastore-v2

- `blog/data/article-briefs.json`
- `blog/data/topic-queue.json`
- `blog/data/article-brief-schema.json`
- `blog/data/source-review-registry.json` (added)
- `docs/UNIT_6D0_SOURCE_APPROVAL_AND_PRIVATE_DRAFT_WORKSPACE.md` (added)

## 22. Files created in private workspace

- `.gitignore`
- `README.md`
- `data/article-briefs.json`
- `data/editorial-rules.json`
- `data/source-review-registry.json`
- `docs/.gitkeep`
- `drafts/.gitkeep`
- `scripts/.gitkeep`

## 23. Private repository commit

Initial private workspace commit: `161ff7c` — **Initial private draft workspace**. It was pushed to `origin/main`. No production-repository change was committed or pushed.

## 24. Rollback procedure

Before production changes are committed, restore only the four modified Unit 6D0 data/schema files and remove the two new Unit 6D0 files after owner confirmation. Do not touch `blog/data/article-plan.json`. For the private repository, preserve the repository and history; use a new revert/removal commit if the snapshots must be withdrawn. Deleting the private repository requires separate explicit approval.

## 25. Unit 6D readiness

Unit 6D may operate only in `dadastore-content-workbench`, process exactly the five reviewed `batch-001` briefs, enforce every per-brief drafting constraint, remain draft-only, and avoid all writes to public `dadastore-v2` article paths or registries.

## 26. Final verdict

**UNIT 6D GUARDRAILS RESOLVED**

The five briefs have recorded source decisions and the private draft workspace is isolated and traceable. This verdict authorizes the next controlled private drafting unit only; it does not authorize publication or deployment.

## 27. Recommended next unit

**Unit 6D — Controlled Draft Article Generator in the Private Workbench**

Implement deterministic draft generation and QA inside `dadastore-content-workbench`, using its reviewed snapshots and writing drafts only below its private `drafts/batch-001/` path.

## 28. Suggested production-repository commit message

`Approve first brief batch and establish private draft workspace`
