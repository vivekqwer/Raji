"use client";
import { DEFAULT_CONTENT, ClientLogosContent } from "@/lib/content";

export default function ClientLogoMarquee({ data = DEFAULT_CONTENT.clientLogos }: { data?: ClientLogosContent }) {
  const logos = data.logos ?? DEFAULT_CONTENT.clientLogos.logos;
  const names = data.names;
  const hasLogos = logos && logos.length > 0;

  return (
    <section className="clm-section">
      <p className="clm-caption">{data.caption}</p>
      <div className="clm-viewport">
        {hasLogos ? (
          <div className="clm-track">
            {[...logos, ...logos].map((l, i) => (
              <span key={`${l.name}-${i}`} className="clm-logo-chip" title={l.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.name} className="clm-logo-img" loading="lazy" />
              </span>
            ))}
          </div>
        ) : (
          <div className="clm-track">
            {[...names, ...names].map((name, i) => (
              <span key={`${name}-${i}`} className="clm-item">
                {name}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
