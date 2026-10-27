'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, Cpu, Handshake } from 'lucide-react';

export default function Beliefs() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const easeCustom = [0.16, 1, 0.3, 1];

  const beliefs = [
    {
      id: '01',
      title: 'STRATEGY FIRST',
      description: 'We ask the right questions about your business and your market before we build anything.',
      icon: Target,
    },
    {
      id: '02',
      title: 'CRAFT MATTERS',
      description: 'Every design and development decision is made deliberately - nothing is left to a template default.',
      icon: Sparkles,
    },
    {
      id: '03',
      title: 'BUILT FOR PERFORMANCE',
      description: 'Every project is measured against real outcomes: speed, visibility, and conversion.',
      icon: Cpu,
    },
    {
      id: '04',
      title: 'GROW TOGETHER',
      description: 'We stay involved after launch - this is a partnership, not a handoff.',
      icon: Handshake,
    },
  ];

  return (
    <section id="beliefs" className="relative py-16 sm:py-20 bg-[#070A09] text-[#F3EFE3] overflow-hidden">
      {/* Deep Emerald Background Haze */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09] via-[#071E18]/40 to-[#070A09] opacity-90 pointer-events-none" />
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.5, ease: easeCustom }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            03
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            PHILOSOPHY & BELIEFS
          </span>
        </motion.div>

        {/* Intro Headline & Purpose Statement */}
        <div className="mb-12 sm:mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.6, ease: easeCustom }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F3EFE3] font-normal leading-[1.08] sm:leading-[1.04] mb-4 sm:mb-6 break-words"
          >
            We saw great Jaipur businesses get lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26] font-normal">disconnected digital experiences.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: easeCustom }}
            className="font-sans text-sm sm:text-base lg:text-lg text-[#9D9B91] font-light leading-relaxed max-w-2xl"
          >
             We exist to help Jaipur businesses cut through visual noise with clear strategy, high-performance technology, and work built to last.
          </motion.p>
        </div>

        {/* 4 Belief Pillars in Open Editorial Layout with Thin Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 relative border-t border-[#D9B45F]/20 pt-8 sm:pt-12">
          {beliefs.map((belief, idx) => {
            const Icon = belief.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={belief.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '80px 0px' }}
                transition={{ duration: 0.5, delay: 0.04 * idx, ease: easeCustom }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex flex-col justify-between p-5 sm:p-6 lg:p-0 lg:py-6 lg:px-8 rounded-xl lg:rounded-none bg-[#071E18]/20 lg:bg-transparent border border-[#D9B45F]/15 lg:border-none relative transition-all duration-300 ${
                  idx !== 0 ? 'lg:border-l lg:border-[#D9B45F]/20' : ''
                }`}
              >
                <div>
                  {/* Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border mb-8 transition-all duration-300 ${
                      isHovered
                        ? 'border-[#D9B45F] bg-[#071E18] text-[#D9B45F] scale-105 shadow-[0_0_20px_rgba(217,180,95,0.25)]'
                        : 'border-[#D9B45F]/30 bg-[#070A09] text-[#D9B45F]'
                    }`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-3 transition-colors duration-300 ${
                      isHovered ? 'text-[#D9B45F]' : 'text-[#F3EFE3]'
                    }`}
                  >
                    {belief.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed">
                    {belief.description}
                  </p>
                </div>

                {/* Subtle Active Base Line */}
                <div
                  className={`h-[1px] w-full mt-6 bg-gradient-to-r from-[#D9B45F] to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
