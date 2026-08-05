# Unit 6A — Controlled Auto Blogger and Article-Writing Architecture

## 1. Title

Unit 6A — Controlled Auto Blogger and Article-Writing Architecture.

## 2. Status

Architecture, schemas, workflow rules, editorial boundaries, and documentation only.

No article generation, draft generation, publication script, GitHub Actions workflow, production mutation, deployment, commit, or push is included.

## 3. Purpose

Define a controlled Auto Blogger architecture that can eventually support topic planning, research assistance, article briefs, draft writing, automated editorial QA, visual briefs, and internal-link recommendations while preserving an absolute separation between automated writing and publication.

The system is designed to prepare reviewable drafts. It does not receive authority to publish from a topic, brief, generated file, QA score, or automation run.

Final architecture verdict: **AUTO BLOGGER ARCHITECTURE READY**.

This verdict means the boundary and contracts are ready for pure validation work. It does not mean article generation or publication is implemented or approved.

## 4. Current production blog state

The repository audit establishes this production baseline:

- 61 published articles and 0 draft records in `blog/data/posts.json`;
- 61 unique titles and 61 unique slugs;
- 10 controlled categories in `blog/data/categories.json`;
- 63 sitemap entries: Insights, Categories, and 61 articles;
- 61 feed items;
- GitHub Pages serves `main` from the repository root at `dadastore.co`;
- published article URLs use `/blog/<slug>/`;
- every published registry record includes slug, title, excerpt, category, date, reading time, publication status, URL, featured eligibility, and 1280×720 cover metadata;
- all 61 checked article pages have complete title, description, robots, canonical, and Open Graph URL/title/description metadata;
- 61 cover references use the approved 1280×720 structure;
- 60 articles use the shared `blog-insight-diagram` system; the originally published article is the known single page without that block;
- every article has one final CTA section;
- every article has three Related Articles cards placed after the CTA;
- the current category directory represents all 61 published records;
- featured rotation selects structurally eligible published records only and enforces an eight-week repeat exclusion;
- sitemap and feed generators read published registry records only;
- the public category runtime filters `posts.json` to `status === "published"`;
- public draft counts, sitemap leaks, feed leaks, and Related Articles draft eligibility are currently zero.

Current article structure includes:

1. complete head metadata;
2. shared blog header and navigation;
3. article header, category, title, summary, author, date, and reading time;
4. cover/hero treatment where applicable;
5. article reading layout and semantic body headings;
6. one topic-specific insight diagram for the current diagram-enabled pages;
7. practical guidance and checklist content;
8. final DaDaStore CTA;
9. three Related Articles cards;
10. shared footer and blog runtime.

Current QA/build scripts include:

- `scripts/build-blog-index.mjs`;
- `scripts/generate-sitemap.mjs`;
- `scripts/generate-rss.mjs`;
- `scripts/build-featured-rotation.mjs`;
- `scripts/build-category-directory.mjs`;
- `scripts/upgrade-related-articles.mjs`;
- `scripts/upgrade-article-insights.mjs`;
- `scripts/test-article-structure.mjs`;
- `scripts/test-related-articles.mjs`;
- `scripts/test-featured-rotation.mjs`;
- `scripts/test-blog-directory.mjs`;
- `scripts/test-article-link-encoding.mjs`.

`blog/data/qa-report.json` is historical and currently reports the earlier 6-published/55-draft state. It is not current production evidence and is not changed in this unit. Future validation must regenerate or replace it only in an explicitly authorized QA unit.

## 5. Auto Blogger objective

The Auto Blogger should help DaDaStore build an editorial pipeline that is consistent, traceable, and difficult to publish accidentally.

It may support:

- proposing topics;
- preparing article briefs;
- drafting original article copy;
- drafting metadata;
- suggesting a controlled category;
- proposing links to published articles;
- preparing a useful insight-diagram concept or markup;
- preparing a unique cover-image brief;
- checking structure, factual risk, originality, repetition, and public safety;
- packaging a non-public draft for human review.

It must optimize for editorial usefulness and review quality, not article volume. A smaller accepted batch is preferable to bulk content with overlapping intent or unverified claims.

## 6. Core operating model

```text
Topic queue
  → topic validation
  → duplicate-search-intent check
  → article brief
  → brief approval
  → draft generation
  → automated editorial QA
  → source/citation review
  → cover-image brief
  → insight-diagram plan
  → internal-link recommendations
  → editorial review
  → Project Owner approval
  → explicit controlled publication command
  → full regression tests
  → reviewed publication commit
```

The model separates five different responsibilities:

1. **Automated research support** identifies questions and candidate sources; it does not prove a claim.
2. **Automated drafting** creates non-public working content from an approved brief.
3. **Automated QA** produces findings and scores; it does not grant approval.
4. **Owner approval** is an explicit recorded human decision.
5. **Controlled publication** is a later explicit command and reviewed change set, never a side effect of generation or approval.

Core laws:

- Auto writing is not auto publishing.
- Research support is not source verification.
- A cited source must have been reviewed.
- Draft generation is not editorial approval.
- Automated QA is not factual approval.
- Owner approval is not an implicit publication command.
- Publication is not deployment.
- A failed gate stops the batch.

## 7. Automation boundaries

The Auto Blogger may eventually:

- create traceable topic proposals;
- validate topic fields and taxonomy;
- compare new topics with the published library;
- create schema-valid article briefs;
- create non-public draft article files;
- produce draft metadata and reading-time recommendations;
- suggest internal links to published records;
- propose Related Articles candidates without changing public cards;
- prepare cover-image and insight-diagram briefs;
- run deterministic structural/editorial tests;
- calculate quality scores and blocking findings;
- prepare a review report or review-ready private change set.

It must not:

- publish automatically;
- write to a public article path during drafting;
- modify published article copy, metadata, slugs, covers, diagrams, or links;
- overwrite a published slug;
- change a registry status to `published` implicitly;
- add drafts to Insights, Categories, sitemap, feed, featured rotation, Related Articles, navigation, or public counts;
- invent statistics, quotations, sources, case studies, testimonials, client results, or platform capabilities;
- use private client data;
- generate same-intent rewrites or superficial title variations;
- bypass a failed factual, duplication, editorial, visual, or regression check;
- generate more than the approved batch limit;
- commit, push, merge, deploy, or change GitHub Pages settings automatically.

## 8. Draft versus publication separation

The production Pages source is `main:/`. Files committed to that branch can be directly served even if no public page links to them. Therefore a folder such as `blog/drafts/` or a populated queue on `main` is not safely private.

The committed `blog/data/topic-queue.json` created in Unit 6A is an empty seed and field contract only. It contains no proposed topics, briefs, drafts, private sources, or approval records.

Operational queue and draft data must live in a private, non-Pages editorial workspace, such as:

```text
content/drafts/<batch-id>/<draft-id>/
```

That path is conceptual and must not be added to the production `main` branch. A future storage unit must choose and verify one of these controls before generation:

- a private local worktree outside the deployed repository;
- a separate private editorial repository;
- another access-controlled storage system with explicit retention and deletion rules.

A branch or pull request in a public repository is not private storage. A `noindex` tag is not adequate isolation because the URL remains reachable. Review previews must be separately approved and access controlled.

Only an owner-approved final article may be rendered into `blog/<slug>/`, registered as published, and included in public systems through the later controlled publication unit.

## 9. Batch architecture

Batch controls:

- default batch size: 5;
- minimum batch size: 1;
- maximum batch size: 10;
- only one active batch at a time;
- every batch stops after QA for review;
- no next batch begins until the previous batch is approved, rejected, or archived;
- all generated articles begin as drafts;
- every batch has a unique immutable batch ID;
- every topic, brief, and draft has a unique traceable ID;
- every draft links back to exactly one approved brief and topic;
- failure of one article blocks that article and prevents automatic batch advancement;
- partial batch acceptance requires explicit article-by-article owner decisions.

ID direction:

- batch: `batch-YYYYMMDD-<token>`;
- topic: `topic-YYYYMMDD-<token>`;
- brief: `brief-<topic-id>-vNN`;
- draft: `draft-<topic-token>-vNN`.

IDs support traceability. They do not create public URLs.

## 10. Topic queue schema

`blog/data/topic-queue.json` defines:

- schema version and an empty operational seed;
- the allowed topic lifecycle statuses;
- all required topic fields;
- value types, ranges, formats, and controlled values;
- taxonomy sourcing from `categories.json`;
- a 0–100 existing-topic overlap score;
- factual risk, source requirement, proposed-link, review, batch, and approval fields.

Required topic fields:

- `topic_id`;
- `proposed_title`;
- `primary_keyword`;
- `secondary_keywords`;
- `search_intent`;
- `target_audience`;
- `category`;
- `priority`;
- `content_type`;
- `business_relevance`;
- `existing_topic_overlap_score`;
- `duplicate_risk_status`;
- `source_requirements`;
- `factual_risk_level`;
- `proposed_internal_links`;
- `status`;
- `batch_id`;
- `created_at`;
- `reviewed_at`;
- `approved_by`.

Allowed statuses:

`proposed → under_review → approved_for_brief → brief_generated → draft_generated → editorial_review → approved_for_publication → published`

Terminal or alternative statuses are `rejected` and `archived`. Status changes must be validated. No status can skip required approvals, and `published` is never assigned by generation.

## 11. Article brief schema

`blog/data/article-brief-schema.json` is a JSON Schema Draft 2020-12 contract with no additional properties.

It requires:

- brief/topic identity and optional batch/draft identity;
- working title, proposed slug, keywords, intent, category, and article type;
- audience problem and bounded article promise;
- target length range;
- structured H2/H3 outline with purposes and required points;
- required concepts and prohibited claims;
- explicit factual claims/questions requiring sources;
- synthetic example requirements;
- published-only internal-link recommendations;
- external source requirements;
- CTA objective;
- topic-specific insight-diagram concept;
- unique 1280×720 cover concept without embedded title by default;
- related-topic candidates;
- controlled tone;
- originality requirements;
- approval state and optional approval record.

Schema validity proves structural completeness only. It does not prove that the brief is original, accurate, sourced, useful, or approved.

## 12. Editorial rules

`blog/data/editorial-rules.json` advances from version 2 to version 3 while preserving production-consumed keys and values:

- 1,400–2,200 target words;
- approved DaDaStore tone;
- required metadata;
- visual module system;
- maximum visual-structure reuse of twice per batch;
- draft-first publication defaults;
- owner approval requirement;
- automatic publishing disabled.

Version 3 adds:

- batch limits and traceability;
- factual-risk classifications;
- source-review rules;
- duplicate and cannibalization controls;
- weighted quality scoring;
- automatic rejection and manual-review conditions;
- unique cover requirements;
- diagram accessibility and uniqueness requirements;
- published-only internal-link and Related Articles rules;
- explicit production-protection flags;
- an expanded QA checklist.

Prohibited output includes invented statistics, unsupported claims, fabricated sources/case studies/quotations/testimonials, private client information, copied content, keyword stuffing, shallow listicles, repeated introduction/conclusion patterns, generic filler, duplicate metadata/slugs, near-duplicate intent, decorative-only diagrams, repeated covers, and automatic-publication instructions.

## 13. Quality-scoring model

The quality score totals 100:

| Dimension | Weight |
| --- | ---: |
| Search-intent fit | 9 |
| Topic originality | 9 |
| Business relevance | 6 |
| Structural completeness | 8 |
| Factual safety | 12 |
| Clarity | 7 |
| Depth | 7 |
| Actionable value | 9 |
| Internal-link quality | 5 |
| Heading quality | 4 |
| Introduction quality | 4 |
| Conclusion quality | 3 |
| CTA relevance | 3 |
| Diagram usefulness | 5 |
| Repetition control | 4 |
| Similarity to existing articles | 5 |

Thresholds:

- below 75: not eligible for editorial review;
- 75–84: eligible for editorial review only if all blocking checks pass;
- 85–100: eligible for Project Owner approval consideration;
- owner approval is never automatic at any score;
- minimum factual-safety score is 9/12 for editorial review and 11/12 for owner-approval consideration;
- an automatic-rejection condition overrides the numeric score.

Automatic rejection includes exact title/slug duplicates, 90+ overlap, same-intent rewrites, copied content, fabricated proof/sources, private information, unsupported high-risk claims, publication instructions, or missing brief traceability.

Manual review is required for 65–89 overlap, potential cannibalization, moderate/high factual risk, numerical or time-sensitive claims, source uncertainty, visual-concept similarity, or a score below 85.

## 14. Duplicate-topic protection

Every topic and brief must be compared with all published records using:

- normalized title;
- exact and normalized slug;
- primary and secondary keywords;
- search intent;
- category;
- article summary/excerpt;
- heading outline;
- title/meta-description intent;
- body/topic semantic overlap;
- cover concept;
- insight-diagram concept.

Required decisions:

- exact title duplicate: reject;
- exact slug duplicate: reject;
- same primary keyword and same intent with no distinct audience/problem: reject or consolidate;
- overlap score 90–100: reject;
- overlap score 65–89: mandatory manual review;
- overlap score below 65: may continue if no other duplication signal exists;
- superficial variations, reordered listicles, or title synonyms for an existing guide: reject;
- a legitimate update to an existing article must use a separately approved update workflow, not a new draft slug.

The overlap score must include an explanation and closest matching articles. A score without evidence cannot approve a topic.

## 15. Search-intent cannibalization protection

Cannibalization analysis is narrower than general topic similarity. It asks whether two pages would answer the same user need at the same stage with materially interchangeable guidance.

The system should compare:

- the question or decision the searcher needs answered;
- audience and business context;
- intended outcome;
- primary keyword and close variants;
- article type;
- proposed promise;
- heading sequence and required concepts;
- likely internal-link relationship.

Allowed outcomes:

- **distinct:** continue;
- **supporting cluster:** continue with a clear internal-link role;
- **ambiguous:** manual review;
- **cannibalizing:** reject, merge, narrow, or route to an existing-article update plan.

Category diversity alone does not make same-intent content distinct. A new visual or title does not resolve cannibalization.

## 16. Draft storage

Selected architecture: private, non-Pages editorial storage using the conceptual structure:

```text
content/drafts/<batch-id>/<draft-id>/
├── topic.json
├── brief.json
├── draft.html
├── source-log.json
├── qa-report.json
├── cover-brief.json
├── diagram-brief.json
└── review.json
```

This structure must not exist on the deployed `main` branch. Unit 6A does not create it.

Storage requirements for a later unit:

- access controlled;
- excluded from GitHub Pages;
- no public preview by default;
- no private client or credential data;
- traceable immutable IDs;
- versioned drafts rather than destructive overwrite;
- clear retention/deletion rules;
- export and rollback support;
- an explicit promotion process that copies only the approved final artifact into a public article path.

## 17. Factual-risk classification

### Low factual risk

Evergreen reasoning or process guidance without changing policies, current numerical data, pricing, or platform-capability claims.

Requirements: distinguish reasoning from facts and verify any named capability before publication.

### Moderate factual risk

Platform behavior, industry practices, research findings, technical guidance, or facts that may change.

Requirements: current external sources, primary-source preference, access dates, and manual editorial review.

### High factual risk

Laws, regulations, policies, advertising rules, pricing, current software features, market data, numerical claims, or other high-consequence/time-sensitive assertions.

Requirements:

- current external sources;
- primary-source preference;
- citation review;
- explicit Project Owner approval;
- no unsupported numerical claims;
- publication blocked if a required source cannot be reviewed.

Risk may be raised during drafting or QA. It cannot be lowered automatically merely because the article avoids citations.

## 18. Source policy

The architecture distinguishes:

- evergreen reasoning;
- Project Owner/user-provided source material;
- official documentation;
- research papers;
- reputable industry sources;
- inferred recommendations.

Source laws:

- no citation unless the source was actually opened and reviewed;
- current technical/platform claims should use official documentation where available;
- research claims should cite the primary paper where practical;
- source suggestions remain unverified until reviewed;
- every cited source record needs title, publisher/author, location, source class, publication/update date, access date, supported claims, and reviewer;
- quotes must be checked against the original source and used sparingly;
- inference must be labeled as inference;
- missing or contradictory sources produce a blocker or limitation, not an invented resolution;
- private source material cannot be copied into public drafts without explicit approval;
- browsing/research support is not a substitute for editorial judgment.

## 19. Cover-image workflow

The Auto Blogger may prepare a cover brief containing:

- concept name;
- topic-specific composition;
- headline-free direction;
- visual keywords and motifs;
- DaDaStore brand treatment;
- 1280×720 dimensions and 16:9 ratio;
- uniqueness notes against all existing covers and the active batch;
- meaningful alt-text draft;
- copied-artwork prohibition.

The cover must:

- explain or evoke the specific topic;
- use a distinct composition;
- avoid copied third-party artwork;
- avoid an embedded article title unless separately approved;
- remain within the established dark/cyan/pink/violet editorial language without repeating the same scene;
- pass visual, responsive, file, and alt-text review.

Image concept approval is not image approval. Image approval is not publication approval. No cover is generated or published in Unit 6A.

## 20. Insight-diagram workflow

Every future article brief must define one useful diagram concept with:

- a semantic family;
- explanatory purpose;
- meaningful labels;
- caption draft;
- accessible text summary;
- uniqueness notes;
- placement rationale;
- responsive behavior.

Controlled semantic families match the current shared visual system:

- comparison diagram;
- process flow;
- decision framework;
- measurement system;
- layered architecture.

A semantic family may be reused when justified, but the diagram logic, labels, composition, and editorial role must fit the topic. Decorative-only diagrams, clipped labels, color-only meaning, unexplained arrows, repeated logic, and animation-dependent meaning are prohibited.

Generated markup remains draft content and must pass current diagram, responsive, accessibility, structure, console, and network checks before publication.

## 21. Internal-link workflow

The Auto Blogger may recommend up to eight internal links per article.

Each recommendation needs:

- a currently published target slug;
- intended anchor meaning;
- editorial reason;
- proposed placement;
- confirmation that the target exists and is public;
- confirmation that it is not a self-link or duplicate target.

The system should favor links that clarify a prerequisite, deepen a related decision, or connect the article to a useful next step. Keyword stuffing, repetitive anchors, irrelevant links, draft links, and links created solely for count targets are prohibited.

Recommendations do not alter existing published articles. Reciprocal links require a separate approved update unit.

## 22. Related-article workflow

The current public system selects three cards from eligible published records using topic/category relevance and stored source relationships.

For drafts, the Auto Blogger may propose candidate slugs, but it must not update public Related Articles before publication approval.

At controlled publication time, the future command should:

- select from published records only;
- exclude the new article itself;
- prevent duplicate cards;
- require three valid targets and covers;
- preserve CTA-before-Related ordering;
- record source relationships;
- run `test-related-articles.mjs`;
- stop if any link, cover, count, relevance, or draft-exposure check fails.

## 23. Owner approval gate

Publication consideration requires all of these recorded facts:

1. Topic approved.
2. Brief approved.
3. Draft generated from that brief.
4. Automated QA passed.
5. All automatic rejection conditions cleared.
6. Manual review conditions resolved.
7. Editorial review completed.
8. Sources and citations reviewed where required.
9. Final metadata approved.
10. Final cover approved.
11. Final category approved.
12. Final internal links and Related candidates approved.
13. Project Owner approval recorded with reviewer and timestamp.
14. Explicit publication command authorized.

No score, status inference, elapsed time, CI result, or previous batch approval can replace the owner decision. Status transitions must be explicit and auditable.

## 24. Controlled publication workflow

The future publication command is not implemented in Unit 6A.

When separately approved, it should:

1. require an explicit article/draft ID and approval record;
2. confirm a clean, current production worktree and protected-file baseline;
3. revalidate topic, brief, draft, sources, metadata, cover, diagram, links, and owner approval;
4. reject any existing public slug or title conflict;
5. render/copy the approved article into `blog/<slug>/index.html`;
6. place/register the approved cover asset;
7. add one published registry record with final date, URL, reading time, and cover metadata;
8. rebuild Insights and the category directory;
9. generate Related Articles from published records only;
10. regenerate sitemap and feed from published records only;
11. update featured-rotation eligibility without forcing immediate selection;
12. run all structural, metadata, link, diagram, responsive, console, network, category, featured, sitemap, and feed tests;
13. stop and restore the pre-command worktree if any step fails;
14. produce a publication report listing every changed file and test;
15. leave commit, push, merge, and deployment as separately visible owner-controlled actions unless a later unit explicitly approves otherwise.

The command must operate on one explicitly approved publication set. It must not silently publish the remainder of a batch.

## 25. GitHub Actions role

No GitHub Actions workflow is created in Unit 6A.

A future Action may be considered for deterministic validation after local pure logic and guardrail tests exist. Its safest initial role is read-only validation of schemas, queue/brief contracts, duplication findings, and draft QA reports.

Future Action boundaries:

- manual dispatch or pull-request validation only;
- no schedule-based article generation;
- no Pages/deployment permission;
- no direct push to `main`;
- no automatic merge;
- no publication-state mutation;
- no automatic sitemap/feed/category/featured update;
- no external source or AI credentials until a separate secret/privacy boundary exists;
- no draft artifact published through Pages;
- least-privilege token permissions;
- owner approval required outside the workflow.

A public repository pull request exposes its contents through GitHub and is not acceptable for confidential drafts.

## 26. Failure handling

The system must fail closed.

- Invalid JSON or schema: stop before topic/brief processing.
- Category mismatch: stop.
- Batch over 10 or a second active batch: stop.
- Missing traceability ID: reject.
- Exact duplicate or 90+ overlap: reject.
- 65–89 overlap: hold for manual review.
- Missing required source: block the affected claim/article.
- Unsupported statistic, quote, proof, or high-risk claim: reject or hold until corrected and sourced.
- Quality score below 75: return to revision.
- Factual-safety sub-score below threshold: block regardless of total.
- Missing owner approval: block publication.
- Public draft reference found: stop and remove exposure before continuing.
- Publication test failure: restore the pre-command state and do not commit/push.
- Cover, diagram, link, metadata, console, network, responsive, or accessibility failure: stop.
- Partial output: retain only in private versioned draft storage and mark incomplete.

Failures must produce structured findings with stage, severity, rule, affected record, evidence, and recommended next action.

## 27. Audit trail

Each article must retain a traceable record of:

- input topic and topic versions;
- duplication/cannibalization comparison and closest matches;
- topic reviewer decision;
- generated brief and brief versions;
- brief approval;
- source requirements and reviewed-source log;
- generated draft and draft versions;
- automated QA results and scores;
- cover brief and approval;
- diagram brief/markup and approval;
- internal-link and Related candidates;
- editorial findings and corrections;
- owner decision, identity, timestamp, and notes;
- publication command inputs and report;
- publication commit;
- deployment/verification reference where separately authorized;
- rollback commit and reason if used.

Logs must not contain secrets or unnecessary personal/client data. Generated timestamps and actor names do not independently prove approval; the allowed state transition must also be valid.

## 28. Rollback model

Draft-stage rollback means selecting a previous version in private storage or archiving/rejecting the topic, brief, or draft. No public rollback is needed because drafts are not public.

Publication rollback must be planned before the publication commit:

1. record the pre-publication commit;
2. record all files created or changed;
3. create one bounded publication commit;
4. if rollback is required, use a normal revert/new correction commit rather than rewriting history;
5. remove the article from public registry/index/category/sitemap/feed/featured eligibility/Related cards as applicable;
6. restore affected published pages to their pre-publication versions;
7. run the full public regression suite;
8. record the rollback commit and live verification.

Rollback cannot recover exposed private data. Private information must therefore be prevented before any public commit.

## 29. Production-protection rules

The Auto Blogger architecture protects:

- all 61 current article files and their body copy;
- all current titles and slugs;
- current publication states and URLs;
- `blog/data/posts.json`;
- `blog/data/categories.json` and category counts;
- Insights and Categories HTML;
- sitemap and feed;
- featured rotation data and logic;
- Related Articles logic/cards;
- current covers and insight diagrams;
- public navigation;
- production domain, CNAME, DNS, Pages source, and Pages settings;
- `blog/data/article-plan.json`.

Unit 6A changes only architecture contracts, the editorial rule set, and documentation. No production generator is invoked.

## 30. Security and privacy boundaries

- No API keys, access tokens, passwords, cookies, OAuth grants, webhook secrets, or platform credentials in configs, queue entries, briefs, drafts, source logs, Actions, or reports.
- No private client names, messages, screenshots, results, account identifiers, or unpublished commercial data without an explicit later private-data process.
- No real customer personal data in examples.
- Examples must be synthetic and labeled internally as synthetic.
- No direct client-side AI credential.
- No external research or generation provider is authorized by Unit 6A.
- Future external processing requires data-minimization, retention, provider, cost, access, failure, and deletion boundaries.
- The committed configuration/schema files contain no secrets and no operational topics.
- Operational queue/draft storage must be access controlled and excluded from Pages.
- Logs should use immutable IDs and minimal actor information.
- Generated content is untrusted until validated and reviewed.

## 31. Files added

Added:

- `docs/UNIT_6A_AUTO_BLOGGER_ARCHITECTURE.md`;
- `blog/data/auto-blogger-config.json`;
- `blog/data/topic-queue.json`;
- `blog/data/article-brief-schema.json`.

Intentionally updated:

- `blog/data/editorial-rules.json` from version 2 to version 3, preserving current production-consumed settings and adding Auto Blogger rules.

No operational queue entries, article briefs, draft folders, generated articles, scripts, actions, or publication commands were added.

## 32. Files intentionally unchanged

- 61 published article directories;
- `blog/data/posts.json`;
- `blog/data/categories.json`;
- `blog/data/featured-rotation.json`;
- `blog/data/qa-report.json`;
- `blog/data/article-plan.json`;
- `blog/index.html`;
- `blog/category/index.html`;
- `blog/post-template.html`;
- `blog/sitemap.xml`;
- `blog/feed.xml`;
- `blog/assets/blog.css`;
- `blog/assets/blog.js`;
- all cover images and category graphics;
- all insight diagrams;
- all current scripts;
- homepage and main-site assets;
- `CNAME`, DNS, GitHub Pages settings, and production deployment.

Unit 6A verification record:

- published articles modified: 0;
- publication-state changes: 0;
- sitemap changes: 0;
- feed changes: 0;
- category changes: 0;
- featured-rotation changes: 0;
- Related-card changes: 0;
- production-domain changes: 0;
- committed queue entries: 0;
- draft exposure paths introduced: 0;
- auto-publication paths introduced: 0;
- batch default/maximum: 5/10;
- owner approval gate: defined;
- duplicate/cannibalization policy: defined;
- factual-risk/source policy: defined;
- rollback/audit model: defined;
- JSON/schema contract validation: passed;
- existing non-writing blog regression tests: passed;
- `git diff --check`: passed (line-ending warnings only; no whitespace errors);
- `blog/data/article-plan.json`: protected pre-existing modification left untouched.

## 33. Recommended Unit 6B

**Unit 6B — Auto Blogger Schema Validation and Topic-Queue Guardrails**

Goal: add dependency-free, pure validation logic and focused tests for the Unit 6A config, empty queue contract, article brief schema constraints, batch limits, lifecycle transitions, taxonomy, traceability IDs, quality-score weights/thresholds, production-protection flags, and public-draft exclusion.

Expected boundaries:

- validate only;
- no topic generation;
- no research;
- no article brief generation;
- no draft files;
- no image or diagram generation;
- no AI or external calls;
- no production mutation;
- no publication command;
- no GitHub Actions workflow;
- no changes to `blog/data/article-plan.json`.

The schema validator should prove that invalid or unsafe records fail closed before any later drafting unit is considered.

Final architecture verdict remains: **AUTO BLOGGER ARCHITECTURE READY**.

## 34. Suggested commit message

`Add controlled auto blogger architecture`
