# Unit 5AI — Blog Batch 4 Publication

## 1. Status

Implemented locally. The ten Project Owner-approved Batch 4 articles are published in the repository, but this work has not been deployed, committed, or pushed.

## 2. Purpose

Publish exactly the approved Batch 4 set and keep the registry, article metadata, public listings, local cover assets, sitemap, and RSS feed synchronized.

## 3. Project Owner approval

The Project Owner explicitly approved publication of all ten articles reviewed in Units 5AF–5AH. This approval does not extend to any other draft.

## 4. Articles published

1. **How Organic and Paid Social Media Should Work Together** — `organic-and-paid-social-media-strategy`
2. **Social Media Strategy Audit Checklist: What to Review and Why** — `social-media-strategy-audit-checklist`
3. **How to Structure Meta Ads Campaigns Around Clear Decisions** — `how-to-structure-meta-ads-campaigns`
4. **How to Build a Paid Social Funnel Without Losing the Customer Journey** — `paid-social-funnel-strategy`
5. **A Paid Media Reporting Framework Built Around Better Decisions** — `paid-media-reporting-framework`
6. **An Ecommerce Offer Testing Framework for Better Decisions** — `ecommerce-offer-testing-framework`
7. **Mobile Ecommerce Conversion Optimization Checklist** — `mobile-ecommerce-conversion-optimization`
8. **Shopify Navigation and Collection Page CRO** — `shopify-navigation-and-collection-page-cro`
9. **How to Build a GA4 Ecommerce Measurement Plan** — `ga4-ecommerce-measurement-plan`
10. **Meta Pixel Event Planning and Validation Guide** — `meta-pixel-event-planning-and-validation`

## 5. Public URLs assigned

Each record now uses `./<slug>/` in `posts.json`; each article uses the matching absolute GitHub Pages URL in its canonical and Open Graph metadata.

## 6. Publication date used

All ten articles use the consistent publication date **2026-08-01**, presented as **August 1, 2026**.

## 7. Cover assets added

Ten optimized local JPEG covers were added under `assets/images/blog/`. Every asset is 1280×720, has a unique SHA-256 hash, and has no external runtime dependency. Covers were generated individually in the established premium 3D editorial-tech mode: white/deep-indigo surfaces with cyan, violet, and restrained pink light, no embedded text, figures, claims, logos, or private material.

## 8. Cover concepts and alt text

| Article | Cover concept | Alt text |
|---|---|---|
| Organic and paid social | Organic conversation and paid distribution connected by a learning loop | Connected organic conversation signals and paid distribution beams flowing through a shared learning loop |
| Strategy audit | Magnifying lens crossing five audit checkpoints | Magnifying lens examining audience, channel, content, workflow, and measurement checkpoints |
| Meta Ads structure | Decision core with objective, audience, creative, placement, and budget spokes | Central decision core governing objective, audience, creative, placement, and budget modules |
| Paid social funnel | Continuous discovery-to-action customer journey | Continuous illuminated customer journey connecting discovery, education, evaluation, and action |
| Paid media reporting | Five evidence lenses converging on a decision compass | Five evidence lenses converging on a decision compass for paid media reporting |
| Ecommerce offer testing | Two controlled offer chambers around one hypothesis | Two ecommerce offers in controlled test chambers balanced around a shared hypothesis |
| Mobile ecommerce CRO | Mobile journey through six usability checkpoints | Mobile commerce journey passing through navigation, product, cart, checkout, performance, and accessibility checks |
| Shopify navigation and collections | Product-discovery tree with filters and collection branches | Product discovery tree branching through navigation, filters, collections, and merchandising |
| GA4 ecommerce measurement | Event signals moving through contract, validation, and reporting layers | Ecommerce event signals flowing through a measurement contract, validation, and reporting architecture |
| Meta Pixel validation | Signals moving through consent, deduplication, catalog, and validation gates | Pixel event signals passing through consent, deduplication, catalog matching, and validation gates |

## 9. Registry changes

Exactly ten `posts.json` records changed from `draft` to `published`, received the common date, and received non-null public URLs. The other 25 drafts retain `status: draft` and `url: null`.

## 10. Insights-listing changes

Ten article cards were added to the Knowledge Library grid with the approved titles, descriptions, categories, dates, reading times, local covers, alt text, and article links. The existing featured-section structure was not changed.

## 11. Category-listing changes

The same ten cards were added to the category listing with correct category keys and relative paths: two Social Media Strategy, three Paid Media, three Ecommerce & CRO, and two Tracking & Analytics.

## 12. Feed changes

`blog/feed.xml` was regenerated from published registry records. It now contains 36 article items, including all ten Batch 4 URLs and no remaining draft URLs.

## 13. Sitemap changes

`blog/sitemap.xml` was regenerated from published registry records. It now contains 38 entries: the blog homepage, category page, and 36 published articles. Exactly ten Batch 4 article entries were added.

## 14. Internal-link changes

No article-body links or body content were rewritten. Existing internal links continue to resolve; public listing, canonical, feed, and sitemap links now expose the approved articles.

## 15. Verification results

- Newly published articles: 10
- Total published articles: 36
- Remaining drafts: 25
- Public URLs assigned: 10
- Unique 1280×720 cover assets: 10; duplicate hashes: 0
- Insights entries: 10; category entries: 10
- Sitemap additions: 10; feed additions: 10
- Metadata, reading-time, and word-count failures: 0
- Broken local links and image references: 0
- Remaining draft exposure and sitemap/RSS leaks: 0
- Duplicate IDs: 0
- Browser QA: 390px and 1440px, with no overflow, console errors, failed requests, or mobile-navigation failures
- `git diff --check`: passed

## 16. Published and draft totals

The local registry contains **36 published articles** and **25 drafts**.

## 17. Deployment status

Publication is complete only in the local repository. No deployment, DNS change, commit, push, or production-setting change was performed.

## 18. Rollback procedure

For these ten records only: restore `status: draft`, `date: null`, and `url: null`; restore draft robots/labels and remove their public canonical/publication metadata; remove their cards from both listings; regenerate sitemap and RSS; then verify the counts return to 26 published and 35 drafts. Cover assets may remain unreferenced or be removed in the same controlled rollback. Do not alter the other published articles.

## 19. Allowed next work

- Project Owner review of the local Batch 4 publication state
- A bounded Batch 5 selection and editorial-review unit
- A separately authorized deployment-readiness check

## 20. Disallowed next work

- Publishing any of the remaining 25 drafts
- Deployment, commit, or push without separate authorization
- Featured-rotation implementation
- Insights-page redesign or article-body rewriting
- Main-site, DNS, or production-setting changes

## 21. Recommended next unit

**Unit 5AJ — Select and Review Blog Publication Batch 5**: select the next bounded draft group and perform editorial and technical review before any additional publication.

## 22. Test record

The dependency-free sitemap and RSS generators completed successfully. Static registry/listing/asset checks and browser checks covered the public surfaces and all ten new article routes at the required widths.

## 23. Suggested commit message

`Publish Batch 4 blog articles`
