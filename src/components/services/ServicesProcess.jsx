import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServicesProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const easeCustom = [0.16, 1, 0.3, 1];

  const steps = [
    {
      id: '01',
      title: 'DISCOVER',
      description: 'We understand your brand, market and goals.',
    },
    {
      id: '02',
      title: 'STRATEGIZE',
      description: 'We build the right plan with clear direction.',
    },
    {
      id: '03',
      title: 'DESIGN',
      description: 'We create experiences that connect.',
    },
    {
      id: '04',
      title: 'DEVELOP',
      description: 'We build with precision, performance and scalability.',
    },
    {
      id: '05',
      title: 'LAUNCH',
      description: 'We launch with confidence and attention to detail.',
    },
    {
      id: '06',
      title: 'GROW',
      description: 'We optimize, automate and scale continuously.',
    },
  ];

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
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
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#19A878] uppercase">
            OUR PROCESS
          </span>
          <span className="h-[1px] w-8 bg-[#19A878]/50" />
        </motion.div>

        {/* 6 Connected Steps Grid */}
        <div className="relative pt-6 pb-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-[#19A878]/20" />
            <div
              className="h-full bg-[#19A878] transition-all duration-500 shadow-[0_0_12px_#19A878]"
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
                  <div className="font-serif text-3xl sm:text-4xl text-[#19A878] font-normal mb-3">
                    {step.id}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs font-bold tracking-[0.18em] uppercase mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[#E5C378]' : 'text-[#F3EFE4]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] text-[#CFC9BB]/75 font-light leading-relaxed">
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
