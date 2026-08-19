import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Hero() {
  // Animation variants
  const easeCustom = [0.16, 1, 0.3, 1];

  const fadeUp = (delay) => ({
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay / 1000, ease: easeCustom },
    },
  });

  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#080B0A] overflow-hidden flex items-center">
      {/* Background Atmospheric Layers */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-90 pointer-events-none" />
      
      {/* Organic Flowing SVG Background Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none stroke-[#D4AF37]/30 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100 200 C 300 50, 700 450, 1500 100 S 1800 600, 2200 400"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />
        <path
          d="M -50 400 C 400 600, 900 100, 1600 500"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="15%" cy="35%" r="1" fill="#D4AF37" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="85%" cy="65%" r="1.5" fill="#19A878" />
        <circle cx="45%" cy="75%" r="1" fill="#D4AF37" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(250)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
                01
              </span>
              <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                Digital Experiences That Drive Real Results
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="mb-8">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(400)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                WE BUILD
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(500)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                BRANDS.
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(650)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#E5C378] italic"
              >
                THAT DOMINATE.
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(800)}
              className="mb-10 max-w-lg"
            >
              <p className="font-sans text-base sm:text-lg text-[#CFC9BB] leading-relaxed font-light">
                Strategy. Design. Technology.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#CFC9BB] leading-relaxed font-light">
                Everything you need to grow online.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(950)}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-xl shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/25 hover:translate-y-[-2px]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-4 border-b border-[#D4AF37]/40 text-[#F3EFE4] hover:text-[#D4AF37] text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 group"
              >
                <span>VIEW OUR WORK</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Realistic Premium Web Mockup (Matching Reference Image 1) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.0, ease: easeCustom }}
              className="relative mx-auto max-w-2xl lg:max-w-none"
            >
              {/* Laptop Shell Outer Shadow & Atmosphere Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#063C2D]/40 via-[#19A878]/10 to-transparent blur-2xl opacity-60 rounded-3xl" />

              {/* Laptop Computer Display */}
              <div className="relative rounded-t-2xl bg-[#121615] border border-[#D4AF37]/30 p-2 sm:p-3 shadow-2xl overflow-hidden">
                {/* Laptop Camera / Bezel Top */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-[#0A0D0C] rounded-t-xl border-b border-white/5 mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                  </div>
                  <div className="text-[10px] font-mono text-[#CFC9BB]/50 tracking-wider">
                    luxe-habitat.siyara.dev
                  </div>
                  <div className="w-8" />
                </div>

                {/* Laptop Web Presentation Content (Live Agency Client Mockup) */}
                <div className="relative bg-[#0A0D0C] rounded-lg overflow-hidden border border-white/5 aspect-[16/10] sm:aspect-[16/9.5]">
                  {/* Background Mockup Image with Dark Luxury Architecture & Emerald Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080B0A] via-[#080B0A]/80 to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                    alt="Luxe Habitat Portfolio Presentation"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-[#080B0A]/60 z-10" />

                  {/* Mockup Website Header Bar */}
                  <div className="relative z-20 flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#F3EFE4]">
                      LUXE HABITAT
                    </span>
                    <div className="hidden sm:flex items-center gap-4 text-[8px] font-medium tracking-[0.16em] text-[#CFC9BB]">
                      <span>HOME</span>
                      <span>PROJECTS</span>
                      <span>ABOUT</span>
                      <span>CONTACT</span>
                    </div>
                  </div>

                  {/* Mockup Hero Web Screen Content */}
                  <div className="relative z-20 p-6 sm:p-8 flex flex-col justify-center h-[calc(100%-45px)] max-w-sm">
                    <span className="text-[9px] font-sans tracking-[0.2em] text-[#D4AF37] uppercase mb-2">
                      Architecture & Interiors
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE4] leading-tight mb-3">
                      Luxury <br />
                      Web Experiences <br />
                      <span className="text-[#E5C378] italic">That Convert.</span>
                    </h3>
                    <p className="text-[10px] text-[#CFC9BB]/80 font-light leading-relaxed mb-4">
                      Premium websites that elevate brands and drive results.
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[8px] font-semibold tracking-widest uppercase w-fit">
                      VIEW PROJECT
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Stand / Base */}
              <div className="h-3 sm:h-4 bg-gradient-to-b from-[#202523] to-[#0A0D0C] rounded-b-xl border-x border-b border-white/10 shadow-2xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-1 bg-[#121615] rounded-b-md" />
              </div>

              {/* Overlay Mobile Device Screen (Right Edge Floating Mockup) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-3 sm:-right-6 -bottom-6 w-32 sm:w-44 bg-[#0A0D0C] border border-[#D4AF37]/40 rounded-2xl p-1.5 shadow-2xl z-30"
              >
                <div className="relative bg-[#080B0A] rounded-xl overflow-hidden aspect-[9/16] border border-white/10 p-3 flex flex-col justify-between">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                    alt="Mobile Mockup"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-[7px] font-bold tracking-widest text-[#F3EFE4]">LUXE HABITAT</span>
                    <span className="text-[8px] text-[#D4AF37]">≡</span>
                  </div>
                  <div className="relative z-10 my-auto">
                    <h4 className="font-serif text-xs text-[#F3EFE4] leading-tight mb-1">
                      Luxury Web <br />
                      Experiences <br />
                      <span className="text-[#E5C378]">That Convert.</span>
                    </h4>
                    <p className="text-[7px] text-[#CFC9BB]/70 line-clamp-2">
                      Premium websites that elevate brands.
                    </p>
                  </div>
                  <div className="relative z-10 pt-2">
                    <div className="px-2 py-1 bg-[#D4AF37] text-[#080B0A] text-[6px] font-bold text-center tracking-widest uppercase">
                      VIEW PROJECT
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
