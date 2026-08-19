import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  Share2, 
  Twitter, 
  Linkedin, 
  Copy, 
  Check, 
  Bookmark, 
  Sparkles,
  ArrowUpRight,
  User
} from 'lucide-react';
import ArticleCard from './ArticleCard.jsx';
import NewsletterCTA from './NewsletterCTA.jsx';

export default function BlogPost({ article, allArticles = [], onBack, onSelectArticle }) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this insight from Siyara Innovations: "${article.title}"`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareLinkedin = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  // Find related articles based on category or excluding current
  const relatedArticles = allArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  if (!article) return null;

  return (
    <article className="relative bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#E5C378]">
      {/* Top Fixed Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#063C2D] z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#19A878] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Atmospheric Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#063C2D]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="pt-28 md:pt-36 pb-20 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Back Navigation & Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/30 bg-[#063C2D]/20 text-[#CFC9BB] hover:text-[#F3EFE4] hover:border-[#D4AF37] font-sans text-xs uppercase tracking-widest transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 text-[#D4AF37] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 border border-[#D4AF37]/30 bg-[#063C2D]/30 px-3 py-1 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
            <Bookmark className="w-3 h-3 text-[#19A878]" />
            <span>{article.category}</span>
          </div>
        </div>

        {/* Article Header Lockup */}
        <header className="max-w-4xl mb-12">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#CFC9BB]/70 mb-6">
            <span className="px-2.5 py-1 border border-[#D4AF37]/40 bg-[#080B0A] text-[#D4AF37] uppercase tracking-widest text-[10px]">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#19A878]" />
            <div className="flex items-center gap-1.5 text-[#D4AF37]">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            {article.views && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#19A878]" />
                <div className="flex items-center gap-1.5 text-[#CFC9BB]/60">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{article.views}</span>
                </div>
              </>
            )}
          </div>

          {/* Article Title */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F3EFE4] leading-[1.12] tracking-tight mb-8">
            {article.title}
          </h1>

          {/* Author & Share Bar */}
          <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            {/* Author Profile */}
            <div className="flex items-center gap-3.5">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-11 h-11 rounded-full border border-[#D4AF37]/40 object-cover"
              />
              <div>
                <div className="font-sans text-sm font-semibold text-[#F3EFE4]">
                  {article.author.name}
                </div>
                <div className="font-sans text-xs text-[#CFC9BB]/70">
                  {article.author.role}
                </div>
              </div>
            </div>

            {/* Share Controls */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#CFC9BB]/60 mr-2 hidden sm:inline">
                Share:
              </span>
              
              <button
                onClick={handleShareTwitter}
                className="w-9 h-9 border border-[#D4AF37]/20 bg-[#063C2D]/20 hover:border-[#D4AF37] hover:bg-[#063C2D] text-[#CFC9BB] hover:text-[#F3EFE4] flex items-center justify-center transition-all"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>

              <button
                onClick={handleShareLinkedin}
                className="w-9 h-9 border border-[#D4AF37]/20 bg-[#063C2D]/20 hover:border-[#D4AF37] hover:bg-[#063C2D] text-[#CFC9BB] hover:text-[#F3EFE4] flex items-center justify-center transition-all"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyLink}
                className="relative w-9 h-9 border border-[#D4AF37]/20 bg-[#063C2D]/20 hover:border-[#D4AF37] hover:bg-[#063C2D] text-[#CFC9BB] hover:text-[#F3EFE4] flex items-center justify-center transition-all"
                title="Copy Link"
              >
                {copied ? <Check className="w-4 h-4 text-[#19A878]" /> : <Copy className="w-4 h-4" />}
                
                {/* Toast Notification */}
                {copied && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#063C2D] border border-[#D4AF37]/40 text-[#F3EFE4] text-[10px] font-mono px-2.5 py-1 shadow-lg">
                    Link Copied!
                  </div>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-[21/9] min-h-[320px] max-h-[520px] w-full overflow-hidden border border-[#D4AF37]/25 mb-16 bg-[#063C2D]/30">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent" />
        </div>

        {/* Executive Summary Callout Box */}
        {article.executiveSummary && (
          <div className="max-w-4xl mx-auto mb-14 border border-[#D4AF37]/35 bg-[#063C2D]/20 p-6 sm:p-8 relative backdrop-blur-md">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
            
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="font-mono text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                Executive Summary
              </h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#F3EFE4]/90 font-normal leading-relaxed italic">
              "{article.executiveSummary}"
            </p>
          </div>
        )}

        {/* Article Body & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Sticky Left Sidebar (Table of Contents & Key Takeaways) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Table of Contents */}
            {article.sections && article.sections.length > 0 && (
              <div className="sticky top-28 p-6 border border-[#D4AF37]/20 bg-[#063C2D]/15 backdrop-blur-sm">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4 pb-2 border-b border-[#D4AF37]/15">
                  Table of Contents
                </h4>
                <nav className="space-y-3 font-sans text-xs">
                  {article.sections.map((sec, idx) => (
                    <a 
                      key={sec.id || idx}
                      href={`#${sec.id || `sec-${idx}`}`}
                      className="block text-[#CFC9BB]/70 hover:text-[#D4AF37] transition-colors leading-snug"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Key Takeaways Card */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className="p-6 border border-[#19A878]/30 bg-[#080B0A] relative">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#19A878] mb-4 pb-2 border-b border-[#19A878]/20 flex items-center gap-2">
                  <Bookmark className="w-3.5 h-3.5 text-[#19A878]" />
                  Key Takeaways
                </h4>
                <ul className="space-y-3 font-sans text-xs text-[#CFC9BB]/85 leading-relaxed">
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          {/* Main Editorial Body Content */}
          <main className="lg:col-span-8 space-y-12">
            {article.sections && article.sections.map((section, idx) => (
              <section id={section.id || `sec-${idx}`} key={idx} className="scroll-mt-32 space-y-6">
                {/* Section Title */}
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EFE4] leading-tight pb-3 border-b border-[#D4AF37]/15">
                  {section.title}
                </h2>

                {/* Section Content Paragraphs */}
                {section.content && section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="font-sans text-sm sm:text-base text-[#CFC9BB]/90 font-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Optional Pull Quote */}
                {section.quote && (
                  <blockquote className="my-8 p-6 border-l-2 border-[#D4AF37] bg-[#063C2D]/30 italic font-serif text-lg text-[#F3EFE4] leading-relaxed">
                    "{section.quote}"
                  </blockquote>
                )}
              </section>
            ))}

            {/* Tags Lockup */}
            {article.tags && (
              <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#CFC9BB]/60 mr-2">Tags:</span>
                {article.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 border border-[#D4AF37]/20 bg-[#080B0A] text-[#CFC9BB]/80 text-xs font-sans">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </main>
        </div>

        {/* Detailed Author Profile Card */}
        <div className="max-w-4xl mx-auto mt-20 p-8 sm:p-10 border border-[#D4AF37]/25 bg-[#063C2D]/15 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img 
            src={article.author.avatar} 
            alt={article.author.name}
            className="w-20 h-20 rounded-full border-2 border-[#D4AF37]/40 object-cover shrink-0"
          />
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-1">
              Written By
            </div>
            <h3 className="font-serif text-xl text-[#F3EFE4] font-normal mb-1">
              {article.author.name}
            </h3>
            <p className="text-xs font-sans text-[#19A878] font-medium mb-3">
              {article.author.role}
            </p>
            <p className="font-sans text-xs text-[#CFC9BB]/80 leading-relaxed font-light">
              {article.author.bio || 'Author at Siyara Innovations focusing on strategic positioning and enterprise technology.'}
            </p>
          </div>
        </div>

        {/* Related Recommended Insights */}
        {relatedArticles.length > 0 && (
          <section className="mt-28 pt-16 border-t border-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  RECOMMENDED READING
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EFE4] mt-1">
                  More Strategic Insights
                </h3>
              </div>

              <button
                onClick={onBack}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider hover:text-[#E5C378]"
              >
                <span>View All Articles</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relArt) => (
                <div 
                  key={relArt.id} 
                  onClick={() => onSelectArticle && onSelectArticle(relArt)}
                  className="cursor-pointer"
                >
                  <ArticleCard article={relArt} onSelectArticle={onSelectArticle} />
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Integrated Newsletter Subscription CTA */}
      <NewsletterCTA />
    </article>
  );
}
