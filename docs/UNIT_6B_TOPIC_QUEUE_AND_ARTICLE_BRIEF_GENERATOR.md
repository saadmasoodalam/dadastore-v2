# Unit 6B — Topic Queue and Article Brief Generator

## 1. Title

Unit 6B — Topic Queue and Article Brief Generator.

## 2. Status

Topic validation, duplicate protection, deterministic brief generation, tests, and documentation. No article drafting or publication behavior is included.

Final verdict: **TOPIC AND BRIEF GENERATOR READY**.

## 3. Purpose

Process only explicitly approved topics into reviewable article briefs while failing closed on invalid records, duplicate search intent, unsafe factual requirements, or excessive batch size.

## 4. Unit 6A authority

The implementation follows Unit 6A's draft-only architecture, 5/10 batch limits, ten-category taxonomy, source policy, factual-risk model, owner gate, production protections, and prohibition on automatic publication.

## 5. Input files

- `blog/data/topic-queue.json`
- `blog/data/article-brief-schema.json`
- `blog/data/auto-blogger-config.json`
- `blog/data/editorial-rules.json`
- `blog/data/posts.json`
- `blog/data/categories.json`
- published article HTML for headings and metadata descriptions

No web research or external service is used.

## 6. Output files

- `blog/data/article-briefs.json`
- write-mode updates to approved records in `blog/data/topic-queue.json`

The committed registry is empty because the current queue contains no approved topics.

## 7. Queue eligibility rules

Only `approved_for_brief` entries are eligible. All other lifecycle states are ignored. Optional `--topic-id` and `--batch-id` filters narrow the eligible set.

## 8. Validation rules

Eligible topics require identity, title, keyword, intent, audience, category, business relevance, factual risk, status, and valid batch identity. Duplicate topic IDs, invalid categories, invalid risks, malformed IDs, and missing batch IDs fail closed.

## 9. Duplicate-topic detection

The deterministic comparison uses normalized titles, generated slugs, keywords, excerpts, categories, inferred or recorded intent, metadata descriptions, article headings, and any supplied cover or diagram concepts.

Exact title or slug collisions are rejected.

## 10. Cannibalization protection

Same-intent strong overlap, strong keyword/semantic overlap, or a declared overlap score of 90 or more is rejected. This prevents a renamed or superficially varied article from competing with an existing published guide.

## 11. Duplicate-risk classifications

- `clear`: eligible for brief generation.
- `review_required`: topic returns to `under_review`; no final brief is generated.
- `rejected_duplicate`: topic moves to `rejected` with references and reasons.

Validation rejection is recorded separately from duplicate classification.

## 12. Brief-generation logic

Clear topics receive deterministic identifiers, slugs, one audience problem, one article promise, a 1,400–2,200 word target, topic-aware concepts, prohibited claims, source requirements, links, CTA objective, diagram brief, cover brief, originality controls, risk state, and generated timestamp derived from queue timestamps.

Unit 6B minimally extends the closed Unit 6A brief schema for the operational fields mandated by this unit. The required `CTA_objective` name supersedes the lowercase planning-era alias so the JSON remains portable to case-insensitive parsers.

## 13. Heading-outline rules

Each generated brief contains eight substantive H2 sections covering diagnosis, constraints, framework design, implementation, measurement limits, mistakes, an action checklist, and a bounded conclusion/next action. Category-specific decision inputs prevent a shallow interchangeable listicle.

## 14. Internal-link recommendations

The generator chooses up to four deterministic recommendations from published records only, prioritizing category and semantic relevance. Every recommendation includes slug, valid public registry URL, anchor intent, rationale, and a published-only assertion. Self-links and duplicate targets are excluded.

## 15. Factual-risk handling

- Low: evergreen reasoning may proceed as a draft brief.
- Moderate: current reputable sources are required and approval remains `under_review`.
- High: official/primary sources and manual source review are required; approval remains `manual_source_review_required`.

No source is fetched or cited by Unit 6B.

## 16. Batch controls

Default processing limit is five and the hard maximum is ten. Invalid, zero, negative, non-integer, or above-maximum limits are rejected. Topic and batch filters are supported.

## 17. Dry-run behavior

Dry run is the default. It loads and validates the repository, calculates proposed queue and registry changes, prints a summary, and performs no writes.

The current empty queue dry run processed zero eligible topics and performed zero writes.

## 18. Write behavior

`--write` explicitly authorizes only queue and brief-registry writes. JSON is written through temporary files and renamed. An empty eligible set performs no writes. Write mode cannot create article HTML or modify public registries.

## 19. Determinism

IDs, slugs, ordering, links, summaries, risk decisions, and timestamps are derived from stable inputs. No randomness or current runtime timestamp is used. Repeated focused processing with unchanged inputs produced identical data.

## 20. Queue status transitions

- clear: `approved_for_brief → brief_generated`
- review required: `approved_for_brief → under_review`
- duplicate or invalid: `approved_for_brief → rejected`

Generated records include brief ID, processed/reviewed time, risk status, validation result, overlap reasons, and closest references where relevant.

## 21. Rejection handling

Rejected records are retained. The registry records topic ID, classification, reasons, and duplicate article references. Nothing is silently deleted.

## 22. Review-required handling

Moderate-overlap topics remain traceable, move to `under_review`, and receive overlap reasons and closest matches. No brief is generated until a later owner decision returns the topic to an eligible state.

## 23. Test coverage

Focused tests cover schema validity, required fields, duplicate IDs, exact title/slug collisions, cannibalization, moderate overlap, category/status handling, batch limits, deterministic output, published-only unique links, factual risk, high-risk manual review, and protected-file non-mutation.

The existing public blog regression suite is also run as a production guardrail.

## 24. Files changed

Added:

- `scripts/generate-article-briefs.mjs`
- `scripts/test-article-brief-generator.mjs`
- `blog/data/article-briefs.json`
- `docs/UNIT_6B_TOPIC_QUEUE_AND_ARTICLE_BRIEF_GENERATOR.md`

Compatibility update:

- `blog/data/article-brief-schema.json` — added only the mandatory Unit 6B operational brief fields and high-risk approval state.

## 25. Files intentionally unchanged

Published articles, article HTML, `posts.json`, categories/counts, Insights, sitemap, feed, featured rotation, Related Articles, covers, diagrams, production domain configuration, Pages settings, and `blog/data/article-plan.json`.

## 26. Production-protection verification

Published article mutations, article drafts, publication-state mutations, sitemap/feed/category/featured/Related changes, and production-domain changes are all zero. Tests snapshot protected public data and confirm pure generator logic does not mutate it.

## 27. Rollback procedure

Before commit, remove the four Unit 6B additions and revert only the schema compatibility additions. After a commit, use a normal revert commit. Do not rewrite history or alter production content. A future write-mode queue run must retain its pre-run queue and brief registry for bounded restoration.

## 28. Recommended Unit 6C

**Unit 6C — Private Draft Workspace and Article Draft Generator Guardrails**

Define and verify access-controlled, non-Pages draft storage and pure draft-generation boundaries before any article copy or HTML can be produced.

## 29. Suggested commit message

`Add topic queue and article brief generator`
