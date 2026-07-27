# Unit 5D-Fix — Mobile Article Layout and Creative Editorial Presentation

## Status

HTML, CSS, editorial guardrail, and QA correction for the ten Batch 1 draft articles. No article was published.

## Purpose

Correct the mobile article-header and supporting-visual overflow found during Unit 5D-QA, then replace the repeated four-box draft treatment with topic-specific editorial visual systems.

## Diagnosis

`.blog-post-header-inner` was declared after `.blog-shell` with `width: 100%` and `max-width: 920px`. At mobile widths, that later rule overrode the shell’s inset width and placed article-header content against the viewport edge.

The Batch 1 hero visuals also reused the same four-cell grid across all ten drafts, which did not provide article-specific editorial support.

## Mobile correction

At widths below 480px:

- `.blog-post-header-inner` now restores a 16px inset on both sides;
- header, labels, title, summary, and metadata use `width: 100%`, `max-width: 100%`, and `min-width: 0`;
- desktop offsets, transforms, and inline margins are neutralized;
- the article title uses `clamp(2rem, 10.2vw, 2.75rem)`;
- the article hero and every supporting visual remain within the shell;
- mobile variants stack or reflow without fixed-width clipping.

Desktop article-shell dimensions and typography rules remain unchanged.

## Batch 1 visual systems

The ten drafts now use:

1. small-business framework grid;
2. platform decision tree;
3. content-pillar framework;
4. publishing timeline;
5. organic/paid comparison;
6. audience-research process;
7. KPI scorecard;
8. competitor-analysis matrix;
9. B2B decision layers;
10. strategy audit table.

Every visual uses concise topic-relevant labels and the existing V3 color, surface, border, typography, and glow language.

## Future-batch rule

`blog/data/editorial-rules.json` and `blog/README.md` now require one topic-specific visual module per article. Approved choices include framework cards, audit tables, comparison matrices, process timelines, funnel diagrams, checklist boards, decision trees, channel maps, measurement dashboards, content calendars, testing matrices, and troubleshooting flows. No module type may be used more than twice in one batch. Repeated visual blocks and random decoration are explicitly disallowed.

## Files changed

- `blog/assets/blog.css`
- the ten Batch 1 draft article files
- `blog/data/editorial-rules.json`
- `blog/README.md`
- this unit record

## Verification

Required checks:

- 375px and 390px article-title containment;
- no horizontal overflow;
- topic-specific visual reflow;
- unchanged desktop article shell;
- visibly different supporting structures in at least two samples;
- zero console errors;
- zero failed local requests;
- all Batch 1 statuses remain `draft`;
- drafts remain absent from public grids;
- no main-site file changes;
- `git diff --check`.

## Boundary

Creative refinement is not publication. Browser QA is not owner approval. Draft files remain `noindex, nofollow` and unlisted.
