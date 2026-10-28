'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhySiyara() {
  const [expandedId, setExpandedId] = useState(null);

  const principles = [
    {
      id: '01',
      title: 'Strategy First',
      summary: 'Every project starts with research, clarity and a clear plan.',
      description:
        'We audit your competitive landscape, clarify your unique market positioning, and architect a strategic roadmap before writing a single line of code.',
    },
    {
      id: '02',
      title: 'One Connected Team',
      summary: 'Strategists, designers and developers working as a single team.',
      description:
        'Designers, engineers, and growth strategists work collaboratively under one roof in Jaipur, eliminating handoff silos and ensuring cohesive execution.',
    },
    {
      id: '03',
      title: 'Built to Perform',
      summary: 'Brands, websites and systems designed for speed, growth and real results.',
      description:
        'High-performance Next.js engineering with sub-second load speeds, modern Core Web Vitals compliance, and conversion-focused ergonomics that drive measurable pipeline.',
    },
    {
      id: '04',
      title: 'Long-Term Partnership',
      summary: 'We stay with you after launch, with optimisation and ongoing support.',
      description:
        'We remain your technical and growth partner after launch, providing proactive maintenance, performance monitoring, and iterative feature enhancements.',
    },
  ];

  const stats = [
    {
      metric: '60+',
      label: 'CLIENTS SERVED',
      description: 'Across India and internationally.',
    },
    {
      metric: '110+',
      label: 'PROJECTS DELIVERED',
      description: 'Websites, brands and digital systems.',
    },
    {
      metric: '12',
      label: 'INDUSTRIES SERVED',
      description: 'From real estate to healthcare.',
    },
    {
      metric: '6+ Years',
      label: 'COMBINED EXPERIENCE',
      description: 'In strategy, design and development.',
    },
  ];

  const togglePrinciple = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="about"
      aria-label="Why Choose Siyara Innovations"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3EFE4] text-[#080B0A] overflow-hidden"
    >
      {/* Background Ivory Editorial Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE4] via-[#ECE7D8]/60 to-[#F3EFE4] opacity-90 pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 94, 73, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Top Three-Column Composition on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Editorial Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between"
          >
            <div>
              {/* Small Section Label */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
                  02
                </span>
                <span className="w-8 h-[1px] bg-[#B9923F]/40" />
                <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-[#080B0A] uppercase">
                  WHY SIYARA
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[46px] xl:text-[52px] text-[#080B0A] font-normal leading-[1.08] tracking-tight mb-5 sm:mb-6">
                More than<br />
                services.<br />
                A partner<br />
                <span className="italic font-serif text-[#063C2D]">for what&apos;s next.</span>
              </h2>

              {/* Supporting Description */}
              <p className="font-sans text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed max-w-sm mb-6 sm:mb-8">
                We bring strategy, design, technology and growth together — so your business doesn&apos;t just look better, it performs better.
              </p>
            </div>

            {/* Compact CTA */}
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#063C2D] text-[#F3EFE4] hover:bg-[#0B5A43] text-xs font-sans font-medium tracking-[0.16em] uppercase transition-all duration-200 shadow-sm group"
              >
                <span>OUR APPROACH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#19A878] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* CENTRE COLUMN: Signature Brand Element (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-3 xl:col-span-3 items-center justify-center relative min-h-[440px]"
          >
            {/* Concentric Aura Rings */}
            <div
              className="absolute w-56 h-56 rounded-full pointer-events-none opacity-40"
              style={{
                background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.18) 0%, transparent 70%)',
              }}
            />
            <div className="absolute w-52 h-52 rounded-full border border-[#D4AF37]/15 pointer-events-none" />
            <div className="absolute w-40 h-40 rounded-full border border-[#D4AF37]/25 pointer-events-none" />

            {/* Central Deep Forest Medallion */}
            <div className="relative z-10 w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-[#06261D] border border-[#D4AF37]/50 shadow-[0_12px_36px_rgba(6,38,29,0.35)] flex items-center justify-center p-5">
              <div className="relative w-14 h-14 xl:w-16 xl:h-16 flex items-center justify-center">
                <Image
                  src="/siyara-emblem.webp"
                  alt="Siyara Signature Monogram"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                  priority
                />
              </div>
            </div>

            {/* Curved Connector Lines to the 4 Principle Rows on Right */}
            <svg
              className="absolute top-0 right-[-10px] w-[130px] h-full pointer-events-none overflow-visible z-0"
              viewBox="0 0 130 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curve 1 to Row 01 */}
              <path
                d="M 0 220 C 50 220, 75 58, 126 58"
                stroke="#D4AF37"
                strokeWidth="1.2"
                strokeOpacity="0.55"
              />
              <circle cx="126" cy="58" r="3.5" fill="#063C2D" stroke="#D4AF37" strokeWidth="1.5" />

              {/* Curve 2 to Row 02 */}
              <path
                d="M 0 220 C 50 220, 75 166, 126 166"
                stroke="#D4AF37"
                strokeWidth="1.2"
                strokeOpacity="0.55"
              />
              <circle cx="126" cy="166" r="3.5" fill="#063C2D" stroke="#D4AF37" strokeWidth="1.5" />

              {/* Curve 3 to Row 03 */}
              <path
                d="M 0 220 C 50 220, 75 274, 126 274"
                stroke="#D4AF37"
                strokeWidth="1.2"
                strokeOpacity="0.55"
              />
              <circle cx="126" cy="274" r="3.5" fill="#063C2D" stroke="#D4AF37" strokeWidth="1.5" />

              {/* Curve 4 to Row 04 */}
              <path
                d="M 0 220 C 50 220, 75 382, 126 382"
                stroke="#D4AF37"
                strokeWidth="1.2"
                strokeOpacity="0.55"
              />
              <circle cx="126" cy="382" r="3.5" fill="#063C2D" stroke="#D4AF37" strokeWidth="1.5" />
            </svg>
          </motion.div>

          {/* RIGHT COLUMN: Four Interactive Principles */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col space-y-3 sm:space-y-4"
          >
            {principles.map((principle) => {
              const isExpanded = expandedId === principle.id;

              return (
                <div
                  key={principle.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isExpanded
                      ? 'bg-[#ECE7D8] border-[#063C2D]/35 shadow-sm'
                      : 'bg-[#ECE7D8]/55 hover:bg-[#ECE7D8]/85 border-[#080B0A]/5'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => togglePrinciple(principle.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`principle-desc-${principle.id}`}
                    id={`principle-btn-${principle.id}`}
                    className="w-full p-4 sm:p-5 flex items-start justify-between text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#063C2D] rounded-2xl transition-all"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4 pr-3 min-w-0">
                      {/* Numbered Marker Badge */}
                      <span className="w-8 h-8 rounded-full bg-[#F3EFE4] text-[#B9923F] font-serif text-sm font-medium flex items-center justify-center shrink-0 border border-[#B9923F]/20">
                        {principle.id}
                      </span>

                      {/* Heading & Short Description */}
                      <div className="min-w-0">
                        <h3 className="font-serif text-lg sm:text-xl lg:text-[21px] text-[#080B0A] font-normal leading-snug">
                          {principle.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-[13px] text-[#101613]/70 font-light mt-1 leading-relaxed">
                          {principle.summary}
                        </p>
                      </div>
                    </div>

                    {/* Plus / Minus Action Indicator */}
                    <div className="shrink-0 pt-1">
                      {isExpanded ? (
                        <div className="w-6 h-6 rounded-full bg-[#063C2D] text-[#F3EFE4] flex items-center justify-center shadow-sm">
                          <Minus className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border border-[#080B0A]/20 text-[#080B0A]/60 flex items-center justify-center group-hover:border-[#063C2D] group-hover:text-[#063C2D] transition-colors">
                          <Plus className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Expandable Supporting Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`principle-desc-${principle.id}`}
                        role="region"
                        aria-labelledby={`principle-btn-${principle.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-0">
                          <div className="pl-11 pr-2 pt-3 border-t border-[#080B0A]/8">
                            <p className="font-sans text-xs sm:text-[13px] text-[#063C2D] font-normal leading-relaxed">
                              {principle.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* BOTTOM STATISTICS PANEL: OUR IMPACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '60px 0px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 lg:mt-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#06261D] via-[#061F18] to-[#041410] border border-[#19A878]/25 p-8 sm:p-10 lg:p-12 text-[#F3EFE4] relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
        >
          {/* Subtle Emerald Atmosphere Accent */}
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[300px] pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle at bottom right, rgba(25, 168, 120, 0.3) 0%, transparent 70%)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Header */}
            <div className="lg:col-span-4 xl:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-sans font-semibold tracking-[0.24em] text-[#19A878] uppercase">
                  OUR IMPACT
                </span>
                <span className="w-8 h-[1px] bg-[#19A878]/50 inline-block" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#F3EFE4] font-normal leading-[1.14]">
                Real experience.<br />
                <span className="italic font-serif text-[#D4AF37]">Measurable progress.</span>
              </h3>
            </div>

            {/* Right Metrics Grid: 4 Desktop Columns with Dividers, 2x2 Mobile Grid */}
            <div className="lg:col-span-8 xl:col-span-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`${idx !== 0 ? 'lg:pl-6 xl:pl-8' : ''} ${
                      idx !== stats.length - 1 ? 'lg:pr-6 xl:pr-8' : ''
                    }`}
                  >
                    <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#D4AF37] font-normal leading-none mb-2">
                      {stat.metric}
                    </div>
                    <div className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#F3EFE4] uppercase mb-1">
                      {stat.label}
                    </div>
                    <p className="font-sans text-[11px] text-[#A5B8AA] font-light leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
