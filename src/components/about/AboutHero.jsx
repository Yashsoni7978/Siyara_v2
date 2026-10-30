'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

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
    <section className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-48 lg:pb-32 bg-[#070A09] text-[#F3EFE3] overflow-hidden flex items-center">
      {/* Obsidian Base Canvas */}
      <div className="absolute inset-0 bg-[#070A09] z-0" />

      {/* Atmospheric Background (Existing glow treatment without physical images) */}
      <div className="absolute right-[5%] lg:right-[15%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[650px] lg:h-[650px] bg-gradient-to-tr from-[#071E18]/40 via-[#0C6B52]/10 to-transparent blur-3xl rounded-full pointer-events-none z-[1]" />
      
      {/* Subtle Architectural Grid / Overlays for the right side to let it breathe */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-[#D9B45F]/5 bg-gradient-to-l from-[#071E18]/10 to-transparent pointer-events-none z-[1] hidden lg:block" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D9B45F]/10 to-transparent pointer-events-none z-[1] hidden lg:block" />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Hero Content */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="h-[1px] w-8 bg-[#D9B45F]/60" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#D9B45F] uppercase">
                ABOUT SIYARA
              </span>
            </div>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8">
              <h1 className="font-roboto text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-normal leading-[1.12] sm:leading-[1.1] tracking-tight text-[#F3EFE3] max-w-full break-words">
                We build digital systems for growing businesses — strategy, design, and technology, connected.
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className="mb-8 sm:mb-10 max-w-lg space-y-4">
              <p className="font-lora text-sm sm:text-base lg:text-lg text-[#9D9B91] font-light leading-relaxed">
                Founded in May 2026, Siyara Innovations unites more than six years of combined professional experience to solve real commercial problems for businesses across India and internationally.
              </p>
              <p className="font-lora text-sm sm:text-base lg:text-lg text-[#9D9B91] font-light leading-relaxed">
                We believe every part of a business’s digital presence should work as one system, not six disconnected pieces.
              </p>
            </div>

            {/* Optional Brand Statement */}
            <div className="mb-8 sm:mb-10 flex items-center gap-4">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] text-[#9D9B91]/70 uppercase">
               ROOTED IN JAIPUR &middot; SERVING CLIENTS IN INDIA &amp; INTERNATIONALLY
              </span>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#story"
                className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-[#D9B45F] text-[#070A09] text-[11px] font-sans font-bold tracking-[0.2em] uppercase hover:bg-[#E8C979] transition-all duration-300 shadow-lg shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                OUR STORY &rarr;
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Technology Visualization */}
          <div className="lg:col-span-4 xl:col-span-5 relative mt-8 lg:mt-0 flex justify-center items-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(12,107,82,0.5)] border border-[#D9B45F]/20">
              <Image
                src="/images/about-tech-visual.webp"
                alt="Digital Technology Architecture"
                priority
                width={896}
                height={1200}
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Internal shadow/gradient for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-transparent to-[#071E18]/40 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#D9B45F]/10 rounded-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
