'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 sm:py-44 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071E18]/60 via-[#070A09] to-[#070A09] opacity-90 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#071E18]/40 blur-3xl rounded-full pointer-events-none" />

      {/* Extremely Subtle Orbital Circle Behind Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#D9B45F]/15 pointer-events-none animate-pulse-glow hidden sm:block z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            08
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            Let's Collaborate
          </span>
        </motion.div>

        {/* Large Centered Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl lg:text-8xl text-[#F3EFE3] font-normal leading-[0.96] tracking-tight mb-8 max-w-4xl mx-auto"
        >
          READY TO BUILD <br />
          SOMETHING <span className="text-[#D9B45F] font-normal">BETTER?</span>
        </motion.h2>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-sm sm:text-base text-[#9D9B91] font-light max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Partner with Siyara to build the connected system your business runs on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 border border-[#D9B45F]/40 hover:border-[#D9B45F] bg-[#071E18]/60 hover:bg-[#071E18] text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#D9B45F]" />
            <span>SCHEDULE A CALL</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
