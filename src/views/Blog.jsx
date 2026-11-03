'use client';

import React, { useState, useMemo } from 'react';
import BlogHero from '../components/blog/BlogHero.jsx';
import FeaturedArticle from '../components/blog/FeaturedArticle.jsx';
import BlogControls from '../components/blog/BlogControls.jsx';
import ArticleGrid from '../components/blog/ArticleGrid.jsx';
import BlogPagination from '../components/blog/BlogPagination.jsx';
import NewsletterCTA from '../components/blog/NewsletterCTA.jsx';
import { BLOG_CATEGORIES, FEATURED_ARTICLE, BLOG_ARTICLES } from '../data/blogArticles.js';

const ARTICLES_PER_PAGE = 6;

export default function Blog({ onSelectArticle }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // All 31 articles combined
  const allArticles = useMemo(() => {
    return [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  }, []);

  // Compute dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: allArticles.length };
    BLOG_CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = allArticles.filter((art) => art.category === cat).length;
      }
    });
    return counts;
  }, [allArticles]);

  // Determine whether we are in a filtered/search state
  const isFiltered = activeCategory !== 'All' || searchQuery.trim() !== '';

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    if (!isFiltered) {
      // On default view, featured article is highlighted in FeaturedArticle hero section.
      // Grid displays remaining 30 articles to prevent immediate duplicate rendering.
      return BLOG_ARTICLES;
    }

    const query = searchQuery.trim().toLowerCase();
    return allArticles.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const matchesQuery = 
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        (Array.isArray(article.tags) && article.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesQuery;
    });
  }, [allArticles, activeCategory, searchQuery, isFiltered]);

  // Calculate total pages
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE));
  }, [filteredArticles]);

  // Paginated slice for current page
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const gridElement = document.getElementById('article-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#E5C378]">
      {/* 01 BLOG HERO */}
      <BlogHero />

      {/* 02 FEATURED ARTICLE (Prominent hero spotlight when browsing all) */}
      {!isFiltered && (
        <FeaturedArticle 
          article={FEATURED_ARTICLE} 
          onSelectArticle={onSelectArticle} 
        />
      )}

      {/* 03 CATEGORY FILTERS & EDITORIAL SEARCH */}
      <BlogControls 
        categories={BLOG_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        categoryCounts={categoryCounts}
        totalResults={isFiltered ? filteredArticles.length : allArticles.length}
      />

      {/* 04 ARTICLE GRID */}
      <ArticleGrid 
        articles={paginatedArticles} 
        onSelectArticle={onSelectArticle}
        totalCount={filteredArticles.length}
        onReset={handleResetFilters}
      />

      {/* 05 PAGINATION */}
      {filteredArticles.length > 0 && totalPages > 1 && (
        <BlogPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* 06 NEWSLETTER & EDITORIAL PERSPECTIVES CTA */}
      <NewsletterCTA />
    </div>
  );
}
