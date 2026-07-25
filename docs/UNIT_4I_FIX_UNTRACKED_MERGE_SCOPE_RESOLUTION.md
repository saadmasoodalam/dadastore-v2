# Unit 4I-Fix — Untracked Merge-Scope Resolution

## 1. Title

Unit 4I-Fix — Untracked Merge-Scope Resolution

## 2. Status

This is a bounded repository-hygiene and documentation-classification unit on `refine/v3-section-review`.

It resolves only the seven exact blockers identified by Unit 4I. It does not change implementation, production assets, protected local folders, staging, commits, branch history, merge state, deployment, DNS, or the live DaDaStore site.

## 3. Purpose

The purpose is to classify five unresolved Unit documents against the implementation and later project history, retain valid audit records, remove two confirmed accidental terminal-output files, and define the exact documentation scope for a future commit.

Core law:

- Classify before deleting.
- Preserve valid project documentation.
- Remove only confirmed accidental artifacts.
- Merge-scope cleanup is not merge execution.

## 4. Branch

- Current branch: `refine/v3-section-review`
- Latest committed checkpoint at assessment time: `d900f52 Add full responsive QA checkpoint`
- No checkout, branch creation, merge, commit, push, deployment, or remote mutation occurred.

## 5. Original blocker

Unit 4I found that the untracked working-tree scope was not limited to the approved local-only folders and intended checkpoint document.

The exact blockers were:

- five unresolved Unit documents whose include/exclude status had not been classified;
- two accidental root files containing terminal or pager output.

The implementation itself had no tracked or staged difference and Unit 4H had recorded no browser-QA defect.

## 6. Initial untracked inventory

Protected local-only folders:

- `Microsoft/`
- `_local-reference/`
- `incoming-brand/`

Pending checkpoint document:

- `docs/UNIT_4I_FINAL_BRANCH_APPROVAL_AND_MERGE_READINESS.md`

Five unresolved Unit documents:

- `docs/UNIT_3D3_HERO_TEXT_AND_HEADER_LOGO_CORRECTION.md`
- `docs/UNIT_3D4_HERO_VISUAL_PANEL_REPLACEMENT.md`
- `docs/UNIT_3D6_EXACT_HERO_VISUAL_TARGET_CORRECTION.md`
- `docs/UNIT_4A_HERO_SECTION_DATA_OVERLAY_AND_REVIEW.md`
- `docs/UNIT_4B_FIX_LOGO_STYLE_PLATFORM_STRIP_CORRECTION.md`

Two accidental terminal-output files:

- `ection and visuals`
- `tatus --short`

Every path above was identified from the actual pre-change `git status --short` and root-file inventory before either artifact was removed.

## 7. Five Unit-document classifications

### 7.1 Unit 3D3 — Hero Text and Header Logo Correction

- Exact path: `docs/UNIT_3D3_HERO_TEXT_AND_HEADER_LOGO_CORRECTION.md`
- Work recorded: an intermediate hero-line composition and a header lockup using the approved cart mark beside a styled text label.
- Corresponding implementation: yes. Unit 3D4’s later record explicitly states that its working tree included and preserved the preceding Unit 3D3 correction.
- Later supersession: yes. Later hero-copy units changed the headline direction, while Units 4A5 and 4A5-Fix replaced the composed text lockup with the approved horizontal raster logo.
- Classification: **B. RETAIN — superseded but valuable audit history**
- Reason: it records a real owner-requested correction and explains why a composed lockup was temporarily used. Later refinement does not make the historical decision invalid.
- Final action: retained unchanged and recommended for the documentation commit.

### 7.2 Unit 3D4 — Hero Visual Panel Replacement

- Exact path: `docs/UNIT_3D4_HERO_VISUAL_PANEL_REPLACEMENT.md`
- Work recorded: replacement of a rejected circular/radar hero with a claim-safe HTML/CSS Commerce OS panel.
- Corresponding implementation: yes. The later Unit 3D4 page-direction record identifies the earlier Unit 3D4 draft as part of the working-tree sequence, and Unit 3D5 explains why the HTML/CSS visual was then replaced by a dedicated SVG.
- Later supersession: yes. The new Unit 3D4 page direction, Unit 3D5 SVG, Unit 3D6 exact-target SVG, and Unit 3D7 raster integration successively replaced the panel.
- Classification: **B. RETAIN — superseded but valuable audit history**
- Reason: it records a real rejected visual direction and the proof guardrails maintained during that iteration. It is not a duplicate of the later template-aligned Unit 3D4 record.
- Final action: retained unchanged and recommended for the documentation commit.

### 7.3 Unit 3D6 — Exact Hero Visual Target Correction

- Exact path: `docs/UNIT_3D6_EXACT_HERO_VISUAL_TARGET_CORRECTION.md`
- Work recorded: reconstruction of `assets/img/hero-commerce-intelligence.svg` around the owner’s central neon cart, rings, holographic base, and dashboard-card target.
- Corresponding implementation: yes. The SVG remains tracked as prior-unit history, and Unit 3D7 explicitly states that the Unit 3D6 SVG was structurally close but insufficiently premium.
- Later supersession: yes. Unit 3D7 replaced the SVG reference in `index.html` with the final raster PNG while deliberately retaining the SVG file as history.
- Classification: **B. RETAIN — superseded but valuable audit history**
- Reason: it is the documented bridge between the earlier restrained SVG and the accepted raster direction, including the exact owner correction and claim-safe visual boundary.
- Final action: retained unchanged and recommended for the documentation commit.

### 7.4 Unit 4A — Hero Section Data Overlay and Review

- Exact path: `docs/UNIT_4A_HERO_SECTION_DATA_OVERLAY_AND_REVIEW.md`
- Work recorded: five editable HTML/CSS Upwork-proof chips positioned around the approved raster hero.
- Corresponding implementation: yes. Unit 4A-Rework explicitly records removing `.hero-data-overlays`, `.hero-data-chip`, and their CSS after the Project Owner rejected the overlay treatment.
- Later supersession: yes. Unit 4A-Rework moved safe synthetic interface labels into the raster artwork and restored verified proof to the separate proof bar.
- Classification: **B. RETAIN — superseded but valuable audit history**
- Reason: it records a real attempted refinement, the owner’s subsequent rejection, and why the final implementation avoids proof chips over the hero image.
- Final action: retained unchanged and recommended for the documentation commit.

### 7.5 Unit 4B-Fix — Logo-Style Platform Strip Correction

- Exact path: `docs/UNIT_4B_FIX_LOGO_STYLE_PLATFORM_STRIP_CORRECTION.md`
- Work recorded: replacement of pill-like platform badges with a flat row of locally authored inline SVG platform-style marks.
- Corresponding implementation: yes. Unit 4B2 explicitly states that the Project Owner rejected the hand-drawn SVG approximations and that the previous six inline platform SVGs and their drawing-specific CSS were removed.
- Later supersession: yes. Unit 4B2 replaced the approximations with supplied original PNG logos; Unit 4B3 then refined their size and presence.
- Classification: **B. RETAIN — superseded but valuable audit history**
- Reason: it preserves the decision chain from pills, through local approximations, to the supplied original logo assets. It is not duplicated by Units 4B2 or 4B3.
- Final action: retained unchanged and recommended for the documentation commit.

All five documents were read completely. None required a filename, broken-path, or historical-status correction.

## 8. Accidental terminal-output files identified

### `ection and visuals`

- Size before removal: 1,918 bytes.
- Content: terminal pager help headed `SUMMARY OF LESS COMMANDS`, with navigation-key instructions and control-character formatting.
- Implementation references: none in `index.html`, `assets/css/style.css`, or `assets/js/main.js`.
- Classification: confirmed accidental terminal-output artifact.

### `tatus --short`

- Size before removal: 454 bytes.
- Content: a newline-separated Git changed-file/status transcript listing CSS, framework SVGs, two Unit 4D documents, and `index.html`.
- Implementation references: none in `index.html`, `assets/css/style.css`, or `assets/js/main.js`.
- Classification: confirmed accidental terminal-output artifact.

Neither file was a production asset, workflow authority, legitimate document, or source dependency.

## 9. Files removed

Only these two exact root files were removed:

- `ection and visuals`
- `tatus --short`

They were removed individually. No `git clean`, wildcard deletion, recursive deletion, folder deletion, or broad untracked-file cleanup was used.

## 10. Files retained

The following valid Unit records were retained unchanged:

- `docs/UNIT_3D3_HERO_TEXT_AND_HEADER_LOGO_CORRECTION.md`
- `docs/UNIT_3D4_HERO_VISUAL_PANEL_REPLACEMENT.md`
- `docs/UNIT_3D6_EXACT_HERO_VISUAL_TARGET_CORRECTION.md`
- `docs/UNIT_4A_HERO_SECTION_DATA_OVERLAY_AND_REVIEW.md`
- `docs/UNIT_4B_FIX_LOGO_STYLE_PLATFORM_STRIP_CORRECTION.md`

The pending Unit 4I checkpoint was also preserved:

- `docs/UNIT_4I_FINAL_BRANCH_APPROVAL_AND_MERGE_READINESS.md`

## 11. Protected folders preserved

The following protected paths were not deleted, renamed, staged, or modified:

- `Microsoft/`
- `_local-reference/`
- `incoming-brand/`
- `_local-reference/qa/unit-4h/`

Post-removal protected-folder inventory:

- `Microsoft/`: 1 file, 8,246 bytes
- `_local-reference/`: 16 files, 20,127,242 bytes
- `incoming-brand/`: 16 files, 2,689,904 bytes

No operation in this unit targeted a protected-folder path.

## 12. Final untracked inventory

The final expected untracked scope consists only of:

Protected local-only folders:

- `Microsoft/`
- `_local-reference/`
- `incoming-brand/`

Valid documents pending an explicitly authorized documentation commit:

- `docs/UNIT_3D3_HERO_TEXT_AND_HEADER_LOGO_CORRECTION.md`
- `docs/UNIT_3D4_HERO_VISUAL_PANEL_REPLACEMENT.md`
- `docs/UNIT_3D6_EXACT_HERO_VISUAL_TARGET_CORRECTION.md`
- `docs/UNIT_4A_HERO_SECTION_DATA_OVERLAY_AND_REVIEW.md`
- `docs/UNIT_4B_FIX_LOGO_STYLE_PLATFORM_STRIP_CORRECTION.md`
- `docs/UNIT_4I_FINAL_BRANCH_APPROVAL_AND_MERGE_READINESS.md`
- `docs/UNIT_4I_FIX_UNTRACKED_MERGE_SCOPE_RESOLUTION.md`

No accidental terminal-output file or unexplained untracked path remains.

## 13. Files recommended for commit

The exact recommended documentation-commit scope is:

- `docs/UNIT_3D3_HERO_TEXT_AND_HEADER_LOGO_CORRECTION.md`
- `docs/UNIT_3D4_HERO_VISUAL_PANEL_REPLACEMENT.md`
- `docs/UNIT_3D6_EXACT_HERO_VISUAL_TARGET_CORRECTION.md`
- `docs/UNIT_4A_HERO_SECTION_DATA_OVERLAY_AND_REVIEW.md`
- `docs/UNIT_4B_FIX_LOGO_STYLE_PLATFORM_STRIP_CORRECTION.md`
- `docs/UNIT_4I_FINAL_BRANCH_APPROVAL_AND_MERGE_READINESS.md`
- `docs/UNIT_4I_FIX_UNTRACKED_MERGE_SCOPE_RESOLUTION.md`

This unit does not stage or commit them.

## 14. Files intentionally excluded

The following are intentionally excluded from commit:

- `Microsoft/`
- `_local-reference/`
- `_local-reference/qa/unit-4h/`
- `incoming-brand/`

The removed terminal artifacts are not commit candidates.

## 15. Merge-readiness reassessment

The exact Unit 4I merge-scope blockers are resolved:

- all five valid Unit documents have an explicit retain classification and intended commit disposition;
- both confirmed accidental root artifacts are removed;
- no unexplained untracked path remains;
- protected local-only folders remain excluded;
- implementation and production assets remain unchanged.

The repository is ready for **Unit 4I2 — Final Clean Merge-Readiness Confirmation**.

This is not merge authorization. The seven retained/pending documents remain untracked until an explicitly authorized documentation commit, and final branch readiness must be recorded again before Unit 4J begins.

## 16. Files changed

Added:

- `docs/UNIT_4I_FIX_UNTRACKED_MERGE_SCOPE_RESOLUTION.md`

Removed:

- `ection and visuals`
- `tatus --short`

Retained unchanged:

- the five classified Unit documents;
- `docs/UNIT_4I_FINAL_BRANCH_APPROVAL_AND_MERGE_READINESS.md`;
- all implementation files, production assets, and protected local folders.

## 17. Verification record

- Branch: `refine/v3-section-review`
- Exact unresolved Unit documents reviewed: 5 of 5
- Unit-document result: all five classified `B. RETAIN — superseded but valuable audit history`
- Exact accidental files verified and removed: 2 of 2
- Accidental files referenced by HTML/CSS/JavaScript: no
- Protected folders modified, deleted, renamed, or staged: no
- `index.html` modified: no
- `assets/css/style.css` modified: no
- `assets/js/main.js` modified: no
- production assets modified: no
- implementation-file SHA-256 hashes checked before and after
- no `git clean`, wildcard deletion, or recursive folder deletion used
- unexplained untracked files remaining: none
- staged files: none
- committed or pushed files: none
- tests: not run because this is repository hygiene and documentation classification only
- final `git diff --check`, `git status --short`, `git diff --name-only`, and `git ls-files --others --exclude-standard` are reported after documentation creation

## 18. Recommended next unit

**Unit 4I2 — Final Clean Merge-Readiness Confirmation**

Goal: verify the now-classified documentation scope, protected-folder exclusions, branch relationship, and final clean merge prerequisites before any separately authorized documentation commit or controlled merge.

## 19. Explicitly not next

- merge
- deployment
- DNS or CNAME changes
- production-domain cutover
- live DaDaStore repository changes
- deleting, renaming, staging, or modifying protected folders
- modifying HTML, CSS, JavaScript, or production assets
- broad repository cleanup
- `git clean`
- automatic staging, commit, or push
