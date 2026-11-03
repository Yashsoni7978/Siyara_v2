'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';

export default function ContactCTA() {
  const handleWhatsAppClick = () => {
    trackEvent(AnalyticsEvents.CONTACT_WHATSAPP_CLICKED, { source: 'bottom_cta' });
  };

  return (
    <section
      id="contact-closing-cta"
      aria-label="Contact Closing Call to Action"
      className="relative py-24 sm:py-28 lg:py-32 bg-[#080B0A] text-[#F3EFE4] overflow-hidden text-center"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
            — READY TO BUILD SOMETHING EXTRAORDINARY? —
          </span>
        </div>

        <h2 className="font-roboto text-4xl sm:text-5xl lg:text-[58px] text-[#F3EFE4] font-normal leading-[1.1] tracking-tight mb-5 sm:mb-6 max-w-3xl mx-auto">
          Let&apos;s Build a System Built for{' '}
          <span className="font-lora italic text-[#E5C378]">
            Measurable Growth.
          </span>
        </h2>

        <p className="font-lora text-sm sm:text-base text-[#C5D2CE] font-light max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Connect directly with our studio directors for project scoping, deliverables planning, and transparent fixed-investment proposals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#inquiry-form"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2 px-9 py-3.5 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>Complete Project Brief</span>
            <ArrowDown className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2.5 px-9 py-3.5 border border-[#E5C378]/50 bg-[#063C2D]/60 hover:bg-[#063C2D] text-[#F3EFE4] hover:text-[#E5C378] text-xs font-roboto font-medium tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#19A878]" />
            <span>Message on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
