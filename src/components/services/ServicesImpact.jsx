'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ServicesImpact() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const metrics = [
    {
      value: '6×',
      label: 'Average traffic growth',
    },
    {
      value: '50+',
      label: 'Brands supported',
    },
    {
      value: '150+',
      label: 'Projects delivered',
    },
    {
      value: '5–6×',
      label: 'Higher engagement',
    },
  ];

  return (
    <section
      id="services-impact"
      aria-label="Our Impact"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
            — OUR IMPACT —
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-16 sm:mb-20">
          <div>
            <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#080B0A] leading-[1.12] tracking-tight">
              Real Results<br />
              <span className="font-lora italic text-[#C99742]">Across Industries.</span>
            </h2>
          </div>

          <div className="lg:border-l lg:border-[#080B0A]/15 lg:pl-8 max-w-md">
            <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed">
              From startups to established brands, we&apos;ve helped businesses achieve meaningful growth.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4 METRIC COLUMNS WITH SUBTLE VERTICAL DIVIDERS                            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#080B0A]/12 border-y border-[#080B0A]/12">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: easeCustom }}
              className={`py-8 sm:py-10 ${
                idx === 0
                  ? 'pr-6 sm:pr-8'
                  : idx === 3
                  ? 'pl-6 sm:pl-8'
                  : 'px-6 sm:px-8'
              } flex flex-col justify-start`}
            >
              <span className="font-roboto text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#080B0A] tracking-tight leading-none mb-3">
                {item.value}
              </span>
              <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-snug">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle Benchmark Note */}
        <p className="font-lora text-[11px] sm:text-xs text-[#4A504D]/70 pt-6">
          *Representative performance benchmarks across client engagements and delivered digital platforms.
        </p>

      </div>
    </section>
  );
}
