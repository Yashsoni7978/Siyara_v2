'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  MessageCircle,
  AlertCircle,
  Send,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';

const SERVICES_LIST = [
  'Brand Strategy',
  'Creative & Content',
  'Web & Digital Experiences',
  'SEO & GEO',
  'AI & Automation',
  'Analytics & Growth',
  'E-commerce Development',
  'Performance Marketing',
  'Not Sure Yet',
];

const BUDGET_OPTIONS = [
  'Growth Tier (< 50k)',
  'Scale Tier (50k - 1.5L)',
  'Enterprise Flagship (1.5L - 3L)',
  'Bespoke Architecture (3L+)',
  'Not Decided Yet',
];

const TIMELINE_OPTIONS = [
  'Immediately',
  'Within 2–4 Weeks',
  'Within 1–2 Months',
  'Within 3–6 Months',
  'Just Exploring',
];

export default function ContactIntake() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web & Digital Experiences',
    details: '',
    phone: '',
    budget: '',
    timeline: '',
    website: '',
    b_website: '', // Anti-spam honeypot
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [hasStarted, setHasStarted] = useState(false);

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  // Track initial interaction
  const handleFirstInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent(AnalyticsEvents.CONTACT_FORM_STARTED);
    }
  };

  // Field validation
  const validateField = (field, value) => {
    let error = null;
    const trimmed = typeof value === 'string' ? value.trim() : '';

    switch (field) {
      case 'name':
        if (!trimmed) error = 'Full name is required.';
        else if (trimmed.length < 2) error = 'Name must be at least 2 characters.';
        break;
      case 'email':
        if (!trimmed) error = 'Work email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
          error = 'Please enter a valid email address.';
        }
        break;
      case 'company':
        if (!trimmed) error = 'Company or brand name is required.';
        break;
      case 'service':
        if (!trimmed) error = 'Please select a service discipline.';
        break;
      case 'details':
        if (!trimmed) error = 'Project overview is required.';
        else if (trimmed.length < 10) {
          error = 'Please describe your project in at least 10 characters.';
        }
        break;
      case 'phone':
        if (trimmed && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,20}$/.test(trimmed)) {
          error = 'Please enter a valid phone number format.';
        }
        break;
      case 'website':
        if (trimmed && !trimmed.includes('.')) {
          error = 'Please enter a valid website URL (e.g., example.com).';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    handleFirstInteraction();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSelectService = (selectedService) => {
    handleFirstInteraction();
    setFormData((prev) => ({ ...prev, service: selectedService }));
    setTouched((prev) => ({ ...prev, service: true }));
    setErrors((prev) => ({ ...prev, service: null }));
    trackEvent(AnalyticsEvents.CONTACT_SERVICE_SELECTED, { service_name: selectedService });
  };

  const handleSelectBudget = (selectedBudget) => {
    handleFirstInteraction();
    setFormData((prev) => ({
      ...prev,
      budget: prev.budget === selectedBudget ? '' : selectedBudget,
    }));
  };

  const handleSelectTimeline = (selectedTimeline) => {
    handleFirstInteraction();
    setFormData((prev) => ({
      ...prev,
      timeline: prev.timeline === selectedTimeline ? '' : selectedTimeline,
    }));
  };

  // Generate dynamic WhatsApp fallback message
  const generateWhatsAppUrl = () => {
    const parts = [
      `Hello Siyara Innovations, my name is ${formData.name || 'a prospective client'}${
        formData.company ? ` from ${formData.company}` : ''
      }.`,
    ];

    if (formData.service && formData.service !== 'Not Sure Yet') {
      parts.push(`I am interested in your ${formData.service} services.`);
    }
    if (formData.budget) {
      parts.push(`Approximate budget: ${formData.budget}.`);
    }
    if (formData.timeline) {
      parts.push(`Target timeline: ${formData.timeline}.`);
    }
    if (formData.details) {
      parts.push(`Project overview:\n${formData.details}`);
    } else {
      parts.push(`I would like to explore a potential project collaboration.`);
    }

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      parts.join('\n\n')
    )}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors = {};
    const fieldsToValidate = ['name', 'email', 'company', 'service', 'details', 'phone', 'website'];
    fieldsToValidate.forEach((f) => {
      const err = validateField(f, formData[f]);
      if (err) newErrors[f] = err;
    });

    setTouched({
      name: true,
      email: true,
      company: true,
      service: true,
      details: true,
      phone: true,
      website: true,
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus((prev) => ({
        ...prev,
        error: 'Please resolve the highlighted fields before submitting.',
      }));
      return;
    }

    if (status.submitting) return; // Prevent double submission

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

      if (response.ok && result.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        trackEvent(AnalyticsEvents.CONTACT_FORM_SUBMITTED, {
          service: formData.service,
          has_budget: Boolean(formData.budget),
          has_timeline: Boolean(formData.timeline),
        });
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error:
            result.error ||
            'We were unable to deliver your inquiry automatically. Please use the direct WhatsApp button below to message us immediately.',
        });
      }
    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error:
          'A network error occurred while submitting. Your details are preserved below — please connect directly on WhatsApp.',
      });
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'Web & Digital Experiences',
      details: '',
      phone: '',
      budget: '',
      timeline: '',
      website: '',
      b_website: '',
    });
    setErrors({});
    setTouched({});
    setStatus({ submitting: false, submitted: false, error: null });
  };

  return (
    <section
      id="inquiry-form"
      aria-label="Project Inquiry Form"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
              — PROJECT SCOPING &amp; INTAKE —
            </span>
          </div>

          <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#080B0A] leading-[1.12] tracking-tight mb-4">
            Start a Direct Project{' '}
            <span className="font-lora italic text-[#C99742]">
              Inquiry.
            </span>
          </h2>

          <p className="font-lora text-sm sm:text-base text-[#4A504D] leading-relaxed max-w-xl">
            Complete the brief below to give us context on your business, timeline, and goals. We review every submission thoughtfully and reply with clear next steps.
          </p>
        </div>

        {/* Form Body or Confirmation State */}
        <AnimatePresence mode="wait">
          {status.submitted ? (
            /* ========================================================================= */
            /* 01. INQUIRY SUCCESS CONFIRMATION STATE                                    */
            /* ========================================================================= */
            <motion.div
              key="confirmation-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-14 rounded-2xl bg-[#EFE9DC] border border-[#080B0A]/10 text-center max-w-2xl mx-auto shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-[#063C2D] text-[#E5C378] flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
              </div>

              <span className="text-xs font-roboto font-semibold tracking-widest text-[#C99742] uppercase block mb-2">
                Inquiry Received
              </span>

              <h3 className="font-roboto text-2xl sm:text-3xl text-[#080B0A] font-normal mb-3">
                Thank you for reaching out.
              </h3>

              <p className="font-lora text-sm sm:text-base text-[#4A504D] leading-relaxed mb-8 max-w-md mx-auto">
                Your project brief has been received. Our studio team will review your objectives and connect with structured next steps.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(AnalyticsEvents.CONTACT_WHATSAPP_CLICKED, { source: 'success_screen' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2 px-7 py-3 bg-[#063C2D] hover:bg-[#080B0A] text-[#F3EFE4] text-xs font-roboto font-bold tracking-[0.12em] uppercase rounded-full transition-all duration-300 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#19A878]" />
                  <span>Connect on WhatsApp Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E5C378]" />
                </a>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-7 py-3 rounded-full border border-[#080B0A]/20 hover:border-[#080B0A] text-[#080B0A] text-xs font-roboto font-semibold tracking-[0.12em] uppercase transition-colors"
                >
                  Submit Another Brief
                </button>
              </div>
            </motion.div>
          ) : (
            /* ========================================================================= */
            /* 02. ACTIVE INQUIRY FORM                                                   */
            /* ========================================================================= */
            <motion.form
              key="inquiry-form-active"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-10 max-w-3xl"
            >
              {/* Error Banner with WhatsApp Fallback */}
              {status.error && (
                <div
                  role="alert"
                  className="p-5 sm:p-6 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-950 font-roboto space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold">{status.error}</p>
                      <p className="text-xs font-lora text-amber-900/80 mt-1">
                        Your entered brief has been safely retained. You can also send it directly via WhatsApp without re-typing.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent(AnalyticsEvents.CONTACT_WHATSAPP_CLICKED, { source: 'error_banner' })}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#063C2D] hover:bg-[#080B0A] text-[#F3EFE4] text-xs font-roboto font-bold tracking-wider uppercase rounded-full transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#19A878]" />
                      <span>Send This Brief on WhatsApp Instead</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#E5C378]" />
                    </a>
                  </div>
                </div>
              )}

              {/* Anti-spam Honeypot (Invisible to human visitors) */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="b_website">Do not fill this field</label>
                <input
                  type="text"
                  id="b_website"
                  name="b_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.b_website}
                  onChange={handleChange}
                />
              </div>

              {/* ── SECTION A: CONTACT & COMPANY PARTICULARS ──────────────── */}
              <div className="space-y-6">
                <h3 className="font-roboto text-xs font-bold uppercase tracking-[0.16em] text-[#C99742] pb-2 border-b border-[#080B0A]/10">
                  1. Your Identity &amp; Organization
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 1: Full Name (Required) */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-roboto font-semibold tracking-wider uppercase text-[#080B0A] mb-2"
                    >
                      Full Name <span className="text-rose-600" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Vikram Sharma"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3 text-sm font-roboto bg-[#EFE9DC] border rounded-lg text-[#080B0A] placeholder-[#080B0A]/35 focus:outline-none transition-colors ${
                        errors.name && touched.name
                          ? 'border-rose-500 focus:border-rose-600'
                          : 'border-[#080B0A]/15 focus:border-[#C99742]'
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" className="text-xs text-rose-600 mt-1.5 font-roboto">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Field 2: Work Email (Required) */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-roboto font-semibold tracking-wider uppercase text-[#080B0A] mb-2"
                    >
                      Work Email <span className="text-rose-600" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="vikram@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 text-sm font-roboto bg-[#EFE9DC] border rounded-lg text-[#080B0A] placeholder-[#080B0A]/35 focus:outline-none transition-colors ${
                        errors.email && touched.email
                          ? 'border-rose-500 focus:border-rose-600'
                          : 'border-[#080B0A]/15 focus:border-[#C99742]'
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="text-xs text-rose-600 mt-1.5 font-roboto">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 3: Company / Brand Name (Required) */}
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-roboto font-semibold tracking-wider uppercase text-[#080B0A] mb-2"
                    >
                      Company / Brand Name <span className="text-rose-600" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Atelier Living or Private Practice"
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={errors.company ? 'company-error' : undefined}
                      className={`w-full px-4 py-3 text-sm font-roboto bg-[#EFE9DC] border rounded-lg text-[#080B0A] placeholder-[#080B0A]/35 focus:outline-none transition-colors ${
                        errors.company && touched.company
                          ? 'border-rose-500 focus:border-rose-600'
                          : 'border-[#080B0A]/15 focus:border-[#C99742]'
                      }`}
                    />
                    {errors.company && touched.company && (
                      <p id="company-error" className="text-xs text-rose-600 mt-1.5 font-roboto">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Field 6: Phone / WhatsApp (Optional) */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-roboto font-semibold tracking-wider uppercase text-[#080B0A] mb-2"
                    >
                      Phone / WhatsApp Number <span className="text-[#080B0A]/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`w-full px-4 py-3 text-sm font-roboto bg-[#EFE9DC] border rounded-lg text-[#080B0A] placeholder-[#080B0A]/35 focus:outline-none transition-colors ${
                        errors.phone && touched.phone
                          ? 'border-rose-500 focus:border-rose-600'
                          : 'border-[#080B0A]/15 focus:border-[#C99742]'
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <p id="phone-error" className="text-xs text-rose-600 mt-1.5 font-roboto">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Field 9: Website / Existing URL (Optional) */}
                <div>
                  <label
                    htmlFor="contact-website"
                    className="block text-xs font-roboto font-semibold tracking-wider uppercase text-[#080B0A] mb-2"
                  >
                    Current Website or Digital Presence <span className="text-[#080B0A]/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="contact-website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="https://yourbrand.com (optional)"
                    className="w-full px-4 py-3 text-sm font-roboto bg-[#EFE9DC] border border-[#080B0A]/15 rounded-lg text-[#080B0A] placeholder-[#080B0A]/35 focus:outline-none focus:border-[#C99742] transition-colors"
                  />
                </div>
              </div>

              {/* ── SECTION B: SERVICE REQUIRED (8 DISCIPLINES + NOT SURE) ─ */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#080B0A]/10">
                  <h3 className="font-roboto text-xs font-bold uppercase tracking-[0.16em] text-[#C99742]">
                    2. Service Discipline Required <span className="text-rose-600">*</span>
                  </h3>
                  <span className="text-[11px] font-roboto text-[#080B0A]/50">
                    Select the primary discipline
                  </span>
                </div>

                <div
                  role="radiogroup"
                  aria-label="Service Required"
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
                >
                  {SERVICES_LIST.map((srv) => {
                    const isSelected = formData.service === srv;

                    return (
                      <button
                        key={srv}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => handleSelectService(srv)}
                        className={`px-3.5 py-3 rounded-lg text-xs font-roboto font-medium transition-all text-left flex items-center justify-between border ${
                          isSelected
                            ? 'bg-[#063C2D] text-[#F3EFE4] border-[#063C2D] shadow-sm'
                            : 'bg-[#EFE9DC] hover:bg-[#E5DFD0] text-[#080B0A]/80 border-[#080B0A]/10'
                        }`}
                      >
                        <span className="truncate">{srv}</span>
                        {isSelected && <Sparkles className="w-3 h-3 text-[#E5C378] shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── SECTION C: PROJECT DESCRIPTION (REQUIRED) ─────────────── */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#080B0A]/10">
                  <h3 className="font-roboto text-xs font-bold uppercase tracking-[0.16em] text-[#C99742]">
                    3. Project Description &amp; Objectives <span className="text-rose-600">*</span>
                  </h3>
                  <span className="text-[11px] font-roboto text-[#080B0A]/50">
                    Min. 10 characters
                  </span>
                </div>

                <div>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows={5}
                    required
                    value={formData.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us what you're building, key challenges, deliverables needed, and what a successful outcome looks like..."
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? 'details-error' : undefined}
                    className={`w-full p-4 text-sm font-roboto bg-[#EFE9DC] border rounded-lg text-[#080B0A] placeholder-[#080B0A]/35 focus:outline-none transition-colors resize-y min-h-[130px] ${
                      errors.details && touched.details
                        ? 'border-rose-500 focus:border-rose-600'
                        : 'border-[#080B0A]/15 focus:border-[#C99742]'
                    }`}
                  />
                  {errors.details && touched.details && (
                    <p id="details-error" className="text-xs text-rose-600 mt-1.5 font-roboto">
                      {errors.details}
                    </p>
                  )}
                </div>
              </div>

              {/* ── SECTION D: OPTIONAL PARAMETERS (BUDGET & TIMELINE) ────── */}
              <div className="space-y-6 pt-4">
                <div className="pb-2 border-b border-[#080B0A]/10">
                  <h3 className="font-roboto text-xs font-bold uppercase tracking-[0.16em] text-[#C99742]">
                    4. Scope Parameters <span className="text-[#080B0A]/40 font-normal">(Optional)</span>
                  </h3>
                </div>

                {/* Approximate Budget */}
                <div>
                  <label className="block text-xs font-roboto font-semibold tracking-wider uppercase text-[#080B0A] mb-2.5">
                    Approximate Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_OPTIONS.map((opt) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleSelectBudget(opt)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-roboto font-medium transition-all ${
                            isSelected
                              ? 'bg-[#063C2D] text-[#F3EFE4] shadow-xs'
                              : 'bg-white/70 hover:bg-white text-[#080B0A]/80 border border-[#080B0A]/10'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Expected Timeline */}
                <div>
                  <label className="block text-xs font-roboto font-semibold tracking-wider uppercase text-[#080B0A] mb-2.5">
                    Target Delivery Timeline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINE_OPTIONS.map((opt) => {
                      const isSelected = formData.timeline === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleSelectTimeline(opt)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-roboto font-medium transition-all ${
                            isSelected
                              ? 'bg-[#063C2D] text-[#F3EFE4] shadow-xs'
                              : 'bg-white/70 hover:bg-white text-[#080B0A]/80 border border-[#080B0A]/10'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ── SUBMISSION CTA & GUARANTEES ──────────────────────────── */}
              <div className="pt-6 border-t border-[#080B0A]/10 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-9 py-3.5 bg-[#080B0A] hover:bg-[#063C2D] text-[#F3EFE4] text-xs font-roboto font-bold tracking-[0.14em] uppercase rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#E5C378]" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-3.5 h-3.5 text-[#E5C378]" />
                      </>
                    )}
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent(AnalyticsEvents.CONTACT_WHATSAPP_CLICKED, { source: 'form_inline_option' })}
                    className="inline-flex items-center justify-center min-h-[48px] gap-2 px-6 py-3.5 border border-[#080B0A]/20 hover:border-[#080B0A] text-[#080B0A] text-xs font-roboto font-semibold tracking-wider uppercase rounded-full transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#063C2D]" />
                    <span>Or Discuss on WhatsApp</span>
                  </a>
                </div>

                <p className="font-lora text-xs text-[#4A504D] leading-relaxed">
                  Your information is held in strict commercial confidence. We never share client briefs or contact details.
                </p>
              </div>

            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
