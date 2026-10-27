'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';

export default function ContactIntake() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selectedCapability: 'Brand',
    details: '',
    budget: '',
    timeline: '',
    b_website: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const capabilityOptions = [
    'Brand',
    'Website / Digital Experience',
    'E-Commerce',
    'Digital Marketing',
    'SEO & Visibility',
    'AI & Automation',
    'Analytics',
    'Something Else',
  ];

  const getWhatsAppFallbackUrl = () => {
    const intro = `Hello Siyara Innovations, my name is ${formData.name || 'a visitor'}`;
    const companyInfo = formData.company ? ` from ${formData.company}` : '';
    const capInfo = formData.selectedCapability ? `\n\nService needed: ${formData.selectedCapability}` : '';
    const detailsInfo = formData.details ? `\nProject brief: ${formData.details}` : '';
    const message = `${intro}${companyInfo}.${capInfo}${detailsInfo}`;
    return `https://wa.me/919587269209?text=${encodeURIComponent(message)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectCapability = (cap) => {
    setFormData((prev) => ({ ...prev, selectedCapability: cap }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    if (status.submitting) return; // Prevent duplicate submissions

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({
          name: '',
          email: '',
          company: '',
          selectedCapability: 'Brand',
          details: '',
          budget: '',
          timeline: '',
        });
      } else {
        setStatus({ submitting: false, submitted: false, error: result.error || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: 'An unexpected error occurred. Please try again later.' });
    }
  };

  return (
    <section id="intake" className="relative py-16 sm:py-20 bg-[#F3EFE3] text-[#101613] overflow-hidden">
      {/* Editorial Texture Background */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-80 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
              02
            </span>
            <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
              PROJECT INTAKE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.6, ease: easeCustom }}
            className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[1.08] sm:leading-[0.98] mb-4 sm:mb-6 break-words"
          >
            START A <br />
            <span className="text-[#0B5E49] font-normal">CONVERSATION.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: easeCustom }}
            className="font-sans text-sm sm:text-base lg:text-lg text-[#101613]/70 font-light leading-relaxed max-w-xl"
          >
            Every meaningful digital system starts with understanding the problem first.
          </motion.p>
        </div>

        {/* Editorial Form Container */}
        {status.submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 sm:p-16 border border-[#0B5E49]/30 bg-[#ECE7D8] text-center max-w-2xl mx-auto my-8 shadow-sm"
          >
            <div className="w-14 h-14 rounded-full bg-[#0B5E49] text-[#F3EFE3] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-3xl text-[#101613] font-normal mb-3">
              Brief Received.
            </h3>
            <p className="font-sans text-sm text-[#101613]/70 leading-relaxed mb-8">
              We will review your brief and get back to you with the next strategic step.
            </p>
            <button
              onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
              className="px-8 py-3.5 bg-[#B9923F] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-bold tracking-[0.18em] uppercase transition-colors rounded-full"
            >
              SUBMIT ANOTHER BRIEF
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12 max-w-4xl">
            {status.error && (
              <div className="p-5 border-l-4 border-amber-600 bg-amber-50 text-amber-950 font-sans space-y-3">
                <p className="text-sm font-medium">{status.error}</p>
                <div className="pt-1">
                  <a
                    href={getWhatsAppFallbackUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B5E49] hover:bg-[#071E18] text-[#F3EFE3] text-xs font-bold tracking-[0.12em] uppercase rounded-full transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D9B45F]" />
                    <span>Open &amp; Send Brief on WhatsApp Instead</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Anti-spam Honeypot (Hidden from human visitors) */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <label htmlFor="b_website">Leave this field blank</label>
              <input
                type="text"
                id="b_website"
                name="b_website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.b_website || ''}
                onChange={handleChange}
              />
            </div>

            {/* Field 1: Name */}
            <div className="group">
              <label htmlFor="name" className="block text-xs font-sans font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-2">
                YOUR NAME <span className="text-[#0B5E49]" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                value={formData.name}
                onChange={handleChange}
                placeholder="How should we call you?"
                className="w-full py-3 bg-transparent border-b border-[#101613]/20 text-base sm:text-lg text-[#101613] placeholder-[#101613]/30 font-sans focus:outline-none focus:border-[#0B5E49] focus-visible:ring-1 focus-visible:ring-[#0B5E49] transition-colors"
              />
            </div>

            {/* Field 2: Work Email */}
            <div className="group">
              <label htmlFor="email" className="block text-xs font-sans font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-2">
                WORK EMAIL <span className="text-[#0B5E49]" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full py-3 bg-transparent border-b border-[#101613]/20 text-base sm:text-lg text-[#101613] placeholder-[#101613]/30 font-sans focus:outline-none focus:border-[#0B5E49] focus-visible:ring-1 focus-visible:ring-[#0B5E49] transition-colors"
              />
            </div>

            {/* Field 3: Company / Brand */}
            <div className="group">
              <label htmlFor="company" className="block text-xs font-sans font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-2">
                COMPANY / BRAND <span className="text-xs font-normal text-[#101613]/50">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company or brand"
                className="w-full py-3 bg-transparent border-b border-[#101613]/20 text-base sm:text-lg text-[#101613] placeholder-[#101613]/30 font-sans focus:outline-none focus:border-[#0B5E49] focus-visible:ring-1 focus-visible:ring-[#0B5E49] transition-colors"
              />
            </div>

            {/* Field 4: Segmented Capability Options */}
            <div>
              <label className="block text-xs font-sans font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-4">
                WHAT ARE YOU LOOKING TO BUILD?
              </label>
              <div className="flex flex-wrap gap-3" role="group" aria-label="Select service capability">
                {capabilityOptions.map((cap) => {
                  const isSelected = formData.selectedCapability === cap;
                  return (
                    <button
                      key={cap}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => handleSelectCapability(cap)}
                      className={`min-h-[44px] px-4 sm:px-5 py-2.5 text-xs font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5E49] ${
                        isSelected
                          ? 'bg-[#0B5E49] text-[#F3EFE3] shadow-md'
                          : 'bg-[#ECE7D8] text-[#101613]/80 border border-[#B9923F]/30 hover:border-[#0B5E49] hover:text-[#0B5E49]'
                      }`}
                    >
                      {cap}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field 5: Project Details */}
            <div className="group">
              <label htmlFor="details" className="block text-xs font-sans font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-2">
                PROJECT DETAILS <span className="text-[#0B5E49]" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                required
                aria-required="true"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us what you're trying to achieve..."
                className="w-full py-3 bg-transparent border-b border-[#101613]/20 text-base text-[#101613] placeholder-[#101613]/30 font-sans focus:outline-none focus:border-[#0B5E49] focus-visible:ring-1 focus-visible:ring-[#0B5E49] transition-colors resize-none"
              />
            </div>

            {/* Form CTA & Reassurance */}
            <div className="pt-4 space-y-4">
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2.5 px-9 py-4 bg-[#B9923F] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#B9923F]/20 hover:shadow-[#0B5E49]/30"
              >
                {status.submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#F3EFE3]" />
                    <span>SENDING BRIEF...</span>
                  </>
                ) : (
                  <>
                    <span>SEND THE BRIEF</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>

              <p className="font-sans text-xs text-[#101613]/60 font-light leading-relaxed">
                We'll review your brief and get back to you with the next step.
              </p>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
