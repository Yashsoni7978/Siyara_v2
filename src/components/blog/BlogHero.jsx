'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Sparkles } from 'lucide-react';

export default function BlogHero() {
  return (
    <section
      id="insights-hero"
      aria-label="Insights Editorial Hero"
      className="relative pt-32 pb-14 md:pt-36 md:pb-18 bg-[#080B0A] text-[#F3EFE4] overflow-hidden"
    >
      {/* Ambient Gradient Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[400px] rounded-full pointer-events-none opacity-20"
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

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-roboto text-[#C5D2CE]/70 mb-6">
          <Link href="/" className="hover:text-[#E5C378] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E5C378] font-medium">Insights</span>
        </nav>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-5 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
              — SIYARA RESEARCH &amp; EDITORIAL PUBLICATION —
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-roboto text-4xl sm:text-6xl lg:text-[70px] font-normal text-[#F3EFE4] leading-[1.08] tracking-tight mb-6 sm:mb-8"
          >
            Perspectives for the next era of{' '}
            <span className="font-lora italic text-[#E5C378]">
              digital growth.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-lora text-sm sm:text-base lg:text-[18px] text-[#C5D2CE] font-light leading-relaxed max-w-2xl mb-10 sm:mb-12"
          >
            Practical insights, engineering playbooks, and strategic perspectives from Siyara Innovations — helping forward-thinking businesses build resilient brands, fast digital experiences, and measurable commercial growth.
          </motion.p>
        </div>

        {/* Editorial Focus Area Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-roboto text-[#C5D2CE]/75"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-[11px]">
              CORE DISCIPLINES:
            </span>
            <span>Brand Strategy</span>
            <span className="w-1 h-1 rounded-full bg-[#19A878]" />
            <span>Web Development</span>
            <span className="w-1 h-1 rounded-full bg-[#19A878]" />
            <span>SEO &amp; GEO</span>
            <span className="w-1 h-1 rounded-full bg-[#19A878]" />
            <span>E-Commerce</span>
            <span className="w-1 h-1 rounded-full bg-[#19A878]" />
            <span>Growth Systems</span>
          </div>

          <a
            href="#featured-insight"
            className="inline-flex items-center gap-1.5 text-xs text-[#E5C378] hover:text-white uppercase tracking-wider font-semibold transition-colors group"
          >
            <span>Featured Insight</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
