# -*- coding: utf-8 -*-
# Visual (near-duplicate) dedupe for public/images/brands/<slug>/.
# build-brand-media.js already drops byte-identical copies; this also removes the
# SAME photo saved at a different size/quality/crop (different bytes, same picture)
# using a dHash perceptual fingerprint. Keeps the highest-resolution copy; never
# touches logo files. After running, re-run build-brand-media.js to refresh the manifest.
import os, sys
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "images", "brands")
THRESH = 10  # max Hamming distance — lenient, because we ALSO require same name stem
import re

def stem(name):
    # normalise "hero-2", "952-2", "...-view-3", "pexels-...-2", "...-scaled",
    # "...-300x200" down to a common base so only true size/rename variants match.
    b = re.sub(r"\.\w+$", "", name.lower())
    b = re.sub(r"-scaled$", "", b)
    b = re.sub(r"-\d+x\d+$", "", b)
    b = re.sub(r"-\d+$", "", b)
    return b

def dhash(path, size=8):
    try:
        im = Image.open(path).convert("L").resize((size + 1, size), Image.LANCZOS)
    except Exception:
        return None
    px = list(im.getdata())
    bits = 0
    idx = 0
    for r in range(size):
        row = px[r * (size + 1):(r + 1) * (size + 1)]
        for c in range(size):
            bits = (bits << 1) | (1 if row[c] < row[c + 1] else 0)
            idx += 1
    return bits

def ham(a, b):
    return bin(a ^ b).count("1")

def area(path):
    try:
        with Image.open(path) as im:
            return im.size[0] * im.size[1]
    except Exception:
        return 0

total_removed = 0
for slug in sorted(os.listdir(ROOT)):
    d = os.path.join(ROOT, slug)
    if not os.path.isdir(d):
        continue
    files = [f for f in os.listdir(d)
             if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))
             and "logo" not in f.lower() and not f.lower().startswith("cropped-")]
    hashes = {}
    for f in files:
        h = dhash(os.path.join(d, f))
        if h is not None:
            hashes[f] = h
    kept = []          # list of (file, hash, stem)
    removed = []
    # process largest-first so we keep the highest-res of each duplicate group
    for f in sorted(hashes, key=lambda x: -area(os.path.join(d, x))):
        h = hashes[f]
        st = stem(f)
        # Only treat as a duplicate when the filename stem matches (i.e. it is a
        # -2/-3/-scaled/size variant of a kept file) AND it looks the same.
        # This never removes visually-similar-but-distinct images (e.g. two
        # different product packshots, or Reach vs CTR charts share a layout).
        dup_of = next((kf for kf, kh, ks in kept if ks == st and ham(h, kh) <= THRESH), None)
        if dup_of:
            os.remove(os.path.join(d, f))
            removed.append((f, dup_of))
        else:
            kept.append((f, h, st))
    if removed:
        print(f"{slug}: removed {len(removed)} near-duplicate(s)")
        for f, of in removed:
            print(f"    - {f}  (same as {of})")
        total_removed += len(removed)

print(f"\nTotal near-duplicates removed: {total_removed}")
