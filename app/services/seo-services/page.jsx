import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  Search, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  FileText, 
  Globe, 
  HelpCircle,
  MapPin
} from 'lucide-react';
import JsonLd, { buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from '../../../src/components/common/JsonLd';

export const metadata = {
  title: 'SEO Services in Jaipur',
  description: 'Professional SEO services in Jaipur. We optimize search rankings, Google 3-Pack visibility, and structured data to drive high-intent business inquiries.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/services/seo-services',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/services/seo-services',
    siteName: 'Siyara Innovations',
    title: 'SEO Services in Jaipur | Siyara Innovations',
    description: 'Professional SEO services in Jaipur. We optimize search rankings, Google 3-Pack visibility, and structured data to drive high-intent business inquiries.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in Jaipur | Siyara Innovations',
    description: 'Professional SEO services in Jaipur. We optimize search rankings, Google 3-Pack visibility, and structured data to drive high-intent business inquiries.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const faqs = [
  {
    q: 'How long does it take to see organic ranking improvements in Jaipur?',
    a: 'Most businesses begin seeing measurable movement within 60 to 90 days of implementing technical optimizations, local citation accuracy, and targeted content. Highly competitive commercial queries typically mature over 4 to 6 months of continuous optimization.',
  },
  {
    q: 'What is included in Siyara Innovations monthly SEO management?',
    a: 'Our monthly SEO services include complete technical health monitoring, Core Web Vitals maintenance, on-page optimization, content creation, Google Business Profile management, local citation building, and transparent monthly performance reporting.',
  },
  {
    q: 'How do you optimize for Google Maps 3-Pack rankings in Jaipur?',
    a: 'We align your exact business category taxonomy, maintain strict NAP consistency across verified directories, optimize geocoded images, configure local Schema.org markup, and implement systematic customer review workflows.',
  },
  {
    q: 'Do you optimize websites for AI search engines like Perplexity and ChatGPT?',
    a: 'Yes. In addition to traditional Google search algorithms, we format content in concise, high-information-gain passages and deploy linked Schema.org knowledge graphs so AI search tools can parse and reference your business.',
  },
];

export default function SeoServicesPage() {
  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Services', url: 'https://www.siyaradigitals.com/services' },
    { name: 'SEO Services', url: 'https://www.siyaradigitals.com/services/seo-services' },
  ]);

  const serviceSchema = buildServiceSchema({
    name: 'Search Engine Optimization (SEO) Services in Jaipur',
    serviceType: 'Search Engine Optimization',
    description: 'Comprehensive SEO services in Jaipur including technical site health, local Google 3-Pack ranking, content strategy, and AI search visibility.',
    url: 'https://www.siyaradigitals.com/services/seo-services',
  });

  const faqSchema = buildFaqSchema(faqs);

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbsSchema, serviceSchema, faqSchema],
  };

  const whatsappUrl = 'https://wa.me/919587269209?text=Hi%20Siyara%20Innovations%2C%20I%20am%20interested%20in%20your%20SEO%20services.';

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <JsonLd schema={fullSchema} />

      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-[#18A982]/15 via-[#071E18]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9B45F]/30 bg-[#071E18]/60 backdrop-blur-md mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D9B45F] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
              CORE SERVICE · JAIPUR &amp; PAN-INDIA
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F3EFE3] leading-[1.15] mb-5 sm:mb-6 break-words">
            Search Engine Optimization (SEO) Services in Jaipur
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            We engineer sustainable organic search authority for businesses in Jaipur and across India. From technical Core Web Vitals resolution to hyper-local Google Maps 3-Pack placement and structured data, our search strategies turn queries into qualified customer inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:-translate-y-0.5 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DISCUSS YOUR SEO ON WHATSAPP</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 min-h-[44px]"
            >
              <span>REQUEST SITE AUDIT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & METHODOLOGY */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto mb-16 sm:mb-24">
        <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0B110F] border border-[#D9B45F]/30 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6 text-[#ECE7D8]/90 font-sans text-sm sm:text-base leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE3] font-normal mb-4">
              How Modern SEO Drives Predictable Revenue
            </h2>
            <p>
              Traditional SEO relied on superficial keyword stuffing and aggressive backlink volume. Today, search algorithms prioritize technical excellence, topical depth, verified local entity signals, and user experience. When prospective customers search for specialized medical clinics, luxury interior designers, architectural services, or industrial products, they evaluate the most visible and credible brands on page one.
            </p>
            <p>
              At Siyara Innovations, we approach search engine optimization as an interconnected digital discipline. We analyze your commercial buyer journey from top-of-funnel informational queries to high-intent transactional searches. By aligning on-page content architecture, site speed, server response times, and semantic JSON-LD markup, we establish verifiable authority that algorithms and prospective clients both trust.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE SEO PILLARS */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-2 block">
            OUR STRATEGIC PILLARS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal">
            Four Connected Components of Our SEO Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                1. Technical SEO & Core Web Vitals
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                We diagnose and eliminate crawl errors, optimize canonical structures, resolve server response latency, and target Google Core Web Vitals thresholds. Fast, cleanly structured websites ensure search engines can index every key commercial page without friction.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Clean crawl budgets &amp; XML sitemaps</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Mobile Largest Contentful Paint (LCP) optimization</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Server-side rendering &amp; edge delivery</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                2. Local SEO & Google Maps 3-Pack
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                For Jaipur businesses serving local corridors such as C-Scheme, Vaishali Nagar, Tonk Road, or Sitapura, local 3-Pack presence drives substantial footfall and direct inquiries. We establish robust local citation networks, optimize Google Business Profiles, and configure LocalBusiness schema.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Exact NAP consistency across business registries</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Google Business Profile category optimization</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Localized schema with geographical coordinates</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                3. High-Intent Content & Topical Silos
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                We develop comprehensive editorial playbooks that answer exact buyer questions. By organizing content into topical hubs and supporting articles, we build domain authority that ranks for valuable long-tail commercial queries.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Commercial intent keyword research</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Comprehensive service &amp; industry guides</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Strategic internal link equity distribution</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                4. Schema.org & Generative Engine Optimization (GEO)
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                As generative engines like Google AI Overviews, Perplexity, and ChatGPT Search synthesize search results, Generative Engine Optimization (GEO) and structured data become critical. We deploy connected JSON-LD schemas that clearly define your organization, services, reviews, and FAQs.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Organization, Service &amp; FAQPage schemas</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Generative Engine Optimization (GEO) passage formatting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Entity disambiguation and knowledge graph nodes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto mb-16 sm:mb-24">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-2 block">
            COMMON INQUIRIES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE3] font-normal">
            Frequently Asked Questions About SEO
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-xl bg-[#0D1412] border border-[#0C6B52]/30">
              <h3 className="font-serif text-base sm:text-lg text-[#F3EFE3] font-normal mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHATSAPP CONVERSION CTA */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#063C2D] via-[#071E18] to-[#070A09] border border-[#D9B45F]/40 text-center relative overflow-hidden shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal mb-4">
            Ready to Build Your Search Authority?
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#ECE7D8]/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Message our team on WhatsApp to review your current website rankings, discuss target keywords in your sector, and explore our monthly SEO management plans.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>START A CONVERSATION ON WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
}
