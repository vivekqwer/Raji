"use client";
import Image from "next/image";
import { resolveImg } from "@/lib/unsplash";
import { DEFAULT_CONTENT, BenefitsContent } from "@/lib/content";

export default function BenefitsSection({ data = DEFAULT_CONTENT.benefits }: { data?: BenefitsContent }) {
  return (
    <section className="benefits-section">
      <div className="benefits-inner">
        <p className="eyebrow benefits-eyebrow">{data.eyebrow}</p>
        <h2 className="benefits-title">{data.title}</h2>
        <div className="benefits-grid">
          {data.items.map((b) => (
            <div key={b.title} className="benefits-card">
              <div className="benefits-card-img">
                <Image
                  src={resolveImg(b.img, 800)}
                  alt={b.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="benefits-card-text">
                <h3 className="benefits-card-title">{b.title}</h3>
                <p className="benefits-card-body">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="benefits-rating">
          <span className="benefits-rating-num">{data.ratingNum}</span>
          <span className="benefits-rating-label">{data.ratingLabel}</span>
        </div>
      </div>
    </section>
  );
}
