'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ContactHero() {
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
    <section
      className="relative min-h-[90svh] pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#070A09] text-[#F3EFE3] overflow-hidden flex items-center"
    >
      {/* FULL-WIDTH HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/images/contact_hero.png"
          alt="Siyara Contact Architecture"
          className="w-full h-full object-cover object-[75%_center] sm:object-[70%_center] md:object-[68%_center] lg:object-right"
        />
        {/* Subtle dark gradient overlay for optimal left-side text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A09]/90 via-[#070A09]/55 to-transparent lg:via-[#070A09]/30" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Dominant Editorial Messaging in Open Negative Space */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(300)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-[#D9B45F]/60" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#D9B45F] uppercase">
                SIYARA INVITATION
              </span>
            </motion.div>

            {/* Master Headline */}
            <div className="mb-6">
              <h1 className="sr-only">LET'S BUILD SOMETHING WORTH BUILDING.</h1>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(450)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-[#F3EFE3]"
                aria-hidden="true"
              >
                LET'S BUILD
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(600)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-[#F3EFE3]"
                aria-hidden="true"
              >
                SOMETHING
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(750)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]"
                aria-hidden="true"
              >
                WORTH BUILDING.
              </motion.div>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(900)}
              className="mb-10 max-w-lg"
            >
              <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed">
                Tell us where you want to go. We'll help architect the digital system to get you there.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(1050)}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#intake"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#contact-direct"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#F3EFE3]/25 hover:border-[#D9B45F]/60 text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 group bg-[#070A09]/40 backdrop-blur-sm"
              >
                <span>BOOK A STRATEGY SESSION</span>
                <ArrowRight className="w-4 h-4 text-[#D9B45F] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Open space showcasing the background communication artwork */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4" />

        </div>
      </div>
    </section>
  );
}
