import { CONTENT_FILE, readJson, writeJson } from "@/lib/storage";
import { DEFAULT_CONTENT, SiteContent } from "@/lib/content";

// Shallow-merge stored sections over defaults so newly-added schema keys never break.
export async function getContent(): Promise<SiteContent> {
  const stored = await readJson<Partial<SiteContent>>(CONTENT_FILE);
  if (!stored) return DEFAULT_CONTENT;
  return {
    hero: { ...DEFAULT_CONTENT.hero, ...stored.hero },
    approach: { ...DEFAULT_CONTENT.approach, ...stored.approach },
    stats: { ...DEFAULT_CONTENT.stats, ...stored.stats },
    faq: { ...DEFAULT_CONTENT.faq, ...stored.faq },
    testimonials: { ...DEFAULT_CONTENT.testimonials, ...stored.testimonials },
    clientLogos: { ...DEFAULT_CONTENT.clientLogos, ...stored.clientLogos },
    quoteBand: { ...DEFAULT_CONTENT.quoteBand, ...stored.quoteBand },
    edge: { ...DEFAULT_CONTENT.edge, ...stored.edge },
    servicesParallax: { ...DEFAULT_CONTENT.servicesParallax, ...stored.servicesParallax },
    process: { ...DEFAULT_CONTENT.process, ...stored.process },
    impactFlip: { ...DEFAULT_CONTENT.impactFlip, ...stored.impactFlip },
    benefits: { ...DEFAULT_CONTENT.benefits, ...stored.benefits },
    cardsFan: { ...DEFAULT_CONTENT.cardsFan, ...stored.cardsFan },
    freebie: { ...DEFAULT_CONTENT.freebie, ...stored.freebie },
  };
}

export async function saveContent(content: SiteContent) {
  await writeJson(CONTENT_FILE, content);
}
