import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Building2, CheckCircle2, Home, KeyRound, MapPin, ArrowRight, BookOpen } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Real Estate Web Development Jaipur',
  description: 'Custom Next.js real estate portals, luxury project showcase architectures, and lead generation systems for builders and brokers in Jaipur.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries/real-estate',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries/real-estate',
    siteName: 'Siyara Innovations',
    title: 'Real Estate Web Development Jaipur | Siyara Innovations',
    description: 'Custom Next.js real estate portals, luxury project showcase architectures, and lead generation systems for builders and brokers in Jaipur.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Real Estate Website Development Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Web Development Jaipur | Siyara Innovations',
    description: 'Custom Next.js real estate portals, luxury project showcase architectures, and lead generation systems for builders and brokers in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function RealEstateIndustryPage() {
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
            'name': 'Industries',
            'item': 'https://www.siyaradigitals.com/services',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Real Estate',
            'item': 'https://www.siyaradigitals.com/industries/real-estate',
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Real Estate Website Development & Lead Systems Jaipur',
        'serviceType': 'Real Estate Digital Architecture',
        'provider': { '@id': 'https://www.siyaradigitals.com/#organization' },
        'areaServed': { '@type': 'City', 'name': 'Jaipur' },
        'description': 'Luxury residential property showcases, developer portals, interactive floor plans, real estate SEO, and automated lead capture for Jaipur developers and brokerages.',
      },
    ],
  };

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Siyara Innovations, I would like to discuss a digital platform / website solution for our real estate development / brokerage in Jaipur.'
  )}`;

  const deliverables = [
    {
      title: 'Cinematic Property Visuals',
      desc: 'Hero visual architecture that conveys architectural scale, luxury finishes, and project prestige without mobile lag.',
    },
    {
      title: 'Interactive Floor Plans & Master Layouts',
      desc: 'Mobile-responsive unit configurations, master site maps, and downloadable high-res PDF brochure capture.',
    },
    {
      title: 'Project-Level Local SEO',
      desc: 'Geo-targeted search visibility for luxury villas, apartments, and commercial projects across Jaipur micro-markets (Jagatpura, Ajmer Road, Vaishali).',
    },
    {
      title: 'High-Intent Lead Qualification',
      desc: 'Direct-to-sales-team WhatsApp routing and CRM integration ensuring zero lead leakage from expensive advertising campaigns.',
    },
    {
      title: 'RERA Compliance Transparency',
      desc: 'Dedicated compliance footers, registration number callouts, and structured legal disclosures to reinforce institutional credibility.',
    },
    {
      title: 'High-Performance Next.js Engineering',
      desc: 'Optimized page load times that prevent buyer bounce rates during heavy ad traffic surges on Google Ads and Meta campaigns.',
    },
  ];

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-28 md:pt-36 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#0C6B52]/10 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="h-[1px] w-8 bg-[#D9B45F]" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.16em] sm:tracking-[0.24em] text-[#D9B45F] uppercase">
              REAL ESTATE DIGITAL ARCHITECTURE · JAIPUR
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[1.12] sm:leading-[1.05] break-words mb-6 sm:mb-8">
            Real Estate Website <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
              Development & Lead Systems.
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Multi-crore real estate investments demand digital experiences that reflect true architectural prestige. We engineer custom web platforms, interactive project showcases, and search systems for luxury property developers and premier brokerages.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-lg min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>DISCUSS YOUR PROJECT ON WHATSAPP</span>
            </a>

            <Link
              href="/work?industry=real-estate"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#D9B45F]/30 hover:border-[#D9B45F] text-[#F3EFE3] text-xs font-sans font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 min-h-[48px]"
            >
              <span>VIEW REAL ESTATE SHOWCASES</span>
              <ArrowRight className="w-4 h-4 text-[#D9B45F] shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE ADVANTAGE */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-3 uppercase">
              THE CONVERSION PROBLEM
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight break-words mb-4 sm:mb-6">
              Why Generic Real Estate Templates Lose High-Net-Worth Buyers.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed mb-4 sm:mb-6 font-light">
              Real estate developers spend lakhs on digital ads only to direct traffic to laggy landing pages with pixelated floor plans and generic contact forms. Serious property investors and luxury homebuyers make judgment calls within seconds.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light">
              Our digital systems combine editorial typography, crisp floor-plan visualization, location connectivity mapping, and instant WhatsApp inquiry routing to qualify serious buyers immediately.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Flagship Project Storytelling
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Dedicated project microsites with architectural highlights, amenity galleries, and construction timelines.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <KeyRound className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                High-Intent Lead Capture
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Brochure gating and instant WhatsApp site-visit booking directly connected to your project sales team.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Location & Connectivity Focus
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Clear travel time landmarks, nearby school/hospital infrastructure, and interactive neighborhood maps.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Home className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Live Inventory & Filtering
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Client-side filtration across 2BHK, 3BHK, luxury penthouses, and commercial plots with zero page reloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES MATRIX */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-2 sm:mb-3 uppercase">
            ARCHITECTURE & DELIVERABLES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-tight break-words">
            Comprehensive Real Estate Web Engineering.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-8 bg-[#071E18]/30 border border-[#D9B45F]/20 hover:border-[#D9B45F]/50 transition-colors rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D9B45F] shrink-0" />
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#F3EFE3]">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE DEMONSTRATIONS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-2 uppercase">
              PROVEN DEMONSTRATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] break-words">
              Real Estate Web Architecture & Demonstration Prototypes.
            </h2>
          </div>
          <Link
            href="/work"
            className="text-xs font-sans tracking-widest uppercase text-[#D9B45F] hover:text-[#E8C979] flex items-center gap-2 self-start md:self-auto"
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
          <div className="p-6 sm:p-8 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#D9B45F] uppercase block mb-2">
                LUXURY DEVELOPER PORTAL
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] mb-3">
                Luxury Developer Platform Concept
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-6">
                Interactive prototype demonstrating flagship real estate developer architecture: multi-project residential showcases across cities, floor plan visualization, and direct consultation funnels.
              </p>
            </div>
            <a
              href="https://shri-properties.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-semibold tracking-wider text-[#D9B45F] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Demonstration Prototype</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 sm:p-8 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#D9B45F] uppercase block mb-2">
                JAIPUR PROPERTY BROKERAGE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] mb-3">
                Property Brokerage & Listing Engine Concept
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-6">
                Interactive prototype demonstrating property brokerage architecture: 12 dynamic listings, instant client-side filters, structured property schema, and WhatsApp visit scheduling.
              </p>
            </div>
            <a
              href="https://meridian-properties-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-semibold tracking-wider text-[#D9B45F] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Demonstration Prototype</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTEXTUAL INDUSTRY PLAYBOOK BANNER (TWO-WAY TOPICAL SILO) */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto my-12 sm:my-16">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B110F] via-[#071E18]/80 to-[#0B110F] border border-[#D9B45F]/30 hover:border-[#D9B45F]/60 transition-all shadow-xl group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9B45F]/10 border border-[#D9B45F]/20 text-[#D9B45F] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>EXECUTIVE INDUSTRY PLAYBOOK</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors leading-snug">
                Real Estate Website Development Jaipur: RERA Compliance & High-Converting Buyer Portals
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-2 font-light leading-relaxed">
                Learn how top real estate builders, townships, and commercial developers in Jaipur engineer high-trust portals with interactive masterplans and automated CRM lead capture.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/insights/real-estate-website-development-jaipur-rera"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-lg shadow-[#D9B45F]/15 hover:scale-105 min-h-[44px] w-full md:w-auto"
              >
                <span>Read Full Playbook</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <Building2 className="w-9 h-9 sm:w-10 sm:h-10 text-[#D9B45F] mx-auto mb-5 sm:mb-6" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-tight break-words mb-4 sm:mb-6">
            Ready to Elevate Your Real Estate Brand Presence?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-8 sm:mb-10">
            Connect directly with our studio to discuss your upcoming project launch, buyer lead acquisition funnels, and real estate SEO in Jaipur.
          </p>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-xl min-h-[48px] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>DISCUSS REAL ESTATE ARCHITECTURE ON WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
}
