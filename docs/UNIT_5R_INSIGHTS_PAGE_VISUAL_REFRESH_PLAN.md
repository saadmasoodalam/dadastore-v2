# Unit 5R — Insights Page Visual Refresh Plan

## 1. Title

Unit 5R — Insights Page Visual Refresh Plan

## 2. Status

Docs-only visual planning complete.

No HTML, CSS, JavaScript, article content, registry data, public feed, sitemap, image asset, or runtime behavior changed in this unit.

Core boundaries:

- Planning is not implementation.
- Visual direction is not final asset production.
- Asset planning is not article publication.
- Published-card art is not a full-site redesign.
- A brighter section must remain recognizably DaDaStore.

## 3. Purpose

This plan defines a bounded refresh for the public Insights landing page after the first six-article library became available locally. It translates the Project Owner's requested light hero, more creative hero artwork, light Knowledge Library, and article-specific cover imagery into an implementation-ready visual direction without creating assets or changing code.

## 4. Current state summary

The current Insights landing page contains:

- a dark sticky blog header;
- a dark hero with a large gradient “Insights” heading;
- a coded circular signal panel with four generic topic labels;
- a dark featured section and featured article card;
- a dark Knowledge Library section;
- six published article cards;
- a dark category preview and contact CTA;
- a dark footer.

The current system already includes useful DaDaStore foundations:

- dark navy and ink surfaces;
- cyan, pink, and violet accents;
- white and muted text roles;
- light-paper tokens that can support brighter sections;
- rounded 18–28px geometry;
- subtle borders, glow, shadow, and hover elevation;
- responsive one- and two-column grids;
- reduced-motion behavior.

The six published articles already use distinct in-article coded visuals: a planning system, audience-research process, platform decision tree, content-pillar framework, KPI scorecard, and eight-part strategy framework.

The landing-page cards do not communicate that distinction. Their visual panels reuse the same generic five-bar composition with only minor background-color changes.

## 5. Project Owner requested changes

The Project Owner requested:

1. a white hero section;
2. a more creative hero image;
3. no major redesign of the featured section;
4. a white Knowledge Library section;
5. unique creative images for every published post, related directly to each article topic rather than generic bar visuals.

## 6. Visual-refresh scope

The refresh is bounded to:

- the Insights landing-page hero surface and visual;
- the transition between the dark header and light hero;
- CTA styling inside the light hero;
- the Knowledge Library section background and heading colors;
- published article-card surface, text, border, and hover contrast on white;
- one unique cover image for each of the six published articles;
- responsive image framing and loading behavior;
- only the HTML/CSS and image references required to present those changes later.

## 7. Out-of-scope items

This plan does not authorize:

- changing blog navigation structure or labels;
- redesigning the featured section;
- changing article titles, excerpts, categories, dates, or reading times;
- rewriting article content;
- redesigning article-body layouts;
- replacing existing in-article topic diagrams;
- changing publication state or public URLs;
- modifying `posts.json`, article-plan data, sitemap, or RSS;
- redesigning category pages, the main website, or the footer;
- adding animation libraries, frameworks, or external dependencies;
- generating images during Unit 5R;
- deployment, commit, or push.

## 8. Hero section redesign plan

### White/light surface direction

Use a high-key surface based on the existing DaDaStore paper tokens:

- primary background: `#ffffff` or `var(--blog-paper)`;
- optional secondary wash: `#f5f7fb`;
- dark heading: `var(--blog-paper-text)`;
- supporting copy: `var(--blog-paper-muted)`;
- low-opacity cyan, violet, and pink radial light;
- an extremely subtle grid or dotted field using dark ink at approximately 3–5% opacity.

The hero should feel luminous rather than blank. It should not become a generic white corporate banner.

### Retained brand cues

Retain:

- the existing header and logo;
- the “Strategy / Systems / Execution” eyebrow;
- the “DaDaStore Insights” title;
- cyan–violet–pink gradient emphasis;
- rounded image framing;
- restrained glow and technical geometry;
- the current page-width and responsive spacing system.

The dark header may remain as a strong top boundary. A thin gradient rule or soft shadow should make the transition into the white hero deliberate.

### Typography treatment

- Preserve the current typeface and heading scale.
- Use dark ink for “DaDaStore.”
- Retain the brand gradient on “Insights,” with enough saturation for a white background.
- Keep the supporting paragraph within the current readable width.
- Avoid outlined, ultra-light, or low-contrast headline treatments.
- Keep mobile heading sizing controlled by `clamp()` and preserve full-word wrapping.

### CTA treatment

- Primary CTA: dark ink/navy fill, white label, and a restrained cyan-to-violet edge or hover glow.
- Secondary CTA: dark text link with a cyan or violet arrow/accent.
- Preserve existing CTA wording and destinations unless a later implementation unit explicitly authorizes copy changes.
- Maintain current keyboard focus treatment and minimum tap area.

### Recommended hero illustration concept options

#### Option A — Editorial Intelligence Constellation

A high-key 3D editorial scene with a central DaDaStore knowledge core, six orbiting topic artifacts, translucent cards, connecting paths, and restrained neon light. It communicates a growing library of connected practical systems.

#### Option B — Commerce Research Desk

An abstract isometric work surface with research notes, channel maps, a content framework, measurement cards, and a decision path. It feels practical and editorial but risks looking like a conventional productivity illustration.

#### Option C — Insight Prism

A luminous prism receives scattered signals and resolves them into six structured knowledge beams. It offers a strong metaphor and clean composition but may be too abstract without careful art direction.

#### Option D — Connected Decision Engine

A white-space technical diagram rendered with premium 3D depth: audience, channels, content, measurement, and review modules connect through a central decision engine. It aligns strongly with DaDaStore's systems positioning but must avoid resembling the current generic circular signal panel.

### Recommended final direction

Use **Option A — Editorial Intelligence Constellation**, informed by the structured clarity of Option D.

The recommended composition:

- central luminous DaDaStore “Insights” core;
- six visibly different but text-free topic objects;
- curved cyan, violet, and pink connection paths;
- translucent high-key glass surfaces;
- dark navy structural details for contrast;
- subtle perspective and soft shadows;
- no dashboard metrics, client marks, claims, or embedded headline text.

This direction is creative, immediately connected to the six-article library, and distinct from the dark commerce-engine artwork already used on the main site.

## 9. Featured section impact

No major featured-section redesign is required.

The current dark featured section should remain as the contrast bridge between the light hero and the light Knowledge Library. Preserve:

- current dark surface;
- featured article;
- current two-column structure;
- current title, excerpt, metadata, and CTA;
- existing neon orbit/bar artwork unless a later owner review specifically requests a featured-cover replacement.

Only transition spacing or boundary treatment may be adjusted later if required to make the light–dark–light sequence feel intentional.

## 10. Knowledge Library redesign plan

### White/light surface direction

Set the Knowledge Library section on white or the existing light-paper token. Use dark section headings and muted dark supporting copy.

The section should visually reconnect with the hero while the dark featured block remains between them as an anchor.

### Card contrast approach

Recommended card treatment:

- white or very light cool-gray card surface;
- subtle ink border at approximately 8–12% opacity;
- soft neutral shadow rather than the current heavy dark shadow;
- dark title and body copy;
- category label in cyan, violet, or deep blue with accessible contrast;
- dark metadata with a restrained violet separator;
- topic-specific cover image as the strongest color area;
- hover state using a small lift, stronger border, and controlled colored shadow derived from each cover.

Do not put pale cards on an indistinguishable white field. Use border, shadow, and a slightly tinted card surface to preserve hierarchy.

### Spacing/readability considerations

- Preserve the existing two-column desktop grid and one-column mobile flow.
- Maintain `min-width: 0` on cards and grid children.
- Use one consistent image aspect ratio so card text starts on a stable baseline.
- Allow titles and excerpts to use natural height; do not crop text.
- Keep card padding close to the current 24px treatment.
- Preserve comfortable 16–20px grid gaps.
- Avoid forced fixed card heights unless equal-row behavior is visually verified.
- Retain the full card as a clear visual unit without turning the image itself into the only link.

## 11. Featured-image system plan

### Purpose of article images

Each cover should:

- communicate the article's central decision or process before the title is read;
- distinguish articles at scanning speed;
- reinforce the editorial system rather than decorate it;
- create a reusable cover identity for listing cards and social-preview planning;
- remain truthful and free from unsupported performance implications.

### Consistent style rules

All six covers should share:

- premium 3D editorial illustration or polished isometric-diagram styling;
- one clear focal object;
- layered technical depth;
- controlled cyan, pink, violet, dark navy, and white;
- soft bloom rather than uncontrolled neon;
- rounded or geometric DaDaStore forms;
- a clean safe area around the edges for responsive crops;
- consistent camera angle, lighting quality, and material language.

Consistency should come from art direction, not from repeating the same layout.

### Image size/aspect ratio

Recommended production specification:

- master: 1600 × 900px;
- aspect ratio: 16:9;
- primary web export: 1280 × 720px;
- preferred format: WebP where current static-browser support is acceptable;
- optional PNG fallback only if the implementation uses `<picture>` or a documented compatibility need;
- target cover payload: approximately 120–250KB after export;
- target hero payload: approximately 250–450KB after export;
- `width` and `height` attributes must be present to prevent layout shift.

The implementation should use `aspect-ratio: 16 / 9`, `object-fit: cover`, and a verified focal position rather than fixed-height clipping.

### Visual language

Use:

- clean high-impact compositions;
- systems, pathways, nodes, cards, maps, and structured objects;
- meaningful topic metaphors;
- restrained glass, chrome, and holographic materials;
- recognizable DaDaStore color accents;
- enough contrast to remain legible on a white card section.

Avoid:

- stock-photo styling;
- people posed at laptops;
- generic bar charts;
- identical central orbits on every image;
- fake dashboards;
- fake platform screenshots;
- fake client logos;
- fake performance data.

### Text treatment rules

- Do not bake article titles, excerpts, dates, metrics, or CTA text into the raster image.
- Prefer no text inside covers.
- If a small diagram label is essential, use no more than one or two short, generic interface labels and verify legibility; text-free concepts are preferred.
- Keep all meaningful article identity in editable HTML.
- Use empty `alt=""` when a cover repeats the adjacent linked title and adds no unique information.
- Use concise descriptive alt text only if the image communicates additional editorial meaning.

### Image-to-topic mapping rules

Each image must:

1. represent the article's specific decision or workflow;
2. use a different primary silhouette and composition;
3. avoid the primary motif used by another cover;
4. remain understandable without fake numbers or brand logos;
5. preserve a consistent light source and finish across the set;
6. work at both full card width and a narrow 390px viewport;
7. survive center and edge-safe cropping;
8. be approved individually before integration.

## 12. Published article image plan

### 12.1 A Practical Guide to Social Media Audience Research

- **Slug:** `social-media-audience-research-guide`
- **Topic:** Turning customer evidence and observed behavior into a usable audience model
- **Proposed creative-image concept:** A luminous research lens hovering above layered signal fragments—questions, search paths, conversation bubbles, and behavior nodes—converging into one clear audience silhouette/map
- **Keywords/motifs:** magnifying lens, evidence fragments, signal clustering, audience map, conversation paths
- **Suggested tone:** investigative, intelligent, human-centered
- **Color cues:** cyan evidence trails, violet clusters, restrained pink focal highlights on a white-to-pale-navy field
- **Placement recommendation:** Card/cover image only in the first refresh. Preserve the existing in-article audience-research process visual.

### 12.2 How to Choose the Right Social Media Platforms for Your Business

- **Slug:** `how-to-choose-social-media-platforms-for-your-business`
- **Topic:** Selecting channel roles through audience, format, capacity, and measurement fit
- **Proposed creative-image concept:** A premium decision compass at a branching junction, with four distinct channel paths and one illuminated route chosen through a transparent evaluation frame
- **Keywords/motifs:** compass, branching paths, decision gate, channel nodes, capacity filter
- **Suggested tone:** selective, strategic, decisive
- **Color cues:** deep navy structure, cyan chosen path, violet alternatives, small pink decision point
- **Placement recommendation:** Card/cover image only in the first refresh. Preserve the existing in-article decision tree.

### 12.3 How to Build Social Media Content Pillars That Guide Better Content

- **Slug:** `how-to-build-social-media-content-pillars`
- **Topic:** Building repeatable content themes from evidence, expertise, and audience questions
- **Proposed creative-image concept:** Four translucent editorial pillars rising from an audience-evidence foundation, each supporting a different content artifact while remaining connected by one shared system
- **Keywords/motifs:** pillars, foundation, content cards, topic branches, evidence base
- **Suggested tone:** structured, creative, durable
- **Color cues:** violet and pink pillar edges, cyan foundation lines, clean white glass with navy depth
- **Placement recommendation:** Card/cover image only in the first refresh. Preserve the existing in-article pillar framework.

### 12.4 Social Media KPIs That Connect Activity to Business Goals

- **Slug:** `social-media-kpis-that-connect-to-business-goals`
- **Topic:** Connecting business outcomes, audience actions, diagnostics, and decisions without overstating attribution
- **Proposed creative-image concept:** A four-level measurement bridge carrying signals from platform activity through audience action to a final decision node, with no numeric dashboard values
- **Keywords/motifs:** measurement ladder, signal bridge, decision node, diagnostic layers, attribution boundary
- **Suggested tone:** precise, analytical, trustworthy
- **Color cues:** cyan signal flow, violet measurement layers, pink decision node, dark navy framework on a high-key background
- **Placement recommendation:** Card/cover image only in the first refresh. Preserve the existing in-article measurement scorecard.

### 12.5 A Practical Social Media Strategy Template for Small Businesses

- **Slug:** `social-media-strategy-template-for-small-business`
- **Topic:** Completing eight connected decisions as a small-business operating strategy
- **Proposed creative-image concept:** An eight-module blueprint assembled into one compact operating board, with each module represented by a different simple shape and connected through a review loop
- **Keywords/motifs:** blueprint, eight modules, operating board, checklist structure, review loop
- **Suggested tone:** practical, organized, approachable
- **Color cues:** white blueprint surface, navy framework, cyan connectors, violet and pink module accents
- **Placement recommendation:** Card/cover image only in the first refresh. Preserve the existing in-article eight-part framework.

### 12.6 How to Create a Social Media Marketing Plan That Drives Results

- **Slug:** `how-to-create-a-social-media-marketing-plan-that-drives-results`
- **Topic:** Connecting goals, audience, channels, content, paid support, measurement, and review in one operating plan
- **Proposed creative-image concept:** A connected planning table viewed in perspective, with goals entering one side and a coordinated audience–channel–content–measurement system emerging as a clear route
- **Keywords/motifs:** planning map, connected modules, operating route, goal-to-review loop, system blueprint
- **Suggested tone:** foundational, comprehensive, confident
- **Color cues:** balanced cyan, violet, and pink signals over a dark-navy planning surface framed by white space
- **Placement recommendation:** Card/cover image only in the first refresh. Preserve the existing featured artwork and the existing in-article planning-system visual unless a later owner-approved article-hero unit replaces them.

## 13. Design-system continuity rules

- Preserve the current typography, shell widths, header, navigation, button geometry, radius scale, and spacing rhythm.
- Use existing paper and dark-surface tokens before adding new colors.
- Keep cyan, pink, and violet as accents rather than full-page fills.
- Preserve dark sections at the featured block, category preview/CTA, and footer so the page maintains DaDaStore contrast and depth.
- Keep the hero and Knowledge Library light surfaces visually related but not identical: the hero may use subtle high-key illustration lighting; the library should prioritize reading and card scanning.
- Reuse one image component and one cover aspect ratio across cards.
- Give each article a unique composition, not a new unrelated art style.
- Do not alter shared article-body visuals during the landing-page refresh.

## 14. Accessibility/readability considerations

- Maintain WCAG AA text contrast: at least 4.5:1 for normal text and 3:1 for large text and essential UI graphics.
- Verify cyan and pink labels against white; use darker accent variants when necessary.
- Never place editable article text inside raster images.
- Keep semantic headings and existing link labels.
- If cover images are decorative beside the article title, use empty alt text to avoid duplicate announcements.
- Preserve visible keyboard focus on CTAs and card links.
- Do not make the entire card clickable with invalid nested links.
- Preserve reduced-motion behavior and avoid autoplay or parallax.
- Include image dimensions to prevent layout shift.
- Test cover crops, H1 wrapping, CTA visibility, and horizontal overflow at 375px, 390px, 768px, 1024px, and 1440px.
- Confirm the light hero does not reduce header/logo readability at the boundary.

## 15. Recommended implementation sequence

1. Approve the hero concept and six cover concept briefs.
2. Generate only the hero illustration.
3. Review the hero at desktop and mobile crops.
4. Generate the six cover images as a coherent set.
5. Review every cover at card size before code integration.
6. Add image assets under a dedicated blog image directory with stable slug-based filenames.
7. Update the Insights hero markup to use the approved hero asset.
8. Replace generic card-bar markup with article-specific image elements.
9. Apply the light hero and Knowledge Library CSS.
10. Preserve the featured-section structure.
11. Add explicit image dimensions, responsive sizing, and loading behavior.
12. Run static, asset, responsive, keyboard, console, network, and performance checks.
13. Obtain Project Owner visual approval before commit or deployment.

## 16. Recommended asset-generation sequence

Generate in this order:

1. hero editorial-intelligence constellation;
2. existing published planning-guide cover, establishing the set's lighting and material reference;
3. audience-research cover;
4. platform-selection cover;
5. content-pillars cover;
6. KPI cover;
7. strategy-template cover.

After each generation:

- compare against the concept brief;
- reject fake metrics, text artifacts, logos, and off-brand colors;
- test a 16:9 crop;
- test at the rendered card size;
- confirm visual distinction from previously approved covers;
- export only approved assets.

Do not generate all seven assets without an early style check after the hero and first cover.

## 17. Risks and guardrails

### Risk: white sections feel generic

Guardrail: retain DaDaStore gradient accents, technical micro-patterns, dark structural details, and the light–dark–light page rhythm.

### Risk: cover images look like unrelated campaigns

Guardrail: use one shared material, lighting, camera, and edge-treatment system while varying the topic metaphor.

### Risk: creative images imply fake performance data

Guardrail: prohibit numbers, dashboards with values, client logos, testimonials, revenue, ROAS, sales, order, and growth claims.

### Risk: image text becomes unreadable or inaccurate

Guardrail: keep titles, labels, metadata, and CTA text in HTML; prefer text-free art.

### Risk: large files harm page performance

Guardrail: use fixed dimensions, appropriate WebP compression, lazy loading below the fold, and a documented payload target.

### Risk: cover crops hide the focal concept

Guardrail: design for 16:9 from the start, preserve safe zones, and test at every required viewport.

### Risk: scope expands into article redesign

Guardrail: preserve the six existing in-article visuals and limit the first implementation to the landing-page hero, library surfaces, and cover images.

### Risk: featured section is unintentionally redesigned

Guardrail: treat the featured block as a protected dark anchor; adjust only necessary section transitions.

## 18. Allowed next work

- Project Owner review of this plan
- Selection of the final hero concept
- Bounded generation of one hero image and one style-reference cover
- Review of naming, dimensions, format, payload, and crop
- A later bounded six-cover asset unit after style approval
- A separate HTML/CSS integration unit after all assets are approved

## 19. Disallowed next work

- Editing HTML or CSS in Unit 5R
- Generating images before plan approval
- Rewriting article content or metadata
- Publishing or unpublishing articles
- Changing navigation
- Replacing article-body visuals
- Redesigning the featured section, category pages, footer, or main website
- Adding external dependencies or animation libraries
- Modifying registry, sitemap, RSS, DNS, Pages, or deployment settings
- Committing or pushing

## 20. Recommended next unit

**Unit 5S — Insights Hero and Cover Style Reference Asset**

Goal: generate one approved high-key Insights hero illustration and one planning-guide cover image as the visual reference pair, review both at desktop and mobile/card crops, and stop before generating the remaining five covers or changing HTML/CSS.

Expected default scope:

- one hero raster asset;
- one planning-guide cover raster asset;
- one Unit 5S asset-review record;
- no implementation files.

## 21. Test record

No automated tests were required or run because Unit 5R is docs-only planning.

Static verification:

- current published article records inspected: 6;
- published articles included in Section 12: 6;
- existing in-article topic visuals identified: 6;
- hero direction documented: yes;
- featured-section protection documented: yes;
- Knowledge Library light-surface direction documented: yes;
- unique cover concepts documented: 6;
- implementation files changed by Unit 5R: no;
- article content changed by Unit 5R: no;
- registry changed by Unit 5R: no;
- sitemap or RSS changed by Unit 5R: no;
- main-site behavior changed by Unit 5R: no;
- image assets generated by Unit 5R: no;
- `git diff --check`: recorded in final verification.

## 22. Suggested commit message

`Add insights page visual refresh plan`
