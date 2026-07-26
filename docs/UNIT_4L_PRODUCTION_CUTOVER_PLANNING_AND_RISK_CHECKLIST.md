# Unit 4L — Production Cutover Planning and Risk Checklist

## 1. Title

Unit 4L — Production Cutover Planning and Risk Checklist

## 2. Status

Unit 4L is a planning and risk-assessment checkpoint only.

No DNS record, GitHub Pages setting, repository setting, custom-domain assignment, implementation file, asset, live repository, or production site was changed.

## 3. Purpose

The purpose is to define a safe, reversible production cutover from the current site at `dadastore.co` to the verified `dadastore-v2` site. The plan records the known state, unresolved preflight items, preferred cutover method, risk controls, rollback sequence, and strict go/no-go gate before any production action is authorized.

Core law:

- Planning is not execution.
- A verified preview is not production approval.
- DNS and Pages settings require a separate authorized unit.
- The old site must remain recoverable until production verification passes.
- Website changes must not disturb email-related DNS.

## 4. Authority reviewed

The following authority and read-only evidence were reviewed:

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4K_GITHUB_PAGES_PREVIEW_VERIFICATION.md`
- current local `main` branch and Git history
- current `origin` configuration
- current `dadastore-v2` repository structure
- current public GitHub Pages preview record
- current public `dadastore.co` and `www.dadastore.co` HTTPS responses
- current public DNS answers for the apex and `www`
- current public metadata and files from `saadmasoodalam/dadastore`
- current public metadata for `saadmasoodalam/dadastore-v2`
- GitHub's current official documentation for Pages custom domains, domain verification, publishing sources, HTTPS, and troubleshooting

Unit 4K was read completely and its result is:

**PREVIEW VERIFIED**

## 5. Current-state inventory

### A. New site

| Item | Current state |
| --- | --- |
| Repository | `saadmasoodalam/dadastore-v2` |
| Local branch | `main` |
| Latest local commit | `86c96a3 Verify GitHub Pages V3 preview` |
| Preview | `https://saadmasoodalam.github.io/dadastore-v2/` |
| Unit 4K status | **PREVIEW VERIFIED** |
| Architecture | Static HTML, CSS, and vanilla JavaScript |
| Backend dependency | None |
| Build/package dependency | None |
| Local production-domain file | No root `CNAME` file is currently present or tracked |
| Remote | `https://github.com/saadmasoodalam/dadastore-v2.git` |

### B. Current production

| Item | Verified current state |
| --- | --- |
| Live domain | `dadastore.co` |
| HTTPS apex response | `200 OK`; server identifies as `GitHub.com` |
| `www` response | HTTPS `301` redirect to `https://dadastore.co/` |
| Current hosting | GitHub Pages |
| Current public source repository | `saadmasoodalam/dadastore` is the repository currently carrying `CNAME` content `dadastore.co`; this and the served content identify it as the current production source |
| Current content type | Static export/snapshot containing WordPress-generated markup and `wp-content`/`wp-includes` references; no live PHP runtime was established |
| Old repository `CNAME` | Present on `main`; exact content is `dadastore.co` |
| DNS authority | `dns1.registrar-servers.com` and `dns2.registrar-servers.com` |
| DNS account/provider ownership | Not confirmed; the authoritative nameserver hostnames are verified, but access ownership has not been demonstrated |
| Apex A | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| Apex AAAA | No apex AAAA answer was returned during inspection |
| Apex CNAME | None |
| `www` CNAME | `saadmasoodalam.github.io` |
| HTTPS | Active at apex and `www`; `www` redirects to apex |
| Mail routing | Google mail MX records are present |

The apex A records and `www` CNAME already match GitHub Pages' documented record strategy. This means the likely production change is primarily a controlled transfer of the custom-domain association from the old Pages repository to `dadastore-v2`, with DNS changes made only if Unit 4M finds an actual mismatch.

## 6. Verified new-site state

Unit 4K verified the public preview at:

`https://saadmasoodalam.github.io/dadastore-v2/`

The recorded verification includes:

- deployed content matching the then-current verified `main`;
- HTTP `200`;
- all explicitly tested CSS, JavaScript, image, SVG, and favicon assets returning `200`;
- no failed requests, console errors, MIME errors, mixed content, or WordPress runtime requests;
- working desktop and mobile navigation;
- working Reviews navigation and active state;
- working mobile menu and back-to-top behavior;
- all mail links using `mailto:dadastore.co@gmail.com`;
- responsive checks at 375px, 390px, 768px, 1024px, and 1440px;
- no horizontal overflow;
- approved V3 content and proof boundaries.

Unit 4K is evidence of preview readiness. A fresh verification against the current `main` and public preview is still required immediately before cutover.

The exact GitHub Pages source branch/folder setting was not independently exposed by the read-only public inspection. The preview behavior and Unit 4K prove publication, but the authenticated Pages setting must be recorded during preflight.

## 7. Current production state

Read-only inspection on 2026-07-26 established:

- `https://dadastore.co/` returns `200 OK` from GitHub Pages;
- `https://www.dadastore.co/` returns `301 Moved Permanently` to `https://dadastore.co/`;
- the apex points to GitHub Pages through four A records;
- `www` points to `saadmasoodalam.github.io` through CNAME;
- HTTPS is active on both hostnames;
- the old `saadmasoodalam/dadastore` repository contains a root `CNAME` file with `dadastore.co`;
- the served site is a static WordPress-derived export rather than evidence of an active WordPress/PHP/database runtime;
- the public DNS zone contains Google mail MX records.

Current public mail routing observed:

- priority 1: `aspmx.l.google.com`
- priority 5: `alt1.aspmx.l.google.com`
- priority 5: `alt2.aspmx.l.google.com`
- priority 10: `aspmx2.googlemail.com`
- priority 10: `aspmx3.googlemail.com`

These values are inventory evidence only. They are not instructions to edit mail DNS.

## 8. Unknowns requiring confirmation

The following items remain unknown or require authenticated confirmation before a cutover:

- the person responsible for the production change and rollback;
- verified access to the authoritative DNS account;
- verified admin access to both GitHub repositories and their Pages settings;
- the exact configured Pages publishing source and folder for each repository;
- the exact custom-domain field and HTTPS-enforcement state shown in each repository's authenticated Pages settings;
- whether the GitHub account's domain-ownership verification is already configured;
- the full DNS-zone export, including any SPF, DKIM, DMARC, CAA, service-verification, or other TXT records not returned by the limited public query;
- current TTL values for every affected web record;
- the old site's backup location, restore owner, and restore test status;
- the desired rollback observation window;
- the chosen low-traffic change window;
- whether the owner wants the repository preview path retained after the custom domain is assigned;
- whether any external monitoring, search-console, analytics, webhook, or third-party service relies on the old site's URLs;
- whether the current production site's last-modified state contains changes not preserved in the old repository.

None of these unknowns should be guessed. Any unresolved item that affects DNS ownership, Pages ownership, mail safety, or rollback is a no-go condition.

## 9. Cutover target

The intended final state is:

- `https://dadastore.co/` serves the approved `dadastore-v2` V3 site;
- `https://www.dadastore.co/` resolves consistently and redirects to the selected canonical apex URL;
- HTTPS is valid and enforced without certificate warnings;
- the `dadastore-v2` GitHub Pages publication remains healthy;
- the repository preview path remains available if GitHub Pages behavior and the owner's preference permit it;
- the old production repository, its pre-cutover configuration, and a complete DNS record remain recoverable throughout the rollback window;
- no V3 content or asset is lost;
- all public contact links remain `mailto:dadastore.co@gmail.com`;
- domain-based mail routing and all supporting mail/verification records remain unchanged;
- the old production site is retired only after the rollback window closes through separate approval.

## 10. Pre-cutover checklist

Every item must be checked and evidenced during Unit 4M:

- [ ] Export or screenshot the complete current DNS zone.
- [ ] Record authoritative nameservers, all web records, record values, and TTLs.
- [ ] Record MX, SPF, DKIM, DMARC, CAA, and every verification TXT record.
- [ ] Screenshot or export Pages settings for both repositories.
- [ ] Record both repositories' Pages source branch and folder.
- [ ] Record both repositories' custom-domain and HTTPS-enforcement state.
- [ ] Record the old repository's `CNAME` file and current commit.
- [ ] Confirm the old live site's files are backed up.
- [ ] Confirm the old repository and hosting remain intact and accessible.
- [ ] Confirm `dadastore-v2/main` is clean, synchronized, and at the approved commit.
- [ ] Re-run the public preview verification immediately before cutover.
- [ ] Verify all eight contact links use `mailto:dadastore.co@gmail.com`.
- [ ] Verify every CSS, JavaScript, image, SVG, and favicon asset.
- [ ] Pass a clean desktop browser test.
- [ ] Pass a clean mobile browser test.
- [ ] Confirm zero console errors and zero failed network requests.
- [ ] Identify the production-change owner.
- [ ] Identify the rollback owner and a backup operator.
- [ ] Write the exact rollback values and sequence from the captured configuration.
- [ ] Select and approve a low-traffic cutover window.
- [ ] Review current TTLs and decide whether an authorized advance TTL reduction is needed.
- [ ] Confirm access to the authoritative DNS account.
- [ ] Confirm GitHub repository admin access for both repositories.
- [ ] Confirm the custom domain is not attached to any third repository.
- [ ] Confirm the account-level GitHub Pages domain-verification state.
- [ ] Define the rollback observation window and acceptance owner.

## 11. Cutover options

### Option A — Assign `dadastore.co` directly to `dadastore-v2` GitHub Pages

**Description:** Preserve the verified V3 repository as the production source and transfer the existing GitHub Pages custom-domain association from the old repository to `dadastore-v2`.

**Advantages:**

- uses the already verified repository and deployment;
- keeps implementation history and production source aligned;
- avoids copying files between repositories;
- preserves the existing GitHub Pages hosting model;
- likely requires little or no apex/`www` DNS change because those records already target GitHub Pages;
- provides the clearest rollback to the old repository.

**Risks:**

- the domain cannot remain claimed by conflicting repository configuration;
- certificate issuance or renewal may take time after reassignment;
- incorrect ordering could temporarily serve a 404, certificate warning, or old content;
- Pages source/custom-domain settings require authenticated confirmation.

**Rollback complexity:** Low to moderate. Reassign the domain to the preserved old Pages source and restore captured web DNS only if it changed.

**DNS impact:** Expected to be minimal because the verified current web records already use GitHub Pages targets. Unit 4M must compare the live records with GitHub's current documentation and must not edit DNS without a confirmed need.

**Repository impact:** Custom-domain configuration moves to `dadastore-v2`; the old repository remains preserved.

**Recommendation:** **Recommended**, subject to all preflight and go/no-go requirements.

### Option B — Move production files into the existing live repository/source

**Description:** Copy the V3 production files into `saadmasoodalam/dadastore` and retain that repository's current custom-domain association.

**Advantages:**

- may avoid reassigning the custom domain;
- may leave existing Pages/DNS ownership untouched.

**Risks:**

- duplicates or divorces the verified V3 implementation from its source repository;
- mixes the new static site with a large legacy WordPress export;
- increases file-deletion, stale-asset, history, and rollback ambiguity;
- requires a new deployment verification because Unit 4K did not verify this repository layout;
- creates two repositories that can drift.

**Rollback complexity:** Moderate to high unless a dedicated branch/tag and exact repository snapshot are created and tested.

**DNS impact:** Likely none, but this benefit does not outweigh repository and verification risk.

**Repository impact:** Large and destructive-prone replacement inside the legacy production source.

**Recommendation:** **Not recommended.**

### Option C — Use a temporary subdomain before root-domain cutover

**Description:** Attach an approved temporary hostname such as a controlled preview subdomain to `dadastore-v2`, verify it, and later move the apex.

**Advantages:**

- provides a custom-hostname rehearsal;
- can test certificate and DNS administration before the apex change;
- leaves current production untouched during rehearsal.

**Risks:**

- introduces an additional DNS and certificate change;
- requires an agreed subdomain and owner approval;
- may add indexing/canonical confusion if publicly exposed;
- does not eliminate the final apex custom-domain transfer;
- the existing `github.io/dadastore-v2/` preview already provides a verified rehearsal environment.

**Rollback complexity:** Low for the temporary hostname, but the final cutover still needs the full rollback plan.

**DNS impact:** Adds a temporary subdomain record and later removes or retains it.

**Repository impact:** Adds temporary Pages/custom-domain state and may interrupt the existing preview behavior.

**Recommendation:** **Not recommended by default.** Use only if Unit 4M finds an organizational requirement that the existing GitHub preview cannot satisfy.

## 12. Recommended approach

**Recommend Option A: assign `dadastore.co` directly to `dadastore-v2` GitHub Pages through a controlled custom-domain transfer.**

Reason:

- the V3 site is already verified from its intended repository;
- current production already uses GitHub Pages;
- apex and `www` already point to GitHub Pages;
- direct reassignment avoids migrating the legacy WordPress export or duplicating production files;
- preserving the old repository and its captured configuration provides the cleanest rollback.

The execution must be treated as a repository custom-domain ownership transfer with DNS verification, not as an assumption that no DNS work is required. Unit 4M must confirm authenticated Pages settings and the complete DNS zone before recommending execution.

## 13. GitHub Pages custom-domain plan

This is the expected sequence, not authorization to execute it:

1. Confirm `dadastore-v2` Pages source branch/folder and record its current preview behavior.
2. Confirm the old repository's Pages source, custom-domain field, HTTPS state, and root `CNAME`.
3. Confirm domain-verification status for the GitHub account.
4. Capture the complete DNS zone, settings screenshots, old repository SHA, and rollback values.
5. Re-verify `dadastore-v2/main` and the public preview.
6. Confirm no third repository or organization claims `dadastore.co`.
7. During the authorized cutover window, release or remove the old repository's conflicting custom-domain association in the order GitHub accepts.
8. Add `dadastore.co` in the `dadastore-v2` Pages settings.
9. Allow GitHub to create/update the repository `CNAME` where applicable, or commit the required file through an explicitly authorized Git change if the publishing workflow requires it.
10. Configure or confirm the apex DNS records against GitHub's then-current official Pages documentation.
11. Configure or confirm `www` CNAME directly to `saadmasoodalam.github.io`, not to a repository path.
12. Wait for GitHub's DNS check and public DNS propagation.
13. Enable or confirm HTTPS only when the certificate is ready.
14. Verify apex/`www` canonical redirect behavior.
15. Execute the production verification checklist.
16. Keep the old site and exact rollback configuration intact for the approved observation window.

GitHub recommends adding the custom domain in repository settings before changing DNS. That ordering reduces takeover risk. The exact execution order for releasing an already attached domain must be confirmed in authenticated preflight because repository conflicts can affect what GitHub accepts.

Official references:

- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Verifying a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Securing a GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Troubleshooting custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## 14. DNS plan

### Apex: `dadastore.co`

GitHub Pages currently documents apex configuration using `ALIAS`, `ANAME`, or its published A records; AAAA records are optional when using GitHub's published IPv6 values.

Verified current state:

- four apex A records already match GitHub's currently documented IPv4 targets;
- no apex CNAME exists;
- no apex AAAA response was observed.

Planned handling:

- compare the captured records with GitHub's official values again at cutover time;
- retain correct apex records;
- change only a confirmed conflicting or obsolete web record;
- do not add optional AAAA records merely for the sake of this cutover;
- do not place a CNAME at the apex unless the authoritative provider and GitHub documentation explicitly support the chosen arrangement.

### `www`: `www.dadastore.co`

Verified current state:

- CNAME is `saadmasoodalam.github.io`;
- HTTPS redirects `www` to the apex.

Planned handling:

- retain the CNAME if it remains correct;
- verify it points directly to the user Pages hostname, without `/dadastore-v2`;
- confirm GitHub Pages produces the intended canonical redirect after reassignment.

### Conflict and safety controls

- remove or change only web records proven to conflict;
- never change authoritative NS records during this cutover;
- preserve all MX and TXT records;
- preserve SPF, DKIM, DMARC, CAA, and service-verification records;
- capture TTLs before any plan to reduce them;
- if a TTL reduction is authorized, perform it far enough in advance for the old TTL to expire;
- allow for recursive-resolver and browser caching;
- query multiple resolvers during production verification;
- avoid split-brain by preventing simultaneous conflicting Pages custom-domain claims;
- allow up to 24 hours for DNS propagation per GitHub's guidance, while using observed TTLs for operational expectations;
- allow certificate provisioning time and do not force HTTPS before GitHub reports the certificate ready.

No DNS edit is required or authorized by this document.

## 15. Email-safety boundary

The website cutover must not interrupt email delivery to `dadastore.co@gmail.com` or any domain-based mail service.

Protected records:

- MX records;
- SPF TXT records;
- DKIM TXT/CNAME records;
- DMARC TXT records;
- domain and service verification TXT records;
- any mail-provider CNAME records;
- authoritative nameservers.

The public website's contact target is a Gmail address and does not depend on domain-based delivery. Nevertheless, Google mail MX records are present at `dadastore.co`, so every mail-related and verification record must be exported, identified, left unchanged, and verified after cutover.

Any plan that requires replacing the complete DNS zone instead of changing only confirmed web records is **NO-GO**.

## 16. Risk register

| ID | Risk | Likelihood | Impact | Prevention | Detection | Rollback action |
| --- | --- | --- | --- | --- | --- | --- |
| RISK-01 | DNS misconfiguration | Low–Medium | High | Export zone; compare only web records with current GitHub docs; use two-person review | Authoritative/public DNS queries, HTTP failure, Pages DNS warning | Restore the exact captured apex/`www` records and TTLs |
| RISK-02 | Old custom domain still attached elsewhere | Medium | High | Record both Pages settings; search for competing assignments; plan release/reassignment order | GitHub rejects domain, serves wrong repository, or reports domain conflict | Remove new assignment if required and restore old repository mapping/CNAME |
| RISK-03 | HTTPS certificate delay | Medium | Medium–High | Keep old site recoverable; schedule a low-traffic window; wait for Pages certificate readiness | Browser certificate warning, HTTPS option unavailable, TLS probe failure | Restore old mapping; verify its certificate; do not enforce broken HTTPS |
| RISK-04 | `www`/apex mismatch | Low–Medium | Medium | Preserve verified apex A and `www` CNAME strategy; define canonical host | One hostname fails, loops, or serves different content | Restore captured records and old custom-domain mapping |
| RISK-05 | Mail-record disruption | Low if scoped; High if zone replaced | Critical | Prohibit MX/TXT/NS edits; export all mail and verification records | MX/TXT comparison, inbound/outbound mail test, provider alert | Restore affected mail records immediately; escalate to mail owner |
| RISK-06 | Cached old site | High temporarily | Low–Medium | Record TTL/cache headers; communicate propagation window; use multiple resolvers | Different networks return different site versions | Wait for cache expiry if records are correct; restore only if a real defect exists |
| RISK-07 | Asset paths fail at root domain | Low | High | Re-test root-relative and relative assets at production hostname; retain preview | Network 404/MIME errors, broken hero/logos/SVGs | Restore old mapping; correct only through a separate implementation unit |
| RISK-08 | Rollback delay | Medium | High | Name rollback owner; capture exact values/settings; rehearse steps; keep old repo intact | Recovery exceeds target or access is unavailable | Escalate to backup owner; restore captured DNS first, then old Pages assignment |

## 17. Rollback plan

Rollback is initiated if production has a blocking availability, TLS, routing, asset, navigation, contact, or mail defect that cannot be corrected safely within the approved window.

Practical sequence:

1. Declare rollback and record the time, defect, affected hostname, and decision owner.
2. Stop further cutover changes.
3. Restore the exact prior apex and `www` DNS records if they were changed.
4. Remove `dadastore.co` from `dadastore-v2` Pages settings if required to release the domain.
5. Restore the old repository's custom-domain mapping and root `CNAME` state from the captured configuration.
6. Confirm the old repository's Pages source and deployment.
7. Verify `https://dadastore.co/` returns the old site successfully.
8. Verify HTTPS has no certificate warning.
9. Verify `www` and apex behavior.
10. Compare MX, SPF, DKIM, DMARC, and verification records with the pre-cutover export.
11. Perform an owner-approved email delivery check.
12. Check multiple DNS resolvers and networks until recovery is observable.
13. Record elapsed recovery time, residual caches, evidence, and follow-up actions.

The old site and configuration must remain intact until the new site has passed production verification and the approved rollback window has closed.

Current rollback readiness is **planned but not operationally confirmed**. The old repository and site are presently available, but the DNS export, authenticated settings capture, access confirmation, named rollback owner, and recovery target must be completed in Unit 4M.

## 18. Production verification checklist

After an eventual authorized cutover:

- [ ] `https://dadastore.co/` returns `200`.
- [ ] `www.dadastore.co` behaves according to the selected canonical redirect.
- [ ] HTTPS is valid on both hostnames.
- [ ] No certificate warning is present.
- [ ] The V3 hero and current header logo are visible.
- [ ] CSS, JavaScript, hero image, platform logos, Work SVGs, and favicons load.
- [ ] Desktop navigation and active states work.
- [ ] Reviews navigation and section work.
- [ ] Mobile menu opens, closes, and navigates correctly.
- [ ] Back-to-top behavior works.
- [ ] Every contact link uses and opens `mailto:dadastore.co@gmail.com`.
- [ ] Browser console errors are zero.
- [ ] Failed network requests are zero.
- [ ] No mixed-content or MIME failures occur.
- [ ] No horizontal overflow occurs at 375px, 390px, 768px, 1024px, or 1440px.
- [ ] No request uses old `wp-content`, `wp-includes`, `wp-admin`, or `wp-json` paths.
- [ ] Apex and `www` resolve consistently from multiple public resolvers.
- [ ] MX, SPF, DKIM, DMARC, and verification records match the pre-cutover export.
- [ ] Owner-approved email verification passes.
- [ ] The old `github.io/dadastore-v2/` preview remains available or its changed behavior is intentional and recorded.
- [ ] The old site remains recoverable for the approved rollback window.

## 19. Go/no-go gate

### GO only when

- every pre-cutover checklist item passes;
- the exact rollback sequence and values are complete;
- the full DNS backup exists;
- the old site remains available and recoverable;
- the current V3 preview passes fresh verification;
- both repository Pages settings are recorded;
- GitHub repository admin access is confirmed;
- authoritative DNS access is confirmed;
- the old custom-domain association and transfer order are resolved;
- mail and verification records are documented and protected;
- the owner approves the window, production target, canonical hostname, and rollback threshold.

### NO-GO when

- any DNS uncertainty remains;
- old custom-domain ownership is unresolved;
- rollback records are missing or untested;
- mail records are not fully backed up;
- repository admin or DNS access is unavailable;
- the preview has a new defect;
- the old production state cannot be restored;
- no rollback owner is available;
- Pages source/custom-domain/HTTPS settings have not been captured;
- the proposed action would replace the full DNS zone or touch mail records;
- an implementation change is required but has not passed a separate unit.

Current Unit 4L gate result:

**NO-GO FOR EXECUTION — planning is complete, but authenticated preflight evidence and ownership confirmations remain outstanding.**

## 20. Required access and ownership

Before execution, assign and verify:

- Project Owner with final go/no-go authority;
- GitHub administrator for `saadmasoodalam/dadastore-v2`;
- GitHub administrator for `saadmasoodalam/dadastore`;
- authoritative DNS account owner/operator;
- rollback owner;
- backup rollback operator;
- email/DNS verification owner;
- production QA verifier.

Required access:

- admin access to both repository Pages settings;
- write access to the correct repository if a `CNAME` commit is required;
- access to the authoritative DNS zone;
- access to DNS export/history or screenshots;
- access to the old site's backup and recovery source;
- ability to test apex, `www`, TLS, public assets, and email independently.

## 21. Files changed

Added:

- `docs/UNIT_4L_PRODUCTION_CUTOVER_PLANNING_AND_RISK_CHECKLIST.md`

No implementation file, asset, GitHub setting, Pages setting, DNS record, custom-domain assignment, live repository, or production site was changed.

## 22. Verification record

- Current branch: `main`
- Latest commit before Unit 4L documentation: `86c96a3 Verify GitHub Pages V3 preview`
- Unit 4K result: **PREVIEW VERIFIED**
- New-site repository: `saadmasoodalam/dadastore-v2`
- New-site preview: `https://saadmasoodalam.github.io/dadastore-v2/`
- New-site production-domain `CNAME`: absent
- Current production server: GitHub Pages
- Current production source evidence: `saadmasoodalam/dadastore` with `CNAME` content `dadastore.co`
- Current production content: static WordPress-derived export
- Apex HTTPS: active; `200`
- `www` HTTPS: active; `301` to apex
- Apex A records: four current GitHub Pages IPv4 targets
- Apex AAAA: no answer observed
- `www` CNAME: `saadmasoodalam.github.io`
- Authoritative nameservers: `dns1.registrar-servers.com`, `dns2.registrar-servers.com`
- Google mail MX records: present
- DNS provider/account access: not confirmed
- Pages source/custom-domain authenticated settings: not confirmed
- Recommended option: Option A
- Rollback readiness: planned, not yet operationally confirmed
- Implementation files changed: none
- Settings or production state changed: none
- Final Git checks are reported in the Unit 4L completion response.

## 23. Recommended next unit

**Unit 4M — Production Cutover Preflight**

Goal: collect authenticated repository, Pages, DNS, access, backup, TTL, mail-record, rollback-owner, and fresh preview evidence; resolve every Unit 4L unknown; and issue a final execution-specific go/no-go decision without performing the production cutover.

## 24. Explicitly not next

- actual DNS edits;
- custom-domain assignment or reassignment;
- live-site removal;
- repository migration;
- copying V3 files into the old repository;
- deleting or archiving the old site;
- production deployment;
- changing GitHub Pages source or HTTPS settings;
- changing, removing, or replacing MX/TXT/NS records;
- implementation redesign, analytics, or contact-backend work;
- committing or pushing Unit 4L without separate authorization.
