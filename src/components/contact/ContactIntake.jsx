'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';

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
    <section id="intake" className="relative py-28 sm:py-36 bg-[#F3EFE3] text-[#101613] overflow-hidden">
      {/* Editorial Texture Background */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-80 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: easeCustom }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
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
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: easeCustom }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[0.98] mb-6"
          >
            START A <br />
            <span className="text-[#0B5E49] italic font-normal">CONVERSATION.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCustom }}
            className="font-sans text-base sm:text-lg text-[#101613]/70 font-light leading-relaxed max-w-xl"
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
              <div className="p-4 border-l-2 border-red-600 bg-red-50 text-xs text-red-800 font-sans">
                {status.error}
              </div>
            )}

            {/* Field 1: Name */}
            <div className="group">
              <label htmlFor="name" className="block text-xs font-mono font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-2">
                YOUR NAME *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="How should we call you?"
                className="w-full py-3 bg-transparent border-b border-[#101613]/20 text-base sm:text-lg text-[#101613] placeholder-[#101613]/30 font-sans focus:outline-none focus:border-[#0B5E49] transition-colors"
              />
            </div>

            {/* Field 2: Work Email */}
            <div className="group">
              <label htmlFor="email" className="block text-xs font-mono font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-2">
                WORK EMAIL *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full py-3 bg-transparent border-b border-[#101613]/20 text-base sm:text-lg text-[#101613] placeholder-[#101613]/30 font-sans focus:outline-none focus:border-[#0B5E49] transition-colors"
              />
            </div>

            {/* Field 3: Company / Brand */}
            <div className="group">
              <label htmlFor="company" className="block text-xs font-mono font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-2">
                COMPANY / BRAND
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company or brand"
                className="w-full py-3 bg-transparent border-b border-[#101613]/20 text-base sm:text-lg text-[#101613] placeholder-[#101613]/30 font-sans focus:outline-none focus:border-[#0B5E49] transition-colors"
              />
            </div>

            {/* Field 4: Segmented Capability Options */}
            <div>
              <label className="block text-xs font-mono font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-4">
                WHAT ARE YOU LOOKING TO BUILD?
              </label>
              <div className="flex flex-wrap gap-3">
                {capabilityOptions.map((cap) => {
                  const isSelected = formData.selectedCapability === cap;
                  return (
                    <button
                      key={cap}
                      type="button"
                      onClick={() => handleSelectCapability(cap)}
                      className={`px-5 py-2.5 text-xs font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-300 ${
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
              <label htmlFor="details" className="block text-xs font-mono font-bold tracking-[0.2em] text-[#B9923F] uppercase mb-2">
                PROJECT DETAILS *
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                required
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us what you're trying to achieve..."
                className="w-full py-3 bg-transparent border-b border-[#101613]/20 text-base text-[#101613] placeholder-[#101613]/30 font-sans focus:outline-none focus:border-[#0B5E49] transition-colors resize-none"
              />
            </div>

            {/* Form CTA & Reassurance */}
            <div className="pt-4 space-y-4">
              <button
                type="submit"
                disabled={status.submitting}
                className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#B9923F] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#B9923F]/20 hover:shadow-[#0B5E49]/30"
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
