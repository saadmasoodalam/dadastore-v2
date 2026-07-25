# Unit 4D — Replace Commerce Intelligence With Work Framework Section

## 1. Status

Unit 4D is a bounded HTML, CSS, and documentation replacement. It removes the repetitive standalone Commerce Intelligence section and moves one compact, evidence-safe Work/Framework section directly after Services.

## 2. Purpose

The purpose of this unit is to align the post-Services page sequence more closely with the approved template while preserving strategic concepts for a later Process review.

Core law:

- Framework cards are not completed case studies.
- Template case-study styling is not permission to invent results.
- Removing a repetitive section is not loss of strategy.
- No fake metrics.
- No deployment.

## 3. Owner review

The Project Owner found the standalone Commerce Intelligence section too large, repetitive, and structurally different from the template. The approved direction is to move directly from Services into a compact Work/Framework surface and reserve the operating-model concepts for Process.

## 4. Template reference used

`_local-reference/v3-template-reference-02.png` was inspected as a composition reference.

The implementation adopts only safe structural qualities from its case-study row:

- a strong section label and concise heading
- compact cards arranged in a dense grid
- clear category and status labels
- short descriptions
- bounded visual-thumbnail areas

The implementation does not copy or imply the reference's client names, product imagery, performance percentages, revenue, ROAS, testimonials, or logos.

## 5. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 6. Removed section

The standalone `#commerce-intelligence` section is removed, including:

- `Creative intelligence with performance discipline.`
- the separate Signal / Strategy / System / Scale panel
- obsolete `.commerce-intelligence-section`, `.intelligence-*`, `.model-*` HTML and CSS

The section is replaced at the same location with the unique `#work` section. The older Work section that previously appeared after Proof is removed to prevent duplicate content and duplicate IDs.

## 7. Strategic concepts preserved for Process

The removed concepts are preserved as approved planning inputs:

- Signal
- Strategy
- System
- Scale

They will be evaluated for integration during **Unit 4E — Process Section Review**. Unit 4D does not change `#process`, its five current steps, or Process styling.

## 8. Work section structure

The Work section now follows Services directly and uses:

- ID: `work`
- label: `Selected Growth Frameworks`
- heading: `Real Systems. Built for Measurable Growth.`
- approved evidence-boundary supporting copy
- `Discuss Your Project →` mailto CTA
- six compact framework cards

The intro appears above the card grid. At desktop it uses a compact multi-column composition; the cards form a 3-column by 2-row grid.

## 9. Framework cards

The six cards are:

1. Commerce — Ecommerce Growth System
2. Acquisition — Lead Generation Campaign
3. Creative — Creative Testing Framework
4. Measurement — Tracking Repair Sprint
5. Commerce — Shopify CRO Path
6. Advertising — Paid Media Reset

Every card includes the exact status `Framework / Coming Soon`, a category, a bold title, approved short copy, and a CSS-only abstract visual panel.

## 10. Evidence boundary

The framework cards describe structured approaches and approved experience areas. They are not presented as completed client engagements or performance case studies.

The section includes no:

- fake client names or client logos
- fake product or client imagery
- fake revenue, ROAS, sales, orders, or growth percentages
- fake testimonials or review excerpts
- unapproved results or private client data

Full case studies remain explicitly deferred until approved evidence is available.

## 11. Responsive considerations

- `375px` and `390px`: cards stack in one column with compact natural heights.
- `768px`: cards use two columns and three rows.
- `1024px` and `1440px`: cards use three columns and two rows.
- The CTA and every Framework / Coming Soon label remain visible.
- Abstract visual panels stay in normal flow and do not create oversized empty card areas.
- No fixed-width card row or horizontal scrolling is used.
- No checked width introduces horizontal overflow or overlap.

## 12. JS compatibility preserved

`assets/js/main.js` remains unchanged.

Compatibility is preserved because:

- `#services`, `#process`, `#proof`, `#work`, and `#contact` remain present exactly once
- `#work` remains part of the active-navigation observer set
- `.reveal` remains on the Work intro and all six cards
- internal navigation and smooth scrolling retain their existing targets

The removed `#commerce-intelligence` ID was not a JavaScript or navigation hook.

## 13. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4D_REPLACE_COMMERCE_INTELLIGENCE_WITH_WORK_FRAMEWORK_SECTION.md`

Not changed:

- `assets/js/main.js`
- any image or other asset
- dependency, build, analytics, backend, or deployment configuration

## 14. Verification record

- Branch verified as `refine/v3-section-review`.
- The standalone Commerce Intelligence section and obsolete model CSS are absent.
- `#work` exists exactly once and follows `#services` directly.
- Six framework cards and six abstract visual panels remain present.
- All six cards contain `Framework / Coming Soon`.
- Required navigation section IDs remain unique.
- All mailto links remain `mailto:dadastore.co@gmail.com`.
- JavaScript and image assets remain unchanged from the Unit 4D baseline.
- No dependency is added.
- Browser checks cover `375px`, `390px`, `768px`, `1024px`, and `1440px`.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 15. Recommended next section review

**Unit 4E — Process Section Review**

Goal: evaluate how Signal / Strategy / System / Scale should inform the existing Process section without duplicating page structure or expanding into unapproved claims.

## 16. Explicitly not next

- completed case-study publication without approved evidence
- fake client names, products, logos, metrics, testimonials, or results
- Process implementation inside Unit 4D
- hero, proof strip, platform strip, Services, Proof, Contact, header, or footer redesign
- JavaScript feature work
- analytics or contact-backend integration
- image generation or asset replacement
- dependency, framework, build-tool, external-font, or icon-library adoption
- merge, deployment, DNS, CNAME, or production cutover
- live DaDaStore repository modification

## 17. Test record

No automated application test suite is required for this bounded static HTML, CSS, and documentation unit. Static structure, exact-copy, evidence-boundary, protected-file hash, responsive browser, dependency, and Git checks are used. Final visual approval remains a separate Project Owner browser-QA step.
