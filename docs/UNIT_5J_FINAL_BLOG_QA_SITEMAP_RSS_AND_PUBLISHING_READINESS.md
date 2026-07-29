# Unit 5J — Final Blog QA, Sitemap, RSS, and Publishing Readiness

## Status

Complete as a QA, guardrail, and publishing-readiness assessment.

No draft article was published. No public grid, article status, production setting, DNS record, deployment, commit, or push was changed.

## Purpose

Validate the complete 60-article draft library, add deterministic published-only sitemap and RSS generation, create a machine-readable QA record, and determine whether the library can advance to staged editorial approval.

## Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `blog/README.md`
- `blog/data/article-plan.json`
- `blog/data/posts.json`
- `blog/data/categories.json`
- `blog/data/editorial-rules.json`
- all 60 generated draft article files
- the existing published article
- the current public blog homepage and category page

## Inventory result

- Planned Batch 1–6 articles: 60
- Generated planned drafts: 60
- Planned records still marked draft: 60
- Approved published articles: 1
- Duplicate planned titles: 0
- Duplicate planned slugs: 0
- Exact duplicate article bodies: 0
- Invalid planned categories: 0
- Word-count failures: 0
- Draft word-count range: 1,400–1,565 words
- Broken local links/assets: 0
- Broken planned related-article references: 0
- Empty sections: 0
- Placeholder text flags: 0
- content-generation wording flags: 0
- unsupported numeric-statistic flags: 0
- guaranteed-result claim flags: 0

`posts.json` also contains two older, unplanned draft registry records:

- `choosing-the-right-marketing-automation-software`
- `creative-testing-for-paid-advertising`

They have no public URLs and are not publicly rendered, emitted in the sitemap, or emitted in RSS. They are recorded as registry-cleanup warnings rather than counted among the approved 60-article plan.

## Metadata finding

Twenty-one drafts fail the complete metadata requirement:

- 19 drafts lack Open Graph title and description metadata.
- 2 drafts do not render the exact planned reading-time value.

This is a publishing-readiness blocker. Unit 5J records the evidence and does not broaden into multi-article metadata editing.

## Creative diversity result

All 60 planned drafts contain exactly one useful visual module. No batch exceeds the editorial limit of two uses for one visual family.

Whole-library reuse:

| Visual family | Uses |
| --- | ---: |
| Timeline | 8 |
| Framework | 6 |
| Audit | 5 |
| Channel/opportunity map | 5 |
| Matrix | 5 |
| Scorecard | 5 |
| Checklist | 4 |
| Decision tree | 4 |
| Funnel | 4 |
| Layers/maturity | 4 |
| Process | 3 |
| Troubleshooting | 3 |
| Comparison | 2 |
| Orbit/feedback loop | 1 |
| Pillars | 1 |

Timeline is the most repeated family across the full library, but its eight uses are distributed across separate batches and topics. No within-batch excessive-reuse violation was found. The complete per-family article list is stored in `blog/data/qa-report.json`.

## Public visibility boundary

- Planned drafts exposed on the public blog grid: 0
- Planned drafts with non-null public URLs: 0
- Drafts emitted in sitemap: 0
- Drafts emitted in RSS: 0
- Published articles publicly indexed: 1
- Published article preserved: yes

The public homepage and category page remain static and show only the approved published article.

## Build scripts

### `scripts/build-blog-index.mjs`

- validates `article-plan.json`, `posts.json`, categories, article files, metadata, content boundaries, links, word counts, article-body uniqueness, and creative-module use;
- derives the public-index payload from published records only;
- verifies that current static public grids do not expose draft slugs;
- accepts an optional browser-QA report;
- writes `blog/data/qa-report.json`;
- does not change status or publish content.

### `scripts/generate-sitemap.mjs`

- reads published `posts.json` records only;
- emits the blog homepage, valid category page, and published article;
- defaults to the verified GitHub Pages project-preview base;
- supports a later explicit `BLOG_PUBLIC_BASE` override;
- never emits draft records.

### `scripts/generate-rss.mjs`

- reads published records only;
- emits title, description, article link, publication date, author, and category;
- never emits draft records.

No package or external dependency was added. The repository shell did not expose `node` on `PATH`; all three scripts were executed successfully through the available Node runtime.

## Sitemap result

`blog/sitemap.xml` contains three entries:

1. blog homepage;
2. current category page;
3. current published article.

Draft sitemap entries: 0.

## RSS result

`blog/feed.xml` contains one item for the current published article.

Draft RSS items: 0.

## Browser QA

Fifteen documents were sampled:

- two articles from each of six batches: 12 drafts;
- blog homepage;
- category page;
- existing published article.

Each document was tested at 375px, 390px, and 1440px, for 45 browser runs.

Results:

- horizontal-overflow failures: 0;
- clipping failures: 0;
- console errors: 0;
- failed requests: 0;
- mobile-menu failures: 12 runs.

The 12 mobile failures represent six sampled draft documents at both 375px and 390px:

- `ecommerce-funnel-analysis`;
- `marketing-attribution-models-explained`;
- `creative-testing-framework-for-paid-ads`;
- `welcome-email-sequence-planning`;
- `marketing-automation-workflow-map`;
- `seo-topic-clusters-customer-questions`.

These article pages do not expose the shared mobile navigation toggle. The public homepage, category page, published article, and the other sampled draft templates passed their applicable menu checks.

Browser evidence is stored locally at `_local-reference/qa/unit-5j/browser-results.json` and summarized in `blog/data/qa-report.json`.

## Publishing-readiness verdict

**BLOG LIBRARY BLOCKED**

Blocking evidence:

1. 21 draft metadata failures;
2. mobile navigation missing on six sampled draft pages;
3. two unplanned legacy draft registry records require an explicit cleanup decision.

The generated library is complete and can be reviewed editorially, but it must not advance to staged publishing until the technical blockers are corrected and the Project Owner approves selected articles.

## Recommended next unit

**Unit 5K — Batch Editorial Approval and Controlled Publishing Schedule**

Unit 5K must begin by resolving or formally separating the Unit 5J blockers before approving or scheduling any article.

## Explicitly not next

- bulk publication;
- exposing all drafts on public grids;
- changing draft URLs;
- production deployment;
- DNS, Pages, or canonical-domain changes;
- automatic publication;
- committing or pushing without separate approval.
