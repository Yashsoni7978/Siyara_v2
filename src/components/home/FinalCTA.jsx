'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 sm:py-44 bg-[#F3EFE3] border-t border-[#101613]/10 overflow-hidden">
      {/* Background Light Ivory Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-90 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0B5E49]/05 blur-3xl rounded-full pointer-events-none" />

      {/* Extremely Subtle Orbital Circle Behind Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#101613]/05 pointer-events-none animate-pulse-glow hidden sm:block z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8"
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
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl lg:text-8xl text-[#101613] font-normal leading-[0.96] tracking-tight mb-8 max-w-4xl mx-auto"
        >
          READY TO BUILD <br />
          SOMETHING <span className="text-[#0B5E49] font-normal">BETTER?</span>
        </motion.h2>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-sm sm:text-base text-[#101613]/80 font-normal max-w-xl mx-auto mb-12 leading-relaxed"
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
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#101613] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <a
            href="tel:9587269209"
            className="inline-flex items-center gap-2 px-9 py-4 border border-[#101613]/20 hover:border-[#0B5E49] bg-transparent hover:bg-[#F3EFE3] text-[#101613] hover:text-[#0B5E49] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-[#0B5E49]" />
            <span>CALL 9587269209</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
