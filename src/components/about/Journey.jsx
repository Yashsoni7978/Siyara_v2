'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Journey() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const milestones = [
    {
      title: 'Strategy',
      description: 'Understanding the bigger picture and setting the right direction.',
    },
    {
      title: 'Creative',
      description: 'Turning ideas into meaningful brand and content experiences.',
    },
    {
      title: 'Technology',
      description: 'Building fast, reliable and scalable digital solutions.',
    },
    {
      title: 'Connected Experiences',
      description: 'Bringing strategy, creative and technology together for real business impact.',
    },
    {
      title: 'Continuous Growth',
      description: 'Iterating, optimizing and finding new opportunities for long-term growth.',
    },
  ];

  return (
    <section
      id="our-journey"
      aria-label="05 — Our Journey"
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#C99742]">
            05
          </span>
          <span className="text-xs sm:text-sm text-[#080B0A]/40 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#080B0A] uppercase">
            OUR JOURNEY
          </span>
        </div>

        {/* Section Header: Headline (Left) & Context Callout (Right) */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-16 mb-16 sm:mb-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="lg:max-w-xl"
          >
            <h2 className="font-lora text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.15] tracking-tight">
              A journey of ideas,<br />
              building and learning.
            </h2>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeCustom }}
            className="flex items-start gap-5 max-w-md"
          >
            <div 
              aria-hidden="true" 
              className="w-[1.5px] h-14 sm:h-16 bg-[#C99742] shrink-0 mt-1" 
            />
            <p className="font-lora text-xs sm:text-sm text-[#3A403D] leading-relaxed">
              A continuous evolution — from understanding the bigger picture to creating connected digital experiences that deliver real business value.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP TIMELINE: 5 Connected Stages on a Single Continuous Golden Line   */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative mt-8">
          {/* Continuous Connecting Line */}
          <div 
            aria-hidden="true"
            className="absolute top-[10px] left-[10%] right-[10%] h-[1.5px] bg-[#C99742]/50 z-0" 
          />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {milestones.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: easeCustom }}
                className="flex flex-col items-center text-center px-1"
              >
                {/* Circular Node Marker (Gold Ring + Gold Center) */}
                <div 
                  aria-hidden="true"
                  className="w-5 h-5 rounded-full border-2 border-[#C99742] bg-[#F4EFE6] flex items-center justify-center mb-6 shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-[#C99742]" />
                </div>

                {/* Milestone Title */}
                <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed max-w-[210px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET TIMELINE: Clean Vertical Layout with Gold Markers        */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {/* Vertical Connecting Line */}
          <div 
            aria-hidden="true"
            className="absolute top-2.5 bottom-6 left-[13px] sm:left-[17px] w-[1.5px] bg-[#C99742]/50 z-0" 
          />

          {milestones.map((item) => (
            <div key={item.title} className="relative flex items-start gap-4 sm:gap-6">
              {/* Circular Node Marker */}
              <div 
                aria-hidden="true"
                className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 -translate-x-[2px] rounded-full border-2 border-[#C99742] bg-[#F4EFE6] flex items-center justify-center shadow-sm z-10"
              >
                <div className="w-2 h-2 rounded-full bg-[#C99742]" />
              </div>

              <div>
                <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1.5">
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
