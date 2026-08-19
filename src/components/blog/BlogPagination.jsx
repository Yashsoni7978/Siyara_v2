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
    <nav className="py-12 bg-[#080B0A] border-t border-[#D4AF37]/15 flex items-center justify-center">
      <div className="flex items-center gap-2 sm:gap-4 font-sans text-xs">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange && onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2.5 border border-[#D4AF37]/20 hover:border-[#D4AF37] text-[#F3EFE4] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          aria-label="Previous Page"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>

        {/* Page Numbers */}
        {pages.map((p) => {
          const isActive = currentPage === p;
          return (
            <button
              key={`page-${p}`}
              onClick={() => onPageChange && onPageChange(p)}
              className={`w-9 h-9 border flex items-center justify-center font-mono font-medium transition-all duration-300 ${
                isActive
                  ? 'border-[#D4AF37] bg-[#063C2D] text-[#F3EFE4] shadow-[0_0_10px_rgba(212,175,55,0.25)]'
                  : 'border-[#D4AF37]/20 text-[#CFC9BB]/70 hover:border-[#D4AF37]/50 hover:text-[#F3EFE4]'
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
          className="p-2.5 border border-[#D4AF37]/20 hover:border-[#D4AF37] text-[#F3EFE4] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          aria-label="Next Page"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );
}
