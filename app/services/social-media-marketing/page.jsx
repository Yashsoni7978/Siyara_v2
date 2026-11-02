import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  Share2, 
  CheckCircle2, 
  TrendingUp, 
  Video, 
  Target, 
  Users, 
  Sparkles, 
  HelpCircle,
  BarChart3
} from 'lucide-react';
import JsonLd, { buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from '../../../src/components/common/JsonLd';

export const metadata = {
  title: 'Social Media Marketing Jaipur | Siyara Innovations',
  description: 'Strategic social media marketing in Jaipur. We deliver creative content, audience growth, targeted ad campaigns, and brand storytelling that converts.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/services/social-media-marketing',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/services/social-media-marketing',
    siteName: 'Siyara Innovations',
    title: 'Social Media Marketing Jaipur | Siyara Innovations',
    description: 'Strategic social media marketing in Jaipur. We deliver creative content, audience growth, targeted ad campaigns, and brand storytelling that converts.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Social Media Marketing in Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Jaipur | Siyara Innovations',
    description: 'Strategic social media marketing in Jaipur. We deliver creative content, audience growth, targeted ad campaigns, and brand storytelling that converts.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const faqs = [
  {
    q: 'Which social media platforms do you manage for Jaipur businesses?',
    a: 'We primarily manage Instagram, LinkedIn, and Facebook (Meta), depending on whether your business is consumer-facing (D2C, clinics, luxury design, events) or business-to-business (manufacturing, corporate, real estate funds). We align platform focus with where your high-value buyers spend time.',
  },
  {
    q: 'Do you create original photos and video content or use stock templates?',
    a: 'We emphasize original, brand-aligned creative assets. We develop custom design guidelines, storyboards, and short-form video formats (Reels/Shorts) tailored to your visual identity, avoiding generic canva-style templates that dilute trust.',
  },
  {
    q: 'How do you measure social media marketing ROI?',
    a: 'We track tangible commercial metrics rather than vanity follower counts alone. Our monthly reports detail qualified inquiries, direct message interactions, WhatsApp click-throughs, website referral traffic, and paid campaign customer acquisition costs.',
  },
  {
    q: 'Can Siyara Innovations manage both paid advertising and organic content?',
    a: 'Yes. Our integrated retainers pair organic visual storytelling with precision Meta and LinkedIn advertising campaigns to systematically reach, engage, and convert target audiences across Rajasthan and national markets.',
  },
];

export default function SocialMediaMarketingPage() {
  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Services', url: 'https://www.siyaradigitals.com/services' },
    { name: 'Social Media Marketing', url: 'https://www.siyaradigitals.com/services/social-media-marketing' },
  ]);

  const serviceSchema = buildServiceSchema({
    name: 'Social Media Marketing & Brand Growth in Jaipur',
    serviceType: 'Social Media Marketing',
    description: 'Strategic social media management, original content production, targeted ad campaigns, and brand storytelling for businesses in Jaipur and India.',
    url: 'https://www.siyaradigitals.com/services/social-media-marketing',
  });

  const faqSchema = buildFaqSchema(faqs);

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbsSchema, serviceSchema, faqSchema],
  };

  const whatsappUrl = 'https://wa.me/919587269209?text=Hi%20Siyara%20Innovations%2C%20I%20am%20interested%20in%20your%20Social%20Media%20Marketing%20services.';

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <JsonLd schema={fullSchema} />

      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-[#18A982]/15 via-[#071E18]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9B45F]/30 bg-[#071E18]/60 backdrop-blur-md mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D9B45F] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
              CORE SERVICE · JAIPUR &amp; PAN-INDIA
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F3EFE3] leading-[1.15] mb-5 sm:mb-6 break-words">
            Social Media Marketing &amp; Brand Growth in Jaipur
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            We turn social channels into powerful commercial assets. Combining editorial design, short-form video storytelling, and precision Meta and LinkedIn advertising, our campaigns build loyal brand communities and generate consistent business inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:-translate-y-0.5 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DISCUSS SOCIAL MEDIA ON WHATSAPP</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 min-h-[44px]"
            >
              <span>REQUEST SOCIAL PROPOSAL</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PHILOSOPHY */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto mb-16 sm:mb-24">
        <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0B110F] border border-[#D9B45F]/30 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6 text-[#ECE7D8]/90 font-sans text-sm sm:text-base leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE3] font-normal mb-4">
              Moving Beyond Generic Posts to High-Impact Social Equity
            </h2>
            <p>
              In competitive regional markets like Jaipur, generic social media calendars filled with repetitive greeting graphics and stock photos no longer resonate. High-net-worth clients, prospective clinic patients, interior design patrons, and corporate buyers make immediate quality judgments based on your digital aesthetics and messaging clarity.
            </p>
            <p>
              Siyara Innovations takes an editorial approach to social media management. Every post, carousel, reel, and sponsored ad is crafted to reflect your core brand positioning. We blend consistent visual identity standards with compelling copy that addresses real customer considerations—positioning your leadership and services as the definitive choice in your market.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE CAPABILITIES */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-2 block">
            HOW WE DELIVER VALUE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal">
            Strategic Social Media Deliverables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                1. Editorial Visual Direction &amp; Content
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                We design bespoke Instagram grids, carousel infographics, and editorial stories that honor your brand guidelines. High typography standards, refined palettes, and consistent layouts immediately distinguish your profile from commoditized competitors.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Custom brand typography &amp; visual templates</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> High-value educational carousels &amp; lookbooks</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Monthly content calendars and caption copy</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                2. Short-Form Video &amp; Reels Production
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                Short-form vertical video is the fastest vehicle for organic reach and brand intimacy. We structure engaging hooks, behind-the-scenes walkthroughs, project showcases, and founder perspectives that hold audience attention.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Reels &amp; Shorts scriptwriting and storyboarding</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Dynamic on-screen kinetic captions &amp; sound selection</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Case study video highlights &amp; project tours</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                3. Precision Meta &amp; LinkedIn Advertising
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                Paid social campaigns accelerate qualified reach. We engineer targeted campaigns on Meta (Instagram/Facebook) and LinkedIn with specific geographic, demographic, and interest parameters to convert passive scrollers into WhatsApp chats and inquiries.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Click-to-WhatsApp direct inquiry funnels</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Custom audience remarketing &amp; lookalike targeting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> A/B creative testing and budget optimization</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#063C2D] border border-[#D9B45F]/30 flex items-center justify-center text-[#D9B45F] mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-3">
                4. Community Engagement &amp; Reputation
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light mb-4">
                Social presence is a two-way relationship. We actively engage with your community, monitor direct messages, answer initial prospect inquiries, and foster genuine conversations that turn casual followers into long-term clients.
              </p>
            </div>
            <ul className="space-y-2 border-t border-[#0C6B52]/30 pt-4 text-xs text-[#ECE7D8]/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Direct message triage and lead qualification</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Thought leadership on LinkedIn for B2B founders</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D9B45F]" /> Monthly commercial inquiry and engagement reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto mb-16 sm:mb-24">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-2 block">
            COMMON INQUIRIES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE3] font-normal">
            Frequently Asked Questions About Social Media
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-xl bg-[#0D1412] border border-[#0C6B52]/30">
              <h3 className="font-serif text-base sm:text-lg text-[#F3EFE3] font-normal mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHATSAPP CONVERSION CTA */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#063C2D] via-[#071E18] to-[#070A09] border border-[#D9B45F]/40 text-center relative overflow-hidden shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal mb-4">
            Elevate Your Brand on Social Media
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#ECE7D8]/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Connect with our creative strategists on WhatsApp to discuss your brand goals, review our past campaign work, and receive a tailored social media proposal.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>START A CONVERSATION ON WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
}
