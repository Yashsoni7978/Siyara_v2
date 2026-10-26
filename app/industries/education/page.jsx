import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  CheckCircle2, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  HelpCircle, 
  ArrowRight,
  TrendingUp,
  Users
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../../src/config/business';
import JsonLd, { buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from '../../../src/components/common/JsonLd';

export const metadata = {
  title: 'Education & Institute Web Design Jaipur',
  description: 'Scalable Next.js websites, student admission funnels, and local education SEO for schools, coaching centers, and colleges in Jaipur, Rajasthan.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries/education',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries/education',
    siteName: 'Siyara Innovations',
    title: 'Education & Institute Web Design Jaipur | Siyara Innovations',
    description: 'Scalable Next.js websites, student admission funnels, and local education SEO for schools, coaching centers, and colleges in Jaipur, Rajasthan.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Education Website Design Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education & Institute Web Design Jaipur | Siyara Innovations',
    description: 'Scalable Next.js websites and student admission funnels in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const CAPABILITIES = [
  'Zero-Crash Admission Spike Scalability (Edge CDN)',
  'Student Inquiry & Digital Application Funnels',
  'Interactive Course Curriculum & Faculty Showcases',
  'Local Education SEO & Google Maps Visibility',
  'Sub-Second Core Web Vitals & Mobile Optimization',
];

const FAQS = [
  {
    q: 'Can Next.js handle high-traffic admission season spikes in Jaipur?',
    a: 'Yes, Next.js prerenders course pages into edge-cached static assets, allowing thousands of simultaneous parents and students to browse without crashing your server.',
  },
  {
    q: 'How do you streamline student registration and inquiry intake?',
    a: 'We integrate lightweight multi-step application forms with automated WhatsApp confirmation notifications for parents and admissions teams.',
  },
  {
    q: 'Does local SEO help private schools and coaching institutes in Jaipur?',
    a: 'Yes, local SEO ranks your institute for competitive terms like best coaching for IIT in Jaipur or private school admissions Jaipur.',
  },
];

export default function EducationIndustryPage() {
  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Industries', url: 'https://www.siyaradigitals.com/services' },
    { name: 'Education & Institutes', url: 'https://www.siyaradigitals.com/industries/education' },
  ]);

  const serviceSchema = buildServiceSchema({
    name: 'Education & School Website Design Jaipur',
    serviceType: 'Educational Web Development',
    description: 'Scalable websites and local SEO for schools, coaching institutes, and universities in Jaipur.',
    url: 'https://www.siyaradigitals.com/industries/education',
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
            <GraduationCap className="w-3.5 h-3.5 text-[#D9B45F] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
              EDUCATION & ACADEMICS · JAIPUR
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F3EFE3] leading-[1.12] sm:leading-[1.1] break-words mb-5 sm:mb-6">
            Education & Institute Website Design in Jaipur
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            Scalable Next.js web applications, digital student admission funnels, and local search dominance for schools and academies.
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
              <span>INQUIRY FORM</span>
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
              SCALE & ADMISSIONS CITABILITY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
              Why Choose Modern Next.js Architecture for Educational Institutions in Jaipur?
            </h2>
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#070A09]/80 border border-[#18A982]/20 mb-6">
              <p className="font-sans text-xs sm:text-base text-[#ECE7D8] leading-relaxed font-light">
                Private universities, competitive coaching institutes, and international schools in Jaipur frequently suffer from legacy CMS platforms that fail to handle massive admission season traffic spikes, resulting in portal crashes and high parent abandonment rates. Siyara Innovations resolves these technical vulnerabilities by engineering robust Next.js and React educational web architectures backed by scalable edge CDN distribution. By prerendering academic curriculum pages, admission prospectuses, and faculty profiles into static HTML while streaming dynamic student registration portals via serverless API routes, our systems maintain sub-second performance under any traffic load. Our engineering benchmarks guarantee Largest Contentful Paint (LCP) under 1.8 seconds, Cumulative Layout Shift (CLS) under 0.02, and Interaction to Next Paint (INP) under 80 milliseconds. Backed by verified EducationalOrganization schema markup and localized SEO targeting across Rajasthan, we ensure parent discovery leads directly to high-converting student enrollments and streamlined digital admission applications.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#9D9B91]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                LCP &lt; 1.8s
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Zero Crash Traffic Surge
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Admission Funnel Telemetry
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                Educational Schema
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#D9B45F] uppercase block mb-2">
            ACADEMIC CAPABILITIES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            Built for Academic Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/40 transition-all flex items-start gap-3.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#071E18] text-[#D9B45F] flex items-center justify-center shrink-0 border border-[#0C6B52]/30 group-hover:scale-105 transition-transform">
                <BookOpen className="w-4 h-4" />
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
                Coaching Institute & School Website Design Jaipur: Admission Funnels & Lead Generation
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-2 font-light leading-relaxed">
                Learn how premier coaching academies, private schools, and test prep institutes in Jaipur engineer high-converting admission funnels, automated scholarship test portals, and fee gateways.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/insights/coaching-institute-school-website-design-jaipur"
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
            TRANSFORM ADMISSION VELOCITY
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#F3EFE3] mb-4 break-words">
            Modernize Your School or Institute Web Architecture in Jaipur
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#9D9B91] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Connect with our technical architects via WhatsApp for admission funnel analysis and prototype scoping.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:scale-105 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WHATSAPP INQUIRY</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 min-h-[48px]"
            >
              <span>ADMISSION SCOPE</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
