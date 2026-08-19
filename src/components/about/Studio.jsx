import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Studio() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section id="studio" className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Subtle Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-75 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            OUR STUDIO
          </span>
          <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
        </motion.div>

        {/* Section Layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Ambient Studio / Workspace Photo */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCustom }}
              className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0A0D0C]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
                  alt="Siyara Digital Agency Studio Workspace"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#080B0A] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase bg-[#080B0A]/80 px-3 py-1.5 border border-[#D4AF37]/30 backdrop-blur-md">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>JAIPUR STUDIO HEADQUARTERS</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Copy + Map Node */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE4] font-normal leading-[1.08] mb-6"
            >
              Rooted in Jaipur. <br />
              Driven by innovation. <br />
              Focused on <span className="text-[#E5C378] italic">impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="font-sans text-sm sm:text-base text-[#CFC9BB]/80 font-light leading-relaxed mb-10 max-w-lg"
            >
              We are a team of strategists, designers, developers and growth experts who love building digital experiences that make a difference.
            </motion.p>

            {/* Location Map Marker Box matching reference image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
              className="p-6 bg-[#063C2D]/30 border border-[#D4AF37]/30 rounded-xl relative overflow-hidden flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-mono font-bold text-[#E5C378] tracking-widest uppercase">
                    JAIPUR, INDIA
                  </span>
                </div>
                <p className="text-[11px] font-sans text-[#CFC9BB]/70 font-light">
                  Digital Agency Headquarters & Creative Hub
                </p>
              </div>

              <div className="hidden sm:block">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-ping" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
