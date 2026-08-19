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
    <section className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-70 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
            06
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            The Problem
          </span>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE4] font-normal leading-[1.08] mb-4">
            Your business doesn't <br />
            need <span className="text-[#E5C378] italic">another website.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E5C378] uppercase">
            IT NEEDS A DIGITAL SYSTEM THAT PERFORMS.
          </p>
        </motion.div>

        {/* 5 Editorial Rows / Columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 border-t border-b border-[#D4AF37]/20 py-12"
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
                className={`flex flex-col justify-between lg:px-6 relative transition-all duration-300 ${
                  idx !== 0 ? 'lg:border-l lg:border-[#D4AF37]/20' : ''
                }`}
              >
                {/* Node Icon Container */}
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isHovered
                        ? 'border-[#D4AF37] bg-[#063C2D] text-[#D4AF37] scale-105 shadow-[0_0_16px_rgba(212,175,55,0.3)]'
                        : 'border-[#D4AF37]/30 bg-[#080B0A] text-[#19A878]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase mb-3 transition-colors duration-300 ${
                    isHovered ? 'text-[#E5C378]' : 'text-[#F3EFE4]'
                  }`}
                >
                  {problem.title}
                </h3>

                {/* Subtitle */}
                <p className="font-sans text-xs text-[#CFC9BB]/70 font-light leading-relaxed">
                  {problem.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
