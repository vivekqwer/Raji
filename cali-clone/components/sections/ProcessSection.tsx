"use client";
import Image from "next/image";
import { resolveImg } from "@/lib/unsplash";
import { DEFAULT_CONTENT, ProcessContent } from "@/lib/content";

export default function ProcessSection({ data = DEFAULT_CONTENT.process }: { data?: ProcessContent }) {
  return (
    <section className="process-section">
      <div className="process-inner">
        <p className="eyebrow process-eyebrow">{data.eyebrow}</p>
        <h2 className="process-title">{data.title}</h2>
        <div className="process-grid">
          {data.steps.map((s) => (
            <div key={s.no} className="process-step">
              <div className="process-step-head">
                <div className="process-step-img">
                  <Image
                    src={resolveImg(s.img, 240)}
                    alt=""
                    fill
                    sizes="80px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="process-step-no">{s.no}</span>
              </div>
              <h3 className="process-step-title">{s.title}</h3>
              <p className="process-step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
