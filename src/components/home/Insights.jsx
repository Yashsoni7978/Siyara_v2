import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Insights({ onNavigate }) {
  const handleArticleClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('blog');
    window.history.pushState({}, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const articles = [
    {
      id: '01',
      category: 'AI & SEARCH VISIBILITY',
      title: 'AI Search Engines & Generative Visibility Architecture',
      excerpt: 'How generative AI search engines are transforming brand discoverability, and why structured data and GEO strategy are replacing traditional keyword SEO.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      featured: true,
    },
    {
      id: '02',
      category: 'BRAND POSITIONING',
      title: 'Architectural Brand Systems for Modern Digital Markets',
      excerpt: 'Moving beyond simple logos to craft holistic, high-trust digital positioning that commands market dominance.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: '03',
      category: 'CONVERSION UX',
      title: 'Turning High-Intent Visitors into Active Agency Clients',
      excerpt: 'Engineering friction-free digital funnels and micro-interactions that elevate brand perception and increase conversion.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
  ];

  const leadArticle = articles[0];
  const secondaryArticles = articles.slice(1);

  return (
    <section id="insights" className="relative py-28 sm:py-36 bg-[#063C2D]/20 border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
            10
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            Agency Insights & Perspectives
          </span>
        </div>

        {/* Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE4] font-normal leading-[1.04] tracking-tight">
              THINKING BEYOND <br />
              THE <span className="text-[#E5C378] italic">WEBSITE.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end flex-col items-start lg:items-end">
            <p className="font-sans text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed max-w-sm mb-4">
              Strategic insights on digital growth, brand positioning, search intelligence, and conversion engineering.
            </p>
            <a
              href="/blog"
              onClick={handleArticleClick}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#D4AF37] hover:text-[#E5C378] transition-colors uppercase"
            >
              <span>VIEW ALL INSIGHTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Editorial Article Layout (1 Dominant Lead + 2 Supporting Articles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Dominant Lead Article (7 cols) */}
          <a
            href="/blog"
            onClick={handleArticleClick}
            className="lg:col-span-7 group flex flex-col justify-between p-8 sm:p-12 border border-[#D4AF37]/25 bg-[#080B0A]/80 hover:border-[#D4AF37] transition-all duration-500 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase">
                  {leadArticle.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#19A878]" />
                <span className="text-xs font-sans text-[#CFC9BB]/60">
                  FEATURED READ
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-[#F3EFE4] font-normal leading-tight mb-4 group-hover:text-[#E5C378] transition-colors">
                {leadArticle.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed max-w-xl mb-8">
                {leadArticle.excerpt}
              </p>
            </div>

            <div className="relative h-64 sm:h-72 my-6 overflow-hidden border border-[#D4AF37]/15">
              <img
                src={leadArticle.image}
                alt={leadArticle.title}
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent" />
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/15 flex items-center justify-between relative z-10">
              <span className="text-xs font-sans font-semibold tracking-[0.18em] text-[#F3EFE4] group-hover:text-[#D4AF37] transition-colors uppercase">
                READ FEATURED INSIGHT
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          {/* Supporting Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {secondaryArticles.map((article) => (
              <a
                key={article.id}
                href="/blog"
                onClick={handleArticleClick}
                className="group flex flex-col justify-between p-7 border border-[#D4AF37]/20 bg-[#080B0A]/80 hover:border-[#D4AF37] transition-all duration-500 flex-1"
              >
                <div>
                  <div className="relative h-36 mb-5 overflow-hidden border border-[#D4AF37]/15">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent" />
                  </div>

                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase mb-2 block group-hover:text-[#E5C378] transition-colors">
                    {article.category}
                  </span>

                  <h4 className="font-serif text-xl sm:text-2xl text-[#F3EFE4] font-normal leading-snug mb-3 group-hover:text-[#E5C378] transition-colors">
                    {article.title}
                  </h4>

                  <p className="font-sans text-xs text-[#CFC9BB]/70 font-light leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
                  <span className="text-[10px] font-sans font-semibold tracking-[0.16em] text-[#F3EFE4] group-hover:text-[#D4AF37] transition-colors uppercase">
                    READ ARTICLE
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
