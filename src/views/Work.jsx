'use client';

import React, { useState, useEffect } from 'react';
import WorkHero from '../components/work/WorkHero';
import IndustryIndex from '../components/work/IndustryIndex';
import FeaturedWorkGrid from '../components/work/FeaturedWorkGrid';
import IndustriesSection from '../components/work/IndustriesSection';
import FeaturedCaseStudy from '../components/work/FeaturedCaseStudy';
import WorkCTA from '../components/work/WorkCTA';
import { getIndustryCategories } from '../data/projectsData';

export default function Work() {
  const [selectedIndustry, setSelectedIndustry] = useState('ALL');
  const [selectedClassification, setSelectedClassification] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
    // Parse query parameters if present (e.g., ?industry=healthcare&type=demo)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const indParam = params.get('industry');
      const classParam = params.get('type') || params.get('classification');

      if (indParam) {
        const categories = getIndustryCategories();
        const matchedCat = categories.find(
          (c) => c.id.toLowerCase().replace(/[^a-z0-9]/g, '') === indParam.toLowerCase().replace(/[^a-z0-9]/g, '')
        );
        if (matchedCat) {
          setSelectedIndustry(matchedCat.id);
        }
      }

      if (classParam) {
        const normalized = classParam.toUpperCase().replace(/[^A-Z]/g, '_');
        if (['DELIVERED_PROJECT', 'LIVE_DEMO', 'CONCEPT'].includes(normalized)) {
          setSelectedClassification(normalized);
        }
      }
    }
  }, []);

  const handleSelectIndustry = (industryId) => {
    setSelectedIndustry(industryId);
    
    // Update URL query string without reloading page
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (industryId === 'ALL') {
        url.searchParams.delete('industry');
      } else {
        url.searchParams.set('industry', industryId.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s*\/\s*/g, '-').replace(/\s+/g, '-'));
      }
      window.history.pushState({}, '', url.toString());
    }

    // Smoothly scroll to the featured work section when an industry filter is chosen
    const gridEl = document.getElementById('featured-work');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectClassification = (classificationId) => {
    setSelectedClassification(classificationId);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (classificationId === 'ALL') {
        url.searchParams.delete('type');
      } else {
        url.searchParams.set('type', classificationId.toLowerCase().replace(/_/g, '-'));
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  const handleClearFilter = () => {
    handleSelectIndustry('ALL');
    handleSelectClassification('ALL');
  };

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] selection:bg-[#071E18] selection:text-[#D9B45F]">
      {/* SECTION 01 - HERO (DARK) */}
      <WorkHero />

      {/* SECTION 02 - INDUSTRY INDEX (WARM IVORY) */}
      <IndustryIndex
        selectedIndustry={selectedIndustry}
        onSelectIndustry={handleSelectIndustry}
      />

      {/* SECTION 03 - FEATURED WORK & PROJECT GRID (WARM IVORY CONTINUED) */}
      <FeaturedWorkGrid
        selectedIndustry={selectedIndustry}
        selectedClassification={selectedClassification}
        onSelectClassification={handleSelectClassification}
        onClearFilter={handleClearFilter}
      />

      {/* SECTION 04 - INDUSTRIES WE WORK WITH (DARK EMERALD) */}
      <IndustriesSection />

      {/* SECTION 05 - FEATURED CASE STUDY (WARM IVORY) */}
      <FeaturedCaseStudy />

      {/* SECTION 06 - CTA (DARK OBSIDIAN) */}
      <WorkCTA />
    </div>
  );
}
