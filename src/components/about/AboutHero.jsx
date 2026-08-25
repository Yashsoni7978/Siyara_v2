'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  const easeCustom = [0.16, 1, 0.3, 1];

  const fadeUp = (delayMs) => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delayMs / 1000, ease: easeCustom },
    },
  });

  return (
    <section className="relative min-h-[90svh] pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#070A09] text-[#F3EFE3] overflow-hidden flex items-center">
      {/* Obsidian Base Canvas */}
      <div className="absolute inset-0 bg-[#070A09] z-0" />

      {/* Atmospheric Background (Existing glow treatment without physical images) */}
      <div className="absolute right-[5%] lg:right-[15%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[650px] lg:h-[650px] bg-gradient-to-tr from-[#071E18]/40 via-[#0C6B52]/10 to-transparent blur-3xl rounded-full pointer-events-none z-[1]" />
      
      {/* Subtle Architectural Grid / Overlays for the right side to let it breathe */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-[#D9B45F]/5 bg-gradient-to-l from-[#071E18]/10 to-transparent pointer-events-none z-[1] hidden lg:block" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D9B45F]/10 to-transparent pointer-events-none z-[1] hidden lg:block" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Hero Content */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(250)}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-[1px] w-8 bg-[#D9B45F]/60" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#D9B45F] uppercase">
                ABOUT SIYARA
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-8">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(400)}
                className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-normal leading-[1.1] tracking-tight text-[#F3EFE3] max-w-[95%]"
              >
                We combine creativity, technology and strategy to build digital experiences that <span className="text-[#D9B45F]">drive growth.</span>
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(600)}
              className="mb-10 max-w-lg space-y-4"
            >
              <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed">
                Siyara Innovations is a digital technology company that brings strategy, design, technology and growth together to solve meaningful business challenges.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed">
                We believe digital solutions work best when every part of the system is connected.
              </p>
            </motion.div>

            {/* Optional Brand Statement */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(750)}
              className="mb-10 flex items-center gap-4"
            >
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] text-[#9D9B91]/70 uppercase">
                BASED IN JAIPUR &middot; WORKING BEYOND BOUNDARIES
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(900)}
            >
              <a
                href="#story"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#D9B45F] text-[#070A09] text-[11px] font-sans font-bold tracking-[0.2em] uppercase hover:bg-[#E8C979] transition-colors"
              >
                OUR STORY &rarr;
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Technology Visualization */}
          <div className="lg:col-span-4 xl:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(12,107,82,0.5)] border border-[#D9B45F]/20"
            >
              <img
                src="/images/about-tech-visual.jpg"
                alt="Digital Technology Architecture"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Internal shadow/gradient for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-transparent to-[#071E18]/40 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#D9B45F]/10 rounded-3xl pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
