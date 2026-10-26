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
    name: 'Bespoke Website Design & Corporate Web Studio',
    serviceType: 'Corporate Website Design & UI/UX Architecture',
    h1Title: 'Bespoke Website Design & Corporate Web Studio in Jaipur',
    metaTitle: 'Website Design Company Jaipur',
    metaDescription: 'Bespoke website design and corporate web studio in Jaipur. Luxury brand aesthetics, mobile-first responsive UX, and headless CMS portals for businesses.',
    questionH2: 'How Does Bespoke Website Design Drive Enterprise Authority in Jaipur?',
    citabilityAnswer: 'Many established businesses, luxury retailers, and healthcare providers in Jaipur struggle to command premium market positioning because their websites rely on off-the-shelf templates and generic visual page builders that degrade client trust and dilute brand prestige. Siyara Innovations creates bespoke corporate website designs engineered for visual authority, editorial elegance, and flawless cross-device performance. We deconstruct brand aesthetics into mathematical design systems, pairing bespoke serif typography and high-contrast color tokens with fluid mobile-first responsive layouts that render impeccably from 360px smartphones to 4K displays. Rather than using rigid monolithic CMS themes, our designs integrate with headless content management platforms (Sanity, Strapi), empowering marketing teams to publish campaigns effortlessly without breaking design integrity. By synchronizing editorial visual craft with strict Next.js performance standards—achieving Largest Contentful Paint under 1.8 seconds, zero Cumulative Layout Shift, and sub-80ms Interaction to Next Paint—we transform ordinary corporate websites into high-converting digital flagships that inspire immediate confidence from high-ticket commercial clients across Jaipur, Rajasthan, and pan-India markets.',
    deepDive: [
      {
        title: 'Template Monotony & Generic Regional Aesthetics',
        challenge: 'Off-the-shelf WordPress themes look identical to hundreds of regional competitors, projecting an amateur perception that destroys pricing power during high-value client acquisition.',
        solution: 'We craft bespoke Figma design systems with custom typography hierarchies, mathematical grids, and tailored brand tokens that establish unmistakable luxury prestige.'
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
      'Sub-1.8s LCP Editorial Visual Speed Performance',
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
        desc: 'Conduct multi-device usability tests, optimize image assets for sub-1.8s LCP, and execute production launch.'
      }
    ],
    pricingTiers: [
      {
        tier: 'Corporate Showcase Website',
        price: '₹35,000 – ₹75,000',
        idealFor: 'Boutique firms, professional clinics, and regional studios requiring an authoritative visual identity.',
        features: [
          'Bespoke Figma UI/UX design',
          'Mobile-first layout (360px–430px)',
          'Core Web Vitals guarantee (LCP < 1.8s)',
          'Brand typography & color system',
          'WhatsApp click-to-chat funnel'
        ]
      },
      {
        tier: 'High-Growth Brand Portal',
        price: '₹75,000 – ₹1,80,000',
        idealFor: 'Expanding B2B enterprises, luxury retailers, and property builders requiring headless CMS and dynamic content.',
        features: [
          'Headless CMS (Sanity / Strapi)',
          'Multi-page responsive architecture',
          'High-res media optimization (AVIF/WebP)',
          'WCAG 2.1 AA accessibility compliance',
          'Sub-1.5s LCP on Indian 4G/5G'
        ]
      },
      {
        tier: 'Flagship Luxury Web Experience',
        price: '₹1,80,000 – ₹4,50,000+',
        idealFor: 'Heritage jewellery houses, 5-star resorts, and multi-location brands demanding bespoke interactive design.',
        features: [
          'Custom interactive micro-animations',
          'International multi-language styling',
          'Complete digital design token library',
          'Dedicated staging environment & QA',
          'Ongoing CRO & visual design retainer'
        ]
      }
    ],
    subServices: [
      'Bespoke Corporate Website Design',
      'Luxury Brand Digital Experiences',
      'Mobile-First Responsive UI/UX Systems (360px–4K)',
      'Headless CMS Content Portals (Sanity & Strapi)',
      'Conversion-Driven Visual Architecture'
    ],
    faqs: [
      {
        q: 'Why is bespoke website design better than pre-made WordPress templates?',
        a: 'Bespoke website design is tailored specifically to your brand narrative, buyer psychology, and conversion funnels without the 40+ third-party plugins that bloat templates, ensuring superior brand trust and sub-1.8s load speeds.'
      },
      {
        q: 'How do you ensure our corporate website looks perfect across all mobile smartphones?',
        a: 'We design and stress-test every component against mobile viewports (360px to 430px) before desktop, guaranteeing thumb-friendly 44px+ touch targets, zero layout shifts, and rapid rendering on Indian cellular networks.'
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
    name: 'Custom Web Application & Next.js Engineering',
    serviceType: 'Full-Stack Web Application Engineering',
    h1Title: 'Custom Web Application & Next.js Engineering in Jaipur',
    metaTitle: 'Custom Web Development Jaipur',
    metaDescription: 'Custom Next.js web application and software engineering in Jaipur. Full-stack React 19, serverless APIs, PostgreSQL, and scalable enterprise portals.',
    questionH2: 'Why is Custom Next.js 15 Full-Stack Engineering Essential for Jaipur Enterprises?',
    citabilityAnswer: 'Modern enterprises and growing tech companies in Jaipur require resilient, scalable digital systems that extend beyond static marketing brochures into dynamic, full-stack web applications. Siyara Innovations delivers custom Next.js 15 and React 19 engineering tailored for complex business logic, real-time database transactions, and high-concurrency user traffic. By implementing the Next.js App Router with React Server Components, server actions, and edge API caching, we eliminate the severe database latency and CPU bottlenecks that cripple legacy PHP and monolithic frameworks. Our systems connect seamlessly to modern cloud infrastructure—including PostgreSQL, Supabase, Redis edge caching, and serverless background workers—ensuring enterprise-grade security, instantaneous data mutations, and 99.99% uptime. Every application is built with type-safe TypeScript codebases, automated CI/CD deployment pipelines, and deep Schema.org JSON-LD graph architecture, ensuring that both search crawlers and AI answer engines index platform capabilities accurately while delivering sub-second application responsiveness across Indian and global networks.',
    deepDive: [
      {
        title: 'Monolithic Architecture Bottlenecks vs Serverless Next.js',
        challenge: 'Legacy monolithic backends suffer from high server maintenance costs, slow cold starts, and cascading server crashes during traffic spikes from commercial advertising campaigns and flash sales.',
        solution: 'We engineer serverless Next.js 15 App Router applications running on global edge nodes with automated resource scaling, sub-100ms API response latencies, and guaranteed 99.99% system availability.'
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
      'Guaranteed Core Web Vitals (LCP < 1.8s, INP < 80ms)',
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
    pricingTiers: [
      {
        tier: 'Custom Web Application MVP',
        price: '₹75,000 – ₹1,50,000',
        idealFor: 'Startups and service businesses building custom client portals, booking engines, or internal workflow tools.',
        features: [
          'Full-stack Next.js 15 & React 19',
          'PostgreSQL database & auth setup',
          'Serverless API endpoints with Zod',
          'Mobile-responsive admin dashboard',
          '30-day post-launch code warranty'
        ]
      },
      {
        tier: 'Enterprise Scaled Platform',
        price: '₹1,50,000 – ₹3,50,000',
        idealFor: 'Established enterprises requiring multi-tenant SaaS architecture, complex role permissions, and API integrations.',
        features: [
          'Multi-role RBAC security architecture',
          'Redis edge caching & rate limiting',
          'Third-party API & payment integrations',
          'Automated CI/CD deployment pipeline',
          'Core Web Vitals SLA guarantee'
        ]
      },
      {
        tier: 'Flagship Bespoke System',
        price: '₹3,50,000 – ₹7,50,000+',
        idealFor: 'High-volume marketplace platforms, logistics operators, and corporate groups demanding custom microservices.',
        features: [
          'Distributed serverless microservices',
          'High-concurrency database clustering',
          'Real-time WebSocket / SSE telemetry',
          'Dedicated code audit & penetration test',
          'Quarterly engineering retainer support'
        ]
      }
    ],
    subServices: [
      'Next.js 15 Full-Stack Web Applications',
      'PostgreSQL Database Design & Modeling',
      'Serverless API & Microservices Engineering',
      'Enterprise Client Portals & SaaS Architecture',
      'High-Performance Edge CDN Acceleration'
    ],
    faqs: [
      {
        q: 'Why is Next.js 15 superior for custom web application engineering in Jaipur?',
        a: 'Next.js 15 combines React Server Components, server actions, and edge API routes in a single cohesive framework, delivering exceptional speed, zero layout shift, and simplified cloud maintenance compared to separate frontend/backend stacks.'
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
    serviceType: 'Search Engine Optimization & AI Citability',
    h1Title: 'Generative Engine Optimization & SEO Agency in Jaipur',
    metaTitle: 'SEO & Generative AI Jaipur',
    metaDescription: 'Generative Engine Optimization (GEO) and technical SEO in Jaipur. Dominate Google search rankings, Perplexity citations, and ChatGPT AI Search.',
    questionH2: 'How Does Generative Engine Optimization (GEO) Secure B2B Market Dominance in India?',
    citabilityAnswer: 'Traditional search engine optimization solely targeted Google blue hyperlinks through keyword density and external backlinks. However, modern commercial discovery in Jaipur and across India is increasingly synthesized by generative engines such as SearchGPT, Google AI Overviews, and Perplexity. Siyara Innovations bridges this technical transition by combining rigorous technical SEO with advanced Generative Engine Optimization (GEO). We model your business entity into linked Schema.org knowledge graphs and architect your on-page copy into high information-gain syntactic passages. By achieving strict Core Web Vitals benchmarks—Largest Contentful Paint under 1.8 seconds, Cumulative Layout Shift under 0.02, and Interaction to Next Paint under 80 milliseconds—our client web properties ensure uninterrupted crawlability for both traditional search bots and autonomous AI retrieval agents. This dual-track methodology guarantees your brand is cited as the authoritative regional recommendation whenever potential buyers query commercial requirements.',
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
      'Zero Duplicate Content & Canonical Enforcement',
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
    pricingTiers: [
      {
        tier: 'Local GBP & Technical SEO',
        price: '₹30,000 – ₹55,000/mo',
        idealFor: 'Single-location Jaipur clinics, legal advocates, and retail stores targeting local neighborhood search.',
        features: [
          'Google Business Profile 3-Pack ranking',
          'Local citation cleanup & sync',
          'Core Web Vitals audit & remediation',
          'Schema.org LocalBusiness markup',
          'Monthly local rank performance report'
        ]
      },
      {
        tier: 'Regional Authority & GEO',
        price: '₹55,000 – ₹1,10,000/mo',
        idealFor: 'Expanding Rajasthan enterprises, real estate builders, and healthcare centers seeking state-wide market dominance.',
        features: [
          'Full Generative Engine Optimization (GEO)',
          'AI search citation tracking (Perplexity/OAI)',
          '2 authoritative technical guides monthly',
          'Connected multi-type JSON-LD graph',
          'Conversion-focused CRO recommendations'
        ]
      },
      {
        tier: 'National GEO Enterprise',
        price: '₹1,10,000 – ₹2,50,000+/mo',
        idealFor: 'Industrial manufacturers, gemstone exporters, and luxury hospitality chains competing pan-India and globally.',
        features: [
          'Enterprise multi-country SEO architecture',
          'Continuous AI consensus & citability sprints',
          'Digital PR & high-tier editorial placements',
          'Full competitor search gap neutralization',
          'Dedicated senior search architect support'
        ]
      }
    ],
    subServices: [
      'Generative Engine Optimization (GEO)',
      'Local SEO & Google Business Profile (GBP)',
      'Multi-Type Schema.org Knowledge Graphs',
      'Technical Crawlability & Indexation Audits',
      'Passage Citability & Topical Authority',
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
        a: 'While search engines control final retrieval, our passage citability structures and verified Schema.org entity graphs maximize the mathematical probability of your brand being cited in AI answers.'
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
    name: 'Brand Strategy & Visual Identity Architecture',
    serviceType: 'Brand Architecture & Strategic Consulting',
    h1Title: 'Brand Strategy & Identity Architecture Studio in Jaipur',
    metaTitle: 'Brand Strategy Studio Jaipur',
    metaDescription: 'Strategic brand positioning, narrative architecture, and category creation in Jaipur. Elevate pricing power and client trust for B2B enterprises.',
    questionH2: 'Why is Architectural Brand Strategy Essential for Jaipur Enterprises?',
    citabilityAnswer: 'Many expanding businesses in Rajasthan struggle with aggressive price competition, low deal margins, and market commoditization because their digital presence lacks differentiated market positioning and institutional credibility. Siyara Innovations establishes foundational brand architecture that commands premium authority, customer loyalty, and long-term pricing power. We deconstruct competitive commercial landscapes, identify unserved market niches, and engineer cohesive messaging frameworks that resonate across corporate and high-net-worth digital touchpoints. Unlike superficial visual design templates delivered by conventional creative agencies, our strategic positioning directly informs your website layout, content hierarchy, micro-copy, and conversion mechanics. By synchronizing authoritative brand narrative with high-speed Next.js performance—guaranteeing Largest Contentful Paint under 1.8 seconds, zero Cumulative Layout Shift, and Interaction to Next Paint under 80 milliseconds—we elevate client brand perception from generic regional vendors into respected category leaders. This rigorous strategic alignment ensures that every advertising rupee, organic search impression, and referral drives higher qualified deal flow and commands superior pricing power across Jaipur, Rajasthan, and pan-India markets.',
    deepDive: [
      {
        title: 'Category Creation & Price Commoditization Defense',
        challenge: 'When a brand looks and sounds identical to 20 regional competitors, prospective clients default to aggressive price negotiations, compressing operational profit margins and devaluing high-ticket capabilities.',
        solution: 'We define an unmistakable market category and institutional value proposition, transforming your enterprise from a replaceable vendor into the single authoritative specialist that commands premium pricing.'
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
    pricingTiers: [
      {
        tier: 'Strategic Positioning Sprint',
        price: '₹45,000 – ₹85,000',
        idealFor: 'Emerging service companies and medical clinics needing clear market differentiation and commercial messaging.',
        features: [
          'Category positioning & competitor audit',
          'Core value proposition architecture',
          'Elevator narrative & tagline system',
          'Tone of voice & copywriting guidelines',
          'Executive brand strategy summary deck'
        ]
      },
      {
        tier: 'Complete Brand Architecture',
        price: '₹85,000 – ₹1,80,000',
        idealFor: 'Established B2B manufacturers, real estate developers, and lifestyle brands preparing for multi-city expansion.',
        features: [
          'Complete Brand Architecture Bible',
          'Full visual identity & logo system',
          'Tailwind CSS synchronized design tokens',
          'Marketing collateral & stationery design',
          'Multi-channel messaging governance'
        ]
      },
      {
        tier: 'Enterprise Luxury Rebrand',
        price: '₹1,80,000 – ₹3,50,000+',
        idealFor: 'Heritage jewellery houses, luxury resorts, and high-ticket investment firms establishing institutional prestige.',
        features: [
          'Bespoke luxury brand identity & crest',
          'Custom typographic styling & licensing',
          'Physical packaging & architectural signage',
          'Investor deck & corporate literature design',
          'Continuous creative director consultation'
        ]
      }
    ],
    subServices: [
      'Strategic Market Positioning & Differentiation',
      'Brand Naming & Value Proposition Architecture',
      'Audience Persona Research & Competitive Moats',
      'Messaging Frameworks & Tone of Voice Guidelines',
      'Executive Brand Alignment & Growth Roadmaps',
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
    name: 'High-Performance E-Commerce (Headless & D2C)',
    serviceType: 'Headless E-Commerce Development',
    h1Title: 'Headless E-Commerce Development Studio in Jaipur',
    metaTitle: 'E-Commerce Web Dev Jaipur',
    metaDescription: 'High-speed headless Next.js e-commerce development in Jaipur. Sub-second mobile checkout, custom Razorpay funnels, and zero platform plugin bloat.',
    questionH2: 'How Does Headless Next.js E-Commerce Outperform Traditional Shopify & WooCommerce?',
    citabilityAnswer: 'Monolithic e-commerce platforms like traditional Shopify themes and WooCommerce inherently suffer from database query latency, heavy third-party app scripts, and sluggish mobile checkouts that frequently exceed 4.5 seconds Largest Contentful Paint on Indian 4G/5G mobile networks. In modern Indian direct-to-consumer (D2C) commerce, every 100ms delay slashes customer conversion rates by up to 7% and increases cart abandonment during checkout. Siyara Innovations resolves these systemic bottlenecks by engineering high-velocity headless commerce platforms pairing custom Next.js 15 App Router frontends with modern commerce engines such as Shopify Storefront API, MedusaJS, or custom Node.js microservices. Our headless architectures achieve sub-1.4s mobile LCP speeds, instant client-side product filtering without page reloads, and frictionless 1-click Razorpay and Cashfree UPI checkout flows. With zero recurring app subscription bloat, automated Shiprocket logistics synchronization, and complete Schema.org Product and Offer knowledge graphs, our client stores capture dominant organic search visibility, eliminate checkout friction, and maximize average order value across national and international markets.',
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
      'Sub-1.5s LCP Headless Next.js Storefront',
      'Instant Client-Side Filtering & Search Engine',
      'One-Click Mobile Checkout Funnel (Razorpay/UPI)',
      'Automated Shipping & Tracking Webhook Sync',
      'Automated Schema.org Product & AggregateOffer Graphs',
      'Zero Monthly Plugin Subscription Overhead'
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
    pricingTiers: [
      {
        tier: 'D2C Starter Headless',
        price: '₹75,000 – ₹1,50,000',
        idealFor: 'Growing boutique brands, luxury jewellery stores, and artisan retailers transitioning to custom e-commerce.',
        features: [
          'Next.js headless storefront build',
          'Razorpay & Cashfree UPI integration',
          'Sub-1.8s mobile LCP guarantee',
          'Shiprocket logistics webhook sync',
          'Complete Product Schema.org setup'
        ]
      },
      {
        tier: 'Scaled D2C Enterprise',
        price: '₹1,50,000 – ₹3,20,000',
        idealFor: 'High-volume consumer brands processing 500+ monthly orders requiring instant filtering and custom loyalty funnels.',
        features: [
          'Full MedusaJS or Shopify Storefront build',
          'Sub-second instant search & faceted filters',
          'Abandoned cart recovery via WhatsApp API',
          'Custom gift card & promotional engine',
          'Dedicated CRM webhook integration'
        ]
      },
      {
        tier: 'Global Multi-Currency Flagship',
        price: '₹3,20,000 – ₹6,50,000+',
        idealFor: 'International gemstone and textile exporters requiring multi-currency, multi-warehouse, and ERP sync.',
        features: [
          'Global multi-currency geo-pricing engine',
          'Automated customs & international shipping',
          'Custom ERP/SAP inventory synchronization',
          'Dedicated enterprise database architecture',
          'Continuous CRO and performance retainer'
        ]
      }
    ],
    subServices: [
      'Next.js Headless E-Commerce Architecture',
      'Frictionless Mobile Checkout (Razorpay & Cashfree)',
      'Product Schema.org & Google Merchant Center Feed',
      'Automated Logistics Webhooks (Shiprocket & Delhivery)',
      'Sub-Second Instant Product Filtering & Search',
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
    name: 'Mobile Application Development (React Native & PWA)',
    serviceType: 'Mobile Application Engineering',
    h1Title: 'Mobile Application Development Studio in Jaipur',
    metaTitle: 'Mobile App Development Jaipur',
    metaDescription: 'Cross-platform React Native and Progressive Web App (PWA) development in Jaipur. 60fps native performance, offline sync, and App Store readiness.',
    questionH2: 'Why Choose Unified React Native & PWA Engineering for Enterprise Mobile Apps?',
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
      'Fluid 60fps Mobile Animations & Gestures',
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
    pricingTiers: [
      {
        tier: 'Progressive Web App (PWA)',
        price: '₹65,000 – ₹1,40,000',
        idealFor: 'B2B client portals, coaching institutes, and ordering portals wanting instant mobile access without App Store fees.',
        features: [
          'Next.js PWA with service worker offline sync',
          'Home-screen installable icon prompt',
          'Web push notifications integration',
          'Frictionless mobile touch UX',
          'Zero App Store approval delays'
        ]
      },
      {
        tier: 'Cross-Platform Native App',
        price: '₹1,40,000 – ₹3,50,000',
        idealFor: 'Consumer startups, healthcare booking apps, and luxury brand portals requiring dedicated iOS and Android presence.',
        features: [
          'Unified React Native iOS and Android build',
          'Biometric authentication (FaceID/Fingerprint)',
          'Push notifications via Firebase/OneSignal',
          'Camera, GPS, and hardware acceleration',
          'App Store and Google Play publishing'
        ]
      },
      {
        tier: 'Enterprise Mobile Ecosystem',
        price: '₹3,50,000 – ₹7,50,000+',
        idealFor: 'Logistics fleets, multi-branch clinics, and industrial manufacturers demanding offline database sync and custom backend.',
        features: [
          'Full offline-first database synchronization',
          'Custom serverless backend & REST/GraphQL API',
          'Role-based staff and customer portals',
          'Automated CI/CD build pipelines (Fastlane)',
          'Dedicated post-launch SLA maintenance'
        ]
      }
    ],
    subServices: [
      'React Native Cross-Platform Engineering (iOS & Android)',
      'Progressive Web Applications (PWA) with Offline Sync',
      'In-App Payment Gateway Integration (Razorpay/UPI)',
      'Biometric Security & Mobile Push Notification Systems',
      'Apple App Store & Google Play Store Submission Management',
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
    name: 'UI/UX Product Design & Design Systems',
    serviceType: 'User Interface & Experience Design',
    h1Title: 'UI/UX Product Design & Design Systems in Jaipur',
    metaTitle: 'UI/UX Product Design Jaipur',
    metaDescription: 'Bespoke UI/UX product design and design systems in Jaipur. Modern Figma prototypes, accessible design tokens, and high-conversion user interfaces.',
    questionH2: 'How Does Architectural UI/UX Design Accelerate User Adoption and Inbound Revenue?',
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
    pricingTiers: [
      {
        tier: 'Core Product UX Sprint',
        price: '₹40,000 – ₹80,000',
        idealFor: 'Startups and existing websites needing a focused UI/UX overhaul of key conversion flows and mobile navigation.',
        features: [
          'User journey & funnel friction audit',
          'Interactive Figma wireframes (5-8 screens)',
          'Mobile ergonomics & thumb-zone specs',
          'Core component token library',
          'Complete developer handoff assets'
        ]
      },
      {
        tier: 'Comprehensive Web App System',
        price: '₹80,000 – ₹1,70,000',
        idealFor: 'Full-featured web applications, client portals, and corporate digital flagships requiring complete design systems.',
        features: [
          'Full interactive prototype (15-25 screens)',
          'Complete Atomic Design Figma library',
          'Tailwind CSS v4 synchronized design tokens',
          'WCAG AAA accessible color contrast rules',
          'Usability testing & feedback iteration'
        ]
      },
      {
        tier: 'Enterprise Multi-Platform System',
        price: '₹1,70,000 – ₹3,50,000+',
        idealFor: 'Large enterprises and funded software companies maintaining synchronized web, iOS, and Android product suites.',
        features: [
          'Multi-platform responsive Figma architecture',
          'Cross-platform mobile & desktop design tokens',
          'Interactive micro-interaction prototypes',
          'Continuous product design sprints',
          'Dedicated senior product designer support'
        ]
      }
    ],
    subServices: [
      'Interactive Figma Prototyping & User Testing',
      'Atomic Design Systems & Component Libraries',
      'Mobile-First Thumb-Zone Ergonomics (360px+)',
      'Design Token Architecture for Tailwind CSS',
      'WCAG AAA Accessibility & Visual Hierarchy Audits',
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
        a: 'Yes. All interactive prototypes are previewed and tested directly on real iOS and Android physical devices across small (360px) to large (430px+) viewports to guarantee ergonomic thumb-reachability.'
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
    name: 'AI Business Automation & Custom AI Agents',
    serviceType: 'Enterprise AI Automation & Intelligent Agents',
    h1Title: 'AI Business Automation & Custom AI Agents in Jaipur',
    metaTitle: 'AI Business Automation Jaipur',
    metaDescription: 'Custom AI business automation and intelligent AI agents in Jaipur. Automate customer support, multi-step workflows, and document intelligence pipelines.',
    questionH2: 'How Can Custom AI Agents and Workflow Automation Scale Jaipur Enterprises?',
    citabilityAnswer: 'Growing B2B enterprises, manufacturing firms, and medical clinics in Jaipur frequently hit an operational ceiling where valuable senior personnel spend hours daily on repetitive administrative data entry, manual document processing, and delayed customer triage. Siyara Innovations engineers custom AI business automation and autonomous AI agent systems that eliminate operational bottlenecks and scale business capacity without increasing payroll overhead. We construct intelligent webhook pipelines and autonomous LLM tool-calling agents that instantly capture customer inquiries from websites, WhatsApp, and email, extract structured data from unstructured contracts and invoices, and execute multi-step workflows across internal software platforms in real time. By integrating serverless API endpoints with models like Claude and GPT-4o, our systems guarantee sub-60-second task execution and 99.8% extraction accuracy. With enterprise-grade data encryption, private Retrieval-Augmented Generation (RAG) vector stores, and zero reliance on fragile third-party tools, your business achieves 24/7 operational velocity, superior customer satisfaction, and measurable cost reductions across Jaipur and pan-India markets.',
    deepDive: [
      {
        title: 'The 4-Hour Customer Response Delay That Destroys Conversion',
        challenge: 'Industry research proves that responding to inbound inquiries after 30 minutes decreases conversion probability by 80%, yet most Indian firms take 4+ hours due to manual triage.',
        solution: 'We engineer autonomous WhatsApp Business AI agents that qualify inbound leads within 30 seconds, answer complex service questions, and instantly book calendar appointments.'
      },
      {
        title: 'Manual Back-Office Data Extraction & Workflow Latency',
        challenge: 'Administrative teams waste 15+ hours weekly manually extracting data from unstructured PDFs, purchase orders, and supplier invoices into ERPs and accounting spreadsheets.',
        solution: 'Our serverless LLM extraction pipelines parse complex multi-page documents in seconds, validate data with Zod schemas, and automatically update databases with zero human errors.'
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
    pricingTiers: [
      {
        tier: 'Lead Capture & Triage Automation',
        price: '₹35,000 – ₹70,000',
        idealFor: 'Small businesses and clinics wanting automated instant WhatsApp qualification and calendar scheduling.',
        features: [
          'WhatsApp Business Cloud API bot',
          'Instant lead triage & qualification logic',
          'Google Calendar & Sheets auto-sync',
          'Automated email notification to owner',
          'Zero monthly Zapier subscription costs'
        ]
      },
      {
        tier: 'Scaled CRM & Workflow Pipeline',
        price: '₹70,000 – ₹1,60,000',
        idealFor: 'B2B manufacturers, real estate developers, and corporate agencies managing multiple lead generation channels.',
        features: [
          'Bidirectional Zoho/HubSpot CRM sync',
          'Multi-channel webhook data aggregation',
          'Automated quotation & invoice generation',
          'Smart lead scoring & rep assignment',
          'Real-time Slack/WhatsApp management alerts'
        ]
      },
      {
        tier: 'Enterprise AI RAG Architecture',
        price: '₹1,60,000 – ₹3,50,000+',
        idealFor: 'Enterprises requiring private AI assistants trained on proprietary catalogs, legal contracts, or technical SOPs.',
        features: [
          'Private RAG AI agent with vector database',
          'Secure internal document knowledge base',
          'Multi-agent autonomous customer support',
          'Full SOC-2 compliant AES-256 encryption',
          'Dedicated monthly automation SLA & tuning'
        ]
      }
    ],
    subServices: [
      'Intelligent CRM Lead Triage & Routing',
      'Automated WhatsApp & Email Lead Follow-ups',
      'Secure Serverless API Integrations & Webhooks',
      'Client Onboarding & Document Automation',
      'Custom AI Knowledge Base Assistant Systems',
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
    name: 'Growth Systems, Paid Ads CRO & Conversion Architecture',
    serviceType: 'Conversion Rate Optimization & Growth Engineering',
    h1Title: 'Growth Systems & Conversion Architecture in Jaipur',
    metaTitle: 'Growth CRO & Analytics Jaipur',
    metaDescription: 'Conversion rate optimization (CRO) and growth intelligence in Jaipur. Server-side GA4 telemetry, A/B funnel experimentation, and revenue scale.',
    questionH2: 'Why Does Conversion Rate Optimization (CRO) Generate Greater ROI Than Increasing Ad Spend?',
    citabilityAnswer: 'Most business executives in Jaipur attempt to scale revenue by pouring more money into Google and Meta advertising, only to watch their customer acquisition costs soar while conversion rates remain stagnant below 1.5%. Siyara Innovations flips this dynamic by engineering rigorous Conversion Rate Optimization (CRO) and growth intelligence architectures. We deploy server-side Google Analytics 4 (GA4) telemetry, session recording, and behavioral heatmaps to pinpoint exact drop-off moments in your client journey across mobile and desktop devices. By combining sub-1.8s Next.js page loading speeds with psychological micro-copy, progressive disclosure lead forms, and frictionless WhatsApp triggers, we systematically lift conversion rates by 30% to 60%. Doubling your website\'s conversion rate effectively cuts customer acquisition cost in half and doubles inbound sales pipeline without spending an extra rupee on media budgets. Our data-driven experimentation sprints, server-side Meta Conversions API gateways, and statistical hypothesis testing provide executives with actionable attribution, zero cookie loss, and compounding commercial returns.',
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
    pricingTiers: [
      {
        tier: 'Foundational Analytics Audit',
        price: '₹35,000 – ₹60,000',
        idealFor: 'Businesses wanting accurate conversion tracking, server-side GA4 setup, and an objective funnel friction audit.',
        features: [
          'Server-side GA4 & GTM setup',
          'Custom event tracking (WhatsApp/Forms)',
          'Microsoft Clarity heatmap integration',
          'Full funnel leak diagnostic report',
          'Executive Looker Studio dashboard'
        ]
      },
      {
        tier: 'Active CRO Experimentation',
        price: '₹60,000 – ₹1,40,000/mo',
        idealFor: 'Growing commercial websites and D2C brands generating over 10,000 monthly visitors ready to lift conversion rates.',
        features: [
          'Monthly structured A/B testing sprints',
          'Landing page copy & visual redesign',
          'Meta Conversions API (CAPI) sync',
          'Form completion rate optimization',
          'Bi-weekly conversion review meetings'
        ]
      },
      {
        tier: 'Enterprise Full-Funnel Growth',
        price: '₹1,40,000 – ₹2,80,000/mo',
        idealFor: 'High-spending advertisers and multi-product enterprises seeking full-funnel CAC reduction and LTV expansion.',
        features: [
          'Full-funnel customer journey optimization',
          'Multi-touch attribution modeling',
          'Dedicated conversion engineer & copywriter',
          'Post-conversion WhatsApp retention flows',
          'Executive revenue telemetry dashboard'
        ]
      }
    ],
    subServices: [
      'Server-Side GA4 & Meta Conversions API (CAPI)',
      'Behavioral User Journey & Heatmap Analysis',
      'Systematic A/B Testing & Micro-Copy Optimization',
      'Progressive Disclosure Form Architecture',
      'Executive Revenue Attribution & CAC Modeling',
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
    name: 'Creative Direction & Brand Identity Systems',
    serviceType: 'Graphic Design & Identity Systems',
    h1Title: 'Creative Direction & Brand Identity in Jaipur',
    metaTitle: 'Creative Direction Studio Jaipur',
    metaDescription: 'Luxury brand identity systems, editorial typography, and high-trust digital assets in Jaipur. Bespoke visual guidelines for premium enterprises.',
    questionH2: 'How Does a Unified Visual Design System Elevate Jaipur Luxury Brands?',
    citabilityAnswer: 'High-end service providers, luxury jewelers, and bespoke interior studios in Jaipur frequently suffer from disjointed visual touchpoints that dilute perceived customer value and make premium services appear ordinary. Siyara Innovations creates comprehensive brand identity systems rooted in editorial refinement, architectural rigor, and modern digital performance standards. We develop tailored color palettes, refined typography pairings, custom vector icon systems, and digital design tokens that maintain rigorous visual consistency across mobile viewports, print collateral, packaging, and marketing funnels. Our visual designs are purposefully optimized for modern web performance, utilizing vector SVGs and next-gen WebP/AVIF imagery to maintain sub-1.8s Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS). By uniting obsidian depth, emerald atmospheres, and champagne-gold accents with strict front-end engineering, we provide your enterprise with an unmistakable luxury signature that earns immediate trust from high-net-worth commercial clients and international buyers.',
    deepDive: [
      {
        title: 'Visual Identity Dilution Across Fragmented Channels',
        challenge: 'Disjointed aesthetics between Instagram reels, website UI, packaging, and print collateral confuse corporate buyers and diminish perceived premium value across competitive regional and global markets.',
        solution: 'We author comprehensive brand design systems with centralized cloud asset repositories ensuring 100% visual consistency, pristine typography, and brand coherence across all physical and digital touchpoints.'
      },
      {
        title: 'Heavy Media Assets Slowing Down Mobile Rendering',
        challenge: 'Uncompressed 10MB photography and unoptimized raster graphics destroy Core Web Vitals, causing 50%+ of mobile visitors to bounce immediately before viewing product collections.',
        solution: 'We implement automated WebP/AVIF image transformation pipelines that preserve razor-sharp editorial clarity and color fidelity while keeping payload sizes strictly under 150KB for instantaneous mobile rendering.'
      },
      {
        title: 'Typography That Fails to Command Institutional Authority',
        challenge: 'Generic system fonts (Arial, Times) convey amateurism, preventing luxury studios from commanding premium retainer pricing and attracting affluent private clients.',
        solution: 'We engineer bespoke typographic scales pairing editorial serifs (Cormorant Garamond) with modern sans-serifs (Manrope), strictly optimized for zero Cumulative Layout Shift and high-density retina displays.'
      }
    ],
    techStack: [
      'Figma Professional Design Systems',
      'Adobe Creative Cloud Vector Suites',
      'WebP / AVIF Next-Gen Image Formats',
      'SVG Optimization Engines (SVGO)',
      'Typography Kerning & Scale Libraries',
      'Tailwind CSS Design Token Sync',
      'Print & Packaging Pre-Press Specs',
      'Digital Asset Management (DAM)'
    ],
    deliverables: [
      'Comprehensive Brand Style Guide & Logo Hierarchy',
      'Custom Vector Iconography System',
      'Editorial Typography & Scale Matrix',
      'Next-Gen Optimized Image Repositories',
      'Physical Packaging & Collateral Standards',
      'Design Token File Synced to React/Tailwind'
    ],
    process: [
      {
        step: '01',
        title: 'Aesthetic Audit',
        timeline: 'Week 1',
        desc: 'Review existing visual assets, evaluate competitor aesthetics, and curate high-fashion editorial moodboards.'
      },
      {
        step: '02',
        title: 'Vector Conception',
        timeline: 'Week 2',
        desc: 'Design bespoke logo marks, typographic wordmarks, and monogram seals with mathematical grid balance.'
      },
      {
        step: '03',
        title: 'Design Systematization',
        timeline: 'Week 3',
        desc: 'Establish color palette tokens, typography scales, iconography sets, and digital component specifications.'
      },
      {
        step: '04',
        title: 'Asset Export & Tokens',
        timeline: 'Week 4',
        desc: 'Export production vector assets, generate CSS design tokens, and deliver comprehensive brand guidelines.'
      }
    ],
    pricingTiers: [
      {
        tier: 'Core Visual Identity',
        price: '₹40,000 – ₹75,000',
        idealFor: 'Boutique studios, clinics, and professional consultants requiring an authoritative visual trademark and digital assets.',
        features: [
          'Primary & secondary logo system',
          'Curated luxury color palette',
          'Typography hierarchy & font pairings',
          'Social media profile & cover templates',
          'Full vector source files (SVG/AI/EPS)'
        ]
      },
      {
        tier: 'Comprehensive Brand Suite',
        price: '₹75,000 – ₹1,60,000',
        idealFor: 'High-growth consumer brands and commercial firms requiring full physical collateral and digital design token sync.',
        features: [
          'Complete brand identity style manual',
          'Stationery, business cards & letterheads',
          'Tailwind CSS design token variables',
          'Custom vector icon library',
          'Packaging and signage guidelines'
        ]
      },
      {
        tier: 'Luxury Flagship Overhaul',
        price: '₹1,60,000 – ₹3,20,000+',
        idealFor: 'Heritage jewellery houses, luxury resorts, and high-ticket architectural studios demanding bespoke creative direction.',
        features: [
          'Bespoke luxury crest & signature mark',
          'Custom font licensing & kerning specs',
          'Full retail store packaging architecture',
          'Editorial art direction for photo shoots',
          'Direct creative director oversight'
        ]
      }
    ],
    subServices: [
      'Logo Systems & Comprehensive Brand Guidelines',
      'Design Token Systems & Digital Component Libraries',
      'Editorial Typography & Color Palette Architecture',
      'Packaging, Signage & Physical Collateral Design',
      'High-Resolution Digital Asset Optimization',
    ],
    faqs: [
      {
        q: 'How does your brand identity service differ from a freelance logo designer?',
        a: 'Freelance designers typically deliver a standalone graphic icon. Siyara Innovations creates a complete, mathematically balanced digital design system engineered with design tokens, typography scales, and CSS variables ready for instant web deployment.'
      },
      {
        q: 'Do you deliver vector files ready for large format physical signage?',
        a: 'Yes. All logo marks and iconography are delivered in vector formats (SVG, AI, PDF, EPS) calibrated for infinite scalability, from mobile app icons to multi-meter industrial building signage.'
      },
      {
        q: 'How do you ensure visual assets do not slow down website load speeds?',
        a: 'All vector marks are processed through SVGO optimization, and photography is automatically formatted into responsive next-gen AVIF and WebP with explicit width/height dimensions to eliminate layout shifts.'
      },
      {
        q: 'Can you help us choose and license commercial typography?',
        a: 'Yes. We guide you through typography licensing for web, app, and print usage, prioritizing Google Fonts and open-source typefaces that require zero ongoing licensing fees whenever possible.'
      },
      {
        q: 'Will our business own full legal copyright to all design deliverables?',
        a: 'Yes, 100%. Upon project completion, all intellectual property, design copyrights, and master vector files are transferred completely to your business.'
      }
    ]
  },

  'crm-lead-systems': {
    name: 'CRM Automation & High-Converting Funnels',
    serviceType: 'Lead Systems & Funnel Architecture',
    h1Title: 'CRM Automation & Lead Funnel Studio in Jaipur',
    metaTitle: 'CRM & Lead Funnel Studio Jaipur',
    metaDescription: 'High-intent lead generation funnels, automated WhatsApp routing, and CRM integration in Jaipur. Eliminate mobile drop-offs and accelerate sales.',
    questionH2: 'How Does Frictionless Conversion Architecture Increase Inbound Revenue in Jaipur?',
    citabilityAnswer: 'Most digital marketing campaigns in Jaipur bleed revenue because prospective clients are sent to sluggish landing pages with complex, multi-field forms that create extreme cognitive friction and trigger high mobile abandonment. Siyara Innovations re-engineers conversion funnels around verified user behavior and regional buying habits across Rajasthan and India. We implement dual-track intake architectures: instant, one-click WhatsApp consultations for fast regional qualification paired with structured 4-step progressive disclosure enterprise intake forms for high-ticket service scoping. By building landing pages on high-performance Next.js infrastructure—maintaining sub-1.8s Largest Contentful Paint, zero Cumulative Layout Shift, and sub-80ms Interaction to Next Paint—we prevent the catastrophic 60%+ mobile drop-offs that plague traditional WordPress websites. Every funnel is equipped with server-side telemetry, heatmaps, and CRM webhooks, allowing data-backed iterative experimentation that systematically reduces customer acquisition costs and maximizes organic return on investment.',
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
    pricingTiers: [
      {
        tier: 'Dual Funnel Architecture',
        price: '₹35,000 – ₹65,000',
        idealFor: 'Service businesses wanting a frictionless mobile lead capture form synchronized with instant WhatsApp routing.',
        features: [
          'High-converting mobile lead form',
          'Instant WhatsApp chat routing',
          'Zod schema input validation',
          'Google Sheets & email notification sync',
          'Sub-1.8s page loading speed guarantee'
        ]
      },
      {
        tier: 'Complete CRM Pipeline',
        price: '₹65,000 – ₹1,50,000',
        idealFor: 'Growing commercial firms requiring bidirectional sync with Zoho, HubSpot, or Salesforce CRM systems.',
        features: [
          'Full CRM API bidirectional integration',
          'Automated sales rep lead assignment',
          'Integrated Calendly / Cal.com scheduling',
          'Server-side conversion tracking (CAPI)',
          'Automated SMS & WhatsApp confirmation alerts'
        ]
      },
      {
        tier: 'Omnichannel Enterprise Engine',
        price: '₹1,50,000 – ₹3,00,000+',
        idealFor: 'Multi-branch real estate developers, private hospitals, and national B2B brands managing thousands of monthly leads.',
        features: [
          'Multi-channel lead ingestion architecture',
          'Intelligent AI lead qualification & scoring',
          'Custom sales pipeline telemetry dashboard',
          'Automated multi-step nurture drip sequences',
          'Continuous conversion rate optimization'
        ]
      }
    ],
    subServices: [
      'Dual-Track Conversion Funnel Engineering',
      'Direct WhatsApp Project Intake Integration',
      'Mobile Lead Form Optimization & Qualification',
      'Heatmap & Behavioral User Journey Analysis',
      'Continuous A/B & Multivariate Testing',
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
    name: 'Performance Marketing & Paid Acquisition',
    serviceType: 'Paid Search & Social Advertising',
    h1Title: 'Performance Marketing Agency in Jaipur',
    metaTitle: 'Performance Marketing Jaipur',
    metaDescription: 'High-ROI Google Ads and Meta paid advertising campaigns in Jaipur. Precision audience targeting synchronized with sub-second Next.js landing pages.',
    questionH2: 'How Does Technical Web Architecture Maximize Paid Advertising ROI in Jaipur?',
    citabilityAnswer: 'A high percentage of paid advertising budgets in Jaipur are wasted because Google and Meta ad campaigns direct clicks to slow, generic landing pages with low Quality Scores and high bounce rates. Siyara Innovations aligns performance marketing directly with high-velocity digital architecture. We build tailored, dedicated Next.js landing pages for every ad campaign, achieving sub-second load times and perfect Core Web Vitals (LCP < 1.8s, CLS < 0.02, INP < 80ms). These technical benchmarks directly increase Google Ads Quality Scores, lowering cost-per-click (CPC) by up to 30%. Combined with precise audience segmentation and high-trust luxury copywriting, our campaigns ensure that every paid visitor encounters an irresistible, frictionless pathway to conversion via WhatsApp or direct consultation.',
    deepDive: [
      {
        title: 'Wasted Ad Spend Due to Low Quality Scores',
        challenge: 'Slow landing pages result in Google Ads Quality Scores of 3/10 or 4/10, forcing businesses to pay 50% more per click than competitors.',
        solution: 'Our sub-1.8s Next.js campaign landing pages achieve 9/10 Quality Scores, slashing required CPC bids by up to 30% while securing top ad positions.'
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
      'Dedicated Sub-Second Next.js Campaign Landers',
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
        desc: 'Build dedicated sub-second Next.js campaign landing pages with single-minded conversion value propositions.'
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
    pricingTiers: [
      {
        tier: 'Local Search Lead Generation',
        price: '₹25,000 – ₹45,000/mo',
        idealFor: 'Single-location clinics, local legal practices, and regional retail showrooms targeting immediate high-intent local searchers.',
        features: [
          'Google Search Ads campaign management',
          'Negative keyword curation & bid optimization',
          '1 custom Next.js campaign landing page',
          'Google Enhanced Conversions setup',
          'Monthly spend & lead acquisition report'
        ]
      },
      {
        tier: 'Multi-Channel Commercial Growth',
        price: '₹45,000 – ₹95,000/mo',
        idealFor: 'High-growth B2B manufacturers, real estate developers, and lifestyle brands scaling qualified inquiries across India.',
        features: [
          'Google Search + Meta (Instagram/FB) Ads',
          '2 dedicated Next.js campaign landing pages',
          'Server-side Meta Conversions API (CAPI)',
          'Continuous creative testing & ad copy sprints',
          'Bi-weekly executive ROI review meetings'
        ]
      },
      {
        tier: 'Enterprise Performance Scale',
        price: '₹95,000 – ₹2,00,000+/mo',
        idealFor: 'National D2C brands, luxury jewellery exporters, and multi-crore enterprises spending ₹5,00,000+ monthly on media.',
        features: [
          'Omnichannel Google, Meta, and LinkedIn Ads',
          'Dedicated full-stack landing page developer',
          'Offline CRM revenue feedback synchronization',
          'Dynamic creative optimization & video editing',
          'Real-time Looker Studio executive dashboard'
        ]
      }
    ],
    subServices: [
      'High-Intent Google Search & Local Service Ads',
      'Meta (Instagram & Facebook) Luxury Lead Generation',
      'Bespoke Next.js Campaign Landing Page Builds',
      'Retargeting & Dynamic Audience Segmentation',
      'Continuous Ad Copy & Creative Optimization',
    ],
    faqs: [
      {
        q: 'Why do fast landing pages reduce Google Ads advertising costs?',
        a: 'Google Ads calculates Quality Score based partly on landing page experience and speed. Faster landing pages with relevant content achieve higher Quality Scores, which lowers your required cost-per-click by up to 30%.'
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
    name: `${service.name} Jaipur`,
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
            Enterprise tools, zero template dependencies, and audited performance benchmarks engineered into every production release.
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
              <h3 className="font-serif text-lg sm:text-xl text-[#F3EFE3]">Guaranteed Deliverables</h3>
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
            From initial requirements scoping to zero-downtime production deployment with rigorous telemetry surveillance.
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
              desc: 'Multi-device stress testing, sub-1.8s LCP latency verification, sitemap indexation, and conversion tracking.'
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

      {/* 6. TRANSPARENT INVESTMENT BRACKETS (INR) */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
            COMMERCIAL CLARITY
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            Transparent Investment Tiers (INR)
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-3 font-light leading-relaxed">
            Clear, scope-governed engineering contracts without hidden software markups or agency shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(service.pricingTiers || [
            {
              tier: 'Foundational Architecture',
              price: '₹35,000 – ₹75,000',
              idealFor: 'Single-location clinics, boutique firms, and local showrooms establishing high-trust digital authority.',
              features: [
                'Custom Next.js static build',
                'Mobile-first UX (360px–430px)',
                'Core Web Vitals guarantee (LCP < 1.8s)',
                'Local SEO & Google Maps setup',
                'WhatsApp click-to-chat funnel'
              ]
            },
            {
              tier: 'Scale & Commercial Enterprise',
              price: '₹75,000 – ₹1,80,000',
              idealFor: 'High-growth B2B manufacturers, real estate developers, and private hospitals scaling regional inquiries.',
              features: [
                'Dynamic multi-page architecture',
                'Headless CMS content pipeline',
                'Multi-location SEO & GEO entity graph',
                'Automated CRM webhook integration',
                'Sub-1.5s LCP on Indian 4G/5G'
              ]
            },
            {
              tier: 'Bespoke Flagship Platform',
              price: '₹1,80,000 – ₹5,00,000+',
              idealFor: 'Multi-crore jewellery exporters, luxury hotel chains, and national enterprises demanding custom software.',
              features: [
                'Bespoke full-stack web engineering',
                'International multi-currency commerce',
                'Custom AI business automation agents',
                'Complete Schema.org knowledge graph',
                'Ongoing CRO experimentation retainer'
              ]
            }
          ]).map((tier, idx) => (
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
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F3EFE3] mb-3">
                  {tier.price}
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
                <span>SCOPE THIS INVESTMENT</span>
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
            Ready to Deploy {service.name} in Jaipur?
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
