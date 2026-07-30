# Unit 5U — Featured Insight Image Fix and Weekly Rotation Design

## 1. Status

Docs-only architecture and design record. No featured markup, styles, JavaScript, registry data, article files, or publication state are changed in this unit.

## 2. Purpose

Define a deterministic weekly Featured Insight system for the current static GitHub Pages site and specify how the featured card will use the selected article’s real cover image, content, and URL as one synchronized unit.

## 3. Current featured-section behavior

The Featured Insight is hard-coded in `blog/index.html`. It always presents:

- How to Create a Social Media Marketing Plan That Drives Results;
- a static section heading and summary;
- duplicated article metadata and URL;
- the old CSS-generated artwork.

The browser does not currently read the published registry to select or populate this card.

## 4. Current defect

The featured section still uses the old “Plan → Test → Learn” orbit-and-bars artwork. Unit 5T replaced the generic artwork on the Knowledge Library and category cards with six unique covers, but the Featured Insight was intentionally left unchanged.

The featured content is also duplicated manually instead of being resolved from one validated data object, creating a future risk that its text, image, and link diverge.

## 5. Project Owner requirements

The future implementation must:

1. replace the old artwork with the featured article’s assigned cover;
2. select one eligible published article automatically each week;
3. prevent an article from repeating within the previous eight feature weeks when the eligible pool can support that rule;
4. show the same assignment to all visitors during the same week;
5. avoid visitor-specific randomness, cookies, local storage, or personal history;
6. never make a draft eligible;
7. never partially update featured text, image, or URL.

## 6. Recommended rotation architecture

Use a **precomputed, repository-controlled weekly schedule** as the source of truth.

The schedule should be stored in `blog/data/featured-rotation.json` and contain explicit pairs of:

- UTC week-start identifier;
- featured article slug.

A lightweight client-side resolver reads the current UTC week, finds the exact stored assignment, validates the corresponding published article data, preloads its cover, and then updates the entire featured card atomically.

This design remains static-host compatible and needs no database, server function, cookie, or personalized state.

## 7. Weekly boundary definition

- A feature week begins Monday at `00:00:00 UTC`.
- It ends immediately before the following Monday at `00:00:00 UTC`.
- The week identifier is the ISO-formatted UTC Monday date: `YYYY-MM-DD`.
- Example: every instant from `2026-07-27T00:00:00Z` through `2026-08-02T23:59:59.999Z` resolves to week `2026-07-27`.

The resolver must use UTC getters and UTC date construction only. Locale, visitor timezone, and daylight-saving changes must not affect the assignment.

## 8. Eligibility rules

An article is eligible only when all of the following are true:

- `status` is exactly `published`;
- `url` is present, non-null, and resolves to an existing public article;
- title, category, excerpt, date, and reading time are present;
- a cover path is present and resolves;
- meaningful cover alt text is present;
- the slug is unique;
- the record passes the public-registry validator.

Drafts, records with null public URLs, malformed records, missing covers, broken URLs, or duplicate slugs must be excluded before schedule generation.

## 9. Current eligibility evidence

The current registry contains six published records and 55 drafts.

All six published slugs have:

- a public URL;
- an existing article folder;
- one unique Unit 5T cover asset;
- meaningful Unit 5T alt text.

The registry does not yet store cover path or alt text. Therefore, the six records are conceptually eligible, but the future implementation must add and validate that cover metadata before runtime selection is enabled.

## 10. Non-repeat rule

For a candidate week, remove every slug assigned during the previous eight feature weeks. Select only from the remaining eligible candidates.

This is an exact eight-feature-week lookback. Eight weeks equals 56 days and is the deterministic approximation used for the requested two-month exclusion period; calendar months vary in length and would create inconsistent weekly behavior.

The current week is not counted as a previous week. Historical assignments must be evaluated in chronological order.

## 11. Deterministic selection rule

Every visitor must resolve the same stored slug for the same UTC week identifier.

The runtime must not:

- call `Math.random()`;
- rotate by page load;
- use cookies;
- use local storage;
- use session storage;
- use visitor identifiers;
- use an individual visitor’s prior views.

Schedule generation should select the least-recently-featured eligible candidate that is outside the active lookback. Ties should use a stable slug ordering or a documented fixed seed. The generated result is then committed as an explicit week-to-slug assignment, so runtime tie-breaking is never required.

## 12. Rotation-history strategy

`blog/data/featured-rotation.json` should retain:

- schema version;
- timezone;
- week-start day;
- strict lookback length;
- minimum strict pool size;
- schedule-generation timestamp;
- fallback slug;
- chronological assignments containing `week` and `slug`.

Recommended shape:

```json
{
  "schemaVersion": 1,
  "timeZone": "UTC",
  "weekStarts": "Monday",
  "lookbackWeeks": 8,
  "minimumStrictPool": 9,
  "fallbackSlug": "how-to-create-a-social-media-marketing-plan-that-drives-results",
  "assignments": [
    {
      "week": "2026-08-03",
      "slug": "social-media-audience-research-guide"
    }
  ]
}
```

Past and current assignments are immutable history. Future, not-yet-started assignments may be regenerated when the eligible article pool changes.

The file should always contain at least 12 future assignments; generating 26 or 52 future weeks is preferable so weekly rotation continues without weekly deployment work.

## 13. Static-site approach evaluation

### Precomputed weekly schedule stored in repository data

**Decision: preferred.**

It makes assignments auditable, preserves history, supports the lookback rule, and lets a static page change automatically by week without a weekly commit.

### Deterministic week-number selection

**Rejected as the source of truth.**

A simple modulo such as `weekNumber % articleCount` cannot preserve an eight-week history when articles are added, removed, or temporarily invalid. It can also rewrite the effective historical order when the pool changes.

### Build-time generated schedule

**Recommended as the schedule-authoring mechanism, not the runtime source.**

A Node script should validate the eligible pool and generate future assignments. Embedding only the current article into static HTML at build time would require a deployment every week and would not satisfy automatic rotation on an unchanged GitHub Pages site.

### Client-side selection with embedded history

**Accepted only as a resolver for the precomputed schedule.**

The browser may calculate the current UTC week and retrieve its explicit assignment. It must not invent an assignment from randomness or visitor state. Duplicating the entire history inside HTML or JavaScript is discouraged because it creates synchronization risk.

## 14. Final architecture decision

Use a hybrid with one authoritative data source:

1. `posts.json` remains the article registry and gains cover metadata for published candidates.
2. A build script validates eligibility and generates `featured-rotation.json`.
3. `featured-rotation.json` stores explicit future and historical week-to-slug assignments.
4. `blog/index.html` contains a complete, crawlable fallback featured card using a real cover.
5. `blog.js` resolves the current UTC week, validates the scheduled published record, preloads the cover, and atomically replaces all featured fields.

The schedule file—not JavaScript ordering and not the visitor—is the assignment authority.

## 15. Minimum published-article requirement

At least **nine eligible published articles** are required to guarantee an indefinite eight-week non-repeat rule:

- eight different slugs may occupy the previous eight weeks;
- a ninth eligible slug remains available for the next assignment.

More than nine improves variety but does not change the rule.

## 16. Fallback behavior with fewer than nine eligible articles

The site currently has six eligible published articles, so strict eight-week exclusion cannot run indefinitely.

Temporary rule:

- use `effectiveLookback = min(8, eligibleArticleCount - 1)`;
- do not repeat a slug until every other eligible slug has appeared;
- with six eligible articles, exclude the previous five feature weeks;
- the earliest repeat is therefore week seven;
- continue choosing the least-recently-featured eligible article;
- switch automatically to the full eight-week rule once the pool reaches nine.

Special cases:

- one eligible article: keep it featured every week;
- two to eight eligible articles: use the maximum possible non-repeat window of `count - 1`;
- zero valid dynamic candidates or a missing current assignment: keep the validated static fallback card;
- never show a blank section.

This fallback is an explicit temporary limitation, not a claim that six articles satisfy the requested eight-week exclusion.

## 17. Featured-section data fields

One resolved featured object must contain:

- `slug`
- `title`
- `category`
- `excerpt`
- `date`
- formatted date label
- `readingTime`
- `url`
- `cover.src`
- `cover.alt`
- `cover.width`
- `cover.height`

All fields must be validated before any DOM update begins.

## 18. Featured-image behavior

The selected article’s Unit 5T cover replaces the old static orbit, bars, label, and “Plan → Test → Learn” text.

Required image behavior:

- `width="1280"` and `height="720"`;
- 16:9 aspect ratio;
- `width: 100%`;
- `height: 100%` within the featured media column;
- `object-fit: cover`;
- reviewed `object-position`;
- no fixed-height clipping on mobile;
- meaningful article-specific alt text;
- eager loading is acceptable because the Featured Insight is near the top of the page;
- asynchronous decoding may remain enabled.

The cover must be preloaded and successfully decoded before the dynamic assignment is committed.

## 19. Registry and data changes required

Future implementation should:

1. add a `cover` object to each published post record:
   - `src`
   - `alt`
   - `width`
   - `height`;
2. create `blog/data/featured-rotation.json`;
3. add validation for unique assignments, valid week identifiers, chronological order, eligible slugs, cover resolution, and lookback compliance;
4. preserve all draft statuses and null draft URLs;
5. avoid adding drafts to the rotation file.

Cover metadata should be sourced once and reused by card and featured rendering where practical.

## 20. JavaScript changes required

`blog/assets/blog.js` should:

- calculate the current Monday-based UTC week identifier;
- fetch or consume the precomputed schedule and published registry;
- locate the exact current-week assignment;
- confirm the record remains published and complete;
- preload and decode the assigned cover;
- stage all text, date, image, alt, and link values;
- commit them synchronously as one validated update;
- leave the static fallback untouched on any error.

The implementation must not add timers that continuously rotate within a week. A page refresh after the UTC boundary is sufficient for a static site.

## 21. HTML and CSS changes required

`blog/index.html` should:

- replace the old generated artwork with the current fallback article’s real cover;
- use a generic section heading such as “Featured this week” rather than duplicating hard-coded article messaging;
- add stable data hooks for category, title, excerpt, date, reading time, link, and image;
- retain complete fallback content for no-JavaScript and failure-safe behavior.

`blog/assets/blog.css` should:

- replace obsolete orbit/bar presentation rules with a responsive featured-cover rule;
- preserve the current featured-card grid and dark-section structure;
- preserve existing mobile stacking;
- avoid fixed image clipping and horizontal overflow.

## 22. SEO and accessibility considerations

- Keep the fallback featured article fully present in server-delivered HTML.
- Do not rely on weekly client selection for indexing; all published articles remain available in the Knowledge Library and sitemap.
- Do not change canonical URLs, article metadata, sitemap membership, or RSS membership through rotation.
- Keep the selected title as semantic HTML, not raster text.
- Update image alt text with the same atomic operation as image source.
- Preserve visible keyboard focus and the existing read-link label.
- Do not use `aria-live`; the initial page setup does not need to interrupt assistive-technology users.
- No-JavaScript visitors must receive a valid published fallback feature with a real cover.

## 23. Failure-safe behavior

Keep the static fallback unchanged when:

- schedule fetch fails;
- registry fetch fails;
- the week is absent;
- the scheduled slug is missing;
- the record is no longer published;
- the URL is null or malformed;
- required metadata is missing;
- the cover path or alt text is missing;
- the image fails to load or decode;
- duplicate assignments make the current week ambiguous.

Log at most one concise development warning. Do not expose drafts, partial UI, broken images, or a blank feature.

## 24. Verification plan

Static validation:

- every assignment has a unique valid UTC Monday identifier;
- every assigned slug is an eligible published record;
- every assigned URL and cover resolves;
- no draft slug appears;
- current and future schedules obey the effective lookback;
- a pool of nine or more obeys the strict eight-week rule;
- all data fields are synchronized.

Determinism tests:

- multiple dates within one UTC week return the same slug;
- Sunday `23:59:59.999 UTC` and Monday `00:00:00 UTC` resolve to adjacent week identifiers;
- different local timezones produce the same result for the same instant;
- repeated loads and clean browsers return the same assignment.

Browser tests at 390px and 1440px:

- selected cover, title, excerpt, metadata, and URL match;
- cover loads with correct alt text;
- no overflow or clipping;
- mobile navigation still works;
- console errors: 0;
- failed requests: 0.

Boundary tests:

- published total unchanged;
- draft total unchanged;
- sitemap and RSS unchanged;
- no publication-state mutations.

## 25. Rollback plan

The fallback featured card is the rollback boundary.

If rotation causes a regression:

1. remove or disable the resolver initialization;
2. retain the real-cover fallback markup and CSS;
3. leave `featured-rotation.json` unused but available for diagnosis;
4. restore no old orbit/bar artwork;
5. verify that the fallback link and image resolve;
6. do not alter article publication state.

## 26. Allowed next work

- Implement the actual featured-cover replacement.
- Add published cover metadata to the registry.
- Add the repository-controlled schedule file.
- Add a dependency-free schedule generator and validator.
- Add the deterministic UTC resolver.
- Run static and browser verification.
- Document the implementation and current six-article fallback.

## 27. Disallowed next work

- Visitor-specific personalization
- Random selection
- Cookies or local storage as assignment authority
- Publishing additional drafts merely to fill the rotation
- Changing article body content
- Changing sitemap or RSS membership
- Redesigning unrelated sections
- Adding a backend, database, analytics, or external scheduler
- Deploying, committing, or pushing without a separate approved step

## 28. Recommended next unit

**Unit 5V — Implement Deterministic Featured Insight Rotation**

Goal: replace the old Featured Insight artwork with the real fallback cover, add validated cover metadata and a precomputed schedule, implement the atomic UTC-week resolver, and verify the six-article maximum-gap fallback without changing publication state.

## 29. Test record

Docs-only verification performed:

- current Featured Insight markup inspected;
- old “Plan → Test → Learn” artwork confirmed;
- current six published registry records inspected;
- current six cover files confirmed;
- six published records have non-null public URLs;
- drafts are excluded by the proposed eligibility rule;
- strict eight-week minimum pool established as nine;
- current six-article fallback defined without claiming strict compliance;
- implementation files changed by Unit 5U: no;
- article, registry, sitemap, RSS, and publication-state changes by Unit 5U: none;
- `git diff --check`: recorded in final verification.

No automated tests are required because this unit is docs-only.

## 30. Suggested commit message

`Add featured insight rotation design`
