# Build Log

## 2026-08-30 — Recover missing brand logos from archive scrapes
- Task: find real logo files for 8 brands (intellve, kunuts, monarch, rapoo, rapoo-middle-east, furnishing-home, secure-my-shop, icici) whose `logo` field was empty in `lib/brands.ts`.
- Inspected actual image content (not filenames) in `client-archives/<folder>/images/` for each brand; found a correctly-branded wordmark PNG for all 8 (visually verified by compositing onto a dark background, since files were transparent-bg PNGs with no "logo" in the name).
- Copied each into `public/images/brands/<slug>/logo.png` and set `"logo": "/images/brands/<slug>/logo.png"` in `lib/brands.ts` for all 8 entries.
- Ran `node scripts/build-brand-media.js` — succeeded, regenerated `lib/brandMedia.ts` (pre-existing duplicate/no-dims warnings for unrelated files, no new errors).
- Ran `npx tsc --noEmit -p tsconfig.json` — clean, no errors.
- Result: 8/8 logos found and wired in. No brand was left unresolved.
