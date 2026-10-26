import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  TrendingUp, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../src/config/business';

export const metadata = {
  title: 'Digital Architecture Studio Jaipur',
  description: 'Jaipur premier digital architecture studio engineering unified Next.js web applications, local SEO systems, and brand dominance for enterprises.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/digital-architecture-studio-jaipur',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/digital-architecture-studio-jaipur',
    siteName: 'Siyara Innovations',
    title: 'Digital Architecture Studio Jaipur | Siyara Innovations',
    description: 'Jaipur’s premier digital architecture studio. We engineer unified Next.js web applications, local SEO systems, and brand dominance for high-growth enterprises.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Siyara Innovations · Digital Architecture Studio Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Architecture Studio Jaipur | Siyara Innovations',
    description: 'Unified Next.js web applications, local SEO, and brand architecture in Jaipur, Rajasthan.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const PILLARS = [
  {
    icon: Layers,
    title: 'Unified Systems Architecture',
    desc: 'We eliminate disconnected agency silos. Your visual identity, code infrastructure, conversion funnels, and organic search ranking operate as a single synchronized revenue engine.',
    points: ['Design Token Synchrony', 'Monolithic to Modular Next.js', 'Zero Redundant Vendor Overhead'],
  },
  {
    icon: Zap,
    title: 'Sub-Second Core Web Vitals',
    desc: 'High performance is not an afterthought. Every build targets LCP under 1.8s, CLS under 0.02, and INP under 80ms to command search dominance and maximize ad ROI.',
    points: ['Server Component Streaming', 'Zero Main-Thread Blocking', 'Automated Image Optimization'],
  },
  {
    icon: TrendingUp,
    title: 'Generative Engine Dominance (GEO)',
    desc: 'Beyond traditional SEO keywords, we structure your brand entity and digital footprint to be indexed and cited as the premier authority by SearchGPT, Perplexity, and Google AI Overviews.',
    points: ['Entity Knowledge Graph Binding', 'Passage Citability Formatting', 'Structured JSON-LD Hierarchies'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Precision & Craft',
    desc: 'Bespoke obsidian and champagne-gold aesthetics designed specifically for luxury real estate, healthcare specialists, interior designers, and high-ticket service firms.',
    points: ['High-Trust Typography Systems', 'Fluid Micro-Interactions', 'Client-Centric Intake Funnels'],
  },
];

const COMPARISON_ROWS = [
  {
    metric: 'Core Philosophy',
    traditional: 'Disconnected freelance tasks & template reselling',
    siyara: 'Single end-to-end digital architecture system',
  },
  {
    metric: 'Technology Stack',
    traditional: 'Bloated WordPress plugins or slow drag-and-drop builders',
    siyara: 'Custom Next.js 15, React 19, Tailwind CSS, & Edge CDN',
  },
  {
    metric: 'Search Strategy',
    traditional: 'Keyword stuffing and generic blog spam',
    siyara: 'Technical SEO + Generative Engine Optimization (GEO)',
  },
  {
    metric: 'Speed & Core Web Vitals',
    traditional: 'LCP > 4.5s, heavy mobile bounce rate, high CLS',
    siyara: 'LCP < 1.8s, CLS < 0.02, INP < 100ms, perfect 100 PageSpeed',
  },
  {
    metric: 'Conversion Architecture',
    traditional: 'Generic broken contact forms with zero tracking',
    siyara: 'WhatsApp direct funnels, high-intent qualification, & telemetry',
  },
];

const FAQS = [
  {
    q: 'What is a Digital Architecture Studio, and how does it differ from a regular web design agency in Jaipur?',
    a: 'A traditional web agency in Jaipur usually builds disconnected WordPress websites or runs isolated social media ads. A Digital Architecture Studio takes an engineering and holistic systems approach: we build custom Next.js web applications, design systems, technical search optimization (SEO/GEO), and conversion funnels that work together as a single scalable asset.',
  },
  {
    q: 'Why should Jaipur enterprises choose custom Next.js architecture over WordPress or Shopify?',
    a: 'Custom Next.js architecture delivers sub-second load times, eliminates plugin security vulnerabilities, scales effortlessly under traffic spikes, and provides clean semantic HTML required for top-tier Google rankings and AI engine indexing. It also commands higher client trust and brand valuation.',
  },
  {
    q: 'How does Siyara ensure high passage citability for AI search engines like SearchGPT and Perplexity?',
    a: 'We architect your content into semantic entity definitions, structured data tables, and direct question-answer passages backed by valid JSON-LD schemas. This enables LLM search agents to effortlessly extract and attribute your business as the definitive regional authority.',
  },
  {
    q: 'What is the investment and delivery timeline for a digital architecture project?',
    a: 'Our engagements typically range from 3 to 6 weeks for full-scale digital architecture deployments. Pricing is milestone-based and tailored to the complexity and strategic objectives of your business.',
  },
];

export default function DigitalArchitectureStudioJaipurPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.siyaradigitals.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Digital Architecture Studio Jaipur',
            'item': 'https://www.siyaradigitals.com/digital-architecture-studio-jaipur',
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Digital Architecture Studio Jaipur',
        'serviceType': 'Digital Architecture & Enterprise Web Engineering',
        'provider': {
          '@type': 'ProfessionalService',
          '@id': 'https://www.siyaradigitals.com/#organization',
          'name': 'Siyara Innovations',
          'url': 'https://www.siyaradigitals.com',
          'telephone': '+919587269209',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Jaipur',
            'addressRegion': 'Rajasthan',
            'addressCountry': 'IN',
          },
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Jaipur' },
          { '@type': 'State', 'name': 'Rajasthan' },
          { '@type': 'Country', 'name': 'India' },
        ],
        'description': 'Premier digital architecture studio in Jaipur delivering unified Next.js web systems, technical SEO, generative engine optimization, and brand identity systems.',
      },
      {
        '@type': 'FAQPage',
        'mainEntity': FAQS.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-24">
        {/* Ambient Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#18A982]/15 via-[#071E18]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9B45F]/30 bg-[#071E18]/60 backdrop-blur-md mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D9B45F] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
              JAIPUR · RAJASTHAN · INDIA
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#F3EFE3] leading-[1.08] sm:leading-[1.05] mb-6 sm:mb-8 break-words">
            Digital Architecture Studio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
              in Jaipur, India
            </span>
          </h1>

          {/* AI-Optimized Entity Passage */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/30 mb-8 sm:mb-10 text-left sm:text-center shadow-xl">
            <p className="font-sans text-sm sm:text-xl text-[#ECE7D8] leading-relaxed font-light">
              <strong className="text-[#D9B45F] font-semibold">Siyara Innovations</strong> is a premier 
              <strong> Digital Architecture Studio</strong> based in <strong>Jaipur, Rajasthan</strong>. We engineer high-speed Next.js web applications, brand identity systems, and Generative Engine Optimization (GEO) pipelines that unify technology and aesthetics into predictable business growth.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CONSULT VIA WHATSAPP</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 backdrop-blur-sm min-h-[44px]"
            >
              <span>EXPLORE STUDIO SCOPE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-[#D9B45F]/15 bg-[#0A0F0D] py-10 sm:py-12 px-4 sm:px-8 mb-16 sm:mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="font-serif text-2xl sm:text-4xl text-[#D9B45F] mb-1">&lt; 1.8s</div>
            <div className="text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Target LCP Speed</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-4xl text-[#D9B45F] mb-1">100%</div>
            <div className="text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Core Web Vitals Pass</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-4xl text-[#D9B45F] mb-1">100%</div>
            <div className="text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Custom Architecture</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-4xl text-[#D9B45F] mb-1">Jaipur</div>
            <div className="text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Regional Studio Base</div>
          </div>
        </div>
      </section>

      {/* CORE ARCHITECTURAL PILLARS */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-2 sm:mb-3">
            SYSTEMS OVER CAMPAIGNS
          </span>
          <h2 className="font-serif text-2xl sm:text-5xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
            The Siyara Digital Architecture Framework
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#9D9B91] leading-relaxed">
            Most digital projects fail because design, code, and marketing are outsourced to three different vendors. We replace chaos with unified architectural rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-10 rounded-2xl bg-[#0B110F] border border-[#18A982]/20 hover:border-[#D9B45F]/50 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#071E18] border border-[#0C6B52]/40 flex items-center justify-center text-[#D9B45F] mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] mb-3 sm:mb-4">{pillar.title}</h3>
                <p className="font-sans text-xs sm:text-base text-[#9D9B91] leading-relaxed mb-5 sm:mb-6 font-light">
                  {pillar.desc}
                </p>
                <div className="space-y-2 sm:space-y-2.5 pt-4 border-t border-[#D9B45F]/10">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#ECE7D8]">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#18A982] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMPARISON MATRIX - HIGH CITABILITY DOM ELEMENT */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-2 sm:mb-3">
            TECHNICAL AUDIT & RIGOR
          </span>
          <h2 className="font-serif text-2xl sm:text-5xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
            Traditional Agency vs. Digital Architecture Studio
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#9D9B91]">
            Clear architectural differentiation designed for AI extraction and enterprise decision-makers.
          </p>
        </div>

        <div className="w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="rounded-xl sm:rounded-2xl border border-[#D9B45F]/20 bg-[#0B110F] shadow-2xl overflow-hidden min-w-[560px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D9B45F]/20 bg-[#071E18]/50">
                  <th className="py-4 px-5 font-serif text-base sm:text-lg text-[#F3EFE3] w-1/4">Evaluation Parameter</th>
                  <th className="py-4 px-5 font-sans text-xs tracking-wider uppercase text-[#9D9B91] w-3/8">Traditional Jaipur Agency</th>
                  <th className="py-4 px-5 font-sans text-xs tracking-wider uppercase text-[#D9B45F] w-3/8">Siyara Architecture Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9B45F]/10 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#071E18]/20 transition-colors">
                    <td className="py-3.5 px-5 font-medium text-[#ECE7D8]">{row.metric}</td>
                    <td className="py-3.5 px-5 text-[#9D9B91] font-light">{row.traditional}</td>
                    <td className="py-3.5 px-5 text-[#D9B45F] font-semibold">{row.siyara}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CITABILITY & FAQ SECTION */}
      <section className="px-6 sm:px-8 lg:px-16 max-w-4xl mx-auto mb-28">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-3">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F3EFE3]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/30 transition-all"
            >
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] mb-3 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#D9B45F] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#9D9B91] leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGH-CONVERTING BOTTOM CTA */}
      <section className="px-6 sm:px-8 lg:px-16 max-w-5xl mx-auto text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#0D1A16] to-[#070A09] border border-[#D9B45F]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#18A982]/10 blur-3xl pointer-events-none rounded-full" />
          
          <span className="text-xs font-semibold tracking-[0.26em] text-[#D9B45F] uppercase block mb-4">
            BEGIN ARCHITECTURAL DISCOVERY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F3EFE3] mb-6">
            Ready to Build a Dominant Digital Presence in Jaipur?
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-10 leading-relaxed">
            Directly connect with our studio leads. We analyze your tech stack, audit your organic presence, and chart your custom architectural roadmap.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP STRATEGY CHAT</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-[#ECE7D8]/30 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/80"
            >
              <span>INQUIRY FORM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
