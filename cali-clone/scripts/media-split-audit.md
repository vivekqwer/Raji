# Brand media split audit

Read-only audit of `lib/brandMedia.ts` against the bucketing logic in
`components/brands/BrandPremiumPage.tsx` (lines 47–60):

```
isChart = /(reach-growth|engagement|ctr|retention|impress|click|analytic)/i.test(src)
isLogo  = /(^|\/)(logo|cropped-)/i.test(src)
charts   = media.filter(isChart)
creative = media.filter(!isChart && !isLogo)
showcase = creative.filter(width/height >= 1.2).slice(0, 2)
gallery  = creative minus showcase
```

## Per-brand counts

| slug | total | charts | logos excluded | showcase | gallery |
|---|---|---|---|---|---|
| mast-masala | 31 | 3 | 0 | 0 | 28 |
| intellve | 34 | 5 | 0 | 0 | 29 |
| kunuts | 20 | 3 | 0 | 0 | 17 |
| salus | 41 | 4 | 0 | 2 | 35 |
| monarch | 28 | 3 | 0 | 1 | 24 |
| rapoo | 20 | 4 | 0 | 1 | 15 |
| rapoo-middle-east | 33 | 4 | 0 | 1 | 28 |
| furnishing-home | 35 | 3 | 0 | 2 | 30 |
| secure-my-shop | 24 | 2 | 0 | 0 | 22 |
| icici | 10 | 0 | 0 | 1 | 9 |
| godrej | 19 | 2 | 0 | 1 | 16 |
| vamas | 15 | 0 | 0 | 1 | 14 |

## Files classified as CHARTS

| brand | filenames |
|---|---|
| mast-masala | reach-growth-8.png, engagement-8.png, ctrleft-4.png |
| intellve | reach-growth-7.png, reach-growth.png, ctr2-1.png, ctr2.png, engagement-7.png |
| kunuts | engagement-1.png, reach-growth-1.png, retention-3.png |
| salus | engagement-2.png, reach-growth-2.png, ctrleft-1.png, retention-4.png |
| monarch | reach-growth-3.png, engagement-3.png, ctr-left-1.png |
| rapoo | engagement-4.png, reach-growth-4.png, retention-1.png, ctrleft-2.png |
| rapoo-middle-east | reach-growth-5.png, engagement-5.png, ctr-left-2.png, retention-2.png |
| furnishing-home | engagement-6.png, reach-growth-6.png, ctrleft-3.png |
| secure-my-shop | reach-growth.png, ctr2.png |
| icici | (none) |
| godrej | reach-growth.png, ctr2.png |
| vamas | (none) |

All of these are genuine analytics screenshots. **No false positives** — no
creative post filename in the manifest contains `reach-growth`, `engagement`,
`ctr`, `retention`, `impress`, `click` or `analytic`.

## Files excluded as LOGOS

**None, in any brand.** The `isLogo` regex never fires — no `src` in the
manifest has a basename starting with `logo` or `cropped-`. Note
`godrej/godrej.png` (ratio 1.00) is in the gallery; if it is a logo lockup it is
not being caught.

## MISCLASSIFICATIONS — analytics charts MISSED by the regex

These are performance-chart screenshots that fall through to the creative
gallery because the source filenames are misspelled relative to the regex
(`retension` vs `retention`, `engamenrt` vs `engagement`, `rentention`,
`crt` vs `ctr`). All 9 have chart-like dimensions (~460–690 px wide,
ratio 1.0–2.0), matching the sibling files that DO match.

| brand | filename | dims (ratio) | should be |
|---|---|---|---|
| mast-masala | `retension-3.png` | ratio 1.09 | charts |
| intellve | `retension-2.png` | ratio 1.05 | charts |
| intellve | `engamenrt2.png` | ratio 1.02 | charts |
| kunuts | `crt-left.png` | ratio 1.17 | charts |
| monarch | `rentention.png` | ratio 1.03 | charts |
| furnishing-home | `retension-1.png` | ratio 2.02 | charts |
| secure-my-shop | `engamenrt2.png` | ratio 1.02 | charts |
| secure-my-shop | `retension-4.png` | ratio 1.05 | charts |
| godrej | `engamenrt2.png` | ratio 1.02 | charts |
| godrej | `retension-4.png` | ratio 1.05 | charts |

Suggested regex widening:
`/(reach-growth|engage|engamenrt|ctr|crt-left|retention|retension|rentention|impress|click|analytic)/i`

Also worth noting: `intellve` currently has 5 charts because
`reach-growth-7.png` / `reach-growth.png` and `ctr2-1.png` / `ctr2.png` are
near-duplicate pairs at identical dimensions (467x472 and 473x457).

## ZERO showcase (no creative image with ratio >= 1.2)

- **mast-masala** — widest creative is 1.09 (`retension-3.png`, itself a chart);
  every real post is 0.80 or 1.00.
- **intellve** — widest creative is 1.05 (`retension-2.png`, a chart); real
  posts top out at 1.00.
- **kunuts** — widest creative is 1.17 (`crt-left.png`, a chart); real posts
  are all 1.00 or 0.67.
- **secure-my-shop** — widest creative is 1.05 (`retension-4.png`, a chart);
  real posts are 1.00 or lower.

For all four, once the missed charts above are reclassified the showcase stays
at zero — these brands genuinely have no landscape creative. The showcase
section will render empty. Either lower the threshold (e.g. >= 1.0 would give
mast-masala, intellve, kunuts and secure-my-shop a showcase from their 1.00
square posts) or fall back to the tallest/most-featured square.

Brands where showcase is only 1 (monarch, rapoo, rapoo-middle-east, icici,
godrej, vamas) each have exactly one wide creative — a
`chatgpt-image-*.png` at ratio 1.50 (vamas uses `fulllook.webp` at 3.13, an
extreme banner crop that will look odd as a full-width showcase).

## THIN gallery (< 4 images)

**None.** The smallest gallery is `icici` at 9. Reclassifying the 10 missed
charts above lowers galleries by at most 2 each; the minimum stays at 9.

## Other data issue: duplicate srcs

`furnishing-home` lists the same `src` more than once:

- `/images/brands/furnishing-home/freepik-generate-diiferent-angles-and-beautiful-close-up-s-5.png` — **8 times**
- `/images/brands/furnishing-home/freepik-gnenerate-this-type-if-image-img1-with-the-use-of-59.png` — **3 times**

The gallery and showcase maps use `key={img.src}`, so these produce duplicate
React keys and render the same picture 8x / 3x in the masonry. Of
furnishing-home's 30 gallery items, only 21 are distinct. This looks like the
generator collapsing distinct source files onto one slugified filename.
