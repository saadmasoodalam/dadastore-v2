# Unit 5AZ — Weekly Featured Insight Rotation

## 1. Title

# Unit 5AZ — Weekly Featured Insight Rotation

## 2. Status

Implemented as code, repository data, focused tests, browser QA, and documentation. The rotation is deterministic and static-host compatible. It has not been deployed, committed, or pushed.

## 3. Purpose

Replace the hard-coded Featured Insight artwork with the selected article’s real cover and rotate the complete featured article once per UTC week without visitor-specific state or repetition during the prior eight feature weeks.

## 4. Authority

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_5U_FEATURED_INSIGHT_ROTATION_DESIGN.md`
- the current 61-record published registry
- the current Insights featured section and Knowledge Library
- the current local article-cover system
- the existing static GitHub Pages architecture and blog build workflow

## 5. Files changed

Added:

- `scripts/build-featured-rotation.mjs`
- `scripts/test-featured-rotation.mjs`
- `blog/data/featured-rotation.json`
- `docs/UNIT_5AZ_WEEKLY_FEATURED_INSIGHT_ROTATION.md`

Changed:

- `blog/index.html`
- `blog/data/posts.json`
- `blog/assets/blog.js`
- `blog/assets/blog.css`

No article file, article body, category listing, sitemap, feed, main-site file, slug, URL, or publication state changed.

## 6. Eligibility rules

An article is eligible only when all of these checks pass:

- status is exactly `published`;
- slug is present and unique;
- title, category, excerpt, ISO publication date, and reading time are present;
- public URL is a valid local article path;
- article page exists;
- cover metadata contains a local JPEG source, meaningful alt text, width 1280, and height 720;
- referenced cover file exists.

Drafts, null URLs, malformed paths, missing files, incomplete covers, and duplicate slugs are excluded. All 61 current published records pass.

## 7. Monday–Sunday UTC boundary

A feature week begins Monday at `00:00:00 UTC` and ends immediately before the following Monday. The implementation uses only UTC date components, so visitor locale, timezone, and daylight-saving changes cannot alter the assignment.

At browser-test time, `2026-08-02T20:28Z` was still in the week beginning `2026-07-27`; the browser correctly rendered that scheduled record. At `2026-08-03T00:00Z`, the next stored assignment becomes active.

## 8. Week identifier format

The identifier is the ISO UTC Monday date in `YYYY-MM-DD` format, for example `2026-08-03`.

## 9. Deterministic selection algorithm

The generator:

1. sorts eligible records by slug;
2. preserves valid existing assignments for rebuild stability;
3. removes slugs used during the previous eight assignments;
4. chooses the least-recently-featured remaining record;
5. breaks equal recency with stable slug ordering;
6. writes the selected slug as an explicit week assignment.

There is no browser randomness, cookie, local storage, session storage, visitor identifier, or personalized history. Rebuilding twice within the same week produces identical registry, schedule, and fallback HTML hashes.

## 10. Eight-week exclusion implementation

For each generated week, the previous eight chronological assignments are converted to an exclusion set before selection. The current pool contains 61 eligible articles, exceeding the minimum strict pool of nine, so the full eight-week rule applies without relaxation. Focused tests prove the previous eight are excluded and content from the ninth-oldest week may become eligible again.

## 11. Schedule/history data structure

`blog/data/featured-rotation.json` records:

- schema version;
- UTC timezone;
- Monday week start;
- eight-week lookback;
- minimum strict pool size;
- deterministic generation boundary;
- generated-through week;
- validated fallback slug;
- chronological `{ week, slug }` assignments.

The initial file contains 53 assignments: the active UTC week plus 52 future weeks. It begins at `2026-07-27` and is generated through `2027-07-26`. Ordering and JSON formatting are deterministic.

## 12. Atomic featured fields

The resolver validates one complete record, preloads its cover, confirms every DOM target, and then updates these fields together:

- slug;
- category;
- title;
- excerpt;
- publication date and formatted date label;
- reading time;
- public URL;
- cover source;
- cover alt text;
- cover width and height.

The browser test compares every rendered value with the same registry record.

## 13. Featured-image correction

The old “Plan → Test → Learn” orbit, label, and bar artwork was removed. The fallback and rotating feature now use the chosen article’s actual 1280×720 cover. The image remains a responsive 16:9 visual with `object-fit: cover`, meaningful synchronized alt text, eager loading, and no fixed mobile height.

## 14. Failure-safe behavior

The server-delivered HTML contains a complete published fallback article and real local cover. If either JSON request fails, the schedule is malformed, the current week is missing, a record becomes ineligible, a DOM hook is absent, or a cover fails to load/decode, the runtime leaves that fallback untouched and surfaces at most one concise development warning.

The build generator validates all file references. Malformed stored history is reported with build-time warnings and replaced from the deterministic eligible pool rather than being used as assignment authority. A draft, partial card, empty section, or broken image is never substituted.

## 15. Build workflow

Run the dependency-free generator with the repository’s available Node runtime:

```powershell
node scripts/build-featured-rotation.mjs
```

For a reproducible boundary check, pass an explicit instant:

```powershell
node scripts/build-featured-rotation.mjs --date 2026-08-03T12:00:00.000Z
```

The generator discovers existing Knowledge Library covers, attaches validated cover metadata to published registry records, preserves valid history, extends the schedule, and renders the current build-time fallback atomically.

## 16. Test coverage

`scripts/test-featured-rotation.mjs` uses built-in Node assertions and covers:

- Monday and Sunday UTC resolution;
- adjacent Monday boundary;
- same-week deterministic rebuild output;
- previous-eight exclusion;
- ninth-week eligibility;
- draft exclusion;
- null-URL exclusion;
- missing-cover exclusion;
- malformed-history fallback;
- one-record atomic payload fields.

The browser QA validates the actual Insights runtime at 390px and 1440px.

## 17. Verification results

- Eligible published articles: 61
- Drafts eligible: 0
- Schedule assignments: 53
- Generated through: `2027-07-26`
- Focused rotation tests: 10 passed
- Same-week assignment stability: passed
- Same-week posts, schedule, and HTML hashes: unchanged
- Previous-eight exclusions: passed
- Ninth-week eligibility: passed
- Malformed-history fallback: passed
- Atomic featured data synchronization: passed
- Old static featured artwork: 0
- Broken featured image references: 0
- Responsive browser widths: 390px and 1440px passed
- Horizontal overflow: 0
- Mobile-navigation failures: 0
- Console errors: 0
- Failed requests: 0
- Duplicate IDs: 0
- Existing library metadata failures: 0
- Existing library broken links: 0
- Existing library word-count failures: 0
- Publication-state changes: 0
- `git diff --check`: passed at final verification

The general library validator still derives historical plan-state counts from the intentionally untouched pre-existing `blog/data/article-plan.json` modification. That unrelated plan-state mismatch was not changed or used as rotation authority; the current public registry remains the source for the verified 61 published records.

## 18. Current published total

`blog/data/posts.json` contains 61 published records and zero drafts. Unit 5AZ adds cover metadata only; existing titles, excerpts, dates, reading times, feature flags, statuses, and public URLs remain unchanged.

## 19. Rollback procedure

1. Remove the featured resolver initialization and schedule fetch from `blog/assets/blog.js`.
2. Keep the real-cover fallback markup; do not restore the obsolete orbit/bar artwork.
3. Remove or stop consuming `blog/data/featured-rotation.json`.
4. Remove cover objects from the registry only if no later build process uses them.
5. Retain all article statuses, URLs, bodies, covers, listings, sitemap entries, and feed entries.
6. Re-run the static fallback and responsive browser checks.

## 20. Allowed next work

- Project Owner visual review of the real-cover Featured Insight
- a bounded rotation completion/approval checkpoint
- extending future assignments with the same generator
- controlled commit preparation after approval
- separate deployment planning

## 21. Disallowed next work

- visitor-specific personalization or random selection
- cookies, local storage, analytics, or runtime APIs as assignment authority
- publishing/unpublishing articles
- article-body edits
- slug or public-URL changes
- featured-section redesign beyond the approved cover correction
- Insights hero or Knowledge Library redesign
- sitemap/feed semantic changes
- main-site changes
- deployment, commit, or push in this unit

## 22. Recommended next unit

**Unit 5BA — Featured Insight Rotation Approval Checkpoint**

Goal: record Project Owner visual approval of the rotating real-cover card, confirm the deterministic schedule and fallback boundary, and decide whether Unit 5AZ is ready for commit and later deployment planning.

## 23. Suggested commit message

`Add weekly featured insight rotation`
