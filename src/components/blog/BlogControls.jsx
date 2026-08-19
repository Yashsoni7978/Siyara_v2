import React from 'react';
import { Search, X } from 'lucide-react';

export default function BlogControls({ 
  categories, 
  activeCategory, 
  onSelectCategory, 
  searchQuery, 
  onSearchChange,
  totalResults
}) {
  return (
    <section className="relative pt-6 pb-10 bg-[#080B0A] border-b border-[#D4AF37]/15">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Horizontal Category Navigation (Scrollable on Mobile) */}
          <div className="overflow-x-auto no-scrollbar scroll-smooth py-1 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-4 py-2 text-xs font-sans font-medium tracking-wider uppercase transition-all duration-300 border focus:outline-none whitespace-nowrap ${
                      isActive
                        ? 'border-[#D4AF37] bg-[#063C2D]/60 text-[#F3EFE4] shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                        : 'border-[#D4AF37]/20 bg-[#080B0A] text-[#CFC9BB]/70 hover:border-[#D4AF37]/50 hover:text-[#F3EFE4]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Controls: Search + Results Counter */}
          <div className="flex items-center gap-4 w-full md:w-auto shrink-0">
            {typeof totalResults === 'number' && (
              <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-widest text-[#D4AF37]/80">
                {totalResults} {totalResults === 1 ? 'Insight' : 'Insights'}
              </span>
            )}

            {/* Minimalist Editorial Search Control */}
            <div className="relative w-full md:w-64 shrink-0">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search insights..."
                  className="w-full bg-[#063C2D]/20 border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F3EFE4] placeholder-[#CFC9BB]/50 text-xs font-sans pl-10 pr-9 py-2.5 outline-none transition-all duration-300 rounded-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 text-[#CFC9BB]/60 hover:text-[#F3EFE4] transition-colors"
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
