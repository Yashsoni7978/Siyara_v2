import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  CheckCircle2, 
  Factory, 
  ShieldCheck, 
  Globe, 
  HelpCircle, 
  ArrowRight,
  TrendingUp,
  FileText,
  BookOpen
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../../src/config/business';
import JsonLd, { buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from '../../../src/components/common/JsonLd';

export const metadata = {
  title: 'Manufacturing & Export Web Design Jaipur',
  description: 'Industrial Next.js websites, B2B procurement catalog architectures, and international export SEO for manufacturers in Jaipur, Rajasthan.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries/manufacturing',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries/manufacturing',
    siteName: 'Siyara Innovations',
    title: 'Manufacturing & Export Web Design Jaipur | Siyara Innovations',
    description: 'Industrial Next.js websites, B2B procurement catalog architectures, and international export SEO for manufacturers in Jaipur, Rajasthan.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Manufacturing Website Design Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing & Export Web Design Jaipur | Siyara Innovations',
    description: 'Industrial Next.js websites and B2B export SEO in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const CAPABILITIES = [
  'B2B Product Specification & Machinery Catalogs',
  'Request for Quotation (RFQ) Direct Intake Funnels',
  'International Export Compliance & Certification Displays',
  'Industrial B2B SEO & Global Trade Discoverability',
  'High-Performance Edge Infrastructure & Core Web Vitals',
];

const FAQS = [
  {
    q: 'How does a modern Next.js website help manufacturing exporters in Jaipur?',
    a: 'International B2B buyers and institutional procurement heads evaluate technical credibility and speed. Rapid load times and clear machinery specifications establish trust and prompt RFQs.',
  },
  {
    q: 'Can the website handle large technical PDF spec sheets and CAD catalogs?',
    a: 'Yes, we optimize document downloads via global CDN edge caches, ensuring instant delivery without bogging down page performance.',
  },
  {
    q: 'How do you target international export markets like the US, Europe, and UAE?',
    a: 'We implement international schema, multi-regional meta tags, and high-citability content structured for global search engines and AI industrial queries.',
  },
];

export default function ManufacturingIndustryPage() {
  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Industries', url: 'https://www.siyaradigitals.com/services' },
    { name: 'Manufacturing & Industrial', url: 'https://www.siyaradigitals.com/industries/manufacturing' },
  ]);

  const serviceSchema = buildServiceSchema({
    name: 'Manufacturing & B2B Industrial Website Design Jaipur',
    serviceType: 'Industrial Web Development',
    description: 'B2B catalog websites and export SEO for manufacturers and engineering exporters in Jaipur, Rajasthan.',
    url: 'https://www.siyaradigitals.com/industries/manufacturing',
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
            <Factory className="w-3.5 h-3.5 text-[#D9B45F] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
              MANUFACTURING & EXPORT · JAIPUR & RAJASTHAN
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F3EFE3] leading-[1.12] sm:leading-[1.1] break-words mb-5 sm:mb-6">
            Manufacturing & Export Website Design in Jaipur
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            High-performance industrial web applications, B2B procurement catalog systems, and international export SEO for manufacturers.
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
              <span>RFQ INTAKE FORM</span>
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
              INDUSTRIAL B2B CITABILITY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
              Why Choose Digital Architecture for Industrial & Manufacturing Exporters in Jaipur?
            </h2>
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#070A09]/80 border border-[#18A982]/20 mb-6">
              <p className="font-sans text-xs sm:text-base text-[#ECE7D8] leading-relaxed font-light">
                Industrial manufacturers, stone and marble exporters, textile mills, and engineering fabrication enterprises in Jaipur frequently rely on outdated, non-responsive catalog websites that fail to establish institutional credibility with domestic procurement heads and international B2B buyers. Siyara Innovations bridges this industrial trust gap by engineering high-performance Next.js web architectures built to showcase technical capabilities, manufacturing machinery, and export certifications. By delivering static HTML prerendering backed by edge CDN routing, our industrial platforms achieve Largest Contentful Paint (LCP) under 1.8 seconds, Cumulative Layout Shift (CLS) under 0.02, and Interaction to Next Paint (INP) under 80 milliseconds. Supported by verified Organization, LocalBusiness, and ItemList Schema.org markup, our web architectures ensure international buyers and Indian industrial procurement teams find your factory across Google Search and generative engines like SearchGPT and Perplexity. The result is high-ticket industrial RFQs, verified tender inquiries, and permanent international export visibility.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#9D9B91]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                LCP &lt; 1.8s
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Direct RFQ Funnels
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                B2B Machinery Schema
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Global Export Authority
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
            INDUSTRIAL FEATURES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            Engineered for Industrial Procurement
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/40 transition-all flex items-start gap-3.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#071E18] text-[#D9B45F] flex items-center justify-center shrink-0 border border-[#0C6B52]/30 group-hover:scale-105 transition-transform">
                <Factory className="w-4 h-4" />
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
                B2B Manufacturing & Export Website Design: Sitapura & VKI Jaipur Industrial Playbook
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-2 font-light leading-relaxed">
                Read our in-depth blueprint for industrial manufacturers, stone fabricators, and handicraft exporters in Sitapura & VKI on driving international RFQs with high-speed digital catalogs.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/insights/b2b-manufacturing-website-sitapura-vki-jaipur"
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
            SCALE INDUSTRIAL PROCUREMENT & EXPORTS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] mb-4 break-words">
            Build a World-Class Manufacturing Web Architecture in Jaipur
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#9D9B91] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Connect directly with our industrial web architects via WhatsApp to audit your B2B catalog and global export discoverability.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:scale-105 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WHATSAPP RFQ CONSULTATION</span>
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
