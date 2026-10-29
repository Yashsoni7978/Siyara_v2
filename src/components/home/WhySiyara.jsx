'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhySiyara() {
  // Panel 02 (Integrated Team) is expanded by default, matching the approved reference design
  const [expandedId, setExpandedId] = useState('02');

  const principles = [
    {
      id: '01',
      titleLine1: 'Strategy',
      titleLine2: 'First',
      fullTitle: 'Strategy First',
      lead: 'Clarity before execution.',
      description:
        'Every project starts with research, business understanding, competitor analysis and a clear strategic direction.',
      image: '/images/why-siyara/strategy.webp',
      link: '/services/brand-strategy-identity-jaipur',
      isEmerald: false, // Card 01 – Strategy First: Deep Ivory (#F3EFE4)
    },
    {
      id: '02',
      titleLine1: 'Integrated',
      titleLine2: 'Team',
      fullTitle: 'Integrated Team',
      lead: 'Different disciplines. One direction.',
      description:
        'Strategists, designers and developers work together from the same brief, ensuring consistency across every stage.',
      image: '/images/why-siyara/team.webp',
      link: '/about',
      isEmerald: true, // Card 02 – Integrated Team: Deep Emerald (#063C2D)
    },
    {
      id: '03',
      titleLine1: 'Built to',
      titleLine2: 'Perform',
      fullTitle: 'Built to Perform',
      lead: 'Designed for more than appearance.',
      description:
        'We build brands, websites and digital systems with performance, usability, search visibility and business growth in mind.',
      image: '/images/why-siyara/perform.webp',
      link: '/services/website-design-development-jaipur',
      isEmerald: false, // Card 03 – Built to Perform: Deep Ivory (#F3EFE4)
    },
    {
      id: '04',
      titleLine1: 'Long-Term',
      titleLine2: 'Partnership',
      fullTitle: 'Long-Term Partnership',
      lead: "The work doesn't end at launch.",
      description:
        'We continue supporting optimisation, improvements, reporting and ongoing digital growth.',
      image: '/images/why-siyara/partnership.webp',
      link: '/contact',
      isEmerald: true, // Card 04 – Long-Term Partnership: Deep Emerald (#063C2D)
    },
  ];

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="about"
      aria-label="Why Choose Siyara Innovations"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3EFE4] text-[#080B0A] overflow-hidden"
    >
      {/* Background Subtle Warm Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE4] via-[#ECE7D8]/45 to-[#F3EFE4] opacity-90 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION INTRODUCTION (Two-Column Editorial Layout)                        */}
        {/* ========================================================================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* LEFT COLUMN: Editorial Headline */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] text-[#080B0A] font-normal leading-[1.05] tracking-tight">
                More than services.<br />
                A partner for<br />
                <span className="italic font-serif text-[#063C2D]">
                  what&apos;s next
                  <span className="text-[#D4AF37] font-normal not-italic">.</span>
                </span>
              </h2>
            </div>

            {/* RIGHT COLUMN: Supporting Copy with subtle vertical border + CTA */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between items-start lg:pl-6 xl:pl-8">
              <div className="border-l border-[#B9923F]/35 pl-5 sm:pl-6 mb-6 sm:mb-8">
                <p className="font-sans text-xs sm:text-sm text-[#080B0A]/75 font-light leading-relaxed max-w-md">
                  We bring strategy, design, technology and growth together — so your business doesn&apos;t just look better, it performs better.
                </p>
              </div>

              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#063C2D] text-[#F3EFE4] hover:bg-[#0B5A43] text-xs font-sans font-medium tracking-[0.16em] uppercase transition-all duration-200 shadow-sm group"
                >
                  <span>OUR APPROACH</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#19A878] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP INTERACTIVE EXPANDABLE HORIZONTAL PANELS (md and above)          */}
        {/* ========================================================================= */}
        <div className="hidden md:flex flex-row gap-4 h-[440px] lg:h-[460px] w-full items-stretch">
          {principles.map((principle) => {
            const isExpanded = expandedId === principle.id;
            const isEmerald = principle.isEmerald;

            return (
              <div
                key={principle.id}
                role="region"
                aria-label={`${principle.fullTitle} Principle`}
                className={`relative rounded-[24px] lg:rounded-[28px] overflow-hidden transition-[flex,background-color,border-color,box-shadow] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isExpanded
                    ? isEmerald
                      ? 'flex-[2.2] lg:flex-[2.3] bg-[#063C2D] border border-[#19A878]/30 shadow-[0_16px_40px_rgba(6,40,30,0.22)]'
                      : 'flex-[2.2] lg:flex-[2.3] bg-[#F3EFE4] border border-[#D4AF37]/40 shadow-[0_16px_40px_rgba(8,11,10,0.1)]'
                    : isEmerald
                    ? 'flex-1 bg-[#063C2D] hover:bg-[#074735] border border-[#19A878]/25 hover:border-[#E5C378]/50 shadow-sm cursor-pointer group'
                    : 'flex-1 bg-[#F3EFE4] hover:bg-[#ECE7D8] border border-[#080B0A]/10 hover:border-[#D4AF37]/50 shadow-sm cursor-pointer group'
                }`}
                onClick={() => {
                  if (!isExpanded) handleToggle(principle.id);
                }}
              >
                {/* --- EXPANDED STATE (DESKTOP) --- */}
                {isExpanded ? (
                  <div className="h-full w-full flex flex-row items-stretch justify-between p-6 lg:p-7 relative">
                    
                    {/* Top-Right Circular Minus Toggle */}
                    <button
                      type="button"
                      aria-label={`Collapse ${principle.fullTitle}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggle(principle.id);
                      }}
                      className={`absolute top-5 right-5 z-30 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer ${
                        isEmerald
                          ? 'border border-white/20 bg-black/40 text-[#F3EFE4] hover:bg-black/60 hover:border-[#E5C378]'
                          : 'border border-[#080B0A]/20 bg-black/5 text-[#080B0A] hover:bg-black/15 hover:border-[#080B0A]/40'
                      }`}
                    >
                      <Minus className="w-4 h-4 stroke-[1.75]" />
                    </button>

                    {/* Left Column: Typography, Details & CTA */}
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between h-full pr-4 z-10 max-w-[240px] lg:max-w-[270px]"
                    >
                      <div>
                        {/* Number Indicator */}
                        <div
                          className={`font-serif text-2xl lg:text-3xl font-light leading-none ${
                            isEmerald ? 'text-[#E5C378]' : 'text-[#D4AF37]'
                          }`}
                        >
                          {principle.id}
                        </div>

                        {/* Gold Divider Line */}
                        <div
                          className={`w-8 h-[1px] my-3.5 ${
                            isEmerald ? 'bg-[#E5C378]/50' : 'bg-[#D4AF37]/50'
                          }`}
                        />

                        {/* Heading */}
                        <h3
                          className={`font-serif text-2xl lg:text-[28px] font-normal leading-[1.12] mb-2 ${
                            isEmerald ? 'text-[#F3EFE4]' : 'text-[#080B0A]'
                          }`}
                        >
                          {principle.titleLine1}<br />
                          {principle.titleLine2}
                        </h3>

                        {/* Lead */}
                        <p
                          className={`font-serif italic text-xs mb-1.5 leading-snug ${
                            isEmerald ? 'text-[#E5C378]' : 'text-[#063C2D]'
                          }`}
                        >
                          {principle.lead}
                        </p>

                        {/* Full Description */}
                        <p
                          className={`font-sans text-xs font-light leading-relaxed ${
                            isEmerald ? 'text-[#A5B8AA]' : 'text-[#080B0A]/75'
                          }`}
                        >
                          {principle.description}
                        </p>
                      </div>

                      {/* Learn More Button */}
                      <div className="pt-3">
                        <Link
                          href={principle.link}
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10.5px] font-sans font-medium tracking-[0.16em] uppercase transition-all duration-200 group ${
                            isEmerald
                              ? 'border border-[#E5C378]/45 text-[#F3EFE4] hover:bg-[#E5C378]/15 hover:border-[#E5C378]'
                              : 'border border-[#063C2D]/40 text-[#063C2D] hover:bg-[#063C2D] hover:text-[#F3EFE4]'
                          }`}
                        >
                          <span>LEARN MORE</span>
                          <ArrowUpRight
                            className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                              isEmerald ? 'text-[#E5C378]' : 'text-[#063C2D] group-hover:text-[#F3EFE4]'
                            }`}
                          />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Right Column: Architectural Visual */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-full w-[190px] lg:w-[230px] xl:w-[260px] shrink-0 rounded-2xl overflow-hidden shadow-inner border border-white/10"
                    >
                      <Image
                        src={principle.image}
                        alt={`${principle.fullTitle} Visual`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 230px, 260px"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent pointer-events-none ${
                          isEmerald ? 'from-[#063C2D]/40' : 'from-[#F3EFE4]/40'
                        }`}
                      />
                    </motion.div>
                  </div>
                ) : (
                  /* --- COLLAPSED STATE (DESKTOP) --- */
                  <div className="h-full w-full p-6 lg:p-7 flex flex-col justify-between items-start">
                    {/* Top: Gold Number & Title */}
                    <div>
                      <div
                        className={`font-serif text-2xl lg:text-3xl font-light leading-none transition-colors ${
                          isEmerald
                            ? 'text-[#E5C378] group-hover:text-[#D4AF37]'
                            : 'text-[#D4AF37] group-hover:text-[#B9923F]'
                        }`}
                      >
                        {principle.id}
                      </div>
                      <div
                        className={`w-8 h-[1px] my-4 ${
                          isEmerald ? 'bg-[#E5C378]/40' : 'bg-[#D4AF37]/40'
                        }`}
                      />
                      <h3
                        className={`font-serif text-xl lg:text-2xl font-normal leading-[1.2] transition-colors ${
                          isEmerald
                            ? 'text-[#F3EFE4] group-hover:text-white'
                            : 'text-[#080B0A] group-hover:text-[#063C2D]'
                        }`}
                      >
                        {principle.titleLine1}<br />
                        {principle.titleLine2}
                      </h3>
                    </div>

                    {/* Bottom: Circular Plus Indicator */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isEmerald
                          ? 'border border-[#E5C378]/40 bg-white/5 text-[#E5C378] group-hover:border-[#E5C378] group-hover:bg-[#E5C378] group-hover:text-[#063C2D]'
                          : 'border border-[#080B0A]/15 bg-black/5 text-[#080B0A]/60 group-hover:border-[#063C2D] group-hover:bg-[#063C2D] group-hover:text-[#F3EFE4]'
                      }`}
                    >
                      <Plus className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE RESPONSIVE ACCORDION (below md)                                     */}
        {/* ========================================================================= */}
        <div className="md:hidden flex flex-col space-y-3">
          {principles.map((principle) => {
            const isExpanded = expandedId === principle.id;
            const isEmerald = principle.isEmerald;

            return (
              <div
                key={principle.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? isEmerald
                      ? 'bg-[#063C2D] border border-[#19A878]/30 shadow-md text-[#F3EFE4]'
                      : 'bg-[#F3EFE4] border border-[#D4AF37]/40 shadow-md text-[#080B0A]'
                    : isEmerald
                    ? 'bg-[#063C2D] border border-[#19A878]/25 text-[#F3EFE4]'
                    : 'bg-[#F3EFE4] border border-[#080B0A]/10 text-[#080B0A]'
                }`}
              >
                {/* Header Row (Always Clickable) */}
                <button
                  type="button"
                  onClick={() => handleToggle(principle.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-serif text-base font-medium ${
                        isEmerald ? 'text-[#E5C378]' : 'text-[#D4AF37]'
                      }`}
                    >
                      {principle.id}
                    </span>
                    <span
                      className={`font-serif text-lg font-normal ${
                        isEmerald ? 'text-[#F3EFE4]' : 'text-[#080B0A]'
                      }`}
                    >
                      {principle.fullTitle}
                    </span>
                  </div>

                  <div className="shrink-0">
                    {isExpanded ? (
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          isEmerald
                            ? 'border border-white/20 bg-black/35 text-[#F3EFE4]'
                            : 'border border-[#080B0A]/20 bg-black/5 text-[#080B0A]'
                        }`}
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[1.75]" />
                      </div>
                    ) : (
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          isEmerald
                            ? 'border border-[#E5C378]/40 bg-white/5 text-[#E5C378]'
                            : 'border border-[#080B0A]/15 bg-black/5 text-[#080B0A]/60'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[1.75]" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Expanded Content (Mobile) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1">
                        {/* Architectural Visual */}
                        <div className="relative w-full h-[160px] sm:h-[180px] rounded-xl overflow-hidden mb-4 border border-white/10">
                          <Image
                            src={principle.image}
                            alt={`${principle.fullTitle} Visual`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />
                        </div>

                        {/* Lead */}
                        <p
                          className={`font-serif italic text-xs mb-1.5 leading-snug ${
                            isEmerald ? 'text-[#E5C378]' : 'text-[#063C2D]'
                          }`}
                        >
                          {principle.lead}
                        </p>

                        {/* Description */}
                        <p
                          className={`font-sans text-xs font-light leading-relaxed mb-4 ${
                            isEmerald ? 'text-[#A5B8AA]' : 'text-[#080B0A]/75'
                          }`}
                        >
                          {principle.description}
                        </p>

                        {/* Learn More Button */}
                        <div>
                          <Link
                            href={principle.link}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-sans font-medium tracking-[0.14em] uppercase ${
                              isEmerald
                                ? 'border border-[#E5C378]/45 text-[#F3EFE4]'
                                : 'border border-[#063C2D]/40 text-[#063C2D]'
                            }`}
                          >
                            <span>LEARN MORE</span>
                            <ArrowUpRight
                              className={`w-3.5 h-3.5 ${
                                isEmerald ? 'text-[#E5C378]' : 'text-[#063C2D]'
                              }`}
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM PHILOSOPHY STRIP (Matching the Reference Footer Design)           */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-[#080B0A]/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-center text-center md:text-left">
            {/* Left Column */}
            <div className="md:col-span-3">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#080B0A]/70 uppercase">
                OUR PHILOSOPHY
              </span>
            </div>

            {/* Center Column */}
            <div className="md:col-span-6 md:text-center md:border-x md:border-[#080B0A]/10 md:px-6">
              <p className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.16em] text-[#080B0A]/90 uppercase">
                GOOD BRANDS KEEP UP. GREAT BUSINESSES STAY AHEAD.
              </p>
            </div>

            {/* Right Column */}
            <div className="md:col-span-3 md:text-right">
              <Link
                href="/about"
                className="inline-flex items-center justify-center md:justify-end gap-1.5 text-[11px] font-sans font-semibold tracking-[0.16em] text-[#063C2D] hover:text-[#0B5A43] uppercase transition-colors group"
              >
                <span>BUILT FOR WHAT&apos;S NEXT.</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#063C2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
