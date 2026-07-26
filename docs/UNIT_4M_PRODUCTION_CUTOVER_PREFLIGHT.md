# Unit 4M — Production Cutover Preflight

## 1. Title

Unit 4M — Production Cutover Preflight

## 2. Status

Unit 4M is an authenticated inspection and planning-only preflight.

The available GitHub connection was used read-only. Public DNS, HTTPS, repository, and browser evidence was collected without changing GitHub Pages settings, custom-domain assignments, DNS, `CNAME` files, implementation, assets, either repository, or the production site.

Final status:

**PREFLIGHT BLOCKED**

## 3. Purpose

The purpose is to resolve, or precisely identify as unresolved, every ownership, access, DNS, Pages, mail-safety, backup, rollback, timing, and preview requirement needed before transferring `dadastore.co` from `saadmasoodalam/dadastore` to `saadmasoodalam/dadastore-v2`.

Core law:

- Preflight is not cutover.
- Repository admin metadata is not proof of DNS-account access.
- Public routing evidence is not a substitute for authenticated Pages settings.
- A partial public DNS inventory is not a complete zone export.
- No unresolved blocking requirement may be inferred or guessed.

## 4. Authority reviewed

The following authority and evidence were reviewed:

- `GENERIC_CODING_PROJECT_WORKFLOW_RULES.md`
- `docs/UNIT_4K_GITHUB_PAGES_PREVIEW_VERIFICATION.md`
- `docs/UNIT_4L_PRODUCTION_CUTOVER_PLANNING_AND_RISK_CHECKLIST.md`
- current local `main`
- current `origin/main`
- authenticated GitHub App repository metadata
- authenticated GitHub App installation repository inventory
- both repositories' default-branch metadata and recent commits
- root `CNAME` checks across every repository exposed by the installed GitHub App
- current public GitHub Pages preview
- current public `dadastore.co` and `www.dadastore.co` HTTPS behavior
- current public apex, `www`, mail, verification, and nameserver DNS answers
- current official Namecheap documentation identifying the observed nameservers as Namecheap BasicDNS
- fresh headless Microsoft Edge checks at 1440×900 and 390×844

Unit 4K was read completely. Its recorded result is:

**PREVIEW VERIFIED**

Unit 4L was read completely. It is committed and pushed:

- commit: `c51ecffd5633751f95a7c7c8933967b5feb719a1`
- subject: `Add production cutover plan and risk checklist`
- local `main` versus `origin/main`: `0 / 0`

## 5. Branch and repository state

### Local `dadastore-v2`

- branch: `main`
- latest commit: `c51ecffd5633751f95a7c7c8933967b5feb719a1`
- latest subject: `Add production cutover plan and risk checklist`
- local/remote synchronization: `0 / 0`
- tracked unstaged changes before Unit 4M: none
- staged changes before Unit 4M: none
- unresolved conflicts: none
- existing untracked baseline: `Microsoft/`, `_local-reference/`, and `incoming-brand/`
- remote: `https://github.com/saadmasoodalam/dadastore-v2.git`

### Authenticated GitHub repository metadata

| Repository | Visibility | Default branch | Archived | Authenticated permission |
| --- | --- | --- | --- | --- |
| `saadmasoodalam/dadastore` | Public | `main` | No | `admin: true` |
| `saadmasoodalam/dadastore-v2` | Public | `main` | No | `admin: true` |

The GitHub App is installed on the user account `saadmasoodalam` and exposes both repositories. Repository admin access is therefore confirmed through the authenticated connector.

The connector does not expose the GitHub Pages settings endpoint. The local GitHub CLI is not installed, so the authenticated Pages API could not be used as a fallback. Per the blocker rule, affected Pages checks stop at that boundary and remain unresolved.

## 6. Legacy repository Pages state

Repository:

`saadmasoodalam/dadastore`

Verified:

- default branch: `main`
- latest default-branch commit: `c18ed92c5a28d215007f9e86941518632019b40f`
- latest subject: `favicon`
- latest commit time: 2026-07-02 01:55:06 UTC
- repository is public, intact, unarchived, and accessible
- authenticated connector permission: admin
- root `CNAME` exists on `main`
- exact `CNAME` value: `dadastore.co`
- `CNAME` blob SHA: `04a5236c3f0d983dfbdc5b7861d9fc9c34fd3a6c`
- `https://dadastore.co/` returns `200 OK`
- response server identifies as `GitHub.com`
- `https://www.dadastore.co/` returns `301` to `https://dadastore.co/`
- the served content is the legacy static WordPress-derived export
- the repository remains recoverable in the sense that it is present, unarchived, and unchanged

Unresolved:

- authenticated Pages source branch/folder;
- authenticated Pages deployment status and latest deployment job;
- authenticated Pages custom-domain field;
- authenticated HTTPS-enforcement setting;
- whether a Pages deployment currently maps exactly to latest commit `c18ed92`;
- authenticated screenshot/export of the Pages configuration.

Public reachability proves the production Pages site is active. It does not replace the missing authenticated Pages settings record.

## 7. New repository Pages state

Repository:

`saadmasoodalam/dadastore-v2`

Verified:

- default branch: `main`
- latest local and remote commit: `c51ecffd5633751f95a7c7c8933967b5feb719a1`
- local/remote synchronization: `0 / 0`
- repository is public, intact, unarchived, and accessible
- authenticated connector permission: admin
- root `CNAME` does not exist on the default branch
- public preview: `https://saadmasoodalam.github.io/dadastore-v2/`
- current preview response: `200 OK`
- the preview remains on the `/dadastore-v2/` path and does not redirect to `dadastore.co`
- current deployed implementation contains the V3 hero, Reviews section, and navigation hooks
- the current deployed implementation matches the local implementation content inspected in this preflight

Unresolved:

- authenticated Pages source branch/folder;
- authenticated Pages deployment status and latest deployment job;
- exact latest deployed commit SHA;
- authenticated Pages custom-domain field;
- authenticated HTTPS-enforcement setting.

The absence of a root `CNAME` and continued subpath preview are strong repository/public evidence that no production custom-domain file is present. They do not prove that the authenticated Pages custom-domain field is empty.

## 8. Custom-domain ownership state

### Confirmed evidence

- The legacy repository's default branch contains `CNAME` with exact value `dadastore.co`.
- The live apex serves the legacy site through GitHub Pages.
- `www.dadastore.co` is not represented as a second repository `CNAME`; public DNS maps it to `saadmasoodalam.github.io`, and GitHub redirects it to the apex.
- `dadastore-v2` has no root `CNAME`.
- The GitHub App installation exposes five repositories:
  - `saadmasoodalam/UniversalStateEngine`
  - `saadmasoodalam/saadmasoodalam`
  - `saadmasoodalam/dadastore`
  - `saadmasoodalam/dadastore-v2`
  - `saadmasoodalam/echoprose`
- Root `CNAME` inspection on all five default branches found a `CNAME` only in `saadmasoodalam/dadastore`.

### Unresolved ownership checks

- whether authenticated Pages settings attach `dadastore.co` only to the legacy repository;
- whether another branch, repository outside this App installation, organization, or Actions-based Pages configuration references the domain;
- whether GitHub account-level domain verification exists;
- whether `dadastore.co` is verified to the user or any organization;
- whether GitHub currently reports a domain conflict;
- the exact release/reassignment behavior GitHub will require;
- whether removal from the old repository must occur before GitHub accepts the domain on `dadastore-v2`.

Public DNS query:

`_github-pages-challenge-saadmasoodalam.dadastore.co TXT`

Result:

DNS name does not exist.

This confirms that the expected user-specific public GitHub verification TXT record is not present at that name. It does not prove the absence of every possible account or organization verification state. Authenticated domain verification remains unresolved and blocking.

## 9. DNS inventory

Inspection time: 2026-07-26.

### Publicly confirmed records

| Name | Type | Value | Observed TTL |
| --- | --- | --- | --- |
| `dadastore.co` | A | `185.199.108.153` | 1799 seconds |
| `dadastore.co` | A | `185.199.109.153` | 1799 seconds |
| `dadastore.co` | A | `185.199.110.153` | 1799 seconds |
| `dadastore.co` | A | `185.199.111.153` | 1799 seconds |
| `dadastore.co` | AAAA | No AAAA answer observed | Negative response used SOA TTL 3601 |
| `www.dadastore.co` | CNAME | `saadmasoodalam.github.io` | 1799 seconds |
| `dadastore.co` | MX 1 | `aspmx.l.google.com` | 1800 seconds |
| `dadastore.co` | MX 5 | `alt1.aspmx.l.google.com` | 1800 seconds |
| `dadastore.co` | MX 5 | `alt2.aspmx.l.google.com` | 1800 seconds |
| `dadastore.co` | MX 10 | `aspmx2.googlemail.com` | 1800 seconds |
| `dadastore.co` | MX 10 | `aspmx3.googlemail.com` | 1800 seconds |
| `dadastore.co` | NS | `dns1.registrar-servers.com` | 1800 seconds |
| `dadastore.co` | NS | `dns2.registrar-servers.com` | 1800 seconds |
| `dadastore.co` | SOA | primary `dns1.registrar-servers.com`; serial `1782944179` | 3601 seconds |

### Public TXT-related results

| Check | Result | Classification |
| --- | --- | --- |
| Apex TXT / SPF | No apex TXT answer observed | SPF absent publicly |
| `_dmarc.dadastore.co` TXT | DNS name does not exist | DMARC absent publicly |
| `_github-pages-challenge-saadmasoodalam.dadastore.co` TXT | DNS name does not exist | User-specific GitHub verification TXT absent publicly |
| `google._domainkey.dadastore.co` TXT | DNS name does not exist | This selector absent; overall DKIM unresolved |
| `default._domainkey.dadastore.co` TXT | DNS name does not exist | This selector absent; overall DKIM unresolved |

DKIM cannot be declared absent from two selector checks because selectors are not enumerable through normal public DNS. Full-zone access is required.

### DNS provider and registrar

- DNS provider: **Namecheap BasicDNS confirmed by authoritative nameserver identity**. Namecheap's official documentation identifies `dns1.registrar-servers.com` and `dns2.registrar-servers.com` as its BasicDNS nameservers.
- DNS account access: **not confirmed**.
- Registrar: **unresolved**. Public nameserver identity establishes the DNS provider, not authenticated registrar ownership. The official `.CO` RDAP endpoint returned no domain object, and no authenticated registrar account was available.
- Registrar access: **not confirmed**.

### Missing authenticated zone evidence

The following still require an authenticated Namecheap DNS-zone export or screenshots:

- all current records and their configured TTLs;
- any DKIM selector records;
- any non-apex verification TXT records;
- any CAA records;
- any redirects, URL forwarding, parking, dynamic DNS, or service records;
- record history or a restorable zone snapshot;
- proof that the account can edit and restore the records.

The public inventory is useful evidence but is not a complete DNS backup.

## 10. Email-safety verification

The website contact email and domain mail infrastructure are separate:

- website contact target: `dadastore.co@gmail.com`
- domain-based mail infrastructure: Google mail MX records at `dadastore.co`

The Gmail contact address does not depend on `dadastore.co` MX records. The existing domain mail infrastructure may serve other addresses and must remain protected.

| Mail-related item | Classification | Evidence |
| --- | --- | --- |
| MX | Present | Five Google mail MX records publicly resolved |
| SPF | Absent publicly | No apex TXT answer |
| DKIM | Unresolved | Common queried selectors absent; complete selectors require zone access |
| DMARC | Absent publicly | `_dmarc.dadastore.co` does not exist |
| GitHub verification TXT | Absent at the user-specific name | Challenge name does not exist |
| Other verification TXT | Unresolved | Complete zone unavailable |

Records that must remain untouched:

- all five MX records;
- any DKIM TXT or CNAME records discovered in the full zone;
- any SPF record discovered during authenticated inspection;
- any DMARC record added or discovered before cutover;
- every verification TXT record;
- authoritative NS records;
- any mail-provider CNAME or service records.

The absence of a public SPF or DMARC record is not permission to add, remove, or redesign email authentication during the website cutover.

Mail-record protection status:

**PARTIALLY DOCUMENTED / BLOCKING** — MX is documented, but the complete zone and DKIM/verification inventory are unresolved.

## 11. Access and ownership verification

| Access requirement | Status | Evidence / boundary |
| --- | --- | --- |
| GitHub admin access to `dadastore` | Confirmed | Authenticated connector reports `admin: true` |
| GitHub admin access to `dadastore-v2` | Confirmed | Authenticated connector reports `admin: true` |
| Ability to inspect/edit legacy Pages settings | Not confirmed | Connector lacks Pages endpoint; `gh` unavailable |
| Ability to inspect/edit new Pages settings | Not confirmed | Connector lacks Pages endpoint; `gh` unavailable |
| Ability to remove/add custom domains | Not confirmed | Admin metadata exists, but Pages operation access was not exposed or tested |
| DNS provider identity | Confirmed | Namecheap BasicDNS nameservers |
| DNS provider login access | Not confirmed | No authenticated DNS connection/account evidence |
| Registrar identity | Unresolved | No authoritative registration object obtained |
| Registrar login access | Not confirmed | No authenticated registrar connection/account evidence |
| GitHub 2FA/recovery access | Not confirmed | Not exposed and not tested |
| DNS/registrar 2FA/recovery access | Not confirmed | Not exposed and not tested |
| Ability to restore previous DNS/settings | Not confirmed | No full zone export, authenticated settings capture, or restore test |

Repository admin access is a pass. Pages-setting access, DNS access, registrar access, recovery access, and restore capability remain blocking.

## 12. Backup and rollback readiness

| Rollback requirement | Status | Evidence / missing item |
| --- | --- | --- |
| Legacy repository intact | Pass | Public, unarchived, accessible; latest commit recorded |
| Current `CNAME` content recorded | Pass | `dadastore.co`; blob SHA recorded |
| Current legacy Pages source recorded | Unresolved | Authenticated Pages settings unavailable |
| Current new Pages source recorded | Unresolved | Authenticated Pages settings unavailable |
| Current public web DNS values recorded | Pass | Apex A, `www` CNAME, NS, SOA, MX, and TTL observations recorded |
| Complete DNS zone exported | Unresolved | DNS login unavailable |
| Pages/custom-domain screenshots captured | Unresolved | Pages settings unavailable |
| Current production site reachable | Pass | Apex `200`; `www` redirects correctly |
| Old live-site backup confirmed | Unresolved | Repository presence is not a tested backup |
| Rollback sequence written | Pass as plan | Unit 4L provides the sequence |
| Rollback sequence actionable | Unresolved | Missing Pages/DNS access, exact settings, and full zone backup |
| Rollback owner identified | Unresolved | No named owner supplied |
| Backup rollback operator identified | Unresolved | No named backup operator supplied |
| Rollback decision window approved | Unresolved | No owner-approved window supplied |

Current rollback readiness:

**NOT ACTIONABLE**

The legacy repository and production site are intact, but recovery cannot be declared operational until authenticated configuration captures, complete DNS export, access proof, backup proof, owner assignment, and timing approval exist.

## 13. TTL and timing assessment

Publicly observed web-record TTLs are approximately 1800 seconds:

- apex A: 1799 seconds at query time;
- `www` CNAME: 1799 seconds at query time;
- MX and NS: 1800 seconds;
- SOA/negative response: 3601 seconds.

Assessment:

- The current apex and `www` TTLs are already approximately 30 minutes.
- A TTL reduction is not evidently necessary for the expected custom-domain transfer because the current web records already point to GitHub Pages.
- This is not a final approval to leave TTLs unchanged; configured zone values and the exact cutover action must first be verified in the authenticated DNS account.
- Do not change TTLs in Unit 4M.

Recommended timing:

- select a Project Owner-approved low-traffic window;
- have the GitHub, DNS, rollback, and QA owners present;
- allow at least two hours of active monitoring after reassignment;
- preserve rollback readiness for at least 24–48 hours;
- account for approximately 30-minute public record TTLs and longer recursive/browser caches;
- account separately for GitHub certificate issuance and domain-verification timing.

Cutover window: unresolved pending owner selection.

Rollback observation window: recommended at 24–48 hours, but unresolved until owner approval.

## 14. Preview reconfirmation

Preview:

`https://saadmasoodalam.github.io/dadastore-v2/`

Fresh Microsoft Edge DevTools Protocol checks were run at:

- 1440×900
- 390×844

Results at both viewports:

- page load event: pass;
- document ready state: `complete`;
- page title: `DaDaStore | Commerce Growth Systems for Performance Marketing`;
- V3 hero structure: present;
- `Turn Data Into` hero line: present in deployed HTML;
- Services section: present;
- Reviews section: present;
- navigation toggle hook: present;
- images loaded: 14 of 14;
- image failures: 0;
- mailto count: 8;
- unique mailto target: `mailto:dadastore.co@gmail.com`;
- horizontal overflow: 0px;
- HTTP responses at 400 or above: 0;
- failed network requests: 0;
- runtime exceptions: 0;
- console/log errors: 0.

Repository synchronization:

- local `main`: `c51ecffd5633751f95a7c7c8933967b5feb719a1`
- `origin/main`: synchronized
- ahead/behind: `0 / 0`

Preview reconfirmation result:

**PASS**

The exact Pages deployment SHA remains unresolved because authenticated Pages/deployment settings were unavailable. The deployed implementation is healthy and matches the current implementation state; the latest two commits are documentation-only.

## 15. Preflight decision table

| Requirement | Status | Evidence | Blocking | Required action |
| --- | --- | --- | --- | --- |
| Unit 4L committed and pushed | PASS | `c51ecff`; local/remote `0 / 0` | No | None |
| Legacy default branch known | PASS | Authenticated metadata: `main` | No | None |
| Legacy Pages source known | UNRESOLVED | Authenticated Pages endpoint unavailable | Yes | Capture source branch/folder in Pages settings |
| Legacy Pages deployment healthy | PASS for public availability | `dadastore.co` returns `200` from GitHub Pages | No | Capture authenticated deployment job/status before execution |
| New default branch known | PASS | Authenticated metadata: `main` | No | None |
| New Pages source known | UNRESOLVED | Authenticated Pages endpoint unavailable | Yes | Capture source branch/folder in Pages settings |
| New preview deployment healthy | PASS | Fresh browser/HTTP verification passes | No | Recheck immediately before execution |
| Old custom domain confirmed | PASS | Legacy `CNAME=dadastore.co`; live legacy Pages site | No | Capture authenticated field as rollback evidence |
| New custom domain absent | UNRESOLVED | No new `CNAME` and no redirect, but Pages field unavailable | Yes | Confirm empty custom-domain field in authenticated Pages settings |
| `www` handling known | PASS | CNAME to `saadmasoodalam.github.io`; HTTPS `301` to apex | No | Preserve and reverify |
| Domain verification known | UNRESOLVED | User challenge TXT absent; authenticated state unavailable | Yes | Inspect GitHub account Pages domain verification |
| Other domain conflict excluded | UNRESOLVED | Only old repo has root `CNAME` among five installed repos; Pages settings unavailable | Yes | Check all Pages custom-domain assignments and GitHub conflict state |
| DNS provider known | PASS | Namecheap BasicDNS authoritative nameservers | No | None |
| Registrar known | UNRESOLVED | Registry RDAP returned no object; no authenticated account | Yes | Confirm registrar from account/ICANN lookup evidence |
| DNS access confirmed | UNRESOLVED | No authenticated DNS connection | Yes | Log in and capture read-only account/zone evidence |
| Registrar access confirmed | UNRESOLVED | No authenticated registrar connection | Yes | Confirm login and recovery access |
| DNS records exported | UNRESOLVED | Public inventory only; no complete zone export | Yes | Export/screenshot the entire zone and TTLs |
| Mail records documented | UNRESOLVED | MX documented; DKIM and other verification records unresolved | Yes | Capture full zone and classify every mail/verification record |
| Mail records protected | UNRESOLVED | Protection rule defined; full record set unknown | Yes | Approve a web-record-only change list |
| Repository admin access confirmed | PASS | Authenticated connector reports admin on both repos | No | None |
| Pages edit capability confirmed | UNRESOLVED | Admin metadata present, operation surface not exposed | Yes | Confirm Pages UI/API access without changing settings |
| Old repository intact | PASS | Public, unarchived, accessible, latest SHA recorded | No | Preserve unchanged |
| Old site backup confirmed | UNRESOLVED | Repository is not a tested backup | Yes | Identify backup and verify restore source |
| Pages settings captured | UNRESOLVED | Authenticated Pages access unavailable | Yes | Capture screenshots/notes for both repos |
| Rollback owner identified | UNRESOLVED | No named owner supplied | Yes | Assign primary and backup rollback operators |
| Rollback window defined | UNRESOLVED | 24–48 hours recommended, not owner-approved | Yes | Approve window and rollback threshold |
| Rollback actionable | UNRESOLVED | Missing access/configuration/owner evidence | Yes | Complete all rollback prerequisites |
| Preview reconfirmed | PASS | Edge checks at 1440×900 and 390×844 pass | No | Recheck immediately before cutover |

## 16. Blocking items

Exact blockers:

1. Authenticated GitHub Pages settings for both repositories are unavailable, so source branch/folder, custom-domain fields, HTTPS settings, deployment status, and transfer conflict behavior are not fully recorded.
2. GitHub account-level domain verification is unresolved; the expected public user challenge TXT is absent.
3. The new repository's empty custom-domain setting is not authenticated; only `CNAME` absence and preview behavior are confirmed.
4. No authenticated DNS-provider access is confirmed.
5. Registrar identity and authenticated registrar access are unresolved.
6. The complete DNS zone, configured TTLs, CAA, DKIM, verification, redirect, and parking records have not been exported.
7. Mail protection is incomplete because DKIM and other verification records are unresolved.
8. The old site's backup and restore source have not been confirmed or tested.
9. A primary rollback owner and backup operator have not been identified.
10. The rollback decision window and production cutover window have not been approved.
11. Restore capability for the prior Pages and DNS configuration has not been demonstrated.

No execution should be recommended while any blocker remains.

## 17. Final verdict

**PREFLIGHT BLOCKED**

The repositories and public preview are healthy, authenticated repository admin permission is present, production remains reachable, and the public web DNS inventory is consistent with GitHub Pages. The strict preflight nevertheless fails because authenticated Pages ownership/configuration, DNS and registrar access, complete zone/mail evidence, backup proof, and actionable rollback ownership are unresolved.

## 18. Recommended next unit

**Unit 4M-Fix — Authenticated Pages, DNS Access, and Rollback Ownership Confirmation**

Goal: manually capture authenticated Pages settings for both repositories, confirm account domain verification and conflict state, export the complete Namecheap DNS zone, confirm registrar/DNS access and recovery, identify the backup and rollback owners, approve the change/rollback windows, and convert every blocking Unit 4M row to PASS without changing any setting.

The manual evidence list is:

- screenshots of both repositories' Pages source, custom domain, HTTPS, and deployment state;
- screenshot/export of GitHub account domain verification;
- full DNS-zone export with values and configured TTLs;
- DNS-provider and registrar account identity/access confirmation;
- 2FA/recovery availability confirmation;
- backup location and restore-source evidence;
- named cutover, rollback, backup, email-verification, and QA owners;
- approved cutover window, rollback threshold, and observation period.

Unit 4N must not begin until Unit 4M-Fix records all of these as PASS.

## 19. Files changed

Added:

- `docs/UNIT_4M_PRODUCTION_CUTOVER_PREFLIGHT.md`

No implementation file, asset, DNS record, Pages setting, repository setting, custom-domain assignment, `CNAME` file, legacy repository file, or production site was changed.

## 20. Verification record

- Branch: `main`
- Latest commit before Unit 4M documentation: `c51ecff Add production cutover plan and risk checklist`
- Unit 4L committed and pushed: yes
- Local/remote synchronization: `0 / 0`
- Legacy repository admin permission: confirmed
- New repository admin permission: confirmed
- Legacy default branch: `main`
- New default branch: `main`
- Legacy latest commit: `c18ed92 favicon`
- New latest commit: `c51ecff Add production cutover plan and risk checklist`
- Legacy root `CNAME`: `dadastore.co`
- New root `CNAME`: absent
- Other installed-repository root `CNAME` conflicts: none found
- Authenticated Pages settings: unavailable
- Production apex: HTTPS `200`
- Production `www`: HTTPS `301` to apex
- DNS provider: Namecheap BasicDNS
- Registrar: unresolved
- DNS login access: not confirmed
- Apex A records: four GitHub Pages addresses, TTL approximately 1800
- Apex AAAA: absent publicly
- `www` CNAME: `saadmasoodalam.github.io`, TTL approximately 1800
- MX: present; five Google mail records
- SPF: absent publicly
- DKIM: unresolved
- DMARC: absent publicly
- User GitHub verification TXT: absent publicly
- Other verification records: unresolved
- Complete DNS export: unavailable
- Rollback readiness: not actionable
- Preview HTTP/load: pass
- Preview V3 content: pass
- Preview images: 14 of 14
- Preview mailto links: 8 of 8 correct
- Preview viewports: 1440×900 and 390×844
- Preview horizontal overflow: 0px
- Preview console errors: 0
- Preview runtime exceptions: 0
- Preview failed requests: 0
- Preview HTTP errors: 0
- Settings changed: none
- Production state changed: none
- Final Git checks are reported in the completion response.

## 21. Explicitly not next

- DNS edits;
- TTL changes;
- removing the old custom domain;
- adding the domain to `dadastore-v2`;
- deleting or editing either `CNAME`;
- changing Pages source or HTTPS settings;
- disabling the old site;
- production cutover;
- repository migration or deletion;
- archiving the legacy repository;
- altering MX, SPF, DKIM, DMARC, NS, CAA, or verification records;
- beginning Unit 4N before every blocking Unit 4M check passes;
- committing or pushing Unit 4M without separate authorization.
