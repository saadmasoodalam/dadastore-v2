# DaDaStore Blog Editorial and Publishing Workflow

## Purpose

This directory contains the static DaDaStore Insights module and its controlled editorial planning data. The planning files support consistent article production; they do not generate, approve, or publish content by themselves.

Core boundaries:

- An article plan is not an article.
- Generated content is not approved content.
- Approved content is not published content.
- Publishing is not deployment.
- Automation must not bypass editorial review.

## Directory structure

Published and reviewable articles use one folder per slug:

```text
blog/
├── <article-slug>/
│   └── index.html
├── assets/
│   ├── blog.css
│   └── blog.js
├── category/
│   └── index.html
├── data/
│   ├── article-plan.json
│   ├── categories.json
│   ├── editorial-rules.json
│   └── posts.json
├── index.html
└── post-template.html
```

Article folders use lowercase, hyphenated slugs. Relative paths must be correct from the nested article directory:

- blog stylesheet and script: `../assets/...`
- blog homepage and category: `../index.html`, `../category/index.html`
- main site and shared assets: `../../index.html`, `../../assets/...`

## Data-file roles

### `article-plan.json`

The master editorial inventory. It contains planned topics, search intent, audience, article type, target length, internal-link targets, related article slugs, status, and batch assignment.

This file is planning authority only. A draft inventory record does not create a public URL and must not appear in public article grids.

### `categories.json`

The controlled category vocabulary. Every inventory record must use one category title exactly as written in this file. `articleCount` reflects the complete inventory, including the existing published article.

### `editorial-rules.json`

The machine-readable editorial and QA guardrails. Any future generation or validation tool must read these rules before producing an article.

### `posts.json`

The current rendering/publication registry. It remains separate from the 60-article plan.

- Draft records use `"status": "draft"` and must not be listed publicly.
- Published records use `"status": "published"` and require a valid public `url`.
- Only owner-approved articles may move to published status.

## Draft status

New article work begins as `draft`.

A draft article:

- is created from an approved inventory record;
- uses the established article template;
- uses `noindex, nofollow`;
- is not added to public homepage or category grids;
- is not assigned a publication date presented as final;
- may be reviewed locally or on an explicitly approved preview surface;
- cannot be promoted to published by a batch-generation tool.

## Review and approval status

After content and technical QA, a draft may move to `review`. Review checks:

1. original, useful content within the assigned scope;
2. 1,400–2,200 words unless the owner approves an exception;
3. no guaranteed outcomes, fake statistics, or unsupported claims;
4. complete metadata;
5. valid internal links;
6. accurate category and related-article assignments;
7. responsive browser behavior;
8. no console errors, failed assets, or horizontal overflow.

Only the Project Owner can mark an article `approved`.

## Published status

Publishing is a separate, explicit action after approval.

For an approved article:

1. confirm its final slug and folder;
2. set final title, description, category, author, date, reading time, Open Graph data, URL path, and robots metadata;
3. update or add the corresponding `posts.json` record;
4. set `"status": "published"` and a valid relative `url`;
5. add the article to the public blog homepage;
6. add it to the matching category page;
7. add approved internal links from relevant published articles;
8. run local link, JSON, content-boundary, responsive, console, and network QA;
9. obtain owner visual approval before commit, deployment, or release.

## Category-page updates

Category pages render published entries only. Until category generation is implemented, updates are static and bounded:

- use the exact category title from `categories.json`;
- show only records with published status;
- link to real article folders;
- do not expose planned or draft titles;
- preserve the existing blog header, CTA, footer, and responsive system.

Future category generation must produce the same public boundary and must be verified before it replaces static authoring.

## Internal-link assignment

Each planned record contains:

- `internalLinks`: preferred existing destinations or approved hub pages;
- `relatedArticles`: inventory slugs that form the topic cluster.

During drafting:

1. use only links that materially help the reader;
2. prefer published articles and stable hub pages;
3. do not create broken links to ungenerated drafts;
4. record future related links as planned until their targets are published;
5. use descriptive anchor text;
6. avoid repetitive or keyword-stuffed anchors;
7. recheck reciprocal and category links when a related article is published.

## Batch generation

The plan is divided into six batches of ten drafts:

1. Social Media Strategy
2. Paid Media
3. Ecommerce & CRO
4. Tracking & Analytics
5. Creative, Content, and Email
6. Automation, SEO, and Growth Systems

A future batch unit must remain bounded to its ten assigned records. It may scaffold draft folders and content, but it must not:

- change another batch;
- overwrite the existing published article;
- set generated records to published;
- add drafts to public grids;
- deploy, commit, or push without separate authorization.

## Batch QA

Every generated batch requires:

- JSON and required-field validation;
- title and slug uniqueness checks;
- category validation;
- word-count checks;
- prohibited-language and claim-boundary checks;
- metadata checks;
- local link resolution;
- duplicate-ID checks;
- mobile and desktop browser checks;
- mobile-menu checks where shared navigation is present;
- console and failed-request checks;
- confirmation that all generated records remain drafts;
- owner editorial and visual review.

If any article fails, the batch does not advance to publication.

## Creative editorial presentation

Every article must use the established DaDaStore V3 brand language while selecting a supporting visual structure that fits its subject. Future batches should vary purposeful structures such as process diagrams, checklists, comparison panels, decision trees, scorecards, timelines, framework grids, audit tables, and strategic callouts.

Visual variation must support understanding. It must not become random decoration, obscure practical content, create unsupported claims, or repeat the same four-box placeholder across a batch. Article pacing and hierarchy should vary where the topic benefits, while typography, color, accessibility, responsive containment, and publication guardrails remain consistent.

Creative presentation is not publication approval. Every new visual must still pass 375px, 390px, and desktop browser QA without clipping or horizontal overflow.

## Future sitemap and RSS generation

Sitemap and RSS support are planned but not implemented.

When approved, generators must:

- read published records only;
- exclude draft, review, and approved-but-unpublished content;
- use the approved canonical-domain strategy;
- produce deterministic output;
- avoid changing article status;
- validate every emitted URL;
- run only after publication data is internally consistent.

Sitemap or RSS generation is not permission to deploy or change DNS.

## Current state

- one real article is published;
- 60 future articles are planned as drafts;
- no article-generation tool exists;
- no automatic publishing exists;
- no sitemap or RSS generator exists;
- no deployment or production setting is changed by this editorial foundation.
