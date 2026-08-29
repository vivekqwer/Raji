import HeroSection from "@/components/sections/HeroSection";
import ClientLogoMarquee from "@/components/sections/ClientLogoMarquee";
import ApproachSection from "@/components/sections/ApproachSection";
import QuoteBand from "@/components/sections/QuoteBand";
import EdgeSection from "@/components/sections/EdgeSection";
import StatsSectionV2 from "@/components/sections/StatsSectionV2";
import ServicesParallax from "@/components/sections/ServicesParallax";
import ProcessSection from "@/components/sections/ProcessSection";
import ImpactFlip from "@/components/sections/ImpactFlip";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CardsFan from "@/components/sections/CardsFan";
import ClientLoveSection from "@/components/sections/ClientLoveSection";
import FAQSection from "@/components/sections/FAQSection";
import FreebieSection from "@/components/sections/FreebieSection";
import { getContent } from "@/lib/content.server";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const content = await getContent();
  return (
    <main>
      <HeroSection data={content.hero} />
      <ClientLogoMarquee data={content.clientLogos} />
      <ApproachSection data={content.approach} />
      <QuoteBand data={content.quoteBand} />
      <EdgeSection data={content.edge} />
      <StatsSectionV2 data={content.stats} />
      <ServicesParallax data={content.servicesParallax} />
      <ProcessSection data={content.process} />
      <ImpactFlip theme="cream" data={content.impactFlip} />
      <BenefitsSection data={content.benefits} />
      <CardsFan data={content.cardsFan} />
      <ClientLoveSection data={content.testimonials} />
      <FAQSection data={content.faq} />
      <FreebieSection data={content.freebie} />
    </main>
  );
}
