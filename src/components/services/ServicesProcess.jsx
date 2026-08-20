import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServicesProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const easeCustom = [0.16, 1, 0.3, 1];

  const steps = [
    {
      id: '01',
      title: 'DISCOVER',
      description: 'Understanding your brand, market positioning, audience, and growth targets.',
    },
    {
      id: '02',
      title: 'STRATEGIZE',
      description: 'Data-backed strategy, system architecture, and clear growth direction.',
    },
    {
      id: '03',
      title: 'DESIGN',
      description: 'Bespoke UI/UX, visual identity systems, and high-trust editorial aesthetics.',
    },
    {
      id: '04',
      title: 'BUILD',
      description: 'High-performance web engineering, clean code, and scalable architecture.',
    },
    {
      id: '05',
      title: 'LAUNCH',
      description: 'Rigorous QA testing, GEO AI search setup, and flawless deployment.',
    },
    {
      id: '06',
      title: 'OPTIMIZE',
      description: 'Continuous CRO, analytics tracking, performance tuning, and lead scaling.',
    },
  ];

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#F3EFE3] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            04
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            How We Execute
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[0.98]">
            FROM STRATEGY <br />
            <span className="text-[#0B5E49] italic font-normal">TO EXECUTION.</span>
          </h2>
        </motion.div>

        {/* 6 Connected Steps Grid */}
        <div className="relative pt-6 pb-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-[#B9923F]/25" />
            <div
              className="h-full bg-[#0B5E49] transition-all duration-500 shadow-[0_0_12px_#0B5E49]"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Number */}
                  <div className="font-serif text-3xl sm:text-4xl text-[#B9923F] font-normal mb-3">
                    {step.id}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[#0B5E49]' : 'text-[#101613]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] text-[#101613]/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

