'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 lg:py-44 bg-[#F3EFE3] border-t border-[#101613]/10 overflow-hidden">
      {/* Background Light Ivory Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-90 pointer-events-none" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 94, 73, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Extremely Subtle Orbital Circle Behind Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#101613]/05 pointer-events-none animate-pulse-glow hidden sm:block z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-3 mb-6 sm:mb-8"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            08
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Let's Collaborate
          </span>
        </motion.div>

        {/* Large Centered Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-6xl lg:text-8xl text-[#101613] font-normal leading-[1.05] sm:leading-[0.96] tracking-tight mb-6 sm:mb-8 max-w-4xl mx-auto break-words"
        >
          READY TO BUILD <br />
          SOMETHING <span className="text-[#0B5E49] font-normal">BETTER?</span>
        </motion.h2>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-sans text-sm sm:text-base text-[#101613]/80 font-normal max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          Partner with Siyara to build the connected system your business runs on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2.5 px-9 py-3.5 bg-[#101613] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with our team on WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2.5 px-9 py-3.5 border border-[#0B5E49]/30 bg-[#071E18] text-[#F3EFE3] hover:bg-[#0B5E49] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#D9B45F]" />
            <span>TALK ON WHATSAPP</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
