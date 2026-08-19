import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Layout, TrendingUp, Compass } from 'lucide-react';

export default function AboutHero() {
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
      {/* Emerald Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-90 pointer-events-none" />

      {/* Atmospheric Linework SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none stroke-[#D4AF37]/30 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -100 250 C 300 100, 700 500, 1500 150 S 1900 700, 2200 450" strokeWidth="1.2" strokeDasharray="4 8" />
        <circle cx="20%" cy="30%" r="1.5" fill="#D4AF37" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="80%" cy="70%" r="2" fill="#19A878" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(250)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                ABOUT US
              </span>
              <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
            </motion.div>

            {/* Main Headline */}
            <div className="mb-8">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(350)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[1.05] tracking-tight text-[#F3EFE4]"
              >
                We combine
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(450)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[1.05] tracking-tight text-[#F3EFE4]"
              >
                creativity, technology
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(550)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[1.05] tracking-tight text-[#F3EFE4]"
              >
                and strategy to build
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(650)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[1.05] tracking-tight text-[#F3EFE4]"
              >
                digital experiences
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(750)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[1.05] tracking-tight text-[#E5C378] italic"
              >
                that drive growth.
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp(850)}
              className="font-sans text-sm sm:text-base text-[#CFC9BB] font-light leading-relaxed mb-10 max-w-lg"
            >
              We are a digital agency helping ambitious businesses build strong brands, powerful websites, improve visibility and scale with smart systems.
            </motion.p>

            {/* CTA Link */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(950)}
            >
              <a
                href="#story"
                className="inline-flex items-center gap-2.5 text-xs font-sans font-semibold tracking-[0.2em] text-[#F3EFE4] hover:text-[#D4AF37] uppercase transition-colors group"
              >
                <span>OUR STORY</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Sophisticated Digital Agency Interface & Architecture Visual */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.8, ease: easeCustom }}
              className="relative mx-auto max-w-xl lg:max-w-none"
            >
              {/* Atmosphere Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#063C2D]/50 via-[#19A878]/15 to-transparent blur-2xl opacity-70 rounded-3xl" />

              {/* Digital Platform Mockup Container */}
              <div className="relative rounded-2xl bg-[#0A0D0C] border border-[#D4AF37]/35 p-3 sm:p-4 shadow-2xl overflow-hidden">
                
                {/* Interface Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#080B0A] rounded-xl border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                  </div>
                  <div className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">
                    siyara.digital // agency ecosystem
                  </div>
                  <div className="text-[9px] font-mono text-[#CFC9BB]/40">v2.4</div>
                </div>

                {/* Inner Screen Display with Layered Interfaces & Node Callouts */}
                <div className="relative bg-[#080B0A] rounded-xl overflow-hidden aspect-[16/11] border border-white/5 p-6 flex flex-col justify-between">
                  {/* Background Luxury Architectural & Tech Visual Metaphor */}
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Siyara Digital Architecture"
                    className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#080B0A] via-[#080B0A]/80 to-transparent" />

                  {/* Golden Vector Flow Lines Connecting Digital Pillars */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M 50 180 C 150 120, 250 220, 380 90"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="opacity-70"
                    />
                    <circle cx="50" cy="180" r="4" fill="#D4AF37" />
                    <circle cx="380" cy="90" r="4" fill="#E5C378" />
                  </svg>

                  {/* Node Callouts matching reference design (DESIGN, STRATEGY, TECHNOLOGY, GROWTH) */}
                  <div className="relative z-20 grid grid-cols-2 gap-4">
                    {/* STRATEGY Node */}
                    <div className="p-3 bg-[#0A0D0C]/90 border border-[#D4AF37]/40 rounded-lg backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-1">
                        <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="text-[9px] font-mono tracking-widest text-[#E5C378] uppercase font-bold">
                          STRATEGY
                        </span>
                      </div>
                      <p className="text-[9px] text-[#CFC9BB]/80 font-light leading-tight">
                        We start with the right plan.
                      </p>
                    </div>

                    {/* DESIGN Node */}
                    <div className="p-3 bg-[#0A0D0C]/90 border border-[#D4AF37]/40 rounded-lg backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-1">
                        <Layout className="w-3.5 h-3.5 text-[#19A878]" />
                        <span className="text-[9px] font-mono tracking-widest text-[#E5C378] uppercase font-bold">
                          DESIGN
                        </span>
                      </div>
                      <p className="text-[9px] text-[#CFC9BB]/80 font-light leading-tight">
                        We craft experiences people love.
                      </p>
                    </div>
                  </div>

                  {/* Center Agency Headline Card */}
                  <div className="relative z-20 my-auto py-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#063C2D]/80 border border-[#D4AF37]/40 text-[#D4AF37] text-[8px] font-mono tracking-widest uppercase mb-2">
                      ✦ DIGITAL GROWTH PARTNER
                    </div>
                    <h3 className="font-serif text-2xl text-[#F3EFE4] leading-tight">
                      Architecting High-Performance <br />
                      <span className="text-[#E5C378] italic">Digital Brands.</span>
                    </h3>
                  </div>

                  {/* Bottom Nodes (TECHNOLOGY & GROWTH) */}
                  <div className="relative z-20 grid grid-cols-2 gap-4">
                    {/* TECHNOLOGY Node */}
                    <div className="p-3 bg-[#0A0D0C]/90 border border-[#D4AF37]/40 rounded-lg backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-1">
                        <Code className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="text-[9px] font-mono tracking-widest text-[#E5C378] uppercase font-bold">
                          TECHNOLOGY
                        </span>
                      </div>
                      <p className="text-[9px] text-[#CFC9BB]/80 font-light leading-tight">
                        Fast, secure and scalable.
                      </p>
                    </div>

                    {/* GROWTH Node */}
                    <div className="p-3 bg-[#0A0D0C]/90 border border-[#D4AF37]/40 rounded-lg backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#19A878]" />
                        <span className="text-[9px] font-mono tracking-widest text-[#E5C378] uppercase font-bold">
                          GROWTH
                        </span>
                      </div>
                      <p className="text-[9px] text-[#CFC9BB]/80 font-light leading-tight">
                        We optimize and help you grow.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
