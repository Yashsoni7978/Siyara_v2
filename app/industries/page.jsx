import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  Building2, 
  HeartPulse, 
  Calendar, 
  Paintbrush, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import JsonLd, { buildBreadcrumbs, buildFaqSchema } from '../../src/components/common/JsonLd';

export const metadata = {
  title: 'Industries We Serve in Jaipur',
  description: 'Specialized web design, SEO, and digital growth systems tailored for healthcare, interior design, event management, and real estate in Jaipur and India.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries',
    siteName: 'Siyara Innovations',
    title: 'Industries We Serve in Jaipur | Siyara Innovations',
    description: 'Specialized web design, SEO, and digital growth systems tailored for healthcare, interior design, event management, and real estate in Jaipur and India.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Industries We Serve · Siyara Innovations Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Siyara Innovations Jaipur',
    description: 'Specialized web design, SEO, and digital growth systems tailored for healthcare, interior design, event management, and real estate in Jaipur and India.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const industries = [
  {
    name: 'Healthcare & Specialized Clinics',
    slug: '/industries/healthcare',
    icon: HeartPulse,
    tagline: 'High-Trust Patient Portals & Local Medical SEO',
    description: 'Custom clinical platforms combining transparent doctor credential showcases, NABH compliance considerations, frictionless 1-click WhatsApp appointment funnels, and local Google Maps medical SEO for specialized hospitals, diagnostic centers, and clinics.',
    deliverables: [
      'Doctor profiles & credential showcases',
      'One-tap WhatsApp OPD scheduling',
      'MedicalCondition & LocalBusiness schemas',
      'NABH transparency & teleconsultation'
    ]
  },
  {
    name: 'Luxury Interior Design & Architecture',
    slug: '/industries/interior-design',
    icon: Paintbrush,
    tagline: 'Editorial Spatial Portfolios & HNWI Inquiries',
    description: 'Immersive digital showcases for spatial designers and architecture ateliers. High-resolution project photography delivered with zero layout shift, editorial design narratives, and consultation intake funnels tailored for high-budget residential and commercial commissions.',
    deliverables: [
      'Full-bleed visual case study layouts',
      'Sub-1.8s mobile image streaming',
      'Private HNWI intake funnels',
      'Architectural press & publication features'
    ]
  },
  {
    name: 'Events & Cultural Productions',
    slug: '/industries/event-management',
    icon: Calendar,
    tagline: 'High-Capacity Showcase & Lead Conversion',
    description: 'High-performance platforms for luxury wedding curators, corporate event producers, and cultural festivals. Seamless attendee registration, interactive visual galleries, and sponsor presentation decks engineered to handle high traffic surges.',
    deliverables: [
      'Curated event experience lookbooks',
      'High-traffic edge infrastructure',
      'Direct WhatsApp booking funnels',
      'Sponsor & venue showcase portals'
    ]
  },
  {
    name: 'Real Estate & Luxury Spaces',
    slug: '/industries/real-estate',
    icon: Building2,
    tagline: 'High-Intent Buyer Acquisition & Project Sites',
    description: 'Premium web platforms and lead qualification engines for luxury residential townships, commercial developments, and boutique property brokerages across Rajasthan and national corridors.',
    deliverables: [
      'Interactive floor plan visualizers',
      'Direct buyer inquiry qualification funnels',
      'Hyper-local real estate SEO architecture',
      'RERA compliance transparency displays'
    ]
  }
];

const faqs = [
  {
    q: 'Why do you specialize in specific industry sectors?',
    a: 'Every sector has unique buyer behaviors, compliance requirements, and conversion dynamics. For example, a healthcare website requires doctor credibility and appointment scheduling, whereas a luxury interior design site demands editorial visual hierarchy and HNWI filtering. Industry specialization allows us to engineer solutions that convert immediately.',
  },
  {
    q: 'Do you work with businesses outside these four primary sectors?',
    a: 'Yes. While Healthcare, Interior Design, Event Management, and Real Estate represent our deepest industry silos with dedicated frameworks, our core web design, SEO, branding, and social media marketing practices serve businesses across diverse commercial sectors.',
  },
  {
    q: 'How does industry-specific SEO differ from generic SEO?',
    a: 'Industry SEO targets specialized, high-intent transactional search terms (such as specific medical treatments or architectural styles) and deploys industry-specific Schema.org entity graphs (such as MedicalCondition or RealEstateAgent schemas) that generic SEO completely ignores.',
  },
];

export default function IndustriesHubPage() {
  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Industries', url: 'https://www.siyaradigitals.com/industries' },
  ]);

  const faqSchema = buildFaqSchema(faqs);

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbsSchema, faqSchema],
  };

  const whatsappUrl = 'https://wa.me/919587269209?text=Hi%20Siyara%20Innovations%2C%20I%20would%20like%20to%20discuss%20digital%20solutions%20for%20my%20industry.';

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
              INDUSTRY SILOS · JAIPUR &amp; PAN-INDIA
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F3EFE3] leading-[1.15] mb-5 sm:mb-6 break-words">
            Specialized Digital Solutions Across Key Industries
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            We reject one-size-fits-all website templates. Each of our industry practices combines sector-specific buyer journey design, tailored Schema.org markup, and conversion funnels built for commercial outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:-translate-y-0.5 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DISCUSS YOUR SECTOR ON WHATSAPP</span>
            </a>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 min-h-[44px]"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FOUR INDUSTRY PRACTICES */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-2 block">
            FOCUSED EXPERTISE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal">
            Four Dedicated Industry Practices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                key={idx}
                className="p-7 sm:p-9 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between hover:border-[#D9B45F]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-sans font-semibold tracking-[0.18em] text-[#D9B45F] uppercase">
                      PRACTICE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F3EFE3] font-normal mb-2 group-hover:text-[#E8C979] transition-colors">
                    {ind.name}
                  </h3>
                  <div className="text-xs font-sans text-[#D9B45F] font-medium tracking-wide mb-4">
                    {ind.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-6">
                    {ind.description}
                  </p>

                  <div className="space-y-2 border-t border-[#0C6B52]/30 pt-4 mb-6">
                    {ind.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#ECE7D8]/80 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={ind.slug}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#D9B45F] hover:text-[#E8C979] pt-2"
                >
                  <span>EXPLORE {ind.name.toUpperCase()} SOLUTIONS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}

        {/* Additional Sectors We Support */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#0C6B52]/30 text-center">
          <p className="text-xs font-sans text-[#9D9B91] uppercase tracking-[0.16em] mb-4">
            Additional Industry Capabilities
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-sans text-[#ECE7D8]/80">
            <Link href="/industries/ecommerce" className="hover:text-[#D9B45F] transition-colors">E-Commerce &amp; D2C</Link>
            <span className="text-[#0C6B52]">·</span>
            <Link href="/industries/education" className="hover:text-[#D9B45F] transition-colors">Education &amp; Institutes</Link>
            <span className="text-[#0C6B52]">·</span>
            <Link href="/industries/hospitality" className="hover:text-[#D9B45F] transition-colors">Hospitality &amp; Resorts</Link>
            <span className="text-[#0C6B52]">·</span>
            <Link href="/industries/jewellery-luxury" className="hover:text-[#D9B45F] transition-colors">Jewellery &amp; Luxury</Link>
            <span className="text-[#0C6B52]">·</span>
            <Link href="/industries/manufacturing" className="hover:text-[#D9B45F] transition-colors">Industrial Manufacturing</Link>
          </div>
        </div>

        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto mb-16 sm:mb-24">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-2 block">
            QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE3] font-normal">
            Frequently Asked Questions
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

      {/* 4. WHATSAPP CONVERSION CTA */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#063C2D] via-[#071E18] to-[#070A09] border border-[#D9B45F]/40 text-center relative overflow-hidden shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal mb-4">
            Have a Specific Industry Requirement?
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#ECE7D8]/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Message our industry solutions team on WhatsApp to discuss your sector-specific challenges, review relevant client case studies, and receive an actionable scope of work.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONNECT WITH OUR INDUSTRY TEAM ON WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
}
