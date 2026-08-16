# Unit 6U — Production UTF-8 and Pages Health Restore

## 1. Title

Unit 6U — Correct Production Documentation Encoding and Restore GitHub Pages Deployment Health.

## 2. Status

Encoding repair, validation, production push, GitHub Pages deployment, and live verification completed successfully. This record contains the authoritative repair commit, workflow run, and public-surface results.

## 3. Purpose

Repair only the two confirmed invalid UTF-8 production documents, add a reusable fail-closed UTF-8 test, restore GitHub Pages build health without publishing an article, and preserve the complete 61-article production state.

## 4. Unit 6T deployment failure

Unit 6T publication commit `b54b0b5eac4b7fec64e478412141536169e5be5a` passed article quality and local production tests but GitHub Pages workflow run `31918910151` failed before deployment. Rollback commit `afcfbe0960118368cfb2bb708200ec3e69f81818` restored the pre-canary tree exactly. Article 62 was never live, and both August 16 real quotas remain consumed.

## 5. Invalid files

- `docs/UNIT_6M1_LIBRARY_GROWTH_CONTRACTS.md`
- `docs/UNIT_6M2_PRODUCTION_GROWTH_BASELINE_REVERIFICATION.md`

## 6. Encoding diagnosis

Both files were byte-compatible Windows-1252/ASCII text without a BOM and with CRLF line endings. Unit 6M1 contained two bytes invalid under strict UTF-8; Unit 6M2 contained thirteen. Corruption was isolated to punctuation/symbol encoding. Neither file contained an encoded U+FFFD replacement character.

## 7. Byte-level corrections

- Unit 6M1 offset 11: Windows-1252 `0x97` mapped faithfully to Unicode em dash U+2014.
- Unit 6M1 offset 1281: Windows-1252 `0xD7` mapped faithfully to multiplication sign U+00D7.
- Unit 6M2 offsets 11, 82, 6002, 6058, 6110, 6159, 6211, 6270, 6353, 6421, 6477, and 7984: Windows-1252 `0x97` mapped faithfully to Unicode em dash U+2014.
- Unit 6M2 offset 3174: Windows-1252 `0xD7` mapped faithfully to multiplication sign U+00D7.

The files were then encoded as UTF-8 without BOM. CRLF line structure was retained.

## 8. Semantic preservation

The Windows-1252-decoded source text and strict-UTF-8-decoded result are character-for-character equal after normalizing Git checkout line endings. Headings, wording, code blocks, links, commit references, numeric values, line count, and line-ending structure are unchanged. Semantic documentation changes: 0.

## 9. UTF-8 validation

`scripts/test-utf8-text-files.mjs` recursively scans Pages-relevant text/config extensions and CNAME-like text files, decodes with strict UTF-8, and fails on invalid sequences or U+FFFD replacement characters. The repaired tree reports 243 scanned text files, zero invalid UTF-8 files, and zero replacement-character files.

## 10. Pages workflow verification

The repair was validated locally with the strict UTF-8 scanner and the complete production regression suite before push. GitHub Pages workflow run `31922572531`, triggered by repair commit `1f6c02464d9fe66f9fa56af9aff25480bcb108f9`, completed successfully. Its Jekyll build, artifact upload, build-status report, and deployment jobs all passed.

## 11. Production state verification

- Published articles: 61
- Article 62 published: false
- Public drafts: 0
- Sitemap entries: 63
- Feed entries: 61
- Featured eligibility: 61
- Article, category, Related Articles, sitemap/feed, SVG, and link-encoding regressions: 0

## 12. Files changed

- `docs/UNIT_6M1_LIBRARY_GROWTH_CONTRACTS.md` — encoding-only transcode
- `docs/UNIT_6M2_PRODUCTION_GROWTH_BASELINE_REVERIFICATION.md` — encoding-only transcode
- `scripts/test-utf8-text-files.mjs` — strict UTF-8 guardrail
- `docs/UNIT_6U_PRODUCTION_UTF8_AND_PAGES_HEALTH_RESTORE.md` — Unit 6U record

## 13. Files intentionally unchanged

All article pages, covers, `blog/data/posts.json`, Insights, categories, Related Articles, featured rotation, sitemap, feed, CNAME, workflows, domain settings, and `blog/data/article-plan.json` remain unchanged.

## 14. Commit

Repair commit: `1f6c02464d9fe66f9fa56af9aff25480bcb108f9` (`Fix production documentation UTF-8 encoding`).

## 15. Live checks

After successful Pages deployment, the homepage, Insights, representative published article, category directory, sitemap, and feed each returned HTTP 200. The live sitemap contained 63 URL entries and the live feed contained 61 item entries. Article 62 was absent from Insights, sitemap, and feed, and its rolled-back direct route returned HTTP 404.

## 16. Remaining blockers

Encoding and Pages deployment blockers are resolved. No canary may be retried on the consumed August 16 quota day; that quota boundary is unchanged and is not a Pages-health blocker.

## 17. Final verdict

PAGES DEPLOYMENT HEALTH RESTORED

## 18. Recommended next unit

Wait for a new PKT quota date and obtain separate Project Owner authorization before any fresh Article 62 canary. Do not reuse Unit 6T authorization.

## 19. Suggested commit message

`Fix production documentation UTF-8 encoding`
