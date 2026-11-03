'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function MissionVision() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const pillars = [
    {
      id: 'mission',
      title: 'Our Mission',
      text: 'To empower businesses with strategic thinking, thoughtful design and technology that creates meaningful progress.',
      icon: (
        <svg 
          className="w-8 h-8 text-[#D4AF37]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
        </svg>
      ),
    },
    {
      id: 'vision',
      title: 'Our Vision',
      text: 'To be a trusted growth partner for businesses building relevant, resilient and memorable digital experiences.',
      icon: (
        <svg 
          className="w-8 h-8 text-[#D4AF37]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      ),
    },
    {
      id: 'purpose',
      title: 'Our Purpose',
      text: 'To build connected digital experiences that help businesses operate, communicate and grow with greater clarity.',
      icon: (
        <svg 
          className="w-8 h-8 text-[#D4AF37]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.5" />
          <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="mission-vision-purpose"
      aria-label="03 — Our Mission, Vision & Purpose"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#063C2D] text-[#F3EFE4] overflow-hidden"
    >
      {/* Deep Emerald Atmosphere Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D] via-[#05261C] to-[#041A13] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#D4AF37]">
            03
          </span>
          <span className="text-xs sm:text-sm text-[#D4AF37]/50 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#D4AF37] uppercase">
            OUR MISSION, VISION &amp; PURPOSE
          </span>
        </div>

        {/* 3 Balanced Columns with Thin Vertical Separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: easeCustom }}
              className={`py-8 md:py-0 ${
                idx === 0
                  ? 'md:pr-10 lg:pr-12'
                  : idx === 1
                  ? 'md:px-10 lg:px-12'
                  : 'md:pl-10 lg:pl-12'
              } flex flex-col`}
            >
              {/* Gold Outline Icon */}
              <div className="mb-6 flex items-center justify-start">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-lora text-2xl sm:text-[28px] font-normal text-[#F3EFE4] mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="font-lora text-sm sm:text-[15px] text-[#C5D2CE] font-light leading-relaxed">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
