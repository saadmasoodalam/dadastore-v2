# Unit 5C — Blog Automation Architecture and 60-Article Content Map

## 1. Title

Unit 5C — Blog Automation Architecture and 60-Article Content Map

## 2. Status

Architecture and content planning only.

No article HTML was generated, no article status changed, and no publication or deployment action occurred.

## 3. Purpose

This unit establishes a controlled editorial data model and workflow for producing 60 future DaDaStore Insights articles quickly, consistently, and safely.

Core boundaries:

- An inventory record is not an article.
- Draft generation is not editorial approval.
- Editorial approval is not publication.
- Publication is not deployment.
- Automation must not bypass human review.

## 4. Branch

- branch: `main`

## 5. Automation architecture

The foundation separates planning, editorial rules, publication data, and rendering:

```text
article-plan.json
        │
        ├── categories.json
        ├── editorial-rules.json
        │
        ▼
bounded draft batch
        │
        ▼
content + technical QA
        │
        ▼
Project Owner review
        │
        ▼
approved article
        │
        ▼
posts.json + public listing updates
```

Responsibilities:

- `article-plan.json` controls topic scope, keyword intent, audience, length, relationships, status, and batch.
- `categories.json` controls the public category vocabulary and inventory counts.
- `editorial-rules.json` defines machine-readable writing, claim, metadata, workflow, and QA boundaries.
- `posts.json` remains the separate publication registry.
- `blog/README.md` defines the human-controlled draft, review, approval, and publication process.

No generator, CI workflow, scheduled job, API integration, or publishing automation is implemented.

## 6. Article inventory

`blog/data/article-plan.json` contains 61 inventory entries:

- 60 future articles with `draft` status;
- one existing article with `published` status and `existing` batch.

Every entry contains:

- `id`;
- `title`;
- `slug`;
- `category`;
- `excerpt`;
- `primaryKeyword`;
- `secondaryKeywords`;
- `searchIntent`;
- `audience`;
- `articleType`;
- `targetLength`;
- `readingTime`;
- `internalLinks`;
- `relatedArticles`;
- `status`;
- `batch`.

Topic coverage includes:

- Meta Ads;
- Google Ads;
- TikTok Ads;
- paid social strategy;
- social media planning;
- Shopify CRO;
- ecommerce conversion;
- tracking and attribution;
- GA4;
- Meta Pixel and CAPI;
- creative testing;
- marketing automation;
- email marketing;
- SEO;
- content marketing;
- lead generation;
- analytics and reporting;
- campaign troubleshooting;
- client acquisition;
- small-budget marketing;
- business growth systems.

No duplicate titles, slugs, or IDs exist.

## 7. Category model

`blog/data/categories.json` defines ten controlled categories:

| Category | Inventory count |
|---|---:|
| Paid Media | 10 |
| Social Media Strategy | 11 |
| Ecommerce & CRO | 10 |
| Tracking & Analytics | 10 |
| Creative Strategy | 4 |
| Marketing Automation | 3 |
| Content Marketing | 3 |
| SEO | 3 |
| Email Marketing | 3 |
| Business Growth Systems | 4 |

Social Media Strategy includes ten planned Batch 1 drafts plus the existing published article. All other counts reflect planned drafts.

## 8. Editorial rules

`blog/data/editorial-rules.json` establishes:

- practical, intelligent, direct tone;
- 1,400–2,200-word target range;
- original wording;
- short paragraphs and useful headings;
- actionable checklist;
- DaDaStore contact CTA;
- internal links;
- complete metadata;
- explicit evidence and measurement boundaries;
- draft-by-default status;
- owner approval before publication.

It prohibits:

- guaranteed outcomes;
- fake statistics;
- unsupported claims;
- AI-generation wording;
- filler introductions;
- keyword stuffing;
- copied content;
- fake case studies or testimonials;
- unapproved private client data;
- automatic publication.

## 9. Batch strategy

The 60 planned drafts are divided evenly:

| Batch | Theme | Drafts |
|---|---|---:|
| Batch 1 | Social Media Strategy | 10 |
| Batch 2 | Paid Media | 10 |
| Batch 3 | Ecommerce & CRO | 10 |
| Batch 4 | Tracking & Analytics | 10 |
| Batch 5 | Creative, Content, and Email | 10 |
| Batch 6 | Automation, SEO, and Growth Systems | 10 |

Each future generation unit must remain bounded to one batch and preserve draft status.

## 10. Internal-linking strategy

Each inventory entry provides:

- stable `internalLinks` to the existing published article, insights hub, main service section, or another approved destination;
- two `relatedArticles` slug references for topic-cluster planning.

Rules:

- only helpful contextual links belong in article copy;
- links to planned articles are not rendered until the target is published;
- descriptive anchors are required;
- repetitive or keyword-stuffed anchors are prohibited;
- new publication units recheck category, reciprocal, and related-article links;
- every emitted link must resolve during local QA.

All related-slug references currently resolve to an inventory entry.

## 11. Draft/publish workflow

The controlled lifecycle is:

1. select one approved batch;
2. scaffold only the ten assigned draft folders;
3. write original content under `editorial-rules.json`;
4. use `noindex, nofollow` and keep drafts out of public grids;
5. validate metadata, links, word count, claims, IDs, and responsive behavior;
6. record editorial and technical QA;
7. obtain Project Owner review;
8. move approved content to an explicit approved state;
9. publish only through a separate authorized unit;
10. update `posts.json`, public homepage, category page, and internal links;
11. repeat browser, network, console, and draft-visibility QA.

Sitemap and RSS generation remain future work. When approved, both must read published records only and use an approved canonical-domain strategy.

## 12. Existing-article boundary

The existing published article remains unchanged:

- title: `How to Create a Social Media Marketing Plan That Drives Results`;
- slug: `how-to-create-a-social-media-marketing-plan-that-drives-results`;
- inventory status: `published`;
- batch: `existing`;
- file SHA-256 before and after Unit 5C: `B84CE2E708C63C21548B92571A1391F908D33BB96E7DBF2509CE0DA62D2D840A`.

The article appears exactly once in the inventory and is not duplicated in Batch 1.

## 13. Files added

- `blog/data/article-plan.json`
- `blog/data/categories.json`
- `blog/data/editorial-rules.json`
- `blog/README.md`
- `docs/UNIT_5C_BLOG_AUTOMATION_ARCHITECTURE_AND_60_ARTICLE_CONTENT_MAP.md`

No existing file was modified.

## 14. Verification record

- Branch: `main`
- Inventory JSON: valid
- Inventory entries: 61
- Planned draft articles: 60
- Existing published articles: 1
- Required fields: present on every entry
- Categories JSON: valid
- Categories: 10
- Category counts: reconciled with inventory
- Editorial-rules JSON: valid
- Draft batches: 6
- Drafts per batch: 10
- Duplicate IDs: 0
- Duplicate slugs: 0
- Duplicate titles: 0
- Invalid related-article slugs: 0
- Existing article duplicate: no
- Existing article content/hash changed: no
- Article HTML generated: no
- Existing blog pages changed: no
- Main-site files changed: no
- Production settings changed: no
- Deployment: not performed
- Commit/push: not performed

## 15. Recommended next unit

**Unit 5D — Batch 1: Generate First 10 Draft Articles**

Goal: generate only the ten approved Social Media Strategy drafts from Batch 1, retain `draft` status and `noindex` safeguards, and keep them out of public listings pending editorial and browser QA.

## 16. Explicitly not next

- generating Batches 2–6;
- publishing any Batch 1 draft;
- automatic AI publishing;
- GitHub Actions implementation;
- migrating legacy blog posts;
- changing the existing published article;
- changing public blog or main-site pages;
- sitemap or RSS generation;
- canonical-domain changes;
- production-domain cutover;
- DNS changes;
- deployment;
- commit or push without separate authorization.
