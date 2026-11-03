'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function WhySiyara() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const differentiators = [
    {
      num: '01',
      title: 'Unified Studio Accountability',
      description:
        'One aligned studio handles strategy, design, engineering, and growth under one roof. We eliminate the handoff silos, finger-pointing, and conflicting priorities typical of multi-vendor agency rosters.',
    },
    {
      num: '02',
      title: 'Bespoke Code Integrity',
      description:
        'We reject fragile pre-made templates, bloated WordPress themes, and security-vulnerable plugins. Every platform is custom engineered on clean Next.js foundations for sub-second speeds and maintainability.',
    },
    {
      num: '03',
      title: 'Commercial Design Intent',
      description:
        'We treat digital systems as revenue-driving business infrastructure, not decorative showcases. Every layout rhythm, typographic scale, and user flow is engineered to convert qualified attention into commercial progress.',
    },
    {
      num: '04',
      title: 'Compounding Growth Longevity',
      description:
        'We engineer digital platforms designed to appreciate in value over time. Through structured AI discoverability (SEO & GEO), performance tuning, and architectural durability, your digital presence compounds as an enterprise asset.',
    },
  ];

  return (
    <section
      id="what-makes-siyara-different"
      aria-label="04 — What Makes Siyara Different"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#C99742]">
            04
          </span>
          <span className="text-xs sm:text-sm text-[#080B0A]/40 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#080B0A] uppercase">
            WHAT MAKES SIYARA DIFFERENT
          </span>
        </div>

        {/* Section Header: Headline & Context */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-16 sm:mb-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="lg:max-w-xl"
          >
            <h2 className="font-lora text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#080B0A] leading-[1.15] tracking-tight">
              Architected for clarity.<br />
              <span className="italic text-[#C99742]">Engineered to endure.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeCustom }}
            className="font-lora text-sm sm:text-base text-[#4A504D] leading-relaxed max-w-md font-light"
          >
            Four operational standards that separate our studio from fragmented vendor rosters and disposable web design shortcuts.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* OPEN EDITORIAL GRID: 4 Distinct Differentiators (No cards, no boxes)      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#080B0A]/15 border-y border-[#080B0A]/15">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={diff.num}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: easeCustom }}
              className={`py-8 sm:py-10 ${
                idx === 0
                  ? 'md:pr-6 lg:pr-8'
                  : idx === 3
                  ? 'md:pl-6 lg:pl-8'
                  : 'md:px-6 lg:px-8'
              } flex flex-col justify-start`}
            >
              {/* Restrained Numbered Label */}
              <span className="text-xs font-roboto font-bold tracking-[0.2em] text-[#C99742] mb-4 block">
                {diff.num}
              </span>

              {/* Title */}
              <h3 className="font-roboto font-bold text-lg sm:text-xl text-[#080B0A] mb-3 leading-snug">
                {diff.title}
              </h3>

              {/* Concise Description */}
              <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
