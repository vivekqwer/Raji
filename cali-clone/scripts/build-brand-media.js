// Copies every scraped brand image into public/images/brands/<slug>/ and writes
// lib/brandMedia.ts — a manifest of { src, width, height } so the premium brand
// page can lay every image out at its true aspect ratio and never crop.
const fs = require("fs");
const path = require("path");

const SRC_ROOT = path.join(__dirname, "..", "..", "client-archives");
const OUT_ROOT = path.join(__dirname, "..", "public", "images", "brands");
const MANIFEST = path.join(__dirname, "..", "lib", "brandMedia.ts");

// scraped folder name -> brand slug used in lib/brands.ts
const FOLDER_TO_SLUG = {
  "mast-masala": "mast-masala",
  intellve: "intellve",
  kunuts: "kunuts",
  salus: "salus",
  monarch: "monarch",
  rapooin: "rapoo",
  rapoome: "rapoo-middle-east",
  "furnishing-home": "furnishing-home",
  "secure-my-shop": "secure-my-shop",
  icici: "icici",
  godrej: "godrej",
};

// Chrome-shared / chart-render assets that are not brand creative.
const SKIP = [
  /^cropped-ChatGPT-Image-Nov-6-2025-05_27_30-PM-1\.png$/,
  /^ChatGPT-Image-Nov-6-2025-03_54_09-PM-1\.png$/,
];

function pngSize(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function jpegSize(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    // SOF0..SOF15 except DHT(c4), JPG(c8), DAC(cc) carry the frame dimensions
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    const len = buf.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

function webpSize(buf) {
  if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return null;
  const fmt = buf.toString("ascii", 12, 16);
  if (fmt === "VP8 ") {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (fmt === "VP8L") {
    const b = buf.readUInt32LE(21);
    return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
  }
  if (fmt === "VP8X") {
    const w = buf[24] | (buf[25] << 8) | (buf[26] << 16);
    const h = buf[27] | (buf[28] << 8) | (buf[29] << 16);
    return { width: w + 1, height: h + 1 };
  }
  return null;
}

function imageSize(file) {
  const buf = fs.readFileSync(file);
  const ext = path.extname(file).toLowerCase();
  if (ext === ".png") return pngSize(buf);
  if (ext === ".jpg" || ext === ".jpeg") return jpegSize(buf);
  if (ext === ".webp") return webpSize(buf);
  return null;
}

function slugifyFile(name) {
  const ext = path.extname(name).toLowerCase();
  const base = path.basename(name, path.extname(name));
  return base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) + ext;
}

const manifest = {};

for (const [folder, slug] of Object.entries(FOLDER_TO_SLUG)) {
  const srcDir = path.join(SRC_ROOT, folder, "images");
  if (!fs.existsSync(srcDir)) { console.log(`skip ${folder} (no images dir)`); continue; }
  const outDir = path.join(OUT_ROOT, slug);
  fs.mkdirSync(outDir, { recursive: true });

  const entries = [];
  for (const name of fs.readdirSync(srcDir)) {
    if (SKIP.some((re) => re.test(name))) continue;
    // -scaled duplicates are the same photo at a smaller size; keep the original only
    if (/-scaled\.(jpg|jpeg|png)$/i.test(name)) continue;
    const srcFile = path.join(srcDir, name);
    if (!fs.statSync(srcFile).isFile()) continue;

    const dims = imageSize(srcFile);
    if (!dims || !dims.width || !dims.height) { console.log(`  ! no dims: ${folder}/${name}`); continue; }
    // Skip tiny icons/favicons
    if (dims.width < 300 && dims.height < 300) continue;

    const outName = slugifyFile(name);
    fs.copyFileSync(srcFile, path.join(outDir, outName));
    entries.push({ src: `/images/brands/${slug}/${outName}`, width: dims.width, height: dims.height });
  }

  // Widest-first so the layout can lead with landscape hero-grade shots
  entries.sort((a, b) => b.width * b.height - a.width * a.height);
  manifest[slug] = entries;
  console.log(`${slug}: ${entries.length} images`);
}

// Some brands' media never came from the WordPress scrape (e.g. Vamas, pulled off
// its own live site by fetch-vamas-media.js). Pick up any brand folder already
// sitting in /public that the loop above didn't write.
for (const slug of fs.readdirSync(OUT_ROOT)) {
  if (manifest[slug]) continue;
  const dir = path.join(OUT_ROOT, slug);
  if (!fs.statSync(dir).isDirectory()) continue;

  const entries = [];
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    if (!fs.statSync(file).isFile()) continue;
    const dims = imageSize(file);
    if (!dims || !dims.width || !dims.height) { console.log(`  ! no dims: ${slug}/${name}`); continue; }
    if (dims.width < 300 && dims.height < 300) continue;
    entries.push({ src: `/images/brands/${slug}/${name}`, width: dims.width, height: dims.height });
  }
  entries.sort((a, b) => b.width * b.height - a.width * a.height);
  manifest[slug] = entries;
  console.log(`${slug}: ${entries.length} images (pre-existing folder)`);
}

const header = `// AUTO-GENERATED by scripts/build-brand-media.js — do not edit by hand.
// Every scraped brand image, copied into /public and measured, so brand pages can
// render each one at its true aspect ratio without cropping.

export type BrandImage = { src: string; width: number; height: number };

export const BRAND_MEDIA: Record<string, BrandImage[]> = ${JSON.stringify(manifest, null, 2)};

export const getBrandMedia = (slug: string): BrandImage[] => BRAND_MEDIA[slug] ?? [];
`;

fs.writeFileSync(MANIFEST, header, "utf8");
console.log(`\nWrote ${MANIFEST}`);
