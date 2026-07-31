# Unit 5T — Published Article Cover Images

## 1. Status

Implemented as a bounded asset and public-listing update. Six published articles now have six unique cover images; no publication state or article body was changed.

## 2. Purpose

Replace the repeated generic bar-chart treatment on published article cards with topic-specific editorial artwork that remains coherent with the DaDaStore V3 visual system.

## 3. Articles covered

1. A Practical Guide to Social Media Audience Research
2. How to Choose the Right Social Media Platforms for Your Business
3. How to Build Social Media Content Pillars That Guide Better Content
4. Social Media KPIs That Connect Activity to Business Goals
5. A Practical Social Media Strategy Template for Small Businesses
6. How to Create a Social Media Marketing Plan That Drives Results

## 4. Asset directory

All final covers are stored in:

`assets/images/blog/`

## 5. Naming convention

Each asset uses:

`cover-<article-slug>.jpg`

This creates a direct, stable mapping between a published article and its cover.

## 6. Dimensions and aspect ratio

- Export dimensions: 1280 × 720px
- Aspect ratio: 16:9
- Card presentation: `aspect-ratio: 16 / 9`
- Crop behavior: `object-fit: cover; object-position: center`
- Explicit HTML dimensions prevent layout shift.

## 7. Format and optimization

The six generated masters were exported as optimized JPEG assets at controlled quality because a reliable local WebP encoder was unavailable and no dependency installation was permitted.

Final payload range:

- smallest: 118,319 bytes
- largest: 185,787 bytes
- total: 851,823 bytes

All six assets remain within the planned approximate 120–250KB per-cover budget, allowing for the smallest file being slightly below the lower target.

## 8. Visual-system rules

The set uses:

- a modern editorial-tech aesthetic;
- clean geometric forms;
- restrained glass and holographic materials;
- high-key neutral space with deep navy structure;
- cyan signal paths;
- violet modules;
- controlled magenta decision accents;
- one distinct primary silhouette per topic.

The set excludes article-title text, numbers, performance figures, client materials, platform logos, screenshots, watermarks, and stock-photo compositions.

## 9. Audience-research concept

**Asset:** `cover-social-media-audience-research-guide.jpg`

A magnifying lens examines layered audience silhouettes, questions, conversations, behavior nodes, and evidence trails converging into a coherent audience model.

## 10. Platform-selection concept

**Asset:** `cover-how-to-choose-social-media-platforms-for-your-business.jpg`

Four abstract channel routes pass through a transparent selection gate. One cyan path continues while alternative routes remain muted, communicating deliberate channel choice.

## 11. Content-pillars concept

**Asset:** `cover-how-to-build-social-media-content-pillars.jpg`

Four translucent architectural pillars rise from one evidence foundation, each supporting a different abstract content artifact while remaining connected as one system.

## 12. KPI concept

**Asset:** `cover-social-media-kpis-that-connect-to-business-goals.jpg`

A four-layer measurement bridge carries activity signals through diagnostic layers to a highlighted decision node without presenting numerical metrics or a fake dashboard.

## 13. Strategy-template concept

**Asset:** `cover-social-media-strategy-template-for-small-business.jpg`

Eight distinct planning modules form one compact operating board connected by a continuous review loop.

## 14. Marketing-plan concept

**Asset:** `cover-how-to-create-a-social-media-marketing-plan-that-drives-results.jpg`

A connected planning route links audience, channel, content, measurement, and review modules on a deep navy operating surface.

## 15. Alt text per article

- Audience research: “Magnifying lens revealing layered audience signals and connected behavior patterns”
- Platform selection: “Branching channel pathways passing through a strategic selection gate”
- Content pillars: “Four connected glass content pillars rising from a shared evidence foundation”
- KPIs: “Measurement bridge connecting activity signals to a highlighted business decision node”
- Strategy template: “Eight-module social media strategy board connected by a continuous review loop”
- Marketing plan: “Connected planning route linking audience, channel, content, measurement, and review modules”

## 16. Files changed

- `assets/images/blog/cover-how-to-build-social-media-content-pillars.jpg`
- `assets/images/blog/cover-how-to-choose-social-media-platforms-for-your-business.jpg`
- `assets/images/blog/cover-how-to-create-a-social-media-marketing-plan-that-drives-results.jpg`
- `assets/images/blog/cover-social-media-audience-research-guide.jpg`
- `assets/images/blog/cover-social-media-kpis-that-connect-to-business-goals.jpg`
- `assets/images/blog/cover-social-media-strategy-template-for-small-business.jpg`
- `blog/index.html`
- `blog/category/index.html`
- `blog/assets/blog.css`
- `docs/UNIT_5T_PUBLISHED_ARTICLE_COVER_IMAGES.md`

## 17. Registry or template changes

The current registry does not store cover paths, so `blog/data/posts.json` was not changed.

The two public listing files now reference the same assigned image for each article:

- `blog/index.html`
- `blog/category/index.html`

The shared stylesheet adds only the responsive `.blog-card-cover` image behavior. Existing card text, metadata, links, layout, and filtering hooks remain intact.

## 18. Responsive behavior

Each cover:

- fills the available card width;
- preserves a 16:9 ratio;
- retains its centered focal concept;
- scales without fixed-height clipping;
- introduces no horizontal overflow;
- remains visually legible in the one-column 390px layout and three-column 1440px layout.

## 19. Performance impact

- Images below the initial viewport use native lazy loading.
- `decoding="async"` avoids synchronous image decoding.
- Explicit dimensions reduce cumulative layout shift.
- Six optimized files total approximately 832KB.
- No external image host or runtime dependency was added.

## 20. Accessibility verification

- All six covers have concise, topic-specific alt text.
- Alt text does not repeat article titles verbatim.
- No meaningful text is baked into the images.
- Article titles and links remain editable semantic HTML.
- The mobile menu retains its five existing destinations and toggle behavior.

## 21. Current publication state, remaining drafts, and boundaries

- Published articles: 6
- Remaining drafts: 55
- Newly published articles: 0
- Drafts exposed by this unit: 0
- Sitemap changes: 0
- RSS changes: 0
- Article body changes: 0

Allowed next work:

- Project Owner visual review of all six covers
- A bounded cover-approval checkpoint
- Optional later article-hero integration under a separate approved unit

Disallowed next work:

- Publishing more drafts
- Rewriting article content
- Changing titles, dates, slugs, reading times, sitemap, RSS, or publication state
- Redesigning card structure or unrelated pages
- Deployment, commit, or push

## 22. Recommended next unit and suggested commit message

**Recommended next unit:** Unit 5U — Published Cover Visual Approval Checkpoint

Goal: record Project Owner approval or bounded corrections for the six published cover images before any later article-level image reuse.

Suggested commit message:

`Add unique published article covers`
