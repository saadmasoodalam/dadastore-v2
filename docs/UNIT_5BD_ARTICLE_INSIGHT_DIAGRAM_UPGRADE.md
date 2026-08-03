# Unit 5BD — Article Insight Diagram Upgrade

## 1. Title

Unit 5BD — Upgrade Article Insight Diagrams.

## 2. Status

Implemented as a bounded shared-CSS, semantic-markup, audit-script, responsive-QA, and documentation unit. No article argument, publication record, runtime JavaScript, external dependency, deployment setting, sitemap, or feed was changed.

## 3. Purpose

Upgrade the existing article insight blocks into compact, informative visual explainers that clarify comparison, sequence, decision, measurement, and system relationships while preserving every existing label and article conclusion.

## 4. Project Owner feedback

The Project Owner asked to retain the article insight sections while making them more visually interesting, compact, informative, and topic-specific. The approved direction replaces equal flat cells with connected inputs, staged flows, emphasized outcomes, layered structures, and clearer measurement relationships.

## 5. Existing insight-block audit

All 61 published article pages were audited. Sixty pages contain one insight block; the legacy article `how-to-create-a-social-media-marketing-plan-that-drives-results` contains none and was left unchanged.

The 60 applicable blocks used 15 patterns:

| Existing pattern | Articles |
| --- | ---: |
| Timeline | 8 |
| Framework | 6 |
| Audit | 5 |
| Channel map | 5 |
| Matrix | 5 |
| Scorecard | 5 |
| Checklist | 4 |
| Decision | 4 |
| Funnel | 4 |
| Layers | 4 |
| Process | 3 |
| Troubleshoot | 3 |
| Compare | 2 |
| Orbit | 1 |
| Pillars | 1 |

The audit found four shared weaknesses: matrices and audits used a flat joined-table treatment; the orbit pattern had no dedicated styling; insight text was hidden from assistive technology; and the previous mobile audit rule removed every third cell from view. Those defects are resolved by the new shared system.

## 6. Diagram categories identified

The existing topic-specific patterns now map to five semantic families:

- Comparison diagrams: 5.
- Process flows: 16.
- Decision frameworks: 16.
- Measurement systems: 8.
- Layered architectures: 15.

The mapping retains all 15 original pattern classes so unrelated topics do not collapse into one repeated composition.

## 7. Shared visual system

Every applicable wrapper now carries `blog-insight-block`, `role="group"`, a preserved descriptive `aria-label`, a five-family `data-insight-kind`, and a category-derived `data-insight-topic`. The diagram retains its original topic-specific `blog-visual-*` class and adds `blog-insight-diagram` after it for validator compatibility.

The shared treatment uses a deep navy/charcoal technical surface, restrained grid texture, cyan/electric-blue/violet/magenta category accents, off-white primary text, muted secondary text, soft borders, small glass labels, and restrained outcome glow. Category accents differentiate related systems without altering meaning.

## 8. Comparison-diagram design

Flat matrices are separated into individual input and output cards. Third-column resolutions receive stronger borders, background contrast, and directional markers. Two-sided comparisons retain their distinct source panels and use the existing concluding label as the coordinated outcome.

The Google/Meta comparison now presents Google and Meta as distinct inputs, Decision and Shared Landing Journey as resolved outputs, and visible relationship markers between them. No label was added, removed, or rewritten.

## 9. Process-flow design

Timeline patterns use numbered stages and a stronger final stage. Process-node patterns use connected flexible sequences on tablet/desktop and a vertical connected stack on mobile. Funnels emphasize the final stage. The previously unstyled growth-system orbit now has connected stages and a distinct learning outcome.

Long process labels use compact padding and normal word-boundary wrapping. The six-stage automation example keeps Trigger through Exit in one ordered desktop row without breaking words.

## 10. Decision-framework design

Decision and troubleshooting patterns keep context/questions visually quieter than their existing final action. Audits and decision matrices no longer render as one flat table; they use separated cards with every existing decision/evidence column preserved. Checklist patterns retain their semantic labels and visible non-color check indicators.

## 11. Measurement-system design

Scorecards distinguish label, signal line, and interpretation. Measurement matrices use separated evidence cards rather than joined flat cells, while channel-map structures keep sources, measurement center, and destinations legible. Existing KPI, tracking, attribution, and reporting labels remain unchanged.

## 12. Layered-architecture design

Frameworks emphasize their existing concluding layer. Layer stacks use controlled inset depth to show hierarchy. Pillar and channel-map centers receive stronger emphasis, while surrounding elements remain supporting layers. SEO, content, ecommerce, UTM, and operating-system topics keep their original structures instead of receiving a generic common diagram.

## 13. Article-specific mapping

All 60 applicable pages are explicitly classified:

- **Comparison diagrams (5):** `organic-and-paid-social-media-strategy`, `social-media-competitor-analysis`, `google-ads-vs-meta-ads`, `meta-capi-vs-browser-tracking`, `how-to-diagnose-creative-fatigue`.
- **Decision frameworks (16):** `how-to-choose-social-media-platforms-for-your-business`, `social-media-strategy-audit-checklist`, `tiktok-ads-planning-guide`, `small-budget-paid-advertising-plan`, `meta-ads-troubleshooting-checklist`, `shopify-cro-audit-checklist`, `ecommerce-checkout-friction`, `ecommerce-offer-testing-framework`, `mobile-ecommerce-conversion-optimization`, `meta-pixel-event-planning-and-validation`, `marketing-attribution-models-explained`, `cross-channel-marketing-dashboard`, `creative-testing-framework-for-paid-ads`, `email-segmentation-lifecycle-strategy`, `how-to-choose-marketing-automation-software`, `technical-seo-audit-priorities`.
- **Layered architectures (15):** `social-media-strategy-template-for-small-business`, `how-to-build-social-media-content-pillars`, `b2b-social-media-strategy-framework`, `how-to-structure-meta-ads-campaigns`, `google-search-campaign-structure`, `shopify-product-page-cro`, `shopify-navigation-and-collection-page-cro`, `utm-governance-system`, `privacy-conscious-marketing-measurement`, `how-to-write-ad-hooks`, `creative-brief-for-performance-marketing`, `seo-topic-clusters-customer-questions`, `ecommerce-seo-foundations`, `small-budget-marketing-plan`, `marketing-operating-system-for-small-teams`.
- **Measurement systems (8):** `social-media-kpis-that-connect-to-business-goals`, `paid-media-reporting-framework`, `landing-page-cro-for-paid-traffic`, `ga4-ecommerce-measurement-plan`, `marketing-tracking-audit-checklist`, `diagnosing-ad-platform-reporting-discrepancies`, `lead-generation-measurement-framework`, `quarterly-marketing-review`.
- **Process flows (16):** `how-to-create-a-social-media-content-calendar`, `social-media-audience-research-guide`, `paid-social-funnel-strategy`, `lead-generation-campaign-planning`, `privacy-aware-retargeting-strategy`, `how-to-reduce-ecommerce-cart-abandonment`, `ecommerce-site-speed-and-conversion`, `ecommerce-funnel-analysis`, `content-marketing-customer-journey`, `content-repurposing-system`, `editorial-calendar-workflow`, `welcome-email-sequence-planning`, `abandoned-cart-email-strategy`, `marketing-automation-workflow-map`, `crm-lead-nurturing-automation`, `client-acquisition-system-for-service-businesses`.

## 14. Responsive behavior

Desktop blocks use their available width without fixed-height expansion. Tablet layouts preserve relationships and readable labels. At 390px, comparisons, decision matrices, measurement matrices, frameworks, channel maps, and orbit/process stages stack logically. Directional indicators rotate or reposition for vertical flow. All labels remain present, and no horizontal scrolling is introduced.

## 15. Accessibility

The diagrams remain semantic HTML. `aria-hidden="true"` was removed from all 60 visual blocks, and each parent changed from image semantics to a labelled group so assistive technology can access both the concise group label and every diagram label. Meaning uses text, structure, borders, connectors, and emphasis rather than color alone. Automated checks found no hidden diagram labels and no label smaller than 9px at the tested widths.

## 16. Motion behavior

No animation is required for comprehension. Hover-capable devices receive only a two-pixel card elevation and restrained border response. The existing global reduced-motion guard reduces diagram transitions to 1ms and leaves animation duration at zero; this was verified in browser emulation.

## 17. Performance impact

The upgrade adds only shared CSS and static HTML attributes/classes. It adds no JavaScript runtime behavior, image assets, font requests, libraries, APIs, or external dependencies. Rendering uses normal CSS grid/flex layouts and lightweight pseudo-elements.

## 18. Files changed

- `blog/assets/blog.css` — shared five-family visual system, topic accents, responsive rules, and reduced-motion-compatible interaction.
- 60 published article `index.html` files — structural classes, family/topic attributes, labelled group semantics, and accessible diagram text only.
- `scripts/upgrade-article-insights.mjs` — idempotent 61-page audit and lossless structural migration with visible-text preservation checks.
- `docs/UNIT_5BD_ARTICLE_INSIGHT_DIAGRAM_UPGRADE.md` — this record.

`blog/assets/blog.js`, `blog/data/posts.json`, `blog/data/article-plan.json`, sitemap, feed, covers, Insights, Categories, and the legacy article without an insight block were not changed by this unit.

## 19. Verification results

- Published pages audited: 61.
- Applicable insight blocks upgraded: 60.
- Existing pattern families preserved: 15.
- Semantic diagram families: 5.
- Generic flat matrices remaining where stronger treatment applies: 0.
- Hidden diagram labels: 0.
- Article visible-text changes: 0.
- Unsupported claims added: 0.
- Publication-state changes: 0.
- Metadata, slug, title, URL, cover, sitemap, and feed changes: 0.
- Library validator: 0 broken links, 0 metadata failures, 0 visual-module failures, and original 15 pattern families recognized.
- Category-directory tests: 9 passed.
- Featured-rotation tests: 10 passed.
- Browser QA: 72/72 scenarios passed across 390, 768, 1024, and 1440px, covering all 15 patterns plus comparison/decision/measurement matrix variants.
- Horizontal overflow, hidden-label, duplicate-ID, console-error, and failed-request failures: 0.
- Reduced-motion verification: passed (`0.001s` transitions; `0s` animation).
- `git diff --check`: passed.

The pre-existing unrelated modification to `blog/data/article-plan.json` remains untouched and is not part of this unit.

## 20. Rollback procedure

Rollback is bounded to the Unit 5BD diff: remove the Unit 5BD CSS section, revert the 60 structural wrapper/class/attribute changes, and remove the migration script and this document. Once committed, prefer reverting that dedicated commit. Do not roll back article copy, publication records, shared navigation, sitemap/feed, category graphics, or unrelated worktree changes.

## 21. Allowed next work

- Project Owner visual review of representative blocks from all five families.
- A bounded correction for a specifically rejected diagram family, article mapping, spacing rule, or emphasis treatment.
- Commit planning after visual approval and final scope review.

## 22. Disallowed next work

- Article rewriting, new claims, or conclusion changes.
- Title, slug, URL, metadata, cover, or publication-state changes.
- Insight sections converted to image-only graphics.
- External libraries, APIs, or animation frameworks.
- Insights hero, category directory, featured rotation, sitemap, feed, DNS, deployment, or production-setting changes.
- Any disposition decision for the unrelated `blog/data/article-plan.json` modification.

## 23. Recommended next unit

Unit 5BE — Article Insight Diagram Visual Approval Checkpoint.

Goal: record the Project Owner's visual review of comparison, process, decision, measurement, and layered-architecture samples and identify any bounded corrections before commit planning.

## 24. Suggested commit message

`Upgrade article insight diagrams`
