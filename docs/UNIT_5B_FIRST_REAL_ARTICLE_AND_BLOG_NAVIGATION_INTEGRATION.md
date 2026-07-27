# Unit 5B — First Real Article and Blog Navigation Integration

## 1. Title

Unit 5B — First Real Article and Blog Navigation Integration

## 2. Status

Content implementation and navigation integration.

## 3. Purpose

This unit publishes the first real DaDaStore Insights article, replaces draft-facing public listings with the published entry, and connects the blog to the approved V3 homepage navigation and footer.

Core boundaries:

- Published editorial content is not automated publishing.
- Blog navigation integration is not production-domain cutover.
- A real article is not permission to invent evidence, metrics, or platform claims.
- Publication does not change DNS, canonical-domain strategy, or deployment settings.

## 4. Branch

- branch: `main`

## 5. First published article

Published:

- title: `How to Create a Social Media Marketing Plan That Drives Results`
- path: `blog/how-to-create-a-social-media-marketing-plan-that-drives-results/`
- category: `Social Media Strategy`
- author: `DaDaStore`
- publication date: `July 28, 2026`
- reading time: `9 min read`
- status: `published`
- article-body length: 1,557 words

The article uses original practical wording. It does not include guaranteed-results language, fabricated statistics, unsupported platform claims, filler, AI-generation references, or draft/sample labels.

## 6. Article structure

The article follows the approved long-form blog template and includes:

1. introduction;
2. business-goal definition;
3. target-audience identification;
4. platform selection by role;
5. content-pillar design;
6. sustainable publishing scheduling;
7. paid and organic coordination;
8. measurement criteria;
9. review and optimization;
10. a final practical checklist;
11. a DaDaStore contact CTA.

It also retains the established article contents rail, responsive planning-system visual, article navigation, blog header, and structured footer.

## 7. Metadata

The article includes:

- a descriptive HTML title;
- a unique meta description;
- `index, follow` robots metadata;
- author metadata;
- Open Graph title and description;
- Open Graph article type;
- the root-relative article URL path;
- publication date;
- article author;
- article section/category.

No production-domain canonical link was added because no separate blog canonical strategy has been approved.

## 8. Blog data update

`blog/data/posts.json` retains exactly three records:

- one published record;
- two draft records.

The published record uses:

```json
{
  "status": "published",
  "featured": true,
  "url": "./how-to-create-a-social-media-marketing-plan-that-drives-results/"
}
```

Both draft records remain non-public and use `null` URLs.

## 9. Blog homepage update

The blog homepage now:

- describes DaDaStore Insights as a public editorial resource;
- presents the real article as the featured insight;
- links the featured card directly to the article;
- includes the same published article in the latest-insights grid;
- removes draft filters and all draft cards from the public grid;
- uses the Social Media Strategy category;
- removes draft, sample, template-preview, and unpublished-foundation wording;
- retains the approved visual and responsive system.

## 10. Category-page update

The category page now:

- uses the `Social Media Strategy` title and category label;
- contains one published article card;
- links to the real article path;
- links back to all insights;
- removes draft article cards and visual-foundation wording;
- retains the approved category layout and CTA.

## 11. Main navigation integration

The main homepage desktop/mobile navigation order is:

1. Services
2. Work
3. Process
4. Proof
5. Reviews
6. Blog
7. Contact

The Blog link targets `blog/`.

It is a normal page link rather than an in-page section target. The homepage active-section observer continues to select only hash links and was not modified.

## 12. Footer integration

The main homepage Explore column includes Blog between Reviews and Contact and targets `blog/`.

Blog-page footers link to the insights library, category, main-site services/work/reviews where applicable, and the approved DaDaStore email.

## 13. Draft-visibility boundary

The two remaining JSON draft records are not rendered on:

- the blog homepage;
- the public category page;
- the published article;
- the main homepage.

The existing standalone `post-template.html` remains a noindex internal template and is not linked from public article listings.

## 14. Responsive behavior

Microsoft Edge checks cover the main homepage, blog homepage, category page, and published article at:

- 375px;
- 390px;
- 768px;
- 1024px;
- 1440px.

Verified behavior:

- no horizontal overflow;
- article title wraps within the viewport;
- article body remains readable;
- article cards stay within their grids;
- main and blog mobile menus open within the viewport;
- the main mobile menu includes Blog;
- the Start a Project actions remain available;
- desktop navigation and layouts remain usable;
- no clipping was observed.

## 15. Files changed

Added:

- `blog/how-to-create-a-social-media-marketing-plan-that-drives-results/index.html`
- `docs/UNIT_5B_FIRST_REAL_ARTICLE_AND_BLOG_NAVIGATION_INTEGRATION.md`

Changed:

- `blog/data/posts.json`
- `blog/index.html`
- `blog/category/index.html`
- `index.html`

Unchanged:

- `assets/css/style.css`
- `assets/js/main.js`
- `blog/assets/blog.css`
- `blog/assets/blog.js`
- production-domain and DNS configuration

## 16. Verification record

- Branch: `main`
- Article path HTTP load: pass
- Article-body word count: 1,557
- JSON parsing: pass
- JSON records: 3
- Published records: 1
- Draft records: 2
- Published URL: correct
- Public draft cards: 0
- Draft/sample/placeholder wording on public blog surfaces: none
- Main desktop Blog navigation: present
- Main mobile Blog navigation: present and usable
- Main footer Blog link: present
- Homepage active-section observer: unchanged
- Mailto target: `mailto:dadastore.co@gmail.com`
- Responsive widths: 5
- Public pages per width: 4
- Page/viewport checks: 20
- Mobile-menu checks: 4
- Horizontal overflow: none
- Console errors: 0
- Failed local requests: 0
- External dependencies added: none
- Deployment: not performed
- Commit/push: not performed

## 17. Recommended next unit

**Unit 5C — Blog Automation Architecture and Content Publishing Workflow**

Goal: define the controlled editorial, validation, review, and publication workflow before any automation is implemented.

## 18. Explicitly not next

- GitHub Actions implementation;
- automatic AI publishing;
- migrating old blog posts;
- publishing the two remaining drafts;
- CMS or database adoption;
- analytics or newsletter backend;
- production-domain cutover;
- DNS changes;
- deployment;
- commit or push without separate authorization.
