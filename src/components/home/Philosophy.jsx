import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D9B45F]">
            05
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            Our Philosophy
          </span>
        </motion.div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Manifesto Headline & Signature */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl text-[#F3EFE3] font-normal leading-[0.98] tracking-tight mb-8">
              WE DON'T JUST <br />
              BUILD WEBSITES. <br />
              WE BUILD <br />
              <span className="text-[#D9B45F] italic font-normal">DIGITAL GROWTH.</span>
            </h2>

            <div className="max-w-md mb-8">
              <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed mb-1">
                Beautiful design is just the beginning.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed">
                Real growth is the result.
              </p>
            </div>

            {/* Siyara Gold Signature */}
            <div className="font-serif italic text-2xl sm:text-3xl text-[#D9B45F] tracking-wider pl-2 font-normal">
              — Siyara
            </div>
          </motion.div>

          {/* Right Column: High-End Architectural Visual with Curved Organic Mask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Emerald Glow Layer */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#071E18] via-[#18A982]/20 to-transparent blur-2xl opacity-50 rounded-3xl" />

              {/* Architectural Visual Container with Organic Arched Clipping Mask */}
              <div className="relative rounded-br-[100px] rounded-tl-[40px] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-[#D9B45F]/40 shadow-2xl p-2 bg-[#070A09]">
                
                {/* Visual Image */}
                <div className="relative rounded-br-[92px] rounded-tl-[34px] overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                    alt="Luxury Architectural Interior representing Siyara Growth"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Emerald Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#070A09] via-transparent to-[#071E18]/40" />

                  {/* Fine Gold Contour Line Arc */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#D9B45F]/50 fill-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10 10 L 90% 10 C 95% 10, 98% 30, 98% 50 L 98% 90%" strokeWidth="1" strokeDasharray="3 3" />
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
