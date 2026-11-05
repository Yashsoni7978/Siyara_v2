'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Target,
  Sparkles,
  Code2,
  Megaphone,
  Layers,
  BarChart3,
  ShoppingCart,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  ShieldCheck,
} from 'lucide-react';

export const DISCIPLINES_DATA = [
  {
    id: '01',
    name: 'Brand Strategy',
    tag: 'BRAND STRATEGY',
    headlineMain: 'Build a brand',
    headlineAccent: 'that lasts.',
    description:
      'We help businesses define who they are, what they stand for and how they show up — creating a strong, consistent brand foundation for growth across every digital touchpoint.',
    deliverables: [
      {
        title: 'Brand positioning & narrative',
        description: 'Stand out with a clear and compelling commercial identity.',
      },
      {
        title: 'Visual identity & design direction',
        description: 'Create a cohesive, memorable and prestigious brand presence.',
      },
      {
        title: 'Brand guidelines & implementation',
        description: 'Ensure aesthetic consistency across all digital and print channels.',
      },
    ],
    slug: '/services/brand-strategy',
    ctaText: 'Explore Brand Strategy',
    image: '/images/services/service-brand-strategy.webp',
    gridDescription: 'Positioning, identity and long-term brand growth.',
    icon: Target,
  },
  {
    id: '02',
    name: 'Creative & Content',
    tag: 'CREATIVE & CONTENT',
    headlineMain: 'Stories and visuals',
    headlineAccent: 'that captivate.',
    description:
      'We craft compelling editorial stories, distinctive art direction, and conversion-focused copy that transforms casual browsers into loyal brand advocates.',
    deliverables: [
      {
        title: 'Commercial copywriting & messaging',
        description: 'Persuasive words engineered to inform, resonate and convert.',
      },
      {
        title: 'Art direction & creative direction',
        description: 'Distinctive aesthetic assets designed for maximum brand equity.',
      },
      {
        title: 'Content architecture & editorial planning',
        description: 'Structured storytelling aligned across touchpoints and campaigns.',
      },
    ],
    slug: '/services/content-creative',
    ctaText: 'Explore Creative & Content',
    image: '/images/services/service_brand_identity.webp',
    gridDescription: 'Ideas and content that connect and convert.',
    icon: Sparkles,
  },
  {
    id: '03',
    name: 'Web & Digital Experiences',
    tag: 'WEB & DIGITAL EXPERIENCES',
    headlineMain: 'Engineered for speed',
    headlineAccent: 'and conversion.',
    description:
      'We design and engineer bespoke, high-performance web platforms on Next.js that blend editorial luxury design with lightning-fast sub-second loading speeds.',
    deliverables: [
      {
        title: 'Bespoke Next.js web development',
        description: 'Clean, modern architecture without bloated third-party templates.',
      },
      {
        title: 'Conversion-focused UI/UX design',
        description: 'Intuitive navigation ergonomics and zero-friction user journeys.',
      },
      {
        title: 'Full-stack performance & responsiveness',
        description: 'Sub-second page speeds, Core Web Vitals optimization and fluid typography.',
      },
    ],
    slug: '/services/web-design-development',
    ctaText: 'Explore Web & Digital Experiences',
    image: '/images/services/service-web-development.webp',
    gridDescription: 'Fast, modern and conversion-focused web solutions.',
    icon: Code2,
  },
  {
    id: '04',
    name: 'Marketing & Discoverability',
    tag: 'MARKETING & DISCOVERABILITY',
    headlineMain: 'Get found by',
    headlineAccent: 'the right audience.',
    description:
      'We position your brand where high-intent buyers search — dominating Google search, Google Maps, and emerging AI generative answer engines like ChatGPT and Perplexity.',
    deliverables: [
      {
        title: 'Generative Engine Optimization (GEO)',
        description: 'Structured citation authority for AI search queries and conversational engines.',
      },
      {
        title: 'Technical & local search dominance',
        description: 'High-ranking local map packs, Schema.org metadata and organic search results.',
      },
      {
        title: 'Content authority & search architecture',
        description: 'Targeted search intent clusters driving high-intent inbound client enquiries.',
      },
    ],
    slug: '/services/seo-geo',
    ctaText: 'Explore Marketing & Discoverability',
    image: '/images/services/service-seo-geo.webp',
    gridDescription: 'Get found. Stay relevant.',
    icon: Megaphone,
  },
  {
    id: '05',
    name: 'Automation & Business Systems',
    tag: 'AUTOMATION & BUSINESS SYSTEMS',
    headlineMain: 'Streamline operations',
    headlineAccent: 'and scale.',
    description:
      'We integrate custom automation workflows, CRM pipelines, and intelligent AI agents that eliminate repetitive manual tasks and accelerate enquiry response times.',
    deliverables: [
      {
        title: 'Automated lead triage & CRM routing',
        description: 'Instant enquiry qualification and routing to WhatsApp and sales teams.',
      },
      {
        title: 'Custom operational workflow engines',
        description: 'Eliminating friction between marketing, client intake and administration.',
      },
      {
        title: 'AI agent integration & client assistants',
        description: '24/7 intelligent enquiry response and appointment scheduling.',
      },
    ],
    slug: '/services/ai-automation',
    ctaText: 'Explore Automation & Systems',
    image: '/images/services/service-ai-automation.webp',
    gridDescription: 'Work smarter, not harder.',
    icon: Layers,
  },
  {
    id: '06',
    name: 'Analytics & Growth',
    tag: 'ANALYTICS & GROWTH',
    headlineMain: 'Turn data into',
    headlineAccent: 'actionable decisions.',
    description:
      'We implement full-funnel measurement, behavioral event tracking, and CRO experimentation to systematically compound your return on digital investment over time.',
    deliverables: [
      {
        title: 'Full-funnel behavioral analytics',
        description: 'Clear visibility into visitor behavior, funnel leaks and drop-off points.',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Continuous A/B testing and friction-reduction experiments that drive sales.',
      },
      {
        title: 'Compounding commercial growth reports',
        description: 'Actionable executive performance metrics, revenue attribution and insights.',
      },
    ],
    slug: '/services/growth-optimization',
    ctaText: 'Explore Analytics & Growth',
    image: '/images/services/service-growth-systems.webp',
    gridDescription: 'Turn data into decisions.',
    icon: BarChart3,
  },
  {
    id: '07',
    name: 'E-commerce',
    tag: 'E-COMMERCE',
    headlineMain: 'Build and scale',
    headlineAccent: 'profitable stores.',
    description:
      'We build bespoke e-commerce platforms engineered for premium catalogue presentation, lightning-quick checkout flows, and maximum average order value.',
    deliverables: [
      {
        title: 'Custom headless & Shopify Plus flagships',
        description: 'High-conversion, custom-branded digital stores built to scale.',
      },
      {
        title: 'Seamless payment & inventory integration',
        description: 'Frictionless checkout experiences with UPI, cards, EMI and COD options.',
      },
      {
        title: 'Retention & customer lifetime value',
        description: 'Automated post-purchase re-engagement, cart recovery and loyalty workflows.',
      },
    ],
    slug: '/services/ecommerce-development',
    ctaText: 'Explore E-commerce',
    image: '/images/services/service-digital-marketing.webp',
    gridDescription: 'Build and scale online stores.',
    icon: ShoppingCart,
  },
  {
    id: '08',
    name: 'Performance Marketing',
    tag: 'PERFORMANCE MARKETING',
    headlineMain: 'Targeted campaigns',
    headlineAccent: 'delivering real ROI.',
    description:
      'We manage precision paid acquisition campaigns across Meta, Google Ads, and LinkedIn with high-converting landing experiences and disciplined budget allocation.',
    deliverables: [
      {
        title: 'Multi-channel paid media execution',
        description: 'Hyper-targeted campaigns reaching verified commercial decision-makers.',
      },
      {
        title: 'Creative ad asset production',
        description: 'High-converting static, motion and editorial carousel ad creatives.',
      },
      {
        title: 'Strict CAC & ROAS attribution tracking',
        description: 'Disciplined spend optimization focused on net revenue and qualified deals.',
      },
    ],
    slug: '/services/performance-marketing',
    ctaText: 'Explore Performance Marketing',
    image: '/images/services/service_digital_marketing.webp',
    gridDescription: 'Better targeting. Higher returns.',
    icon: Zap,
  },
];

export default function ServicesDisciplines() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const active = DISCIPLINES_DATA[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % DISCIPLINES_DATA.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + DISCIPLINES_DATA.length) % DISCIPLINES_DATA.length);
  };

  return (
    <section
      id="disciplines"
      aria-label="Eight Disciplines"
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION 03: HEADER & HORIZONTAL DISCIPLINE SELECTOR                      */}
        {/* ========================================================================= */}
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
            — OUR DISCIPLINES —
          </span>
        </div>

        {/* Section Header: Headline (Left) & Context Callout (Right) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-12 sm:mb-16">
          <div>
            <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#080B0A] leading-[1.12] tracking-tight">
              Eight Disciplines.<br />
              <span className="font-lora italic text-[#C99742]">One Unified Goal.</span>
            </h2>
          </div>

          <div className="lg:border-l lg:border-[#080B0A]/15 lg:pl-8 max-w-md">
            <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed">
              From brand strategy to performance marketing, our services are designed to work together, helping you build a stronger, smarter and more measurable digital presence.
            </p>
          </div>
        </div>

        {/* Horizontal Discipline Selector Bar */}
        <div className="relative mb-16 sm:mb-20">
          {/* Subtle Continuous Connecting Line (Desktop) */}
          <div 
            aria-hidden="true"
            className="hidden lg:block absolute top-[22px] left-[5%] right-[5%] h-[1.5px] bg-[#080B0A]/10 z-0" 
          />

          {/* Selector Items: Scrollable on mobile, grid on desktop */}
          <div className="flex lg:grid lg:grid-cols-8 gap-3 sm:gap-4 overflow-x-auto pb-4 lg:pb-0 no-scrollbar relative z-10">
            {DISCIPLINES_DATA.map((discipline, idx) => {
              const isSelected = activeIdx === idx;
              const IconComponent = discipline.icon;

              return (
                <button
                  key={discipline.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className="group flex flex-col items-center text-center shrink-0 w-[110px] sm:w-[130px] lg:w-auto cursor-pointer focus:outline-none"
                  aria-pressed={isSelected}
                >
                  {/* Icon Node */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-2.5 ${
                      isSelected
                        ? 'bg-[#E5C378] text-[#080B0A] shadow-md scale-105 ring-4 ring-[#E5C378]/25'
                        : 'bg-[#EFE9DC] text-[#4A504D] group-hover:bg-[#E5DEC9] group-hover:text-[#080B0A]'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Discipline Title */}
                  <span
                    className={`text-[11px] sm:text-xs font-roboto leading-tight transition-colors duration-200 line-clamp-2 px-1 ${
                      isSelected
                        ? 'font-bold text-[#080B0A]'
                        : 'font-medium text-[#4A504D] group-hover:text-[#080B0A]'
                    }`}
                  >
                    {discipline.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 04: FEATURED SERVICE (2-COLUMN INTERACTIVE PRESENTATION)           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Large Luxury Abstract Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#063C2D] border border-[#D4AF37]/25 flex flex-col justify-end p-6 sm:p-8">
              
              {/* Background Visual with Framer Motion Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: easeCustom }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={`${active.name} luxury abstract artwork`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center"
                  />
                  {/* Atmospheric dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063C2D]/95 via-[#063C2D]/50 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Inside Overlay: Headline & Interactive Controls */}
              <div className="relative z-10 text-[#F3EFE4]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: easeCustom }}
                  >
                    <span className="text-[11px] font-roboto font-bold tracking-[0.24em] text-[#E5C378] uppercase block mb-2">
                      {active.tag}
                    </span>
                    <h3 className="font-lora text-2xl sm:text-3xl lg:text-[34px] font-normal leading-tight tracking-tight mb-6">
                      {active.headlineMain}{' '}
                      <span className="italic text-[#E5C378]">{active.headlineAccent}</span>
                    </h3>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Pagination & Arrow Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/15">
                  <span className="text-xs font-roboto font-bold tracking-[0.2em] text-[#E5C378]">
                    {active.id} —
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous discipline"
                      className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-[#F3EFE4] flex items-center justify-center transition-all duration-200"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next discipline"
                      className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-[#F3EFE4] flex items-center justify-center transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Service Description, Deliverables & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs font-roboto font-bold tracking-[0.22em] text-[#C99742] uppercase">
                — FEATURED SERVICE —
              </span>
            </div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: easeCustom }}
              >
                <h3 className="font-lora text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#080B0A] leading-[1.12] tracking-tight mb-4">
                  {active.name}
                </h3>

                {/* Description */}
                <p className="font-lora text-sm sm:text-base text-[#3A403D] leading-relaxed mb-8 max-w-xl">
                  {active.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-4 mb-9">
                  {active.deliverables.map((item, idx) => (
                    <div key={item.title} className="flex items-start gap-3.5">
                      <div className="mt-1 shrink-0 text-[#C99742]">
                        <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div>
                        <h4 className="font-roboto font-bold text-sm text-[#080B0A] leading-snug">
                          {item.title}
                        </h4>
                        <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div>
                  <Link
                    href={active.slug}
                    className="inline-flex items-center justify-center min-h-[46px] gap-2 px-8 py-3.5 bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs sm:text-sm font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_16px_rgba(25,168,120,0.25)] hover:-translate-y-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
                  >
                    <span>{active.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}

