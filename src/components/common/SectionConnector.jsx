import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionConnector — Signature Siyara Architectural Connector
 * Used at boundaries between dark and ivory sections.
 * Features champagne-gold line, geometric diamond node, subtle emerald halo,
 * faint orbital arcs, tiny shimmering gold particles, and vertical continuation line.
 */
export default function SectionConnector({ fromDark = true, variant = 'diamond' }) {
  const topBg = fromDark ? '#070A09' : '#F3EFE3';
  const bottomBg = fromDark ? '#F3EFE3' : '#070A09';

  return (
    <div
      className="relative w-full h-14 sm:h-18 overflow-hidden select-none pointer-events-none flex items-center justify-center"
      style={{
        background: `linear-gradient(to bottom, ${topBg} 0%, ${topBg} 50%, ${bottomBg} 50%, ${bottomBg} 100%)`,
      }}
      aria-hidden="true"
    >
      {/* 1. Subtle Emerald Glow Halo */}
      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-24 h-24 rounded-full bg-[#0C6B52]/30 blur-xl pointer-events-none"
      />

      {/* 2. Faint Orbital Arcs (Desktop) */}
      <svg
        className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none opacity-40"
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

      {/* 3. Horizontal Champagne Gold Line */}
      <motion.div
        initial={{ scaleX: 0.3, opacity: 0.4 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ margin: '-20px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-center relative z-10 px-4"
      >
        {/* Left Gradient Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D9B45F]/35 to-[#D9B45F]/70" />

        {/* 4. Central Geometric Diamond / Star Node */}
        <div className="relative mx-3 flex items-center justify-center">
          {/* Subtle Outer Ring */}
          <div className="w-6 h-6 rounded-full border border-[#D9B45F]/40 bg-[#071E18]/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_12px_rgba(217,180,95,0.25)]">
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

      {/* 5. Tiny Gold Particles Around Transition */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
        <div className="w-1 h-1 rounded-full bg-[#D9B45F]/60 blur-[0.5px] -translate-x-16 -translate-y-2 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-[#D9B45F]/50 blur-[0.5px] translate-x-16 translate-y-2 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-[#0C6B52]/70 blur-[0.5px] -translate-x-32 translate-y-1" />
        <div className="w-1 h-1 rounded-full bg-[#0C6B52]/70 blur-[0.5px] translate-x-32 -translate-y-1" />
      </div>
    </div>
  );
}

