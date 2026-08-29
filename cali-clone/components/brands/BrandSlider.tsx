"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { BrandSlider as BrandSliderData } from "@/lib/brand";

/* Rotating circular badge — text looping around a ring, spinning continuously. */
function CircularBadge({ text }: { text: string }) {
  const id = "bp-slider-badge-path";
  const looped = `${text} • ${text} • ${text} • `;
  return (
    <div className="bp-slider-badge" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="bp-slider-badge-ring">
        <defs>
          <path id={id} d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
        </defs>
        <circle cx="100" cy="100" r="98" className="bp-slider-badge-circle" />
        <text className="bp-slider-badge-text">
          <textPath href={`#${id}`} startOffset="0%">{looped}</textPath>
        </text>
      </svg>
      <span className="bp-slider-badge-dot" />
    </div>
  );
}

function Letters({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((ch, i) =>
        ch === " "
          ? <span key={i} className="bp-slider-letter-space">&nbsp;</span>
          : <span key={i} className="bp-slider-letter">{ch}</span>
      )}
    </>
  );
}

export default function BrandSlider({ data }: { data: BrandSliderData }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const isFirstRender = useRef(true);
  const slides = data.slides.length > 0 ? data.slides : [{ title: "", bgImage: "", productImage: "", badgeText: "" }];
  const slide = slides[Math.min(index, slides.length - 1)];

  /* Entrance animation — gated to scroll, so it actually plays when the
     section reaches the viewport instead of finishing off-screen on mount. */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const q = (sel: string) => Array.from(el.querySelectorAll<HTMLElement>(sel));
    const triggers: ScrollTrigger[] = [];

    if (data.style === "wine") {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
      tl.from(q(".bp-slider-frame"), { scale: 0.8, opacity: 0, duration: 0.8, ease: "power2.out" })
        .from(q(".bp-slider-eyebrow"), { y: 20, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(q(".bp-slider-letter"), { y: 60, opacity: 0, duration: 0.7, stagger: 0.03 }, "-=0.3")
        .from(q(".bp-slider-product"), { y: 40, opacity: 0, scale: 0.92, duration: 0.9, ease: "power2.out" }, "-=0.6")
        .from(q(".bp-slider-badge"), { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.6)" }, "-=0.5")
        .from(q(".bp-slider-arrow"), { opacity: 0, duration: 0.4 }, "-=0.4")
        .from(q(".bp-slider-cta"), { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
        .add(() => {
          // Idle loops start only once the entrance tween is done, so they
          // never fight the entrance tween over the same "y" property.
          gsap.to(q(".bp-slider-product"), { y: -14, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
          gsap.to(q(".bp-slider-badge-ring"), { rotate: 360, duration: 18, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
        });
      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
    } else {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
      tl.from(q(".bp-slider-giant-word"), { opacity: 0, scale: 1.06, duration: 0.9 })
        .from(q(".bp-slider-cutout"), { opacity: 0, y: 30, duration: 0.9, ease: "power2.out" }, "-=0.6")
        .from(q(".bp-slider-script"), { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(q(".bp-slider-body-text"), { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(q(".bp-slider-cta-seasons"), { y: 16, opacity: 0, duration: 0.5 }, "-=0.2")
        .add(() => {
          gsap.to(q(".bp-slider-cutout"), { y: -10, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        });
      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);

      // Scroll-linked parallax: the giant word and the cutout image drift at
      // different rates while the section scrolls through view — the core
      // "parallax slider" feel from the 4 Seasons reference.
      const pWord = gsap.to(q(".bp-slider-giant-word"), {
        yPercent: -12, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
      });
      const pCutout = gsap.to(q(".bp-slider-cutout"), {
        yPercent: 14, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
      });
      if (pWord.scrollTrigger) triggers.push(pWord.scrollTrigger);
      if (pCutout.scrollTrigger) triggers.push(pCutout.scrollTrigger);
    }

    return () => triggers.forEach((t) => t.kill());
  }, [data.style]);

  /* Slide-change crossfade — only for navigating between slides (wine style),
     independent of the scroll-gated entrance above. */
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    const content = contentRef.current;
    if (!content) return;
    gsap.fromTo(content, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  }, [index]);

  const goToSlide = (dir: 1 | -1) => {
    const content = contentRef.current;
    const n = slides.length;
    if (n <= 1) return;
    if (content) {
      gsap.to(content, {
        opacity: 0, y: dir * -14, duration: 0.28, ease: "power2.in",
        onComplete: () => setIndex((i) => (i + dir + n) % n),
      });
    } else {
      setIndex((i) => (i + dir + n) % n);
    }
  };

  if (data.style === "wine") {
    return (
      <section
        ref={rootRef as React.RefObject<HTMLElement>}
        className="bp-slider bp-slider--wine"
        style={slide.bgImage ? { backgroundImage: `url(${slide.bgImage})` } : undefined}
      >
        <div className="bp-slider-veil" />
        {slides.length > 1 && (
          <button type="button" className="bp-slider-arrow bp-slider-arrow-left" aria-label="Previous" onClick={() => goToSlide(-1)}>‹</button>
        )}
        {slides.length > 1 && (
          <button type="button" className="bp-slider-arrow bp-slider-arrow-right" aria-label="Next" onClick={() => goToSlide(1)}>›</button>
        )}

        <p className="bp-slider-eyebrow">{data.eyebrow}</p>

        <div className="bp-slider-content" ref={contentRef}>
          <div className="bp-slider-frame" aria-hidden="true" />
          <h2 className="bp-slider-wine-title" aria-label={slide.title}><Letters text={slide.title} /></h2>
          {slide.productImage && (
            <div className="bp-slider-product-wrap">
              <CircularBadge text={slide.badgeText || data.eyebrow} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.productImage} alt="" className="bp-slider-product" />
            </div>
          )}
        </div>

        {data.ctaLabel && (
          <a href={data.ctaHref || "#"} className="bp-slider-cta">{data.ctaLabel}</a>
        )}
      </section>
    );
  }

  return (
    <section
      ref={rootRef as React.RefObject<HTMLElement>}
      className="bp-slider bp-slider--seasons"
      style={slide.bgImage ? { backgroundImage: `url(${slide.bgImage})` } : undefined}
    >
      <div className="bp-slider-veil" />
      <div className="bp-slider-seasons-stage">
        <h2 className="bp-slider-giant-word">{slide.title}</h2>
        {slide.productImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={slide.productImage} alt="" className="bp-slider-cutout" />
        )}
      </div>
      {data.tagline && <p className="bp-slider-script">{data.tagline}</p>}
      {data.body && <p className="bp-slider-body-text">{data.body}</p>}
      {data.ctaLabel && (
        <a href={data.ctaHref || "#"} className="bp-slider-cta-seasons">{data.ctaLabel}</a>
      )}
    </section>
  );
}
