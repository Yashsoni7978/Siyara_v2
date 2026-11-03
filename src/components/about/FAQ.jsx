'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What services does Siyara Innovations offer?',
      a: 'We unite brand strategy, bespoke Next.js web engineering, search discoverability (SEO & GEO), automation workflows, and continuous growth optimization into a single, cohesive studio discipline.',
    },
    {
      q: 'How is Siyara different from a typical agency?',
      a: 'We eliminate the handoff silos and finger-pointing common to multi-vendor agency rosters. Strategists, designers, and engineers work from the same brief, building custom platforms engineered for commercial longevity rather than fragile template shortcuts.',
    },
    {
      q: 'Do you work with businesses outside Jaipur?',
      a: 'Yes. While rooted in Jaipur, Rajasthan, we partner with ambitious enterprises, luxury brands, and fast-growing organizations across India and internationally through structured remote workflows.',
    },
    {
      q: 'How do we get started?',
      a: 'Reach out through our inquiry form or message our directors directly on WhatsApp. We begin with a structured discovery conversation to assess your commercial goals and technical requirements.',
    },
  ];

  return (
    <section
      id="about-faq"
      aria-label="11 — Frequently Asked Questions"
      className="relative pt-14 sm:pt-16 pb-24 sm:pb-28 lg:pb-32 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#C99742]">
            11
          </span>
          <span className="text-xs sm:text-sm text-[#080B0A]/40 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#080B0A] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>

        {/* 2-Column Balanced Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Headline & Subtitle */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="lg:col-span-5"
          >
            <h2 className="font-lora text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#080B0A] leading-[1.15] tracking-tight mb-4">
              Still have<br />
              <span className="italic text-[#C99742]">questions?</span>
            </h2>
            <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed max-w-sm">
              A few quick answers to help you understand how we work.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: FAQ Questions List */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeCustom }}
            className="lg:col-span-7 divide-y divide-[#080B0A]/10 border-y border-[#080B0A]/10"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.q} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left group gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-roboto font-bold text-sm sm:text-base text-[#080B0A] group-hover:text-[#C99742] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span className="text-[#C99742] text-sm shrink-0 font-bold transition-transform duration-200">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easeCustom }}
                        className="overflow-hidden"
                      >
                        <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed pt-3 pr-6">
                          {faq.a}
                        </p>
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
