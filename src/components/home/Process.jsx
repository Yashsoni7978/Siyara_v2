'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Edit3, Code, Rocket, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      title: 'DISCOVER',
      description: 'We understand your business, goals and challenges.',
      icon: Search,
    },
    {
      id: '02',
      title: 'STRATEGIZE',
      description: 'Research, analysis and data-driven strategy that creates impact.',
      icon: Compass,
    },
    {
      id: '03',
      title: 'DESIGN',
      description: 'Creative UI/UX and visual design that reflects your brand.',
      icon: Edit3,
    },
    {
      id: '04',
      title: 'DEVELOP',
      description: 'Clean code, fast performance and scalable development.',
      icon: Code,
    },
    {
      id: '05',
      title: 'LAUNCH',
      description: 'Testing, optimization and launching with perfection.',
      icon: Rocket,
    },
    {
      id: '06',
      title: 'GROW',
      description: 'Continuous optimization and growth that maximizes ROI.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process" className="relative py-16 sm:py-20 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071E18]/50 via-[#070A09] to-[#070A09] opacity-80 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            05
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            How We Work
          </span>
        </motion.div>

        {/* Section Headline & Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[0.98] mb-4">
              Our proven 6-step <br />
              process to <span className="text-[#D9B45F] font-normal">success.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#9D9B91] font-light max-w-lg leading-relaxed">
              A structured approach that ensures clarity, quality and measurable results at every step.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex lg:justify-end"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 border border-[#D9B45F] bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-lg group rounded-full"
            >
              <span>VIEW DETAILED PROCESS</span>
              <ArrowUpRight className="w-4 h-4 text-[#101613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Timeline Node Flow (Horizontal Desktop / Vertical Mobile) */}
        <div className="relative pt-6 pb-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-[#071E18]" />
            <motion.div
              className="h-full bg-[#D9B45F] shadow-[0_0_10px_#D9B45F]"
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          {/* 6 Stages Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;

              return (
                <motion.div
                  key={step.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Node Circle */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'border-[#D9B45F] bg-[#071E18] text-[#D9B45F] scale-110 shadow-[0_0_20px_rgba(24,169,130,0.4)]'
                          : 'border-[#D9B45F]/30 bg-[#070A09] text-[#9D9B91] group-hover:border-[#D9B45F]/60'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-sans text-[#D9B45F] font-medium tracking-widest mb-1">
                    {step.id}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[#D9B45F]' : 'text-[#F3EFE3]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] text-[#9D9B91] font-light leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
