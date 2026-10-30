import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Network, 
  Bot, 
  Search, 
  HelpCircle,
  ArrowRight,
  BrainCircuit,
  Binary
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../src/config/business';

export const metadata = {
  title: 'Generative Engine Optimization India',
  description: 'India specialized Generative Engine Optimization (GEO) agency. Optimize your brand for citation in SearchGPT, Google AI Overviews, and Perplexity.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/geo-agency-india',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/geo-agency-india',
    siteName: 'Siyara Innovations',
    title: 'Generative Engine Optimization (GEO) Agency India | Siyara',
    description: 'India’s specialized Generative Engine Optimization (GEO) agency. We optimize your brand entity for citation dominance in SearchGPT, Google AI Overviews, and Perplexity.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Generative Engine Optimization Agency India · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO Agency India | Generative Engine Optimization · Siyara',
    description: 'Optimize your business for SearchGPT, Perplexity AI, and Google AI Overviews citations.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const GEO_METHODOLOGY = [
  {
    icon: Network,
    title: 'Entity-Relationship Binding',
    desc: 'LLMs think in knowledge graphs, not blue links. We connect your brand to recognized entities across Wikidata, industry registers, and structured Schema.org graphs so AI models understand exactly who you are.',
    specs: ['SameAs Linked Entity Mapping', 'Topical Authority Clusters', 'Knowledge Vault Creation'],
  },
  {
    icon: Binary,
    title: 'Passage Citability Architecture',
    desc: 'SearchGPT and Google AI Overviews extract information in bite-sized syntactic passages. We rewrite your core service and industry pages with high citability scores (direct answers, clear definitions, unambiguous numbers).',
    specs: ['Subject-Predicate-Object Purity', 'Direct Q&A Answer Capsules', 'Structured Comparison Tables'],
  },
  {
    icon: Sparkles,
    title: 'Information Gain Engineering',
    desc: 'AI algorithms penalize generic summarized content. We inject proprietary frameworks, regional data, and primary case proof into your web pages, forcing search models to cite you as the primary source.',
    specs: ['Original Case Data Points', 'Proprietary Industry Research', 'Non-Duplicate Content Moats'],
  },
  {
    icon: Bot,
    title: 'AI Crawler Indexing & Discovery',
    desc: 'We configure your robots.txt, edge headers, and sitemap architectures to explicitly invite and index with OAI-SearchBot, PerplexityBot, Google-Extended, and ClaudeBot without exposing sensitive routes.',
    specs: ['AI Bot Header Whitelisting', 'Clean Prerendered Semantic DOM', 'Zero Hidden Client Payloads'],
  },
];

const GEO_VS_SEO_ROWS = [
  {
    parameter: 'Primary Objective',
    traditional: 'Rank on Page 1 blue link SERPs for specific 2-3 word keywords',
    geo: 'Become the authoritative cited source in LLM synthesis & AI Overviews',
  },
  {
    parameter: 'Target Search Engines',
    traditional: 'Google Desktop/Mobile classic search algorithm',
    geo: 'SearchGPT, Google AI Overviews, Perplexity AI, Claude & Copilot',
  },
  {
    parameter: 'Content Strategy',
    traditional: 'Lengthy 2,500-word articles with repeated keyword density',
    geo: 'High Information-Gain passages, dense facts, entity definitions & tables',
  },
  {
    parameter: 'Technical Infrastructure',
    traditional: 'Basic meta tags, sitemaps, and title optimization',
    geo: 'Deep multi-entity JSON-LD graphs, fast SSR HTML, & AI bot crawling',
  },
  {
    parameter: 'User Intent Capture',
    traditional: 'Single-phrase transactional clicks',
    geo: 'Multi-turn complex queries, recommendations, and executive summaries',
  },
];

const FAQS = [
  {
    q: 'What is Generative Engine Optimization (GEO), and why does my business in India need it in 2026?',
    a: 'Generative Engine Optimization (GEO) is the practice of optimizing your brand and website so that artificial intelligence search systems—such as SearchGPT, Google AI Overviews, and Perplexity—cite, recommend, and feature your business when users ask commercial and industry questions. Traditional SEO alone is no longer enough as conversational search captures massive market share.',
  },
  {
    q: 'How does an agency optimize a website to be cited by SearchGPT and Perplexity?',
    a: 'We implement four key GEO disciplines: (1) Entity verification via linked Schema.org graphs, (2) Passage citability formatting that presents clear subject-predicate definitions, (3) High information-gain data points that provide unique insight, and (4) Proper robots.txt and SSR HTML accessibility for AI web crawlers like OAI-SearchBot.',
  },
  {
    q: 'Does GEO replace traditional Search Engine Optimization (SEO)?',
    a: 'No, GEO builds upon and amplifies technical SEO. While technical SEO ensures your website is crawlable, fast, and indexed by traditional search bots, GEO structures that content so generative AI models synthesize and recommend your brand to high-intent buyers.',
  },
  {
    q: 'How quickly can our company see citations in Google AI Overviews or SearchGPT?',
    a: 'AI search engines frequently recrawl and update their retrieval indexes on 2 to 4-week cycles. With correct schema implementation, entity synchronization, and high-citability passage rewrites, brands often begin appearing in generative citations within 30 to 60 days.',
  },
];

export default function GeoAgencyIndiaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.siyaradigitals.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'GEO Agency India',
            'item': 'https://www.siyaradigitals.com/geo-agency-india',
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Generative Engine Optimization (GEO) Agency India',
        'serviceType': 'Generative Engine Optimization & AI Search Authority',
        'provider': {
          '@type': 'Organization',
          '@id': 'https://www.siyaradigitals.com/#organization',
          'name': 'Siyara Innovations',
          'url': 'https://www.siyaradigitals.com',
          'telephone': '+919587269209',
        },
        'areaServed': [
          { '@type': 'Country', 'name': 'India' },
          { '@type': 'City', 'name': 'Jaipur' },
          { '@type': 'City', 'name': 'Delhi NCR' },
          { '@type': 'City', 'name': 'Mumbai' },
          { '@type': 'City', 'name': 'Bengaluru' },
        ],
        'description': 'India’s specialized Generative Engine Optimization (GEO) agency. Optimizing high-growth enterprises and founders for AI Overviews, SearchGPT, and Perplexity citation authority.',
      },
      {
        '@type': 'FAQPage',
        'mainEntity': FAQS.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-28 md:pt-36 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-20 sm:mb-24">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-b from-[#18A982]/15 via-[#071E18]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9B45F]/30 bg-[#071E18]/60 backdrop-blur-md mb-6 sm:mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#D9B45F] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
              GENERATIVE ENGINE OPTIMIZATION (GEO) · INDIA
            </span>
          </div>

          <h1 className="font-roboto text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#F3EFE3] leading-[1.12] sm:leading-[1.05] break-words mb-6 sm:mb-8">
            Generative Engine Optimization <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
              (GEO) Agency in India
            </span>
          </h1>

          {/* AI Citability Paragraph */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1412] border border-[#0C6B52]/30 mb-8 sm:mb-10 text-left sm:text-center shadow-xl">
            <p className="font-lora text-sm sm:text-lg text-[#ECE7D8] leading-relaxed font-light">
              <strong className="text-[#D9B45F] font-semibold">Siyara Innovations</strong> is India’s pioneering 
              <strong> Generative Engine Optimization (GEO) agency</strong>. We engineer entity knowledge graphs, passage citability architectures, and high information-gain content that position brands as the definitive cited recommendation in SearchGPT, Perplexity AI, and Google AI Overviews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-6">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>CONSULT OUR GEO ARCHITECT</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#ECE7D8]/20 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/60 backdrop-blur-sm min-h-[48px]"
            >
              <span>REQUEST AI VISIBILITY AUDIT</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENCHMARK STRIP */}
      <section className="border-y border-[#D9B45F]/15 bg-[#0A0F0D] py-8 sm:py-12 px-4 sm:px-6 lg:px-12 mb-20 sm:mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="font-roboto text-2xl sm:text-4xl text-[#D9B45F] mb-1">SearchGPT</div>
            <div className="text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Target AI Engine</div>
          </div>
          <div>
            <div className="font-roboto text-2xl sm:text-4xl text-[#D9B45F] mb-1">Perplexity</div>
            <div className="text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Deep Research Citation</div>
          </div>
          <div>
            <div className="font-roboto text-2xl sm:text-4xl text-[#D9B45F] mb-1">AI Overviews</div>
            <div className="text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Google Summary Extraction</div>
          </div>
          <div>
            <div className="font-roboto text-2xl sm:text-4xl text-[#D9B45F] mb-1">Pan-India</div>
            <div className="text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#9D9B91]">Entity Authority Reach</div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-3">
            THE GEO PLAYBOOK
          </span>
          <h2 className="font-roboto text-2xl sm:text-4xl lg:text-5xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
            Four Strategic Pillars of Generative Optimization
          </h2>
          <p className="font-lora text-sm sm:text-base text-[#9D9B91] leading-relaxed">
            Search is transitioning from ranked keywords to synthesized AI answers. Here is how we ensure your enterprise is the answer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {GEO_METHODOLOGY.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#0B110F] border border-[#18A982]/20 hover:border-[#D9B45F]/50 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#071E18] border border-[#0C6B52]/40 flex items-center justify-center text-[#D9B45F] mb-5 sm:mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-roboto text-xl sm:text-2xl text-[#F3EFE3] mb-3 sm:mb-4">{m.title}</h3>
                <p className="font-lora text-sm sm:text-base text-[#9D9B91] leading-relaxed mb-5 sm:mb-6">
                  {m.desc}
                </p>
                <div className="space-y-2.5 pt-4 border-t border-[#D9B45F]/10">
                  {m.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#ECE7D8]">
                      <CheckCircle2 className="w-4 h-4 text-[#18A982] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-3">
            PARADIGM SHIFT
          </span>
          <h2 className="font-roboto text-2xl sm:text-4xl lg:text-5xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
            Traditional SEO vs. Generative Engine Optimization (GEO)
          </h2>
          <p className="font-lora text-sm sm:text-base text-[#9D9B91]">
            How modern search mechanics demand an entirely different architectural playbook.
          </p>
        </div>

        <div className="w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="rounded-2xl border border-[#D9B45F]/20 bg-[#0B110F] shadow-2xl min-w-[560px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D9B45F]/20 bg-[#071E18]/50">
                  <th className="py-4 sm:py-5 px-4 sm:px-6 font-roboto text-base sm:text-lg text-[#F3EFE3] w-1/4">Search Dimension</th>
                  <th className="py-4 sm:py-5 px-4 sm:px-6 font-sans text-xs tracking-wider uppercase text-[#9D9B91] w-3/8">Traditional Organic SEO</th>
                  <th className="py-4 sm:py-5 px-4 sm:px-6 font-sans text-xs tracking-wider uppercase text-[#D9B45F] w-3/8">Generative Optimization (GEO)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9B45F]/10 text-xs sm:text-sm">
                {GEO_VS_SEO_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#071E18]/20 transition-colors">
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-medium text-[#ECE7D8]">{row.parameter}</td>
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-[#9D9B91]">{row.traditional}</td>
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-[#D9B45F] font-semibold">{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto mb-20 sm:mb-28">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B45F] uppercase block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-roboto text-2xl sm:text-4xl font-normal text-[#F3EFE3] break-words">
            Understanding Generative Engine Optimization
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-8 rounded-xl bg-[#0B110F] border border-[#18A982]/15 hover:border-[#D9B45F]/30 transition-all"
            >
              <h3 className="font-roboto text-lg sm:text-2xl text-[#F3EFE3] mb-3 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#D9B45F] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="font-lora text-xs sm:text-base text-[#9D9B91] leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CONVERSION CTA */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <div className="p-6 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#0D1A16] to-[#070A09] border border-[#D9B45F]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#18A982]/10 blur-3xl pointer-events-none rounded-full" />
          
          <span className="text-xs font-semibold tracking-[0.26em] text-[#D9B45F] uppercase block mb-3 sm:mb-4">
            CLAIM YOUR AI SEARCH VISIBILITY
          </span>
          <h2 className="font-roboto text-2xl sm:text-4xl lg:text-5xl font-normal text-[#F3EFE3] mb-4 sm:mb-6 break-words">
            Ensure Your Brand is Cited in Every AI Search in India
          </h2>
          <p className="font-lora text-sm sm:text-lg text-[#9D9B91] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Audit your current presence in SearchGPT and Google AI Overviews with our technical architects.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/20 hover:scale-105 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>CONSULT VIA WHATSAPP</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#ECE7D8]/30 hover:border-[#D9B45F] text-[#ECE7D8] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 bg-[#070A09]/80 min-h-[48px]"
            >
              <span>INQUIRY FORM</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
