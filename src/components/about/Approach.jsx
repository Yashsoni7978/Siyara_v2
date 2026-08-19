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
    <section id="approach" className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Atmosphere */}
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
            OUR APPROACH
          </span>
          <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
        </motion.div>

        {/* Section Headline */}
        <div className="mb-20 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE4] font-normal leading-[1.08]"
          >
            A disciplined methodology for <span className="text-[#E5C378] italic">predictable growth.</span>
          </motion.h2>
        </div>

        {/* 6 Connected Steps Timeline (Horizontal Desktop / Vertical Mobile) */}
        <div className="relative pt-6 pb-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-[#D4AF37]/20" />
            <div
              className="h-full bg-[#D4AF37] transition-all duration-500 shadow-[0_0_12px_#D4AF37]"
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
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                          ? 'border-[#D4AF37] bg-[#063C2D] text-[#D4AF37] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                          : 'border-[#D4AF37]/30 bg-[#080B0A] text-[#CFC9BB]/70 group-hover:border-[#D4AF37]/60'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-mono text-[#D4AF37] font-medium tracking-widest mb-1">
                    {step.id}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[#E5C378]' : 'text-[#F3EFE4]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] text-[#CFC9BB]/80 font-light leading-relaxed max-w-[160px]">
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
