"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
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

export default function BrandSlider({ data }: { data: BrandSliderData }) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const q = (sel: string) => Array.from(el.querySelectorAll<HTMLElement>(sel));

    if (data.style === "wine") {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(q(".bp-slider-eyebrow"), { y: 20, opacity: 0, duration: 0.6 })
        .from(q(".bp-slider-letter"), { y: 60, opacity: 0, duration: 0.7, stagger: 0.03 }, "-=0.3")
        .from(q(".bp-slider-product"), { y: 40, opacity: 0, scale: 0.92, duration: 0.9, ease: "power2.out" }, "-=0.6")
        .from(q(".bp-slider-badge"), { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.6)" }, "-=0.5")
        .from(q(".bp-slider-cta"), { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
        .add(() => {
          // Idle loops start only once the entrance tween is done, so they
          // never fight the entrance tween over the same "y" property.
          gsap.to(q(".bp-slider-product"), { y: -14, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
          gsap.to(q(".bp-slider-badge-ring"), { rotate: 360, duration: 18, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
        });
    } else {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(q(".bp-slider-giant-word"), { opacity: 0, scale: 1.06, duration: 0.9 })
        .from(q(".bp-slider-cutout"), { opacity: 0, y: 30, duration: 0.9, ease: "power2.out" }, "-=0.6")
        .from(q(".bp-slider-script"), { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(q(".bp-slider-body-text"), { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(q(".bp-slider-cta-seasons"), { y: 16, opacity: 0, duration: 0.5 }, "-=0.2")
        .add(() => {
          gsap.to(q(".bp-slider-cutout"), { y: -10, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        });
    }
  }, [data.style]);

  if (data.style === "wine") {
    const letters = data.title.split("").map((ch, i) =>
      ch === " "
        ? <span key={i} className="bp-slider-letter-space">&nbsp;</span>
        : <span key={i} className="bp-slider-letter">{ch}</span>
    );
    return (
      <section
        ref={rootRef as React.RefObject<HTMLElement>}
        className="bp-slider bp-slider--wine"
        style={data.bgImage ? { backgroundImage: `url(${data.bgImage})` } : undefined}
      >
        <div className="bp-slider-veil" />
        <p className="bp-slider-eyebrow">{data.eyebrow}</p>
        {data.productImage && (
          <div className="bp-slider-product-wrap">
            <CircularBadge text={data.badgeText || data.eyebrow} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.productImage} alt="" className="bp-slider-product" />
          </div>
        )}
        <h2 className="bp-slider-wine-title" aria-label={data.title}>{letters}</h2>
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
      style={data.bgImage ? { backgroundImage: `url(${data.bgImage})` } : undefined}
    >
      <div className="bp-slider-veil" />
      <div className="bp-slider-seasons-stage">
        <h2 className="bp-slider-giant-word">{data.title}</h2>
        {data.productImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={data.productImage} alt="" className="bp-slider-cutout" />
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
