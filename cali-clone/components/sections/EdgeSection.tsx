"use client";
import Image from "next/image";
import { resolveImg } from "@/lib/unsplash";
import { DEFAULT_CONTENT, EdgeContent } from "@/lib/content";

export default function EdgeSection({ data = DEFAULT_CONTENT.edge }: { data?: EdgeContent }) {
  return (
    <section className="edge-section">
      <div className="edge-inner">
        <p className="eyebrow edge-eyebrow">{data.eyebrow}</p>
        <h2 className="edge-title">{data.title}</h2>

        <div className="edge-grid">
          {data.pillars.map((p) => (
            <div key={p.title} className="edge-pillar">
              <div className="edge-pillar-img">
                <Image
                  src={resolveImg(p.img, 240)}
                  alt=""
                  fill
                  sizes="56px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="edge-pillar-title">{p.title}</h3>
              <p className="edge-pillar-body">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="edge-sub-grid">
          {data.subCards.map((c) => (
            <div key={c.title} className="edge-sub-card">
              <div className="edge-sub-img">
                <Image
                  src={resolveImg(c.img, 800)}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 320px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="edge-sub-text">
                <h4 className="edge-sub-title">{c.title}</h4>
                <p className="edge-sub-body">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
