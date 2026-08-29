"use client";
import { DEFAULT_CONTENT, ClientLogosContent } from "@/lib/content";

export default function ClientLogoMarquee({ data = DEFAULT_CONTENT.clientLogos }: { data?: ClientLogosContent }) {
  const names = data.names;
  return (
    <section className="clm-section">
      <p className="clm-caption">{data.caption}</p>
      <div className="clm-viewport">
        <div className="clm-track">
          {[...names, ...names].map((name, i) => (
            <span key={`${name}-${i}`} className="clm-item">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
