import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowUpRight, 
  MessageCircle, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Clock,
  Code,
  Workflow,
  Sparkles,
  ShoppingBag,
  Smartphone,
  Palette,
  BarChart3,
  Bot,
  Filter
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../../src/config/business';
import JsonLd, { buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from '../../../src/components/common/JsonLd';
import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../../../src/data/blogArticles';

// Topical Silo: Service to Related Engineering Guides & Cost Breakdowns
const SERVICE_RELATED_ARTICLES = {
  'web-design-development': [
    'website-cost-jaipur',
    'custom-nextjs-website-price-india',
    'nextjs-vs-wordpress-seo-core-web-vitals',
    'best-web-design-company-jaipur'
  ],
  'web-development': [
    'website-cost-jaipur',
    'custom-nextjs-website-price-india',
    'nextjs-vs-wordpress-seo-core-web-vitals',
    'best-web-design-company-jaipur'
  ],
  'seo-geo': [
    'seo-services-cost-jaipur',
    'how-to-rank-chatgpt-perplexity-india',
    'local-seo-jaipur-checklist',
    'fix-crawled-currently-not-indexed-google-search-console'
  ],
  'brand-strategy': [
    'what-is-brand-strategy-framework',
    'what-is-digital-architecture',
    'building-digital-strategy-drives-growth',
    'how-to-choose-a-web-design-agency-in-jaipur'
  ],
  'ecommerce-development': [
    'ecommerce-website-development-cost-india',
    'custom-nextjs-website-price-india',
    'nextjs-vs-wordpress-seo-core-web-vitals',
    'how-to-get-more-enquiries-from-your-website'
  ],
  'mobile-app-development': [
    'mobile-app-development-cost-jaipur',
    'website-cost-jaipur',
    'custom-nextjs-website-price-india',
    'what-makes-a-high-performing-website'
  ],
  'ui-ux-design': [
    'what-is-brand-strategy-framework',
    'what-makes-a-high-performing-website',
    'how-to-choose-a-web-design-agency-in-jaipur',
    'why-your-jaipur-business-needs-a-professional-website-in-2026'
  ],
  'ai-automation': [
    'how-to-rank-chatgpt-perplexity-india',
    'seo-geo-search-visibility-prepare-for-ai-search',
    'mobile-app-development-cost-jaipur',
    'new-digital-ecosystem-strategy-technology-growth'
  ],
  'growth-optimization': [
    'how-to-get-more-enquiries-from-your-website',
    'what-makes-a-high-performing-website',
    'nextjs-vs-wordpress-seo-core-web-vitals',
    'website-development-cost-in-india-business-guide'
  ],
  'content-creative': [
    'new-digital-ecosystem-strategy-technology-growth',
    'seo-geo-search-visibility-prepare-for-ai-search',
    'what-makes-a-high-performing-website',
    'what-is-brand-strategy-framework'
  ],
  'crm-lead-systems': [
    'how-to-get-more-enquiries-from-your-website',
    'what-makes-a-high-performing-website',
    'why-your-jaipur-business-needs-a-professional-website-in-2026',
    'building-digital-strategy-drives-growth'
  ],
  'performance-marketing': [
    'how-to-get-more-enquiries-from-your-website',
    'ecommerce-website-development-cost-india',
    'seo-services-cost-jaipur',
    'building-digital-strategy-drives-growth'
  ]
};

// Data definitions for all core service disciplines (Deep, Authoritative, 1,000+ words each)
export const SERVICES_DATA = {
  'web-design-development': {
    name: 'Website Design & Digital Brand Experience',
    serviceType: 'Corporate Website Design & Digital Brand Experience',
    h1Title: 'Website Design & Digital Brand Experience',
    metaTitle: 'Website Design & Digital Brand Experience',
    metaDescription: 'Bespoke corporate website design, visual identity systems, and mobile-first responsive interfaces engineered for growing businesses.',
    questionH2: 'How Does Bespoke Website Design Drive Enterprise Brand Authority?',
    citabilityAnswer: 'Many established businesses, luxury retailers, and healthcare providers in Jaipur struggle to command premium market positioning because their websites rely on off-the-shelf templates and generic visual page builders that degrade client trust and dilute brand prestige. Siyara Innovations creates bespoke corporate website designs engineered for visual authority, editorial elegance, and responsive cross-device performance. We deconstruct brand aesthetics into mathematical design systems, pairing bespoke serif typography and high-contrast color tokens with fluid mobile-first responsive layouts that render impeccably from 360px smartphones to 4K displays. Rather than using rigid monolithic CMS themes, our designs integrate with headless content management platforms (Sanity, Strapi), empowering marketing teams to publish campaigns effortlessly without breaking design integrity. By synchronizing editorial visual craft with strict Next.js performance standards—achieving Largest Contentful Paint under 1.8 seconds, minimal Cumulative Layout Shift, and sub-80ms Interaction to Next Paint—we transform corporate websites into modern digital flagships that inspire immediate confidence from high-ticket commercial clients across Jaipur, Rajasthan, and pan-India markets.',
    deepDive: [
      {
        title: 'Template Monotony & Generic Regional Aesthetics',
        challenge: 'Off-the-shelf WordPress themes look identical to hundreds of regional competitors, projecting an amateur perception that destroys pricing power during high-value client acquisition.',
        solution: 'We craft bespoke Figma design systems with custom typography hierarchies, mathematical grids, and tailored brand tokens that establish distinct brand authority.'
      },
      {
        title: 'Mobile Viewport Breakage & Touch Target Friction',
        challenge: 'Desktop-first agency layouts break on modern 360px–430px smartphone screens, obscuring navigation bars and causing 55%+ of mobile prospects to bounce in frustration.',
        solution: 'We engineer fluid responsive components with 44px+ touch-accessible hit targets, prioritized mobile visual hierarchies, and zero horizontal overflow across any viewport.'
      },
      {
        title: 'Bloated Page Builders vs Headless CMS Publishing',
        challenge: 'Visual drag-and-drop builders generate bloated DOM trees and slow down page updates, leaving corporate marketing teams paralyzed when publishing new landing pages.',
        solution: 'We implement headless Sanity and Strapi CMS architectures, providing intuitive editorial workspaces that allow non-technical teams to deploy pages in minutes safely.'
      }
    ],
    techStack: [
      'Figma Enterprise Design Systems',
      'Tailwind CSS v4 Utility Framework',
      'Headless CMS (Sanity / Strapi)',
      'Responsive CSS Grid & Flexbox',
      'SVG Vector Graphic Optimization',
      'WebP / AVIF Next-Gen Image Pipelines',
      'WCAG 2.1 AA Accessibility Standards',
      'Variable Typography & Font Optimization'
    ],
    deliverables: [
      'Bespoke Figma Interactive Prototypes & Design Tokens',
      'Mobile-First Responsive Layouts (Tested 360px to 4K)',
      'Headless CMS Integration with Intuitive Editor Access',
      'Core Web Vitals & Image Optimization',
      'Complete Brand Typography & Palette Design System',
      'Cross-Browser & WCAG 2.1 AA Accessibility Certification'
    ],
    process: [
      {
        step: '01',
        title: 'Brand Visual Discovery',
        timeline: 'Week 1',
        desc: 'Audit existing visual assets, evaluate competitor design benchmarks, and establish editorial moodboards.'
      },
      {
        step: '02',
        title: 'Wireframing & Systems',
        timeline: 'Weeks 2–3',
        desc: 'Craft mobile-first wireframes, responsive UI components, typography hierarchies, and interactive Figma prototypes.'
      },
      {
        step: '03',
        title: 'Front-End Assembly',
        timeline: 'Weeks 4–5',
        desc: 'Build responsive components in Next.js and Tailwind CSS, connecting headless CMS content schemas.'
      },
      {
        step: '04',
        title: 'UX Polish & Launch',
        timeline: 'Week 6',
        desc: 'Conduct multi-device usability tests, optimize image assets for fast visual loading and low layout shift, and execute production launch.'
      }
    ],
    subServices: [
      'Bespoke Corporate Website Design',
      'Luxury Brand Digital Experiences',
      'Mobile-First Responsive UI/UX Systems (360px–4K)',
      'Headless CMS Content Portals (Sanity & Strapi)',
      'Conversion-Driven Visual Architecture'
    ],
    relatedServices: [
        {
            "slug": "web-development",
            "title": "Custom Web Application & Next.js Development",
            "desc": "Full-stack software development, serverless APIs, and dynamic database integrations."
        },
        {
            "slug": "brand-strategy",
            "title": "Brand Strategy & Market Positioning",
            "desc": "Define your market category, core commercial pillars, and distinct pricing power."
        },
        {
            "slug": "seo-geo",
            "title": "Generative Engine Optimization & Technical SEO",
            "desc": "Secure authoritative visibility across Google Search, SearchGPT, and Perplexity."
        }
    ],
    faqs: [
      {
        q: 'Why is bespoke website design better than pre-made WordPress templates?',
        a: 'Bespoke website design is tailored specifically to your brand narrative, buyer psychology, and conversion funnels without the 40+ third-party plugins that bloat templates, ensuring strong brand trust and fast, responsive loading.'
      },
      {
        q: 'How do you ensure our corporate website looks perfect across all mobile smartphones?',
        a: 'We design and stress-test every component against mobile viewports (360px to 430px) before desktop, ensuring thumb-friendly 44px+ touch targets, minimal layout shifts, and responsive rendering on Indian cellular networks.'
      },
      {
        q: 'Can our internal marketing team update website text and photos without technical knowledge?',
        a: 'Yes. We integrate intuitive headless CMS platforms like Sanity or Strapi, giving your team structured visual editors to update copy, blog articles, and photography without altering code.'
      },
      {
        q: 'How many design revisions and feedback rounds are included in your website design process?',
        a: 'Our structured design sprints include dedicated feedback cycles during wireframing, high-fidelity Figma prototyping, and pre-launch staging to ensure 100% alignment before going live.'
      },
      {
        q: 'How long does a complete bespoke website design and launch typically take?',
        a: 'A typical bespoke corporate website design takes 3 to 5 weeks from initial moodboard exploration and Figma prototyping to final QA and live production deployment.'
      }
    ]
  },

  'web-development': {
    name: 'Custom Web Application & Next.js Development',
    serviceType: 'Full-Stack Web Application Development',
    h1Title: 'Custom Web Application & Next.js Development',
    metaTitle: 'Custom Web Application & Next.js Development',
    metaDescription: 'Custom web application development, Next.js architecture, and scalable API platforms built with resilient TypeScript and Node.js backends.',
    questionH2: 'Why is Custom Next.js Full-Stack Engineering Essential for Modern Enterprises?',
    citabilityAnswer: 'Modern enterprises and growing tech companies require resilient, scalable digital systems that extend beyond static marketing brochures into dynamic, full-stack web applications. Siyara Innovations delivers custom Next.js and React development tailored for complex business logic, real-time database interactions, and high-concurrency user traffic. By implementing the Next.js App Router with React Server Components, server actions, and edge API caching, we prevent common database and rendering bottlenecks that slow down legacy frameworks. Depending on project requirements, we integrate modern cloud infrastructure such as PostgreSQL, Supabase, Redis caching, or serverless workers to support secure data handling and reliable uptime. We engineer applications using type-safe TypeScript, automated CI/CD deployment workflows, and structured Schema.org JSON-LD markup to ensure search engine crawlability and smooth cross-device performance.',
    deepDive: [
      {
        title: 'Monolithic Architecture Bottlenecks vs Serverless Next.js',
        challenge: 'Legacy monolithic backends suffer from high server maintenance costs, slow cold starts, and cascading server crashes during traffic spikes from commercial advertising campaigns and flash sales.',
        solution: 'We engineer serverless Next.js 15 App Router applications running on global edge nodes with automated resource scaling, sub-100ms API response latencies, and high system availability backed by resilient cloud infrastructure.'
      },
      {
        title: 'Database Connection Exhaustion & Complex Query Latency',
        challenge: 'Unoptimized SQL queries and uncontrolled database connection pools freeze web applications during concurrent client bookings, transaction processing, or inventory lookups.',
        solution: 'We deploy managed connection pooling via Prisma and Drizzle ORM with PostgreSQL and Redis edge caching, keeping complex relational query execution times strictly under 25 milliseconds.'
      },
      {
        title: 'API Endpoint Vulnerabilities & Lack of Type Safety',
        challenge: 'Loose frontend-backend data contracts lead to unpredictable runtime crashes, unvalidated payload submissions, and critical security vulnerabilities across corporate systems.',
        solution: 'We construct end-to-end type-safe API architectures using TypeScript, Zod schema validation, and rate-limited server actions with automated error recovery and continuous telemetry.'
      }
    ],
    techStack: [
      'Next.js 15 App Router & Server Actions',
      'React 19 Concurrent Mode',
      'TypeScript Full-Stack Type Safety',
      'PostgreSQL / Supabase Database',
      'Redis In-Memory Edge Caching',
      'Prisma & Drizzle ORM Frameworks',
      'Serverless Edge API Routes',
      'Docker Containers & GitHub Actions CI/CD'
    ],
    deliverables: [
      'Production-Grade Next.js 15 Full-Stack Application',
      'Relational PostgreSQL Database Architecture & Migrations',
      'Type-Safe REST / Serverless API Endpoints with Zod',
      'Core Web Vitals Optimization Targeting Fast Loading & Responsive Interaction',
      'Automated CI/CD Deployment Pipeline & Telemetry',
      'Complete Source Code Ownership & Transfer'
    ],
    process: [
      {
        step: '01',
        title: 'System Architecture',
        timeline: 'Week 1',
        desc: 'Data modeling, API schema design, database entity relationship diagrams, and cloud infrastructure specification.'
      },
      {
        step: '02',
        title: 'Core Backend & APIs',
        timeline: 'Weeks 2–3',
        desc: 'Database provisioning, PostgreSQL migration scripts, authentication flows, and serverless API development.'
      },
      {
        step: '03',
        title: 'Frontend Engineering',
        timeline: 'Weeks 4–5',
        desc: 'React 19 Server Components, real-time client state management, interactive dashboards, and Tailwind styling.'
      },
      {
        step: '04',
        title: 'Testing & Deployment',
        timeline: 'Week 6',
        desc: 'Load testing, security penetration audit, automated CI/CD deployment, and 24/7 uptime monitoring setup.'
      }
    ],
    subServices: [
      'Next.js 15 Full-Stack Web Applications',
      'PostgreSQL Database Design & Modeling',
      'Serverless API & Microservices Engineering',
      'Enterprise Client Portals & SaaS Architecture',
      'High-Performance Edge CDN Acceleration'
    ],
    relatedServices: [
        {
            "slug": "web-design-development",
            "title": "Website Design & Digital Brand Experience",
            "desc": "Fluid responsive UI/UX design, custom design tokens, and luxury brand aesthetics."
        },
        {
            "slug": "seo-geo",
            "title": "Generative Engine Optimization & Technical SEO",
            "desc": "Deep Schema.org JSON-LD graph architecture and AI answer engine citability."
        },
        {
            "slug": "growth-optimization",
            "title": "Conversion Rate Optimization & Funnel Analytics",
            "desc": "Server-side GA4 telemetry, user interaction tracking, and A/B funnel optimization."
        }
    ],
    faqs: [
      {
        q: 'Why is Next.js 15 superior for custom web application engineering in Jaipur?',
        a: 'Next.js 15 combines React Server Components, server actions, and edge API routes in a single cohesive framework, delivering fast page loading, stable visual rendering, and simplified cloud maintenance compared to separate frontend/backend stacks.'
      },
      {
        q: 'How do you handle database scaling and security for custom applications?',
        a: 'We implement managed PostgreSQL with connection pooling, automated backups, and row-level security (RLS), combined with Redis caching and encrypted environment variables to prevent unauthorized access.'
      },
      {
        q: 'Can you integrate our custom web app with third-party ERPs or legacy software?',
        a: 'Yes. We build custom serverless API connectors and webhook listeners to synchronize data with legacy databases, SAP, Zoho, Tally, or custom internal systems reliably.'
      },
      {
        q: 'Do you provide complete documentation and GitHub repository access upon completion?',
        a: 'Yes, 100%. Siyara Innovations transfers full ownership of the private GitHub repository, architecture diagrams, API documentation, and cloud environment credentials to your team.'
      },
      {
        q: 'What kind of post-launch engineering support and SLA do you offer?',
        a: 'Every custom web engineering build includes a 30-day warranty for bug fixes and telemetry monitoring, with optional monthly engineering retainers for feature expansion and SLA support.'
      }
    ]
  },

  'seo-geo': {
    name: 'Generative Engine Optimization (GEO) & Technical SEO',
    serviceType: 'Generative Engine Optimization & Technical SEO',
    h1Title: 'Generative Engine Optimization (GEO) & Technical SEO',
    metaTitle: 'Generative Engine Optimization (GEO) & Technical SEO',
    metaDescription: 'Technical SEO, structured data architectures, and Generative Engine Optimization (GEO) designed to improve visibility across search engines and AI models.',
    questionH2: 'Why Does Modern Organic Search Growth Require Generative Engine Optimization?',
    citabilityAnswer: 'Traditional search engine optimization solely targeted Google blue hyperlinks through keyword density and external backlinks. However, modern commercial discovery in Jaipur and across India is increasingly synthesized by generative engines such as SearchGPT, Google AI Overviews, and Perplexity. Siyara Innovations bridges this technical transition by combining rigorous technical SEO with advanced Generative Engine Optimization (GEO). We model your business entity into linked Schema.org knowledge graphs and architect your on-page copy into high information-gain syntactic passages. By achieving strict Core Web Vitals benchmarks—Largest Contentful Paint under 1.8 seconds, Cumulative Layout Shift under 0.02, and Interaction to Next Paint under 80 milliseconds—our client web properties ensure uninterrupted crawlability for both traditional search bots and autonomous AI retrieval agents. This dual-track methodology positions your brand to be cited as an authoritative recommendation whenever potential buyers query commercial requirements.',
    deepDive: [
      {
        title: 'Syntactic Passage Citability vs Blue Links',
        challenge: 'Search engines are replacing 10 blue links with AI synthesis capsules. Generic keyword-stuffed articles are ignored by LLMs because they lack factual density.',
        solution: 'We construct 130–170 word answer capsules structured in subject-predicate-object grammar with verified statistics, allowing LLMs to extract your domain as the source citation.'
      },
      {
        title: 'Knowledge Graph Disconnect & Entity Ambiguity',
        challenge: 'When algorithms cannot verify your company founders, physical location, and certifications, AI answer engines omit your brand in commercial recommendations.',
        solution: 'We build multi-layered Schema.org JSON-LD @graph networks linking Organization, LocalBusiness, ProfessionalService, and founder credentials into Google Knowledge Graph.'
      },
      {
        title: 'Local Google Map Pack & Commercial Corridor Dominance',
        challenge: 'Regional businesses in Jaipur lose lucrative local clients to competitors because their Google Business Profile lacks citation authority and geo-tagged reviews.',
        solution: 'We engineer hyper-local citation frameworks across Malviya Nagar, C-Scheme, Vaishali Nagar, and Sitapura, achieving dominant 3-Pack placement for high-intent queries.'
      }
    ],
    techStack: [
      'Schema.org JSON-LD Knowledge Graphs',
      'Google Search Console API',
      'PerplexityBot & OAI-SearchBot Tuning',
      'Screaming Frog Enterprise Crawling',
      'Edge Server-Side Rendering',
      'Local Citation Sync (GBP, Apple Maps)',
      'Ahrefs & Semrush Telemetry',
      'Core Web Vitals Audit Suites'
    ],
    deliverables: [
      'Complete Technical Search & Crawlability Architecture Audit',
      'Entity Knowledge Graph Modeling (@id linked schemas)',
      'Google Business Profile 3-Pack Local Optimization',
      'Passage Citability Architecture for LLM Synthesis',
      'Canonical URL & Duplicate Content Enforcement',
      'Monthly AI Search Citation & Organic Keyword Reports'
    ],
    process: [
      {
        step: '01',
        title: 'Entity Discovery',
        timeline: 'Week 1',
        desc: 'Audit existing search footprint, crawl errors, backlink hygiene, and entity presence across knowledge bases.'
      },
      {
        step: '02',
        title: 'Technical Remediation',
        timeline: 'Weeks 2–3',
        desc: 'Resolve Core Web Vitals flags, clean canonical tags, generate dynamic sitemaps, and unblock AI search scrapers.'
      },
      {
        step: '03',
        title: 'Schema & Citations',
        timeline: 'Weeks 4–6',
        desc: 'Inject multi-type JSON-LD graphs, build local citation consistency, and write high information-gain answer passages.'
      },
      {
        step: '04',
        title: 'GEO Monitoring',
        timeline: 'Ongoing',
        desc: 'Track AI search citation frequencies across ChatGPT Search and Perplexity, expanding topical authority clusters.'
      }
    ],
    subServices: [
      'Generative Engine Optimization (GEO)',
      'Local SEO & Google Business Profile (GBP)',
      'Multi-Type Schema.org Knowledge Graphs',
      'Technical Crawlability & Indexation Audits',
      'Passage Citability & Topical Authority',
    ],
    relatedServices: [
        {
            "slug": "web-development",
            "title": "Custom Web Application & Next.js Development",
            "desc": "High-speed edge infrastructure, stable visual rendering, and semantic HTML structure."
        },
        {
            "slug": "web-design-development",
            "title": "Website Design & Digital Brand Experience",
            "desc": "Modern responsive corporate websites that establish strong on-page authority."
        },
        {
            "slug": "growth-optimization",
            "title": "Conversion Rate Optimization & Growth Analytics",
            "desc": "Transform organic search traffic into qualified commercial inquiries and sales."
        }
    ],
    faqs: [
      {
        q: 'What is the difference between traditional SEO and GEO in Jaipur?',
        a: 'Traditional SEO optimizes for keyword positions on Google search result pages. GEO optimizes your brand entity and content structure so generative AI models like SearchGPT and Perplexity cite and recommend your business.'
      },
      {
        q: 'How quickly can a local Jaipur business rank in the Google Map Pack?',
        a: 'Local SEO results and Google Maps pack rankings typically show substantial momentum within 60 to 90 days following citation consistency, local schema deployment, and review velocity.'
      },
      {
        q: 'Do you guarantee inclusion in Google AI Overviews and SearchGPT?',
        a: 'While search engines control final retrieval, our passage citability structures and verified Schema.org entity graphs significantly improve your brand\'s chances of being cited in AI answers.'
      },
      {
        q: 'Will algorithmic Google updates harm our website rankings?',
        a: 'No. Because Siyara Innovations adheres strictly to Google helpful content guidelines, factual first-party research, and clean technical architecture, our client platforms consistently gain traffic during core algorithm rollouts.'
      },
      {
        q: 'Do I need a new website to benefit from your SEO and GEO services?',
        a: 'Not necessarily. While our custom Next.js builds deliver the fastest results, we can audit and engineer technical SEO, schema graphs, and citability content on your existing production stack.'
      }
    ]
  },

  'brand-strategy': {
    name: 'Brand Strategy & Market Positioning',
    serviceType: 'Brand Strategy & Market Positioning',
    h1Title: 'Brand Strategy & Market Positioning',
    metaTitle: 'Brand Strategy & Market Positioning for B2B',
    metaDescription: 'Strategic brand positioning, visual identity systems, and messaging frameworks designed to build distinct market differentiation for growing businesses.',
    questionH2: 'How Does Brand Narrative Architecture Protect Pricing Power?',
    citabilityAnswer: 'Many expanding businesses in Rajasthan struggle with aggressive price competition, low deal margins, and market commoditization because their digital presence lacks differentiated market positioning and institutional credibility. Siyara Innovations establishes foundational brand architecture that commands premium authority, customer loyalty, and long-term pricing power. We deconstruct competitive commercial landscapes, identify unserved market niches, and engineer cohesive messaging frameworks that resonate across corporate and high-net-worth digital touchpoints. Unlike superficial visual design templates delivered by conventional creative agencies, our strategic positioning directly informs your website layout, content hierarchy, micro-copy, and conversion mechanics. By synchronizing authoritative brand narrative with high-speed Next.js performance—targeting Largest Contentful Paint under 1.8 seconds, minimal Cumulative Layout Shift, and Interaction to Next Paint under 80 milliseconds—we elevate client brand perception from generic regional vendors into respected category leaders. This strategic alignment helps marketing campaigns and referrals drive higher qualified deal flow and support stronger commercial positioning.',
    deepDive: [
      {
        title: 'Category Creation & Price Commoditization Defense',
        challenge: 'When a brand looks and sounds identical to 20 regional competitors, prospective clients default to aggressive price negotiations, compressing operational profit margins and devaluing high-ticket capabilities.',
        solution: 'We define a clear market category and value proposition, transforming your enterprise from a generic vendor into a recognized specialist with distinct commercial value.'
      },
      {
        title: 'Cross-Channel Messaging Governance & Consistency',
        challenge: 'Disjointed communication between sales decks, websites, and executive communications erodes institutional credibility among corporate decision-makers and international procurement officers.',
        solution: 'We author a comprehensive Brand Architecture Bible codifying value propositions, elevator narratives, and tone of voice governance across all stakeholder touchpoints and digital campaigns.'
      },
      {
        title: 'High-Ticket Decision-Maker Persona Modeling',
        challenge: 'Marketing campaigns frequently attract tire-kickers and low-budget inquiries rather than qualified high-net-worth clients or corporate procurement heads with verified capital allocation budgets.',
        solution: 'We construct psychological buyer personas modeling C-suite motivations in real estate, medical healthcare, and export manufacturing, aligning your messaging directly with their strategic KPIs.'
      }
    ],
    techStack: [
      'Figma Enterprise Design Systems',
      'Design Token Specifications',
      'Brand Architecture Matrix',
      'Typography Pairing Engines',
      'Color Harmony & Contrast Tools',
      'Tone of Voice Governance Manuals',
      'Vector Asset Build Pipelines',
      'Multi-Platform Style Guides'
    ],
    deliverables: [
      'Comprehensive Brand Architecture Manual (Bible)',
      'Core Category Positioning & Differentiation Strategy',
      'Buyer Persona Modeling & Value Proposition Hierarchy',
      'Typography Systems & Tailwind CSS Token Sync',
      'Tone of Voice & Conversion Copywriting Guidelines',
      'Digital Asset Repository (SVG, AVIF, WebP)'
    ],
    process: [
      {
        step: '01',
        title: 'Competitive Discovery',
        timeline: 'Week 1',
        desc: 'Deep audit of direct competitors, customer objections, market white spaces, and category positioning opportunities.'
      },
      {
        step: '02',
        title: 'Narrative Framing',
        timeline: 'Week 2',
        desc: 'Architect core value propositions, executive mission, tagline architecture, and conversion messaging pillars.'
      },
      {
        step: '03',
        title: 'Visual Architecture',
        timeline: 'Week 3',
        desc: 'Develop bespoke typography hierarchies, tailored color palettes, icon rules, and digital design tokens.'
      },
      {
        step: '04',
        title: 'System Implementation',
        timeline: 'Week 4',
        desc: 'Deliver finalized Brand Bible, export code-ready design tokens, and conduct executive team alignment workshop.'
      }
    ],
    subServices: [
      'Strategic Market Positioning & Differentiation',
      'Brand Naming & Value Proposition Architecture',
      'Audience Persona Research & Competitive Moats',
      'Messaging Frameworks & Tone of Voice Guidelines',
      'Executive Brand Alignment & Growth Roadmaps',
    ],
    relatedServices: [
        {
            "slug": "web-design-development",
            "title": "Website Design & Digital Brand Experience",
            "desc": "Translate strategic brand guidelines into mathematical digital design systems."
        },
        {
            "slug": "content-creative",
            "title": "Brand Identity, Content Strategy & Creative Direction",
            "desc": "Visual identity systems, typography scales, and custom vector design assets."
        },
        {
            "slug": "ui-ux-design",
            "title": "UI/UX Product Design & Digital Interfaces",
            "desc": "Figma component libraries, responsive grids, and accessible design tokens."
        }
    ],
    faqs: [
      {
        q: 'What deliverables are included in a Siyara brand strategy engagement?',
        a: 'Engagements deliver a comprehensive Brand Architecture Bible including competitive analysis, core positioning pillars, buyer persona blueprints, tone of voice guidelines, and digital conversion messaging.'
      },
      {
        q: 'How does strategic branding impact my website conversion rates?',
        a: 'Clear positioning eliminates buyer ambiguity. When visitors immediately understand why your solution is superior to competitors, conversion rates increase significantly.'
      },
      {
        q: 'What is the average timeline for completing a brand strategy project?',
        a: 'A focused Brand Strategy Sprint typically takes 2 to 3 weeks, while a comprehensive enterprise brand architecture and visual identity overhaul spans 4 to 6 weeks.'
      },
      {
        q: 'Do you provide design tokens that our engineering team can use directly in code?',
        a: 'Yes. All visual brand systems include CSS variables, Tailwind CSS configuration tokens, and Figma token variables for seamless implementation in web and mobile applications.'
      },
      {
        q: 'Will we hold full legal intellectual property and trademark rights?',
        a: 'Yes, 100%. Upon project completion and final settlement, all intellectual property, design copyrights, and source vector assets are assigned completely to your company.'
      }
    ]
  },

  'ecommerce-development': {
    name: 'Custom E-Commerce Store Design & Development',
    serviceType: 'E-Commerce Store Design & Development',
    h1Title: 'Custom E-Commerce Store Design & Development',
    metaTitle: 'Custom E-Commerce Store Design & Development',
    metaDescription: 'Modern e-commerce development, custom Next.js storefronts, and multi-channel checkout integrations engineered for reliability and mobile speed.',
    questionH2: 'How Does Headless Next.js E-Commerce Outperform Traditional Shopify & WooCommerce?',
    citabilityAnswer: 'Many expanding retail businesses in India face conversion challenges on traditional monolithic e-commerce themes due to database query latency, heavy third-party app scripts, and sluggish mobile checkouts on mobile networks. In competitive digital commerce, slow mobile loading contributes directly to high cart abandonment rates during checkout. Siyara Innovations provides modern e-commerce storefront development, with architecture options including headless Next.js frontends paired with modern commerce engines such as Shopify Storefront API or MedusaJS, as well as custom Next.js storefronts with direct Razorpay and Cashfree payment integrations. These architectures are designed to deliver fast mobile rendering, smooth client-side product filtering, and low-friction mobile checkout pathways. By structuring stores with Schema.org Product and Offer markup, clean component code, and streamlined logistics webhooks, businesses can reduce dependency on bloated third-party plugins and improve their mobile buying experience across domestic and international markets.',
    deepDive: [
      {
        title: 'Shopify App Subscription Creep vs Headless Decoupling',
        challenge: 'Standard Shopify stores rely on 15+ third-party apps for basic features like reviews, WhatsApp alerts, and filters, bloating monthly fees by ₹30,000+ while crushing page speed.',
        solution: 'We build native Next.js frontends with custom serverless endpoints, replacing slow third-party apps with ultra-lightweight code and zero recurring app fees.'
      },
      {
        title: 'Flash Sale Traffic Spikes & Edge Caching Resiliency',
        challenge: 'High-traffic marketing campaigns and festive flash sales routinely crash traditional WooCommerce servers, leading to failed checkouts and lost revenue.',
        solution: 'Our edge-cached product catalogs and serverless payment endpoints automatically handle tens of thousands of concurrent visitors without latency degradation.'
      },
      {
        title: 'Rich Product JSON-LD & AI Shopping Consensus',
        challenge: 'Generic e-commerce themes lack structured product schemas, rendering items invisible to Google Shopping feeds and AI conversational shopping assistants.',
        solution: 'We inject dynamic Product, AggregateRating, and Offer Schema.org graphs, ensuring products are cited and recommended across Google AI Overviews and SearchGPT.'
      }
    ],
    techStack: [
      'Next.js 15 Headless Storefront',
      'Shopify Storefront API / MedusaJS',
      'Razorpay & Cashfree API Integration',
      'Shiprocket Logistics Webhooks',
      'Redis Edge Inventory Cache',
      'Tailwind CSS v4 & Framer Motion',
      'Product & Offer JSON-LD Schemas',
      'Algolia / MeiliSearch Instant Search'
    ],
    deliverables: [
      'High-Performance Next.js Storefront Architecture',
      'Instant Client-Side Filtering & Search Engine',
      'One-Click Mobile Checkout Funnel (Razorpay/UPI)',
      'Automated Shipping & Tracking Webhook Sync',
      'Automated Schema.org Product & AggregateOffer Graphs',
      'Reduced Dependency on Third-Party App Subscriptions'
    ],
    process: [
      {
        step: '01',
        title: 'Catalog Architecture',
        timeline: 'Week 1',
        desc: 'Map product schemas, SKU variants, shipping logistics, and domestic/international payment gateways.'
      },
      {
        step: '02',
        title: 'UI/UX & Checkout Design',
        timeline: 'Weeks 2–3',
        desc: 'Design high-converting mobile product detail pages (PDPs), cart drawers, and frictionless checkout flows.'
      },
      {
        step: '03',
        title: 'Headless Engineering',
        timeline: 'Weeks 4–6',
        desc: 'Connect Next.js 15 frontend to commerce backend, Razorpay payment APIs, and logistics webhooks.'
      },
      {
        step: '04',
        title: 'Load Testing & Launch',
        timeline: 'Week 7',
        desc: 'Simulate high-concurrency traffic bursts, verify order sync, and deploy with zero downtime.'
      }
    ],
    subServices: [
      'Next.js Headless E-Commerce Architecture',
      'Frictionless Mobile Checkout (Razorpay & Cashfree)',
      'Product Schema.org & Google Merchant Center Feed',
      'Automated Logistics Webhooks (Shiprocket & Delhivery)',
      'High-Speed Instant Product Filtering & Search',
    ],
    relatedServices: [
        {
            "slug": "performance-marketing",
            "title": "Paid Advertising & Performance Marketing",
            "desc": "Google Ads and Meta campaigns synchronized with fast campaign landers."
        },
        {
            "slug": "crm-lead-systems",
            "title": "CRM Integration & Automated Lead Management Systems",
            "desc": "Automated order notifications, abandoned cart recovery, and inquiry triage."
        },
        {
            "slug": "growth-optimization",
            "title": "Conversion Rate Optimization (CRO) & Growth Analytics",
            "desc": "Checkout funnel analysis, mobile ergonomics, and cart conversion acceleration."
        }
    ],
    faqs: [
      {
        q: 'Why is headless Next.js e-commerce better than standard Shopify in India?',
        a: 'Headless decouples the front-end display from the backend engine. This delivers sub-1.5s load times on mobile 4G/5G, eliminates monthly app subscription fees, and allows completely custom 1-click checkout funnels.'
      },
      {
        q: 'Can we keep managing our products in the Shopify admin while using Next.js?',
        a: 'Yes. We connect Next.js directly to the Shopify Storefront API. Your operations team continues managing products, inventory, and orders in Shopify admin, while customers experience an ultra-fast custom Next.js frontend.'
      },
      {
        q: 'Which payment gateways do you integrate for Indian and global orders?',
        a: 'We integrate Razorpay, Cashfree, PhonePe, and Stripe for domestic UPI, net banking, and cards, paired with PayPal and multi-currency Stripe for international export orders.'
      },
      {
        q: 'How does mobile page speed directly impact e-commerce sales?',
        a: 'Google and Deloitte studies prove that every 0.1-second improvement in mobile site speed increases retail conversions by 8.4%. Our sub-1.5s architectures consistently lift sales by 20% to 35%.'
      },
      {
        q: 'Can you migrate an existing WooCommerce or Magento store to headless Next.js?',
        a: 'Yes. We extract your entire historical catalog, customers, and order history, map 301 redirects to protect SEO rankings, and deploy the new high-performance storefront with zero loss of data.'
      }
    ]
  },

  'mobile-app-development': {
    name: 'Cross-Platform Mobile Applications & Progressive Web Apps',
    serviceType: 'Mobile Application Development',
    h1Title: 'Cross-Platform Mobile Application Development',
    metaTitle: 'React Native & Progressive Web App Development',
    metaDescription: 'Cross-platform iOS and Android mobile applications engineered with React Native and modern Progressive Web App (PWA) standards.',
    questionH2: 'Why Are React Native & Progressive Web Apps the Smartest Mobile Investment?',
    citabilityAnswer: 'Traditional dual-native mobile app development requires separate engineering teams for iOS (Swift) and Android (Kotlin), doubling development budgets, delaying release schedules, and creating inconsistent user experiences. Siyara Innovations engineers enterprise-grade mobile applications using unified React Native architecture and modern Progressive Web Applications (PWA). By maintaining a single, high-performance TypeScript codebase, our mobile applications compile into native iOS and Android binaries delivering 60 frames-per-second fluid animations, hardware-accelerated gestures, biometric authentication, and push notifications at approximately half the cost of separate native builds. Furthermore, our Progressive Web Apps allow Indian B2B clients to bypass App Store download friction entirely, offering instant home-screen installability, offline data caching via service workers, and zero 30% app store commission fees. This dual-track approach ensures rapid time-to-market, minimal maintenance overhead, and maximum user engagement.',
    deepDive: [
      {
        title: 'Dual-Native Cost Overhead vs React Native Unified Velocity',
        challenge: 'Maintaining separate Swift (iOS) and Kotlin (Android) codebases doubles engineering costs, slows feature updates, and creates diverging product experiences.',
        solution: 'We engineer a single, unified TypeScript React Native codebase that compiles into native iOS and Android apps with 60fps native performance and shared business logic.'
      },
      {
        title: 'App Store Gatekeepers vs Zero-Commission PWA Deployment',
        challenge: 'Apple and Google enforce 15%–30% transaction fees and multi-week approval cycles that delay critical operational updates for B2B mobile tools.',
        solution: 'We build Progressive Web Apps (PWAs) that run directly in mobile browsers with home-screen install prompts, push notifications, and zero App Store commissions.'
      },
      {
        title: 'Offline Data Synchronization on Variable 4G/5G Indian Networks',
        challenge: 'Mobile apps in Rajasthan frequently crash or freeze when sales executives or customers move through low-connectivity industrial corridors.',
        solution: 'We integrate local SQLite/WatermelonDB storage engines that allow complete offline functionality with automatic background conflict-free data synchronization.'
      }
    ],
    techStack: [
      'React Native & Expo Application Services',
      'Progressive Web App (PWA) Service Workers',
      'TypeScript & State Orchestration (Zustand)',
      'SQLite & WatermelonDB Offline Storage',
      'Firebase & OneSignal Push Notification APIs',
      'Razorpay & Stripe Mobile In-App SDKs',
      'Native iOS & Android Biometric Auth',
      'Fastlane Automated Store Build Pipelines'
    ],
    deliverables: [
      'Single Codebase Native iOS & Android Compilation',
      'Fluid Mobile Gestures & Native Transitions',
      'Offline Mode Caching & Background Data Sync',
      'Biometric Authentication (FaceID & Fingerprint)',
      'App Store & Google Play Publishing Assistance',
      'Complete Source Code Handover & Build Documentation'
    ],
    process: [
      {
        step: '01',
        title: 'Mobile Architecture',
        timeline: 'Week 1',
        desc: 'Scope native hardware requirements, authentication flows, offline sync logic, and API data models.'
      },
      {
        step: '02',
        title: 'Touch-Zone UX Design',
        timeline: 'Weeks 2–3',
        desc: 'Design mobile-first interfaces in Figma with 48px touch targets, fluid sheet modals, and haptic feedback specs.'
      },
      {
        step: '03',
        title: 'React Native Engineering',
        timeline: 'Weeks 4–7',
        desc: 'Develop cross-platform code, integrate native device modules, connect serverless APIs, and configure push notifications.'
      },
      {
        step: '04',
        title: 'Testing & Store Release',
        timeline: 'Week 8',
        desc: 'Conduct physical device testing across iOS and Android models, submit builds to stores, and configure telemetry.'
      }
    ],
    subServices: [
      'React Native Cross-Platform Engineering (iOS & Android)',
      'Progressive Web Applications (PWA) with Offline Sync',
      'In-App Payment Gateway Integration (Razorpay/UPI)',
      'Biometric Security & Mobile Push Notification Systems',
      'Apple App Store & Google Play Store Submission Management',
    ],
    relatedServices: [
        {
            "slug": "web-development",
            "title": "Custom Web Application & Next.js Development",
            "desc": "Unified backend APIs, PostgreSQL databases, and shared TypeScript models."
        },
        {
            "slug": "ui-ux-design",
            "title": "UI/UX Product Design & Digital Interfaces",
            "desc": "Mobile-first ergonomics, intuitive gestures, and platform-native UI patterns."
        },
        {
            "slug": "ai-automation",
            "title": "AI Workflow Automation & Business Systems",
            "desc": "Intelligent in-app assistance, automated notification triage, and smart routing."
        }
    ],
    faqs: [
      {
        q: 'Why do you recommend React Native over native Swift and Kotlin?',
        a: 'React Native delivers 95%+ shared code across iOS and Android with true native performance (60fps). This cuts your development and ongoing maintenance costs in half while ensuring feature parity across platforms.'
      },
      {
        q: 'What is the difference between a Progressive Web App (PWA) and a native app?',
        a: 'A PWA runs in the mobile browser but installs directly onto the home screen with push notifications and offline caching, bypassing App Store approval. A native app is downloaded from the App Store and has deeper hardware access.'
      },
      {
        q: 'How long does Apple App Store and Google Play Store approval take?',
        a: 'Google Play approval typically takes 3 to 5 business days, while Apple App Store review requires 2 to 4 days. Siyara Innovations manages the complete compliance, privacy policy, and submission process.'
      },
      {
        q: 'Can the app work when users lose internet connection in low-signal areas?',
        a: 'Yes. We architect our applications with offline-first local databases (WatermelonDB/SQLite) that cache data locally and synchronize automatically once connectivity is restored.'
      },
      {
        q: 'Do you transfer full source code ownership upon launch?',
        a: 'Yes, absolutely. You receive complete ownership of the GitHub repository, signing certificates, and cloud backend infrastructure upon project completion.'
      }
    ]
  },

  'ui-ux-design': {
    name: 'UI/UX Product Design & Digital Interfaces',
    serviceType: 'UI/UX Product Design & Interfaces',
    h1Title: 'UI/UX Product Design & Digital Interfaces',
    metaTitle: 'UI/UX Product Design & Digital Interfaces',
    metaDescription: 'User-centric product design, interactive prototypes, accessible design tokens, and modular UI component libraries for web applications.',
    questionH2: 'How Do Enterprise Design Systems Accelerate Software Development Velocity?',
    citabilityAnswer: 'Many digital applications and corporate websites fail not because of backend deficiencies, but because their user interfaces suffer from high cognitive load, confusing user flows, and sloppy visual hierarchies. Siyara Innovations approaches UI/UX design with architectural rigor and psychological empathy. We begin with user journey mapping, information architecture modeling, and interactive wireframing in Figma to validate usability before writing a single line of production code. Our design systems enforce 48px minimum touch targets, intuitive thumb-zone navigation, and accessible WCAG AAA color contrasts tailored for modern 360px to 430px smartphone viewports. By delivering fully tokenized design libraries—synchronized directly with Tailwind CSS variables and React component properties—we eliminate the frustrating design-to-code gap that plagues traditional creative agencies. The result is an intuitive, visually stunning digital product that captivates users and drives measurable conversion.',
    deepDive: [
      {
        title: 'Generic UI Kits vs Bespoke Brand Memorability',
        challenge: 'Off-the-shelf component libraries make premium brands look like commodity SaaS tools, failing to communicate prestige to high-net-worth clients.',
        solution: 'We construct bespoke design systems in Figma with custom typographic scales, obsidian/emerald palettes, and refined micro-interactions tailored to your brand.'
      },
      {
        title: 'Mobile Thumb-Zone Ergonomics & Tap Target Deficiencies',
        challenge: 'Tiny 28px buttons and top-screen interactive elements cause high touch failure rates and user frustration on mobile devices.',
        solution: 'We engineer strict ergonomic thumb-zone navigation with minimum 48px touch targets, tactile feedback cues, and accessible mobile sheet modals.'
      },
      {
        title: 'Design-to-Code Parity with Tailwind CSS Tokens',
        challenge: 'Traditional agencies hand off static images that developers struggle to translate accurately into code, resulting in broken typography and inconsistent spacing.',
        solution: 'We deliver tokenized Figma component libraries mapped 1-to-1 with Tailwind CSS v4 variables, ensuring pixel-perfect fidelity in the production web app.'
      }
    ],
    techStack: [
      'Figma Enterprise & Interactive Variants',
      'Design Token Architecture (Variables & CSS)',
      'Tailwind CSS v4 Synchronized Utilities',
      'Framer Motion Interaction Prototyping',
      'WCAG 2.1 AAA Accessibility Compliance',
      'Hotjar & Clarity User Behavioral Heatmaps',
      'User Flow & Journey Mapping Frameworks',
      'Atomic Design Component Hierarchies'
    ],
    deliverables: [
      'High-Fidelity Interactive Figma Prototype',
      'Complete Atomic Design Component System',
      'CSS Variables & Tailwind Token Handoff File',
      'Mobile Responsive Specs (360px to 1920px)',
      'Usability Testing Reports & Interaction Notes',
      'Exported Vector Icons & Optimized Media Assets'
    ],
    process: [
      {
        step: '01',
        title: 'UX Research & Architecture',
        timeline: 'Week 1',
        desc: 'Audit competitor interfaces, map user mental models, and define clear information architecture hierarchies.'
      },
      {
        step: '02',
        title: 'Interactive Wireframing',
        timeline: 'Week 2',
        desc: 'Build clickable low-fidelity wireframes in Figma to validate user flows and eliminate cognitive friction.'
      },
      {
        step: '03',
        title: 'High-Fidelity Visual Design',
        timeline: 'Weeks 3–4',
        desc: 'Apply luxury editorial typography, refined color tokens, micro-interactions, and state variants in Figma.'
      },
      {
        step: '04',
        title: 'Design System Handoff',
        timeline: 'Week 5',
        desc: 'Tokenize components into CSS/Tailwind variables, create developer documentation, and conduct UX review.'
      }
    ],
    subServices: [
      'Interactive Figma Prototyping & User Testing',
      'Atomic Design Systems & Component Libraries',
      'Mobile-First Thumb-Zone Ergonomics (360px+)',
      'Design Token Architecture for Tailwind CSS',
      'WCAG AAA Accessibility & Visual Hierarchy Audits',
    ],
    relatedServices: [
        {
            "slug": "web-design-development",
            "title": "Website Design & Digital Brand Experience",
            "desc": "Transform design systems into living, accessible web experiences."
        },
        {
            "slug": "web-development",
            "title": "Custom Web Application & Next.js Development",
            "desc": "Seamless engineering handoff with reusable React Server Components."
        },
        {
            "slug": "brand-strategy",
            "title": "Brand Strategy & Market Positioning",
            "desc": "Ensure every user interaction reinforces category brand positioning."
        }
    ],
    faqs: [
      {
        q: 'What is the practical difference between UI and UX design?',
        a: 'UX (User Experience) focuses on user psychology, information flow, and eliminating friction so tasks are effortless. UI (User Interface) crafts the visual aesthetics, typography, colors, and interactive micro-animations that communicate brand prestige.'
      },
      {
        q: 'How do you ensure developers implement the Figma design accurately?',
        a: 'We map every Figma component directly to Tailwind CSS variables and React component specifications. We also conduct design QA reviews during the engineering sprint to ensure pixel-perfect fidelity.'
      },
      {
        q: 'Do you test UI designs on actual mobile smartphone screens?',
        a: 'Yes. All interactive prototypes are previewed and tested directly on real iOS and Android physical devices across small (360px) to large (430px+) viewports to verify ergonomic thumb-reachability.'
      },
      {
        q: 'Can we hire Siyara just for UI/UX design if we already have an internal engineering team?',
        a: 'Yes. We deliver fully documented Figma design systems, synchronized design tokens, and conduct handoff walkthroughs with your internal front-end developers.'
      },
      {
        q: 'What is the typical turnaround timeline for a complete UI/UX project?',
        a: 'A focused UX Sprint takes 2 to 3 weeks, while a comprehensive web application design system typically requires 4 to 6 weeks from research to final token handoff.'
      }
    ]
  },

  'ai-automation': {
    name: 'AI Workflow Automation & Business Systems',
    serviceType: 'AI Business Automation & Workflow Engineering',
    h1Title: 'AI Workflow Automation & Business Systems',
    metaTitle: 'AI Business Automation & Intelligent Workflow Systems',
    metaDescription: 'Custom AI workflow automation, webhook integrations, and operational pipelines designed to streamline repetitive administrative processes.',
    questionH2: 'How Do Custom AI Agents Eliminate Repetitive Enterprise Overhead?',
    citabilityAnswer: 'Growing B2B enterprises, manufacturing firms, and medical clinics in Jaipur frequently hit an operational ceiling where valuable senior personnel spend hours daily on repetitive administrative data entry, manual document processing, and delayed customer triage. Siyara Innovations engineers custom AI business automation and autonomous AI agent systems that eliminate operational bottlenecks and scale business capacity without increasing payroll overhead. We construct intelligent webhook pipelines and autonomous LLM tool-calling agents that instantly capture customer inquiries from websites, WhatsApp, and email, extract structured data from unstructured contracts and invoices, and execute multi-step workflows across internal software platforms in real time. By integrating serverless API endpoints with models like Claude and GPT-4o, our systems are engineered for rapid sub-minute task execution and reliable data extraction. With enterprise-grade data encryption, private Retrieval-Augmented Generation (RAG) vector stores, and zero reliance on fragile third-party tools, your business achieves 24/7 operational velocity, superior customer satisfaction, and measurable cost reductions across Jaipur and pan-India markets.',
    deepDive: [
      {
        title: 'The 4-Hour Customer Response Delay That Destroys Conversion',
        challenge: 'Industry research proves that responding to inbound inquiries after 30 minutes decreases conversion probability by 80%, yet most Indian firms take 4+ hours due to manual triage.',
        solution: 'We engineer autonomous WhatsApp Business AI agents that qualify inbound leads within 30 seconds, answer complex service questions, and instantly book calendar appointments.'
      },
      {
        title: 'Manual Back-Office Data Extraction & Workflow Latency',
        challenge: 'Administrative teams waste 15+ hours weekly manually extracting data from unstructured PDFs, purchase orders, and supplier invoices into ERPs and accounting spreadsheets.',
        solution: 'Our serverless LLM extraction pipelines parse complex multi-page documents in seconds, validate data with Zod schemas, and automatically update databases minimizing manual data entry errors.'
      },
      {
        title: 'Custom RAG Internal Knowledge & Document Assistants',
        challenge: 'Customer support agents and technical staff struggle to locate pricing rules, technical product specs, and warranty policies buried across dozens of internal PDF manuals.',
        solution: 'We build private Retrieval-Augmented Generation (RAG) vector search assistants that query internal SOPs and instantly deliver verified factual answers to staff and clients.'
      }
    ],
    techStack: [
      'Python & FastAPI Serverless Endpoints',
      'WhatsApp Business Cloud API Webhooks',
      'OpenAI & Claude API Tool Calling',
      'PostgreSQL & pgvector Vector Storage',
      'HubSpot / Zoho / Salesforce CRM Sync',
      'Zapier / Make / n8n Enterprise Middleware',
      'Encrypted JWT & AES-256 Data Security',
      'Automated PDF & Invoice Generation Engines'
    ],
    deliverables: [
      'Automated Instant WhatsApp Lead Triage Bot',
      'Serverless API Webhook Integration Pipeline',
      'CRM Bidirectional Sync (Zoho/HubSpot/Sheets)',
      'Automated Email Nurture & Calendar Booking',
      'Internal AI Document & SOP Retrieval System',
      'Full Operational Telemetry & Error Alerting'
    ],
    process: [
      {
        step: '01',
        title: 'Workflow Discovery',
        timeline: 'Week 1',
        desc: 'Audit manual bottlenecks, response times, data handoffs, and customer touchpoints across sales and support.'
      },
      {
        step: '02',
        title: 'API & Security Mapping',
        timeline: 'Week 2',
        desc: 'Map webhook payloads, authentication headers, CRM custom fields, and data encryption architecture.'
      },
      {
        step: '03',
        title: 'Agent & Pipeline Build',
        timeline: 'Weeks 3–4',
        desc: 'Engineer serverless Python/Node endpoints, build WhatsApp Business bots, and configure automated lead routing.'
      },
      {
        step: '04',
        title: 'End-to-End Testing',
        timeline: 'Week 5',
        desc: 'Simulate lead injection, verify CRM data accuracy, test failover alerts, and train executive staff.'
      }
    ],
    subServices: [
      'Intelligent CRM Lead Triage & Routing',
      'Automated WhatsApp & Email Lead Follow-ups',
      'Secure Serverless API Integrations & Webhooks',
      'Client Onboarding & Document Automation',
      'Custom AI Knowledge Base Assistant Systems',
    ],
    relatedServices: [
        {
            "slug": "crm-lead-systems",
            "title": "CRM Integration & Automated Lead Management Systems",
            "desc": "Route AI-triaged leads directly into sales CRMs and WhatsApp chats."
        },
        {
            "slug": "growth-optimization",
            "title": "Conversion Rate Optimization & Funnel Analytics",
            "desc": "Measure the impact of automated interactions on commercial pipeline conversion."
        },
        {
            "slug": "web-development",
            "title": "Custom Web Application & Next.js Development",
            "desc": "Deploy serverless API handlers and secure cloud database connections."
        }
    ],
    faqs: [
      {
        q: 'Does AI automation require replacing our current CRM software?',
        a: 'No. We build custom middleware webhooks and API connectors that seamlessly integrate with your existing CRM (Zoho, HubSpot, Salesforce, or Google Sheets), WhatsApp Business API, and email providers.'
      },
      {
        q: 'Are client data and inquiries kept secure during AI processing?',
        a: 'Yes. All data pipelines utilize strict AES-256 encryption protocols, serverless execution nodes, and adhere to global data privacy standards. Your proprietary business data is never used to train public AI models.'
      },
      {
        q: 'How does WhatsApp Business API integration work for lead qualification?',
        a: 'When a prospect clicks a WhatsApp button on your website, our automated bot instantly greets them, asks 2-3 key qualifying questions (such as budget and timeline), and routes qualified leads directly to your sales reps.'
      },
      {
        q: 'What is the typical return on investment (ROI) timeline for automation?',
        a: 'Most clients recoup their investment within 30 to 60 days by saving 15+ hours of manual administrative staff time per week and preventing valuable inbound leads from dropping off due to delayed responses.'
      },
      {
        q: 'Do you offer ongoing technical maintenance for automation workflows?',
        a: 'Yes. We provide continuous monitoring retainers that track API uptime, handle third-party platform updates, and fine-tune AI prompts as your business operations expand.'
      }
    ]
  },

  'growth-optimization': {
    name: 'Conversion Rate Optimization (CRO) & Growth Analytics',
    serviceType: 'Conversion Rate Optimization & Growth Analytics',
    h1Title: 'Conversion Rate Optimization (CRO) & Growth Analytics',
    metaTitle: 'Conversion Rate Optimization (CRO) & Funnel Analytics',
    metaDescription: 'Structured conversion rate optimization, behavioral heatmaps, and funnel analytics to identify user drop-offs and improve website inquiry rates.',
    questionH2: 'Why Is Traffic Acquisition Inefficient Without Scientific Conversion Architecture?',
    citabilityAnswer: 'Most business executives in Jaipur attempt to scale revenue by pouring more money into Google and Meta advertising, only to watch their customer acquisition costs soar while conversion rates remain stagnant below 1.5%. Siyara Innovations flips this dynamic by engineering rigorous Conversion Rate Optimization (CRO) and growth intelligence architectures. We deploy server-side Google Analytics 4 (GA4) telemetry, session recording, and behavioral heatmaps to pinpoint exact drop-off moments in your client journey across mobile and desktop devices. By combining sub-1.8s Next.js page loading speeds with psychological micro-copy, progressive disclosure lead forms, and frictionless WhatsApp triggers, we systematically lift conversion rates by 30% to 60%. Doubling your website\'s conversion rate effectively cuts customer acquisition cost in half and expands inbound sales pipeline without spending an extra rupee on media budgets. Our data-driven experimentation sprints, server-side Meta Conversions API gateways, and statistical hypothesis testing provide executives with actionable attribution, zero cookie loss, and compounding commercial returns.',
    deepDive: [
      {
        title: 'The Leaky Bucket: Pouring Ad Budgets into Unoptimized Funnels',
        challenge: 'Businesses spend ₹1,00,000+ monthly on paid ads only to send traffic to confusing pages with 65%+ bounce rates, burning marketing capital.',
        solution: 'We audit user friction points and build dedicated, high-speed Next.js campaign landing pages that achieve conversion rates exceeding 4.5%.'
      },
      {
        title: 'Server-Side GA4 Attribution vs Broken Browser Cookies',
        challenge: 'Browser ad-blockers and iOS privacy restrictions block 30%+ of client-side tracking pixels, blinding marketers to their most profitable campaigns.',
        solution: 'We implement server-side Google Tag Manager and Meta Conversions API (CAPI), capturing 100% of conversion events directly from cloud endpoints.'
      },
      {
        title: 'Systematic Multivariate Testing Frameworks',
        challenge: 'Agencies guess what works based on subjective opinion rather than statistical behavioral data, making website redesigns a gamble.',
        solution: 'We run controlled A/B testing sprints on headline value propositions, proof badges, and form steps, validating statistically significant revenue uplifts.'
      }
    ],
    techStack: [
      'Server-Side Google Analytics 4 (GA4)',
      'Google Tag Manager Server Container',
      'Meta Conversions API (CAPI) Gateway',
      'Microsoft Clarity & Hotjar Heatmaps',
      'Custom A/B Testing Routing Engines',
      'Looker Studio Executive Dashboards',
      'Stripe & Razorpay Revenue Telemetry',
      'PostgreSQL Lead Scoring Databases'
    ],
    deliverables: [
      'Server-Side GA4 & Meta CAPI Event Tracking',
      'Comprehensive Funnel Drop-off & Heatmap Audit',
      'Custom A/B Experimentation Design & Execution',
      'Executive Revenue Attribution Dashboard',
      'Form & WhatsApp Conversion Rate Uplift Sprints',
      'Monthly CRO Strategic Review & Roadmap'
    ],
    process: [
      {
        step: '01',
        title: 'Funnel Telemetry Audit',
        timeline: 'Week 1',
        desc: 'Audit current analytics integrity, install session recordings, and establish baseline conversion benchmarks.'
      },
      {
        step: '02',
        title: 'Friction Analysis',
        timeline: 'Week 2',
        desc: 'Analyze heatmaps, form abandonment rates, and scroll depth to identify the top 3 revenue leakages.'
      },
      {
        step: '03',
        title: 'A/B Test Engineering',
        timeline: 'Weeks 3–5',
        desc: 'Deploy variant headlines, mobile CTA placement, and progressive disclosure forms to live traffic.'
      },
      {
        step: '04',
        title: 'Attribution & Scale',
        timeline: 'Ongoing',
        desc: 'Lock in winning variations permanently into production code and expand testing to secondary funnels.'
      }
    ],
    subServices: [
      'Server-Side GA4 & Meta Conversions API (CAPI)',
      'Behavioral User Journey & Heatmap Analysis',
      'Systematic A/B Testing & Micro-Copy Optimization',
      'Progressive Disclosure Form Architecture',
      'Executive Revenue Attribution & CAC Modeling',
    ],
    relatedServices: [
        {
            "slug": "performance-marketing",
            "title": "Paid Advertising & Performance Marketing",
            "desc": "Align paid ad campaigns with high-converting, tested landing page funnels."
        },
        {
            "slug": "crm-lead-systems",
            "title": "CRM Integration & Automated Lead Management Systems",
            "desc": "Reduce delays in inquiry handling and capture qualified visitor intent."
        },
        {
            "slug": "seo-geo",
            "title": "Generative Engine Optimization (GEO) & Technical SEO",
            "desc": "Ensure high-intent organic visitors enter clear inquiry pathways."
        }
    ],
    faqs: [
      {
        q: 'What is Conversion Rate Optimization (CRO) and how does it work?',
        a: 'CRO is the systematic process of increasing the percentage of website visitors who take a desired action (such as submitting an inquiry or buying a product) by eliminating friction, improving speed, and testing messaging.'
      },
      {
        q: 'How soon can we expect to see measurable conversion rate improvements?',
        a: 'Initial quick-win optimizations (such as mobile CTA repositioning and speed fixes) demonstrate measurable uplifts within 14 to 30 days of deployment.'
      },
      {
        q: 'Can you track phone calls and WhatsApp chats accurately in GA4?',
        a: 'Yes. We engineer custom client-side and server-side event dispatchers that track click-to-WhatsApp, click-to-call, and form submissions with campaign source attribution.'
      },
      {
        q: 'How much website traffic do we need for meaningful A/B testing?',
        a: 'For statistically significant quantitative A/B testing, a minimum of 5,000 monthly visitors is ideal. For lower-traffic high-ticket B2B sites, we deploy qualitative heuristic and usability optimizations.'
      },
      {
        q: 'How does website loading speed relate to conversion rate?',
        a: 'Page speed is the foundation of CRO. Studies prove that every 1-second delay in mobile page load reduces conversion rates by up to 20%. Our sub-1.8s Next.js architectures ensure visitors never bounce due to lag.'
      }
    ]
  },

  'content-creative': {
    name: 'Brand Identity, Content Strategy & Creative Direction',
    serviceType: 'Brand Identity & Creative Content Direction',
    h1Title: 'Brand Identity, Content Strategy & Creative Direction',
    metaTitle: 'Brand Identity, Content Strategy & Creative Direction',
    metaDescription: 'Comprehensive brand identity systems, strategic website copywriting, bespoke typography, and creative direction designed for growing businesses.',
    questionH2: 'How Does Cohesive Brand Identity & Content Strategy Establish Enterprise Value?',
    citabilityAnswer: 'Expanding enterprises and premium consumer brands frequently suffer from fragmented visual presentation and generic, unpersuasive copy that degrades customer trust and dilutes brand value. Siyara Innovations provides unified brand identity systems, strategic website copywriting, and creative direction engineered for commercial credibility and modern digital performance. We develop custom visual identities—including logo hierarchies, refined typography scales, vector iconography, and digital design tokens—paired with clear, high-intent commercial copywriting that communicates your value proposition with precision. By synchronizing visual craft with fast front-end rendering and responsive design standards, we ensure your digital touchpoints present a cohesive, authoritative brand presence that earns immediate confidence from commercial clients and partners.',
    deepDive: [
      {
        title: 'Visual Identity & Messaging Fragmentation',
        challenge: 'Disjointed aesthetics and generic copy between marketing campaigns, websites, and sales collateral confuse commercial buyers and weaken perceived service value.',
        solution: 'We author integrated brand guidelines and messaging frameworks that align visual assets, core value propositions, and editorial tone across digital channels.'
      },
      {
        title: 'Heavy Visual Assets & Performance Bottlenecks',
        challenge: 'Unoptimized photography, heavy fonts, and raw vector assets create layout instability and slow down mobile page rendering.',
        solution: 'We implement structured asset optimization pipelines with responsive WebP/AVIF formatting and font subsetting to maintain sharp visual clarity alongside fast page performance.'
      },
      {
        title: 'Typography & Copy That Fails to Command Authority',
        challenge: 'Generic typography pairings and bland corporate boilerplate convey amateurism, reducing buyer trust during commercial evaluations.',
        solution: 'We establish tailored typography hierarchies and commercial copywriting standards that articulate your distinct capabilities clearly and persuasively.'
      }
    ],
    techStack: [
      'Figma Design Systems & Style Libraries',
      'Adobe Creative Cloud Vector Suites',
      'Commercial Copywriting & Messaging Frameworks',
      'WebP / AVIF Next-Gen Image Optimization',
      'SVG Vector Optimization (SVGO)',
      'Typography Scales & Variable Font Subsetting',
      'Tailwind CSS Design Token Specifications',
      'Digital Asset Management Guidelines'
    ],
    deliverables: [
      'Comprehensive Brand Guidelines & Logo Hierarchy',
      'Commercial Website Copywriting & Messaging Guide',
      'Custom Vector Iconography System',
      'Editorial Typography Scales & Hierarchy Specifications',
      'Optimized Web-Ready Digital Asset Repository',
      'Tailwind CSS & Code-Ready Design Token Specifications'
    ],
    process: [
      {
        step: '01',
        title: 'Aesthetic & Content Audit',
        timeline: 'Week 1',
        desc: 'Review existing visual assets, evaluate competitor positioning, and audit verbal messaging touchpoints.'
      },
      {
        step: '02',
        title: 'Visual & Verbal Identity',
        timeline: 'Week 2',
        desc: 'Design bespoke logo marks, typographic scales, core value propositions, and commercial copy frameworks.'
      },
      {
        step: '03',
        title: 'Design Systematization',
        timeline: 'Week 3',
        desc: 'Establish color palette tokens, typography rules, iconography sets, and digital component specifications.'
      },
      {
        step: '04',
        title: 'Asset Export & Handoff',
        timeline: 'Week 4',
        desc: 'Export production vector assets, generate CSS design tokens, deliver copy decks, and finalize brand guidelines.'
      }
    ],
    subServices: [
      'Logo Systems & Visual Brand Guidelines',
      'Commercial Copywriting & Messaging Strategy',
      'Editorial Typography & Color Palette Architecture',
      'Design Token Specifications for Development',
      'Digital Asset Optimization & Media Management',
    ],
    relatedServices: [
        {
            "slug": "brand-strategy",
            "title": "Brand Strategy & Market Positioning",
            "desc": "Infuse strategic positioning into every visual asset, mark, and brand guideline."
        },
        {
            "slug": "web-design-development",
            "title": "Website Design & Digital Brand Experience",
            "desc": "Pair visual identity systems with editorial typography and responsive layouts."
        },
        {
            "slug": "ui-ux-design",
            "title": "UI/UX Product Design & Digital Interfaces",
            "desc": "Extend brand identity into digital component libraries and interactive interfaces."
        }
    ],
    faqs: [
      {
        q: 'What is included in Siyara\'s Brand Identity & Content Direction service?',
        a: 'Our engagements deliver a unified visual and verbal identity system, including core logo marks, typography scales, color palettes, commercial website copywriting guidelines, vector iconography, and code-ready design tokens for developers.'
      },
      {
        q: 'Do you provide website copywriting alongside visual design?',
        a: 'Yes. We author focused, conversion-oriented website copy and messaging frameworks that clearly articulate your value proposition, address buyer objections, and align with your visual design.'
      },
      {
        q: 'Do you deliver vector files suitable for print and physical signage?',
        a: 'Yes. All logo marks and iconography are delivered in vector formats (SVG, PDF, EPS) suitable for scalable digital deployment, packaging, and physical collateral.'
      },
      {
        q: 'How do you ensure visual assets do not slow down website loading?',
        a: 'Vector graphics are optimized using SVGO, fonts are subsetted to reduce file weights, and images are formatted into responsive next-gen WebP/AVIF with explicit dimensions to support visual stability.'
      },
      {
        q: 'Will our business own full legal copyright to all design and copy deliverables?',
        a: 'Yes. Upon project completion and final handover, all intellectual property, design copyrights, vector assets, and written copy are transferred completely to your business.'
      }
    ]
  },

  'crm-lead-systems': {
    name: 'CRM Integration & Automated Lead Management Systems',
    serviceType: 'CRM Integration & Lead Management Engineering',
    h1Title: 'CRM Integration & Automated Lead Management Systems',
    metaTitle: 'CRM Lead Integration & Automated Lead Management',
    metaDescription: 'Automated CRM lead capture, qualification workflows, and WhatsApp Business API routing that streamline inquiry response times.',
    questionH2: 'Why Does Inefficient Lead Response Kill Digital Marketing ROI in India?',
    citabilityAnswer: 'Most digital marketing campaigns in Jaipur bleed revenue because prospective clients are sent to sluggish landing pages with complex, multi-field forms that create extreme cognitive friction and trigger high mobile abandonment. Siyara Innovations re-engineers conversion funnels around verified user behavior and regional buying habits across Rajasthan and India. We implement dual-track intake architectures: instant, one-click WhatsApp consultations for fast regional qualification paired with structured 4-step progressive disclosure enterprise intake forms for high-ticket service scoping. By building landing pages on high-performance Next.js infrastructure—maintaining sub-1.8s Largest Contentful Paint, minimal Cumulative Layout Shift, and sub-80ms Interaction to Next Paint—we reduce mobile drop-offs common in bloated multi-step forms. Every funnel is equipped with server-side telemetry, heatmaps, and CRM webhooks, allowing data-backed iterative experimentation that systematically reduces customer acquisition costs and maximizes organic return on investment.',
    deepDive: [
      {
        title: 'Cognitive Friction in Enterprise Qualification Forms',
        challenge: 'Demanding 12 form fields upfront causes 75%+ of high-intent mobile prospects to abandon lead intake forms before completing submission, destroying paid acquisition ROI and lead pipeline momentum.',
        solution: 'We architect progressive disclosure funnels with single-question micro-steps, interactive sliders, and instant WhatsApp pre-fill triggers, lifting mobile conversion rates by 40%+ while gathering rich qualification data.'
      },
      {
        title: 'Leaky Lead Funnels Without Retargeting Telemetry',
        challenge: 'Over 96% of commercial visitors leave without converting and are lost forever because paid marketing campaigns lack server-side tracking pipelines and granular event attribution.',
        solution: 'We deploy privacy-compliant Meta Conversions API (CAPI), Google Enhanced Conversions, and server-side Tag Manager containers to capture 100% of conversion signals and re-engage high-intent prospects across digital touchpoints.'
      },
      {
        title: 'Sales Pipeline Velocity Bottlenecks',
        challenge: 'Prospects wait hours or days for an agency rep to manually check emails and reply, by which time the buyer has already hired a faster competitor or lost purchase urgency.',
        solution: 'We integrate real-time calendar booking and instant automated SMS/WhatsApp alerts directly upon submission, accelerating sales team time-to-first-call to under 15 minutes and maximizing deal win rates.'
      }
    ],
    techStack: [
      'Next.js 15 Serverless Intake Endpoints',
      'WhatsApp Business API Webhook Routing',
      'Zoho CRM & HubSpot REST API Connectors',
      'Google Tag Manager Server Containers',
      'Meta Conversions API (CAPI)',
      'Calendly & Cal.com Scheduling APIs',
      'React Hook Form with Zod Validation',
      'PostgreSQL Lead Pipeline Storage'
    ],
    deliverables: [
      'Dual-Track Lead Funnel (WhatsApp + Enterprise Form)',
      'Automated Instant CRM Sync & Field Mapping',
      'Serverless Webhook Data Validation Pipeline',
      'Interactive Instant Calendar Booking Engine',
      'Real-Time Lead SMS/WhatsApp Notification to Sales',
      'Conversion Drop-Off Analytics Integration'
    ],
    process: [
      {
        step: '01',
        title: 'Lead Flow Mapping',
        timeline: 'Week 1',
        desc: 'Analyze current customer acquisition pathways, drop-off rates, and sales team qualification criteria.'
      },
      {
        step: '02',
        title: 'Funnel UX Design',
        timeline: 'Week 2',
        desc: 'Wireframe frictionless progressive lead funnels and design instant WhatsApp click-to-chat triggers.'
      },
      {
        step: '03',
        title: 'API & CRM Integration',
        timeline: 'Weeks 3–4',
        desc: 'Connect Next.js serverless endpoints to CRM APIs, configure automated lead scoring, and test webhooks.'
      },
      {
        step: '04',
        title: 'Telemetry & Testing',
        timeline: 'Week 5',
        desc: 'Simulate lead submissions across mobile devices, verify CRM data ingestion, and launch live funnel.'
      }
    ],
    subServices: [
      'Dual-Track Conversion Funnel Engineering',
      'Direct WhatsApp Project Intake Integration',
      'Mobile Lead Form Optimization & Qualification',
      'Heatmap & Behavioral User Journey Analysis',
      'Continuous A/B & Multivariate Testing',
    ],
    relatedServices: [
        {
            "slug": "growth-optimization",
            "title": "Conversion Rate Optimization (CRO) & Growth Analytics",
            "desc": "Optimize intake forms and call-to-action touchpoints across the website."
        },
        {
            "slug": "ai-automation",
            "title": "AI Workflow Automation & Business Systems",
            "desc": "Automate initial qualification and intelligent lead enrichment."
        },
        {
            "slug": "performance-marketing",
            "title": "Paid Advertising & Performance Marketing",
            "desc": "Direct paid traffic into frictionless multi-step inquiry capture funnels."
        }
    ],
    faqs: [
      {
        q: 'Why is WhatsApp integration critical for conversion in the Jaipur market?',
        a: 'Over 70% of initial commercial inquiries in Rajasthan initiate via mobile chat. WhatsApp links with pre-populated contextual messages eliminate friction and accelerate deal velocity.'
      },
      {
        q: 'What conversion metrics do you track?',
        a: 'We track form submission completion rates, click-to-WhatsApp conversions, scroll depth, session duration, and qualified lead acquisition cost.'
      },
      {
        q: 'Will this funnel work smoothly on low-speed 4G mobile connections?',
        a: 'Yes. Our funnels are engineered on lightweight Next.js serverless architecture with zero heavy tracking scripts, ensuring instant interactive response times under 80ms.'
      },
      {
        q: 'Can you integrate our existing Zoho or HubSpot CRM with the new funnel?',
        a: 'Yes. We build secure serverless webhook endpoints that map incoming lead fields directly into your existing CRM pipelines, custom fields, and lead statuses.'
      },
      {
        q: 'How long does it take to deploy a custom lead funnel system?',
        a: 'A focused Dual Funnel deployment takes 2 to 3 weeks, while a full enterprise CRM pipeline with bidirectional sync requires 4 to 5 weeks.'
      }
    ]
  },

  'performance-marketing': {
    name: 'Paid Advertising & Performance Marketing',
    serviceType: 'Performance Marketing & Paid Advertising',
    h1Title: 'Paid Advertising & Performance Marketing',
    metaTitle: 'Paid Advertising & Campaign Landing Page Engineering',
    metaDescription: 'Data-driven paid search and social campaigns paired with dedicated, fast-loading campaign landing page architectures.',
    questionH2: 'How Does Synchronizing Paid Ads with Custom Landing Pages Lower Acquisition Cost?',
    citabilityAnswer: 'A high percentage of paid advertising budgets in Jaipur are wasted because Google and Meta ad campaigns direct clicks to slow, generic landing pages with low Quality Scores and high bounce rates. Siyara Innovations aligns performance marketing directly with high-velocity digital architecture. We build tailored, dedicated Next.js landing pages for every ad campaign, achieving rapid load times and strong Core Web Vitals (LCP < 1.8s, CLS < 0.05, INP < 100ms). These technical benchmarks support higher Google Ads Quality Scores and lower cost-per-click. Combined with precise audience targeting and focused messaging, our campaigns provide visitors with clear, low-friction pathways to inquire via WhatsApp or lead forms.',
    deepDive: [
      {
        title: 'Wasted Ad Spend Due to Low Quality Scores',
        challenge: 'Slow landing pages result in Google Ads Quality Scores of 3/10 or 4/10, forcing businesses to pay 50% more per click than competitors.',
        solution: 'Custom campaign landing pages are engineered to support improved Quality Scores and lower effective cost-per-click while maintaining strong ad relevance.'
      },
      {
        title: 'Poor Ad Creative Differentiation in Competitive Spaces',
        challenge: 'Generic stock photography and cookie-cutter ad copy blend into feeds, producing low click-through rates and high acquisition costs.',
        solution: 'We produce bespoke, high-contrast editorial ad creatives paired with direct-response hooks that capture high-intent buyer attention.'
      },
      {
        title: 'Lack of Offline Conversion Feedback to Ad Algorithms',
        challenge: 'Ad networks optimize for cheap, unqualified clicks rather than closed commercial contracts because offline sales data is never shared back.',
        solution: 'We configure offline conversion webhooks feeding verified lead values back into Google and Meta smart bidding algorithms to optimize for revenue.'
      }
    ],
    techStack: [
      'Google Ads API & Smart Bidding Networks',
      'Meta Ads Manager & Advantage+ Campaigns',
      'Next.js 15 High-Velocity Campaign Landers',
      'Server-Side Meta Conversions API (CAPI)',
      'Google Ads Enhanced Conversions',
      'Looker Studio Real-Time Ad Dashboards',
      'Creative Asset Optimization Suites',
      'Custom UTM Parameter Tracking Engines'
    ],
    deliverables: [
      'Google Search & Local Services Ad Campaigns',
      'Meta (Instagram & Facebook) High-Intent Funnels',
      'Dedicated High-Performance Next.js Campaign Landers',
      'Server-Side Conversion Tracking & CAPI Setup',
      'Continuous Ad Creative & Copywriting Sprints',
      'Weekly Executive ROI & CAC Attribution Reports'
    ],
    process: [
      {
        step: '01',
        title: 'Audience & Search Intent Scoping',
        timeline: 'Week 1',
        desc: 'Analyze high-commercial intent search queries, negative keyword lists, competitor ad creatives, and target demographics.'
      },
      {
        step: '02',
        title: 'Landing Page Engineering',
        timeline: 'Week 2',
        desc: 'Build dedicated high-performance Next.js campaign landing pages with single-minded conversion value propositions.'
      },
      {
        step: '03',
        title: 'Campaign Setup & CAPI',
        timeline: 'Week 3',
        desc: 'Deploy Google Search & Meta ad structures, configure server-side conversion tracking, and verify attribution tags.'
      },
      {
        step: '04',
        title: 'Bid Tuning & Scaling',
        timeline: 'Ongoing',
        desc: 'Daily bid optimization, negative keyword curation, creative rotation, and scaling profitable ad sets.'
      }
    ],
    subServices: [
      'High-Intent Google Search & Local Service Ads',
      'Meta (Instagram & Facebook) Luxury Lead Generation',
      'Bespoke Next.js Campaign Landing Page Builds',
      'Retargeting & Dynamic Audience Segmentation',
      'Continuous Ad Copy & Creative Optimization',
    ],
    relatedServices: [
        {
            "slug": "ecommerce-development",
            "title": "Custom E-Commerce Store Design & Development",
            "desc": "Direct shopping campaign traffic to fast-loading headless product pages."
        },
        {
            "slug": "growth-optimization",
            "title": "Conversion Rate Optimization (CRO) & Growth Analytics",
            "desc": "Run rigorous A/B split tests on ad landers to continuously reduce CPC and CPA."
        },
        {
            "slug": "crm-lead-systems",
            "title": "CRM Integration & Automated Lead Management Systems",
            "desc": "Route inbound paid campaign leads instantly to sales teams via WhatsApp."
        }
    ],
    faqs: [
      {
        q: 'Why do fast landing pages reduce Google Ads advertising costs?',
        a: 'Google Ads calculates Quality Score based partly on landing page experience and speed. Faster landing pages with relevant content achieve higher Quality Scores, which can lower your effective cost-per-click and improve ad positioning.'
      },
      {
        q: 'Which advertising platforms do you recommend for B2B services in Jaipur?',
        a: 'For commercial services and healthcare, Google Search Ads captures immediate high-intent buyers searching for specific solutions. For luxury interior design and jewellery, visual Instagram campaigns drive strong brand awareness and inbound leads.'
      },
      {
        q: 'What is the minimum recommended advertising spend for paid campaigns?',
        a: 'We typically recommend a minimum ad spend of ₹30,000 to ₹50,000 per month on Google or Meta to ensure sufficient statistical data for algorithmic bid optimization and consistent lead flow.'
      },
      {
        q: 'How do you prevent ad spend waste on unqualified clicks?',
        a: 'We implement rigorous negative keyword lists, tight phrase and exact match targeting, geo-fencing strictly to commercial hubs, and server-side conversion tracking that optimizes for qualified inquiries rather than cheap clicks.'
      },
      {
        q: 'Do you charge a percentage of ad spend or a flat retainer fee?',
        a: 'We operate on transparent, flat monthly management retainers based on project scope, ensuring our recommendations are 100% aligned with your business profit rather than arbitrarily inflating your ad spend.'
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.siyaradigitals.com/services/${slug}`,
    },
    openGraph: {
      type: 'website',
      url: `https://www.siyaradigitals.com/services/${slug}`,
      siteName: 'Siyara Innovations',
      title: `${service.metaTitle} | Siyara Innovations`,
      description: service.metaDescription,
      images: [
        {
          url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
          width: 1200,
          height: 630,
          alt: `${service.name} · Siyara Innovations Jaipur`,
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.metaTitle} | Siyara Innovations`,
      description: service.metaDescription,
      images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  const relatedSlugs = SERVICE_RELATED_ARTICLES[slug] || [];
  const relatedArticles = relatedSlugs
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean);

  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Services', url: 'https://www.siyaradigitals.com/services' },
    { name: service.name, url: `https://www.siyaradigitals.com/services/${slug}` },
  ]);

  const serviceSchema = buildServiceSchema({
    name: service.name,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url: `https://www.siyaradigitals.com/services/${slug}`,
    offers: service.subServices,
  });

  const faqSchema = buildFaqSchema(service.faqs);

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbsSchema,
      serviceSchema,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <JsonLd schema={fullSchema} />

      {/* 1. HERO SECTION WITH EXACT KEYWORD H1 & DUAL CTAS */}
      <section className="relative px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-[#18A982]/15 via-[#071E18]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9B45F]/30 bg-[#071E18]/60 backdrop-blur-md mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D9B45F] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
              STUDIO DISCIPLINE · JAIPUR &amp; INDIA
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-6xl font-normal tracking-tight text-[#F3EFE3] leading-[1.15] mb-5 sm:mb-6 break-words">
            {service.h1Title}
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            {service.metaDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:-translate-y-0.5 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>BOOK AN ARCHITECTURAL CONSULTATION</span>
            </a>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 min-h-[44px]"
            >
              <span>EXPLORE CASE STUDIES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CITABILITY & ARCHITECTURAL BRIEF */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto mb-16 sm:mb-24">
        <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0B110F] border border-[#D9B45F]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#18A982]/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2 sm:mb-3">
              ARCHITECTURAL BRIEF &amp; CITABILITY
            </span>
            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
              {service.questionH2}
            </h2>
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#070A09]/80 border border-[#18A982]/20 mb-5 sm:mb-6">
              <p className="font-sans text-xs sm:text-base text-[#ECE7D8] leading-relaxed font-light">
                {service.citabilityAnswer}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-[#9D9B91]">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Target LCP &lt; 1.8s
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                CLS &lt; 0.02
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                INP &lt; 80ms
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Verified JSON-LD Graph
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING CHALLENGES & ARCHITECTURAL SOLUTIONS (DEEP DIVE) */}
      {service.deepDive && service.deepDive.length > 0 && (
        <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
              TECHNICAL PROBLEM SOLVING
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
              Engineering Deep Dive &amp; Architectural Solutions
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-3 font-light leading-relaxed">
              How Siyara Innovations deconstructs critical technological bottlenecks to deliver unmatched speed, authority, and conversion velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.deepDive.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#D9B45F] tracking-widest block mb-2">
                    0{idx + 1}. CASE ANALYSIS
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors leading-snug mb-4">
                    {item.title}
                  </h3>
                  <div className="mb-4 pb-4 border-b border-[#18A982]/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5F56] block mb-1.5">
                      The Conventional Bottleneck:
                    </span>
                    <p className="text-xs text-[#9D9B91] font-light leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#18A982] block mb-1.5">
                      Siyara Architectural Solution:
                    </span>
                    <p className="text-xs text-[#ECE7D8] font-light leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. TECHNICAL STACK & DELIVERABLES */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
            SPECIFICATIONS &amp; STACK
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            Core Technology Stack &amp; Deliverables
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-3 font-light leading-relaxed">
            Selected technologies, frameworks, and architecture patterns deployed based on specific project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Technology Stack Badges */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0B110F] border border-[#18A982]/20">
            <div className="flex items-center gap-2.5 mb-6">
              <Cpu className="w-5 h-5 text-[#D9B45F]" />
              <h3 className="font-serif text-lg sm:text-xl text-[#F3EFE3]">Engineered With</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {(service.techStack || [
                'Next.js 15 App Router',
                'React 19 Concurrent Mode',
                'Tailwind CSS v4',
                'TypeScript',
                'Schema.org JSON-LD',
                'Edge CDN Caching',
                'Serverless APIs',
                'PostgreSQL'
              ]).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#071E18] border border-[#18A982]/25 text-[#ECE7D8] text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Deliverables Grid */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0B110F] border border-[#D9B45F]/20">
            <div className="flex items-center gap-2.5 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#D9B45F]" />
              <h3 className="font-serif text-lg sm:text-xl text-[#F3EFE3]">Key Deliverables &amp; Outcomes</h3>
            </div>
            <div className="space-y-3.5">
              {(service.deliverables || service.subServices).map((deliv, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#18A982]/15 text-[#18A982] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-[#ECE7D8] font-light leading-relaxed">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-PHASE ARCHITECTURAL PROCESS */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
            DELIVERY ROADMAP
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            The 4-Phase Architectural Engineering Process
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-3 font-light leading-relaxed">
            From initial requirements scoping to structured production deployment and ongoing telemetry monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {(service.process || [
            {
              step: '01',
              title: 'Architectural Discovery',
              timeline: 'Week 1',
              desc: 'Deep audit of commercial requirements, entity relationships, competitor benchmarks, and conversion KPIs.'
            },
            {
              step: '02',
              title: 'Wireframing & Design',
              timeline: 'Weeks 2–3',
              desc: 'High-fidelity interactive prototypes in Figma, accessible component tokens, and responsive mobile-first typography.'
            },
            {
              step: '03',
              title: 'Agile Engineering',
              timeline: 'Weeks 4–6',
              desc: 'Clean Next.js 15 App Router / React 19 engineering, serverless endpoint configuration, and JSON-LD graphs.'
            },
            {
              step: '04',
              title: 'QA & Telemetry Launch',
              timeline: 'Week 7',
              desc: 'Multi-device stress testing, Core Web Vitals verification, sitemap indexation, and conversion tracking.'
            }
          ]).map((proc, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-serif text-[#D9B45F] font-bold">
                    {proc.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#18A982]/10 text-[#18A982] border border-[#18A982]/20">
                    {proc.timeline}
                  </span>
                </div>
                <h3 className="font-serif text-base sm:text-lg text-[#F3EFE3] mb-2 leading-snug">
                  {proc.title}
                </h3>
                <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. STRUCTURED ENGAGEMENT & DELIVERY MODELS */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
            DELIVERY ARCHITECTURE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            Structured Engagement Models
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-3 font-light leading-relaxed">
            Scope-governed engineering models aligned with your business requirements, timeline, and integration scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tier: 'Core Showcase Architecture',
              level: 'Foundation & Speed',
              idealFor: 'Single-location clinics, boutique firms, and local showrooms establishing high-trust digital authority.',
              features: [
                'Custom Next.js static build',
                'Mobile-first UX (360px–430px)',
                'Performance-optimized Core Web Vitals',
                'Local SEO & Google Maps setup',
                'WhatsApp direct inquiry funnel'
              ]
            },
            {
              tier: 'Commercial Growth Platform',
              level: 'Multi-Page & Scalable',
              idealFor: 'High-growth B2B manufacturers, real estate developers, and private healthcare centers scaling regional inquiries.',
              features: [
                'Dynamic multi-page architecture',
                'Headless CMS content pipeline',
                'Multi-location SEO & GEO entity graph',
                'Automated CRM webhook integration',
                'High-performance mobile loading'
              ]
            },
            {
              tier: 'Bespoke Enterprise System',
              level: 'Custom Software & Integration',
              idealFor: 'Export manufacturers, luxury hospitality destinations, and enterprises demanding custom digital systems.',
              features: [
                'Bespoke full-stack web engineering',
                'International multi-currency commerce',
                'Custom workflow automation integrations',
                'Complete Schema.org knowledge graph',
                'Ongoing conversion optimization support'
              ]
            }
          ].map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all ${
                idx === 1
                  ? 'bg-gradient-to-b from-[#0D1A16] to-[#070A09] border-2 border-[#D9B45F] shadow-2xl relative'
                  : 'bg-[#0B110F] border border-[#18A982]/20'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#D9B45F] text-[#070A09] text-[10px] font-bold uppercase tracking-widest">
                  MOST POPULAR
                </div>
              )}
              <div>
                <span className="text-xs font-mono uppercase text-[#D9B45F] tracking-wider block mb-2">
                  {tier.tier}
                </span>
                <div className="text-xl sm:text-2xl font-serif text-[#F3EFE3] mb-3">
                  {tier.level}
                </div>
                <p className="text-xs text-[#9D9B91] font-light leading-relaxed mb-6">
                  {tier.idealFor}
                </p>
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#ECE7D8] font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#18A982] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-full text-xs font-bold tracking-wider uppercase text-center transition-all min-h-[44px] flex items-center justify-center gap-2 ${
                  idx === 1
                    ? 'bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] shadow-lg shadow-[#D9B45F]/20'
                    : 'border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F]'
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>SCOPE THIS MODEL</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 7. RELATED ENGINEERING GUIDES & COST BREAKDOWNS (TWO-WAY TOPICAL SILO) */}
      {relatedArticles.length > 0 && (
        <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
              TECHNICAL PLAYBOOKS &amp; DEEP DIVES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
              Related Engineering Guides &amp; Cost Breakdowns
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-3 font-light leading-relaxed">
              In-depth architectural breakdowns, investment tiers, and technical implementation playbooks authored by our studio architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/40 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#D9B45F]/5 min-h-[180px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#D9B45F] bg-[#D9B45F]/10 rounded-full border border-[#D9B45F]/20">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#9D9B91] font-light">
                      <Clock className="w-3.5 h-3.5 text-[#D9B45F]" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-xl text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors leading-snug font-normal line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#9D9B91] line-clamp-2 mt-2.5 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#18A982]/10 flex items-center justify-between text-xs font-medium text-[#18A982] group-hover:text-[#D9B45F] transition-colors">
                  <span>Read Engineering Guide</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

            {/* COMPLEMENTARY DISCIPLINES / INTERNAL SERVICE LINKING */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
              CONNECTED DISCIPLINES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EFE3] break-words">
              Complementary Capabilities
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-2.5 font-light leading-relaxed">
              High-performing digital platforms combine multiple interconnected engineering and strategic disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedServices.map((rel, idx) => (
              <Link
                key={idx}
                href={`/services/${rel.slug}`}
                className="p-5 sm:p-6 rounded-xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/40 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#D9B45F]/5"
              >
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors mb-2.5 leading-snug">
                    {rel.title}
                  </h3>
                  <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed">
                    {rel.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#18A982]/10 flex items-center justify-between text-xs font-medium text-[#18A982] group-hover:text-[#D9B45F] transition-colors">
                  <span>Explore Discipline</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 8. MATCHING FAQS WITH VALIDATED SCHEMA (4-5 PER DISCIPLINE) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
              KNOWLEDGE BASE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EFE3] break-words">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/30 transition-all"
              >
                <h3 className="font-serif text-base sm:text-xl text-[#F3EFE3] mb-2 flex items-start gap-2.5 leading-snug">
                  <HelpCircle className="w-4 h-4 text-[#D9B45F] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed pl-6 font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. CONVERSION FOOTER */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto text-center">
        <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0D1A16] to-[#070A09] border border-[#D9B45F]/30 shadow-2xl">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2 sm:mb-3">
            ELEVATE YOUR DIGITAL FOOTPRINT
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] mb-3 sm:mb-4 break-words">
            Ready to Deploy {service.name}?
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#9D9B91] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-light">
            Directly connect with our studio leads via WhatsApp for instant technical scoping and fixed-investment proposal delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:scale-105 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP SCOPING</span>
            </a>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 min-h-[44px]"
            >
              <span>ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
