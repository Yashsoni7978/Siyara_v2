import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2, Calendar, Film, Trophy, ArrowRight, BookOpen } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Event Management Web Design Jaipur',
  description: 'High-converting portfolio websites, luxury wedding showcase systems, and local SEO for event planners and management companies in Jaipur.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries/event-management',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries/event-management',
    siteName: 'Siyara Innovations',
    title: 'Event Management Web Design Jaipur | Siyara Innovations',
    description: 'High-converting portfolio websites, luxury wedding showcase systems, and local SEO for event planners and management companies in Jaipur.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Event Management Website Design Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Management Web Design Jaipur | Siyara Innovations',
    description: 'High-converting portfolio websites, luxury wedding showcase systems, and local SEO for event planners and management companies in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function EventManagementIndustryPage() {
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
            'name': 'Event Management',
            'item': 'https://www.siyaradigitals.com/industries/event-management',
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Event Management Company Website Development & Marketing Jaipur',
        'serviceType': 'Event Industry Digital Architecture',
        'provider': { '@id': 'https://www.siyaradigitals.com/#organization' },
        'areaServed': { '@type': 'City', 'name': 'Jaipur' },
        'description': 'Celebration storytelling portals, destination wedding showcases, corporate event capability systems, and high-ticket event inquiry funnels in Jaipur, Rajasthan.',
      },
    ],
  };

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Siyara Innovations, I manage an event management / wedding planning company in Jaipur and would like to discuss building a website.'
  )}`;

  const deliverables = [
    {
      title: 'Cinematic Celebration Portfolios',
      desc: 'Showcase palace weddings, luxury corporate galas, and bespoke festival productions with immersive visual storytelling.',
    },
    {
      title: 'Destination Wedding Inquiry Funnel',
      desc: 'Capture international and national destination wedding couples planning celebrations in Jaipur, Udaipur, and Jodhpur.',
    },
    {
      title: 'Video Highlight Integration',
      desc: 'Seamless, lightweight video reel embedding that brings event atmosphere and live entertainment to life without slowing the page.',
    },
    {
      title: 'Vendor & Service Matrices',
      desc: 'Clear articulation of production capabilities: decor curation, artist management, hospitality logistics, and technical staging.',
    },
    {
      title: 'Instant WhatsApp Booking Chat',
      desc: 'Direct click-to-chat integration allowing prospective event hosts to immediately discuss date availability and budget parameters.',
    },
    {
      title: 'SEO for Rajasthan Event Searches',
      desc: 'Targeted visibility for "wedding planner in Jaipur", "event management company Rajasthan", and corporate event organizer queries.',
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
              EVENT & WEDDING DIGITAL ARCHITECTURE · JAIPUR
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[1.12] sm:leading-[1.05] break-words mb-6 sm:mb-8">
            Website Development for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
              Event Management & Wedding Planners.
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Rajasthan is the global capital of destination weddings and grand celebrations. Your website must communicate the sheer scale, visual glamour, and flawless execution of your events. We engineer cinematic digital platforms that book multi-lakh celebrations.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-lg min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>DISCUSS YOUR EVENT WEBSITE ON WHATSAPP</span>
            </a>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#D9B45F]/30 hover:border-[#D9B45F] text-[#F3EFE3] text-xs font-sans font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 min-h-[48px]"
            >
              <span>EXPLORE EVENT SHOWCASES</span>
              <ArrowRight className="w-4 h-4 text-[#D9B45F] shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY EVENT WEBSITES FAIL */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-3 uppercase">
              THE CELEBRATION CONVERSION GAP
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight break-words mb-4 sm:mb-6">
              Why Instagram Alone Isn't Enough to Win Luxury Weddings.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed mb-4 sm:mb-6 font-light">
              While social media builds initial interest, high-budget corporate clients and NRI destination wedding families demand institutional credibility before signing ₹20L+ event contracts. A broken or non-existent website signals lack of professional infrastructure.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light">
              Siyara Innovations bridges this gap: cinematic event reels, structured venue guides, transparent vendor coordination outlines, and instant WhatsApp inquiry flows that convert attention into signed bookings.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Luxury Celebration Polish
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Opulent design language matching the elegance of heritage palaces and five-star luxury resorts.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Film className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Video Storytelling
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Smooth video reel backgrounds optimized for responsive streaming without consuming excessive mobile bandwidth.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Date & Season Inquiries
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Streamlined intake capturing wedding season dates, guest counts, and venue preferences in seconds.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                High-Trust Production Proof
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Showcase verified artist lineups, technical stagecraft, celebrity hosts, and hospitality logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES MATRIX */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-2 sm:mb-3 uppercase">
            EVENT PLATFORM ARCHITECTURE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-tight break-words">
            What Every Siyara Event Website Includes.
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

      {/* ARCHITECTURAL DEMONSTRATIONS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-2 uppercase">
              PROVEN DEMONSTRATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] break-words">
              Event & Wedding Web Architecture & Demonstration Prototypes.
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
                EVENT DESIGN & CELEBRATIONS
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] mb-3">
                Bespoke Event & Wedding Management Studio Concept
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-6">
                Interactive prototype demonstrating bespoke event and wedding architecture: palace celebration showcases in Rajasthan, spatial scenography, and luxury enquiry intake funnels.
              </p>
            </div>
            <a
              href="https://ember-ivory-events.vercel.app/"
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
                LUXURY DESTINATION SANCTUARY
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] mb-3">
                Heritage Destination & Celebration Venue Concept
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-6">
                Interactive prototype demonstrating destination retreat and celebration venue architecture: immersive visual storytelling, heritage booking protocols, and experiential luxury presentation.
              </p>
            </div>
            <a
              href="https://aranya-website-woad.vercel.app/"
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
                Wedding & Luxury Event Planner Website Design Jaipur: Destination Event Portals
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-2 font-light leading-relaxed">
                Discover how royal destination wedding planners and luxury event directors in Rajasthan engineer high-ticket inquiry funnels, video portfolio galleries, and RSVP management systems.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/insights/wedding-event-planner-website-design-jaipur"
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
          <Sparkles className="w-9 h-9 sm:w-10 sm:h-10 text-[#D9B45F] mx-auto mb-5 sm:mb-6" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-tight break-words mb-4 sm:mb-6">
            Ready to Build an Event Platform That Books Grand Celebrations?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-8 sm:mb-10">
            Reach out via WhatsApp to discuss your event company's digital portfolio, visual reel showcase, and destination wedding lead funnels.
          </p>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-xl min-h-[48px] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>CONNECT WITH OUR STUDIO ON WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
}
