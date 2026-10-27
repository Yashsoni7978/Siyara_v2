'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionConnector - Signature Siyara Architectural Connector
 * High-performance version:
 * - Radial gradient halo without costly Gaussian blur filter passes
 * - Single viewport-ahead entrance observer (margin: '100px')
 * - Preserves all 5 architectural visual features (champagne line, diamond node, orbital arcs, accent points, vertical continuation)
 */
export default function SectionConnector({ fromDark = true, toDark }) {
  const topBg = fromDark ? '#070A09' : '#F3EFE3';
  const resolvedToDark = toDark !== undefined ? toDark : !fromDark;
  const bottomBg = resolvedToDark ? '#070A09' : '#F3EFE3';

  return (
    <div
      className="relative w-full h-14 sm:h-16 overflow-hidden select-none pointer-events-none flex items-center justify-center"
      style={{
        background: `linear-gradient(to bottom, ${topBg} 0%, ${topBg} 50%, ${bottomBg} 50%, ${bottomBg} 100%)`,
      }}
      aria-hidden="true"
    >
      {/* 1. Subtle Emerald Glow Halo (Radial gradient replaces expensive blur-xl) */}
      <div
        className="absolute w-32 h-32 rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(12, 107, 82, 0.28) 0%, transparent 70%)',
        }}
      />

      {/* 2. Faint Orbital Arcs (Desktop) */}
      <svg
        className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1200 72"
        preserveAspectRatio="none"
      >
        <path
          d="M 300 36 Q 600 12 900 36"
          stroke="url(#goldArcGrad)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 400 36 Q 600 58 800 36"
          stroke="url(#emeraldArcGrad)"
          strokeWidth="1"
          fill="none"
        />
        <defs>
          <linearGradient id="goldArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9B45F" stopOpacity="0" />
            <stop offset="50%" stopColor="#D9B45F" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D9B45F" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="emeraldArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0C6B52" stopOpacity="0" />
            <stop offset="50%" stopColor="#0C6B52" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0C6B52" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Horizontal Champagne Gold Line & Central Node */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.9 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '100px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-center relative z-10 px-4"
      >
        {/* Left Gradient Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D9B45F]/35 to-[#D9B45F]/70" />

        {/* 4. Central Geometric Diamond / Star Node */}
        <div className="relative mx-3 flex items-center justify-center">
          {/* Subtle Outer Ring */}
          <div className="w-6 h-6 rounded-full border border-[#D9B45F]/40 bg-[#071E18] flex items-center justify-center shadow-[0_0_12px_rgba(217,180,95,0.25)]">
            {/* Geometric Diamond Node */}
            <div className="w-2.5 h-2.5 bg-[#D9B45F] rotate-45 flex items-center justify-center shadow-[0_0_8px_#D9B45F]">
              <div className="w-1 h-1 bg-[#070A09]" />
            </div>
          </div>

          {/* Vertical Continuation Line entering next section */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-gradient-to-b from-[#D9B45F]/60 to-transparent" />
        </div>

        {/* Right Gradient Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#D9B45F]/35 to-[#D9B45F]/70" />
      </motion.div>

      {/* 5. Subtle Transition Accent Points */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 opacity-70">
        <div className="w-1 h-1 rounded-full bg-[#D9B45F]/50 -translate-x-16 -translate-y-2" />
        <div className="w-1 h-1 rounded-full bg-[#D9B45F]/40 translate-x-16 translate-y-2" />
        <div className="w-1 h-1 rounded-full bg-[#0C6B52]/60 -translate-x-32 translate-y-1" />
        <div className="w-1 h-1 rounded-full bg-[#0C6B52]/60 translate-x-32 -translate-y-1" />
      </div>
    </div>
  );
}
