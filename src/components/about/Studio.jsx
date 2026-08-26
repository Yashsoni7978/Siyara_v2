'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Studio() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section id="studio" className="relative py-16 sm:py-20 bg-[#070A09] text-[#F3EFE3] overflow-hidden">
      {/* Deep Emerald Background Haze */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09] via-[#071E18]/40 to-[#070A09] opacity-90 pointer-events-none" />
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            06
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            ROOTED IN JAIPUR
          </span>
        </motion.div>

        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Ambient Studio / Workspace Photo */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: easeCustom }}
              className="relative bg-[#071E18] border border-[#D9B45F]/30 p-1 shadow-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
                  alt="Siyara Digital Architecture Studio workspace"
                  className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#070A09] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-sans text-[#D9B45F] tracking-widest uppercase bg-[#070A09]/80 px-3 py-1.5 border border-[#D9B45F]/30 backdrop-blur-md">
                  <MapPin className="w-3 h-3 text-[#D9B45F]" />
                  <span>JAIPUR STUDIO HEADQUARTERS</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Copy + Map Node */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE3] font-normal leading-[1.04] mb-6"
            >
              Rooted in Jaipur. <br />
              Driven by innovation. <br />
              Focused on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26] font-normal">impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed mb-10 max-w-lg"
            >
              We are a team of strategists, designers, developers and growth experts who love building digital experiences that make a difference.
            </motion.p>

            {/* Location Map Marker Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
              className="p-6 bg-[#071E18]/50 border border-[#D9B45F]/30 relative overflow-hidden flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#D9B45F]" />
                  <span className="text-xs font-sans font-bold text-[#D9B45F] tracking-widest uppercase">
                    JAIPUR, INDIA
                  </span>
                </div>
                <p className="text-xs font-sans text-[#9D9B91] font-light">
                  Studio Headquarters & Creative Hub
                </p>
              </div>

              <div className="hidden sm:block">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D9B45F] animate-ping" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
