'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Search, Target, Users, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Results() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const collectiveMetrics = [
    {
      id: '01',
      metric: '6x+',
      label: 'AVERAGE TRAFFIC GROWTH',
      description: 'Reported average traffic growth across multiple client engagements.',
      category: 'Search & Visibility',
      icon: TrendingUp,
    },
    {
      id: '02',
      metric: '500+',
      label: 'ORGANIC CLICKS',
      description: 'Monthly organic search clicks achieved.',
      category: 'Organic Growth',
      icon: Search,
    },
    {
      id: '03',
      metric: '5–6%',
      label: 'CONVERSION RATES',
      description: 'Reported conversion rates across client funnels.',
      category: 'Conversion Architecture',
      icon: Target,
    },
    {
      id: '04',
      metric: '150+',
      label: 'CAMPAIGN ENQUIRIES',
      description: 'Enquiries generated from a ₹20,000 advertising campaign.',
      category: 'Paid Acquisition',
      icon: Zap,
    },
    {
      id: '05',
      metric: '200+',
      label: 'MONTHLY LEADS',
      description: 'Monthly leads reported across multiple client engagements.',
      category: 'Lead Generation',
      icon: Users,
    },
    {
      id: '06',
      metric: '100s of hrs',
      label: 'TIME SAVINGS',
      description: 'Reported time savings through workflow and business automation.',
      category: 'Operational Systems',
      icon: Clock,
    },
  ];

  return (
    <section id="results" className="relative py-16 sm:py-24 bg-[#F3EFE3] text-[#101613] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.5, ease: easeCustom }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.24em] text-[#B9923F]">
            06
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            MEASURABLE PERFORMANCE RESULTS
          </span>
        </motion.div>

        {/* Section Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.6, ease: easeCustom }}
            className="lg:col-span-8 max-w-3xl"
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#101613] font-normal leading-[1.08] sm:leading-[1.02] tracking-tight mb-4 break-words">
              Reported Outcomes Across <br className="hidden sm:block" />
              <span className="italic text-[#0B5E49] font-normal">Client Engagements.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#101613]/75 font-light leading-relaxed max-w-2xl">
              Collective performance results achieved across multi-industry client engagements, search visibility strategies, and digital conversion infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeCustom }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2.5 px-6 py-3.5 border border-[#0B5E49] bg-[#101613] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-md group rounded-full"
            >
              <span>EXPLORE PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 text-[#F3EFE3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 6 Collective Results Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '80px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16"
        >
          {collectiveMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeCustom } },
                }}
                className="p-6 sm:p-8 bg-[#ECE7D8] border border-[#B9923F]/30 hover:border-[#0B5E49]/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Top Row: Category & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#0B5E49] uppercase">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#0B5E49]/20 bg-[#F3EFE3] flex items-center justify-center text-[#0B5E49] group-hover:bg-[#0B5E49] group-hover:text-[#F3EFE3] transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Large Metric Display */}
                  <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#101613] font-normal leading-none tracking-tight mb-3">
                    {item.metric}
                  </div>

                  {/* Metric Label */}
                  <h3 className="font-sans text-xs font-bold tracking-[0.16em] text-[#0B5E49] uppercase mb-2">
                    {item.label}
                  </h3>

                  {/* Metric Description */}
                  <p className="font-sans text-xs text-[#101613]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#B9923F]/20 flex items-center justify-between">
                  <span className="text-[9px] font-sans tracking-[0.2em] text-[#B9923F] uppercase font-bold">
                    COLLECTIVE OUTCOME
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B5E49]/40 group-hover:bg-[#0B5E49] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Required Mandatory Disclosure */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.5, ease: easeCustom }}
          className="pt-8 border-t border-[#101613]/10 max-w-3xl mx-auto text-center"
        >
          <p className="text-[11px] sm:text-xs font-sans text-[#101613]/60 font-light leading-relaxed">
            Results represent reported outcomes across selected client engagements. Individual results vary depending on business, market conditions, strategy and execution.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
