'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);
    setMousePos({
      x: Math.max(-1, Math.min(1, normX)),
      y: Math.max(-1, Math.min(1, normY)),
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

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
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90svh] pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#070A09] text-[#F3EFE3] overflow-hidden flex items-center"
    >
      {/* Obsidian Black Canvas */}
      <div className="absolute inset-0 bg-[#070A09] z-0" />

      {/* Deep Emerald Ambient Glow Sphere (Quiet & Subdued) */}
      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#071E18]/40 via-[#0C6B52]/10 to-transparent blur-3xl rounded-full pointer-events-none z-[1]" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Dominant Editorial Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            
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

          {/* RIGHT COLUMN: Refined Quiet Miniature Siyara Orbital Constellation Visual (~30-35% width) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: easeCustom }}
              style={{
                transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 6}px, 0)`,
                transition: 'transform 0.3s ease-out',
              }}
              className="relative w-full max-w-[360px] aspect-square flex items-center justify-center p-4"
            >
              {/* Outer Subtle Orbital Ring 1 */}
              <div className="absolute inset-2 rounded-full border border-[#D9B45F]/20 pointer-events-none" />

              {/* Outer Subtle Orbital Ring 2 */}
              <div className="absolute inset-10 rounded-full border border-[#0C6B52]/30 pointer-events-none" />

              {/* Outer Orbital Ring 3 with dashes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 360 360">
                <circle cx="180" cy="180" r="160" fill="none" stroke="#D9B45F" strokeWidth="0.75" strokeDasharray="3 9" opacity="0.35" />
                <circle cx="180" cy="180" r="120" fill="none" stroke="#0C6B52" strokeWidth="0.75" opacity="0.4" />
                
                {/* Emerald energy arc thread */}
                <path d="M 60 180 A 120 120 0 0 1 300 180" fill="none" stroke="#0C6B52" strokeWidth="1.5" opacity="0.7" />
                
                {/* Node Points representing System, Design, Growth */}
                <circle cx="60" cy="180" r="3.5" fill="#D9B45F" />
                <circle cx="300" cy="180" r="3.5" fill="#D9B45F" />
                <circle cx="180" cy="60" r="3" fill="#0C6B52" />
                <circle cx="180" cy="300" r="3" fill="#D9B45F" />
              </svg>

              {/* Central Core Element: IDEA Node */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-[#070A09] border border-[#D9B45F]/60 shadow-[0_0_30px_rgba(217,180,95,0.2)] flex flex-col items-center justify-center text-center p-2">
                <div className="w-2 h-2 rounded-full bg-[#D9B45F] shadow-[0_0_10px_#D9B45F] mb-1 animate-pulse" />
                <span className="text-[9px] font-sans tracking-[0.2em] text-[#D9B45F] uppercase font-bold">
                  IDEA
                </span>
                <span className="text-[8px] font-sans tracking-[0.14em] text-[#9D9B91] uppercase">
                  SYSTEM
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
