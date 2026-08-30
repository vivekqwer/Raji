"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { resolveImg } from "@/lib/unsplash";
import { DEFAULT_CONTENT, ServicesParallaxContent } from "@/lib/content";

export default function ServicesParallax({ data = DEFAULT_CONTENT.servicesParallax }: { data?: ServicesParallaxContent }) {
  const CARDS = data.cards;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".pcard"));
    if (cards.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      cards.forEach((card, i) => {
        gsap.set(card, {
          y: i * 12,
          scale: 1 - i * 0.04,
          zIndex: cards.length - i,
          opacity: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: `+=${cards.length * 90}%`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power2.inOut" },
      });

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        tl.to(
          card,
          {
            yPercent: -120,
            opacity: 0,
            duration: 1,
          },
          i
        );
        cards.forEach((other, j) => {
          if (j > i && j <= cards.length - 1) {
            tl.to(
              other,
              {
                y: (j - i - 1) * 12,
                scale: 1 - (j - i - 1) * 0.04,
                duration: 1,
              },
              i
            );
          }
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    mm.add("(max-width: 767px)", () => {
      cards.forEach((card) => {
        gsap.set(card, { clearProps: "all" });
      });
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.from(card, { y: 40, opacity: 0, duration: 0.6, ease: "power3.out" });
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="services-parallax">
      <div className="services-parallax-head">
        <p className="eyebrow">{data.eyebrow}</p>
        <h2>{data.title}</h2>
      </div>
      <div className="services-parallax-stack">
        {CARDS.map((c) => (
          <article key={c.no} className="pcard">
            <div className="pcard-img-wrap">
              <div className="pcard-img">
                <Image
                  src={resolveImg(c.img, 1800)}
                  alt={c.title}
                  fill
                  sizes="(max-width: 767px) 92vw, 96vw"
                  priority={c.no === "01"}
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </div>
              <div className="pcard-overlay" />
            </div>
            <div className="pcard-text">
              <span className="pcard-no">{c.no}</span>
              <span className="pcard-label">{c.label}</span>
              <h3 className="pcard-title">{c.title}</h3>
              <p className="pcard-body">{c.body}</p>
              <span className="pcard-arrow">learn more →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
