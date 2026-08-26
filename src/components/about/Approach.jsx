import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Edit3, Code, Rocket, TrendingUp } from 'lucide-react';

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);
  const easeCustom = [0.16, 1, 0.3, 1];

  const steps = [
    {
      id: '01',
      title: 'DISCOVER',
      description: 'Understand your brand, the market and your audience.',
      icon: Search,
    },
    {
      id: '02',
      title: 'STRATEGIZE',
      description: 'Build the right plan with clear goals and direction.',
      icon: Compass,
    },
    {
      id: '03',
      title: 'DESIGN',
      description: 'Create meaningful experiences that connect.',
      icon: Edit3,
    },
    {
      id: '04',
      title: 'DEVELOP',
      description: 'Build with clean code, performance and scalability.',
      icon: Code,
    },
    {
      id: '05',
      title: 'LAUNCH',
      description: 'Deploy with confidence and a focus on outcomes.',
      icon: Rocket,
    },
    {
      id: '06',
      title: 'GROW',
      description: 'Optimize, scale and drive continuous growth.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="approach" className="relative py-16 sm:py-20 bg-[#070A09] text-[#F3EFE3] overflow-hidden">
      {/* Deep Emerald Background Haze */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09] via-[#071E18]/40 to-[#070A09] opacity-90 pointer-events-none" />
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            05
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            METHODOLOGY
          </span>
        </motion.div>

        {/* Section Headline */}
        <div className="mb-20 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE3] font-normal leading-[1.04]"
          >
            A disciplined methodology for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26] font-normal">predictable growth.</span>
          </motion.h2>
        </div>

        {/* 6 Connected Steps Timeline (Horizontal Desktop / Vertical Mobile) */}
        <div className="relative pt-6 pb-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-[1px] z-0">
            <div className="w-full h-full bg-[#D9B45F]/20" />
            <div
              className="h-full bg-[#D9B45F] transition-all duration-500 shadow-[0_0_8px_#D9B45F]"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* 6 Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.08 * idx, ease: easeCustom }}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Node Circle Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'border-[#D9B45F] bg-[#071E18] text-[#D9B45F] scale-105 shadow-[0_0_20px_rgba(217,180,95,0.3)]'
                          : 'border-[#D9B45F]/30 bg-[#070A09] text-[#9D9B91] group-hover:border-[#D9B45F]/60'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-sans text-[#D9B45F] font-bold tracking-widest mb-1">
                    {step.id}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs font-bold tracking-[0.18em] uppercase mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[#D9B45F]' : 'text-[#F3EFE3]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
