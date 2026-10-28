'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Problem() {
  const [expandedId, setExpandedId] = useState('01');

  const challenges = [
    {
      id: '01',
      title: 'Weak Positioning',
      description:
        'Unclear brand messaging and inconsistent identity make it difficult for customers to understand why they should choose your business.',
      solutionHref: '/services/brand-strategy',
      solutionLabel: 'HOW WE SOLVE THIS',
    },
    {
      id: '02',
      title: 'Poor Digital Experience',
      description:
        'An outdated or poorly structured website creates friction, reduces trust and loses potential enquiries.',
      solutionHref: '/services/web-design-development',
      solutionLabel: 'HOW WE SOLVE THIS',
    },
    {
      id: '03',
      title: 'Low Search Visibility',
      description:
        'Without a strong SEO foundation, your business becomes difficult to discover through Google and modern search platforms.',
      solutionHref: '/services/seo-geo',
      solutionLabel: 'HOW WE SOLVE THIS',
    },
    {
      id: '04',
      title: 'Disconnected Marketing',
      description:
        'Disconnected campaigns, social channels and advertising efforts make it difficult to generate consistent results.',
      solutionHref: '/services/performance-marketing',
      solutionLabel: 'HOW WE SOLVE THIS',
    },
    {
      id: '05',
      title: 'Manual Operations',
      description:
        'Repetitive processes and disconnected tools consume valuable time and prevent businesses from scaling efficiently.',
      solutionHref: '/services/ai-automation',
      solutionLabel: 'HOW WE SOLVE THIS',
    },
  ];

  const toggleRow = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="problem"
      aria-label="The Business Challenges Siyara Solves"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3EFE4] text-[#080B0A] overflow-hidden border-t border-[#080B0A]/10"
    >
      {/* Subtle Warm Ivory Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE4] via-[#ECE7D8]/60 to-[#F3EFE4] opacity-80 pointer-events-none" />
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 94, 73, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28"
          >
            {/* Section Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
                04
              </span>
              <span className="h-[1px] w-8 bg-[#0B5A43]/30" />
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-[#080B0A] uppercase">
                THE PROBLEM
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[50px] xl:text-[58px] text-[#080B0A] font-normal leading-[1.08] tracking-tight mb-4 sm:mb-6">
              Your business<br />
              doesn&apos;t need just<br />
              <span className="italic font-serif text-[#19A878]">a website.</span>
            </h2>

            {/* Supporting Line */}
            <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#080B0A]/75 uppercase mb-6 sm:mb-8">
              IT NEEDS A DIGITAL SYSTEM THAT PERFORMS.
            </p>

            {/* Context Paragraph */}
            <p className="font-sans text-xs sm:text-sm text-[#101613]/75 font-light leading-relaxed max-w-md mb-8 sm:mb-10">
              Most businesses already have a website. The real challenge is that it doesn&apos;t bring the right people, doesn&apos;t communicate your brand clearly, and doesn&apos;t work as hard as it should.
            </p>

            {/* Concluding Statement Callout */}
            <div className="border-l-2 border-[#19A878] pl-4 sm:pl-5 py-1.5 max-w-md bg-[#ECE7D8]/40 rounded-r-lg">
              <p className="font-sans text-xs sm:text-sm text-[#080B0A] font-medium leading-relaxed">
                This is where the right digital strategy makes the difference.
              </p>
              <p className="font-sans text-[11px] sm:text-xs text-[#101613]/60 font-light mt-1">
                Explore the key challenges businesses face and see how we solve them.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Challenge Explorer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 divide-y divide-[#080B0A]/10 border-t border-b border-[#080B0A]/10"
          >
            {challenges.map((challenge) => {
              const isExpanded = expandedId === challenge.id;

              return (
                <div key={challenge.id} className="transition-colors duration-200">
                  {/* Row Header / Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleRow(challenge.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`challenge-content-${challenge.id}`}
                    id={`challenge-header-${challenge.id}`}
                    className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer group focus:outline-none focus:ring-1 focus:ring-[#19A878] rounded-lg px-2 -mx-2 transition-all"
                  >
                    {/* Left: Number, Divider & Title */}
                    <div className="flex items-center gap-3 sm:gap-5 min-w-0 pr-4">
                      {/* Number */}
                      <span className="font-serif text-2xl sm:text-3xl text-[#B9923F] font-light tabular-nums shrink-0">
                        {challenge.id}
                      </span>

                      {/* Subtle Vertical Divider */}
                      <span className="w-[1px] h-6 bg-[#080B0A]/15 shrink-0" />

                      {/* Challenge Title */}
                      <h3
                        className={`font-serif text-xl sm:text-2xl lg:text-[25px] font-normal tracking-normal transition-colors duration-200 truncate ${
                          isExpanded
                            ? 'text-[#063C2D] font-medium'
                            : 'text-[#080B0A] group-hover:text-[#19A878]'
                        }`}
                      >
                        {challenge.title}
                      </h3>
                    </div>

                    {/* Right: Plus / Minus Minimal Action Indicator */}
                    <div className="shrink-0 ml-2">
                      {isExpanded ? (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B9923F] text-[#F3EFE4] flex items-center justify-center shadow-sm transition-transform duration-200">
                          <Minus className="w-3.5 h-3.5 stroke-[2.2]" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#080B0A]/20 flex items-center justify-center text-[#080B0A]/70 group-hover:border-[#19A878] group-hover:text-[#19A878] transition-all duration-200">
                          <Plus className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Expandable Content Area */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`challenge-content-${challenge.id}`}
                        role="region"
                        aria-labelledby={`challenge-header-${challenge.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-1 pb-6 sm:pb-7 pl-0 sm:pl-14">
                          <div className="rounded-xl bg-[#ECE7D8]/80 border border-[#080B0A]/5 p-5 sm:p-6 shadow-sm">
                            <p className="font-sans text-xs sm:text-sm text-[#101613]/85 leading-relaxed font-light">
                              {challenge.description}
                            </p>

                            <div className="mt-4 pt-3 border-t border-[#080B0A]/8">
                              <Link
                                href={challenge.solutionHref}
                                className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans font-semibold tracking-[0.16em] text-[#B9923F] hover:text-[#063C2D] uppercase transition-colors group/link"
                              >
                                <span>{challenge.solutionLabel}</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
