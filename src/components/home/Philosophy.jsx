'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Philosophy() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            03
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            Our Philosophy
          </span>
        </motion.div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Manifesto Headline & Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#F3EFE3] font-normal leading-[1.08] sm:leading-[0.98] tracking-tight mb-6 sm:mb-8 uppercase break-words">
              ELEVATING BRANDS <br />
              THROUGH <br />
              <span className="text-[#D9B45F] font-normal">DIGITAL ARCHITECTURE.</span>
            </h2>

            <div className="max-w-md mb-6 sm:mb-8">
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#9D9B91] font-light leading-relaxed mb-1">
                Beautiful design is where it starts.
              </p>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#9D9B91] font-light leading-relaxed">
                Enduring architecture is what it becomes.
              </p>
            </div>

            {/* Siyara Gold Signature */}
            <div className="font-serif text-2xl sm:text-3xl text-[#D9B45F] tracking-wider pl-2 font-normal">
              Siyara
            </div>
          </motion.div>

          {/* Right Column: High-End Architectural Visual with Curved Organic Mask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Emerald Glow Layer */}
              <div 
                className="absolute -inset-4 opacity-50 rounded-3xl pointer-events-none" 
                style={{
                  background: 'radial-gradient(circle at center, rgba(24, 169, 130, 0.22) 0%, rgba(7, 30, 24, 0.4) 50%, transparent 75%)',
                }}
              />

              {/* Architectural Visual Container with Organic Arched Clipping Mask */}
              <div className="relative rounded-br-[100px] rounded-tl-[40px] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-[#D9B45F]/40 shadow-2xl p-2 bg-[#070A09]">
                
                {/* Visual Image */}
                <div className="relative rounded-br-[92px] rounded-tl-[34px] overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                    alt="Luxury Architectural Interior representing Siyara Growth"
                    width={1200}
                    height={825}
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Emerald Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#070A09] via-transparent to-[#071E18]/40" />

                  {/* Fine Gold Contour Line Arc */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#D9B45F]/50 fill-none" viewBox="0 0 400 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10 10 L 370 10 C 385 10, 395 30, 395 60 L 395 280" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>
                </div>

              </div>

              {/* Decorative Floating Gold Accent Ring */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-[#D9B45F]/30 pointer-events-none hidden sm:block" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
