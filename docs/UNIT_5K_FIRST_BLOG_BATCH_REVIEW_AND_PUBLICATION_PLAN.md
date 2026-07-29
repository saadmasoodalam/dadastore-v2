# Unit 5K — First Blog Batch Review and Publication Plan

## 1. Title

Unit 5K — First Blog Batch Review and Publication Plan

## 2. Status

Docs-only planning complete.

This unit selects five existing drafts for Project Owner editorial review. It does not approve, publish, deploy, or modify any article.

## 3. Purpose

The purpose of this plan is to define a small, coherent first editorial-review batch and document the controlled mechanics that could be used later if—and only if—the Project Owner explicitly approves individual articles for publication.

Core boundaries:

- Review is not approval.
- Approval is not publication.
- Publication is not deployment.
- Draft readiness is not factual approval.
- Technical validation is not editorial validation.

## 4. Authority reviewed

- `docs/UNIT_5J_FIX_BLOG_LIBRARY_READINESS_BLOCKERS.md`
- `blog/data/posts.json`
- `blog/data/article-plan.json`
- `blog/data/editorial-rules.json`
- `blog/data/qa-report.json`
- `blog/README.md`
- the 60 generated draft article folders
- the existing published article
- `blog/sitemap.xml`
- `blog/feed.xml`
- `scripts/build-blog-index.mjs`
- `scripts/generate-sitemap.mjs`
- `scripts/generate-rss.mjs`
- the approved static V3 blog architecture and editorial standards

## 5. Current verified state

- Draft articles: 60
- Published articles: 1
- Metadata failures: 0
- Reading-time failures: 0
- Mobile-menu failures: 0
- Broken links: 0
- Draft exposure: 0
- Sitemap draft leaks: 0
- RSS draft leaks: 0
- Responsive QA: passed at 390px and 1440px across the complete blog library
- Console errors: 0
- Failed requests: 0
- Duplicate titles or slugs: 0
- Current sitemap entries: blog home, category page, and the one existing published article
- Current RSS entries: the one existing published article

The library is technically ready for editorial review. None of the 60 drafts has received factual or publication approval through that technical result.

## 6. First-batch selection criteria

The first review batch should:

1. stay small enough for line-by-line owner review;
2. form a coherent topic cluster around the existing published social-media planning guide;
3. address foundational questions before more specialized execution topics;
4. serve clearly defined business-owner or marketing-team audiences;
5. offer useful internal links to an already published article or stable DaDaStore destination;
6. avoid depending on unpublished claims, private client evidence, or volatile performance statistics;
7. represent varied, practical editorial structures without flattening the approved article-specific visuals;
8. support a sensible staged publication order if the articles are later approved;
9. remain independently rejectable or revisable without blocking the other four articles.

Selection does not certify factual accuracy, originality, tone, or publication fitness. Those remain part of Project Owner editorial review.

## 7. Recommended batch size

**Five articles.**

Five is the approved default and is appropriate here: it is large enough to establish a useful Social Media Strategy cluster but small enough for deliberate owner review and controlled, reversible publication decisions. No reason supports expanding the first review batch beyond five.

## 8. Selected draft articles

### 8.1 A Practical Social Media Strategy Template for Small Businesses

- **Slug:** `social-media-strategy-template-for-small-business`
- **Category:** Social Media Strategy
- **Primary topic:** Social media strategy template
- **Intended audience:** Small-business owners and lean marketing teams
- **Estimated reading time:** 9 min read
- **Internal-link opportunities:**
  - existing published social media marketing plan guide;
  - DaDaStore Services section;
  - later reciprocal connection to the platform-selection article;
  - later connection to the strategy audit article when that article is approved and published.
- **Reason for inclusion:** This is the clearest bridge from the existing high-level planning guide to a practical operating document. It can become the first supporting article in the cluster without requiring unpublished performance evidence.

### 8.2 A Practical Guide to Social Media Audience Research

- **Slug:** `social-media-audience-research-guide`
- **Category:** Social Media Strategy
- **Primary topic:** Social media audience research
- **Intended audience:** Strategists and marketers improving audience understanding
- **Estimated reading time:** 10 min read
- **Internal-link opportunities:**
  - existing published social media marketing plan guide;
  - public Insights home;
  - selected platform-selection article;
  - later competitor-analysis article after separate approval and publication.
- **Reason for inclusion:** Audience understanding is an upstream decision that improves the usefulness of later channel, content, and measurement guidance. It provides a strong second step in the cluster and keeps the first batch focused on decision quality rather than unsupported outcome claims.

### 8.3 How to Choose the Right Social Media Platforms for Your Business

- **Slug:** `how-to-choose-social-media-platforms-for-your-business`
- **Category:** Social Media Strategy
- **Primary topic:** How to choose social media platforms
- **Intended audience:** Business owners deciding where to focus limited social media resources
- **Estimated reading time:** 8 min read
- **Internal-link opportunities:**
  - existing published social media marketing plan guide;
  - DaDaStore Services section;
  - selected audience-research article;
  - later organic-and-paid strategy article after separate approval and publication.
- **Reason for inclusion:** It addresses a common resource-allocation decision and follows naturally after audience research. Its practical decision focus broadens the cluster while remaining relevant to small teams.

### 8.4 How to Build Social Media Content Pillars That Guide Better Content

- **Slug:** `how-to-build-social-media-content-pillars`
- **Category:** Social Media Strategy
- **Primary topic:** Social media content pillars
- **Intended audience:** Content leads and social media managers
- **Estimated reading time:** 8 min read
- **Internal-link opportunities:**
  - existing published social media marketing plan guide;
  - public Insights home;
  - selected audience-research article;
  - later content-calendar article after separate approval and publication.
- **Reason for inclusion:** It turns research and channel choices into a repeatable content-planning system. It also introduces an execution-oriented article without moving prematurely into channel-specific tactics or performance promises.

### 8.5 Social Media KPIs That Connect Activity to Business Goals

- **Slug:** `social-media-kpis-that-connect-to-business-goals`
- **Category:** Social Media Strategy
- **Primary topic:** Social media KPIs
- **Intended audience:** Marketing managers responsible for social media reporting
- **Estimated reading time:** 9 min read
- **Internal-link opportunities:**
  - existing published social media marketing plan guide;
  - DaDaStore Services section;
  - later strategy-audit article after separate approval and publication;
  - later paid-media reporting article after separate approval and publication.
- **Reason for inclusion:** It closes the first cluster with measurement and decision-making. It is also a related-article target already identified by the existing published guide, making it a useful candidate for a future reciprocal link after approval.

## 9. Editorial review checklist

Each article must be reviewed independently. A pass for one article does not approve the other four.

### Title quality

- Does the title accurately describe the article?
- Is it specific without being sensational or making a result promise?
- Does it remain natural rather than keyword-stuffed?

### Search intent

- Does the article satisfy the practical informational intent in `article-plan.json`?
- Does the answer arrive early enough for the intended reader?
- Are the examples and decisions appropriate to that intent?

### Factual support

- Are platform behaviors, definitions, and technical statements current and supportable?
- Are evidence, assumptions, recommendations, and opinion clearly distinguished?
- Are measurement limitations stated where relevant?
- Are there unsupported statistics, guarantees, or implied client results?

### Tone and readability

- Is the tone practical, intelligent, and direct?
- Are paragraphs concise and transitions natural?
- Is jargon explained or removed?
- Does the article sound useful rather than promotional or repetitive?

### Heading structure

- Is there one clear H1?
- Do H2 and H3 headings form a logical, non-repetitive hierarchy?
- Can a reader scan the article and understand its process?

### Duplicate-content risk

- Does the article provide a distinct purpose from the existing published guide?
- Does it avoid repeating long passages, generic introductions, checklists, or conclusions from other drafts?
- Is its topic-specific visual module meaningfully different and editorially useful?

### Metadata accuracy

- Do title, description, category, author, slug, reading time, Open Graph fields, and visible article metadata agree?
- Is draft `noindex, nofollow` preserved during review?
- Are canonical and public URLs withheld until the later publication unit?

### Internal links

- Does every rendered link resolve and materially help the reader?
- Are anchors descriptive and natural?
- Are unpublished related drafts excluded from public-facing recommendations until they are published?
- Are links to the existing published guide and stable main-site destinations contextually relevant?

### CTA relevance

- Does the DaDaStore CTA follow naturally from the topic?
- Is it useful and proportionate rather than making a guaranteed-result claim?
- Does the contact destination remain correct?

### Public-safe claims

- Is private client information absent?
- Are fake statistics, case studies, testimonials, and performance claims absent?
- Are no guaranteed outcomes implied?
- Could every claim be defended if the article became public?

The Project Owner should record one result per article: **approved as written**, **approved with specified edits**, **return for revision**, or **rejected**.

## 10. Publication-order recommendation

If all five articles receive explicit approval, publish them in this order:

1. `social-media-strategy-template-for-small-business`
2. `social-media-audience-research-guide`
3. `how-to-choose-social-media-platforms-for-your-business`
4. `how-to-build-social-media-content-pillars`
5. `social-media-kpis-that-connect-to-business-goals`

This order moves from strategy structure to research, channel choice, content planning, and measurement. It also enables internal links only after their targets are public.

The safer operating method is a staged sequence, not a single bulk release:

- prepare one approved article;
- run publication and browser QA;
- obtain the required release authorization;
- then advance to the next approved article.

The Project Owner may approve fewer than five or change the order. An unapproved article must be skipped without blocking approved articles.

## 11. Required Project Owner approvals

Before any selected article can move beyond draft, the Project Owner must explicitly approve:

1. final title and slug;
2. factual accuracy and public-safe claim boundary;
3. editorial tone, examples, headings, checklist, and CTA;
4. final metadata and estimated reading time;
5. category assignment;
6. internal and related-article links that will be public;
7. the article-specific visual module;
8. proposed publication date and position in the sequence;
9. canonical/public URL strategy;
10. the article's transition from `draft` to `approved`;
11. a separate later transition from `approved` to `published`;
12. a separate deployment or release action.

Silence, technical QA, batch selection, or approval of another article does not satisfy these requirements.

## 12. Proposed publication mechanics

Publication must occur only in a later, explicitly authorized unit. For an approved selected article, that unit should make a bounded and reviewable state transition.

### Exact files expected to change

For whichever of the five articles the Project Owner approves:

- `blog/<approved-slug>/index.html`
  - remove draft-only presentation;
  - change robots metadata to `index, follow`;
  - verify final canonical and Open Graph URL;
  - record approved publication date and visible status.
- `blog/data/posts.json`
  - change only the approved record from `draft` to `published`;
  - assign the approved date and valid relative public URL.
- `blog/data/article-plan.json`
  - record the matching approved/published lifecycle state without altering unrelated records.
- `blog/index.html`
  - add only the newly published article to the public article grid in the approved order.
- `blog/category/index.html`
  - add only the newly published article under Social Media Strategy.
- `blog/sitemap.xml`
  - regenerate from published records so only published URLs are added.
- `blog/feed.xml`
  - regenerate from published records so only published items are added.
- `blog/data/qa-report.json`
  - regenerate after publication-state, link, feed, and browser validation.
- a later unit record under `docs/`
  - record owner approval, exact scope, verification, and release boundary.

The existing scripts should be executed, not edited, unless a separate diagnosed script defect requires an explicitly bounded correction.

### Draft-to-published state transition

The preferred lifecycle is:

```text
draft -> Project Owner editorial review -> approved -> separately authorized publication -> published
```

No tool should skip directly from technical readiness to publication. Records not expressly approved remain `draft`, retain null public URLs, keep `noindex, nofollow`, and remain absent from public grids, sitemap, and RSS.

### Sitemap inclusion

After a record becomes published with a valid URL, run `scripts/generate-sitemap.mjs`. Confirm the approved article appears exactly once and all remaining drafts appear zero times.

### RSS inclusion

Run `scripts/generate-rss.mjs` after the registry transition. Confirm the approved article appears exactly once with the final title, description, link, publication date, author, and category.

### Registry update

Update only the approved article's `posts.json` record. Verify the total published count increases by exactly one and the draft count decreases by exactly one for each authorized publication.

### Canonical URL verification

Before changing robots status:

- confirm the approved public base and final article path;
- confirm canonical, `og:url`, registry URL, sitemap URL, RSS link, and rendered navigation link identify the same route;
- verify the route loads without redirects, missing assets, or duplicate canonical targets;
- do not infer production-domain approval from the current GitHub Pages preview-safe URLs.

### Internal-link handling

Enable cross-links only when both source and destination are published and the link is editorially useful. Changes to the existing published article or another approved article require explicit inclusion in the later unit's file scope.

## 13. Rollback plan

If a prepared article fails pre-deployment validation:

1. restore its `posts.json` record to `draft`, null URL, and null publication date;
2. restore the matching `article-plan.json` lifecycle state;
3. restore `noindex, nofollow` and draft presentation in its article HTML;
4. remove it from the blog home and category grids;
5. regenerate sitemap and RSS from published records;
6. regenerate `qa-report.json`;
7. confirm the public published count and URLs match the last approved state.

If a deployed article requires rollback, first obtain explicit release/rollback authorization, then revert only that publication unit or redeploy the last verified version. DNS, Pages settings, or unrelated published articles must not be changed as an improvised rollback.

Rollback does not delete the draft folder or article content. It returns the article to the controlled review state.

## 14. Allowed next work

- Project Owner editorial review of these five drafts;
- article-specific factual and claim review;
- recording explicit owner decisions for each selected draft;
- narrowly scoped revisions requested during review;
- planning final canonical URLs and publication dates;
- preparing a later controlled publication unit for approved articles only.

## 15. Disallowed next work

- publishing any selected draft without explicit article-level approval;
- publishing all five merely because they were selected;
- deploying publication changes without separate authorization;
- changing draft or publication statuses in this planning unit;
- adding drafts to the blog home, category page, sitemap, or RSS;
- bulk-editing the other 55 drafts;
- rewriting article bodies to make them visually uniform;
- exposing private client details or unsupported performance claims;
- modifying DNS, GitHub Pages settings, or the main website;
- committing or pushing without authorization.

## 16. Recommended next unit

**Unit 5K-Review — Project Owner Editorial Review of the First Five Blog Drafts**

Goal: review each selected article against the checklist, record article-level decisions and required revisions, and identify which—if any—may advance to an approved state. The review unit must not publish or deploy articles.

## 17. Test record

No automated tests were required or run because this unit is documentation and planning only.

Static selection checks:

- selected article count: 5;
- every selected slug exists in `blog/data/article-plan.json`: yes;
- every selected slug exists in `blog/data/posts.json`: yes;
- every selected article folder and `index.html` exists: yes;
- every selected article has plan status `draft`: yes;
- every selected article has registry status `draft`: yes;
- every selected article has public URL `null`: yes;
- selected articles already published: 0;
- existing published article selected: no;
- later publication file scope identified: yes;
- article content modified: no;
- status modified: no;
- sitemap or RSS modified: no;
- main-site files modified: no.
