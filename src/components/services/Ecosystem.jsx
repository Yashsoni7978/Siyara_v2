import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Code, Search, Filter, TrendingUp } from 'lucide-react';

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState(0);
  const easeCustom = [0.16, 1, 0.3, 1];

  const nodes = [
    {
      id: '01',
      title: 'STRATEGY',
      description: 'Research, market positioning, and growth architecture.',
      icon: Target,
    },
    {
      id: '02',
      title: 'BRAND',
      description: 'Visual identity, messaging, and luxury brand design.',
      icon: Compass,
    },
    {
      id: '03',
      title: 'EXPERIENCE',
      description: 'Bespoke web applications and high-conversion UX.',
      icon: Code,
    },
    {
      id: '04',
      title: 'VISIBILITY',
      description: 'Organic search, GEO AI search, and paid performance.',
      icon: Search,
    },
    {
      id: '05',
      title: 'CONVERSION',
      description: 'Friction-free funnels, CRM nurture, and lead capture.',
      icon: Filter,
    },
    {
      id: '06',
      title: 'GROWTH',
      description: 'Continuous optimization, analytics, and business scaling.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="ecosystem" className="relative py-28 sm:py-36 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Deep Emerald Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E18]/60 via-[#070A09] to-[#070A09] opacity-80 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D9B45F]">
            03
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            The Connected System
          </span>
        </motion.div>

        {/* Headlines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE3] font-normal leading-[0.98] tracking-tight">
              ALL THE PIECES. <br />
              ONE <span className="text-[#D9B45F] italic font-normal">POWERFUL SYSTEM.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed max-w-sm">
              We connect strategy, identity, engineering, search visibility, conversion, and business automation into a single growth engine.
            </p>
          </motion.div>
        </div>

        {/* 6 Connected Nodes System with Illuminated Line */}
        <div className="relative pt-6 pb-12">
          
          {/* Connecting Glowing Gold Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-[#071E18]" />
            <div
              className="h-full bg-[#D9B45F] transition-all duration-500 shadow-[0_0_15px_#D9B45F]"
              style={{ width: `${((activeNode + 1) / nodes.length) * 100}%` }}
            />
          </div>

          {/* 6 Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isActive = idx === activeNode;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(idx)}
                  onMouseEnter={() => setActiveNode(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circle Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'border-[#D9B45F] bg-[#071E18] text-[#D9B45F] scale-110 shadow-[0_0_20px_rgba(217,180,95,0.4)]'
                          : 'border-[#D9B45F]/30 bg-[#070A09] text-[#9D9B91] group-hover:border-[#D9B45F]/60'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[#D9B45F]' : 'text-[#F3EFE3]'
                    }`}
                  >
                    {node.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] text-[#9D9B91] font-light leading-relaxed max-w-[150px]">
                    {node.description}
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

