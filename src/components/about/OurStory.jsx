'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section id="story" className="relative py-16 sm:py-20 bg-[#F3EFE3] text-[#101613] overflow-hidden">
      {/* Ivory Editorial Background */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-80 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            02
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            THE ORIGIN
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Story Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.08] tracking-tight text-[#101613] mb-8"
            >
              Siyara Innovations was born out of a simple belief that great businesses deserve a digital presence that <span className="font-serif text-[#0B5E49]">truly</span> represents them.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="flex flex-col gap-5 max-w-lg text-base font-sans text-[#101613]/70 leading-relaxed font-light"
            >
              <p>
                We saw brands losing customers to competitors with better websites, better visibility and better strategy. We started Siyara to change that.
              </p>
              <p>
                Today, we partner with businesses to build digital experiences that are not just beautiful, but built to perform, convert and grow.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Asymmetric Editorial Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="relative grid grid-cols-12 items-center">
                
                {/* Main Dark Studio Environment Image */}
                <div className="col-start-1 col-end-10 row-start-1 relative z-10 bg-[#070A09] border border-[#B9923F]/30 p-1 shadow-xl">
                  <div className="relative aspect-[4/5] sm:aspect-[4/4.5] overflow-hidden bg-[#071E18]">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                      alt="Siyara Studio workspace"
                      className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A09]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-[10px] font-sans text-[#D9B45F] tracking-widest uppercase">
                      SIYARA WORKSPACE
                    </div>
                  </div>
                </div>

                {/* Layered Deep Emerald Card with Gold "S" Watermark (Overlapping) */}
                <div className="col-start-7 col-end-13 row-start-1 mt-32 relative z-20 bg-[#071E18] border border-[#D9B45F]/40 p-6 sm:p-8 shadow-[0_20px_40px_rgba(7,10,9,0.5)] flex flex-col justify-between aspect-square hover:-translate-y-2 transition-transform duration-500">
                  <div className="font-serif text-6xl text-[#D9B45F] opacity-40 font-bold leading-none">
                    S
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-sans text-[#F3EFE3] tracking-widest uppercase mb-1">
                      SIYARA✦
                    </div>
                    <div className="text-[9px] font-sans text-[#D9B45F] tracking-widest uppercase font-semibold">
                      DIGITAL STUDIO
                    </div>
                  </div>
                </div>

              </div>

              {/* Gold Script Callout "Built Different." at bottom right */}
              <div className="absolute -bottom-6 right-4 z-30 font-serif text-4xl sm:text-5xl text-[#B9923F] tracking-wide pointer-events-none">
                Built Different.
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
