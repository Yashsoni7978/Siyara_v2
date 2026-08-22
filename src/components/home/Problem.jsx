'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Monitor, BarChart3, Network, Settings } from 'lucide-react';

export default function Problem() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const problems = [
    {
      id: '01',
      title: 'WEAK POSITIONING',
      subtitle: 'Unclear brand message that fails to connect and convert.',
      icon: Target,
    },
    {
      id: '02',
      title: 'POOR DIGITAL EXPERIENCE',
      subtitle: 'Outdated websites that lose visitors and trust.',
      icon: Monitor,
    },
    {
      id: '03',
      title: 'LOW SEARCH VISIBILITY',
      subtitle: 'Hard to find, easy to ignore.',
      icon: BarChart3,
    },
    {
      id: '04',
      title: 'DISCONNECTED MARKETING',
      subtitle: 'Scattered channels, zero synergy, low ROI.',
      icon: Network,
    },
    {
      id: '05',
      title: 'MANUAL OPERATIONS',
      subtitle: 'Repetitive tasks that waste time and limit scalability.',
      icon: Settings,
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#F3EFE3] border-t border-[#101613]/08 overflow-hidden">
      {/* Subtle warm ivory atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8] to-[#F3EFE3] opacity-60 pointer-events-none" />
      {/* Ultra-faint emerald radial glow — editorial texture */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0B5E49]/04 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            06
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            The Problem
          </span>
        </motion.div>

        {/* Large dark editorial headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[0.98] mb-5">
            Your business doesn't <br />
            need <span className="text-[#0B5E49] italic font-normal">another website.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#B9923F] uppercase">
            IT NEEDS A DIGITAL SYSTEM THAT PERFORMS.
          </p>
        </motion.div>

        {/* 5 Problem Columns with thin ivory-appropriate separators */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 border-t border-b border-[#101613]/10 py-12"
        >
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={problem.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col lg:px-6 relative transition-all duration-300 ${
                  idx !== 0 ? 'lg:border-l lg:border-[#101613]/10' : ''
                } cursor-default`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isHovered
                        ? 'border-[#D5B15E] bg-[#071E18] text-[#D5B15E] scale-105 shadow-[0_0_16px_rgba(181,145,63,0.25)]'
                        : 'border-[#0B5E49]/20 bg-[#F3EFE3] text-[#0B5E49]'
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                </div>

                {/* Problem number */}
                <span className={`text-[10px] font-mono tracking-[0.2em] mb-2 transition-colors duration-300 ${isHovered ? 'text-[#D5B15E]' : 'text-[#B9923F]/70'}`}>
                  {problem.id}
                </span>

                {/* Title */}
                <h3
                  className={`font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase mb-3 transition-colors duration-300 ${
                    isHovered ? 'text-[#0B5E49]' : 'text-[#101613]'
                  }`}
                >
                  {problem.title}
                </h3>

                {/* Subtitle */}
                <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed">
                  {problem.subtitle}
                </p>

                {/* Soft emerald underline on hover */}
                <div className="mt-4 h-[1px] w-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-[#0B5E49] via-[#D5B15E] to-transparent transition-transform duration-500 origin-left ${
                      isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
