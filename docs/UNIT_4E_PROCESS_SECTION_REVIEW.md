# Unit 4E — Process Section Review

## 1. Status

Unit 4E is a bounded HTML, CSS, and documentation refinement of the existing Process section. It does not change JavaScript, assets, dependencies, deployment configuration, or production state.

## 2. Purpose

This unit replaces the oversized five-stage Process presentation with a compact four-stage operating model built from the previously approved Signal / Strategy / System / Scale concepts.

## 3. Owner review

The Project Owner found the previous Process section visually oversized and repetitive:

- its heading was too large
- five cards created an unnecessarily wide desktop structure
- the cards were too tall and contained large empty lower areas
- the section did not reuse the approved four-stage operating model preserved during Unit 4D

## 4. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 5. Previous five-stage process

The previous Process structure used:

1. Discover
2. Strategize
3. Execute
4. Optimize
5. Scale

At the wide desktop breakpoint it used five columns and forced each card to a `250px` minimum height. That combination created the oversized cards and unused lower space identified in the owner review.

## 6. New four-stage operating model

The Process section now uses:

1. `01 / Signal` — read data, audience behavior, conversion friction, and constraints.
2. `02 / Strategy` — turn signals into offers, channel plans, creative direction, and conversion priorities.
3. `03 / System` — build repeatable campaigns, tracking, creative testing, and conversion workflows.
4. `04 / Scale` — expand what works while protecting clarity, efficiency, and control.

The label remains `How It Works`. The new heading is `A Clear Operating System for Growth.` and the approved four-stage supporting copy appears directly below it.

## 7. Signal / Strategy / System / Scale integration

Signal / Strategy / System / Scale were preserved as approved inputs when the standalone Commerce Intelligence section was removed in Unit 4D. Unit 4E integrates those concepts into the existing `#process` surface rather than restoring a separate or duplicate strategy section.

This is process refinement, not strategy expansion or a performance claim.

## 8. Visual structure

Each stage contains only:

- its number/category label
- one inline SVG icon
- its title
- one concise paragraph

The cards use natural content height, compact padding, subtle accent borders, and no forced equal-height minimum. On desktop, four cards form a connected horizontal row. Cyan, violet, pink, and blue accents distinguish the stages while keeping the visual treatment cohesive.

## 9. Responsive considerations

- `375px` and `390px`: one-column vertical progression with a subtle connecting path.
- `768px`: two columns by two rows with compact natural-height cards.
- `1024px` and `1440px`: four connected stages in one horizontal row.
- Icons and labels remain readable without fixed-width content.
- The layout uses minmax grid tracks and introduces no horizontal scrolling.
- Work remains immediately above Process and Proof remains immediately below it.

## 10. JS compatibility preserved

`assets/js/main.js` remains unchanged.

Compatibility is preserved because:

- the section ID remains `process`
- `.reveal` remains on the Process intro and all stage cards
- the primary navigation still targets `#process`
- active navigation and smooth scrolling continue to use the existing ID
- navigation order remains Services, Work, Process, Proof, Contact

## 11. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4E_PROCESS_SECTION_REVIEW.md`

Not changed:

- `assets/js/main.js`
- image or framework assets
- dependencies or build configuration

## 12. Verification record

- Branch is `refine/v3-section-review`.
- `#process` remains present exactly once.
- Discover, Strategize, Execute, and Optimize are removed from the Process cards.
- Signal, Strategy, System, and Scale are present exactly once as Process stage titles.
- The old five-column and `250px` minimum-height Process rules are removed.
- Desktop/mobile navigation order remains Services, Work, Process, Proof, Contact.
- Required section IDs remain unique.
- JavaScript and assets remain unchanged.
- No fake or guaranteed result claim is added.
- All mailto links remain `mailto:dadastore.co@gmail.com`.
- Responsive structure is checked at `375px`, `390px`, `768px`, `1024px`, and `1440px`.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 13. Recommended next section review

**Unit 4F — Proof Section Review**

Goal: review the current proof hierarchy and density while preserving the approved public Upwork evidence boundary.

## 14. Explicitly not next

- new or unapproved proof claims
- fake metrics, results, client claims, testimonials, or client logos
- Process strategy expansion beyond Signal / Strategy / System / Scale
- JavaScript changes
- image or framework-asset changes
- hero, Services, Work, Contact, header, or footer redesign
- analytics or contact-backend integration
- external dependencies, icon libraries, fonts, frameworks, or build tools
- merge, deployment, DNS, CNAME, or production cutover
- modification of the live DaDaStore repository
