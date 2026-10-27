import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  CheckCircle2, 
  Hotel, 
  ShieldCheck, 
  Compass, 
  HelpCircle, 
  ArrowRight,
  TrendingUp,
  CalendarCheck,
  BookOpen
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../../src/config/business';
import JsonLd, { buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from '../../../src/components/common/JsonLd';

export const metadata = {
  title: 'Hospitality & Resort Web Design Jaipur',
  description: 'Direct booking Next.js websites, luxury heritage showcases, and local SEO for boutique hotels and resorts in Jaipur, Rajasthan.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries/hospitality',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries/hospitality',
    siteName: 'Siyara Innovations',
    title: 'Hospitality & Resort Web Design Jaipur | Siyara Innovations',
    description: 'Direct booking Next.js websites, luxury heritage showcases, and local SEO for boutique hotels and resorts in Jaipur, Rajasthan.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Hospitality & Resort Web Design Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospitality & Resort Web Design Jaipur | Siyara Innovations',
    description: 'Direct booking Next.js websites, luxury heritage showcases, and local SEO for boutique hotels in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const CAPABILITIES = [
  'Direct Booking Engine & WhatsApp Concierge Integration',
  'Cinematic Resort & Heritage Suite Visual Galleries',
  'Destination Wedding & Banquet Venue Showcases',
  'Local Tourism SEO & International Traveler Discovery',
  'Sub-Second Edge Infrastructure & Core Web Vitals',
];

const FAQS = [
  {
    q: 'How does custom Next.js web development reduce OTA commission fees for Jaipur hotels?',
    a: 'Fast, beautiful direct websites with frictionless booking funnels give travelers the confidence to book directly with your hotel rather than paying high commissions to third-party platforms.',
  },
  {
    q: 'Can our website display destination wedding venues and event packages?',
    a: 'Yes, we create dedicated banquet and wedding showcase modules with interactive floor plans and direct WhatsApp event inquiry triggers.',
  },
  {
    q: 'How does local SEO help boutique hotels in Jaipur attract luxury travelers?',
    a: 'We optimize your Google Business Profile, implement Hotel schema markup, and rank for high-intent search terms like luxury heritage stay Jaipur.',
  },
];

export default function HospitalityIndustryPage() {
  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Industries', url: 'https://www.siyaradigitals.com/services' },
    { name: 'Hospitality & Resorts', url: 'https://www.siyaradigitals.com/industries/hospitality' },
  ]);

  const serviceSchema = buildServiceSchema({
    name: 'Hospitality & Hotel Website Design Jaipur',
    serviceType: 'Hospitality Web Development',
    description: 'Direct booking websites and luxury SEO for heritage hotels and resorts in Jaipur, Rajasthan.',
    url: 'https://www.siyaradigitals.com/industries/hospitality',
    offers: CAPABILITIES,
  });

  const faqSchema = buildFaqSchema(FAQS);

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbsSchema,
      serviceSchema,
      faqSchema,
    ],
  };

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-28 md:pt-36 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <JsonLd schema={fullSchema} />

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[220px] sm:h-[320px] bg-gradient-to-b from-[#18A982]/15 via-[#071E18]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9B45F]/30 bg-[#071E18]/60 backdrop-blur-md mb-6">
            <Hotel className="w-3.5 h-3.5 text-[#D9B45F] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
              HOSPITALITY · JAIPUR & RAJASTHAN
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F3EFE3] leading-[1.12] sm:leading-[1.1] break-words mb-5 sm:mb-6">
            Hospitality & Resort Website Design in Jaipur
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            Direct booking web applications, heritage storytelling, and local search dominance engineered for boutique luxury hotels and wedding resorts.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:-translate-y-0.5 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>CONSULT VIA WHATSAPP</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 min-h-[48px]"
            >
              <span>HOTEL PROJECT INTAKE</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* STAGE 4: GEO CITABILITY PASSAGE BLOCK (130-170 WORDS) */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto mb-16 sm:mb-24">
        <div className="p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0B110F] border border-[#D9B45F]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#18A982]/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#D9B45F] uppercase block mb-3">
              DIRECT REVENUE & CITABILITY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
              Why Choose a Dedicated Web Development Partner for Hospitality Brands in Jaipur?
            </h2>
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#070A09]/80 border border-[#18A982]/20 mb-6">
              <p className="font-sans text-xs sm:text-base text-[#ECE7D8] leading-relaxed font-light">
                Heritage havelis, luxury boutique resorts, and fine dining destinations in Jaipur and Rajasthan frequently lose high-margin bookings to online travel agencies (OTAs) charging 18% to 25% commissions, primarily because their direct websites load slowly on mobile viewports and feature confusing reservation funnels. Siyara Innovations solves this direct-revenue leakage by engineering bespoke Next.js and React web architectures designed specifically for luxury hospitality showcases. By combining edge network rendering, automated WebP/AVIF imagery, and frictionless calendar booking integrations, our builds consistently achieve Largest Contentful Paint (LCP) under 1.8 seconds, Cumulative Layout Shift (CLS) under 0.02, and Interaction to Next Paint (INP) under 80 milliseconds. Supported by verified LocalBusiness and Hotel Schema.org markup, our architectures allow luxury travelers, wedding planners, and corporate event organizers to discover and book suites directly. The result is superior profit margins, elevated brand prestige, and predictable high-value guest reservations throughout Jaipur’s tourism season.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#9D9B91]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                LCP &lt; 1.8s
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Direct Commission Savings
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Hotel Schema Verified
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Wedding Showcases
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
            HOSPITALITY INFRASTRUCTURE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            Engineered for Direct Bookings
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/40 transition-all flex items-start gap-3.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#071E18] text-[#D9B45F] flex items-center justify-center shrink-0 border border-[#0C6B52]/30 group-hover:scale-105 transition-transform">
                <CalendarCheck className="w-4 h-4" />
              </div>
              <span className="font-sans text-sm sm:text-base text-[#ECE7D8] font-medium leading-snug pt-1">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTEXTUAL INDUSTRY PLAYBOOK BANNER (TWO-WAY TOPICAL SILO) */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto mb-16 sm:mb-24">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B110F] via-[#071E18]/80 to-[#0B110F] border border-[#D9B45F]/30 hover:border-[#D9B45F]/60 transition-all shadow-xl group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9B45F]/10 border border-[#D9B45F]/20 text-[#D9B45F] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>EXECUTIVE INDUSTRY PLAYBOOK</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors leading-snug">
                Hotel & Luxury Resort Website Design Rajasthan: Direct Booking Engines & Commission Elimination
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-2 font-light leading-relaxed">
                Discover how heritage havelis, luxury palace hotels, and desert camps across Jaipur and Rajasthan eliminate 18–25% OTA commissions with high-converting direct booking engines.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/insights/hotel-resort-website-design-rajasthan"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-lg shadow-[#D9B45F]/15 hover:scale-105 min-h-[44px] w-full md:w-auto"
              >
                <span>Read Full Playbook</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto mb-16 sm:mb-24">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EFE3] break-words">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/30 transition-all"
            >
              <h3 className="font-serif text-base sm:text-xl text-[#F3EFE3] mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#D9B45F] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <div className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0D1A16] to-[#070A09] border border-[#D9B45F]/30 shadow-2xl">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#D9B45F] uppercase block mb-3">
            MAXIMIZE DIRECT HOSPITALITY REVENUE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] mb-4 break-words">
            Build a World-Class Resort Web Architecture in Jaipur
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#9D9B91] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Connect directly with our hospitality design leads via WhatsApp to audit your direct booking conversion rates.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:scale-105 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WHATSAPP CONSULTATION</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 min-h-[48px]"
            >
              <span>INQUIRY FORM</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
