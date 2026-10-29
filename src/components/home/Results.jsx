'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, Target, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Results() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const metrics = [
    {
      id: '01',
      metric: '6x+',
      label: 'AVERAGE TRAFFIC GROWTH',
      description: 'Across multiple client engagements.',
      icon: TrendingUp,
    },
    {
      id: '02',
      metric: '500+',
      label: 'ORGANIC CLICKS',
      description: 'Monthly organic search clicks achieved.',
      icon: Search,
    },
    {
      id: '03',
      metric: '5–6%',
      label: 'CONVERSION RATES',
      description: 'Across client funnels.',
      icon: Target,
    },
    {
      id: '04',
      metric: '150+',
      label: 'CLIENTS & PROJECTS',
      description: 'Across multiple industries.',
      icon: Users,
    },
  ];

  return (
    <section
      id="results"
      aria-label="Measurable Performance Results"
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-10 bg-[#F3EFE4] text-[#080B0A] overflow-hidden"
    >
      {/* Background Ivory Editorial Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE4] via-[#ECE7D8]/50 to-[#F3EFE4] opacity-80 pointer-events-none" />

      {/* Subtle Curved Flow Line Accent in Background */}
      <svg
        className="absolute top-1/3 left-0 w-full h-[300px] pointer-events-none opacity-25 hidden sm:block"
        viewBox="0 0 1440 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100 150 C 400 150, 700 80, 1100 180 C 1300 230, 1500 180, 1600 180"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '60px 0px' }}
          transition={{ duration: 0.5, ease: easeCustom }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            06
          </span>
          <span className="w-8 h-[1px] bg-[#B9923F]/40" />
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-[#063C2D] uppercase">
            MEASURABLE PERFORMANCE RESULTS
          </span>
        </motion.div>

        {/* Section Introduction: Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          {/* Left Column: Headline & Supporting Description */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="lg:col-span-8 xl:col-span-8"
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-[#080B0A] font-normal leading-[1.08] tracking-tight mb-4 sm:mb-5">
              Reported Outcomes Across<br />
              <span className="italic font-serif text-[#063C2D]">Client Engagements.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#101613]/75 font-light leading-relaxed max-w-xl">
              Collective performance results achieved across multi-industry client engagements, search visibility strategies, and digital conversion infrastructure.
            </p>
          </motion.div>

          {/* Right Column: Elegant Dark Emerald CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeCustom }}
            className="lg:col-span-4 xl:col-span-4 flex lg:justify-end"
          >
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#063C2D] text-[#F3EFE4] hover:bg-[#0B5A43] text-xs font-sans font-semibold tracking-[0.16em] uppercase transition-all duration-200 shadow-sm group"
            >
              <span>EXPLORE PORTFOLIO</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#19A878] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Desktop View: Four Horizontally Aligned Metric Columns with Champagne-Gold Separators */}
        <div className="hidden md:grid md:grid-cols-4 divide-x divide-[#D4AF37]/35 border-t border-b border-[#D4AF37]/35 py-8 sm:py-10 mb-4 sm:mb-5">
          {metrics.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '60px 0px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: easeCustom }}
                className={`flex flex-col justify-between ${
                  idx === 0 ? 'pr-6 lg:pr-8' : idx === metrics.length - 1 ? 'pl-6 lg:pl-8' : 'px-6 lg:px-8'
                }`}
              >
                <div>
                  {/* Outlined Circular Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#063C2D]/25 bg-transparent flex items-center justify-center text-[#063C2D] mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105">
                    <Icon className="w-4 h-4 stroke-[1.6]" />
                  </div>

                  {/* Restrained Serif Metric Number */}
                  <div className="font-serif text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] text-[#080B0A] font-normal leading-none tracking-tight mb-3 sm:mb-4">
                    {item.metric}
                  </div>

                  {/* Compact Uppercase Label */}
                  <h3 className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#063C2D] uppercase mb-1.5">
                    {item.label}
                  </h3>

                  {/* Short Supporting Description */}
                  <p className="font-sans text-[11px] sm:text-xs text-[#101613]/70 font-light leading-relaxed max-w-[210px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Vertical Sequence with Clean Dividers */}
        <div className="md:hidden divide-y divide-[#D4AF37]/30 border-t border-b border-[#D4AF37]/30 mb-4">
          {metrics.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="py-6 flex items-start gap-5">
                {/* Outlined Circular Icon */}
                <div className="w-10 h-10 rounded-full border border-[#063C2D]/25 bg-transparent flex items-center justify-center text-[#063C2D] shrink-0 mt-1">
                  <Icon className="w-4 h-4 stroke-[1.6]" />
                </div>

                {/* Content */}
                <div>
                  <div className="font-serif text-3xl text-[#080B0A] font-normal leading-none tracking-tight mb-1.5">
                    {item.metric}
                  </div>
                  <h3 className="font-sans text-[11px] font-semibold tracking-[0.16em] text-[#063C2D] uppercase mb-1">
                    {item.label}
                  </h3>
                  <p className="font-sans text-xs text-[#101613]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Mandatory Disclosure */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '60px 0px' }}
          transition={{ duration: 0.5, ease: easeCustom }}
          className="pt-2 sm:pt-3 max-w-3xl mx-auto text-center"
        >
          <p className="text-[10px] sm:text-[11px] font-sans text-[#101613]/55 font-light leading-relaxed">
            Results represent reported outcomes across selected client engagements. Individual results vary depending on business, market conditions, strategy and execution.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
