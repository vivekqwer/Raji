# Homepage Responsive / Image-Handling Audit

Read-only audit. Scope: the 14 sections rendered by `app/page.tsx`, their components in
`components/sections/`, and their CSS in `app/globals.css` (4029 lines).
Target viewport for risk analysis: **375 px wide**.

---

## Global findings (apply to everything)

- **The stylesheet is desktop-first almost everywhere.** Of 57 `@media` blocks in
  `app/globals.css`, only **three** are `min-width` layout blocks — all three belong to the
  hero (`@media (min-width: 640px)` line 1085, `@media (min-width: 1024px)` line 1102) plus
  the tablet-band `(min-width: 768px) and (max-width: 1199px)` blocks which are still
  desktop-first in spirit. Every section's base rule is the desktop rule; mobile is an
  override at `@media (max-width: 767px)`.
- **`html, body { overflow-x: hidden; max-width: 100% }` — globals.css:56-61.** This masks
  horizontal overflow rather than fixing it, and it is a known source of GSAP
  `ScrollTrigger` pin-spacer mis-measurement and of `position: sticky` breakage
  (`.freebie-copy` globals.css:1825-1828 relies on sticky).
- **10 of the 11 image renders on the homepage crop.** Only `FreebieSection` preserves the
  natural aspect ratio. This is the direct cause of the owner's "images get cropped"
  complaint — it is systemic, not a one-off.
- **`100vh` / `92vh` heights** are used on `.hero-boom` (930), `.fan-section` (337) and
  `.impact-section` (455). `fan-section` and `impact-section` are neutralised on mobile;
  the hero's `min-height: 92vh` is not, so mobile URL-bar show/hide resizes the hero.

---

## 1. HeroSection — `components/sections/HeroSection.tsx`

**Image handling: CROPS.** No `next/image`. Background is `BoomerangVideoBg`
(`BoomerangVideoBg.tsx:127-142`), a `<video>` plus a `<canvas>` that replays captured
frames. Both are forced to `object-fit: cover` twice: inline
(`BoomerangVideoBg.tsx:131`) and in CSS `.hero-boom-bg video, .hero-boom-bg canvas`
(globals.css:943-948). At 375 px a landscape source video is cropped to a ~375×~700
portrait window — the majority of the frame is discarded.
The handshake button is inline SVG (`HeroSection.tsx:13`), not an image.

**CSS approach: the only genuinely mobile-first section.** Base rules are the small-screen
state and `@media (min-width: 640px)` (1085) / `@media (min-width: 1024px)` (1102) upgrade
them. A `@media (max-width: 640px)` block (1544, 1607) still patches button sizes.

**Mobile risks**
- `.hero-boom { min-height: 92vh }` — globals.css:930-936. Static `vh` on mobile; the hero
  reflows every time the address bar collapses.
- `.hero-boom-eyebrow { font-size: 12px; letter-spacing: 0.32em }` — globals.css:1490-1498.
  The default eyebrow string is 49 characters
  ("CLIENT SERVICING · SOCIAL MEDIA STRATEGY · CONTENT", `lib/content.ts:73`); with 0.32em
  tracking that is ~540 px of text in a 327 px content box. It wraps rather than overflows,
  but it wraps into a ragged 2–3 line block with a mid-word `·` break.
- `.hero-boom-title { font-size: clamp(34px, 5.5vw, 76px); max-width: 18ch }` —
  globals.css:970-980. `5.5vw` = 20.6 px at 375 px, so it pins to the 34 px floor. The
  default title + accent is 71 characters (`lib/content.ts:74-75`) → ~7 lines at
  `line-height: 1.02`, ~240 px of stacked italic display type before the sub-copy and three
  buttons. Combined with the 120 px top padding this fills the 92vh box with nothing to spare.
- `.hero-boom-cta { position: absolute; left: 24px; right: 24px; bottom: 24px }` —
  globals.css:995-1003. **Dead CSS** — `HeroSection.tsx` renders no `.hero-boom-cta` node.
  Same for `.hero-boom-video-link` (1057) and `.hero-boom-play` (1067). Harmless but it
  means the `min-width: 640px` block at 1087-1091 is doing nothing.
- `.hero-boom-btn-icon { width: 52px; white-space: nowrap; overflow: hidden }` —
  globals.css:1554-1574, with the label revealed only on `:hover`/`:focus-visible`
  (1590-1602, mobile 1607-1610). **On a touch device there is no hover**, so the
  "Start a Conversation"/collaborate action is a bare 44 px circle with no visible label.
  The label text exists only in `.hero-boom-btn-icon-label { max-width: 0; opacity: 0 }`
  (1579-1589).

---

## 2. ClientLogoMarquee — `components/sections/ClientLogoMarquee.tsx`

**Image handling: no images.** Renders plain `<span className="clm-item">` text
(`ClientLogoMarquee.tsx:12-14`), despite the name.

**CSS approach: desktop-first** — base at 1613-1656, override at
`@media (max-width: 767px)` (1657-1662).

**Mobile risks**
- `.clm-track { white-space: nowrap; display: inline-flex; animation: clm-scroll 40s }` —
  globals.css:1636-1642. This is intentional nowrap and it is contained by
  `.clm-viewport { overflow: hidden }` (1630-1635), so it does **not** cause page-level
  horizontal scroll. Low risk.
- `.clm-item { font-size: 24px }` on mobile (1661) with `gap: 40px` (1660): with few names
  the doubled track may be narrower than 2× the viewport, in which case the
  `translateX(-50%)` keyframe (1653-1656) produces a visible jump/gap on a narrow screen.

---

## 3. ApproachSection — `components/sections/ApproachSection.tsx`

**Image handling: CROPS.** `ApproachSection.tsx:24-32` — `fill` +
`style={{ objectFit: "cover", objectPosition: "center 20%" }}`, inside
`.approach-img-wrap { aspect-ratio: 4 / 5 }` (globals.css:1682-1689). A portrait photo is
force-fitted to 4:5 and pushed to 20% from the top; anything below the subject's chest is cut.

**CSS approach: desktop-first** — `.approach-grid { grid-template-columns: 1.25fr 1fr }`
(1674-1679), overridden at 1749-1752 and 1753-1759.

**Mobile risks**
- Handled correctly: `.approach-grid { grid-template-columns: 1fr }` and
  `.approach-media { order: -1 }` — globals.css:1756-1757.
- `.approach-stats { gap: 36px; flex-wrap: wrap }` — globals.css:1722-1728, mobile 1758.
  With `.approach-stat-num { font-size: clamp(48px, 5vw, 72px) }` (1734-1741) pinned to 48 px
  and only two stats, this fits. Safe.
- The cropped 4:5 portrait is the one real complaint here, not the layout.

---

## 4. QuoteBand — `components/sections/QuoteBand.tsx`

**Image handling: no images.**

**CSS approach: desktop-first** — `.quote-band-inner { grid-template-columns: 1fr 1fr }`
(globals.css:1768-1776), overridden at 1797-1799 and 1800-1804.

**Mobile risks**
- Correctly collapses to `grid-template-columns: 1fr` at globals.css:1802. No risk.
- `.quote-band-mark { position: absolute; left: 0; top: -8px; font-size: clamp(48px, 5vw, 72px) }`
  — globals.css:1788-1796. Absolutely positioned with a fixed offset, but the parent
  `.quote-band-item` reserves room via `padding-left: 28px` on mobile (1803) while the mark
  itself renders at 48 px — the glyph overhangs the reserved padding and can collide with the
  first line of the quote at 375 px.

---

## 5. EdgeSection — `components/sections/EdgeSection.tsx`

**Image handling: CROPS ×2.**
- Pillar icons — `EdgeSection.tsx:17-23`: `fill` + `objectFit: "cover"` into
  `.edge-pillar-img { width: 56px; height: 56px }` (globals.css:1937-1945). A full photo
  squeezed into a 56 px square; effectively only the centre ~10% survives.
- Sub-cards — `EdgeSection.tsx:36-41`: `fill` + `cover` into
  `.edge-sub-img { aspect-ratio: 4 / 3 }` (globals.css:1978-1985).

**CSS approach: desktop-first** — `.edge-grid { grid-template-columns: repeat(4, 1fr) }`
(1920-1925) → 2 cols at 2008 → 1 col at 2013.

**Mobile risks**
- `.edge-pillar-img { width: 56px; height: 56px }` — globals.css:1939-1940. Fixed pixel box,
  never scaled down; fine at 375 px but the `sizes="56px"` hint (`EdgeSection.tsx:19`) means
  Next serves a 56 px-wide source that is then upscaled on a 3× DPR phone → visibly soft.
- `.edge-sub-card { grid-template-columns: 40% 1fr }` — globals.css:1969-1977. Correctly
  flattened to `1fr` at globals.css:2019. Safe.
- `.edge-sub-body { max-width: 40ch }` (1997-2004) and `.edge-title { max-width: 30ch }`
  (1910-1919) are `ch`-based, so they don't overflow.

---

## 6. StatsSectionV2 — `components/sections/StatsSectionV2.tsx`

**Image handling: no images.** Animated counters only.

**CSS approach: desktop-first** — `.statsv2-grid { grid-template-columns: repeat(4, 1fr) }`
(globals.css:2047-2052) → 2 cols at 2078 → 1 col at 2087.

**Mobile risks**
- `.statsv2-num { font-size: clamp(56px, 9vw, 128px) }` (2061-2068), narrowed to
  `clamp(56px, 16vw, 88px)` on mobile (2094). At 375 px that resolves to 60 px — fits.
- Border bookkeeping is handled: `.statsv2-cell { border-right: 0; border-top: ... }` at
  globals.css:2088-2093. Clean. **Lowest-risk section on the page.**

---

## 7. ServicesParallax — `components/sections/ServicesParallax.tsx`

**Image handling: CROPS — worst on the page.** `ServicesParallax.tsx:111-118`: `fill` +
`objectFit: "cover"` into `.pcard-img { position: absolute; inset: -25% 0; width: 100%;
height: 150% }` (globals.css:236-242). The image box is deliberately **1.5× the card height**
so GSAP can parallax it (`ServicesParallax.tsx:75-88`, `yPercent -10 → 10`). At 375 px the
card is 343 px wide (`.pcard { inset: 0 16px }`, globals.css:327) and up to 520 px tall
(globals.css:326), so the image box is ~343 × 780 — an aspect ratio of **0.44** applied to a
1800 px-wide landscape Unsplash source. Roughly 75–80% of the photograph's width is thrown
away. This section alone will read as "my images are cropped".

**CSS approach: desktop-first** — base 193-312, tablet 314-321, mobile 323-332.

**Mobile risks**
- **`pin: true` with NO `matchMedia` guard** — `ServicesParallax.tsx:31-43`. Compare with
  `ImpactFlip.tsx:66` (`mm.add("(min-width: 768px)")`) and `CardsFan.tsx:23` (same). This is
  the only pinned homepage section that runs its pin on a phone.
- The pin duration is `end: "+=" + cards.length * 90 + "%"` — `ServicesParallax.tsx:35`.
  With 5 default cards (`lib/content.ts:155-161`) that is **`+=450%`**, i.e. roughly 4.5
  viewport heights of scrolling during which the page appears frozen, over a stack that is
  only `clamp(400px, 74vh, 520px)` tall (globals.css:326). On mobile this reads as a broken
  scroll.
- The second, per-card `ScrollTrigger` on `.pcard-img` (`ServicesParallax.tsx:80-86`) is
  **also unguarded** and adds a further ±10% vertical shift to an already 150%-tall image.
- `pin` + global `html, body { overflow-x: hidden }` (globals.css:59) is a documented
  ScrollTrigger pin-spacer measurement hazard.
- `.pcard-text { position: absolute; inset: auto 0 0 0; padding: 48px 56px }` —
  globals.css:252-262, reduced to `22px 22px 26px` at globals.css:328. With
  `.pcard-title { font-size: 32px }` (330) and `.pcard-body { font-size: 14px }` (331)
  overlaying a 400–520 px card, the default body copy (~150 chars,
  `lib/content.ts:156`) is ~7 lines and will overflow the card's lower half onto the image.
- `sizes="(max-width: 767px) 100vw, 96vw"` (`ServicesParallax.tsx:115`) under-describes a box
  that is 150% of the card height, so the served source is short and gets upscaled.

---

## 8. ProcessSection — `components/sections/ProcessSection.tsx`

**Image handling: CROPS.** `ProcessSection.tsx:17-23`: `fill` + `objectFit: "cover"` into
`.process-step-img { width: 80px; height: 80px; border-radius: 999px }`
(globals.css:2141-2150), shrunk to 64 px at globals.css:2189. A photograph reduced to a
64 px circle.

**CSS approach: desktop-first** — `repeat(4, 1fr)` (2118-2122) → 2 cols (2181) → 1 col (2186).

**Mobile risks**
- `sizes="80px"` (`ProcessSection.tsx:21`) while the mobile box is 64 px — over-fetch, not a
  break.
- `.process-step-no { font-size: clamp(48px, 5vw, 72px) }` (2152-2161), forced to 48 px at
  2190, sits in a `.process-step-head { display: flex; gap: 14px }` (2135-2140, mobile 2188)
  next to the 64 px circle. 64 + 14 + ~50 = 128 px inside a 327 px card — fits.
- No real breakage. Low risk apart from the cropped circular thumbnails.

---

## 9. ImpactFlip — `components/sections/ImpactFlip.tsx`

**Image handling: CROPS *and* DISTORTS — and then hides the image entirely on mobile.**
Not `next/image` at all: a CSS background on `.istrip-front`
(`ImpactFlip.tsx:110-116`) with `background-size: 300% 100%` (globals.css:513-517) and a
per-strip `background-position: ${(100/2) * i}% center`. `300% 100%` stretches the width to
triple while locking the height — the aspect ratio is not preserved in either direction.
Then `@media (max-width: 767px) { .istrip-front { display: none } }` (globals.css:601)
**removes the photograph completely on a phone**; mobile users see only the coloured
gradient backs.

**CSS approach: desktop-first** — base 453-569, tablet 571-577, mobile 579-608.

**Mobile risks**
- `pin` is correctly guarded: `mm.add("(min-width: 768px)")` at `ImpactFlip.tsx:66` wraps the
  whole pinned timeline; `mm.add("(max-width: 767px)")` at `ImpactFlip.tsx:94-98` flips the
  cards to their back face and clears transforms. Good.
- `.impact-section { height: 100vh; min-height: 720px }` (globals.css:453-462) is correctly
  neutralised to `height: auto; min-height: 0` at globals.css:580-584.
- `.istrip { transform: none !important }` (globals.css:598) is a `!important` fighting the
  GSAP inline transforms set at `ImpactFlip.tsx:95` — it works, but it is brittle: any future
  mobile animation on `.istrip` will silently fail.
- The desktop-only image means the section's whole visual premise (a photo split across three
  strips that flip) is absent on the primary target device.

---

## 10. BenefitsSection — `components/sections/BenefitsSection.tsx`

**Image handling: CROPS.** `BenefitsSection.tsx:16-22`: `fill` + `objectFit: "cover"` into
`.benefits-card-img { aspect-ratio: 16 / 9 }` (globals.css:2232-2239), changed to
`16 / 10` on mobile (globals.css:2294). A portrait or square source is cut to a letterbox.

**CSS approach: desktop-first** — `repeat(4, 1fr)` (2214-2219) → 2 cols (2287) → 1 col (2292).

**Mobile risks**
- `.benefits-rating { display: inline-flex; padding: 24px 36px; border-radius: 999px }` —
  globals.css:2261-2268, tightened to `padding: 18px 28px; gap: 12px` at globals.css:2297.
  It contains `.benefits-rating-num` at `clamp(36px, 4vw, 56px)` (2269-2276, → 36 px) plus
  `.benefits-rating-label` at 14 px uppercase with `letter-spacing: 0.12em` (2277-2284). The
  pill has **no `flex-wrap` and no `max-width`**; a rating label of more than ~15 characters
  pushes the pill past 327 px. It is saved from causing a scrollbar only by the global
  `overflow-x: hidden` at globals.css:59 — meaning the right end of the pill is silently
  clipped rather than wrapped.
- Otherwise sound.

---

## 11. CardsFan — `components/sections/CardsFan.tsx`

**Image handling: CROPS.** `CardsFan.tsx:116-122`: `fill` + `objectFit: "cover"` filling
`.fcard-img { position: absolute; inset: 0 }` (globals.css:391-396) inside a card that is
`width: clamp(200px, 18vw, 250px); height: clamp(280px, 40vh, 370px)` on desktop
(globals.css:378-390) and `width: 100%; height: clamp(260px, 60vw, 340px)` on mobile
(globals.css:631-640). On mobile that is a ~343 × 260 landscape box — a portrait source
loses its top and bottom.

**CSS approach: desktop-first** — base 335-439, tablet 441-450, mobile 610-644 (note the
mobile block is physically 170 lines away from the base rules, separated by the ImpactFlip
mobile block).

**Mobile risks**
- `pin` is correctly guarded — `CardsFan.tsx:23` `mm.add("(min-width: 768px)")` wraps the
  whole pinned fan timeline; `CardsFan.tsx:86-100` gives mobile a simple per-card fade-in.
- `.fan-section { height: 100vh; min-height: 760px; display: grid }` (globals.css:335-344)
  is correctly reset to `height: auto; min-height: 0; display: block` (globals.css:611-616).
- `.fcard { position: absolute; top: 50%; left: 0; margin-top: clamp(-185px, -20vh, -140px) }`
  (globals.css:378-384) is correctly reset to `position: relative; top: auto; left: auto;
  margin-top: 0` in a single-column grid (globals.css:623-640). **Without that block all five
  cards would stack on top of each other at `left: 0`** — it is present, so this is safe, but
  the mobile layout is entirely dependent on that one override.
- `.fcard { transform: none !important }` (globals.css:639) again overrides GSAP inline
  transforms — but `CardsFan.tsx:96` animates `y` and `opacity` via `gsap.from`, and the
  `!important` on `transform` **kills the `y` part of that entrance animation on mobile**.
  Only the opacity fade survives.
- `sizes="(max-width: 767px) 60vw, 18vw"` — `CardsFan.tsx:120`. Wrong on mobile: the card is
  `width: 100%` (globals.css:636), i.e. ~91vw, not 60vw. Next.js serves a source ~35% too
  small → visibly blurry cards on a phone.
- `.fan-hint { display: none }` on mobile (globals.css:622) correctly hides the now-meaningless
  "scroll to spread" copy.

---

## 12. ClientLoveSection — `components/sections/ClientLoveSection.tsx`

**Image handling: CROPS (acceptable).** `ClientLoveSection.tsx:46-53`: `fill` +
`objectFit: "cover"` into `.testi-avatar { width: 64px; height: 64px; border-radius: 999px }`
(globals.css:2347-2356). A circular avatar crop is the intended behaviour here.

**CSS approach: desktop-first** — base 2301-2434, 2435-2437, mobile 2438-2446.

**Mobile risks**
- `.testi-stage { min-height: 320px }` (globals.css:2323-2326) raised to `420px` on mobile
  (globals.css:2442). This is a **hard-coded height for variable-length content**: cards are
  `position: absolute; inset: 0` (globals.css:2327-2339) except the active one, which becomes
  `position: relative` (2340-2346). A long testimonial at
  `.testi-quote { font-size: 18px }` (globals.css:2443) in a 327 px column runs well past
  420 px and, because the stage only sets `min-height`, it will push the controls — but the
  *inactive* absolutely-positioned cards are sized to the stage, so switching between a short
  and a long quote produces a visible height jump every 6 s (auto-advance,
  `ClientLoveSection.tsx:24-27`).
- `.testi-avatar { flex-shrink: 0 }` (2355) is correct.
- `.testi-controls { gap: 14px }` with two 42 px arrows plus dots (globals.css:2444-2445) —
  fits comfortably.

---

## 13. FAQSection — `components/sections/FAQSection.tsx`

**Image handling: no images.** Lucide `<Plus>` icon only (`FAQSection.tsx:27`).

**CSS approach: desktop-first** — base 2449-2532, 2533-2535, mobile 2536-2543.

**Mobile risks**
- `.faq-item.is-open .faq-a-wrap { max-height: 600px }` — globals.css:2520-2522. This is the
  classic max-height accordion trap. At 375 px the answer renders at
  `font-size: 14px; line-height: 1.7` (globals.css:2523-2532 + 2542) ≈ 24 px per line in a
  327 px column ≈ 40 characters per line. **Any answer longer than ~1000 characters will be
  silently clipped** at 600 px with no scroll and no indication. On desktop the same answer
  is ~70ch wide and fits. Current default answers are short enough, but this is a
  CMS-editable field (`lib/content.ts` `faq.items`) — it will break the first time someone
  writes a long answer.
- `.faq-a { padding-right: 60px }` (globals.css:2530) correctly zeroed at globals.css:2542.
- `.faq-q { gap: 24px }` → `16px` (globals.css:2540) with a `flex-shrink: 0` 36 px icon
  (globals.css:2497-2508) — safe.

---

## 14. FreebieSection — `components/sections/FreebieSection.tsx`

**Image handling: PRESERVES ASPECT RATIO — the only section on the page that does.**
`FreebieSection.tsx:21-29`: explicit `width={941} height={1672}` with
`style={{ width: "100%", height: "auto" }}`. At 375 px the column is 335 px wide
(`.freebie-grid { padding: 0 20px }`, globals.css:1880) → the image renders 335 × 595 px with
the full frame intact. **This is the pattern the other 10 image renders should follow.**

**CSS approach: desktop-first** — `.freebie-grid { grid-template-columns: 1fr 1fr }`
(globals.css:1812-1820) → 1820 padding override at 1876-1878 → 1 col at 1879-1883.

**Mobile risks**
- Correctly collapses: `grid-template-columns: 1fr` and `.freebie-copy { position: static }`
  — globals.css:1880-1881. The `position: sticky` at globals.css:1825-1828 is desktop-only,
  which also side-steps the `html { overflow-x: hidden }` / sticky conflict.
- A 595 px-tall image stacked above the form pushes the email capture below the fold on
  every phone — a conversion concern, not a layout break.
- `.freebie-btn { align-self: flex-start }` (globals.css:1866) inside a
  `flex-direction: column` form (1848-1853) leaves a narrow tap target rather than a
  full-width mobile button.
- Unrelated to layout: `FreebieSection.tsx:9-13` — the form does not submit anywhere; it
  fakes success/failure with `Math.random()` after an 800 ms timeout.

---

## Summary table

| Section | Images | Handling | CSS approach | Pin | Verdict |
|---|---|---|---|---|---|
| HeroSection | video + canvas | **CROPS** (cover ×2) | mobile-first | — | vh + hover-only label |
| ClientLogoMarquee | none | n/a | desktop-first | — | OK |
| ApproachSection | 1 | **CROPS** (4:5 cover) | desktop-first | — | OK layout |
| QuoteBand | none | n/a | desktop-first | — | OK |
| EdgeSection | 2 | **CROPS** (56px sq, 4:3) | desktop-first | — | OK layout |
| StatsSectionV2 | none | n/a | desktop-first | — | **Cleanest** |
| ServicesParallax | 1 | **CROPS hardest** (150% box) | desktop-first | **UNGUARDED** | **Worst** |
| ProcessSection | 1 | **CROPS** (64px circle) | desktop-first | — | OK layout |
| ImpactFlip | 1 (CSS bg) | **CROPS + DISTORTS**, hidden <768px | desktop-first | guarded | Image absent on mobile |
| BenefitsSection | 1 | **CROPS** (16:10) | desktop-first | — | rating pill clips |
| CardsFan | 1 | **CROPS** | desktop-first | guarded | wrong `sizes`, killed anim |
| ClientLoveSection | 1 | **CROPS** (avatar, intended) | desktop-first | — | fixed 420px stage |
| FAQSection | none | n/a | desktop-first | — | 600px clip trap |
| FreebieSection | 1 | **preserves ratio** | desktop-first | — | **reference pattern** |
