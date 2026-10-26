import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Palette, CheckCircle2, Eye, Sparkles, Layers, ArrowRight, BookOpen } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Interior Design Web Studio Jaipur',
  description: 'Bespoke Next.js portfolio websites, visual design architectures, and local luxury SEO for architects and interior design studios in Jaipur.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries/interior-design',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries/interior-design',
    siteName: 'Siyara Innovations',
    title: 'Interior Design Web Studio Jaipur | Siyara Innovations',
    description: 'Bespoke Next.js portfolio websites, visual design architectures, and local luxury SEO for architects and interior design studios in Jaipur.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Interior Design Website Design Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Web Studio Jaipur | Siyara Innovations',
    description: 'Bespoke Next.js portfolio websites, visual design architectures, and local luxury SEO for architects and interior design studios in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function InteriorDesignIndustryPage() {
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
            'name': 'Interior Design',
            'item': 'https://www.siyaradigitals.com/industries/interior-design',
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Website Design for Interior Designers & Architects',
        'serviceType': 'Architectural & Interior Web Design',
        'provider': { '@id': 'https://www.siyaradigitals.com/#organization' },
        'areaServed': { '@type': 'City', 'name': 'Jaipur' },
        'description': 'Editorial portfolio websites, high-resolution architectural image delivery, SEO for interior designers, and consultation intake funnels in Jaipur.',
      },
    ],
  };

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Siyara Innovations, I am an interior designer / architect and would like to discuss building an editorial portfolio website.'
  )}`;

  const deliverables = [
    {
      title: 'Editorial Photography Curation',
      desc: 'Full-bleed retina imagery with intelligent modern compression (WebP/AVIF), ensuring zero loss of color fidelity or detail.',
    },
    {
      title: 'Categorized Project Portfolios',
      desc: 'Seamless filtering by aesthetic: residential villas, commercial hospitality, heritage restoration, and bespoke millwork.',
    },
    {
      title: 'High-Ticket Client Inquiries',
      desc: 'Low-friction consultation inquiry pathways connecting affluent homeowners and corporate clients directly to your studio.',
    },
    {
      title: 'SEO for Luxury Interior Searches',
      desc: 'Targeted visibility for "interior designer Jaipur", "luxury architects Rajasthan", and commercial renovation queries.',
    },
    {
      title: 'Press & Publication Showcases',
      desc: 'Dedicated architectural press mentions, design awards, and client editorial features organized to command premium design fees.',
    },
    {
      title: 'High-Performance Next.js Architecture',
      desc: 'Heavy photography loads responsively. Smooth mobile viewing for clients reviewing your work on smartphones.',
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
              INTERIOR DESIGN & ARCHITECTURE DIGITAL PORTFOLIOS
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[1.12] sm:leading-[1.05] break-words mb-6 sm:mb-8">
            Website Design for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
              Interior Designers & Architects.
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Interior design is an art of proportion, texture, and light. Your digital portfolio should reflect the same exacting craft. We build editorial, lightning-fast digital portfolios that command premium project fees.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-lg min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>DISCUSS YOUR PORTFOLIO ON WHATSAPP</span>
            </a>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#D9B45F]/30 hover:border-[#D9B45F] text-[#F3EFE3] text-xs font-sans font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 min-h-[48px]"
            >
              <span>EXPLORE PORTFOLIO SHOWCASES</span>
              <ArrowRight className="w-4 h-4 text-[#D9B45F] shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* THE PORTFOLIO CHALLENGE */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-3 uppercase">
              THE VISUAL COMPROMISE
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight break-words mb-4 sm:mb-6">
              Why Slow Portfolio Websites Damage Designer Credibility.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed mb-4 sm:mb-6 font-light">
              Most design firms upload uncompressed 15MB architectural photographs to template websites. The result is a slow, laggy experience where images take 6+ seconds to load. Affluent homeowners evaluating a ₹50-lakh interior renovation will not wait for a laggy page to render.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light">
              Siyara Innovations applies custom image optimization pipelines: full-resolution visual clarity, responsive aspect ratios, editorial whitespace, and zero layout shift.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Crisp Retina Rendering
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Lossless texture preservation for marble, bespoke wood finishes, lighting fixtures, and custom textiles.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Layers className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Style & Room Taxonomies
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Effortless curation across living rooms, master suites, commercial cafes, and heritage courtyard restorations.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Luxury Editorial Polish
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Warm ivory textures, bespoke typography, and subtle micro-interactions that mirror architectural elegance.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Palette className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Brand & Material Palette
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Color harmony aligned with your studio’s signature aesthetic—from minimal Scandinavian to rich Rajasthani heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES MATRIX */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-2 sm:mb-3 uppercase">
            DESIGNER SPECIFICATIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-tight break-words">
            What Every Siyara Interior Portfolio Delivers.
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

      {/* FEATURED ARCHITECTURAL DEMONSTRATION */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="p-6 sm:p-12 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-xl max-w-4xl mx-auto">
          <span className="text-[10px] font-sans font-bold tracking-widest text-[#D9B45F] uppercase block mb-3">
            INTERIOR ARCHITECTURE DEMONSTRATION PROTOTYPE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] mb-4 break-words">
            Artisanal Spatial Studio Concept
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-6">
            Interactive prototype demonstrating digital architecture for architectural and interior design studios: earthy editorial typography, high-resolution material curation with Next.js image optimization, and private consultation intake funnels.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://studio-mitti-nu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider text-[#D9B45F] hover:underline"
            >
              <span>Explore Demonstration Prototype</span>
              <ArrowUpRight className="w-4 h-4" />
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
                Luxury Interior Designer Portfolio Website Design Jaipur: Visual Storytelling & Client Acquisition
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-2 font-light leading-relaxed">
                Explore our guide on showcasing bespoke residential transformations, architectural project galleries, and private consultation funnels for elite interior studios in Rajasthan.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/insights/luxury-interior-designer-portfolio-website-jaipur"
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
          <Palette className="w-9 h-9 sm:w-10 sm:h-10 text-[#D9B45F] mx-auto mb-5 sm:mb-6" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-tight break-words mb-4 sm:mb-6">
            Ready to Build a Portfolio Worthy of Your Architecture?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-8 sm:mb-10">
            Reach out via WhatsApp to discuss your studio's portfolio layout, high-resolution photography curation, and local search visibility in Jaipur.
          </p>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-xl min-h-[48px] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>DISCUSS INTERIOR PORTFOLIO ON WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
}
