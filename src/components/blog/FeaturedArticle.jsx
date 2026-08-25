'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, User, Bookmark } from 'lucide-react';

export default function FeaturedArticle({ article, onSelectArticle }) {
  if (!article) return null;

  const handleClick = () => {
    if (onSelectArticle) {
      onSelectArticle(article);
    }
  };

  return (
    <section className="relative py-12 md:py-16 bg-[#080B0A]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onClick={handleClick}
          className="group relative border border-[#D4AF37]/25 bg-[#063C2D]/15 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 cursor-pointer"
        >
          {/* Subtle Ambient Hover Glow */}
          <div className="absolute inset-0 bg-radial from-[#19A878]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Left Column: Visual Asset with Art Direction */}
          <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] overflow-hidden bg-[#080B0A]">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out"
            />
            {/* Atmospheric Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#080B0A]/40 lg:to-[#080B0A]" />
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#080B0A]/80" />
            
            {/* Fine Geometric Overlay Line */}
            <div className="absolute top-6 left-6 border border-[#D4AF37]/30 bg-[#080B0A]/80 backdrop-blur-md px-3 py-1 text-[10px] font-sans tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5">
              <Bookmark className="w-3 h-3 text-[#19A878]" />
              <span>{article.category}</span>
            </div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative z-10">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                  FEATURED INSIGHT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#19A878]" />
                <span className="text-xs font-sans text-[#CFC9BB]/70">
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3EFE4] group-hover:text-[#E5C378] transition-colors duration-300 leading-tight mb-4">
                {article.title}
              </h2>

              {/* Excerpt */}
              <p className="font-sans text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>

            <div>
              {/* Metadata & Author Lockup */}
              <div className="pt-6 border-t border-[#D4AF37]/15 flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className="w-9 h-9 rounded-full border border-[#D4AF37]/40 object-cover"
                  />
                  <div>
                    <div className="font-sans text-xs font-semibold text-[#F3EFE4]">
                      {article.author.name}
                    </div>
                    <div className="font-sans text-[11px] text-[#CFC9BB]/60">
                      {article.author.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-sans text-[#D4AF37]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* CTA Link */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#F3EFE4] group-hover:text-[#D4AF37] transition-colors uppercase">
                <span>READ INSIGHT</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
