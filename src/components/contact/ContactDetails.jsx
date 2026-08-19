import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactDetails() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Clean submission abstraction
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1200);
  };

  const contactMethods = [
    {
      title: 'VISIT OUR OFFICE',
      lines: ['S-2, Second Floor, Ajmer Road,', 'Jaipur, Rajasthan 302006, India'],
      icon: MapPin,
      href: 'https://maps.google.com/?q=Jaipur+Rajasthan+India',
    },
    {
      title: 'CALL US',
      lines: ['+91 89499 77516', '+91 63769 45451'],
      icon: Phone,
      href: 'tel:+918949977516',
    },
    {
      title: 'EMAIL US',
      lines: ['hello@siyarainnovations.com', 'connect@siyarainnovations.com'],
      icon: Mail,
      href: 'mailto:hello@siyarainnovations.com',
    },
    {
      title: 'WORKING HOURS',
      lines: ['Monday – Saturday', '10:00 AM – 07:00 PM'],
      icon: Clock,
      href: null,
    },
  ];

  return (
    <section id="contact-form" className="relative py-20 sm:py-32 bg-[#080B0A] overflow-hidden">
      {/* Background Emerald Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-60 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Card Outer Frame (Reference Composition) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCustom }}
          className="rounded-2xl border border-[#D4AF37]/25 bg-[#080B0A]/95 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle Inner Glow Arc */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#19A878]/15 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: GET IN TOUCH */}
            <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-[#D4AF37]/15 pb-10 lg:pb-0">
              <div>
                {/* Eyebrow / Section Title */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                    GET IN TOUCH
                  </span>
                  <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
                </div>

                {/* Vertical Contact Details List */}
                <div className="space-y-8">
                  {contactMethods.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4 group">
                        {/* Circular Icon Container */}
                        <div className="w-11 h-11 rounded-full border border-[#D4AF37]/40 bg-[#063C2D]/30 flex items-center justify-center text-[#D4AF37] group-hover:border-[#19A878] group-hover:text-[#19A878] group-hover:bg-[#063C2D]/60 transition-all duration-300 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>

                        <div>
                          <h4 className="font-sans text-[11px] font-bold tracking-[0.18em] text-[#D4AF37] uppercase mb-1">
                            {item.title}
                          </h4>
                          {item.lines.map((line, lIdx) => (
                            <p key={lIdx} className="font-sans text-xs sm:text-sm text-[#F3EFE4] font-light leading-relaxed">
                              {item.href && lIdx === 0 ? (
                                <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-[#E5C378] transition-colors">
                                  {line}
                                </a>
                              ) : (
                                line
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Verified Operational Note */}
              <div className="mt-12 p-4 rounded-xl border border-[#19A878]/30 bg-[#063C2D]/20">
                <p className="text-[11px] font-sans text-[#CFC9BB]/80 font-light leading-relaxed">
                  ✦ Direct Project Inquiries: We operate globally from Jaipur, Rajasthan.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: SEND US A MESSAGE */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Section Header */}
              <div className="mb-8">
                <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase block mb-2">
                  SEND US A MESSAGE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE4] font-normal">
                  Let's start the <span className="text-[#19A878] italic">conversation.</span>
                </h3>
              </div>

              {/* Submission Success Alert */}
              {status.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl border border-[#19A878] bg-[#063C2D]/40 text-center flex flex-col items-center justify-center my-6"
                >
                  <div className="w-12 h-12 rounded-full bg-[#19A878]/20 border border-[#19A878] flex items-center justify-center text-[#19A878] mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#F3EFE4] mb-2 font-normal">
                    Message Received!
                  </h4>
                  <p className="font-sans text-xs text-[#CFC9BB] max-w-md leading-relaxed mb-6">
                    Thank you for reaching out to Siyara Innovations. Our team will review your inquiry and respond shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    className="px-6 py-2.5 border border-[#D4AF37]/50 text-xs font-mono tracking-widest uppercase text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#080B0A] transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status.error && (
                    <div className="p-3.5 rounded-lg border border-red-500/40 bg-red-900/20 text-xs text-red-300 font-sans">
                      {status.error}
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-mono tracking-wider text-[#CFC9BB]/70 uppercase mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0D0C] border border-[#D4AF37]/20 text-sm text-[#F3EFE4] placeholder-[#CFC9BB]/30 focus:border-[#19A878] focus:outline-none focus:ring-1 focus:ring-[#19A878] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11px] font-mono tracking-wider text-[#CFC9BB]/70 uppercase mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@brand.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0D0C] border border-[#D4AF37]/20 text-sm text-[#F3EFE4] placeholder-[#CFC9BB]/30 focus:border-[#19A878] focus:outline-none focus:ring-1 focus:ring-[#19A878] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-mono tracking-wider text-[#CFC9BB]/70 uppercase mb-2">
                        YOUR PHONE
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0D0C] border border-[#D4AF37]/20 text-sm text-[#F3EFE4] placeholder-[#CFC9BB]/30 focus:border-[#19A878] focus:outline-none focus:ring-1 focus:ring-[#19A878] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[11px] font-mono tracking-wider text-[#CFC9BB]/70 uppercase mb-2">
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Web Dev / Branding / Growth"
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0D0C] border border-[#D4AF37]/20 text-sm text-[#F3EFE4] placeholder-[#CFC9BB]/30 focus:border-[#19A878] focus:outline-none focus:ring-1 focus:ring-[#19A878] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-mono tracking-wider text-[#CFC9BB]/70 uppercase mb-2">
                      TELL US ABOUT YOUR PROJECT *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your goals, timeline, and budget..."
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0D0C] border border-[#D4AF37]/20 text-sm text-[#F3EFE4] placeholder-[#CFC9BB]/30 focus:border-[#19A878] focus:outline-none focus:ring-1 focus:ring-[#19A878] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button (Deep emerald fill matching reference) */}
                  <div>
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full py-4 bg-[#063C2D] border border-[#19A878]/50 hover:bg-[#19A878] text-[#F3EFE4] hover:text-[#080B0A] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#063C2D]/50 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {status.submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                          <span>SENDING INQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#080B0A] group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy Footnote */}
                  <div className="flex items-center gap-2 pt-2 text-[11px] font-sans text-[#CFC9BB]/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#19A878] shrink-0" />
                    <span>We respect your privacy. Your information is kept private and used only to respond to your enquiry.</span>
                  </div>

                </form>
              )}

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
