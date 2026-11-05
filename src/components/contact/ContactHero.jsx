'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, ArrowUpRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';

export default function ContactHero() {
  const handleWhatsAppClick = () => {
    trackEvent(AnalyticsEvents.CONTACT_WHATSAPP_CLICKED, { source: 'hero_secondary_cta' });
  };

  return (
    <section
      id="contact-hero"
      aria-label="Contact Siyara Innovations"
      className="relative min-h-[85svh] pt-32 pb-16 lg:pt-36 lg:pb-24 bg-[#080B0A] text-[#F3EFE4] overflow-hidden flex items-center"
    >
      {/* Ambient Gradient Glows (Siyara Obsidian & Emerald Atmosphere) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[450px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.35) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-20 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-roboto text-[#C5D2CE]/70 mb-6">
          <Link href="/" className="hover:text-[#E5C378] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E5C378] font-medium">Contact</span>
        </nav>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 mb-5 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
              — LET&apos;S START A CONVERSATION —
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-roboto text-4xl sm:text-6xl lg:text-[72px] font-normal text-[#F3EFE4] leading-[1.08] tracking-tight mb-6 sm:mb-8"
          >
            Have a Project{' '}
            <span className="font-lora italic text-[#E5C378]">
              in Mind?
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-lora text-sm sm:text-base lg:text-[18px] text-[#C5D2CE] font-light leading-relaxed max-w-2xl mb-10 sm:mb-12"
          >
            Tell us what you&apos;re building, where you want to go, and how we can help you get there. Every project starts with a clear, strategic conversation.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14 sm:mb-16"
          >
            <a
              href="#inquiry-form"
              className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs sm:text-sm font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 group"
            >
              <span>Submit Project Inquiry</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 border border-[#E5C378]/50 bg-[#063C2D]/50 hover:bg-[#063C2D] text-[#F3EFE4] hover:text-[#E5C378] text-xs sm:text-sm font-roboto font-medium tracking-[0.14em] rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 group"
            >
              <MessageCircle className="w-4 h-4 text-[#19A878]" />
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E5C378] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Assurance Standard Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-roboto text-xs font-bold uppercase tracking-wider text-[#F3EFE4] block mb-0.5">
                  Direct Studio Directors
                </span>
                <p className="font-lora text-xs text-[#C5D2CE]/80 leading-relaxed">
                  You speak directly with lead architects, not account managers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-roboto text-xs font-bold uppercase tracking-wider text-[#F3EFE4] block mb-0.5">
                  Prompt Scoping Response
                </span>
                <p className="font-lora text-xs text-[#C5D2CE]/80 leading-relaxed">
                  Every inquiry receives a thoughtful strategic assessment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#19A878] shrink-0 mt-0.5" />
              <div>
                <span className="font-roboto text-xs font-bold uppercase tracking-wider text-[#F3EFE4] block mb-0.5">
                  Transparent Proposals
                </span>
                <p className="font-lora text-xs text-[#C5D2CE]/80 leading-relaxed">
                  Fixed scopes, clear deliverables, and no hidden surprises.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
