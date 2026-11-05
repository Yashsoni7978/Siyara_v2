'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, BookOpen, Sparkles } from 'lucide-react';

export default function BlogHero() {
  return (
    <section
      id="insights-hero"
      aria-label="Insights Editorial Hero"
      className="relative min-h-screen min-h-[100svh] md:min-h-0 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 bg-[#080B0A] text-[#F3EFE4] overflow-hidden flex flex-col"
    >
      {/* Ambient Gradient Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 right-0 w-[600px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.35) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-20 left-10 w-[500px] h-[300px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col justify-between min-h-[calc(100svh-160px)] md:min-h-0">
        <div>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-roboto text-[#C5D2CE]/70 mb-6">
            <Link href="/" className="hover:text-[#E5C378] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#E5C378] font-medium">Insights</span>
          </nav>

          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                — SIYARA RESEARCH &amp; EDITORIAL PUBLICATION —
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="font-roboto text-4xl sm:text-6xl lg:text-[70px] font-normal text-[#F3EFE4] leading-[1.08] tracking-tight mb-6 sm:mb-8">
              Perspectives for the next era of{' '}
              <span className="font-lora italic text-[#E5C378]">
                digital growth.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-lora text-sm sm:text-base lg:text-[18px] text-[#C5D2CE] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
              Practical insights, engineering playbooks, and strategic perspectives from Siyara Innovations — helping forward-thinking businesses build resilient brands, fast digital experiences, and measurable commercial growth.
            </p>
          </div>
        </div>

        {/* Editorial Focus Area Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-roboto text-[#C5D2CE]/75">
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
        </div>

      </div>
    </section>
  );
}
