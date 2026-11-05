'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function WhatWeBringTogether() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const leftDisciplines = [
    {
      title: 'Brand Strategy',
      description: 'Positioning, messaging and long-term brand direction.',
      icon: (
        <svg className="w-6 h-6 text-[#7A5813]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.5" />
          <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.5" />
        </svg>
      ),
    },
    {
      title: 'Discoverability & Marketing',
      description: 'Visibility, reach and performance across digital channels.',
      icon: (
        <svg className="w-6 h-6 text-[#7A5813]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m3 11 18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      ),
    },
    {
      title: 'Automation & Systems',
      description: 'Smarter workflows, lead systems and business operations.',
      icon: (
        <svg className="w-6 h-6 text-[#7A5813]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="18" y2="18" />
          <circle cx="8" cy="6" r="2" fill="#F4EFE6" />
          <circle cx="16" cy="12" r="2" fill="#F4EFE6" />
          <circle cx="10" cy="18" r="2" fill="#F4EFE6" />
        </svg>
      ),
    },
  ];

  const rightDisciplines = [
    {
      title: 'Creative & Content',
      description: 'Visuals, storytelling and content that build brand value.',
      icon: (
        <svg className="w-6 h-6 text-[#7A5813]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      ),
    },
    {
      title: 'Web & Digital Experiences',
      description: 'High-performance websites and digital platforms.',
      icon: (
        <svg className="w-6 h-6 text-[#7A5813]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'Analytics & Growth',
      description: 'Data-led insights and ongoing performance improvement.',
      icon: (
        <svg className="w-6 h-6 text-[#7A5813]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" x2="18" y1="20" y2="10" />
          <line x1="12" x2="12" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="what-we-bring-together"
      aria-label="07 — What We Bring Together"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#7A5813]">
            07
          </span>
          <span className="text-xs sm:text-sm text-[#080B0A]/40 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#080B0A] uppercase">
            WHAT WE BRING TOGETHER
          </span>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP DIAGRAM: Left 3 Items — Clean Connector — Central Logo — Connector — Right 3 Items */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-4 items-center">

          {/* LEFT 3 DISCIPLINES */}
          <div className="col-span-4 space-y-10 pr-2">
            {leftDisciplines.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: easeCustom }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LEFT CLEAN CONNECTOR BRACE SVG (Thin, Non-wavy architectural lines) */}
          <div className="col-span-1 flex items-center justify-center h-full min-h-[260px]">
            <svg
              className="w-full h-[240px] text-[#7A5813]/50"
              viewBox="0 0 60 240"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 5 20 H 25 C 40 20, 50 100, 55 120 C 50 140, 40 220, 25 220 H 5"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M 5 120 H 55"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </div>

          {/* CENTER SIYARA INNOVATIONS LOGO */}
          <div className="col-span-2 flex flex-col items-center justify-center text-center px-2">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeCustom }}
              className="py-4 px-3"
            >
              <span className="font-lora text-2xl lg:text-[26px] font-bold text-[#080B0A] tracking-[0.14em] block">
                SIYARA
              </span>
              <span className="font-roboto text-[10px] tracking-[0.28em] font-semibold text-[#080B0A]/80 uppercase block mt-1">
                INNOVATIONS
              </span>
            </motion.div>
          </div>

          {/* RIGHT CLEAN CONNECTOR BRACE SVG (Thin, Non-wavy architectural lines) */}
          <div className="col-span-1 flex items-center justify-center h-full min-h-[260px]">
            <svg
              className="w-full h-[240px] text-[#7A5813]/50"
              viewBox="0 0 60 240"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 55 20 H 35 C 20 20, 10 100, 5 120 C 10 140, 20 220, 35 220 H 55"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M 55 120 H 5"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </div>

          {/* RIGHT 3 DISCIPLINES */}
          <div className="col-span-4 space-y-10 pl-2">
            {rightDisciplines.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: easeCustom }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* TABLET & MOBILE: Clean Stacked Sequence (No complex diagram)              */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-8">
          {/* Logo Anchor */}
          <div className="text-center py-4 border-b border-[#080B0A]/10">
            <span className="font-lora text-2xl font-bold text-[#080B0A] tracking-[0.14em] block">
              SIYARA
            </span>
            <span className="font-roboto text-[10px] tracking-[0.28em] font-semibold text-[#080B0A]/80 uppercase block mt-1">
              INNOVATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[...leftDisciplines, ...rightDisciplines].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
