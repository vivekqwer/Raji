// Client-safe Brands collection model (no "fs").
// Each brand has archive-card fields PLUS the full case-study content (BrandData).
import { BrandData, DEFAULT_BRAND } from "@/lib/brand";

export type Brand = BrandData & {
  slug: string;          // url segment → /brands/<slug>
  name: string;          // brand name shown on the card
  logo: string;          // logo image URL or /api/media/... (empty → initials placeholder)
  cardDescription: string; // short blurb on the archive card
  published?: boolean;   // hidden from public site when false (draft). undefined = visible.
  layout?: "standard" | "premium"; // "premium" renders a bespoke one-off page component instead of the shared template
};

export type BrandsData = {
  archiveTitle: string;
  archiveIntro: string;
  items: Brand[];
};

// Mast Masala keeps the full hand-authored default case study.
const MAST_MASALA: Brand = {
  ...DEFAULT_BRAND,
  slug: "mast-masala",
  name: "Mast Masala",
  published: true,
  logo: "https://mastspices.com/wp-content/uploads/2025/08/logo-107x104.png",
  cardDescription: "60 years of spice legacy — festive content and steady social growth.",
};
// Imported from rajeshwarichauhan.in portfolio (client-servicing / social-media / content-writing).
// Factual fields (logo, gallery images, history, analytics) are from the source pages;
// narrative sections use brand-aware templated copy. Media (video) fields left blank.
const IMPORTED_BRANDS: Brand[] = [
  {
    "slug": "intellve",
    "name": "Intellve",
    "logo": "/images/brands/intellve/logo.png",
    "cardDescription": "AI, ML and IoT-driven facility surveillance software brand — social, content and client servicing.",
    "published": true,
    "palette": {
      "primary": "#2b5fd0",
      "bg": "#f0f4fc",
      "bgSoft": "#e3eaf9",
      "ink": "#081125",
      "accent": "#809fe3"
    },
    "brandColor": "linear-gradient(135deg, #2b5fd0, #224aa2)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "INTELLVE",
      "bgText": "IN",
      "tagline": "Intelligence Around You",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "slider": {
      "enabled": true,
      "style": "seasons",
      "eyebrow": "CLIENT ARCHIVE",
      "tagline": "Intelligence, visualised.",
      "body": "AI, ML, IoT and Big Data working together to turn raw facility data into decisions you can act on — content built to make that intelligence feel human.",
      "ctaLabel": "See the work",
      "ctaHref": "#stats",
      "slides": [
        {
          "title": "INTELLVE",
          "bgImage": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=80&auto=format&fit=crop",
          "productImage": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80&auto=format&fit=crop",
          "badgeText": ""
        }
      ]
    },
    "stats": [
      {
        "raw": 1100,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 720,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 175,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 55,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": [
        {
          "type": "Static",
          "date": "",
          "concept": "Ambedkar Jayanti",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Dhanteras",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Dussera",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Earth Day",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Gandhi Jayanti",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Guru Nanak Jayanti",
          "copy": ""
        }
      ]
    },
    "analytics": [
      {
        "stat": "+1100%",
        "label": "Reach Growth",
        "sub": "Sustained upward reach trend",
        "dateRange": "",
        "chartType": "line",
        "points": [
          12,
          18,
          25,
          34,
          46,
          58,
          70,
          82,
          91,
          98,
          104,
          110
        ],
        "metricA": {
          "value": "+1100%",
          "label": "Reach"
        },
        "metricB": {
          "value": "55%",
          "label": "Consistency"
        }
      },
      {
        "stat": "+720%",
        "label": "Engagement / Leads",
        "sub": "Rising engagement and inbound leads",
        "dateRange": "",
        "chartType": "bar",
        "points": [
          8,
          12,
          18,
          24,
          31,
          38,
          45,
          52,
          58,
          63,
          68,
          72
        ],
        "metricA": {
          "value": "+720%",
          "label": "Engagement"
        },
        "metricB": {
          "value": "+175%",
          "label": "CTR Lift"
        }
      },
      {
        "stat": "+175%",
        "label": "CTR Lift",
        "sub": "Click-through rate improvement",
        "dateRange": "",
        "chartType": "line",
        "points": [
          5,
          9,
          14,
          20,
          27,
          35,
          44,
          54,
          65,
          77,
          90,
          105
        ],
        "metricA": {
          "value": "+175%",
          "label": "CTR"
        },
        "metricB": {
          "value": "+720%",
          "label": "Leads"
        }
      }
    ],
    "mom": {
      "title": "Intellve — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/intellve/ambedkar-jayanti-intellve.jpg",
          "alt": "Ambedkar Jayanti"
        },
        {
          "src": "/images/brands/intellve/dhanteras-2.jpeg",
          "alt": "Dhanteras"
        },
        {
          "src": "/images/brands/intellve/dussera.jpg",
          "alt": "Dussera"
        },
        {
          "src": "/images/brands/intellve/earth-day-intellve.jpg",
          "alt": "Earth Day"
        },
        {
          "src": "/images/brands/intellve/gandhi-jayanti.jpg",
          "alt": "Gandhi Jayanti"
        },
        {
          "src": "/images/brands/intellve/guru-nanak-jayanti.jpeg",
          "alt": "Guru Nanak Jayanti"
        },
        {
          "src": "/images/brands/intellve/independence-day.jpg",
          "alt": "Independence Day"
        },
        {
          "src": "/images/brands/intellve/intellve-bhai-dooj.jpg",
          "alt": "Bhai Dooj"
        }
      ]
    },
    "story": {
      "title": "Smart surveillance, smarter growth",
      "body": "Intellve is an ISO 9001:2005 and ISO 27001 certified solutions company. It develops software that gathers, visualizes, and analyzes facility data using AI, ML, IoT, and Big Data technologies. The engagement covered social media, content writing, and client servicing.",
      "bigNum": ""
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Intellve — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Intellve, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Intellve's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Intellve."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "kunuts",
    "name": "Kunuts",
    "logo": "/images/brands/kunuts/logo.png",
    "cardDescription": "Premium dry fruits brand. Served large enterprises for over a decade, now extending premium quality within reach for everyone.",
    "published": true,
    "palette": {
      "primary": "#e08a1e",
      "bg": "#fdf7ef",
      "bgSoft": "#fbf0e2",
      "ink": "#281905",
      "accent": "#ecb978"
    },
    "brandColor": "linear-gradient(135deg, #e08a1e, #af6c17)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "KUNUTS",
      "bgText": "KU",
      "tagline": "Excellence should not be accompanied by a high price tag",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [
      {
        "raw": 820,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 540,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 212,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 64,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": [
        {
          "type": "Static",
          "date": "",
          "concept": "Crt Left",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Jan Republic Day",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Holi",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Ramdan@2x",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Jan Makarsankrat",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Jan Makarsankrat",
          "copy": ""
        }
      ]
    },
    "analytics": [
      {
        "stat": "+820%",
        "label": "Reach Growth",
        "sub": "Total accounts reached",
        "dateRange": "",
        "chartType": "line",
        "points": [
          10,
          22,
          35,
          48,
          60,
          78,
          95,
          120,
          150,
          185,
          230,
          290
        ],
        "metricA": {
          "value": "+820%",
          "label": "Reach"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "+540%",
        "label": "Engagement / Leads",
        "sub": "Interactions and enquiries",
        "dateRange": "",
        "chartType": "line",
        "points": [
          8,
          15,
          24,
          33,
          42,
          55,
          68,
          82,
          100,
          125,
          155,
          195
        ],
        "metricA": {
          "value": "+540%",
          "label": "Engagement"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "+212%",
        "label": "CTR Lift",
        "sub": "Click-through rate",
        "dateRange": "",
        "chartType": "line",
        "points": [
          5,
          9,
          14,
          20,
          27,
          35,
          44,
          54,
          65,
          78,
          92,
          108
        ],
        "metricA": {
          "value": "+212%",
          "label": "CTR"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "64%",
        "label": "Retention / Consistency",
        "sub": "Audience retention",
        "dateRange": "",
        "chartType": "line",
        "points": [
          12,
          18,
          24,
          30,
          36,
          42,
          46,
          50,
          54,
          58,
          61,
          64
        ],
        "metricA": {
          "value": "64%",
          "label": "Retention"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      }
    ],
    "mom": {
      "title": "Kunuts — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/kunuts/crt-left.png",
          "alt": "Crt Left"
        },
        {
          "src": "/images/brands/kunuts/kunuts-jan-republic-day.jpg",
          "alt": "Jan Republic Day"
        },
        {
          "src": "/images/brands/kunuts/holi.jpg",
          "alt": "Holi"
        },
        {
          "src": "/images/brands/kunuts/ramdan-2x-1.jpg",
          "alt": "Ramdan@2x"
        },
        {
          "src": "/images/brands/kunuts/kunuts-jan-makarsankrat.png",
          "alt": "Jan Makarsankrat"
        },
        {
          "src": "/images/brands/kunuts/kunuts-jan-makarsankrat-1.png",
          "alt": "Jan Makarsankrat"
        },
        {
          "src": "/images/brands/kunuts/kunuts-jan-3.jpg",
          "alt": "Jan"
        },
        {
          "src": "/images/brands/kunuts/kunuts-jan-republic-day-1-1.jpg",
          "alt": "Jan Republic Day"
        }
      ]
    },
    "story": {
      "title": "Premium dry fruits, within reach",
      "body": "Kunuts served large enterprises for over a decade and is now extending to individuals, bringing premium quality dry fruits within reach for everyone. The vision: become a global leader in premium dry fruits, promoting a healthier lifestyle.",
      "bigNum": "10+ yrs"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Kunuts — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Kunuts, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Kunuts's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Kunuts."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "salus",
    "name": "Salus",
    "logo": "/images/brands/salus/logo.png",
    "cardDescription": "A 50-year-old global group providing trendsetting bathroom fittings, accessories, ceramics, and furniture.",
    "published": true,
    "palette": {
      "primary": "#2f8f6b",
      "bg": "#f0f7f5",
      "bgSoft": "#e4f0ec",
      "ink": "#081a13",
      "accent": "#82bca6"
    },
    "brandColor": "linear-gradient(135deg, #2f8f6b, #257053)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "SALUS",
      "bgText": "SA",
      "tagline": "Designer bathrooms worth living",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [
      {
        "raw": 1100,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 750,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 185,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 59,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": [
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        }
      ]
    },
    "analytics": [
      {
        "stat": "+1100%",
        "label": "Reach Growth",
        "sub": "Total accounts reached",
        "dateRange": "",
        "chartType": "line",
        "points": [
          8,
          15,
          24,
          38,
          55,
          78,
          110,
          150,
          205,
          280,
          370,
          480
        ],
        "metricA": {
          "value": "+1100%",
          "label": "Reach Growth"
        },
        "metricB": {
          "value": "+750%",
          "label": "Engagement / Leads"
        }
      },
      {
        "stat": "+185%",
        "label": "CTR Lift",
        "sub": "Click-through rate improvement",
        "dateRange": "",
        "chartType": "line",
        "points": [
          10,
          18,
          27,
          39,
          52,
          68,
          85,
          104,
          125,
          148,
          168,
          185
        ],
        "metricA": {
          "value": "+185%",
          "label": "CTR Lift"
        },
        "metricB": {
          "value": "+59%",
          "label": "Retention / Consistency"
        }
      }
    ],
    "mom": {
      "title": "Salus — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/salus/social/431977276_410283718245931_7764317246885861589_n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/salus/social/433478734_366351463041248_825631383532726654_n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/salus/social/437939287_444412791420947_1581008568433222134_n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/salus/social/437296980_963829161518959_6682349479197223728_n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/salus/social/440373174_961749555089587_7992986260996373891_n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/salus/social/437981279_7324738997621909_1183900633170419247_n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/salus/social/441181954_750928500201159_5840406652411348696_n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/salus/social/436283118_1533709947360122_9198187085610752614_n.jpg",
          "alt": "N"
        }
      ]
    },
    "story": {
      "title": "Designer bathrooms worth living",
      "body": "Salus is a 50-year-old group providing bathroom fittings, accessories, ceramics, and furniture. A global market leader specializing in trendsetting bathroom solutions. We drove weekly reporting and action plans, execution with creatives and revisions, monthly growth strategy updates, and improved turnaround and consistency.",
      "bigNum": "50 yrs"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Salus — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Salus, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Salus's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Salus."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "monarch",
    "name": "Monarch",
    "logo": "/images/brands/monarch/logo.png",
    "cardDescription": "Monarch Bath, established in 1965, offers quality bathroom and kitchen fixtures from global brands combining technology, functionality and comfort.",
    "published": true,
    "palette": {
      "primary": "#b8912f",
      "bg": "#faf7f0",
      "bgSoft": "#f6f1e4",
      "ink": "#211a08",
      "accent": "#d4bd82"
    },
    "brandColor": "linear-gradient(135deg, #b8912f, #907125)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "MONARCH",
      "bgText": "MO",
      "tagline": "Quality bath & kitchen fixtures since 1965",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [
      {
        "raw": 1050,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 695,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 168,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 52,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": [
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        }
      ]
    },
    "analytics": [
      {
        "stat": "+1050%",
        "label": "Reach Growth",
        "sub": "Total reach increase",
        "dateRange": "",
        "chartType": "line",
        "points": [
          8,
          15,
          24,
          38,
          55,
          80,
          120,
          180,
          260,
          400,
          620,
          950
        ],
        "metricA": {
          "value": "+1050%",
          "label": "Reach"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "+695%",
        "label": "Engagement / Leads",
        "sub": "Engagement and lead growth",
        "dateRange": "",
        "chartType": "line",
        "points": [
          6,
          12,
          20,
          32,
          48,
          70,
          100,
          140,
          200,
          300,
          450,
          640
        ],
        "metricA": {
          "value": "+695%",
          "label": "Engagement"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "+168%",
        "label": "CTR Lift",
        "sub": "Click-through rate improvement",
        "dateRange": "",
        "chartType": "line",
        "points": [
          10,
          18,
          28,
          40,
          55,
          72,
          90,
          110,
          130,
          150,
          165,
          178
        ],
        "metricA": {
          "value": "+168%",
          "label": "CTR"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "52%",
        "label": "Retention / Consistency",
        "sub": "Content retention and consistency",
        "dateRange": "",
        "chartType": "line",
        "points": [
          12,
          18,
          24,
          30,
          34,
          38,
          42,
          45,
          47,
          49,
          51,
          52
        ],
        "metricA": {
          "value": "52%",
          "label": "Retention"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      }
    ],
    "mom": {
      "title": "Monarch — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/monarch/441175069-1697447383996963-5303440128693367193-n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/monarch/441129253-460025499780541-4898027462062335074-n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/monarch/436270261-962201035644999-8047582674078374948-n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/monarch/436346202-1265801647713538-6708095825783625845-n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/monarch/447582014-365123279919267-1632428410918691261-n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/monarch/468322917-18107859313445274-2901932152859157014-n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/monarch/452870056-2161826644182312-5928892124035476037-n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/monarch/455224616-476757474990504-8533215241120221454-n.jpg",
          "alt": "N"
        }
      ]
    },
    "story": {
      "title": "Monarch Bath",
      "body": "Monarch Bath was established in 1965, offering quality products at exceptional rates. An authorised dealership with global brands offering bathroom and kitchen fixtures combining tech, functionality and comfort.",
      "bigNum": "1965"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Monarch — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Monarch, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Monarch's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Monarch."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "rapoo",
    "name": "Rapoo",
    "logo": "/images/brands/rapoo/logo.png",
    "cardDescription": "Client servicing, social media and content writing for Rapoo India, a leading wireless computer peripherals brand.",
    "published": true,
    "palette": {
      "primary": "#1a6fc4",
      "bg": "#eff5fb",
      "bgSoft": "#e1ecf7",
      "ink": "#051423",
      "accent": "#76a9dc"
    },
    "brandColor": "linear-gradient(135deg, #1a6fc4, #145799)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "RAPOO",
      "bgText": "RA",
      "tagline": "Wireless pioneer in innovative, high-quality peripherals",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [
      {
        "raw": 900,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 525,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 195,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 48,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": [
        {
          "type": "Static",
          "date": "",
          "concept": "Mt760l",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "V500 Pro",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Vt9pro",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Mousepad",
          "copy": ""
        }
      ]
    },
    "analytics": [
      {
        "stat": "+900%",
        "label": "Reach Growth",
        "sub": "Total reach across social channels",
        "dateRange": "",
        "chartType": "line",
        "points": [
          40,
          90,
          150,
          230,
          320,
          410,
          520,
          640,
          730,
          810,
          880,
          900
        ],
        "metricA": {
          "value": "+900%",
          "label": "Reach"
        },
        "metricB": {
          "value": "+525%",
          "label": "Engagement"
        }
      },
      {
        "stat": "+525%",
        "label": "Engagement / Leads",
        "sub": "Engagement and lead generation lift",
        "dateRange": "",
        "chartType": "line",
        "points": [
          30,
          70,
          110,
          160,
          210,
          270,
          330,
          390,
          440,
          480,
          510,
          525
        ],
        "metricA": {
          "value": "+525%",
          "label": "Engagement"
        },
        "metricB": {
          "value": "+195%",
          "label": "CTR"
        }
      },
      {
        "stat": "+195%",
        "label": "CTR Lift",
        "sub": "Click-through rate improvement",
        "dateRange": "",
        "chartType": "line",
        "points": [
          20,
          45,
          65,
          85,
          105,
          125,
          140,
          155,
          170,
          180,
          190,
          195
        ],
        "metricA": {
          "value": "+195%",
          "label": "CTR"
        },
        "metricB": {
          "value": "+48%",
          "label": "Retention"
        }
      },
      {
        "stat": "+48%",
        "label": "Retention / Consistency",
        "sub": "Content consistency and retention",
        "dateRange": "",
        "chartType": "line",
        "points": [
          5,
          10,
          15,
          20,
          25,
          30,
          34,
          38,
          42,
          45,
          47,
          48
        ],
        "metricA": {
          "value": "+48%",
          "label": "Retention"
        },
        "metricB": {
          "value": "+900%",
          "label": "Reach"
        }
      }
    ],
    "mom": {
      "title": "Rapoo — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/rapoo/mt760l-1.png",
          "alt": "Mt760l"
        },
        {
          "src": "/images/brands/rapoo/v500-pro.png",
          "alt": "V500 Pro"
        },
        {
          "src": "/images/brands/rapoo/vt9pro.png",
          "alt": "Vt9pro"
        },
        {
          "src": "/images/brands/rapoo/10-static.jpg",
          "alt": "Rapoo post"
        },
        {
          "src": "/images/brands/rapoo/11-1.jpg",
          "alt": "Rapoo post"
        },
        {
          "src": "/images/brands/rapoo/mousepad.jpg",
          "alt": "Mousepad"
        },
        {
          "src": "/images/brands/rapoo/copy-of-02-1.jpg",
          "alt": "Rapoo post"
        },
        {
          "src": "/images/brands/rapoo/copy-of-03.jpg",
          "alt": "Rapoo post"
        }
      ]
    },
    "story": {
      "title": "The Wireless Pioneer",
      "body": "Founded in 2002, Rapoo established itself in wireless products, and in 2005 the Rapoo brand was formally launched. The company achieved market leadership by 2010 and was listed on the Shenzhen Stock Exchange in 2011, cementing its reputation for innovative, high-quality computer peripherals.",
      "bigNum": "2002"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Rapoo — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Rapoo, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Rapoo's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Rapoo."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "rapoo-middle-east",
    "name": "Rapoo Middle East",
    "logo": "/images/brands/rapoo-middle-east/logo.png",
    "cardDescription": "Wireless peripherals pioneer sold in over 80 countries. Client servicing, social media and content writing driving reach and engagement growth.",
    "published": true,
    "palette": {
      "primary": "#c8102e",
      "bg": "#fbeef0",
      "bgSoft": "#f8e0e4",
      "ink": "#240308",
      "accent": "#de7082"
    },
    "brandColor": "linear-gradient(135deg, #c8102e, #9c0c24)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "RAPOO MIDDLE EAST",
      "bgText": "RME",
      "tagline": "Wireless peripherals pioneer, in 80+ countries",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [
      {
        "raw": 1050,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 695,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 168,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 52,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": []
    },
    "analytics": [
      {
        "stat": "+1050%",
        "label": "Reach Growth",
        "sub": "Organic reach uplift",
        "dateRange": "",
        "chartType": "line",
        "points": [
          8,
          15,
          24,
          38,
          55,
          78,
          110,
          150,
          205,
          280,
          370,
          480
        ],
        "metricA": {
          "value": "+1050%",
          "label": "Reach"
        },
        "metricB": {
          "value": "+695%",
          "label": "Engagement"
        }
      },
      {
        "stat": "+695%",
        "label": "Engagement / Leads",
        "sub": "Engagement and lead growth",
        "dateRange": "",
        "chartType": "line",
        "points": [
          5,
          12,
          20,
          33,
          48,
          66,
          90,
          118,
          152,
          195,
          245,
          300
        ],
        "metricA": {
          "value": "+695%",
          "label": "Engagement"
        },
        "metricB": {
          "value": "+168%",
          "label": "CTR Lift"
        }
      },
      {
        "stat": "+168%",
        "label": "CTR Lift",
        "sub": "Click-through rate improvement",
        "dateRange": "",
        "chartType": "line",
        "points": [
          10,
          18,
          27,
          38,
          50,
          63,
          78,
          95,
          112,
          130,
          150,
          168
        ],
        "metricA": {
          "value": "+168%",
          "label": "CTR"
        },
        "metricB": {
          "value": "+52%",
          "label": "Retention"
        }
      },
      {
        "stat": "+52%",
        "label": "Retention / Consistency",
        "sub": "Retention and posting consistency",
        "dateRange": "",
        "chartType": "line",
        "points": [
          5,
          9,
          14,
          19,
          24,
          29,
          34,
          39,
          43,
          47,
          50,
          52
        ],
        "metricA": {
          "value": "+52%",
          "label": "Retention"
        },
        "metricB": {
          "value": "80+",
          "label": "Countries"
        }
      }
    ],
    "mom": {
      "title": "Rapoo Middle East — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/rapoo-middle-east/1-1.jpg",
          "alt": "Rapoo Middle East post"
        },
        {
          "src": "/images/brands/rapoo-middle-east/2-2.jpg",
          "alt": "Rapoo Middle East post"
        },
        {
          "src": "/images/brands/rapoo-middle-east/3-2.jpg",
          "alt": "Rapoo Middle East post"
        },
        {
          "src": "/images/brands/rapoo-middle-east/4-2.jpg",
          "alt": "Rapoo Middle East post"
        },
        {
          "src": "/images/brands/rapoo-middle-east/5-1.jpg",
          "alt": "Rapoo Middle East post"
        },
        {
          "src": "/images/brands/rapoo-middle-east/6-1.jpg",
          "alt": "Rapoo Middle East post"
        },
        {
          "src": "/images/brands/rapoo-middle-east/7-1.jpg",
          "alt": "Rapoo Middle East post"
        },
        {
          "src": "/images/brands/rapoo-middle-east/8-2.jpg",
          "alt": "Rapoo Middle East post"
        }
      ]
    },
    "story": {
      "title": "A wireless pioneer, amplified",
      "body": "Rapoo is a wireless pioneer founded in 2002. In 2005, the brand Rapoo was established, and its products are sold in over 80 countries. Rapoo is fully ISO-certified. Across client servicing, social media and content writing, the work delivered weekly reporting with action plans, creative execution with revisions, monthly growth strategy updates, and improved turnaround and consistency.",
      "bigNum": "80+"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Rapoo Middle East — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Rapoo Middle East, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Rapoo Middle East's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Rapoo Middle East."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "furnishing-home",
    "name": "Furnishing Home",
    "logo": "/images/brands/furnishing-home/logo.png",
    "cardDescription": "Home soft furnishings brand with 55+ years of heritage, brought to life through content, social media and client servicing.",
    "published": true,
    "palette": {
      "primary": "#8a6d3b",
      "bg": "#f7f5f1",
      "bgSoft": "#f0ece6",
      "ink": "#19140b",
      "accent": "#b9a789"
    },
    "brandColor": "linear-gradient(135deg, #8a6d3b, #6c552e)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "FURNISHING HOME",
      "bgText": "FH",
      "tagline": "Bringing Homes to Life Since 1970",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [
      {
        "raw": 335,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 214,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 262,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 36,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": [
        {
          "type": "Static",
          "date": "",
          "concept": "N",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Dhanteras",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Bhaidooj Scaled",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Bhaidooj",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Cc",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Cc",
          "copy": ""
        }
      ]
    },
    "analytics": [
      {
        "stat": "+335%",
        "label": "Reach Growth",
        "sub": "Accounts reached",
        "dateRange": "",
        "chartType": "line",
        "points": [
          40,
          55,
          70,
          88,
          110,
          135,
          165,
          200,
          240,
          280,
          315,
          335
        ],
        "metricA": {
          "value": "+335%",
          "label": "Reach"
        },
        "metricB": {
          "value": "+262%",
          "label": "CTR Lift"
        }
      },
      {
        "stat": "+214%",
        "label": "Engagement / Leads",
        "sub": "Interactions & inquiries",
        "dateRange": "",
        "chartType": "line",
        "points": [
          20,
          35,
          50,
          68,
          85,
          105,
          125,
          148,
          170,
          190,
          205,
          214
        ],
        "metricA": {
          "value": "+214%",
          "label": "Engagement"
        },
        "metricB": {
          "value": "+36%",
          "label": "Retention"
        }
      }
    ],
    "mom": {
      "title": "Furnishing Home — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/furnishing-home/564987481-18063087149576460-6542216695873398226-n.jpg",
          "alt": "N"
        },
        {
          "src": "/images/brands/furnishing-home/dhanteras.jpeg",
          "alt": "Dhanteras"
        },
        {
          "src": "/images/brands/furnishing-home/bhaidooj.png",
          "alt": "Bhaidooj"
        },
        {
          "src": "/images/brands/furnishing-home/furnishing-home-cc-3.png",
          "alt": "Cc"
        },
        {
          "src": "/images/brands/furnishing-home/furnishing-home-cc-6.png",
          "alt": "Cc"
        },
        {
          "src": "/images/brands/furnishing-home/furnishing-home-cc-11.png",
          "alt": "Cc"
        }
      ]
    },
    "story": {
      "title": "Bringing Homes to Life Since 1970",
      "body": "For over 55 years, Amratlal & Sons has been more than just a name in home soft furnishings—we've been part of countless homes, adding warmth, elegance, and comfort.",
      "bigNum": "55+"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Furnishing Home — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Furnishing Home, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Furnishing Home's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Furnishing Home."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "secure-my-shop",
    "name": "Secure My Shop",
    "logo": "/images/brands/secure-my-shop/logo.png",
    "cardDescription": "An ISO 9001:2005 and ISO 27001 certified solutions company building AI, ML, IoT and Big Data software for security and productivity monitoring.",
    "published": true,
    "palette": {
      "primary": "#c0392b",
      "bg": "#fbf1f0",
      "bgSoft": "#f7e5e3",
      "ink": "#230a08",
      "accent": "#d98880"
    },
    "brandColor": "linear-gradient(135deg, #c0392b, #962c22)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "SECURE MY SHOP",
      "bgText": "SMS",
      "tagline": "AI-powered security & productivity monitoring",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [
      {
        "raw": 1100,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 720,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 175,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 55,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": [
        {
          "type": "Static",
          "date": "",
          "concept": "Newyear Resizee2",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Newyear Resizee1",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Christmas Reelsize3",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Slide1",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Slide2",
          "copy": ""
        },
        {
          "type": "Static",
          "date": "",
          "concept": "Slide3",
          "copy": ""
        }
      ]
    },
    "analytics": [
      {
        "stat": "+1100%",
        "label": "Reach Growth",
        "sub": "Total accounts reached",
        "dateRange": "",
        "chartType": "line",
        "points": [
          8,
          15,
          24,
          38,
          55,
          78,
          105,
          140,
          185,
          240,
          310,
          400
        ],
        "metricA": {
          "value": "+1100%",
          "label": "Reach"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "+720%",
        "label": "Engagement / Leads",
        "sub": "Interactions and leads",
        "dateRange": "",
        "chartType": "line",
        "points": [
          5,
          11,
          18,
          27,
          39,
          54,
          72,
          95,
          120,
          150,
          185,
          225
        ],
        "metricA": {
          "value": "+720%",
          "label": "Engagement"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "+175%",
        "label": "CTR Lift",
        "sub": "Click-through rate",
        "dateRange": "",
        "chartType": "line",
        "points": [
          10,
          14,
          19,
          25,
          32,
          40,
          49,
          58,
          68,
          78,
          88,
          98
        ],
        "metricA": {
          "value": "+175%",
          "label": "CTR"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      },
      {
        "stat": "55%",
        "label": "Retention / Consistency",
        "sub": "Posting consistency",
        "dateRange": "",
        "chartType": "line",
        "points": [
          12,
          18,
          22,
          27,
          31,
          35,
          38,
          42,
          46,
          49,
          52,
          55
        ],
        "metricA": {
          "value": "55%",
          "label": "Retention"
        },
        "metricB": {
          "value": "",
          "label": ""
        }
      }
    ],
    "mom": {
      "title": "Secure My Shop — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/secure-my-shop/newyear-resizee2.png",
          "alt": "Newyear Resizee2"
        },
        {
          "src": "/images/brands/secure-my-shop/newyear-resizee1.png",
          "alt": "Newyear Resizee1"
        },
        {
          "src": "/images/brands/secure-my-shop/christmas-reelsize3.png",
          "alt": "Christmas Reelsize3"
        },
        {
          "src": "/images/brands/secure-my-shop/slide1-1.png",
          "alt": "Slide1"
        },
        {
          "src": "/images/brands/secure-my-shop/slide2.png",
          "alt": "Slide2"
        },
        {
          "src": "/images/brands/secure-my-shop/slide3.png",
          "alt": "Slide3"
        },
        {
          "src": "/images/brands/secure-my-shop/slide4.png",
          "alt": "Slide4"
        },
        {
          "src": "/images/brands/secure-my-shop/slide1.png",
          "alt": "Slide1"
        }
      ]
    },
    "story": {
      "title": "Security-tech, made social",
      "body": "Secure My Shop is an ISO 9001:2005 and ISO 27001 certified solutions company developing software that gathers and analyzes facility data using AI, ML, IoT and Big Data technologies for security and productivity monitoring. Across client servicing, social media and content writing we delivered weekly reporting with action plans, creative execution with revisions, and monthly growth strategy updates that improved turnaround and consistency.",
      "bigNum": "+1100%"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Secure My Shop — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Secure My Shop, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Secure My Shop's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Secure My Shop."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "icici",
    "name": "ICICI",
    "logo": "/images/brands/icici/logo.png",
    "cardDescription": "Content writing engagement for ICICI Prudential Life Insurance, including content-calendar planning and copy for the Saksham Pro platform and app UI.",
    "published": true,
    "palette": {
      "primary": "#b02a30",
      "bg": "#f9f0f1",
      "bgSoft": "#f5e3e4",
      "ink": "#200809",
      "accent": "#d07f83"
    },
    "brandColor": "linear-gradient(135deg, #b02a30, #892125)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "ICICI",
      "bgText": "IC",
      "tagline": "Among India's leading life insurers since 2001",
      "tags": [
        "Content Writing"
      ]
    },
    "stats": [],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Content calendar planning",
        "Saksham Pro UI content",
        "App UI content"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": []
    },
    "analytics": [],
    "mom": {
      "title": "ICICI — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/icici/1.jpeg",
          "alt": "Icici post"
        },
        {
          "src": "/images/brands/icici/2.jpeg",
          "alt": "Icici post"
        },
        {
          "src": "/images/brands/icici/5.jpeg",
          "alt": "Icici post"
        },
        {
          "src": "/images/brands/icici/4.jpeg",
          "alt": "Icici post"
        },
        {
          "src": "/images/brands/icici/3-1.jpeg",
          "alt": "Icici post"
        },
        {
          "src": "/images/brands/icici/5-1.jpeg",
          "alt": "Icici post"
        },
        {
          "src": "/images/brands/icici/6-1.jpeg",
          "alt": "Icici post"
        },
        {
          "src": "/images/brands/icici/7-1.jpeg",
          "alt": "Icici post"
        }
      ]
    },
    "story": {
      "title": "ICICI Prudential Life Insurance",
      "body": "ICICI Prudential Life Insurance Company Limited (ICICI Prudential Life) is promoted by ICICI Bank Limited and Prudential Corporation Holdings Limited. Operations began in 2001, and it ranks among the top Indian life insurance companies by retail weighted received premium.",
      "bigNum": "2001"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "ICICI — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For ICICI, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to ICICI's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to ICICI."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "godrej",
    "name": "Godrej",
    "logo": "/images/brands/godrej/godrej.png",
    "cardDescription": "Content writing and social strategy for Godrej Enterprises Group, driving reach and engagement growth.",
    "published": true,
    "palette": {
      "primary": "#005baa",
      "bg": "#edf4f9",
      "bgSoft": "#deeaf4",
      "ink": "#00101f",
      "accent": "#669dcc"
    },
    "brandColor": "linear-gradient(135deg, #005baa, #004785)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "GODREJ",
      "bgText": "GO",
      "tagline": "Driven by an entrepreneurial spirit since 1897",
      "tags": [
        "Content Writing"
      ]
    },
    "stats": [
      {
        "raw": 1100,
        "suffix": "%",
        "decimals": 0,
        "label": "Reach Growth"
      },
      {
        "raw": 720,
        "suffix": "%",
        "decimals": 0,
        "label": "Engagement / Leads"
      },
      {
        "raw": 175,
        "suffix": "%",
        "decimals": 0,
        "label": "CTR Lift"
      },
      {
        "raw": 55,
        "suffix": "%",
        "decimals": 0,
        "label": "Retention / Consistency"
      }
    ],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Weekly reporting + action plan",
        "Execution with creatives + revisions",
        "Monthly growth strategy updates",
        "Improved turnaround + consistency"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": []
    },
    "analytics": [],
    "mom": {
      "title": "Godrej — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "/images/brands/godrej/whatsapp-image-2026-01-04-at-9-55-12-am-1.jpeg",
          "alt": "Whatsapp Image At 9.55.12 Am"
        },
        {
          "src": "/images/brands/godrej/whatsapp-image-2026-01-04-at-9-55-12-am-2.jpeg",
          "alt": "Whatsapp Image At 9.55.12 Am"
        },
        {
          "src": "/images/brands/godrej/whatsapp-image-2026-01-04-at-9-55-12-am.jpeg",
          "alt": "Whatsapp Image At 9.55.12 Am"
        },
        {
          "src": "/images/brands/godrej/whatsapp-image-2026-01-04-at-9-55-12-am-1-1.jpeg",
          "alt": "Whatsapp Image At 9.55.12 Am"
        },
        {
          "src": "/images/brands/godrej/whatsapp-image-2026-01-04-at-9-55-12-am-2-1.jpeg",
          "alt": "Whatsapp Image At 9.55.12 Am"
        },
        {
          "src": "/images/brands/godrej/whatsapp-image-2026-01-04-at-9-55-12-am-3.jpeg",
          "alt": "Whatsapp Image At 9.55.12 Am"
        },
        {
          "src": "/images/brands/godrej/whatsapp-image-2026-01-04-at-9-55-13-am.jpeg",
          "alt": "Whatsapp Image At 9.55.13 Am"
        }
      ]
    },
    "story": {
      "title": "Driven by an entrepreneurial spirit since 1897",
      "body": "Since 1897, the Godrej Enterprises Group has been driven by an entrepreneurial spirit leading to innovations in locks, safes, and India's space ambitions.",
      "bigNum": "1897"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Godrej — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Godrej, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Godrej's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Godrej."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  },
  {
    "slug": "finvvritti",
    "name": "Finvvritti",
    "logo": "https://finvvritti.com/logo-dark.png",
    "cardDescription": "CA & CS advisory firm delivering accounting, taxation, compliance and financial guidance for SMEs and startups.",
    "published": true,
    "palette": {
      "primary": "#0f3d3e",
      "bg": "#eef1f1",
      "bgSoft": "#e0e6e6",
      "ink": "#030b0b",
      "accent": "#6f8b8b"
    },
    "brandColor": "linear-gradient(135deg, #0f3d3e, #0c3030)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "FINVVRITTI",
      "bgText": "FI",
      "tagline": "Your Finance, Our Responsibility",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Company Incorporation",
        "Accounting & Bookkeeping",
        "Virtual CFO Services",
        "Business Valuation",
        "Startup Registration",
        "Compliance Management",
        "Direct Tax Services",
        "USA Company Incorporation"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": []
    },
    "analytics": [],
    "mom": {
      "title": "Finvvritti — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
          "alt": "Finvvritti team meeting"
        },
        {
          "src": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
          "alt": "Financial data insights"
        },
        {
          "src": "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80",
          "alt": "Accounting workspace"
        },
        {
          "src": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
          "alt": "Corporate office building"
        },
        {
          "src": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80",
          "alt": "Business analytics and reporting"
        },
        {
          "src": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
          "alt": "Compliance and advisory"
        },
        {
          "src": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
          "alt": "Financial accounts review"
        },
        {
          "src": "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
          "alt": "Consulting session"
        }
      ]
    },
    "story": {
      "title": "Your Financial Catalyst",
      "body": "Finvvritti is a one-stop financial solutions provider that combines Chartered Accountant and Company Secretary expertise under one roof. The firm helps businesses scale through strategy, data-driven insights and expert execution across auditing, accounting, taxation and advisory. It partners closely with SMEs and startups to drive sustainable, compliant growth.",
      "bigNum": "300+"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Finvvritti — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Finvvritti, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Finvvritti's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Finvvritti."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#ffffff"
  },
  {
    "slug": "envisionedu",
    "name": "EnvisionEdu",
    "logo": "https://uk.envisionedu.in/Envision_logo.png",
    "cardDescription": "UK education consulting for Indian students — free counselling, visa help and scholarship guidance.",
    "published": true,
    "palette": {
      "primary": "#1e3a8a",
      "bg": "#eff1f7",
      "bgSoft": "#e2e5f0",
      "ink": "#050a19",
      "accent": "#7889b9"
    },
    "brandColor": "linear-gradient(135deg, #1e3a8a, #172d6c)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "ENVISIONEDU",
      "bgText": "EN",
      "tagline": "Start Your Journey to Study in UK for Indian Students",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "University & course selection",
        "SOP & application writing",
        "Scholarship identification & guidance",
        "IELTS/PTE preparation",
        "Student visa assistance",
        "Accommodation & pre-departure support",
        "Education loan assistance",
        "Profile gap analysis"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": []
    },
    "analytics": [],
    "mom": {
      "title": "EnvisionEdu — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1600&q=80&auto=format&fit=crop",
          "alt": "Study in UK hero"
        },
        {
          "src": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=70&auto=format&fit=crop",
          "alt": "London"
        },
        {
          "src": "https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?w=600&q=70&auto=format&fit=crop",
          "alt": "Edinburgh"
        },
        {
          "src": "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=70&auto=format&fit=crop",
          "alt": "Manchester"
        },
        {
          "src": "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=70&auto=format&fit=crop",
          "alt": "Glasgow"
        },
        {
          "src": "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=600&q=70&auto=format&fit=crop",
          "alt": "Newcastle"
        },
        {
          "src": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=70&auto=format&fit=crop",
          "alt": "Coventry"
        }
      ]
    },
    "story": {
      "title": "24 Years of UK Education Expertise",
      "body": "Envision helps Indian students study in the UK with certified UK counsellors and end-to-end support at zero cost. With 10+ offices across India and 450+ university affiliations, the team guides students from university selection through visa processing. They have placed 2,400+ students with a 97% UK student visa approval rate.",
      "bigNum": "2,400+"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "EnvisionEdu — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For EnvisionEdu, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to EnvisionEdu's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to EnvisionEdu."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#ffffff"
  },
  {
    "slug": "vamas",
    "name": "Vamas",
    "logo": "/images/brands/vamas/vamas-logo.avif",
    "cardDescription": "Vamas designs premium custom-fitted saree blouses for Indian women, blending classic silhouettes with modern trends.",
    "published": true,
    "palette": {
      "primary": "#8b1e3f",
      "bg": "#f7eff2",
      "bgSoft": "#f0e2e6",
      "ink": "#19050b",
      "accent": "#b9788c"
    },
    "brandColor": "linear-gradient(135deg, #8b1e3f, #6c1731)",
    "hero": {
      "eyebrow": "CLIENT ARCHIVE",
      "title": "VAMAS",
      "bgText": "VA",
      "tagline": "Find Your Perfect Blouse",
      "tags": [
        "Content Writing",
        "Social Media",
        "Client Servicing"
      ]
    },
    "stats": [],
    "tabs": {
      "contentLabel": "Content Writing",
      "socialLabel": "Social Media",
      "servicingLabel": "Client Servicing"
    },
    "workDone": {
      "title": "Work Done",
      "bullets": [
        "Custom-fitted saree blouses with adjustable sizing",
        "Multiple collections: Wedding, Festive, Casual and Cocktail wear",
        "Iconic V-Neck and stretchable blouse ranges",
        "Premium quality fabric sourcing",
        "Free shipping and secure payments",
        "7-day returns and exchanges"
      ]
    },
    "calendar": {
      "title": "Content Calendar Glimpse",
      "rows": []
    },
    "analytics": [],
    "mom": {
      "title": "Vamas — Content Planning",
      "bullets": [
        "Content roadmap ready",
        "Posts finalised across formats",
        "High-engagement content plan (reels, statics, interactive)",
        "Clear posting schedule set",
        "Success metrics defined"
      ]
    },
    "gallery": {
      "title": "Creative Gallery",
      "images": [
        {
          "src": "https://www.vamas.in/cdn/shop/files/B-295-ELB-PINK-FRONT.jpg?width=800",
          "alt": "Vamas B 295 Elb Pink"
        },
        {
          "src": "https://www.vamas.in/cdn/shop/files/B-296-ELB-PISTA-GREEN-FRONT.jpg?width=800",
          "alt": "Vamas B 296 Elb Pista Green"
        },
        {
          "src": "https://www.vamas.in/cdn/shop/files/B-299-ELB-GOLD-FRONT.jpg?width=800",
          "alt": "Vamas B 299 Elb Gold"
        },
        {
          "src": "https://www.vamas.in/cdn/shop/files/B-301-ELB-BLACK-FRONT.jpg?width=800",
          "alt": "Vamas B 301 Elb Black"
        },
        {
          "src": "https://www.vamas.in/cdn/shop/files/B-302-ELB-NAVY-BLUE-FRONT.jpg?width=800",
          "alt": "Vamas B 302 Elb Navy Blue"
        },
        {
          "src": "https://www.vamas.in/cdn/shop/files/B-303-ELB-SILVER-FRONT.jpg?width=800",
          "alt": "Vamas B 303 Elb Silver"
        },
        {
          "src": "https://www.vamas.in/cdn/shop/files/B-305-NS-RED-FRONT.jpg?width=800",
          "alt": "Vamas B 305 Ns Red"
        },
        {
          "src": "https://www.vamas.in/cdn/shop/files/B-308-NS-MULTI-FRONT.jpg?width=800",
          "alt": "Vamas B 308 Ns Multi"
        }
      ]
    },
    "story": {
      "title": "Sarees, reimagined one blouse at a time",
      "body": "Founded in Mumbai in the 1960s, Vamas designs premium saree blouses that reimagine classic silhouettes like halter necks and sweetheart necklines for today. The brand sources fine fabrics and follows ethical production practices across its collections. Every blouse is built with adjustable sizing, offering a 1.5-inch margin on both sides and three internal stitching lines for the perfect custom fit. Vamas is on a quest to transform sarees from family heirlooms into fashion firecrackers.",
      "bigNum": "1960s"
    },
    "approach": {
      "eyebrow": "HOW WE WORK",
      "heading": "Crafted for <em>Growth</em>",
      "items": [
        {
          "num": "01",
          "title": "Deep Brand Audit",
          "body": "We start by understanding the brand's voice, audience and existing content performance before we strategise."
        },
        {
          "num": "02",
          "title": "Content Architecture",
          "body": "Every post is mapped to a goal — awareness, engagement or conversion — and slotted into a structured monthly calendar."
        },
        {
          "num": "03",
          "title": "Execute & Iterate",
          "body": "We launch, track performance weekly and refine based on what the data tells us — no guesswork, only growth."
        }
      ]
    },
    "featured": {
      "eyebrow": "CAMPAIGN REEL",
      "heading": "Campaigns That <em>Convert</em>",
      "video": "",
      "glassLabel": "Featured Work",
      "glassText": "Vamas — building brand recall through content-led storytelling."
    },
    "philosophy": {
      "eyebrow": "OUR PHILOSOPHY",
      "heading": "Strategy <em>×</em> Results",
      "video": "",
      "paragraphs": [
        "For Vamas, we blended brand-aligned storytelling with data-driven posting to drive measurable growth across social platforms.",
        "Every deliverable was mapped to Vamas's identity while connecting with a modern, digital-first audience."
      ]
    },
    "delivered": {
      "eyebrow": "DELIVERABLES",
      "heading": "What We <em>Delivered</em>",
      "cards": [
        {
          "video": "",
          "title": "Content Strategy",
          "body": "Monthly calendar with multi-format posts and reels tailored to Vamas."
        },
        {
          "video": "",
          "title": "Growth & Analytics",
          "body": "Consistent reporting with measurable reach and engagement lift."
        }
      ]
    },
    "cta": {
      "sub": "Want results like these?",
      "label": "Book a discovery call with Raji →",
      "href": "/contact"
    },
    "logoBg": "#211a16"
  }
];

// Brands scraped from their own live sites (greencaphealth.com, thechemistpharm.com,
// crystalcook, chemistrieco.com). Copy and imagery below are taken from those sites.
const LIVE_SITE_BRANDS: Brand[] = [
  {
    ...structuredClone(DEFAULT_BRAND),
    slug: "greencap-health",
    name: "Green Cap Health",
    logo: "/images/brands/greencap-health/logo.png",
    cardDescription:
      "A licensed Texas telehealth practice — real providers, a real pharmacy, and full transparency on every treatment.",
    published: true,
    logoBg: "#0e1a12",
    palette: { primary: "#2f7d4f", bg: "#f2f7f3", bgSoft: "#e6f0e9", ink: "#0a1710", accent: "#7fc79a" },
    brandColor: "linear-gradient(135deg, #2f7d4f, #205c39)",
    hero: {
      eyebrow: "CLIENT ARCHIVE",
      title: "GREEN CAP HEALTH",
      bgText: "GC",
      tagline: "No Insurance, No Waiting Rooms",
      tags: ["Content Writing", "Social Media", "Client Servicing"],
    },
    story: {
      title: "Your Health, Simplified",
      body: "We're not a supplement brand. Green Cap Health is a licensed Texas telehealth practice with real providers, a real pharmacy, and full transparency on everything that goes into your treatment. Affordable, personalised care from the comfort of your home — licensed Texas providers, real prescriptions, free consultation.",
      bigNum: "2,400+",
    },
    approach: {
      eyebrow: "HOW IT WORKS",
      heading: "Straightforward, <em>100% online</em>",
      items: [
        { num: "01", title: "Select Your Plan", body: "Choose your program and complete a quick online intake form." },
        { num: "02", title: "Provider Review", body: "A licensed provider reviews your history to confirm the right plan for you." },
        { num: "03", title: "Ships to Your Door", body: "Compounded by a state-licensed pharmacy partner, with biweekly check-ins and ongoing physician support." },
      ],
    },
    workDone: {
      title: "Work Done",
      bullets: [
        "Physician-led care, not a bot or a one-time consult",
        "Pharmaceutical-grade actives from FDA-registered facilities",
        "State-licensed compounding pharmacy partners",
        "Monthly lab reports included",
      ],
    },
    gallery: { title: "Creative Gallery", images: [] },
    delivered: {
      eyebrow: "DELIVERABLES",
      heading: "What We <em>Delivered</em>",
      cards: [
        { video: "", title: "Treatment Storytelling", body: "Weight loss, hair regrowth, skin care and sexual health explained without supplement-brand gimmicks." },
        { video: "", title: "Trust & Compliance Copy", body: "Sourcing, licensing and lab-report transparency written so patients can actually follow it." },
      ],
    },
    featured: { ...DEFAULT_BRAND.featured, video: "" },
    philosophy: { ...DEFAULT_BRAND.philosophy, video: "" },
    cta: { sub: "Want results like these?", label: "Book a discovery call with Raji →", href: "/contact" },
  },
  {
    ...structuredClone(DEFAULT_BRAND),
    slug: "the-chemist-pharmacy",
    name: "The Chemist Pharmacy",
    logo: "/images/brands/the-chemist-pharmacy/logo.png",
    cardDescription:
      "A Houston compounding pharmacy rejecting one-size-fits-all medicine — precision formulations, delivered next day.",
    published: true,
    logoBg: "#12161f",
    palette: { primary: "#2b6fb0", bg: "#f1f5fa", bgSoft: "#e3ebf5", ink: "#0a1220", accent: "#7fb0dd" },
    brandColor: "linear-gradient(135deg, #2b6fb0, #1d4e7d)",
    hero: {
      eyebrow: "CLIENT ARCHIVE",
      title: "THE CHEMIST",
      bgText: "TCP",
      tagline: "Precision Medicine. Personal Care.",
      tags: ["Content Writing", "Social Media", "Client Servicing"],
    },
    story: {
      title: "We Take Your Health Personally",
      body: "More than a compounding pharmacy, The Chemist Pharmacy is dedicated to transforming how patients experience medication. They reject the one-size-fits-all approach because precise formulation matters — every patient deserves medication that fits their life, not the other way around. Houston, TX, serving patients across Texas.",
      bigNum: "4",
    },
    approach: {
      eyebrow: "OUR PROCESS",
      heading: "From prescription to your door in <em>four steps</em>",
      items: [
        { num: "01", title: "Submit Your Info", body: "Complete the secure new-patient form online or call directly — health goals and medication needs, nothing more." },
        { num: "02", title: "We Handle the Rest", body: "Prescriptions coordinated and compounded precisely to dose, form and delivery." },
        { num: "03", title: "Next-Day Delivery", body: "Complimentary shipping on every order, arriving the next business day." },
      ],
    },
    workDone: {
      title: "Work Done",
      bullets: [
        "Custom compounding explained in plain language",
        "Independent testing and safety messaging",
        "Immediate pharmacist support positioning",
        "Prevention over prescription brand pillar",
      ],
    },
    gallery: { title: "Creative Gallery", images: [] },
    delivered: {
      eyebrow: "DELIVERABLES",
      heading: "What We <em>Delivered</em>",
      cards: [
        { video: "", title: "Service Architecture", body: "Compounding, dermatology, weight management and hormone care structured into a readable set of offers." },
        { video: "", title: "Patient Proof", body: "Testimonials and FAQ content that answer what patients actually ask before switching pharmacy." },
      ],
    },
    featured: { ...DEFAULT_BRAND.featured, video: "" },
    philosophy: { ...DEFAULT_BRAND.philosophy, video: "" },
    cta: { sub: "Want results like these?", label: "Book a discovery call with Raji →", href: "/contact" },
  },
  {
    ...structuredClone(DEFAULT_BRAND),
    slug: "crystal",
    name: "Crystal",
    logo: "/images/brands/crystal/logo.png",
    cardDescription:
      "Crystal Cook N Serve — kitchenware and home solutions simplifying daily chores across India since 1971.",
    published: true,
    logoBg: "#1b1410",
    palette: { primary: "#b8442e", bg: "#faf3ec", bgSoft: "#f2e6da", ink: "#1a1008", accent: "#e0a06f" },
    brandColor: "linear-gradient(135deg, #b8442e, #8c3020)",
    hero: {
      eyebrow: "CLIENT ARCHIVE",
      title: "CRYSTAL",
      bgText: "CC",
      tagline: "Simplifying daily chores, adding pride to every home",
      tags: ["Content Writing", "Social Media", "Client Servicing"],
    },
    story: {
      title: "Half a Century of Trust",
      body: "Since 1971, Crystal has brought together smart design, durable material and everyday practicality to enhance every corner of the home — from cooking to serving to cleaning. Made in India, available in multiple countries: 3 offices, 3 factories, 5 warehouses, 100,000+ outlets and 300,000 sq ft of factory floor.",
      bigNum: "54 yrs",
    },
    approach: {
      eyebrow: "HOW WE WORK",
      heading: "Built for the way <em>India cooks</em>",
      items: [
        { num: "01", title: "Category Storytelling", body: "Cookware, kitchenware, houseware and cleaning mapped into content people can shop from." },
        { num: "02", title: "Heritage With Utility", body: "A 50-year legacy told through everyday practicality rather than nostalgia alone." },
        { num: "03", title: "Retail-Scale Consistency", body: "One voice across a catalogue serving 100,000+ outlets." },
      ],
    },
    workDone: {
      title: "Work Done",
      bullets: [
        "Multi-brand architecture: Crystal, Crystalina, Sparkle",
        "Product-category content across cookware and houseware",
        "Blog and resource programme",
        "Trade and retail messaging",
      ],
    },
    gallery: { title: "Creative Gallery", images: [] },
    delivered: {
      eyebrow: "DELIVERABLES",
      heading: "What We <em>Delivered</em>",
      cards: [
        { video: "", title: "Brand System", body: "Three sub-brands given distinct voices without fracturing the parent identity." },
        { video: "", title: "Everyday Utility Content", body: "Cooking-led storytelling that makes durable hardware feel desirable." },
      ],
    },
    featured: { ...DEFAULT_BRAND.featured, video: "" },
    philosophy: { ...DEFAULT_BRAND.philosophy, video: "" },
    cta: { sub: "Want results like these?", label: "Book a discovery call with Raji →", href: "/contact" },
  },
  {
    ...structuredClone(DEFAULT_BRAND),
    slug: "chemistrie",
    name: "Chemistrie",
    // chemistrieco.com sets its wordmark as live text, not an image — the file
    // served as a "logo" is a product render, so the hero title carries the name.
    logo: "",
    cardDescription:
      "Pharmacist-formulated skincare out of Houston — a quiet standard, applied every morning.",
    published: true,
    logoBg: "#17130f",
    palette: { primary: "#9a7b5f", bg: "#f7f3ee", bgSoft: "#ece4da", ink: "#141009", accent: "#cbb094" },
    brandColor: "linear-gradient(135deg, #9a7b5f, #6f5641)",
    hero: {
      eyebrow: "CLIENT ARCHIVE",
      title: "CHEMISTRIE",
      bgText: "CH",
      tagline: "Made by pharmacists. Made with love.",
      tags: ["Content Writing", "Social Media", "Client Servicing"],
    },
    story: {
      title: "It Began at a Pharmacy Counter",
      body: "Not a marketing meeting. Harin and Zach, compounding pharmacists, spent years behind a counter before Chemistrie existed — formulating for the women they love. Every formula answers to two pharmacists, by name, not a lab Chemistrie doesn't own. Some rituals don't need reinventing; they need to be done well.",
      bigNum: "28",
    },
    approach: {
      eyebrow: "THE PHARMACY STANDARD",
      heading: "Numbers, <em>not noise</em>",
      items: [
        { num: "01", title: "Pharmacist-Formulated", body: "Every formula answers to two pharmacists, by name — every batch." },
        { num: "02", title: "Pharmacist-Selected Sourcing", body: "Actives chosen for concentration, source and half-life, published in an open index." },
        { num: "03", title: "The Ritual", body: "Cleanse, hydrate, renew, repeat — built to layer, not to compete with itself." },
      ],
    },
    workDone: {
      title: "Work Done",
      bullets: [
        "Founder-led narrative from the compounding lab",
        "The Active Index — twelve actives, documented",
        "Collection storytelling: Veil, Velvet, Aura",
        "Trust signals written without rounding up",
      ],
    },
    gallery: { title: "Creative Gallery", images: [] },
    delivered: {
      eyebrow: "DELIVERABLES",
      heading: "What We <em>Delivered</em>",
      cards: [
        { video: "", title: "Editorial Voice", body: "A restrained, pharmacy-grade tone that reads as credibility rather than beauty-industry hype." },
        { video: "", title: "Ingredient Transparency", body: "Concentration, source and half-life published per active — proof in place of claims." },
      ],
    },
    featured: { ...DEFAULT_BRAND.featured, video: "" },
    philosophy: { ...DEFAULT_BRAND.philosophy, video: "" },
    cta: { sub: "Want results like these?", label: "Book a discovery call with Raji →", href: "/contact" },
  },
];

export const DEFAULT_BRANDS: BrandsData = {
  archiveTitle: "Brands",
  archiveIntro: "A selection of brands we've helped grow with strategy, content and community.",
  items: [MAST_MASALA, ...LIVE_SITE_BRANDS, ...IMPORTED_BRANDS],
};

export function findBrand(d: BrandsData, slug: string): Brand | undefined {
  return d.items.find((b) => b.slug === slug);
}
