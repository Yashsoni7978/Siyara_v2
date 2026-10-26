'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section className="relative py-20 sm:py-24 bg-[#070A09] text-[#F3EFE3] overflow-hidden">
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09] via-[#071E18]/40 to-[#070A09] opacity-90 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#071E18]/40 blur-3xl rounded-full pointer-events-none" />

      {/* Quiet Orbital Vector Pattern */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] pointer-events-none opacity-20" viewBox="0 0 540 540">
        <circle cx="270" cy="270" r="260" fill="none" stroke="#D9B45F" strokeWidth="0.75" strokeDasharray="4 10" />
        <circle cx="270" cy="270" r="180" fill="none" stroke="#0C6B52" strokeWidth="0.75" />
      </svg>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -40px 0px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[1.08] sm:leading-[0.96] tracking-tight mb-4 sm:mb-6 max-w-3xl mx-auto break-words"
        >
          HAVE AN IDEA? <br />
          LET'S GIVE IT <span className="text-[#D9B45F] font-normal">A SYSTEM.</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -40px 0px' }}
          transition={{ duration: 0.6, delay: 0.05, ease: easeCustom }}
          className="font-sans text-sm sm:text-base lg:text-lg text-[#9D9B91] font-light max-w-lg mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          Let's turn your next opportunity into a digital system built to grow.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -40px 0px' }}
          transition={{ duration: 0.6, delay: 0.05, ease: easeCustom }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <a
            href="#intake"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href="#contact-direct"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2 px-8 py-3.5 border border-[#F3EFE3]/25 hover:border-[#D9B45F]/60 text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 group bg-[#070A09]/40 backdrop-blur-sm"
          >
            <span>BOOK A STRATEGY SESSION</span>
            <ArrowRight className="w-4 h-4 text-[#D9B45F] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
