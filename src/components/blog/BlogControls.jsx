'use client';

import React from 'react';
import { Search, X, Sparkles } from 'lucide-react';

export default function BlogControls({ 
  categories = [], 
  activeCategory = 'All', 
  onSelectCategory, 
  searchQuery = '', 
  onSearchChange,
  categoryCounts = {},
  totalResults
}) {
  return (
    <section className="relative pt-6 pb-10 bg-[#080B0A] border-b border-[#D4AF37]/15">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Horizontal Category Navigation (Scrollable on Mobile & Tablet) */}
          <div className="overflow-x-auto no-scrollbar scroll-smooth py-1 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count = categoryCounts[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    aria-pressed={isActive}
                    className={`min-h-[44px] px-4 py-2 text-xs font-sans font-medium tracking-wider uppercase transition-all duration-300 border focus:outline-none whitespace-nowrap rounded-full flex items-center gap-2 ${
                      isActive
                        ? 'border-[#D4AF37] bg-[#063C2D] text-[#F3EFE4] shadow-[0_0_14px_rgba(212,175,55,0.22)]'
                        : 'border-[#D4AF37]/20 bg-[#080B0A] text-[#CFC9BB]/70 hover:border-[#D4AF37]/50 hover:text-[#F3EFE4]'
                    }`}
                  >
                    <span>{cat}</span>
                    {count !== undefined && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                        isActive 
                          ? 'bg-[#D4AF37] text-[#080B0A] font-bold' 
                          : 'bg-[#063C2D]/50 text-[#D4AF37]/90'
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Controls: Search + Results Counter */}
          <div className="flex items-center gap-4 w-full lg:w-auto shrink-0 justify-between lg:justify-end">
            {typeof totalResults === 'number' && (
              <div className="flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest text-[#D4AF37]/90 shrink-0">
                <Sparkles className="w-3 h-3 text-[#19A878]" />
                <span>
                  {totalResults} {totalResults === 1 ? 'Insight' : 'Insights'}
                </span>
              </div>
            )}

            {/* Minimalist Editorial Search Control */}
            <div className="relative w-full sm:w-72 lg:w-64 shrink-0">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search insights..."
                  aria-label="Search insights by topic or keyword"
                  className="w-full bg-[#063C2D]/20 border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F3EFE4] placeholder-[#CFC9BB]/50 text-xs font-sans pl-10 pr-9 py-2.5 outline-none transition-all duration-300 rounded-full"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    aria-label="Clear search query"
                    className="absolute right-3 text-[#CFC9BB]/60 hover:text-[#F3EFE4] transition-colors p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
