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
      description: 'We ask the right questions before building anything.',
      icon: Target,
    },
    {
      id: '02',
      title: 'CRAFT MATTERS',
      description: 'Design and development details make the difference.',
      icon: Sparkles,
    },
    {
      id: '03',
      title: 'BUILT FOR PERFORMANCE',
      description: 'Every project is built to deliver measurable results.',
      icon: Cpu,
    },
    {
      id: '04',
      title: 'GROW TOGETHER',
      description: 'Long-term partnership is at the heart of what we do.',
      icon: Handshake,
    },
  ];

  return (
    <section id="beliefs" className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Emerald Background Glow */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-75 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            OUR BELIEFS
          </span>
          <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
        </motion.div>

        {/* Intro Headline & Purpose Statement */}
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE4] font-normal leading-[1.08] mb-6"
          >
            We saw great businesses get lost in <span className="text-[#E5C378] italic">average digital experiences.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
            className="font-sans text-sm sm:text-base text-[#CFC9BB]/80 font-light leading-relaxed max-w-2xl"
          >
            We exist to help ambitious companies transcend visual noise with strategic clarity, high-performance technology, and enduring digital craft.
          </motion.p>
        </div>

        {/* 4 Belief Pillars in Open Editorial Layout with Thin Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          {beliefs.map((belief, idx) => {
            const Icon = belief.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={belief.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * idx, ease: easeCustom }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex flex-col justify-between py-6 lg:px-8 relative transition-all duration-300 ${
                  idx !== 0 ? 'lg:border-l lg:border-[#D4AF37]/20' : ''
                }`}
              >
                <div>
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border mb-8 transition-all duration-300 ${
                      isHovered
                        ? 'border-[#D4AF37] bg-[#063C2D] text-[#D4AF37] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                        : 'border-[#D4AF37]/30 bg-[#080B0A] text-[#19A878]'
                    }`}
                  >
                    <Icon className="w-6 h-6 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mb-3 transition-colors duration-300 ${
                      isHovered ? 'text-[#E5C378]' : 'text-[#F3EFE4]'
                    }`}
                  >
                    {belief.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed">
                    {belief.description}
                  </p>
                </div>

                {/* Subtle Active Base Line */}
                <div
                  className={`h-[1px] w-full mt-6 bg-gradient-to-r from-[#D4AF37] to-transparent transition-opacity duration-300 ${
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
