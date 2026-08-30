// NOTE: this file is imported by client components, so it must stay
// dependency-free (no "fs"). Server-only read/write lives in content.server.ts.

// ---------- Types ----------
export type HeroAction = { label: string; href: string; style: "primary" | "outline" | "ghost" };

export type HeroContent = {
  bgVideo: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  sub: string;
  actions: HeroAction[];
};

export type ApproachStat = { num: string; label: string };
export type ApproachContent = {
  eyebrow: string;
  title: string;
  body: string;
  stats: ApproachStat[];
  image: string;
};

export type StatItem = { target: number; decimals: number; suffix: string; label: string };
export type StatsContent = { title: string; items: StatItem[] };

export type FaqItem = { q: string; a: string };
export type FaqContent = { eyebrow: string; title: string; items: FaqItem[] };

export type Testimonial = { name: string; role: string; quote: string; avatar: string };
export type TestimonialsContent = { eyebrow: string; title: string; items: Testimonial[] };

export type ClientLogosContent = { caption: string; names: string[] };
export type QuoteBandContent = { quotes: string[] };

export type ImageCard = { title: string; body: string; img: string };
export type EdgeContent = { eyebrow: string; title: string; pillars: ImageCard[]; subCards: ImageCard[] };
export type ServiceCard = { no: string; label: string; title: string; body: string; img: string };
export type ServicesParallaxContent = { eyebrow: string; title: string; cards: ServiceCard[] };
export type ProcessStep = { no: string; title: string; body: string; img: string };
export type ProcessContent = { eyebrow: string; title: string; steps: ProcessStep[] };
export type ImpactCard = { title: string; body: string };
export type ImpactFlipContent = { title: string; image: string; cards: ImpactCard[] };
export type BenefitCard = { title: string; body: string; img: string };
export type BenefitsContent = { eyebrow: string; title: string; items: BenefitCard[]; ratingNum: string; ratingLabel: string };
export type FanCard = { no: string; label: string; title: string; img: string };
export type CardsFanContent = { title: string; cards: FanCard[] };
export type FreebieContent = { image: string };

export type SiteContent = {
  hero: HeroContent;
  approach: ApproachContent;
  stats: StatsContent;
  faq: FaqContent;
  testimonials: TestimonialsContent;
  clientLogos: ClientLogosContent;
  quoteBand: QuoteBandContent;
  edge: EdgeContent;
  servicesParallax: ServicesParallaxContent;
  process: ProcessContent;
  impactFlip: ImpactFlipContent;
  benefits: BenefitsContent;
  cardsFan: CardsFanContent;
  freebie: FreebieContent;
};

// ---------- Defaults (current live values — site looks identical until edited) ----------
export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    bgVideo:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4",
    eyebrow: "CLIENT SERVICING · SOCIAL MEDIA STRATEGY · CONTENT",
    title: "Growing Brands Through",
    titleAccent: "Steady Client Partnerships and Smart Social Media",
    sub: "I sit at the intersection of client servicing and content — keeping communication clear, campaigns on track, and social media working hard for the brands I manage.",
    actions: [
      { label: "See My Work", href: "#services", style: "primary" },
      { label: "Start a Conversation", href: "#contact", style: "ghost" },
      { label: "Resume", href: "#resume", style: "outline" },
    ],
  },
  approach: {
    eyebrow: "my approach",
    title: "A Simple Way of Working That Actually Delivers",
    body: "I keep things straightforward: understand the client's goals first, stay close and responsive throughout, and let strategy and content follow from that relationship. Years of agency work taught me that a well-serviced client and a well-planned calendar go hand in hand.",
    stats: [
      { num: "50+", label: "Projects Delivered" },
      { num: "3+", label: "Years in the Field" },
    ],
    image: "/images/raji-portrait.jpg",
  },
  stats: {
    title: "Enhance Your Digital Impact with My Expertise",
    items: [
      { target: 50, decimals: 0, suffix: "+", label: "Completed Projects" },
      { target: 40, decimals: 0, suffix: "+", label: "Happy Clients" },
      { target: 3, decimals: 0, suffix: "+", label: "Years Experience" },
      { target: 4.5, decimals: 1, suffix: "/5", label: "Client Ratings" },
    ],
  },
  faq: {
    eyebrow: "faqs",
    title:
      "Still have Qs? Here's what most clients ask before we start working together.",
    items: [
      { q: "What exactly do you handle?", a: "Client servicing, strategy, content, community replies, and monthly reporting — I'm the single point of contact managing it all." },
      { q: "Do you offer a free first call?", a: "Yes — a relaxed 30-minute call to talk through your goals, no strings attached." },
      { q: "Is this customised to my business?", a: "Always. The plan and the way I service the account are shaped around your industry, budget and goals." },
      { q: "How soon will I see movement?", a: "Small shifts in engagement usually show within a few weeks; real growth builds over a couple of months." },
      { q: "What happens after the first month?", a: "Ongoing servicing continues — regular check-ins, reporting and tweaks as we learn what works." },
      { q: "How do we start?", a: "Send a message or book a call, and we'll take it from there." },
    ],
  },
  testimonials: {
    eyebrow: "client love",
    title: "Client Feedback & Reviews",
    items: [
      { name: "Priya Sharma", role: "Marketing Head, Rapoo", quote: "Their understanding of Indian festivals and cultural moments is exceptional. Every Diwali, Holi, and Navratri campaign feels authentic and resonates with our customers beautifully. They've helped us build a genuine connection with our audience through thoughtful content. Working with them has been an absolute pleasure!", avatar: "photo-1494790108377-be9c29b29330" },
      { name: "Pratik Jain", role: "Founder, Pratik", quote: "What impressed me most is their quick response time and understanding of our needs. They never miss deadlines and always keep us informed about campaign progress. Their content strikes the perfect balance between informative and engaging. Parents trust our brand more now, thanks to their professional approach!", avatar: "photo-1488426862026-3ee34a7d66df" },
      { name: "Sneha Desai", role: "Marketing Head, NBG", quote: "They brought fresh creative ideas to our wellness brand. From beautiful photography to calming reels, everything they create aligns perfectly with our brand identity. Their ability to create content in regional languages helped us connect with local communities. Patient, professional, and genuinely passionate about our success!", avatar: "photo-1573497019940-1c28c88b4f3e" },
      { name: "Vikram Singh Rathore", role: "Social Media Head", quote: "They understood our vision of showcasing traditional craftsmanship to modern audiences. Their storytelling approach made our artisan stories come alive on social media. International clients often mention discovering us through Instagram. They've given our heritage brand a contemporary voice without losing its soul. Truly grateful!", avatar: "photo-1517841905240-472988babdf9" },
      { name: "Amish Doshi", role: "COO, Furnishing Home", quote: "Our social media presence has improved significantly since working with this social media manager. From content planning to consistent posting and engagement, everything is handled professionally. The strategies are well thought out and results-driven.", avatar: "photo-1438761681033-6461ffad8d80" },
      { name: "Aayush Agarwal", role: "COO, Intellve", quote: "Highly creative and reliable. The social media manager understands our brand voice perfectly and creates content that actually connects with the audience. We've seen better engagement, reach, and overall brand visibility.", avatar: "photo-1544005313-94ddf0286df2" },
      { name: "Hiralkumar Patel", role: "COO, Kunuts", quote: "A very dedicated and proactive social media manager. From reels to captions and analytics, everything is managed smoothly. Timely communication and a clear understanding of trends make working together effortless.", avatar: "photo-1554151228-14d9def656e4" },
    ],
  },
  clientLogos: {
    caption: "Join over 50+ businesses to create unique brand designs.",
    names: ["Intelleve", "Monarch", "Godrej", "Rapoo", "NBG", "Kunuts", "Furnishing Home", "Pratik", "Studio One", "Tribe Co", "House of Hue", "Aurora Labs", "North Star", "Verve Studio"],
  },
  quoteBand: {
    quotes: [
      "A client should never have to chase you for an update.",
      "Good content comes easier when the client relationship is already solid.",
    ],
  },
  edge: {
    eyebrow: "my edge",
    title: "Client Relationships That Last · Content People Notice · Ads That Perform",
    pillars: [
      { title: "Client Communication & Coordination", body: "Being the reliable point of contact — managing expectations, timelines and approvals without back-and-forth confusion.", img: "photo-1573496359142-b8d87734a5a2" },
      { title: "Planning & Content Calendars", body: "A monthly rhythm mapped to what your audience actually responds to, agreed on with the client upfront.", img: "photo-1517245386807-bb43f82c33c4" },
      { title: "Paid Campaigns & Reporting", body: "Ad spend directed toward outcomes that matter to the business, reported back in plain language.", img: "photo-1551434678-e076c223a692" },
      { title: "Growing an Audience That Sticks", body: "Slow, real community-building that turns casual scrollers into people who actually care about the brand.", img: "photo-1522071820081-009f0129c71c" },
    ],
    subCards: [
      { title: "Copy & Visuals With a Point of View", body: "Writing and creative that sound like the brand and give people a reason to stop scrolling.", img: "photo-1541746972996-4e0b0f43e02a" },
      { title: "Showing Up Reliably", body: "Clients and audiences both get consistency — nothing falls through the cracks.", img: "photo-1497366754035-f200968a6e72" },
    ],
  },
  servicesParallax: {
    eyebrow: "what i do",
    title: "Where Client Servicing Meets Social Media That Works",
    cards: [
      { no: "01", label: "service one", title: "Client Servicing", body: "Acting as the day-to-day link between the client and the work — managing briefs, timelines, approvals and expectations so nothing gets lost in translation.", img: "photo-1552664730-d307ca884978" },
      { no: "02", label: "service two", title: "Full Social Media Management", body: "Ownership of accounts end to end — calendars, scheduling, daily upkeep — while keeping the brand voice consistent everywhere it shows up.", img: "photo-1531973576160-7125cd663d86" },
      { no: "03", label: "service three", title: "Content Creation & Writing", body: "Posts, captions, reels and stories built to actually get watched, not just posted — grounded in what the audience engages with.", img: "photo-1553877522-43269d4ea984" },
      { no: "04", label: "service four", title: "Community & Engagement", body: "Replying, listening and showing up in comments and DMs so the audience feels heard, not ignored.", img: "photo-1521737711867-e3b97375f902" },
      { no: "05", label: "service five", title: "Reporting & Insights", body: "Straightforward monthly reports for clients that explain what worked, what didn't, and what's next.", img: "photo-1497215728101-856f4ea42174" },
    ],
  },
  process: {
    eyebrow: "how we work",
    title: "How We Work Together",
    steps: [
      { no: "01", title: "A No-Pressure First Chat", body: "We talk through where the brand stands today, what the client needs, and where it should go.", img: "photo-1600880292203-757bb62b4baf" },
      { no: "02", title: "Fast, Direct Communication", body: "Client questions get answered quickly — no waiting days for a reply.", img: "photo-1600880292089-90a7e086ee0c" },
      { no: "03", title: "A Plan Built Around You", body: "A calendar and campaign outline shaped by client goals, not a generic template.", img: "photo-1519389950473-47ba0277781c" },
      { no: "04", title: "Nothing Goes Live Without Sign-Off", body: "The client sees and approves content before it's posted, every time.", img: "photo-1497366811353-6870744d04b2" },
    ],
  },
  impactFlip: {
    title: "How I Create Impact",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=80&auto=format&fit=crop",
    cards: [
      { title: "Client Relationships Built on Trust", body: "Regular check-ins and honest updates that keep clients confident in the work." },
      { title: "Content With Direction", body: "Every piece of content has a job to do, backed by what the data says is working." },
      { title: "Numbers That Guide Decisions", body: "Performance data isn't just reported to clients — it shapes what we do next." },
    ],
  },
  benefits: {
    eyebrow: "why partner with me",
    title: "A Partner Who Stays Close to the Work — and to You.",
    items: [
      { title: "You'll Always Know What's Happening", body: "Regular, honest updates — no chasing me for information.", img: "photo-1586023492125-27b2c045efd7" },
      { title: "A Dependable Point of Contact", body: "One person managing the relationship end to end, so nothing gets miscommunicated.", img: "photo-1600607687939-ce8a6c25118c" },
      { title: "A Strategy That Grows With You", body: "As the business changes, the approach and the servicing adjust with it.", img: "photo-1618221195710-dd6b41faaea6" },
      { title: "Support You Can Count On", body: "I'm reachable and responsive well beyond the standard handover.", img: "photo-1567016432779-094069958ea5" },
    ],
    ratingNum: "4.5+",
    ratingLabel: "Client Ratings",
  },
  cardsFan: {
    title: "Five things, done well.",
    cards: [
      { no: "01", label: "service one", title: "Client Servicing", img: "photo-1524758631624-e2822e304c36" },
      { no: "02", label: "service two", title: "Social Media", img: "photo-1557682250-33bd709cbe85" },
      { no: "03", label: "service three", title: "Content Writing", img: "photo-1618005182384-a83a8bd57fbe" },
      { no: "04", label: "service four", title: "Community", img: "photo-1579546929518-9e396f3cc809" },
      { no: "05", label: "service five", title: "Reporting", img: "photo-1626785774573-4b799315345d" },
    ],
  },
  freebie: {
    image: "/images/raji-library.png",
  },
};

