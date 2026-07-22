# Unit 4C8 — Diagnose Remaining Hero/Platform Container Height

## 1. Status

Unit 4C8 is a bounded CSS diagnosis, minimal correction, and documentation unit. It removes the remaining screenshot-visible dark space after the platform logos without changing Services, HTML, JavaScript, assets, header behavior, or mobile navigation.

## 2. Purpose

The purpose of this unit is to measure the complete hero/platform boundary rather than stopping at the outside edge of `.platform-strip`, then correct only the padding that remains after the visible platform row.

Core law:

- Diagnose the exact remaining source.
- Do not modify Services cards or HTML.
- Do not use negative margins, transforms, fixed heights, or hidden content.
- No deployment.

## 3. Owner feedback

The Project Owner reported that Unit 4C7 reduced the outside hero padding but did not fully remove the large dark area visible after the platform-logo row.

The fixed header partially covering platform logos while the page is scrolled is a separate concern. Unit 4C8 does not change fixed-header positioning, sticky behavior, scroll offsets, or navigation.

## 4. Authority reviewed

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4C7_REMOVE_PRE_SERVICES_TRANSITION_GAP.md`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Exact hierarchy and selectors

- Hero section: `section.hero.section`
- Hero inner/container: `.container.hero-grid`
- Hero content row: `.hero-copy` and `.hero-visual`
- Proof strip wrapper: `.hero-proof-grid`
- Platform strip wrapper: `.platform-strip`
- Platform-logo row: `.platform-logos`
- Additional platform-area wrapper: none
- Hero-bottom wrapper or spacer: none
- Services section: `section.section#services`

The proof strip and platform strip are direct grid children of `.hero-grid`. The Services section immediately follows the closing hero tag.

## 7. Complete cascade inspection

The base CSS and every media query were checked for `padding-top`, `padding-bottom`, `padding-block`, top and bottom margins, height and minimum height, block sizes, grid rows, row gaps, general gaps, content alignment, viewport units, pseudo-elements, spacer elements, and empty wrappers.

Relevant findings:

- `.hero-grid { gap: 42px; }` separates grid rows but creates no trailing gap after `.platform-strip`.
- `.platform-strip { padding: 16px 0 20px; }` contributes `20px` below the visible platform-logo row.
- Unit 4C7's tablet `.hero { padding-bottom: 48px; }` contributes another `48px` after the platform wrapper.
- At `1024px`, `.hero { min-height: 900px; }` contributes approximately `6px` of centered free space because the natural hero content is slightly shorter than the minimum.
- Hero, platform, and Services pseudo-elements do not contribute to document flow.
- `.section { scroll-margin-top: var(--header-height); }` affects anchor positioning only.

## 8. Exact remaining culprit

Unit 4C7 measured only the distance from the outside bottom edge of `.platform-strip` to `#services`. The screenshot-visible band starts at the bottom of `.platform-logos`, inside that wrapper.

The remaining sources were therefore cumulative:

```css
.platform-strip {
  padding: 16px 0 20px;
}
```

and, from Unit 4C7 inside `@media (min-width: 760px)`:

```css
.hero {
  padding-bottom: 48px;
}
```

Exact diagnosis:

- Remaining culprit selector: `.platform-strip`
- Remaining culprit property/value: bottom component of `padding: 16px 0 20px`
- Combined media-query contributor: `.hero { padding-bottom: 48px; }`
- Source: base CSS plus `@media (min-width: 760px)`

## 9. Computed evidence before correction

The visible `.platform-logos`-to-Services distance measured:

- `375px`: `20px`
- `390px`: `20px`
- `768px`: `68px`
- `1024px`: approximately `74px`
- `1440px`: `68px`

The `1024px` value includes the small centered remainder produced by the existing `900px` hero minimum. That minimum is not responsible for the large desktop screenshot band and remains unchanged.

## 10. Minimal correction

Within the existing `@media (min-width: 760px)` rules:

```css
.hero {
  padding-bottom: 40px;
}

.platform-strip {
  padding-bottom: 8px;
}
```

This reduces only the two confirmed padding layers. The base `20px` platform bottom padding remains unchanged on narrow mobile, where no excessive dark band exists.

No Services declaration, grid gap, header rule, negative margin, transform, fixed height, or visibility rule is changed.

## 11. Computed result after correction

The outside platform-wrapper-to-Services transition measures:

- `375px`: `0px`, with the existing `20px` internal mobile platform padding preserving separation
- `390px`: `0px`, with the existing `20px` internal mobile platform padding preserving separation
- `768px`: `40px`
- `1024px`: approximately `56px`
- `1440px`: `40px`

The screenshot-visible platform-logo-row-to-Services distance measures:

- `375px`: `20px`, unchanged
- `390px`: `20px`, unchanged
- `768px`: `48px`
- `1024px`: approximately `64px`
- `1440px`: `48px`

The tablet and desktop transition therefore remains within the intended `40–64px` range without overlap.

## 12. Responsive and overflow result

- `375px` and `390px`: mobile proof/platform layout and natural-height hero remain unchanged.
- `768px`: platform strip remains readable and the visible transition is `48px`.
- `1024px`: platform strip remains readable and the visible transition is approximately `64px`.
- `1440px`: platform strip remains readable and the visible transition is `48px`.
- No checked width has horizontal overflow or section overlap.

## 13. Services preservation

Unit 4C8 does not modify any Services selector. It preserves:

- Unit 4C6's `.services-shell` desktop track allocation
- Unit 4C4's natural grid rows and card heights
- Unit 4C5's Services padding and internal spacing
- all six cards, icons, copy, experience chips, heading, CTA, and `#services`

## 14. Files changed

Changed:

- `assets/css/style.css`

Added:

- `docs/UNIT_4C8_DIAGNOSE_REMAINING_HERO_PLATFORM_CONTAINER_HEIGHT.md`

Not changed:

- `index.html`
- `assets/js/main.js`
- any image or other asset
- dependency, build, analytics, backend, or deployment configuration

## 15. Verification record

- Branch verified as `refine/v3-section-review`.
- Unit 4C7's previous hero correction was `padding-bottom: 48px` at `min-width: 760px`.
- The remaining internal source was `.platform-strip` base bottom padding of `20px`.
- Tablet/desktop platform bottom padding is now `8px`; hero bottom padding is now `40px`.
- Responsive computed geometry confirms a `48–64px` visible transition across tablet and desktop.
- Mobile transition behavior remains unchanged.
- No overlap or horizontal overflow is introduced.
- Services computed geometry and declarations remain unchanged from the Unit 4C8 baseline.
- `index.html`, JavaScript, and image assets remain unchanged.
- No dependency is added.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 16. Recommended next section review

**Unit 4D — Work and Framework Cards Review**

Goal: review the Work/Framework section as the next bounded homepage surface without reopening the corrected hero/platform transition or Services layout.

## 17. Explicitly not next

- Services card, copy, icon, track, or spacing changes
- header, sticky behavior, scroll offsets, or mobile-navigation changes
- proof-strip or platform-logo redesign
- negative margins, transforms, fixed section heights, or hidden content
- client case-study publication
- fake performance metrics, testimonials, or client logos
- JavaScript feature work
- analytics or contact-backend integration
- dependency, framework, build-tool, external-font, or icon-library adoption
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 18. Test record

No automated application test suite is required for this bounded CSS diagnosis and documentation correction. Headless-browser geometry plus static cascade, protected-file hash, dependency, and Git checks are used. Final visual approval remains a separate Project Owner browser-QA step.
