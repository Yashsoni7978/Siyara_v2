'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Search, Target, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Results() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const metrics = [
    {
      id: '01',
      metric: '< 1.8s',
      label: 'TARGET LCP PERFORMANCE',
      description: 'Strict Core Web Vitals optimization on every production build.',
      icon: Cpu,
    },
    {
      id: '02',
      metric: '100%',
      label: 'STRUCTURED SEO DATA',
      description: 'Comprehensive Schema.org graphs for Google & AI search visibility.',
      icon: Search,
    },
    {
      id: '03',
      metric: '16',
      label: 'DELIVERED PROJECTS',
      description: 'Interactive commercial platforms with live verified demonstrations.',
      icon: Target,
    },
    {
      id: '04',
      metric: '0',
      label: 'TEMPLATE MONOTONY',
      description: '100% bespoke engineering in Next.js, Tailwind CSS & headless architecture.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="results"
      aria-label="Measurable Performance Results"
      className="relative pt-10 sm:pt-12 lg:pt-14 pb-5 sm:pb-6 bg-[#F3EFE4] text-[#080B0A] overflow-hidden"
    >
      {/* Background Ivory Editorial Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE4] via-[#ECE7D8]/50 to-[#F3EFE4] opacity-80 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-roboto font-semibold tracking-[0.24em] text-[#063C2D] uppercase block mb-1.5 sm:mb-2">
            ENGINEERING EXCELLENCE
          </span>
          <h2 className="font-roboto text-2xl sm:text-3xl lg:text-4xl font-normal text-[#080B0A] tracking-tight leading-tight">
            Measurable Standards &amp; Quality Benchmarks
          </h2>
        </div>

        {/* 4-Column Continuous Editorial Results Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: easeCustom }}
                className="p-5 sm:p-6 rounded-2xl bg-white/60 border border-[#063C2D]/10 hover:border-[#19A878]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#063C2D]/10 text-[#063C2D] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="font-roboto text-3xl sm:text-4xl font-bold text-[#063C2D] tracking-tight mb-1">
                    {item.metric}
                  </div>
                  <div className="font-roboto text-xs font-semibold tracking-wider text-[#080B0A]/80 uppercase mb-2">
                    {item.label}
                  </div>
                  <p className="font-lora text-xs text-[#080B0A]/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Affordance */}
        <div className="mt-8 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-roboto font-semibold tracking-[0.16em] uppercase text-[#063C2D] hover:text-[#19A878] transition-colors"
          >
            <span>Explore All 16 Delivered Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
