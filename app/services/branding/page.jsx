import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  Palette, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Sparkles, 
  Compass, 
  BookOpen, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import JsonLd, { buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from '../../../src/components/common/JsonLd';

export const metadata = {
  title: 'Brand Strategy & Logo Design',
  description: 'Bespoke brand strategy and visual identity design in Jaipur. We create distinct logos, design systems, messaging guidelines, and brand assets that build trust.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/services/branding',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/services/branding',
    siteName: 'Siyara Innovations',
    title: 'Brand Strategy & Logo Design | Siyara Innovations',
    description: 'Bespoke brand strategy and visual identity design in Jaipur. We create distinct logos, design systems, messaging guidelines, and brand assets that build trust.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Brand Strategy & Visual Identity Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Strategy & Logo Design Jaipur | Siyara Innovations',
    description: 'Bespoke brand strategy and visual identity design in Jaipur. We create distinct logos, design systems, messaging guidelines, and brand assets that build trust.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const faqs = [
  {
    q: 'How long does a full brand identity engagement take with Siyara Innovations?',
    a: 'A complete branding engagement typically requires 3 to 6 weeks. This structured process encompasses market research, brand positioning workshops, visual identity concept explorations, refinement cycles, and comprehensive brand guideline documentation.',
  },
  {
    q: 'What assets are included in your branding and logo design deliverables?',
    a: 'Our deliverables include primary and secondary logo marks, responsive icon variants, complete color token systems, custom typography scales, digital and print stationery mockups, social media avatar kits, and an exhaustive Brand Guidelines manual.',
  },
  {
    q: 'Does Siyara Innovations help with brand positioning and copy messaging?',
    a: 'Yes. Visual design without strategic positioning often fails to differentiate. We define your category space, value propositions, elevator pitches, and voice and tone guidelines so your entire team communicates with unified clarity.',
  },
  {
    q: 'Do you transfer full intellectual property and source vector files?',
    a: 'Upon project completion and final milestone clearance, full copyright ownership and vector production source files (AI, SVG, EPS, PDF, and high-resolution PNG/JPG) are unconditionally transferred to your business.',
  },
];

export default function BrandingServicePage() {
  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Services', url: 'https://www.siyaradigitals.com/services' },
    { name: 'Branding & Identity', url: 'https://www.siyaradigitals.com/services/branding' },
  ]);

  const serviceSchema = buildServiceSchema({
    name: 'Brand Strategy & Visual Identity Design in Jaipur',
    serviceType: 'Brand Identity Design',
    description: 'Strategic brand positioning, custom logo design, comprehensive visual design systems, and brand guidelines for growing enterprises in Jaipur and India.',
    url: 'https://www.siyaradigitals.com/services/branding',
  });

  const faqSchema = buildFaqSchema(faqs);

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbsSchema, serviceSchema, faqSchema],
  };

  const whatsappUrl = 'https://wa.me/919587269209?text=Hi%20Siyara%20Innovations%2C%20I%20am%20interested%20in%20your%20Brand%20Strategy%20and%20Logo%20Design%20services.';

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
            Brand Strategy &amp; Visual Identity Design in Jaipur
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            We help ambitious enterprises articulate who they are, why they matter, and how they show up across every touchpoint. From foundational category positioning to timeless logo marks and design systems, our branding establishes enduring commercial trust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:-translate-y-0.5 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DISCUSS BRANDING ON WHATSAPP</span>
            </a>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 min-h-[44px]"
            >
              <span>VIEW BRAND SHOWCASES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & STRATEGIC RATIONALE */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto mb-16 sm:mb-24">
        <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0B110F] border border-[#D9B45F]/30 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6 text-[#ECE7D8]/90 font-sans text-sm sm:text-base leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE3] font-normal mb-4">
              Why Brand Strategy Precedes Every Design Decision
            </h2>
            <p>
              A logo without strategy is merely decoration. In a marketplace where consumers and enterprise buyers are inundated with identical claims, visual distinction alone is insufficient. Sustainable brand equity requires deep alignment between your core competencies, your competitive category, and the urgent problems you solve for your buyers.
            </p>
            <p>
              At Siyara Innovations, we begin every branding engagement by mapping your market context. We identify what makes your firm irreplaceable, articulate your unique value propositions, and translate that positioning into a cohesive visual language. The result is a memorable brand presence that commands pricing power and inspires institutional confidence across digital and physical mediums.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE BRANDING DELIVERABLES */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-2 block">
            OUR BRANDING SUITE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal">
            Comprehensive Brand Architecture Deliverables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                1. Brand Positioning &amp; Narrative
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                We clarify your market category, define your target buyer profiles, and construct a compelling corporate narrative. This messaging governance ensures that everyone in your organization speaks with one coherent, confident voice.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Market category definition &amp; competitor audits</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Value proposition &amp; elevator pitch formulations</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Tone of voice, verbal guidelines &amp; key messaging</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                2. Bespoke Logo &amp; Mark Design
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                We craft custom logo marks that distill your strategic essence into an enduring visual icon. Designed with mathematical precision, our logos scale effortlessly from a 16px mobile favicon to architectural signage.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Primary logotype &amp; secondary lockup systems</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Responsive icon &amp; favicon variations</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Full vector source assets (AI, SVG, PDF, EPS)</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                3. Design Systems &amp; Visual Tokens
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                We engineer complete design token systems—including color palettes with accessibility contrast ratios, font pairings with strict typographic hierarchy, and iconography guidelines—ensuring consistency across all digital platforms.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Primary, secondary &amp; accent color palettes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Curated typography scales for web &amp; print</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> UI component token rules for developers</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                4. Brand Guidelines &amp; Collateral
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                We consolidate all rules into a definitive Brand Guidelines book. We also design corporate stationery, presentation decks, digital social media kits, and marketing collateral ready for immediate real-world deployment.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Comprehensive digital Brand Guidelines manual</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Letterheads, business cards &amp; corporate folders</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Master presentation deck templates</li>
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
            Frequently Asked Questions About Branding
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
            Build a Distinct, Enduring Brand
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#ECE7D8]/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Message our brand architects on WhatsApp to schedule an exploratory discovery call, review our identity portfolios, and discuss your brand vision.
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
