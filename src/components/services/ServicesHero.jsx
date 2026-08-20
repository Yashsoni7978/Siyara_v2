import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react';

export default function ServicesHero() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#070A09] border-b border-[#D9B45F]/15 overflow-hidden flex items-center">
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E18]/60 via-[#070A09] to-[#070A09] opacity-90 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      {/* Abstract Gold & Emerald Linework SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none stroke-[#D9B45F]/20 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -100 200 C 300 50, 700 450, 1500 100 S 1800 600, 2200 400" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="25%" cy="35%" r="2" fill="#0C6B52" className="animate-pulse" />
        <circle cx="75%" cy="65%" r="2" fill="#D9B45F" />
      </svg>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeCustom }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D9B45F]">
                01
              </span>
              <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
                Digital Architecture / Services
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="mb-8"
            >
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F3EFE3] font-normal leading-[0.98] tracking-tight">
                WE BUILD THE <br />
                SYSTEMS BEHIND <br />
                <span className="text-[#D9B45F] italic font-normal">DIGITAL GROWTH.</span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed mb-10 max-w-xl"
            >
              Siyara combines strategy, brand positioning, web engineering, organic search, marketing, and business automation into one interconnected digital growth system.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 group"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#101613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#services-index"
                className="inline-flex items-center gap-2.5 px-7 py-4 border border-[#D9B45F]/40 hover:border-[#D9B45F] bg-[#071E18]/60 hover:bg-[#071E18] text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-lg"
              >
                <Compass className="w-4 h-4 text-[#D9B45F]" />
                <span>EXPLORE OUR CAPABILITIES</span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Refined Architectural Geometry System */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeCustom }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Emerald Glow Layer */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#071E18] via-[#0C6B52]/20 to-transparent blur-2xl opacity-60 rounded-3xl" />

              {/* Portal Architectural Frame */}
              <div className="relative rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-[#071E18]/80 via-[#070A09] to-[#070A09] border border-[#D9B45F]/30 p-8 sm:p-10 shadow-2xl overflow-hidden aspect-[4/5] flex flex-col items-center justify-center text-center">
                
                {/* Inner Contour Linework */}
                <div className="absolute inset-4 rounded-t-[124px] rounded-b-xl border border-[#D9B45F]/20 pointer-events-none" />

                {/* Siyara Central Crystalline Node */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#D9B45F]/50 bg-[#070A09]/90 backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(217,180,95,0.25)]">
                  <div className="absolute inset-2 rounded-full border border-[#0C6B52]/40 animate-pulse" />
                  <span className="text-[#D9B45F] text-4xl sm:text-5xl font-serif">✦</span>
                </div>

                {/* Digital System Label & Copy */}
                <div className="relative z-10 max-w-xs">
                  <span className="text-[10px] font-mono tracking-[0.24em] text-[#D9B45F] uppercase mb-2 block font-bold">
                    THE CONNECTED SYSTEM
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE3] leading-tight font-normal mb-3">
                    Branding, Web, Search & <br />
                    <span className="text-[#D9B45F] italic font-normal">Growth Engine.</span>
                  </h3>
                  <p className="text-[11px] font-sans text-[#9D9B91] font-light leading-relaxed">
                    Strategy, Design, Code, Visibility, Conversion & Automation combined.
                  </p>
                </div>

                {/* Structural Accent Text */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[9px] font-mono text-[#D9B45F]/70 tracking-widest uppercase">
                  <span>SIYARA</span>
                  <span>✦</span>
                  <span>CAPABILITIES</span>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

