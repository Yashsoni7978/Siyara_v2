import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  CheckCircle2, 
  Code2, 
  Zap, 
  Database, 
  Server, 
  Lock, 
  HelpCircle,
  ArrowRight,
  Gauge
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../src/config/business';

export const metadata = {
  title: 'Next.js Web Development Jaipur',
  description: 'Custom Next.js 15 and React web application development in Jaipur. Sub-second load speeds, App Router architecture, and 100/100 Core Web Vitals.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/nextjs-web-development-jaipur',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/nextjs-web-development-jaipur',
    siteName: 'Siyara Innovations',
    title: 'Next.js Web Development Company in Jaipur | Siyara Innovations',
    description: 'Enterprise-grade Next.js & React web development in Jaipur. Sub-second load speeds, React Server Components, and custom full-stack web applications.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Next.js Web Development Company Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Web Development Company in Jaipur | Siyara Innovations',
    description: 'Custom Next.js 15, React 19, and full-stack web development in Jaipur, India.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const TECH_SPECS = [
  {
    icon: Server,
    title: 'Next.js 15 & React 19 App Router',
    desc: 'Modern server component architecture (RSC) that streams HTML directly from edge nodes, slashing client JavaScript payloads and delivering instant first paint.',
    features: ['React Server Components (RSC)', 'Edge Runtime Routing', 'Incremental Static Regeneration (ISR)'],
  },
  {
    icon: Gauge,
    title: '100/100 Core Web Vitals Engineering',
    desc: 'We engineer front-ends with sub-2.0s Largest Contentful Paint (LCP), zero Cumulative Layout Shift (CLS < 0.02), and instantaneous responsiveness (INP < 80ms).',
    features: ['AVIF & WebP Next-Gen Formats', 'Zero Render-Blocking Scripts', 'Font Subsetting & Swap Preload'],
  },
  {
    icon: Database,
    title: 'Full-Stack Scalability & APIs',
    desc: 'Clean REST and GraphQL API routes, database integrations (PostgreSQL, Supabase, Redis), and enterprise auth pipelines engineered for zero downtime.',
    features: ['Serverless & Edge Middleware', 'Webhook Integrations', 'End-to-End Type Safety'],
  },
  {
    icon: Lock,
    title: 'Enterprise Security by Default',
    desc: 'Eliminate the notorious vulnerabilities of legacy WordPress plugins. Next.js applications are immune to SQL injection, CMS exploits, and automated bot brute force.',
    features: ['Content Security Policy (CSP)', 'Strict CORS Headers', 'No Vulnerable Third-Party Plugins'],
  },
];

const STACK_COMPARISON = [
  {
    feature: 'Average Page Load Time',
    wordpress: '3.8s – 7.5s (Heavy PHP + database queries)',
    nextjs: '0.4s – 1.2s (Prerendered Edge HTML)',
  },
  {
    feature: 'Mobile Performance Score',
    wordpress: '25 – 45 / 100 on Google PageSpeed',
    nextjs: '92 – 100 / 100 on Google PageSpeed',
  },
  {
    feature: 'Search Engine Crawlability',
    wordpress: 'Slow DOM rendering, bloated scripts',
    nextjs: 'Instant SSR with semantic HTML & schema',
  },
  {
    feature: 'Maintenance & Security',
    wordpress: 'Constant plugin updates & hack vulnerabilities',
    nextjs: 'Immutable serverless builds, zero plugin bloat',
  },
  {
    feature: 'Custom Interactive UI',
    wordpress: 'Clunky page builder shortcodes',
    nextjs: 'Tailwind CSS, Framer Motion, custom components',
  },
];

const FAQS = [
  {
    q: 'Why should a business in Jaipur build with Next.js instead of WordPress or PHP?',
    a: 'Next.js delivers 3x to 5x faster load speeds than standard WordPress setups, which directly boosts Google SEO rankings and lowers Google Ads cost-per-click. Furthermore, Next.js applications do not rely on insecure third-party plugins that frequently break or get hacked.',
  },
  {
    q: 'Can Next.js handle dynamic features like client portals, booking, and custom forms?',
    a: 'Yes. Next.js is a full-stack hybrid framework. It allows static prerendering for marketing pages alongside dynamic serverless API routes, database connections, and authentication systems for client portals and intake workflows.',
  },
  {
    q: 'What is Siyara Innovations’ development workflow for a custom Next.js project in Jaipur?',
    a: 'Our workflow consists of 4 distinct phases: (1) Architectural Planning & UI Prototyping, (2) Clean Component Development using Tailwind CSS and React 19, (3) SEO, GEO, and Schema integration with Core Web Vitals optimization, and (4) Edge CDN deployment with continuous monitoring.',
  },
  {
    q: 'Do you provide maintenance and ongoing feature development after launch?',
    a: 'Yes. Because Next.js code is clean and modular, ongoing feature expansion is seamless. We offer continuous technical maintenance, monthly SEO audits, and conversion rate optimization (CRO) retainer agreements.',
  },
];

export default function NextJsWebDevelopmentJaipurPage() {
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
            'name': 'Next.js Web Development Jaipur',
            'item': 'https://www.siyaradigitals.com/nextjs-web-development-jaipur',
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Next.js Web Development Jaipur',
        'serviceType': 'Custom Web Application Development',
        'provider': {
          '@type': 'ProfessionalService',
          '@id': 'https://www.siyaradigitals.com/#organization',
          'name': 'Siyara Innovations',
          'url': 'https://www.siyaradigitals.com',
          'telephone': '+919587269209',
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Jaipur' },
          { '@type': 'State', 'name': 'Rajasthan' },
          { '@type': 'Country', 'name': 'India' },
        ],
        'description': 'Custom Next.js 15 and React web application development in Jaipur. High-performance, SEO-first architecture for scaling brands and clinics.',
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
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-28 md:pt-36 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-20 sm:mb-24">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[250px] sm:h-[350px] bg-gradient-to-b from-[#18A982]/15 via-[#071E18]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18A982]/30 bg-[#071E18]/60 backdrop-blur-md mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#18A982] animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#18A982] uppercase">
              NEXT.JS 15 · REACT 19 · EDGE PERFORMANCE
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#F3EFE3] leading-[1.12] sm:leading-[1.05] break-words mb-6 sm:mb-8">
            Next.js Web Development <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
              Company in Jaipur
            </span>
          </h1>

          {/* AI Citability Paragraph */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/30 mb-8 sm:mb-10 text-left sm:text-center shadow-xl">
            <p className="font-sans text-sm sm:text-lg text-[#ECE7D8] leading-relaxed font-light">
              <strong className="text-[#D9B45F] font-semibold">Siyara Innovations</strong> is Jaipur’s specialized 
              <strong> Next.js web development company</strong>. We build custom React 19 web applications featuring server-side rendering (SSR), sub-second Core Web Vitals, and enterprise schema integration for businesses requiring unmatched speed and organic search authority.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-6">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>DISCUSS YOUR WEB APP</span>
            </a>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 backdrop-blur-sm min-h-[48px]"
            >
              <span>VIEW RECENT BUILDS</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="border-y border-[#D9B45F]/15 bg-[#0A0F0D] py-8 sm:py-12 px-4 sm:px-6 lg:px-12 mb-20 sm:mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="font-serif text-2xl sm:text-4xl text-[#18A982] mb-1">0.4s</div>
            <div className="text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Edge Time To First Byte</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-4xl text-[#18A982] mb-1">98+</div>
            <div className="text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Avg Mobile PageSpeed</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-4xl text-[#18A982] mb-1">0 Plugins</div>
            <div className="text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Zero Vulnerability Stack</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-4xl text-[#18A982] mb-1">Jaipur</div>
            <div className="text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Engineering Hub</div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CAPABILITIES */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-3">
            MODERN WEB STANDARDS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
            Engineered with Next.js App Router & Edge Infrastructure
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#9D9B91] leading-relaxed">
            We don’t use generic templates. Every line of code is structured for enterprise reliability, high-converting interactions, and long-term search dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TECH_SPECS.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#0B110F] border border-[#18A982]/20 hover:border-[#D9B45F]/50 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#071E18] border border-[#0C6B52]/40 flex items-center justify-center text-[#18A982] mb-5 sm:mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] mb-3 sm:mb-4">{spec.title}</h3>
                <p className="font-sans text-sm sm:text-base text-[#9D9B91] leading-relaxed mb-5 sm:mb-6">
                  {spec.desc}
                </p>
                <div className="space-y-2.5 pt-4 border-t border-[#D9B45F]/10">
                  {spec.features.map((ft, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#ECE7D8]">
                      <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                      <span>{ft}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* NEXT.JS VS WORDPRESS TABLE */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-3">
            PERFORMANCE COMPARISON
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
            Next.js Architecture vs. Legacy WordPress
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#9D9B91]">
            Why modern businesses across Jaipur and India are migrating their mission-critical websites to Next.js.
          </p>
        </div>

        <div className="w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="rounded-2xl border border-[#D9B45F]/20 bg-[#0B110F] shadow-2xl min-w-[560px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D9B45F]/20 bg-[#071E18]/50">
                  <th className="py-4 sm:py-5 px-4 sm:px-6 font-serif text-base sm:text-lg text-[#F3EFE3] w-1/4">Feature</th>
                  <th className="py-4 sm:py-5 px-4 sm:px-6 font-sans text-xs tracking-wider uppercase text-[#9D9B91] w-3/8">Legacy WordPress Sites</th>
                  <th className="py-4 sm:py-5 px-4 sm:px-6 font-sans text-xs tracking-wider uppercase text-[#18A982] w-3/8">Siyara Custom Next.js</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9B45F]/10 text-xs sm:text-sm">
                {STACK_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#071E18]/20 transition-colors">
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-[#ECE7D8]">{row.feature}</td>
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-[#9D9B91]">{row.wordpress}</td>
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-[#18A982] font-semibold">{row.nextjs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto mb-20 sm:mb-28">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-3">
            TECHNICAL FAQS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            Questions on Next.js Engineering
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-8 rounded-xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/30 transition-all"
            >
              <h3 className="font-serif text-lg sm:text-2xl text-[#F3EFE3] mb-3 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#D9B45F] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="font-sans text-xs sm:text-base text-[#9D9B91] leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONVERSION CTA */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <div className="p-6 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#0D1A16] to-[#070A09] border border-[#D9B45F]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#18A982]/10 blur-3xl pointer-events-none rounded-full" />
          
          <span className="text-xs font-semibold tracking-[0.26em] text-[#D9B45F] uppercase block mb-3 sm:mb-4">
            UPGRADE YOUR TECH STACK
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
            Build a High-Velocity Next.js Application in Jaipur
          </h2>
          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Get an interactive code review and architectural estimate directly from our engineering team.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:scale-105 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>CONSULT VIA WHATSAPP</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#ECE7D8]/30 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/80 min-h-[48px]"
            >
              <span>PROJECT INTAKE FORM</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
