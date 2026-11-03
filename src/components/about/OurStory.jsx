'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function OurStory() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section
      id="our-story"
      aria-label="02 — Our Story"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#C99742]">
            02
          </span>
          <span className="text-xs sm:text-sm text-[#080B0A]/40 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#080B0A] uppercase">
            OUR STORY
          </span>
        </div>

        {/* 2-Column Balanced Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: easeCustom }}
            className="lg:col-span-6 flex flex-col justify-start"
          >
            {/* Primary Headline */}
            <h2 className="font-lora text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#080B0A] leading-[1.15] tracking-tight mb-4">
              More than services.<br />
              A <span className="italic text-[#C99742]">connected way</span><br />
              of thinking.
            </h2>

            {/* Gold Underline Accent */}
            <div className="w-16 h-[2px] bg-[#C99742] mb-8" />

            {/* Editorial Story Text */}
            <div className="space-y-4 font-lora text-sm sm:text-base text-[#2D3230] leading-relaxed max-w-xl">
              <p>
                Siyara Innovations was founded to solve a common challenge — great ideas often lose impact when strategy, design, technology and growth work in isolation.
              </p>
              <p>
                We bring these pieces together, so your brand moves forward with{' '}
                <strong className="font-semibold text-[#080B0A]">clarity, consistency and real business impact</strong>.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Brand Craft / Studio Workspace Visual with Architectural Gold Brackets */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeCustom }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px]">
              {/* Architectural Gold Bracket: Top-Right */}
              <div 
                aria-hidden="true"
                className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 w-32 sm:w-40 h-24 sm:h-28 border-t-2 border-r-2 border-[#C99742]/80 z-20 pointer-events-none" 
              />
              
              {/* Architectural Gold Bracket: Bottom-Left */}
              <div 
                aria-hidden="true"
                className="absolute -bottom-3.5 -left-3.5 sm:-bottom-4 sm:-left-4 w-32 sm:w-40 h-24 sm:h-28 border-b-2 border-l-2 border-[#C99742]/80 z-20 pointer-events-none" 
              />

              {/* Photo Container */}
              <div className="relative overflow-hidden shadow-2xl aspect-[16/11] w-full bg-[#E5DEC9]">
                <Image
                  src="/images/about-story-workspace.webp"
                  alt="Siyara Innovations studio workspace with branded monogram mug, laptop and daylight"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
