# Unit 4F — Proof and Credibility Section Review

## 1. Status

Unit 4F is a bounded HTML, CSS, and documentation refinement of the existing Proof section. It does not change JavaScript, assets, dependencies, deployment configuration, or production state.

## 2. Purpose

This unit removes the repeated five-card Upwork display and replaces it with a broader credibility structure combining approved experience positioning, concise marketplace proof, and technical/operating capability labels.

## 3. Owner review

The Project Owner found that the previous Proof section repeated the same five Upwork values already shown below the hero. The section remained credible, but its space was dominated by duplicate marketplace metrics rather than broader experience and operating depth.

## 4. Branch

- Current branch: `refine/v3-section-review`
- No commit, push, merge, deployment, DNS action, production cutover, or live-site modification is included.

## 5. Previous proof repetition

The previous section presented:

- a marketplace-proof heading and boundary paragraph
- five separate Upwork metric cards
- a five-column metric row at desktop

Those values duplicated the approved hero proof bar and made marketplace metrics the section's only major visual focus.

## 6. New proof/experience structure

The section remains dark and now uses:

- a controlled `Proof & Experience` introduction
- two primary experience cards
- one compact, secondary Upwork credential cluster
- one technical/operating capability row
- concise evidence-boundary text

The main heading is `Built on Real Experience. Backed by Verified Marketplace Proof.`

## 7. 25+/10+ experience boundary

The two experience cards use approved positioning:

- **25+ Years — Creative & Technical Experience**
- **10+ Years — Ecommerce & Paid Advertising**

The 25+ positioning covers broad creative and technical work such as graphics, animation, 3D, digital production, mobile games, and evolving online platforms.

The 10+ positioning covers ecommerce and paid-advertising work across site platforms, paid channels, CRO, tracking, and integrations.

These statements describe experience duration and scope. They are not performance claims, client-result claims, or guarantees.

## 8. Upwork proof preservation

All approved public Upwork values remain:

- 100% Job Success
- Top Rated Plus
- $100K+ Earned
- 5,000+ Hours
- 74 Jobs Completed

They now appear as compact credential tags rather than five large cards. This preserves proof without duplicating the hero's visual hierarchy.

## 9. Capability layer

The compact capability row contains:

- Data Analysis
- Troubleshooting
- Integrations
- Low-Budget Growth Systems
- Creative Strategy
- Audience & Offer Thinking

These are capability labels, not client outcomes or performance claims.

## 10. Evidence boundary

The section states:

> Verified public Upwork history is presented separately from private client work, testimonials, and unapproved case-study results.

No review excerpt, testimonial, client identity, private message, logo, private data, or unapproved result is added.

## 11. Responsive considerations

- `375px` and `390px`: experience cards stack; credential and capability tags wrap within the container.
- `768px`: experience cards use two columns while the proof and capability layers remain full width.
- `1024px` and `1440px`: introduction and experience cards form a balanced two-column top row; compact proof and capability layers span below.
- The heading uses a controlled maximum size and does not dominate the section.
- No fixed-width row or horizontal scrolling is introduced.
- Natural content height keeps the dark section compact.

## 12. JS compatibility preserved

`assets/js/main.js` remains unchanged.

Compatibility is preserved because:

- the section ID remains `proof`
- `.reveal` remains on the introduction and the new credibility groups
- the primary navigation still targets `#proof`
- active navigation and smooth scrolling continue to use the existing ID
- navigation order remains Services, Work, Process, Proof, Contact

## 13. Files changed

Changed:

- `index.html`
- `assets/css/style.css`

Added:

- `docs/UNIT_4F_PROOF_AND_CREDIBILITY_SECTION_REVIEW.md`

Not changed:

- `assets/js/main.js`
- image or framework assets
- dependencies or build configuration

## 14. Verification record

- Branch is `refine/v3-section-review`.
- `#proof` remains present exactly once.
- The previous oversized heading and five-card proof layout are absent.
- Both approved experience cards are present.
- All five approved Upwork values remain.
- All six approved capability labels are present.
- Navigation order remains Services, Work, Process, Proof, Contact.
- Required section IDs remain unique.
- JavaScript and assets remain unchanged.
- No forbidden performance, client, or testimonial claim is added.
- All mailto links remain `mailto:dadastore.co@gmail.com`.
- Responsive structure is checked at `375px`, `390px`, `768px`, `1024px`, and `1440px`.
- `git diff --check`, Git status, and changed-file scope are recorded after implementation.

## 15. Recommended next section review

**Unit 4G — Contact CTA and Footer Review**

Goal: review the final conversion surface and footer hierarchy without expanding into a backend, analytics, or production cutover.

## 16. Explicitly not next

- review excerpts or testimonials
- client names, logos, private messages, private work, or unapproved case studies
- revenue, ROAS, CPA, ad-spend, sales, order, or guaranteed-result claims
- JavaScript changes
- image or framework-asset changes
- hero, Services, Work, Process, Contact, header, or footer redesign inside Unit 4F
- analytics or contact-backend integration
- external dependencies, icon libraries, fonts, frameworks, or build tools
- merge, deployment, DNS, CNAME, or production cutover
- modification of the live DaDaStore repository
