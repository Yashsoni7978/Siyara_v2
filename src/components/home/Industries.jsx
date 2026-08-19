import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const industries = [
    {
      id: '01',
      name: 'REAL ESTATE',
      description: 'High-end architectural portfolios, luxury property showcases, and lead acquisition platforms.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      tag: 'Architectural & Luxury Property',
    },
    {
      id: '02',
      name: 'HEALTHCARE',
      description: 'Patient acquisition funnels, clinical booking systems, and specialized medical search visibility.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
      tag: 'Clinical & Aesthetic Dermatology',
    },
    {
      id: '03',
      name: 'JEWELLERY & LUXURY',
      description: 'Heritage brand identity, digital boutique experiences, and high-trust storytelling.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
      tag: 'Craftsmanship & Fine Goods',
    },
    {
      id: '04',
      name: 'HOSPITALITY',
      description: 'Bespoke resort booking platforms, culinary storytelling, and immersive visitor experiences.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      tag: 'Resorts & Fine Dining',
    },
    {
      id: '05',
      name: 'EDUCATION',
      description: 'Institution portals, student enrolment funnels, and authority-building digital platforms.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
      tag: 'Academies & Digital Learning',
    },
    {
      id: '06',
      name: 'E-COMMERCE',
      description: 'D2C subscription platforms, high-conversion storefronts, and automated growth systems.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
      tag: 'Direct-to-Consumer Brands',
    },
  ];

  const activeIndustry = industries[hoveredIndex] || industries[0];

  return (
    <section id="industries" className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
            09
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            Industries We Elevate
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE4] font-normal leading-[1.04] tracking-tight">
            BUILT FOR <br />
            AMBITIOUS <span className="text-[#E5C378] italic">INDUSTRIES.</span>
          </h2>
        </motion.div>

        {/* Open Editorial Typography Layout (List + Interactive Image Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Flowing Editorial Typography List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="lg:col-span-7 flex flex-col divide-y divide-[#D4AF37]/15"
          >
            {industries.map((item, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className="py-6 sm:py-8 group cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`text-xs font-mono font-medium transition-colors duration-300 ${
                          isHovered ? 'text-[#D4AF37]' : 'text-[#CFC9BB]/40'
                        }`}
                      >
                        {item.id}
                      </span>
                      
                      <h3
                        className={`font-serif text-2xl sm:text-4xl lg:text-5xl tracking-wide font-normal transition-all duration-300 ${
                          isHovered
                            ? 'text-[#E5C378] translate-x-2'
                            : 'text-[#F3EFE4] group-hover:text-[#E5C378]/80'
                        }`}
                      >
                        {item.name}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                        isHovered
                          ? 'text-[#D4AF37] translate-x-1 -translate-y-1 opacity-100'
                          : 'text-[#CFC9BB]/30 opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </div>

                  {/* Fine Gold Underline Draw on Hover */}
                  <div className="relative mt-4 h-[1px] w-full bg-white/5 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-transparent transition-transform duration-500 origin-left ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column: Contextual Industry Image Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer Atmosphere Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#063C2D] via-[#19A878]/20 to-transparent blur-2xl opacity-60 rounded-3xl" />

              {/* Image Frame with Architectural Curved Edge */}
              <div className="relative rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl p-2 bg-[#080B0A]">
                <div className="relative aspect-[4/5] rounded-tl-[52px] rounded-br-[52px] overflow-hidden bg-[#0A0D0C]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndustry.id}
                      src={activeIndustry.image}
                      alt={activeIndustry.name}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                    />
                  </AnimatePresence>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/40 to-transparent" />

                  {/* Overlay Info Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase mb-2 block">
                      {activeIndustry.tag}
                    </span>
                    <h4 className="font-serif text-2xl text-[#F3EFE4] mb-2 font-normal">
                      {activeIndustry.name}
                    </h4>
                    <p className="font-sans text-xs text-[#CFC9BB]/80 font-light leading-relaxed">
                      {activeIndustry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
