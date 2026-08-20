import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const industries = [
    {
      id: '01',
      name: 'REAL ESTATE',
      description: 'Architectural web platforms, high-conversion property showcases, and automated lead acquisition.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      tag: 'Luxury Properties & Developers',
    },
    {
      id: '02',
      name: 'HEALTHCARE',
      description: 'HIPAA-conscious clinical portals, patient trust funnels, and high-ranking local GEO search optimization.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
      tag: 'Clinics & Medical Groups',
    },
    {
      id: '03',
      name: 'JEWELLERY & LUXURY',
      description: 'High-end e-commerce experiences, virtual consultations, and brand storytelling that commands premium value.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
      tag: 'Heritage & Fine Jewellery',
    },
    {
      id: '04',
      name: 'HOSPITALITY',
      description: 'Bespoke hotel booking engines, immersive venue showcases, and direct reservation growth systems.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      tag: 'Luxury Hotels & Dining',
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
    <section id="industries" className="relative py-28 sm:py-36 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Background Emerald-Black Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E18]/60 via-[#070A09] to-[#070A09] opacity-80 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D9B45F]">
            09
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
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
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE3] font-normal leading-[0.98] tracking-tight">
            BUILT FOR <br />
            AMBITIOUS <span className="text-[#D9B45F] italic font-normal">INDUSTRIES.</span>
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
            className="lg:col-span-7 flex flex-col divide-y divide-[#D9B45F]/15"
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
                          isHovered ? 'text-[#D9B45F]' : 'text-[#9D9B91]/50'
                        }`}
                      >
                        {item.id}
                      </span>
                      
                      <h3
                        className={`font-serif text-2xl sm:text-4xl lg:text-5xl tracking-wide font-normal transition-all duration-300 ${
                          isHovered
                            ? 'text-[#D9B45F] translate-x-2'
                            : 'text-[#F3EFE3] group-hover:text-[#D9B45F]'
                        }`}
                      >
                        {item.name}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                        isHovered
                          ? 'text-[#D9B45F] translate-x-1 -translate-y-1 opacity-100'
                          : 'text-[#F3EFE3]/30 opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </div>

                  {/* Fine Gold Underline Draw on Hover */}
                  <div className="relative mt-4 h-[1px] w-full bg-white/5 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-[#D9B45F] via-[#0C6B52] to-transparent transition-transform duration-500 origin-left ${
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#071E18] via-[#18A982]/20 to-transparent blur-2xl opacity-60 rounded-3xl" />

              {/* Image Frame with Architectural Curved Edge */}
              <div className="relative rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-[#D9B45F]/30 shadow-2xl p-2 bg-[#070A09]">
                <div className="relative aspect-[4/5] rounded-tl-[52px] rounded-br-[52px] overflow-hidden bg-[#071E18]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndustry.id}
                      src={activeIndustry.image}
                      alt={activeIndustry.name}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                    />
                  </AnimatePresence>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/40 to-transparent" />

                  {/* Overlay Info Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D9B45F] uppercase mb-2 block font-bold">
                      {activeIndustry.tag}
                    </span>
                    <h4 className="font-serif text-2xl text-[#F3EFE3] mb-2 font-normal">
                      {activeIndustry.name}
                    </h4>
                    <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed">
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
