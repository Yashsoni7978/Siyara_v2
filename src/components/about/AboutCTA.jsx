'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutCTA() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section 
      id="about-cta" 
      aria-label="Let's Build Together"
      className="relative py-24 sm:py-28 lg:py-36 bg-[#063C2D] text-[#F3EFE4] overflow-hidden"
    >
      {/* Deep Emerald Background with Subtle Radial Glow & Atmospheric Shadows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D] via-[#05261C] to-[#041710] pointer-events-none" />
      
      {/* Ambient Lighting Accents */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full pointer-events-none opacity-25" 
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.3) 0%, transparent 70%)',
        }}
      />
      
      {/* Subtle Warm Gold Highlight at Top */}
      <div 
        className="absolute -top-32 left-1/3 w-[600px] h-[300px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: easeCustom }}
          className="mb-6 sm:mb-8"
        >
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
            — LET&apos;S BUILD TOGETHER —
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, delay: 0.08, ease: easeCustom }}
          className="font-lora text-4xl sm:text-5xl lg:text-[62px] text-[#F3EFE4] font-normal leading-[1.12] tracking-tight mb-10 sm:mb-12 max-w-3xl mx-auto"
        >
          Ready to build something{' '}
          <span className="italic text-[#E5C378]">better?</span>
        </motion.h2>

        {/* Dual Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: easeCustom }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Gold Pill: Our Work */}
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2 px-9 py-3.5 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>Our Work</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          {/* Secondary Emerald/Gold Pill: Book Strategy Session */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with our directors on WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2 px-9 py-3.5 border border-[#E5C378]/50 bg-[#063C2D]/60 hover:bg-[#063C2D] text-[#F3EFE4] hover:text-[#E5C378] text-xs font-roboto font-medium tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>Book Strategy Session</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
