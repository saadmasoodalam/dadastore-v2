# Unit 5BM — Production Domain and GitHub Pages Routing Correction

## 1. Title

Unit 5BM — Production Domain and GitHub Pages Routing Correction.

## 2. Status

Completed production-routing correction, controlled GitHub Pages custom-domain migration, live production verification, and rollback recording.

## 3. Purpose

Move the approved DaDaStore V2 static site from its GitHub Pages project URL to `https://dadastore.co/`, without deleting or rewriting the legacy repository, while preserving an explicit rollback path and verifying the final root-domain routes.

## 4. Unit 5BL failure summary

Unit 5BL confirmed that the approved V2 artifact was available at `https://saadmasoodalam.github.io/dadastore-v2/`, but `dadastore.co` still served the legacy `saadmasoodalam/dadastore` repository. The production homepage therefore showed the legacy site, while Insights, Categories, the sampled articles, sitemap, and feed returned 404.

No DNS defect was found. The production failure was a repository-level Pages ownership and routing mismatch.

## 5. Previous production architecture

- Apex DNS already used the four standard GitHub Pages A records.
- `www.dadastore.co` was a CNAME to `saadmasoodalam.github.io` and redirected to the apex.
- `saadmasoodalam/dadastore` deployed from `main` at `/` using legacy branch-based Pages and claimed `dadastore.co`.
- `saadmasoodalam/dadastore-v2` deployed from `main` at `/` using legacy branch-based Pages and had no custom domain.
- V2's public preview URL was `https://saadmasoodalam.github.io/dadastore-v2/`.
- No GitHub Actions Pages workflow controlled either deployment.

## 6. Legacy repository ownership

Before migration, the legacy repository owned the production domain through its root `CNAME`:

- repository: `saadmasoodalam/dadastore`;
- branch/folder: `main` and `/`;
- custom domain: `dadastore.co`;
- HTTPS enforcement: enabled;
- preserved pre-migration commit: `c18ed92c5a28d215007f9e86941518632019b40f`;
- preserved `CNAME` blob: `04a5236c3f0d983dfbdc5b7861d9fc9c34fd3a6c`;
- migration release commit: `81e605cd2e83e412f806c6341ab71f1d979fb541`.

The repository, branch, prior commit, and history remain available. The migration removed only the tracked legacy `CNAME` in a new commit; it did not delete the legacy site or rewrite history.

## 7. V2 repository deployment architecture

`saadmasoodalam/dadastore-v2` continues to use GitHub Pages branch-source publication from `main` at `/`. The Pages API reports `build_type: legacy`; no workflow or artifact-folder change was required.

The routing-ready artifact was first deployed without a custom domain at commit:

`a6fb9ba63e20a5f65f335b03265dcf2df8d23dbb`

The root `CNAME` was then added and deployed at:

`5112ab108b9cc670a0228ce180bf6fe31bf47ac0`

The final Pages API state reports:

- public URL: `https://dadastore.co/`;
- custom domain: `dadastore.co`;
- source: `main` and `/`;
- HTTPS enforced: true.

## 8. Confirmed 404 root cause

The exact cause was the combination of:

1. `dadastore.co` was assigned to the legacy repository, not V2.
2. V2 was available only as a GitHub project site under `/dadastore-v2/`.
3. The approved site uses root production routes such as `/blog/`, which require the custom-domain root or a separate project-base strategy.
4. Production canonical/discovery metadata was not uniformly ready: 55 article pages still named the project host, six older article pages used relative `og:url` values and lacked canonicals, the sitemap/feed used the project host, and the index generator defaulted to the project URL.

The V2 repository itself already contained the homepage, blog index, category directory, all 61 article folders, sitemap, feed, public assets, and runtime scripts. No artifact-exclusion or case-sensitive path defect was found.

## 9. Alternatives evaluated

### A. Transfer the custom domain to V2

Selected. This retains both repositories and their histories, keeps the approved V2 repository as the production source, supports root routes, and provides a direct rollback by restoring the legacy `CNAME`.

### B. Replace the legacy repository contents

Rejected as more destructive. It would duplicate or overwrite deployment contents in the legacy repository and create a second source of truth.

### C. Introduce a dedicated production repository or workflow

Rejected as unnecessary. The existing V2 branch-based Pages deployment already built the complete artifact successfully, so a new repository or workflow would add operational complexity without resolving a current build limitation.

## 10. Selected migration strategy

Strategy A was used in this order:

1. Correct production URL metadata locally.
2. Run repository guardrails and verify no article-body change.
3. Commit and deploy the corrected V2 artifact without `CNAME`.
4. Wait for GitHub Pages to report the artifact commit as built.
5. Verify representative project-site routes and assets.
6. Remove the legacy `CNAME` in a normal, reversible commit.
7. Confirm the legacy Pages API reports no custom domain.
8. Commit and deploy the V2 root `CNAME`.
9. Wait for the V2 Pages build and confirm exclusive domain ownership.
10. Run the complete production route and browser verification.

This sequence kept the legacy deployment active until the replacement artifact was ready and limited the ownership transition to the shortest practical interval.

## 11. Legacy rollback reference

Primary rollback baseline:

`saadmasoodalam/dadastore@c18ed92c5a28d215007f9e86941518632019b40f`

That commit contains the previous production site and the `dadastore.co` CNAME. The exact prior CNAME value is `dadastore.co`, and its blob is `04a5236c3f0d983dfbdc5b7861d9fc9c34fd3a6c`.

## 12. Deployment artifact correction

The deployed V2 artifact contains and serves:

- root homepage;
- `blog/index.html`;
- `blog/category/index.html`;
- 61 published article directories;
- `blog/sitemap.xml`;
- `blog/feed.xml`;
- root visual assets;
- blog CSS and JavaScript;
- article covers and category graphics;
- root `CNAME`.

No workflow, build dependency, package, publication state, article body, title, slug, visual design, featured rule, related-card rule, or diagram was changed.

## 13. Base-path correction

Production metadata now consistently uses `https://dadastore.co`:

- all 61 articles have one absolute production canonical;
- all 61 articles have one absolute production `og:url`;
- Insights and Categories have absolute production canonicals and `og:url` values;
- the sitemap has 63 production-domain entries;
- the feed has 61 production-domain article items;
- `scripts/build-blog-index.mjs` defaults to `https://dadastore.co/blog/`.

Root-relative public navigation is intentionally supported by the final root-domain deployment. The project URL is no longer the production canonical.

## 14. CNAME and domain ownership

The final root `CNAME` in V2 contains exactly:

`dadastore.co`

Authenticated Pages API verification after deployment:

- V2 custom domain: `dadastore.co`;
- legacy custom domain: none;
- ownership conflicts: 0;
- V2 build commit: `5112ab108b9cc670a0228ce180bf6fe31bf47ac0`;
- V2 build status: built.

## 15. DNS boundaries

No DNS record was changed.

Verified web-routing records remain:

- `185.199.108.153`;
- `185.199.109.153`;
- `185.199.110.153`;
- `185.199.111.153`;
- `www.dadastore.co` CNAME: `saadmasoodalam.github.io`.

Mail records and unrelated subdomains were not inspected for modification, edited, or transferred.

## 16. HTTPS and redirect behavior

- V2 Pages HTTPS enforcement: enabled.
- `https://dadastore.co/`: valid HTTPS response.
- `http://dadastore.co/`: one 301 redirect to HTTPS.
- `https://www.dadastore.co/`: one redirect to the apex and final HTTP 200.
- redirect loops: 0.
- mixed-content references found in public HTML/CSS/JS: 0; the sitemap namespace is the only expected `http://` declaration.
- project URL is absent from production blog metadata and generated discovery files.

## 17. Routes verified

Live HTTP 200 verification covered:

- `/`;
- `/blog/`;
- `/blog/category/`;
- all 61 `/blog/<slug>/` routes;
- `/blog/sitemap.xml`;
- `/blog/feed.xml`;
- `/assets/css/style.css`;
- `/assets/js/main.js`;
- `/blog/assets/blog.css`;
- `/blog/assets/blog.js`;
- representative article cover assets.

Total live URLs checked in the route matrix: 71. Failures: 0.

## 18. Production article sample

Browser QA sampled one published article from each active category:

| Category | Slug |
| --- | --- |
| Social Media Strategy | `how-to-create-a-social-media-marketing-plan-that-drives-results` |
| Paid Media | `how-to-structure-meta-ads-campaigns` |
| Ecommerce & CRO | `shopify-cro-audit-checklist` |
| Tracking & Analytics | `ga4-ecommerce-measurement-plan` |
| Creative Strategy | `creative-testing-framework-for-paid-ads` |
| Content Marketing | `content-marketing-customer-journey` |
| Email Marketing | `welcome-email-sequence-planning` |
| Marketing Automation | `how-to-choose-marketing-automation-software` |
| SEO | `seo-topic-clusters-customer-questions` |
| Business Growth Systems | `client-acquisition-system-for-service-businesses` |

All 10 returned 200, displayed three Related Articles cards, retained CTA-before-Related ordering, loaded their images, and showed no diagram clipping, console errors, failed requests, or horizontal overflow in the tested matrix.

## 19. Sitemap/feed verification

- published registry records: 61;
- draft registry records: 0;
- sitemap entries: 63, comprising Insights, Categories, and 61 articles;
- sitemap draft leaks: 0;
- feed items: 61;
- feed draft leaks: 0;
- production sitemap status: 200;
- production feed status: 200;
- all generated links use `https://dadastore.co`.

## 20. Responsive verification

Live Edge DevTools QA covered the homepage, Insights, Categories, and the 10 category article samples at:

- 390px;
- 768px;
- 1024px;
- 1440px.

The 52 page/viewport scenarios produced:

- responsive failures: 0;
- horizontal-overflow failures: 0;
- broken-image failures: 0;
- mobile-navigation failures: 0;
- related-card failures: 0;
- CTA-order failures: 0;
- diagram-clipping failures: 0;
- console errors: 0;
- failed requests: 0.

## 21. Defects found

Pre-cutover defects found and corrected:

- legacy repository custom-domain ownership;
- absent V2 `CNAME`;
- project-host canonical/discovery URLs;
- relative `og:url` metadata and missing canonicals on six older pages;
- project-host default in the index generator.

A duplicate-canonical insertion affecting those six older pages was detected by the pre-deployment audit and corrected before the routing artifact was committed. Final canonical failures: 0. No production blocker remains.

The first browser harness pass counted intentionally deferred lazy images as failures. Network failures were zero; a corrected pass scrolled the pages, waited for lazy assets, and confirmed zero actual broken images. This was a test-harness defect, not a site defect.

## 22. Corrections made

- deployed production-domain canonical and Open Graph URLs;
- regenerated sitemap and feed with the production host;
- changed the index generator's default public base;
- added the V2 root `CNAME`;
- removed the legacy root `CNAME` in a reversible commit;
- transferred exclusive Pages custom-domain ownership to V2;
- retained existing DNS, email boundaries, content, design, and publication state.

## 23. Final production verdict

**PRODUCTION LAUNCH VERIFIED**

The approved V2 site is now served from `https://dadastore.co/`, all required routes and assets pass, HTTPS and redirects are healthy, the full published article registry is reachable, and the sampled responsive/runtime matrix has no failures.

## 24. Rollback procedure

If rollback becomes necessary:

1. Record the current V2 production commit and observed defect.
2. Remove V2's `CNAME` in a normal commit and push `main`.
3. Wait until the V2 Pages API reports `cname: null`.
4. Restore a root `CNAME` containing `dadastore.co` to `saadmasoodalam/dadastore` from the preserved baseline `c18ed92c5a28d215007f9e86941518632019b40f`, using a new commit rather than rewriting history.
5. Wait until the legacy Pages API reports `cname: dadastore.co` and HTTPS enforcement.
6. Verify the apex, `www`, certificate, redirect, and legacy homepage.
7. Do not change the existing web DNS or any mail record unless a separately confirmed DNS defect requires it.

The legacy repository must not be deleted. The V2 routing commits can remain in history even if the custom domain is rolled back.

## 25. Current boundaries

- Production routing is complete; this unit does not authorize unrelated site changes.
- Article bodies, titles, slugs, categories, covers, publication states, related-card logic, diagrams, and featured rotation remain unchanged.
- DNS and mail records remain outside normal content work.
- The pre-existing local `blog/data/article-plan.json` modification remains excluded and uncommitted.
- Auto Blogger implementation did not begin.

## 26. Recommended next phase

Enter a bounded post-launch observation and maintenance phase. Monitor availability, certificate state, key routes, browser errors, and editorial changes without reopening the production architecture unless evidence shows a routing defect.

Recommended next unit:

**Unit 5BN — Production Observation and Post-Launch Stability Checkpoint**

Goal: recheck the live homepage, blog surfaces, representative articles, discovery files, HTTPS, redirects, and Pages ownership after an observation window, without changing content or infrastructure unless a confirmed blocker is found.

## 27. Test record

- Workflow authority and Unit 5BL: read completely.
- Branch: `main`.
- Initial V2 commit: `2199b8d185fe7470775c93a51c04418e076758af`.
- Routing artifact commit: `a6fb9ba63e20a5f65f335b03265dcf2df8d23dbb`.
- V2 custom-domain commit: `5112ab108b9cc670a0228ce180bf6fe31bf47ac0`.
- Legacy rollback commit: `c18ed92c5a28d215007f9e86941518632019b40f`.
- Legacy CNAME release commit: `81e605cd2e83e412f806c6341ab71f1d979fb541`.
- V2 Pages build: built at `5112ab108b9cc670a0228ce180bf6fe31bf47ac0`.
- Legacy Pages custom domain after transfer: none.
- V2 Pages custom domain after transfer: `dadastore.co`.
- Artifact homepage/blog/category/article count: confirmed / confirmed / confirmed / 61.
- Repository structure guardrail: passed for 61 pages.
- Related Articles guardrail: passed for 183 cards.
- Category-directory guardrail: passed for 10 categories and 61 represented articles.
- Featured-rotation guardrail: passed, including eight-week exclusion.
- Article-link encoding guardrail: passed.
- Article-body changes: 0.
- Publication-state changes: 0.
- Canonical failures: 0.
- Open Graph URL failures: 0.
- Old project-host references in public blog output: 0.
- Sitemap entries: 63; draft leaks: 0.
- Feed items: 61; draft leaks: 0.
- Live route checks: 71; failures: 0.
- Live browser scenarios: 52; failures: 0.
- Console errors: 0.
- Failed requests: 0.
- HTTPS failures: 0.
- Redirect loops: 0.
- Custom-domain ownership conflicts: 0.
- `git diff --check`: passed before documentation; only a line-ending warning was emitted for the excluded `blog/data/article-plan.json` modification.

## 28. Suggested commit message

`Fix production domain and Pages routing`
