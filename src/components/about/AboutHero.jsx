'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Layout, Code, TrendingUp, ArrowDown } from 'lucide-react';

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
    <section className="relative min-h-[90svh] pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#070A09] text-[#F3EFE3] overflow-hidden flex items-center">
      {/* Obsidian Base Canvas */}
      <div className="absolute inset-0 bg-[#070A09] z-0" />

      {/* Deep Emerald Ambient Glow */}
      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#071E18]/50 via-[#0C6B52]/12 to-transparent blur-3xl rounded-full pointer-events-none z-[1]" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(250)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-[#D9B45F]/60" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#D9B45F] uppercase">
                ABOUT SIYARA
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6">
              <h1 className="sr-only">We combine creativity, technology and strategy to build digital experiences that drive growth.</h1>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(350)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-[#F3EFE3]"
                aria-hidden="true"
              >
                We combine
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(450)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-[#F3EFE3]"
                aria-hidden="true"
              >
                creativity, technology
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(550)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-[#F3EFE3]"
                aria-hidden="true"
              >
                and strategy to build
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(650)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-[#F3EFE3]"
                aria-hidden="true"
              >
                digital experiences
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(750)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26] italic font-normal"
                aria-hidden="true"
              >
                that drive growth.
              </motion.div>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(850)}
              className="mb-10 max-w-lg"
            >
              <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed">
                We are a digital architecture studio helping ambitious businesses build strong brands, powerful websites, improve visibility and scale with smart systems.
              </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(950)}
            >
              <a
                href="#story"
                className="inline-flex items-center gap-2.5 text-xs font-sans font-semibold tracking-[0.2em] text-[#F3EFE3] hover:text-[#D9B45F] uppercase transition-colors group"
              >
                <span>OUR STORY</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#D9B45F] group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Architectural Digital System Composition */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.5, ease: easeCustom }}
              className="relative w-full max-w-[420px] p-6 bg-[#071E18]/40 border border-[#D9B45F]/30 backdrop-blur-md overflow-hidden flex flex-col justify-between aspect-[4/4.5]"
            >
              {/* Background Linework & Glow Arc */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0C6B52]/20 blur-3xl pointer-events-none" />

              {/* Top Header Label */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D9B45F]/20 relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-[#D9B45F] uppercase">
                  SIYARA SYSTEM ARCHITECTURE
                </span>
                <span className="text-[9px] font-mono text-[#9D9B91]/60">EST. 2024</span>
              </div>

              {/* Floating Architectural System Nodes */}
              <div className="space-y-3 my-6 relative z-10">
                {[
                  { icon: Compass, title: 'CREATIVITY', copy: 'Editorial brand expression & art direction.', color: '#D9B45F' },
                  { icon: Code, title: 'TECHNOLOGY', copy: 'Clean, high-performance web engineering.', color: '#0C6B52' },
                  { icon: Layout, title: 'STRATEGY', copy: 'Systems-first positioning & growth roadmaps.', color: '#D9B45F' },
                  { icon: TrendingUp, title: 'GROWTH', copy: 'Conversion optimization & analytics intelligence.', color: '#0C6B52' },
                ].map((node) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.title}
                      className="p-3.5 bg-[#070A09]/80 border border-[#D9B45F]/20 flex items-center gap-3.5 group hover:border-[#D9B45F]/60 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full border border-[#D9B45F]/30 bg-[#071E18]/60 flex items-center justify-center text-[#D9B45F] shrink-0">
                        <Icon className="w-3.5 h-3.5 stroke-[1.75]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.16em] text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors block">
                          {node.title}
                        </span>
                        <span className="text-[10px] font-sans text-[#9D9B91] font-light leading-tight block">
                          {node.copy}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Footer Note */}
              <div className="pt-3 border-t border-[#D9B45F]/20 flex items-center justify-between text-[9px] font-mono text-[#9D9B91]/60 relative z-10">
                <span>01 · SYSTEM INTEGRATION</span>
                <span className="text-[#D9B45F]">✦ CONNECTED</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
