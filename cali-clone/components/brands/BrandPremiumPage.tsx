"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { Brand } from "@/lib/brands";
import { getBrandMedia, type BrandImage } from "@/lib/brandMedia";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

const ratio = (i: BrandImage) => i.width / i.height;

export default function BrandPremiumPage({ data }: { data: Brand }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const media = useMemo(() => getBrandMedia(data.slug), [data.slug]);

  /* Nothing on this page is ever cropped: the hero carries no background photo,
     and every image below renders at its own intrinsic aspect ratio.
     The scraped media splits three ways — the analytics chart exports get their
     own performance section, the widest creative leads as full-width showcases,
     and the rest flows into a masonry gallery. */
  const { charts, showcase, gallery } = useMemo(() => {
    const isChart = (m: BrandImage) =>
      /(reach-growth|engagement|ctr|retention|impress|click|analytic)/i.test(m.src);
    const isLogo = (m: BrandImage) => /(^|\/)(logo|cropped-)/i.test(m.src);

    const chartImgs = media.filter(isChart);
    const creative = media.filter((m) => !isChart(m) && !isLogo(m));
    const wide = creative.filter((m) => ratio(m) >= 1.2).slice(0, 2);
    return {
      charts: chartImgs,
      showcase: wide,
      gallery: creative.filter((m) => !wide.some((w) => w.src === m.src)),
    };
  }, [media]);

  /* ── Hero entrance ─────────────────────────────────── */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(el.querySelectorAll(".sp-hero-kicker"), { y: 16, opacity: 0, duration: 0.7 })
      .from(el.querySelectorAll(".sp-hero-word"), { y: 60, opacity: 0, duration: 0.9, stagger: 0.05 }, "-=0.4")
      .from(el.querySelectorAll(".sp-hero-line"), { scaleX: 0, transformOrigin: "left center", duration: 0.7 }, "-=0.4")
      .from(el.querySelectorAll(".sp-hero-tagline"), { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
      .from(el.querySelectorAll(".sp-hero-tags .sp-tag"), { y: 14, opacity: 0, duration: 0.5, stagger: 0.07 }, "-=0.3")
      .from(el.querySelectorAll(".sp-hero-scroll"), { opacity: 0, duration: 0.6 }, "-=0.2");
  }, []);

  /* ── Scroll reveals ────────────────────────────────── */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const triggers: ScrollTrigger[] = [];
    targets.forEach((t) => {
      const tw = gsap.from(t, {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: t, start: "top 85%" },
      });
      if (tw.scrollTrigger) triggers.push(tw.scrollTrigger);
    });
    return () => triggers.forEach((t) => t.kill());
  }, [media]);

  /* ── Stat count-up ─────────────────────────────────── */
  const statsWrapRef = useRef<HTMLDivElement | null>(null);
  const [vals, setVals] = useState(data.stats.map(() => 0));
  const started = useRef(false);

  useEffect(() => {
    const el = statsWrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const DURATION = 1600;
          const tick = (now: number) => {
            const p = Math.min((now - t0) / DURATION, 1);
            const eased = easeOutExpo(p);
            setVals(data.stats.map((s) => parseFloat((s.raw * eased).toFixed(s.decimals))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [data.stats]);

  const pal = data.palette;

  return (
    <main
      className="brand-premium"
      ref={rootRef}
      style={{
        "--bpx-primary": pal.primary,
        "--bpx-accent": pal.accent,
      } as React.CSSProperties}
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="sp-hero">
        <div className="sp-hero-glow" aria-hidden="true" />
        <div className="sp-hero-inner">
          {data.logo && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={data.logo} alt={data.name} className="sp-hero-logo" />
          )}
          <p className="sp-hero-kicker">{data.hero.eyebrow}</p>
          <h1 className="sp-hero-title" aria-label={data.name}>
            {data.name.split("").map((ch, i) => (
              <span key={i} className="sp-hero-word">{ch === " " ? " " : ch}</span>
            ))}
          </h1>
          <div className="sp-hero-line" />
          <p className="sp-hero-tagline">{data.hero.tagline}</p>
          <div className="sp-hero-tags">
            {data.hero.tags.map((t) => <span key={t} className="sp-tag">{t}</span>)}
          </div>
        </div>
        <div className="sp-hero-scroll">Scroll</div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="sp-stats" ref={statsWrapRef}>
        <div className="sp-stats-inner">
          {data.stats.map((s, i) => (
            <div key={s.label} className="sp-stat" data-reveal>
              <span className="sp-stat-num">{vals[i].toFixed(s.decimals)}{s.suffix}</span>
              <span className="sp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section className="sp-story">
        <div className="sp-story-grid">
          <div className="sp-story-num" data-reveal>
            <span>{data.story.bigNum}</span>
          </div>
          <div className="sp-story-text" data-reveal>
            <p className="sp-eyebrow">The Brand</p>
            <h2>{data.story.title}</h2>
            <p className="sp-story-body">{data.story.body}</p>
          </div>
        </div>
      </section>

      {/* ── Showcase: full images, uncropped, alternating ── */}
      {showcase.length > 0 && (
        <section className="sp-showcase">
          {showcase.map((img, i) => (
            <figure key={img.src} className="sp-showcase-item" data-reveal>
              <Image src={img.src} alt={`${data.name} creative`} width={img.width} height={img.height} sizes="(max-width:900px) 100vw, 90vw" />
              <figcaption>{i === 0 ? "Creative direction" : "Campaign work"}</figcaption>
            </figure>
          ))}
        </section>
      )}

      {/* ── Growth: the real analytics exports, in their own section ── */}
      {charts.length > 0 && (
        <section className="sp-growth">
          <p className="sp-eyebrow sp-center" data-reveal>Performance</p>
          <h2 className="sp-center sp-growth-heading" data-reveal>Growth, in <em>numbers</em></h2>
          <div className="sp-growth-grid">
            {charts.map((img) => (
              <figure key={img.src} className="sp-growth-card" data-reveal>
                <Image src={img.src} alt={`${data.name} performance chart`} width={img.width} height={img.height} sizes="(max-width:900px) 100vw, 50vw" />
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ── Approach ─────────────────────────────────────── */}
      <section className="sp-approach">
        <p className="sp-eyebrow sp-center" data-reveal>{data.approach.eyebrow}</p>
        <h2 className="sp-approach-heading sp-center" data-reveal dangerouslySetInnerHTML={{ __html: data.approach.heading }} />
        <div className="sp-approach-list">
          {data.approach.items.map((item, i) => (
            <div key={item.num} className={`sp-approach-item${i % 2 === 1 ? " sp-approach-item--reverse" : ""}`} data-reveal>
              <span className="sp-approach-num">{item.num}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery — masonry columns, every image full & uncropped ── */}
      {gallery.length > 0 && (
        <section className="sp-gallery">
          <p className="sp-eyebrow sp-center" data-reveal>{data.gallery.title}</p>
          <div className="sp-gallery-masonry">
            {gallery.map((img) => (
              <figure key={img.src} className="sp-gallery-item" data-reveal>
                <Image
                  src={img.src}
                  alt={`${data.name} creative`}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width:640px) 100vw, (max-width:1100px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ── Delivered ────────────────────────────────────── */}
      <section className="sp-delivered">
        <p className="sp-eyebrow sp-center" data-reveal>{data.delivered.eyebrow}</p>
        <h2 className="sp-center" data-reveal dangerouslySetInnerHTML={{ __html: data.delivered.heading }} />
        <div className="sp-delivered-grid">
          {data.delivered.cards.map((c, i) => (
            <div key={i} className="sp-delivered-card" data-reveal>
              <span className="sp-delivered-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
          {data.workDone.bullets.length > 0 && (
            <div className="sp-delivered-card sp-delivered-card--list" data-reveal>
              <span className="sp-delivered-num">{String(data.delivered.cards.length + 1).padStart(2, "0")}</span>
              <h3>{data.workDone.title}</h3>
              <ul>{data.workDone.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="sp-cta">
        <p className="sp-cta-sub" data-reveal>{data.cta.sub}</p>
        <Link href={data.cta.href} className="sp-cta-btn" data-reveal>{data.cta.label}</Link>
      </section>
    </main>
  );
}
