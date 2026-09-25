'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Sparkles, Lock } from 'lucide-react';
import Link from 'next/link';

export default function ComingSoonModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#070A09]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#0A0E0C] border border-[#D4AF37]/35 p-6 sm:p-10 shadow-2xl text-[#F3EFE3] overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B5E49]/20 blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/15 bg-black/40 flex items-center justify-center text-[#F3EFE3]/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3 h-3" />
              <span>RESERVED PORTFOLIO CONCEPT</span>
            </span>
            <span className="px-2.5 py-1 bg-white/10 border border-white/15 text-[10px] font-sans font-semibold tracking-[0.18em] text-[#F3EFE3]/80 uppercase">
              {project.industry}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-serif text-3xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight mb-3">
            {project.name}
          </h3>

          {project.projectType && (
            <p className="font-sans text-xs text-[#D4AF37] font-semibold tracking-widest uppercase mb-4">
              {project.projectType}
            </p>
          )}

          {/* Description */}
          <p className="font-sans text-xs sm:text-sm text-[#F3EFE3]/80 font-light leading-relaxed mb-6 border-l border-[#D4AF37]/30 pl-4 py-1">
            {project.description}
          </p>

          {/* Notice Box */}
          <div className="bg-[#101613] border border-white/10 p-4 mb-8 flex items-start gap-3">
            <Lock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <p className="font-sans text-xs text-[#F3EFE3]/70 leading-relaxed font-light">
              This project is part of our upcoming portfolio archive. The full digital experience and case study will be published once the system launches.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/15">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 border border-white/20 hover:border-white/40 text-xs font-sans font-bold tracking-[0.18em] text-[#F3EFE3] uppercase transition-colors"
            >
              CLOSE
            </button>
            <Link
              href="/contact"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C378] text-[#070A09] text-xs font-sans font-bold tracking-[0.18em] uppercase transition-all shadow-lg group"
            >
              <span>BUILD SIMILAR SYSTEM</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
