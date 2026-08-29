"use client";
import { DEFAULT_CONTENT, QuoteBandContent } from "@/lib/content";

export default function QuoteBand({ data = DEFAULT_CONTENT.quoteBand }: { data?: QuoteBandContent }) {
  return (
    <section className="quote-band">
      <div className="quote-band-inner">
        {data.quotes.map((q, i) => (
          <blockquote key={i} className="quote-band-item">
            <span className="quote-band-mark">&ldquo;</span>
            {q}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
