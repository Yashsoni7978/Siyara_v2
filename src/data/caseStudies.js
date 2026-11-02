/**
 * Siyara Innovations — Verified Case Studies & Project Showcase Data
 * Ground Truth: Only entries with `approved: true` are published and indexed.
 * Never fabricate client names, testimonials, project outcomes, or revenue figures.
 */

export const caseStudies = [
  {
    slug: 'shri-property',
    name: 'Shri Property',
    industry: 'Real Estate',
    summary: 'A high-performance luxury real estate portal engineered with interactive property cards, location filtering, and direct WhatsApp inquiry routing for property buyers in Jaipur.',
    whatWeBuilt: [
      'Custom Next.js 15 Property Catalog',
      'Sub-second Listing Search & Filter',
      'Direct VIP WhatsApp Consultation Routing',
      'Local RealEstateAgent JSON-LD Schema'
    ],
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Vercel Edge Network'],
    demoUrl: 'https://shri-properties.vercel.app/',
    screenshot: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    results: [
      'Sub-1.8s mobile page load on standard 4G networks',
      '100% Core Web Vitals target compliance',
      'Direct WhatsApp inquiry flow eliminating form friction'
    ],
    approved: true
  },
  {
    slug: 'dr-rajeshwari-sharma',
    name: 'Dr. Rajeshwari Sharma',
    industry: 'Healthcare',
    summary: 'A clinical web presence designed for high patient trust, procedure clarity, and streamlined appointment scheduling for a specialized medical practice.',
    whatWeBuilt: [
      'Clinical Procedure Guides & FAQs',
      'Mobile-First Patient Booking Workflow',
      'Medical Clinic & Physician Schema.org Markup',
      'Accessibility-Compliant UI Architecture'
    ],
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Schema.org JSON-LD'],
    demoUrl: 'https://dr-rajeshwari-sharma-medical-websit.vercel.app/',
    screenshot: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    results: [
      'Fast, accessible mobile navigation for patients',
      'Transparent procedure information and FAQs',
      'Zero tracking bloat maintaining patient privacy'
    ],
    approved: true
  },
  {
    slug: 'studio-mitti',
    name: 'Studio Mitti',
    industry: 'Interior Design',
    summary: 'An editorial spatial portfolio tailored for luxury interior designers and architects, balancing high-resolution visual curation with sub-second performance.',
    whatWeBuilt: [
      'High-Resolution Responsive Gallery Grid',
      'Editorial Project Narrative Layouts',
      'Curated Materials & Finishes Showcase',
      'Private Studio Consultation Intake'
    ],
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://studio-mitti-nu.vercel.app/',
    screenshot: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    results: [
      'Zero layout shift on high-resolution image loads',
      'Clean typography hierarchy highlighting project craftsmanship',
      'Direct client qualification via WhatsApp and private intake'
    ],
    approved: true
  },
  {
    slug: 'ember-and-ivory-events',
    name: 'Ember & Ivory Events',
    industry: 'Event Management',
    summary: 'A visual showcase platform for luxury wedding and experiential event planners across Rajasthan, featuring immersive event galleries and inquiry qualification.',
    whatWeBuilt: [
      'Experiential Event Storytelling Grids',
      'Wedding Portfolio & Venue Catalog',
      'VIP Wedding Consultation Funnel',
      'Event Venue & LocalBusiness Structured Data'
    ],
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Next/Image Edge Optimization'],
    demoUrl: 'https://ember-ivory-events.vercel.app/',
    screenshot: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    results: [
      'Mobile-first event experience for wedding planning couples',
      'Streamlined date inquiry and guest-count scoping',
      'High-speed image loading via modern AVIF/WebP formats'
    ],
    approved: true
  },
  {
    // TODO: Client and founder verification pending before public release
    slug: 'aura-wellness-clinic',
    name: 'Aura Wellness Clinic',
    industry: 'Healthcare',
    summary: 'Draft case study: Upcoming clinical intake platform and doctor scheduling portal. (Under client review).',
    whatWeBuilt: [
      'Patient Intake Flow',
      'Doctor Directory',
      'Wellness Service Catalog'
    ],
    stack: ['Next.js 15', 'Tailwind CSS'],
    demoUrl: 'https://aura-wellness.vercel.app/',
    screenshot: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    results: [
      'Internal testing ongoing — awaiting launch verification'
    ],
    approved: false
  }
];

export function getApprovedCaseStudies() {
  return caseStudies.filter((item) => item.approved === true);
}

export function getCaseStudyBySlug(slug) {
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study || !study.approved) return null;
  return study;
}
