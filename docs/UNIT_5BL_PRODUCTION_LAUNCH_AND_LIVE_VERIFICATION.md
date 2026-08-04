# Unit 5BL — Production Launch and Live Verification

## 1. Title

Unit 5BL — Production Launch and Live Verification.

## 2. Status

Production launch attempted as an evidence-led deployment checkpoint and stopped at the custom-domain transfer gate. The approved `dadastore-v2` build is deployed and current at its GitHub Pages project URL, but `dadastore.co` still serves the legacy repository. No DNS, Pages, repository, `CNAME`, content, or publication setting was changed.

## 3. Purpose

Confirm the approved repository state, identify the active GitHub Pages architecture, publish or confirm the approved commit through that architecture, and verify the actual production domain. This document records both the successful project-Pages deployment and the blocking production-domain mismatch without treating preview availability as production success.

## 4. Project Owner approval

The Project Owner explicitly approved deployment of the current approved DaDaStore website and production verification in Unit 5BL. That approval authorizes this deployment unit; it does not remove the requirement for an observable, reversible custom-domain transfer or permit unrelated article, DNS, or repository changes.

## 5. Pre-deployment state

- Current branch: `main`.
- Local HEAD: `a5793cfe5840ea8905af4009bb9f65d6cba02f17`.
- `origin/main`: `a5793cfe5840ea8905af4009bb9f65d6cba02f17` after `git fetch origin`.
- Ahead/behind: `0 / 0`.
- Latest commit: `a5793cf Add final article structure and related card QA`.
- Merge conflicts: none.
- Staged changes: none.
- Untracked files: none.
- Unit 5 work left uncommitted: none.
- Only local modification: `blog/data/article-plan.json`, the explicitly excluded pre-existing change.
- `git diff --check`: passed; only a line-ending warning was emitted for the excluded file.

The excluded `blog/data/article-plan.json` modification was not staged, committed, pushed, altered, or used as deployment input.

## 6. Deployment architecture

`saadmasoodalam/dadastore-v2` has no repository Pages workflow and no root `CNAME`. Its public project site serves directly at:

`https://saadmasoodalam.github.io/dadastore-v2/`

The absence of a workflow combined with current files appearing from `main` identifies the existing deployment as GitHub Pages branch-source publication from the repository, rather than a custom Actions workflow.

The production custom domain remains attached to the separate legacy repository:

- repository: `saadmasoodalam/dadastore`;
- legacy root `CNAME`: `dadastore.co`;
- legacy `CNAME` blob: `04a5236c3f0d983dfbdc5b7861d9fc9c34fd3a6c`;
- `dadastore-v2` root `CNAME`: absent.

The existing architecture therefore has two distinct public surfaces: the current V3 project Pages site and the legacy custom-domain production site.

## 7. Commit deployed

The Pages project site contains the Unit 5BK artifact from commit `a5793cf`, proving that the current approved HEAD has been published by the existing branch-source system. Ten representative deployed article sources, one from every category, also matched the current local UTF-8 source exactly.

Deployed approved commit:

`a5793cfe5840ea8905af4009bb9f65d6cba02f17`

## 8. Deployment trigger

The current approved commit was already pushed to `origin/main` and automatically published by the existing branch-source GitHub Pages system. No manual workflow dispatch was required, and no new workflow was created.

The automatic project-site deployment did not transfer the `dadastore.co` custom-domain association from the legacy repository.

## 9. Production URL

Intended production URL:

`https://dadastore.co/`

Current approved project Pages URL:

`https://saadmasoodalam.github.io/dadastore-v2/`

`dadastore.co` returns HTTP 200, but its title is `DaDastore.co -`, it does not contain the approved service-section identity, it contains no Insights navigation, and it does not expose the approved contact email. The approved project URL returns the current DaDaStore V3 title, service section, Insights links, and `dadastore.co@gmail.com` contact target.

## 10. Custom-domain verification

DNS remains valid for the legacy GitHub Pages assignment:

- apex `dadastore.co`: GitHub Pages A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`;
- `www.dadastore.co`: CNAME to `saadmasoodalam.github.io`;
- `www`: HTTP 301 to `https://dadastore.co/`;
- redirect loop: none.

The web DNS itself does not need a speculative change. The blocking issue is repository-level custom-domain ownership: the legacy repository still owns the root `CNAME`, while `dadastore-v2` has none.

No custom-domain reassignment was attempted because authenticated Pages-setting capture, transfer sequencing, and operational rollback evidence were not available in this unit. Removing and recreating `CNAME` files without those controls would expand the approved deployment into an unrehearsed cutover.

## 11. HTTPS verification

Both `https://dadastore.co/` and `https://www.dadastore.co/` complete HTTPS requests without certificate errors. The `www` redirect terminates successfully at the apex with no loop. The GitHub Pages project URL also completes HTTPS successfully.

HTTPS transport is healthy, but healthy TLS does not prove that the intended repository is serving the domain.

## 12. Homepage verification

Project Pages homepage:

- HTTP status: 200;
- approved V3 title: present;
- logo/navigation and Services identity: present;
- Insights links: present;
- `dadastore.co@gmail.com`: present in the approved public markup;
- latest approved deployment artifact: present.

Production-domain homepage:

- HTTP status: 200;
- approved V3 identity: absent;
- approved Services section: absent;
- Insights navigation: absent;
- approved public contact email: absent;
- result: failed approved-site identity verification.

## 13. Insights verification

- Project Pages `/blog/`: HTTP 200.
- Production `https://dadastore.co/blog/`: HTTP 404.
- Registry state: 61 published articles and 0 drafts.
- Production representation of the approved Insights library: failed because the route is not deployed on the custom domain.

The preview registry and build remain valid; no claim is made that the 61-article library is live at production.

## 14. Category-directory verification

- Project Pages `/blog/category/`: HTTP 200.
- Production `https://dadastore.co/blog/category/`: HTTP 404.
- Local/current library categories: 10.
- Local/current category counts: 61 total articles with zero known mismatches.
- Production category-directory verification: failed because the route is not deployed on the custom domain.

## 15. Article sample verification

One article from each current category was requested from both public origins:

| Category | Sample slug | Project Pages | `dadastore.co` |
| --- | --- | ---: | ---: |
| Social Media Strategy | `b2b-social-media-strategy-framework` | 200 | 404 |
| Paid Media | `google-ads-vs-meta-ads` | 200 | 404 |
| Ecommerce & CRO | `ecommerce-checkout-friction` | 200 | 404 |
| Tracking & Analytics | `cross-channel-marketing-dashboard` | 200 | 404 |
| Creative Strategy | `creative-brief-for-performance-marketing` | 200 | 404 |
| Content Marketing | `content-marketing-customer-journey` | 200 | 404 |
| Email Marketing | `abandoned-cart-email-strategy` | 200 | 404 |
| Marketing Automation | `crm-lead-nurturing-automation` | 200 | 404 |
| SEO | `ecommerce-seo-foundations` | 200 | 404 |
| Business Growth Systems | `client-acquisition-system-for-service-businesses` | 200 | 404 |

All 10 project-Pages samples matched their current repository source, contained three Related Articles cards, placed the CTA before Related Articles, and contained no checked malformed arrow sequence. All 10 production sample routes failed with 404, so production reading-container, cover, diagram, CTA, Related Articles, orphaned-content, and TOC verification cannot pass.

## 16. Featured-rotation verification

The current repository and deployed project site retain the approved published-only weekly featured system and its eight-week exclusion. The focused repository test remains passed.

Production featured rotation is not available because the production Insights route returns 404. Production featured-rotation verification therefore fails at route availability rather than at selection logic.

## 17. Related-card verification

The 10 project-Pages article samples each rendered the expected three-card source structure after the CTA. Unit 5BK verifies all 183 current cards in the approved build.

Production related-card verification failed because all 10 required production article samples returned 404. No related-card selection was changed.

## 18. Sitemap/feed verification

- Project Pages `/blog/sitemap.xml`: HTTP 200.
- Project Pages `/blog/feed.xml`: HTTP 200.
- Approved sitemap: 63 entries, comprising the blog home, category page, and 61 published articles.
- Approved feed: 61 published items.
- Approved draft entries: 0.
- Production `/blog/sitemap.xml`: HTTP 404.
- Production `/blog/feed.xml`: HTTP 404.

The discovery files are correct in the deployed project build but are not live at the production domain. Sitemap/feed production verification failed.

The legacy production `/robots.txt` returns HTTP 200. The project Pages `/robots.txt` returns 404. No robots file was added or changed because the custom-domain launch itself did not pass.

## 19. Responsive verification

The approved build retains its completed 390px, 768px, 1024px, and 1440px QA evidence on the project Pages architecture. Unit 5BK records zero responsive, overflow, mobile-navigation, card, diagram, or Related Articles failures for that build.

Production responsive verification could not be completed for Insights, Categories, or articles because those production routes return 404. Reusing preview results as production results would violate the core law that local or preview success is not production verification.

## 20. Console and request verification

Observed production request failures in the required sample: 14.

They are:

- Insights: 1 HTTP 404;
- Categories: 1 HTTP 404;
- 10 category article samples: 10 HTTP 404 responses;
- sitemap: 1 HTTP 404;
- feed: 1 HTTP 404.

The apex and `www` HTTPS requests produced no certificate error or redirect loop. A zero-error production browser-console result, zero failed-request result, zero missing-asset result, and zero mixed-content result cannot be claimed for the intended site because the intended application routes are not deployed at that origin.

## 21. Defects found

### Blocking defect: custom domain serves the wrong repository

`dadastore.co` remains attached to the legacy `saadmasoodalam/dadastore` Pages source. The approved `dadastore-v2` site is live only at its project URL.

Consequences:

- approved homepage identity is absent from production;
- Insights and Categories return 404;
- all 10 required article samples return 404;
- production sitemap and feed return 404;
- production responsive, console, asset, article-structure, Related Articles, TOC, and featured-rotation acceptance cannot pass.

### Operational blocker: controlled transfer prerequisites are incomplete

GitHub repository admin permission is available through the authenticated connector, but GitHub CLI is not installed and the available connector does not expose Pages custom-domain settings. Current and rollback Pages settings were therefore not captured, and no operational custom-domain transfer/rollback sequence was exercised.

## 22. Corrections made, if any

None.

No DNS record, Pages setting, custom-domain assignment, `CNAME`, repository file, article, registry record, featured rule, category, sitemap, feed, or production content was changed. The legacy production site remains intact, which is the safest rollback state after the launch gate failed.

## 23. Final production verdict

**LAUNCH FAILED**

The approved commit is deployed successfully to the `dadastore-v2` GitHub Pages project URL, but the production custom domain continues to serve the legacy site. Production acceptance cannot be granted.

## 24. Rollback reference

No rollback action is required because no production cutover occurred.

The preserved rollback baseline is:

- legacy repository unchanged;
- legacy `CNAME` remains `dadastore.co`;
- apex and `www` DNS unchanged;
- legacy production homepage remains reachable;
- `dadastore-v2` project Pages preview remains reachable;
- excluded `blog/data/article-plan.json` modification remains local and untouched.

Detailed transfer and rollback boundaries remain recorded in:

- `docs/UNIT_4L_PRODUCTION_CUTOVER_PLANNING_AND_RISK_CHECKLIST.md`;
- `docs/UNIT_4M_PRODUCTION_CUTOVER_PREFLIGHT.md`;
- `docs/UNIT_4M_FIX_AUTHENTICATED_PAGES_DNS_ACCESS_AND_ROLLBACK_OWNERSHIP_CONFIRMATION.md`.

## 25. Current boundaries

- Preview deployment is confirmed; production-domain cutover is not complete.
- No article rewrite, title/slug/URL change, publication-state change, cover change, category change, featured change, related-card change, or discovery-file change is authorized by this result.
- No DNS or mail record should change without a confirmed need and captured rollback value.
- `blog/data/article-plan.json` remains excluded.
- Auto Blogger work remains outside this unit.
- A later transfer must preserve the legacy source until the new origin passes production verification and the approved observation window closes.

## 26. Recommended next phase

Complete a controlled custom-domain ownership transfer with authenticated Pages-setting visibility, captured before-state evidence, named rollback ownership, and an explicit observation window. The already-correct GitHub Pages DNS records should be preserved unless the authenticated preflight finds a concrete mismatch.

Recommended next unit:

**Unit 5BM — Authenticated Custom-Domain Transfer and Production Re-Verification**

Goal: capture both repositories' Pages source/custom-domain/HTTPS settings, confirm transfer and rollback operators, move `dadastore.co` from the legacy repository to `dadastore-v2` through the existing branch-source Pages system, and repeat the complete production test matrix. Stop without changing anything if any rollback prerequisite remains unresolved.

## 27. Test record

- `git fetch origin`: completed.
- Branch: `main`.
- Local/remote divergence: `0 / 0`.
- Deployed commit: `a5793cfe5840ea8905af4009bb9f65d6cba02f17`.
- Approved HEAD artifact available on project Pages: passed.
- Only permitted local modification: `blog/data/article-plan.json`.
- Staged Unit 5 work: none.
- Untracked production files: none.
- GitHub repository admin permission: confirmed for both `dadastore` and `dadastore-v2`.
- Legacy `CNAME`: confirmed as `dadastore.co`.
- New repository `CNAME`: absent.
- Apex GitHub Pages A records: confirmed.
- `www` CNAME and apex redirect: confirmed.
- HTTPS certificate/request failures on apex/`www`: 0.
- Redirect loops: 0.
- Project Pages homepage: 200.
- Production homepage: 200, but approved-site identity failed.
- Project Pages Insights/Categories: 200 / 200.
- Production Insights/Categories: 404 / 404.
- Published registry articles: 61.
- Draft registry articles: 0.
- Active categories: 10.
- Project Pages article samples tested: 10; all 200 and source-matched.
- Production article samples tested: 10; all 404.
- Project Pages related cards in samples: 30; count failures 0.
- Project Pages CTA-before-Related placement failures: 0.
- Checked malformed arrow sequences in project samples: 0.
- Production sitemap/feed: 404 / 404.
- Required production request failures observed: 14.
- Production responsive verification: blocked by unavailable routes.
- Production console/mixed-content/full-asset verification: not claimable after route failure.
- `git diff --check`: passed before documentation; the excluded file emitted only a line-ending warning.

## 28. Suggested commit message

`Record failed production launch verification`
