'use client';

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function BlogPagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  if (totalPages <= 1) return null;

  // Build array of pages to display
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="py-12 bg-[#080B0A] flex items-center justify-center border-b border-[#D4AF37]/15" aria-label="Pagination Navigation">
      <div className="flex items-center gap-2 sm:gap-3 font-sans text-xs">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange && onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="min-h-[42px] px-3.5 py-2 border border-[#D4AF37]/25 hover:border-[#D4AF37] text-[#F3EFE4] disabled:opacity-25 disabled:pointer-events-none transition-all duration-200 rounded-full flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
          aria-label="Previous Page"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Page Numbers */}
        {pages.map((p) => {
          const isActive = currentPage === p;
          return (
            <button
              key={`page-${p}`}
              onClick={() => onPageChange && onPageChange(p)}
              aria-current={isActive ? 'page' : undefined}
              className={`w-10 h-10 border flex items-center justify-center font-sans font-medium text-xs transition-all duration-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#D4AF37] ${
                isActive
                  ? 'border-[#D4AF37] bg-[#063C2D] text-[#F3EFE4] shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                  : 'border-[#D4AF37]/20 text-[#CFC9BB]/70 hover:border-[#D4AF37]/50 hover:text-[#F3EFE4] bg-[#080B0A]'
              }`}
            >
              {p}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => onPageChange && onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="min-h-[42px] px-3.5 py-2 border border-[#D4AF37]/25 hover:border-[#D4AF37] text-[#F3EFE4] disabled:opacity-25 disabled:pointer-events-none transition-all duration-200 rounded-full flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
          aria-label="Next Page"
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
        </button>
      </div>
    </nav>
  );
}
