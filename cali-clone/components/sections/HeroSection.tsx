"use client";
import BoomerangVideoBg from "./BoomerangVideoBg";
import { DEFAULT_CONTENT, HeroContent } from "@/lib/content";

const styleClass: Record<string, string> = {
  primary: "hero-boom-btn-primary",
  outline: "hero-boom-btn-outline",
  ghost: "hero-boom-btn-ghost",
};

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="hero-boom-handshake-icon">
      <path d="M8.5 12.5 5 9a2 2 0 0 0-2.8 0l-.7.7a2 2 0 0 0 0 2.8l5 5a3 3 0 0 0 4.2 0l.3-.3" />
      <path d="M15.5 12.5 19 9a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8l-5 5a3 3 0 0 1-4.2 0l-1.8-1.8a1.5 1.5 0 0 1 0-2.1v0a1.5 1.5 0 0 1 2.1 0l1.3 1.3" />
      <path d="M9 12l3-3 2.5 2.5" />
    </svg>
  );
}

export default function HeroSection({ data = DEFAULT_CONTENT.hero }: { data?: HeroContent }) {
  return (
    <section className="hero-boom">
      <BoomerangVideoBg src={data.bgVideo} className="hero-boom-bg" />
      <div className="hero-boom-veil" />

      <div className="hero-boom-copy">
        <p className="hero-boom-eyebrow">{data.eyebrow}</p>
        <h1 className="hero-boom-title">
          {data.title}{" "}
          <span className="hero-boom-accent">{data.titleAccent}</span>
        </h1>
        <p className="hero-boom-sub">{data.sub}</p>
        <div className="hero-boom-actions">
          {data.actions.map((a, i) =>
            /collaborate/i.test(a.label) ? (
              <a key={i} href={a.href} className="hero-boom-btn-icon" aria-label={a.label}>
                <HandshakeIcon />
                <span className="hero-boom-btn-icon-label">{a.label}</span>
              </a>
            ) : (
              <a key={i} href={a.href} className={styleClass[a.style] || "hero-boom-btn-ghost"}>
                {a.label}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
