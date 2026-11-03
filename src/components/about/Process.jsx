'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Process() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const steps = [
    {
      num: '01',
      title: 'Understand',
      description: 'Learn about your business, goals, audience and challenges.',
    },
    {
      num: '02',
      title: 'Define',
      description: 'Turn insights into a clear strategy and actionable plan.',
    },
    {
      num: '03',
      title: 'Create',
      description: 'Develop the creative direction, content and experience.',
    },
    {
      num: '04',
      title: 'Build',
      description: 'Bring it to life with the right technology and integrations.',
    },
    {
      num: '05',
      title: 'Improve',
      description: 'Measure, optimize and keep growing over time.',
    },
  ];

  return (
    <section
      id="our-process"
      aria-label="09 — From First Conversation To Long-Term Growth"
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-16 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#C99742]">
            09
          </span>
          <span className="text-xs sm:text-sm text-[#080B0A]/40 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#080B0A] uppercase">
            FROM FIRST CONVERSATION TO LONG-TERM GROWTH
          </span>
        </div>

        {/* Headline */}
        <div className="mb-14 sm:mb-18">
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="font-lora text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.15] tracking-tight"
          >
            A clear, collaborative process.
          </motion.h2>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP TIMELINE: 5 Continuous Nodes on a Single Gold Connecting Line    */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative mt-4">
          {/* Continuous Connecting Line */}
          <div 
            aria-hidden="true" 
            className="absolute top-[12px] left-[10%] right-[10%] h-[1.5px] bg-[#C99742]/50 z-0" 
          />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: easeCustom }}
                className="flex flex-col items-start pr-4"
              >
                {/* Circular Numbered Node Marker */}
                <div 
                  aria-hidden="true"
                  className="w-6 h-6 rounded-full border border-[#C99742] bg-[#F4EFE6] text-[10px] text-[#C99742] font-semibold flex items-center justify-center mb-6 shadow-sm"
                >
                  {item.num}
                </div>

                {/* Step Title */}
                <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1.5 leading-snug">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed max-w-[210px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TABLET & MOBILE: Clean Vertical Flow with Numbered Node Badges            */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative pl-8 space-y-8">
          {/* Vertical Connecting Line */}
          <div 
            aria-hidden="true" 
            className="absolute top-2.5 bottom-6 left-[17px] w-[1.5px] bg-[#C99742]/50 z-0" 
          />

          {steps.map((item) => (
            <div key={item.title} className="relative flex items-start gap-4">
              {/* Circular Numbered Node Marker */}
              <div 
                aria-hidden="true"
                className="absolute -left-8 top-0.5 w-6 h-6 rounded-full border border-[#C99742] bg-[#F4EFE6] text-[10px] text-[#C99742] font-semibold flex items-center justify-center shadow-sm z-10"
              >
                {item.num}
              </div>

              <div>
                <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1">
                  {item.title}
                </h3>
                <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
