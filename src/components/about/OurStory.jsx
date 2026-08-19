import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section id="story" className="relative py-28 sm:py-36 bg-[#F3EFE4] text-[#080B0A] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#063C2D] uppercase">
            OUR STORY
          </span>
          <span className="h-[1px] w-12 bg-[#D4AF37]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Story Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#080B0A] mb-8"
            >
              Siyara Innovations was born out of a simple belief that great businesses deserve a digital presence that <span className="italic font-serif text-[#063C2D]">truly</span> represents them.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="flex flex-col gap-5 max-w-lg text-sm sm:text-base font-sans text-[#080B0A]/80 leading-relaxed font-light"
            >
              <p>
                We saw brands losing customers to competitors with better websites, better visibility and better strategy. We started Siyara to change that.
              </p>
              <p>
                Today, we partner with businesses to build digital experiences that are not just beautiful, but built to perform, convert and grow.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Layered Image Collage matching reference (Studio Photo + Emerald Block + Monogram + "Built Different." Callout) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Fine Dotted Pattern Layer */}
              <div className="absolute -top-6 -right-6 w-36 h-36 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#063C2D 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }} />

              <div className="relative grid grid-cols-12 gap-4 items-center">
                
                {/* Main Dark Studio Environment Image (Left 8 Cols) */}
                <div className="col-span-8 relative z-10 rounded-lg overflow-hidden shadow-2xl border border-[#080B0A]/10 bg-[#080B0A]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                      alt="Siyara Digital Agency Work Environment"
                      className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">
                      SIYARA WORKSPACE
                    </div>
                  </div>
                </div>

                {/* Layered Deep Emerald Card with Gold "S" Watermark (Right 6 Cols, overlapping) */}
                <div className="col-span-6 -ml-12 relative z-20 rounded-lg bg-[#063C2D] border border-[#D4AF37]/30 p-8 shadow-2xl flex flex-col justify-between aspect-square">
                  <div className="font-serif text-6xl text-[#D4AF37] opacity-40 font-bold leading-none">
                    S
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-[#F3EFE4] tracking-widest uppercase mb-1">
                      SIYARA✦
                    </div>
                    <div className="text-[9px] font-sans text-[#E5C378] tracking-widest uppercase font-semibold">
                      INNOVATIONS
                    </div>
                  </div>
                </div>

              </div>

              {/* Gold Script Callout "Built Different." at bottom right */}
              <div className="absolute -bottom-8 right-4 z-30 font-serif italic text-4xl sm:text-5xl text-[#D4AF37] tracking-wide pointer-events-none drop-shadow-md">
                Built Different.
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
