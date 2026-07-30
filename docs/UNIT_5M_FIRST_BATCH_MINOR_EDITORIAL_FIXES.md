# Unit 5M — First Batch Minor Editorial Fixes

## 1. Title

Unit 5M — Apply Minor Editorial Fixes to Four First-Batch Articles

## 2. Status

Bounded content corrections and documentation complete.

All four edited articles remain unapproved drafts. Editing did not authorize publication or deployment.

## 3. Purpose

This unit applies only the required minor corrections recorded in Unit 5L for the four articles classified **Ready after minor edits**. It preserves each topic, slug, visual module, layout, navigation system, draft boundary, and null public URL.

Core boundaries:

- Minor editing is not major revision.
- Editing is not approval.
- Approval is not publication.
- Publication is not deployment.
- Draft status remains unchanged.

## 4. Articles edited

Exactly four draft article files were edited:

1. **A Practical Guide to Social Media Audience Research**  
   `blog/social-media-audience-research-guide/index.html`
2. **How to Choose the Right Social Media Platforms for Your Business**  
   `blog/how-to-choose-social-media-platforms-for-your-business/index.html`
3. **How to Build Social Media Content Pillars That Guide Better Content**  
   `blog/how-to-build-social-media-content-pillars/index.html`
4. **Social Media KPIs That Connect Activity to Business Goals**  
   `blog/social-media-kpis-that-connect-to-business-goals/index.html`

The article topics, slugs, categories, draft labels, visual modules, navigation, contact destinations, and page layouts were preserved.

## 5. Article excluded from this unit

**A Practical Social Media Strategy Template for Small Businesses**  
`blog/social-media-strategy-template-for-small-business/index.html`

Unit 5L classified this article **Requires major revision**. It was not edited. Its SHA-256 remained:

`C251774C9BAD3E1B3A5107E4C8C6B5869B989F245E6EB155D345CA75A6B3DBAE`

## 6. Changes made per article

### A Practical Guide to Social Media Audience Research

- Added a contextual link to the existing published social media planning guide.
- Added a concise transition from evidence-source boundaries into the research process.
- Removed the contextual link to the still-draft platform-selection article.
- Replaced the related-draft cards with one card for the existing published planning guide.
- Preserved the process visual, headings, research steps, checklist, CTA, and draft presentation.

### How to Choose the Right Social Media Platforms for Your Business

- Tightened repeated channel-capacity language in the introduction.
- Softened the generalized claim about smaller channel portfolios.
- Clarified that a numeric score organizes judgment rather than proving channel fit.
- Changed the decision-principle callout from a structural H3 to emphasized paragraph content.
- Replaced related-draft cards with the existing published planning guide.
- Preserved the decision visual, five criteria, five-step process, checklist, CTA, and draft presentation.

### How to Build Social Media Content Pillars That Guide Better Content

- Replaced the opening link to the still-draft content-calendar article with the existing published planning guide.
- Removed the contextual link to the still-draft audience-research article while preserving the source-research guidance.
- Reframed “three to five pillars” as a flexible starting range rather than a general rule.
- Replaced related-draft cards with the existing published planning guide.
- Preserved the pillar visual, seven-step method, checklist, CTA, and draft presentation.

### Social Media KPIs That Connect Activity to Business Goals

- Added a contextual link to the existing published planning guide.
- Tightened the opening attribution boundary without removing it.
- Defined `qualified reach`, `attention depth`, `creative fatigue`, and `view quality` as team-defined diagnostics rather than universal measures.
- Removed the contextual link to the still-draft content-pillar article.
- Replaced related-draft cards with the existing published planning guide.
- Preserved the scorecard visual, measurement ladder, KPI process, checklist, CTA, and draft presentation.

## 7. Unsupported claims removed or softened

- Changed the platform article's statement that a smaller portfolio “usually produces” more consistent learning to the conditional statement that it **can support** more consistent learning when the alternative depends on occasional activity.
- Clarified that one-to-five platform scores support structured judgment and do not prove channel fit.
- Changed the pillar-count recommendation from a general target to a possible starting range that depends on scope and capacity.
- Clarified that several KPI terms are not standardized metrics and require documented team definitions, sources, and review rules.

No statistics, performance promises, private proof, client claims, or guaranteed outcomes were added.

## 8. Metadata changes

The four article HTML metadata blocks remained complete and did not require title, description, Open Graph, robots, author, category, or slug changes.

One documented registry inconsistency was corrected:

- `blog/data/posts.json`
- `social-media-audience-research-guide`
- reading time: `9 min read` → `10 min read`

This now matches `article-plan.json` and the visible article presentation. The record remains `draft`, its date remains null, and its public URL remains null. No publication state changed.

## 9. Internal-link changes

All contextual and related links from the four edited articles to still-draft articles were removed or deferred.

The edited articles now use only:

- the existing published social media planning article;
- the public Insights and category navigation;
- stable main-site section links;
- the approved DaDaStore email contact.

No draft article became publicly linked. Future cross-links may be restored only after their destinations are separately approved and published.

## 10. Verification results

- Edited draft article files: 4
- Major-revision article changed: no
- Existing published article changed: no
- Main website changed: no
- Selected article state failures: 0
- Null public URL failures: 0
- Metadata failures: 0
- Reading-time failures: 0
- Broken links: 0
- Draft links from edited article content: 0
- Draft exposure on public grids: 0
- Sitemap draft leaks: 0
- RSS draft leaks: 0
- Mobile-navigation failures at 390px: 0
- Horizontal-overflow failures at 390px: 0
- Heading-clipping failures at 390px: 0
- Console errors: 0
- Failed requests: 0
- `git diff --check`: pass

The browser evidence for the four edited pages is stored locally under `_local-reference/qa/unit-5m/` and is not part of public content.

## 11. Current publication state

- Reviewed first-batch articles: 5
- Edited articles: 4
- Major-revision article held unchanged: 1
- Selected articles with draft status: 5
- Selected articles with null public URLs: 5
- Selected articles approved: 0
- Selected articles published: 0
- Existing published blog articles: 1

The public blog grid, sitemap, and RSS continue to expose only the existing published article.

## 12. Remaining editorial blocker

`social-media-strategy-template-for-small-business` remains the first batch's substantive editorial blocker.

Unit 5L found that it overlaps the existing published planning guide and does not yet provide a sufficiently distinct, reusable template. That work is a major revision and was deliberately excluded from this unit.

## 13. Allowed next work

- Project Owner review of these four bounded corrections;
- explicit acceptance or rejection of each edited draft;
- a separately authorized major revision of the strategy-template article;
- factual rechecking where platform or measurement definitions may change;
- another bounded editorial and browser QA pass after any further edits.

## 14. Disallowed next work

- treating these edits as Project Owner approval;
- changing any selected article to `approved` or `published`;
- exposing drafts through the public grid, sitemap, or RSS;
- publishing or deploying any article;
- rewriting unrelated draft articles;
- modifying the existing published article or main website;
- adding unsupported statistics, performance promises, client claims, or private messages;
- committing or pushing.

## 15. Recommended next unit

**Unit 5N — Small-Business Strategy Template Major Revision**

Goal: revise only `social-media-strategy-template-for-small-business` into a distinct, reusable seven-part template, preserve draft status and public invisibility, and return it for editorial review. The unit must not approve, publish, or deploy the article.

## 16. Suggested commit message

`Apply first batch minor editorial fixes`
