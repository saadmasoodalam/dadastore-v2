# Unit 6M1 — Library Growth Contracts

## Status

Proposed production patch, verified only in isolated checkouts. It has not been applied, committed, pushed, or deployed to production.

## Purpose

Replace terminal 61-article assertions with strict registry-derived invariants while retaining page parity, Related Articles, category, sitemap, feed, cover, and featured-rotation safeguards.

## Fixed-count audit

- Growth blockers: article structure, category builder/test, Related Articles generator/test, featured rotation, and insight upgrader.
- Documentation-only occurrence: the generated category-directory sentence.
- Registry-derived and already safe: sitemap and feed generators.
- Historical current-state values remain valid evidence but are not runtime limits.

## Canonical count source

The valid published registry is derived from records with published status, complete identity fields, and canonical slug-relative URLs. Duplicate slugs/URLs, malformed published records, public draft URLs, missing pages, and unregistered public article directories fail closed.

## Corrections

- Article structure audits every valid published record and registry/page parity.
- Related cards remain exactly three per article; the total is publishedCount × 3.
- Existing valid Related selections are preserved; incomplete pages are deterministically rendered.
- Category totals and copy use the registry-derived count.
- Sitemap remains all published articles plus the Insights and category pages.
- Feed remains an all-published-articles feed, ordered by date then slug.
- Safe raster validation is retained and deterministic SVG covers require safe XML, no scripts/events/external resources, a valid 16:9 viewBox, bounded size, and meaningful metadata.
- Featured eligibility must equal the derived published count; current assignments remain protected by deterministic history.

## Missing and duplicate safeguards

Focused fixtures prove duplicate registry identity, missing pages, unregistered pages, public draft URLs, missing covers, and unsafe SVGs are rejected.

## Production files requiring change

- scripts/blog-registry-contracts.mjs
- scripts/test-library-growth-contracts.mjs
- scripts/test-article-structure.mjs
- scripts/upgrade-related-articles.mjs
- scripts/test-related-articles.mjs
- scripts/build-category-directory.mjs
- scripts/test-blog-directory.mjs
- scripts/build-featured-rotation.mjs
- scripts/upgrade-article-insights.mjs
- docs/UNIT_6M1_LIBRARY_GROWTH_CONTRACTS.md

## Boundaries

No article, registry record, article-plan record, production state, DNS setting, scheduler, deployment, commit, or push is included.

## Rollback

If separately approved later, revert the single bounded production patch commit with git revert. Do not reset or rewrite history.

## Suggested commit message

`Generalize blog library growth validation`
