import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Search, Target, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Results() {
  const proofPillars = [
    {
      id: '01',
      title: 'ENGINEERING & SPEED',
      label: 'Core Web Vitals & performance optimization',
      category: 'Performance',
      icon: Cpu,
    },
    {
      id: '02',
      title: 'SEARCH & GEO VISIBILITY',
      label: 'Organic + AI search engine visibility',
      category: 'Visibility',
      icon: Search,
    },
    {
      id: '03',
      title: 'CONVERSION DESIGN',
      label: 'High-intent user funnels & UX architecture',
      category: 'Conversion',
      icon: Target,
    },
    {
      id: '04',
      title: 'METHODOLOGY',
      label: 'Structured milestone execution & QA',
      category: 'Delivery',
      icon: ShieldCheck,
    },
    {
      id: '05',
      title: 'GROWTH SYSTEMS',
      label: 'Continuous performance & CRO iteration',
      category: 'Optimization',
      icon: TrendingUp,
    },
  ];

  const confirmedProjects = [
    'RISHABH JEWELLERS',
    'BEYOND SPACES',
    'DR. NEHA SHARMA',
    'THE BREW CHAPTER',
    'LUXE HABITAT',
  ];

  return (
    <section id="results" className="relative py-28 sm:py-36 bg-[#F3EFE3] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            08
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Proof & Deliverables
          </span>
        </motion.div>

        {/* Headlines & CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101613] font-normal leading-[0.98] mb-4">
              Real outcomes. <br />
              Measurable <span className="text-[#0B5E49] italic font-normal">impact.</span>
            </h2>
            <p className="font-sans text-sm text-[#101613]/70 font-light leading-relaxed mb-6">
              We design and engineer scalable digital systems engineered to elevate brands, increase visibility, and drive long-term business value.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#0B5E49] bg-[#101613] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-lg group"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowUpRight className="w-4 h-4 text-[#F3EFE3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* 5 Proof Pillars Container */}
          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {proofPillars.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="p-5 sm:p-6 bg-[#ECE7D8] border border-[#B9923F]/30 hover:border-[#0B5E49]/60 rounded-none transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full border border-[#0B5E49]/30 bg-[#F3EFE3] flex items-center justify-center text-[#0B5E49] group-hover:bg-[#0B5E49] group-hover:text-[#F3EFE3] group-hover:border-[#0B5E49] mb-6 transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>

                    {/* Pillar Title */}
                    <div className="font-sans text-xs font-bold text-[#0B5E49] tracking-[0.12em] uppercase mb-2">
                      {item.title}
                    </div>

                    {/* Label */}
                    <p className="font-sans text-[11px] text-[#101613]/70 font-light leading-snug mb-4">
                      {item.label}
                    </p>

                    {/* Divider & Category */}
                    <div className="pt-3 border-t border-[#B9923F]/20">
                      <span className="text-[9px] font-sans tracking-[0.16em] text-[#B9923F] uppercase font-mono font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Client Brand Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="pt-12 border-t border-[#101613]/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-sans tracking-[0.16em] text-[#0B5E49] uppercase font-semibold">
            <span className="text-sm">✦</span>
            <span>Featured Agency Client Projects & Digital Systems</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 lg:gap-10 opacity-80">
            {confirmedProjects.map((brand) => (
              <span
                key={brand}
                className="font-serif text-xs sm:text-sm tracking-[0.2em] text-[#101613]/60 hover:text-[#0B5E49] transition-colors uppercase font-medium cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
