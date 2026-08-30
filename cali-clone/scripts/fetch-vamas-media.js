// One-off: pull the Vamas brand's own product photography off its live site into
// public/images/brands/vamas/, then re-run build-brand-media.js to measure them.
const https = require("https");
const fs = require("fs");
const path = require("path");

const BASE = "https://vamas-production.up.railway.app";
const OUT = path.join(__dirname, "..", "public", "images", "brands", "vamas");

const PATHS = [
  "/assets/vamas-logo.avif",
  "/assets/slide-pink.jpg",
  "/assets/slide-maroon.jpg",
  "/assets/slide-green.jpg",
  "/assets/Bridal.jpg",
  "/assets/Festive.jpg",
  "/assets/Casual.JPG",
  "/assets/party%20wear.jpg",
  "/fulllook.webp",
  "/assets/prod-blue.jpg",
  "/assets/prod-indigo.jpg",
  "/assets/prod-brinjal.jpg",
  "/assets/Full%20look.jpg",
  "/assets/prod-darkmaroon.jpg",
  "/assets/prod-cobalt.jpg",
  "/assets/prod-green2.jpg",
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(new URL(res.headers.location, url).href));
      }
      if (res.statusCode !== 200) { res.resume(); return resolve(null); }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    }).on("error", reject);
  });
}

const slugify = (p) => {
  const name = decodeURIComponent(p.split("/").pop());
  const ext = path.extname(name).toLowerCase();
  const base = path.basename(name, path.extname(name));
  return base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + ext;
};

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  let ok = 0, failed = 0;
  for (const p of PATHS) {
    const buf = await get(BASE + p);
    if (!buf) { console.log(`FAILED ${p}`); failed++; continue; }
    const out = path.join(OUT, slugify(p));
    fs.writeFileSync(out, buf);
    console.log(`${slugify(p)}  ${(buf.length / 1024).toFixed(0)}KB`);
    ok++;
  }
  console.log(`\n${ok} downloaded, ${failed} failed → ${OUT}`);
})();
