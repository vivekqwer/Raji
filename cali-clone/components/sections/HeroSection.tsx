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
    <svg viewBox="1 15 62 38" width="34" height="21" className="hero-boom-handshake-icon" aria-hidden="true">
      {/* cuffs */}
      <rect x="4" y="24" width="11" height="20" rx="2.5" fill="#3aa7c4" stroke="#0d2a52" strokeWidth="2" />
      <rect x="49" y="24" width="11" height="20" rx="2.5" fill="#6fd0d6" stroke="#0d2a52" strokeWidth="2" />
      {/* back hand (reddish) */}
      <path d="M35 22c3-3 7-3 10 0l9 8.5c1.6 1.5 1.6 3.9 0 5.4-1.5 1.4-3.9 1.4-5.4 0l-4.4-4.1"
        fill="#c1614c" stroke="#0d2a52" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {/* front hand (tan) */}
      <path d="M29 22c-3-3-7-3-10 0l-9 8.5c-1.6 1.5-1.6 3.9 0 5.4 1.5 1.4 3.9 1.4 5.4 0l2.3-2.1"
        fill="#f2b686" stroke="#0d2a52" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {/* clasped fingers */}
      <path d="M17.5 35.5c-1.3 1.4-1.3 3.6 0 5l7 7c1.6 1.6 4.2 1.6 5.8 0 1.4-1.4 1.4-3.6 0-5"
        fill="#f2b686" stroke="#0d2a52" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M25.5 42.5c1.3-1.3 3.5-1.3 4.8 0 1.3 1.3 1.3 3.5 0 4.8"
        fill="none" stroke="#0d2a52" strokeWidth="2" strokeLinecap="round" />
      <path d="M20.5 39c1.1-1.1 3-1.1 4.1 0M23 41.5c1.1-1.1 3-1.1 4.1 0"
        fill="none" stroke="#0d2a52" strokeWidth="1.6" strokeLinecap="round" />
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
