# Image reference audit — cali-clone

Read-only audit. Generated 2026-08-30. Scope: `lib/`, `components/`, `app/`.
Remote URLs checked with `curl -s -L --max-time 10 -o /dev/null -w "%{http_code}|%{content_type}"`.

## Summary

| Metric | Count |
| --- | ---: |
| Distinct absolute http(s) URLs found | 124 |
| Absolute URLs OK (200 + real image/video content-type) | 40 |
| Absolute URLs BROKEN | 84 |
| — dead `rajeshwarichauhan.in` (200 but `text/html` parking page, 10881 B) | 80 |
| — 404 | 2 |
| — 403 | 1 |
| — connection failed (000) | 1 |
| Distinct local `/images/...` paths found | 313 |
| Local paths missing from `public/` | 0 |
| Distinct `raji.bharatenterprises.tech` URLs found | 0 |

Breakdown of OK responses: 33 `image/jpeg`, 3 `image/png`, 4 `video/mp4`.

> Note: every `rajeshwarichauhan.in` URL returns HTTP **200** but with `content-type: text/html` and an identical 10881-byte body — the expired-domain placeholder page. They are dead as images despite the 200 status.

## DEAD rajeshwarichauhan.in references

81 total reference sites (80 distinct URLs). All confirmed dead.

| file:line | URL |
| --- | --- |
| `lib/brand.ts:6` | https://rajeshwarichauhan.in/wp-content/uploads |
| `lib/brands.ts:136` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Intellve.png |
| `lib/brands.ts:359` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Ambedkar-jayanti-INTELLVE.jpg |
| `lib/brands.ts:363` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Dhanteras-2-.jpeg |
| `lib/brands.ts:367` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Dussera.jpg |
| `lib/brands.ts:371` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/earth-day-INTELLVE.jpg |
| `lib/brands.ts:375` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Gandhi-Jayanti.jpg |
| `lib/brands.ts:379` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Guru-Nanak-Jayanti-.jpeg |
| `lib/brands.ts:383` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Independence-day.jpg |
| `lib/brands.ts:387` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Intellve_Bhai_Dooj.jpg |
| `lib/brands.ts:460` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Kunuts.png |
| `lib/brands.ts:695` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Crt-Left.png |
| `lib/brands.ts:699` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/kunuts-jan-republic-day-.jpg |
| `lib/brands.ts:703` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Holi.jpg |
| `lib/brands.ts:707` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Ramdan@2x-1.jpg |
| `lib/brands.ts:711` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/kunuts-jan-makarsankrat.png |
| `lib/brands.ts:715` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/kunuts-jan-makarsankrat-1.png |
| `lib/brands.ts:719` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/kunuts-jan-3_.jpg |
| `lib/brands.ts:723` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/kunuts-jan-republic-day-1-1.jpg |
| `lib/brands.ts:1074` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Monarch.png |
| `lib/brands.ts:1309` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/441175069_1697447383996963_5303440128693367193_n.jpg |
| `lib/brands.ts:1313` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/441129253_460025499780541_4898027462062335074_n.jpg |
| `lib/brands.ts:1317` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/436270261_962201035644999_8047582674078374948_n.jpg |
| `lib/brands.ts:1321` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/436346202_1265801647713538_6708095825783625845_n.jpg |
| `lib/brands.ts:1325` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/447582014_365123279919267_1632428410918691261_n.jpg |
| `lib/brands.ts:1329` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/468322917_18107859313445274_2901932152859157014_n.jpg |
| `lib/brands.ts:1333` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/452870056_2161826644182312_5928892124035476037_n.jpg |
| `lib/brands.ts:1337` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/455224616_476757474990504_8533215241120221454_n.jpg |
| `lib/brands.ts:1410` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Rapoo.png |
| `lib/brands.ts:1633` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/mt760L-1.png |
| `lib/brands.ts:1637` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/V500-Pro.png |
| `lib/brands.ts:1641` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/VT9PRO.png |
| `lib/brands.ts:1645` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/10_Static.jpg |
| `lib/brands.ts:1649` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/11-1.jpg |
| `lib/brands.ts:1653` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Mousepad.jpg |
| `lib/brands.ts:1657` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Copy-of-02-1.jpg |
| `lib/brands.ts:1661` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Copy-of-03.jpg |
| `lib/brands.ts:1734` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Rapoo.png |
| `lib/brands.ts:1932` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/1-1.jpg |
| `lib/brands.ts:1936` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/2-2.jpg |
| `lib/brands.ts:1940` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/3-2.jpg |
| `lib/brands.ts:1944` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/4-2.jpg |
| `lib/brands.ts:1948` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/5-1.jpg |
| `lib/brands.ts:1952` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/6-1.jpg |
| `lib/brands.ts:1956` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/7-1.jpg |
| `lib/brands.ts:1960` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/8-2.jpg |
| `lib/brands.ts:2033` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Furnishing_Home.png |
| `lib/brands.ts:2210` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/564987481_18063087149576460_6542216695873398226_n.jpg |
| `lib/brands.ts:2214` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Dhanteras-.jpeg |
| `lib/brands.ts:2218` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Bhaidooj-scaled.png |
| `lib/brands.ts:2222` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Bhaidooj.png |
| `lib/brands.ts:2226` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/furnishing_home_CC_3.png |
| `lib/brands.ts:2230` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/furnishing_home_CC_6.png |
| `lib/brands.ts:2234` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/furnishing_home_CC_11.png |
| `lib/brands.ts:2238` | https://rajeshwarichauhan.in/wp-content/uploads/2026/02/Upolstery.png |
| `lib/brands.ts:2311` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/Secure_My_Shop.png |
| `lib/brands.ts:2546` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/newyear_resizee2.png |
| `lib/brands.ts:2550` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/newyear_resizee1.png |
| `lib/brands.ts:2554` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/christmas_reelsize3.png |
| `lib/brands.ts:2558` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/slide1-1.png |
| `lib/brands.ts:2562` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/slide2.png |
| `lib/brands.ts:2566` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/slide3.png |
| `lib/brands.ts:2570` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/slide4.png |
| `lib/brands.ts:2574` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/slide1.png |
| `lib/brands.ts:2647` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/ICICI_Pru.png |
| `lib/brands.ts:2700` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/1.jpeg |
| `lib/brands.ts:2704` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/2.jpeg |
| `lib/brands.ts:2708` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/5.jpeg |
| `lib/brands.ts:2712` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/4.jpeg |
| `lib/brands.ts:2716` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/3-1.jpeg |
| `lib/brands.ts:2720` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/5-1.jpeg |
| `lib/brands.ts:2724` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/6-1.jpeg |
| `lib/brands.ts:2728` | https://rajeshwarichauhan.in/wp-content/uploads/2025/12/7-1.jpeg |
| `lib/brands.ts:2801` | https://rajeshwarichauhan.in/wp-content/uploads/2025/11/Godrej.png |
| `lib/brands.ts:2880` | https://rajeshwarichauhan.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-04-at-9.55.12-AM-1.jpeg |
| `lib/brands.ts:2884` | https://rajeshwarichauhan.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-04-at-9.55.12-AM-2.jpeg |
| `lib/brands.ts:2888` | https://rajeshwarichauhan.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-04-at-9.55.12-AM.jpeg |
| `lib/brands.ts:2892` | https://rajeshwarichauhan.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-04-at-9.55.12-AM-1-1.jpeg |
| `lib/brands.ts:2896` | https://rajeshwarichauhan.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-04-at-9.55.12-AM-2-1.jpeg |
| `lib/brands.ts:2900` | https://rajeshwarichauhan.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-04-at-9.55.12-AM-3.jpeg |
| `lib/brands.ts:2904` | https://rajeshwarichauhan.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-04-at-9.55.13-AM.jpeg |

Per-file counts:

| File | Dead refs |
| --- | ---: |
| `lib/brands.ts` | 80 |
| `lib/brand.ts` | 1 (base-URL constant at line 6) |

## Other broken remote URLs

| URL | Status | content-type | file:line |
| --- | --- | --- | --- |
| https://cdn.coverr.co/videos/coverr-a-woman-typing-on-a-laptop-1581/1080p.mp4 | 404 | text/html | `lib/unsplash.ts:31` |
| https://cdn.coverr.co/videos/coverr-pouring-coffee-2510/1080p.mp4 | 404 | text/html | `lib/unsplash.ts:32` |
| https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7188672-6e92-402c-9e45-f1e0f454bdc4.mp4 | 403 | application/xml | `lib/brand.ts:299` |
| https://brand-website.com | 000 (no connection) | — | `app/admin/page.tsx:768` |

`https://brand-website.com` is a UI `placeholder` string on an input, not an actual image reference — no fix needed.

The other 4 cloudfront `.mp4` URLs (`lib/brand.ts:274,282,294`, `lib/content.ts:72`) return 200 `video/mp4` and are fine.

## Missing local files

None. All 313 distinct `/images/...` paths resolve to existing files under `D:/raji portfolio/cali-clone/public/`.

## Remote hosts that are healthy

| Host | Distinct URLs | Result |
| --- | ---: | --- |
| images.unsplash.com | 25 | all 200 image/jpeg |
| www.vamas.in (Shopify CDN) | 8 | all 200 image/jpeg |
| d8j0ntlcm91z4.cloudfront.net | 5 | 4 x 200 video/mp4, 1 x 403 |
| cdn.coverr.co | 2 | both 404 |
| finvvritti.com, mastspices.com, uk.envisionedu.in | 3 | all 200 image/png |
