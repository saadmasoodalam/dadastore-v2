# Unit 5Q — First Blog Batch Publication

## 1. Title

Unit 5Q — Publish the First Blog Batch

## 2. Status

The five Project Owner-approved first-batch articles are published in the local repository and are eligible for a separately authorized deployment.

Publication is not deployment. No commit, push, Pages change, DNS change, or production release was performed.

## 3. Purpose

This unit performs the controlled publication transition for exactly five approved Social Media Strategy articles. It aligns their article metadata, publication registry, editorial plan, public listings, sitemap, RSS feed, and QA record while preserving the existing published article and all 55 unapproved drafts.

## 4. Project Owner approval

The Project Owner explicitly authorized publication of all five articles named in this unit. The approval applies only to those five slugs and does not authorize publication of any remaining draft.

## 5. Articles published

1. **A Practical Guide to Social Media Audience Research** — `social-media-audience-research-guide`
2. **How to Choose the Right Social Media Platforms for Your Business** — `how-to-choose-social-media-platforms-for-your-business`
3. **How to Build Social Media Content Pillars That Guide Better Content** — `how-to-build-social-media-content-pillars`
4. **Social Media KPIs That Connect Activity to Business Goals** — `social-media-kpis-that-connect-to-business-goals`
5. **A Practical Social Media Strategy Template for Small Businesses** — `social-media-strategy-template-for-small-business`

## 6. Previous state

Before Unit 5Q:

- published articles: 1
- generated drafts: 60
- selected first-batch drafts: 5
- selected public URLs: null
- selected robots state: `noindex, nofollow`
- selected articles in public listings: 0
- selected articles in sitemap: 0
- selected articles in RSS: 0

## 7. New state

After Unit 5Q:

- published articles: 6
- remaining drafts: 55
- newly published articles: 5
- newly assigned public URLs: 5
- newly public article robots state: `index, follow`
- newly public articles in the blog listing: 5
- newly public articles in the category listing: 5
- newly public articles in sitemap: 5
- newly public articles in RSS: 5
- unapproved draft exposure: 0

## 8. Public URLs assigned

- `./social-media-audience-research-guide/`
- `./how-to-choose-social-media-platforms-for-your-business/`
- `./how-to-build-social-media-content-pillars/`
- `./social-media-kpis-that-connect-to-business-goals/`
- `./social-media-strategy-template-for-small-business/`

The generated sitemap and RSS resolve those relative registry routes against the existing GitHub Pages project-preview base.

## 9. Registry changes

`blog/data/posts.json` changed exactly the five approved records:

- `status`: `draft` → `published`
- `date`: `null` → `2026-07-31`
- `url`: `null` → the corresponding relative public route

Titles, slugs, categories, excerpts, reading times, and featured settings were preserved.

`blog/data/article-plan.json` changed the matching five lifecycle states from `draft` to `published`. The other 55 generated records remain `draft`.

## 10. Blog-index changes

`blog/index.html` now lists all five newly published articles in the public article grid while preserving the existing featured article.

Because the active Social Media Strategy category page is also a public listing surface, `blog/category/index.html` now lists the same five articles. Both pages use the approved titles, registry excerpts, reading times, publication date, and stable relative article routes.

No draft outside the approved five was added to either listing.

## 11. Sitemap changes

The existing dependency-free generator rebuilt `blog/sitemap.xml`.

- previous entries: 3
- entries added: 5
- current entries: 8

The eight entries are the blog home, category page, existing published article, and five newly published articles. Each new article uses `2026-07-31` as `lastmod`. Remaining drafts are excluded.

## 12. RSS changes

The existing dependency-free generator rebuilt `blog/feed.xml`.

- previous article items: 1
- items added: 5
- current article items: 6

Every new item includes title, excerpt, public link, permalink GUID, publication date, DaDaStore author, and Social Media Strategy category. Remaining drafts are excluded.

## 13. Internal-link changes

No article-body link rewrite was required.

The strategy-template article already used stable relative slug routes for the other four approved articles. Those destinations changed from private draft routes to published public routes in the same unit. All four links now resolve publicly without changing the approved article copy.

The other four articles continue to link to the existing published planning guide and stable site destinations.

## 14. Publication dates used

The shared publication date is:

`2026-07-31`

It is consistent across:

- the five `posts.json` records;
- `article:published_time` on all five article pages;
- visible article `<time>` elements;
- blog and category listing cards;
- sitemap `lastmod` values;
- RSS publication dates.

No artificial per-article timestamps were invented.

## 15. Verification results

- exactly five approved records transitioned to published;
- total published records: 6;
- remaining draft records: 55;
- unexpected published records: 0;
- public URLs assigned: 5 of 5;
- article folders and local routes resolve: 5 of 5;
- public blog listing entries added: 5;
- category listing entries added: 5;
- sitemap entries added: 5;
- RSS items added: 5;
- metadata failures: 0;
- reading-time mismatches: 0;
- broken relative links and local assets: 0;
- unapproved draft exposure: 0;
- sitemap leaks from remaining drafts: 0;
- RSS leaks from remaining drafts: 0;
- duplicate IDs: 0;
- mobile-navigation failures: 0;
- responsive failures at 390px and 1440px: 0;
- horizontal-overflow failures: 0;
- heading-clipping failures: 0;
- console/runtime errors: 0;
- failed image, stylesheet, or resource requests: 0;
- generated QA verdict: `BLOG LIBRARY READY`;
- existing published article SHA-256 remained unchanged;
- main-site `index.html` SHA-256 remained unchanged.

## 16. Current blog totals

- planned/generated batch articles: 60
- published batch articles: 5
- remaining batch drafts: 55
- existing published article: 1
- total published articles: 6
- public blog cards: 6
- public category cards: 6
- sitemap article URLs: 6
- RSS article items: 6

## 17. Remaining drafts

Fifty-five generated articles remain:

- `draft` in the editorial plan;
- `draft` in the publication registry;
- assigned null public URLs;
- absent from the blog home and category listing;
- absent from the sitemap;
- absent from RSS;
- outside Unit 5Q approval.

## 18. Deployment status

Not deployed.

The repository contains the proposed local publication state only. GitHub Pages, production hosting, DNS, custom-domain settings, and the live DaDaStore website were not changed.

## 19. Rollback procedure

If the local publication must be reversed before deployment:

1. restore only the five approved `posts.json` records to `draft`, null date, and null URL;
2. restore the matching five `article-plan.json` records to `draft`;
3. restore `noindex, nofollow`, the draft badge, and editorial-draft presentation in the five article pages;
4. remove only the five new cards from the blog and category listings;
5. regenerate `blog/sitemap.xml` and `blog/feed.xml` from the restored published registry;
6. regenerate `blog/data/qa-report.json`;
7. confirm published total returns to 1 and draft total returns to 60;
8. confirm the five routes are absent from public indexes, sitemap, and RSS;
9. rerun responsive, console, request, and link verification.

If a later deployed release requires rollback, obtain explicit rollback authorization and restore or redeploy the last verified published state. Do not change DNS or unrelated content as an improvised rollback.

## 20. Allowed next work

- Project Owner local visual review of the six-article public blog
- Review of the generated sitemap and RSS output
- A bounded publication completion checkpoint
- Explicit commit and push authorization
- A separately authorized preview deployment and post-deployment verification

## 21. Disallowed next work

- Publishing any of the 55 remaining drafts
- Rewriting the approved article bodies
- Modifying unrelated drafts
- Changing the existing published article
- Redesigning the blog or main site
- Deploying, changing GitHub Pages settings, or changing DNS
- Committing or pushing without separate instruction

## 22. Recommended next unit

**Unit 5R — First Blog Batch Publication Completion Checkpoint**

Goal: record Project Owner visual approval of the six-article public blog state and decide whether the bounded publication changes may be committed and pushed for preview deployment.

## 23. Suggested commit message

`Publish first blog article batch`
