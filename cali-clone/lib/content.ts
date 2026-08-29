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
    eyebrow: "SOCIAL MEDIA STRATEGIST",
    title: "Transforming Brands Through",
    titleAccent: "Strategic Social Media Excellence",
    sub: "Social media professional with proven expertise in managing and growing brand presence across diverse digital platforms. Specialized in content creation, community engagement, influencer collaborations, and leveraging analytics to optimize performance and drive measurable growth. I combine strategic planning with creative execution to build meaningful connections between brands and their audiences.",
    actions: [
      { label: "View My Work", href: "#services", style: "primary" },
      { label: "Let's Collaborate", href: "#contact", style: "ghost" },
      { label: "Resume", href: "#resume", style: "outline" },
    ],
  },
  approach: {
    eyebrow: "my approach",
    title: "Building Digital Communities That Drive Real Results",
    body: "My approach to social media management is rooted in three core principles: strategic thinking, authentic storytelling, and consistent execution. With hands-on agency experience managing diverse portfolios from food & beverage brands to digital marketing agencies, I've developed a methodology that balances creative expression with data-driven decision making.",
    stats: [
      { num: "50+", label: "Completed Projects" },
      { num: "3+", label: "Years Experience" },
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
      "Still have Qs? Find answers to common questions about our products, hosting, domains, and support.",
    items: [
      { q: "What social media services do you offer?", a: "I provide comprehensive social media management including strategic planning, content creation and curation, community engagement, influencer collaboration coordination, analytics tracking, and detailed monthly reporting. I manage accounts across Instagram, Facebook, LinkedIn, YouTube, Twitter, and other platforms based on your specific business needs and target audience preferences." },
      { q: "How can social media management help my business?", a: "Strategic social media management increases brand awareness, builds authentic customer relationships, drives website traffic, generates quality leads, and ultimately boosts sales. Through consistent posting, genuine community engagement, and data-driven optimization, I help businesses achieve measurable growth in their online presence, audience reach, customer loyalty, and conversion rates." },
      { q: "Is there a free consultation available?", a: "Yes! I offer a complimentary 30-minute discovery call where we'll discuss your current social media situation, business goals, target audience, industry challenges, and how my services can specifically help you achieve the results you're looking for. This is a no-pressure, no-obligation conversation designed to provide genuine value." },
      { q: "Can services be customized for my business?", a: "Absolutely, every business has unique needs, audiences, goals, and challenges. I tailor my approach based on your specific industry, budget, timeline, and objectives. Whether you need comprehensive account management or support with specific aspects like content creation, community management, or analytics, I'll customize a service package that works perfectly for you." },
      { q: "How do you ensure quality in social media campaigns?", a: "Quality stems from thorough preparation and consistent execution. I create detailed content calendars, review all content before scheduling, track performance metrics continuously, and optimize based on real data. I stay updated on platform algorithm changes, emerging trends, and industry best practices to ensure your content remains relevant, engaging, and effective at achieving your objectives." },
      { q: "What industries have you worked with?", a: "I've successfully managed social media for food & beverage brands, digital marketing agencies, cultural organizations, international film festivals, and B2B service providers. My mass media communication background combined with ongoing MBA studies in Digital Marketing gives me the versatility to adapt effectively to various industries while maintaining strategic focus on measurable results." },
      { q: "How long before I see results from social media efforts?", a: "Initial engagement improvements often become visible within 2-3 weeks of consistent, strategic posting. Significant follower growth and meaningful business impact typically manifest within 2-3 months as we build community, refine strategy, and optimize based on performance data. Social media success is a marathon, not a sprint; sustainable growth requires patience and persistence." },
      { q: "Do you provide ongoing support after initial setup?", a: "Yes! Social media requires continuous attention and adaptation. I provide ongoing account management, daily monitoring, regular performance reporting, and strategic adjustments. I'm readily available for questions, handle time-sensitive situations promptly, and ensure your social media presence runs smoothly throughout our entire partnership. You're never left wondering what's happening with your accounts." },
      { q: "How do I get started working with you?", a: "Simple! Use the contact form below or email me directly. We'll schedule a free discovery call to discuss your goals, challenges, and opportunities. If we're a good fit, I'll create a customized proposal outlining strategy, timeline, deliverables, and investment. Once you're comfortable, we'll get your social media growing immediately!" },
      { q: "What makes your approach different from others?", a: "I combine academic knowledge from my MBA with real-world agency experience and genuine passion for social media storytelling. You get strategic thinking, creative execution, transparent communication, and sincere dedication to your success. I don't just manage accounts. I build brands, foster communities, and grow businesses through authentic social media presence." },
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
      "Every successful campaign begins with deep audience understanding.",
      "Client collaboration is central to everything I do. I believe in transparent communication, regular performance updates, and adapting strategies based on real results.",
    ],
  },
  edge: {
    eyebrow: "my edge",
    title: "Social Media Stories That Connect | Ads That Convert | Designs That Engage",
    pillars: [
      { title: "Strategic Content Planning & Calendar Management", body: "Purposeful calendars that align every post with brand goals, audience rhythms, and platform behaviour.", img: "photo-1542038784456-1ea8e935640e" },
      { title: "Social Media Advertising & Performance Tracking", body: "Paid campaigns engineered for reach, retention, and return — measured against the metrics that matter.", img: "photo-1551836022-d5d88e9218df" },
      { title: "Audience Growth & Engagement Strategy", body: "Steady, authentic community building that turns followers into champions of your brand.", img: "photo-1521737604893-d14cc237f11d" },
      { title: "Brand Storytelling Through Visuals & Copy", body: "Story-led visuals and copy crafted to sound like you and convert like clockwork.", img: "photo-1455390582262-044cdead277a" },
    ],
    subCards: [
      { title: "Strategic Clarity in Execution", body: "True excellence begins with clear planning and thoughtful execution.", img: "photo-1517842645767-c639042777db" },
      { title: "Dedication Beyond the Clock", body: "Social media success demands commitment that extends beyond traditional hours.", img: "photo-1499636136210-6f4ee915583e" },
    ],
  },
  servicesParallax: {
    eyebrow: "what i do",
    title: "Where Strategy Meets Social Media Success",
    cards: [
      { no: "01", label: "service one", title: "Social Media Strategy & Management", body: "Complete end-to-end management of your social media accounts across all major platforms. I develop comprehensive content calendars, strategically schedule posts, manage daily operations, and ensure your brand voice remains consistent. From Instagram and Facebook to LinkedIn and YouTube, I handle every aspect with expertise, keeping your audience engaged and your brand top-of-mind.", img: "photo-1432888622747-4eb9a8efeb07" },
      { no: "02", label: "service two", title: "Content Creation & Curation", body: "Designing visually compelling posts, crafting engaging stories, and creating scroll-stopping content that captures attention. I blend creativity with strategy to produce visuals and copy that resonate deeply with your target audience. Whether showcasing products, sharing behind-the-scenes moments, or running promotional campaigns, every post is purposefully crafted to drive engagement and reflect your brand identity.", img: "photo-1542744173-8e7e53415bb0" },
      { no: "03", label: "service three", title: "Community Management & Engagement", body: "Building meaningful relationships one interaction at a time. I actively monitor your social channels, respond to comments and messages promptly, and engage authentically with your audience. By fostering genuine conversations and addressing concerns professionally, I transform casual followers into loyal brand advocates who champion your business organically.", img: "photo-1556761175-b413da4baf72" },
      { no: "04", label: "service four", title: "Influencer Collaboration Management", body: "Strategic planning and seamless execution of influencer partnerships that amplify your reach. From identifying the right creators who align with your brand values to coordinating campaigns, managing deliverables, and measuring impact, I handle the entire collaboration process to drive authentic engagement.", img: "photo-1612872087720-bb876e2e67d1" },
      { no: "05", label: "service five", title: "Analytics & Performance Tracking", body: "Data-driven insights that tell your success story. I track key performance metrics, analyze engagement patterns, identify growth opportunities, and provide clear, actionable reports. These insights translate complex numbers into strategic recommendations, guiding decision-making and ensuring continuous improvement.", img: "photo-1460925895917-afdab827c52f" },
    ],
  },
  process: {
    eyebrow: "how we work",
    title: "Achieve Incredible Results in Just 4 Easy Steps!",
    steps: [
      { no: "01", title: "Get a Free Consultation", body: "Strategic planning session to understand your brand goals, target audience, and marketing objectives — completely complimentary.", img: "photo-1507003211169-0a1dd7228f2d" },
      { no: "02", title: "Instant Chat Support", body: "Real-time communication to discuss campaign strategies, content requirements, and answer all your social media queries promptly.", img: "photo-1611605698335-8b1569810432" },
      { no: "03", title: "Wireframe & Development", body: "Develop customized content calendars and campaign blueprints that align perfectly with your brand identity and business goals.", img: "photo-1517842645767-c639042777db" },
      { no: "04", title: "Prototype & Testing", body: "Preview and approve all content before publishing, ensuring every post reflects your brand voice and messaging perfectly.", img: "photo-1611162617213-7d7a39e9b1d7" },
    ],
  },
  impactFlip: {
    title: "How I Create Impact",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1800&q=80&auto=format&fit=crop",
    cards: [
      { title: "Content Strategy", body: "Every post has a purpose. I craft data-backed content calendars that align with your brand voice, audience behaviour, and business goals." },
      { title: "Brand Growth", body: "From zero to community. I build genuine audience relationships through storytelling, consistent engagement, and trend-led creative direction." },
      { title: "Analytics & Results", body: "Numbers tell the real story. I translate performance data into actionable insights that continuously improve reach, engagement, and ROI." },
    ],
  },
  benefits: {
    eyebrow: "why partner with me",
    title: "Exploring Digital Frontiers with Me: Your Reliable Partner.",
    items: [
      { title: "Clear and Prompt Communication", body: "We ensure clear, prompt, and honest communication, keeping you informed every step of the way.", img: "photo-1573164713714-d95e436ab8d6" },
      { title: "Accelerate Growth", body: "Accelerate growth with enhanced email and social media marketing.", img: "photo-1460925895917-afdab827c52f" },
      { title: "Responsive and Scalable Solutions", body: "Our solutions adapt seamlessly to your needs, ensuring flexibility, efficiency, and long-term growth.", img: "photo-1556761175-5973dc0f32e7" },
      { title: "Premium Support", body: "Explore our comprehensive help desk services, ensuring seamless IT support and swift resolution to keep your operations running smoothly.", img: "photo-1542038784456-1ea8e935640e" },
    ],
    ratingNum: "4.5+",
    ratingLabel: "Client Ratings",
  },
  cardsFan: {
    title: "Five things, done well.",
    cards: [
      { no: "01", label: "service one", title: "Client Servicing", img: "photo-1573497019940-1c28c88b4f3e" },
      { no: "02", label: "service two", title: "Social Media", img: "photo-1611605698335-8b1569810432" },
      { no: "03", label: "service three", title: "Content Writing", img: "photo-1455390582262-044cdead277a" },
      { no: "04", label: "service four", title: "Brand Strategy", img: "photo-1517842645767-c639042777db" },
      { no: "05", label: "service five", title: "Analytics", img: "photo-1460925895917-afdab827c52f" },
    ],
  },
  freebie: {
    image: "/images/raji-library.png",
  },
};

