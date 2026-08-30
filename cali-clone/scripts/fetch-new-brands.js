// Downloads logos + creative for the four brands scraped into
// scripts/new-brands-raw.json, into public/images/brands/<slug>/.
// Run build-brand-media.js afterwards to measure them into the manifest.
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const RAW = require("./new-brands-raw.json");
const OUT_ROOT = path.join(__dirname, "..", "public", "images", "brands");

// raw key -> site slug, and how many creative images to keep. Crystal exposes
// 531 (a whole product catalogue); a case-study page only needs a strong edit.
const BRANDS = {
  greencap: { slug: "greencap-health", limit: 30 },
  thechemist: { slug: "the-chemist-pharmacy", limit: 25 },
  crystalcook: { slug: "crystal", limit: 36 },
  chemistrie: { slug: "chemistrie", limit: 24 },
};

function get(url, depth = 0) {
  return new Promise((resolve) => {
    if (depth > 5) return resolve(null);
    const lib = url.startsWith("http://") ? http : https;
    const req = lib.get(url, { headers: { "User-Agent": "Mozilla/5.0" }, timeout: 25000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return resolve(get(new URL(res.headers.location, url).href, depth + 1));
      }
      if (res.statusCode !== 200) { res.resume(); return resolve(null); }
      const type = res.headers["content-type"] || "";
      if (!type.startsWith("image/")) { res.resume(); return resolve(null); }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    });
    req.on("error", () => resolve(null));
    req.on("timeout", () => { req.destroy(); resolve(null); });
  });
}

const extOf = (u) => {
  const m = decodeURIComponent(u.split("?")[0]).match(/\.(jpe?g|png|webp|avif|gif)$/i);
  return m ? m[0].toLowerCase() : ".jpg";
};

function nameFor(url, taken, prefix) {
  const base = decodeURIComponent(url.split("?")[0].split("/").pop() || "img");
  const stem = path.basename(base, path.extname(base))
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50) || prefix;
  let cand = stem + extOf(url);
  let n = 2;
  while (taken.has(cand)) cand = `${stem}-${n++}${extOf(url)}`;
  taken.add(cand);
  return cand;
}

(async () => {
  for (const [key, cfg] of Object.entries(BRANDS)) {
    const raw = RAW[key];
    if (!raw) { console.log(`no raw data for ${key}`); continue; }

    const dir = path.join(OUT_ROOT, cfg.slug);
    fs.mkdirSync(dir, { recursive: true });
    const taken = new Set();

    // Logo first, under a stable name the brand entry can point at.
    let logoPath = "";
    if (raw.logo) {
      const buf = await get(raw.logo);
      if (buf) {
        const file = "logo" + extOf(raw.logo);
        fs.writeFileSync(path.join(dir, file), buf);
        taken.add(file);
        logoPath = `/images/brands/${cfg.slug}/${file}`;
      }
    }

    // Dedupe by URL, skip the logo, then take the first N.
    const seen = new Set();
    const urls = (raw.images || []).filter((u) => {
      if (!u || u === raw.logo || seen.has(u)) return false;
      seen.add(u);
      return true;
    }).slice(0, cfg.limit * 2); // over-fetch, some will fail or be too small

    let ok = 0, failed = 0;
    for (const url of urls) {
      if (ok >= cfg.limit) break;
      const buf = await get(url);
      if (!buf || buf.length < 12000) { failed++; continue; } // drop icons/sprites
      fs.writeFileSync(path.join(dir, nameFor(url, taken, key)), buf);
      ok++;
    }
    console.log(`${cfg.slug}: ${ok} images, logo=${logoPath || "NONE"}${failed ? `, ${failed} skipped` : ""}`);
  }
  console.log("\nNow run: node scripts/build-brand-media.js");
})();
