'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Values() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  // Restrained Gold Line-Art Icons
  const ChessKnightIcon = () => (
    <svg
      className="w-7 h-7 text-[#7A5813]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21H5a2 2 0 0 1-2-2c0-.8.4-1.5 1-1.8l3-1.2v-2a6 6 0 0 1 1.2-3.6L10 8c-.6-.7-.9-1.6-.9-2.5 0-2.2 1.8-4 4-4 .6 0 1.2.1 1.7.4.9.5 1.5 1.4 1.7 2.4.6 2.7-1 5.3-3.6 5.8l-1.4.3v1.6l4 1.6c1 .4 1.5 1.4 1.5 2.4v5a2 2 0 0 1-2 2Z" />
      <path d="M9 10h.01" />
    </svg>
  );

  const ShieldCrossIcon = () => (
    <svg
      className="w-7 h-7 text-[#7A5813]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );

  const ZapIcon = () => (
    <svg
      className="w-7 h-7 text-[#7A5813]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      className="w-7 h-7 text-[#7A5813]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const RefreshIcon = () => (
    <svg
      className="w-7 h-7 text-[#7A5813]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );

  return (
    <section
      id="our-values"
      aria-label="06 — Our Values"
      className="relative pt-12 sm:pt-16 pb-20 sm:pb-24 lg:pb-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#7A5813]">
            06
          </span>
          <span className="text-xs sm:text-sm text-[#080B0A]/40 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#080B0A] uppercase">
            OUR VALUES
          </span>
        </div>

        {/* 2-Column Balanced Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT COLUMN: Headline & Vertical Gold Divider Line */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="lg:col-span-5 flex items-stretch justify-between"
          >
            <div>
              <h2 className="font-lora text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#080B0A] leading-[1.15] tracking-tight">
                The principles<br />
                behind everything<br />
                <span className="italic text-[#7A5813]">we build.</span>
              </h2>
            </div>

            {/* Vertical Gold Divider Line (Desktop) */}
            <div
              aria-hidden="true"
              className="hidden lg:block w-[1.5px] bg-[#C99742]/40 self-stretch mx-4 shrink-0"
            />
          </motion.div>

          {/* RIGHT COLUMN: 2 Sub-Columns of Values */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeCustom }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
          >
            {/* Sub-column 1 */}
            <div className="space-y-8 sm:space-y-10">
              {/* Strategic Thinking */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <ChessKnightIcon />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1.5 leading-snug">
                    Strategic Thinking
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                    Solving for the bigger picture, not just the task.
                  </p>
                </div>
              </div>

              {/* Accountability */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <ShieldCrossIcon />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1.5 leading-snug">
                    Accountability
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                    Owning outcomes and staying committed.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-column 2 */}
            <div className="space-y-8 sm:space-y-10">
              {/* Thoughtful Execution */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <ZapIcon />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1.5 leading-snug">
                    Thoughtful Execution
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                    Turning plans into work that creates real value.
                  </p>
                </div>
              </div>

              {/* Collaboration */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <UsersIcon />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1.5 leading-snug">
                    Collaboration
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                    Working together with openness and trust.
                  </p>
                </div>
              </div>

              {/* Continuous Improvement */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <RefreshIcon />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base text-[#080B0A] mb-1.5 leading-snug">
                    Continuous Improvement
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                    Learning, refining and growing with every project.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
