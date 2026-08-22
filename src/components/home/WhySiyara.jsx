'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, TrendingUp } from 'lucide-react';

export default function WhySiyara() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const principles = [
    {
      id: '01',
      title: 'STRATEGY FIRST',
      description: 'Every solution is built on research, insight and a clear strategy.',
      icon: Target,
    },
    {
      id: '02',
      title: 'ONE TEAM',
      description: 'Designers, developers, marketers and strategists under one roof.',
      icon: Users,
    },
    {
      id: '03',
      title: 'BUILT TO PERFORM',
      description: 'We build fast, secure and conversion-focused digital experiences.',
      icon: ShieldCheck,
    },
    {
      id: '04',
      title: 'LONG-TERM GROWTH',
      description: "We don't just launch. We optimize and grow with you.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#F3EFE3] overflow-hidden">
      {/* Ivory editorial texture */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            04
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Why Siyara
          </span>
        </motion.div>

        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Large Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 pr-0 lg:pr-6"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101613] font-normal leading-[0.98] mb-6">
              We think in systems, <br />
              not <span className="text-[#0C6B52] italic font-normal">services.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#9D9B91] font-light leading-relaxed max-w-md">
              Strategy, design and engineering work as one connected system here, not three vendors stitched together after the fact.
            </p>
          </motion.div>

          {/* Right Column: 4 Principles arranged horizontally with thin vertical dividers */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative"
            >
              {principles.map((item, idx) => {
                const Icon = item.icon;
                const isHovered = hoveredIdx === idx;

                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`flex flex-col justify-between py-4 lg:px-6 relative transition-all duration-300 ${
                      idx !== 0 ? 'lg:border-l lg:border-[#101613]/12' : ''
                    } ${isHovered ? 'translate-y-[-3px]' : ''}`}
                  >
                    <div>
                      {/* Principle Icon Container */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border mb-6 transition-all duration-300 ${
                          isHovered
                            ? 'border-[#D9B45F] bg-[#071E18] text-[#D9B45F] scale-105 shadow-[0_0_15px_rgba(7,30,24,0.2)]'
                            : 'border-[#0C6B52]/20 bg-[#F3EFE3] text-[#0C6B52]'
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-3 transition-colors duration-300 ${
                          isHovered ? 'text-[#0C6B52]' : 'text-[#101613]'
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
