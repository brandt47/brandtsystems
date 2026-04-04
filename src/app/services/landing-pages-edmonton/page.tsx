import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";
import BookCallSection from "@/components/BookCallSection";
import {
  siteConfig,
  landingPagesLandingPage,
  landingPageHowItWorks,
} from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Landing Pages & Lead Funnels Edmonton | Conversion-Focused Design",
  description:
    "Custom landing pages and lead funnels for Edmonton businesses. Built for conversion, not just aesthetics — turn visitors into booked appointments, quote requests, and sales.",
  keywords: [
    "landing page design Edmonton",
    "lead funnel Edmonton",
    "conversion optimization Edmonton",
    "landing page development Alberta",
    "lead generation Edmonton",
    "custom landing pages Edmonton",
    "Edmonton landing page builder",
    "high converting landing pages",
    "small business lead funnels Edmonton",
  ],
  openGraph: {
    title: "Landing Pages & Lead Funnels Edmonton | Brandt Systems",
    description:
      "Custom landing pages and lead funnels for Edmonton businesses. Turn visitors into booked appointments, quote requests, and sales.",
    url: "https://brandtsystems.ca/services/landing-pages-edmonton",
  },
};

const content = landingPagesLandingPage;

export default function LandingPagesLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Landing Pages & Lead Funnels — Brandt Systems",
    description: metadata.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: "https://brandtsystems.ca",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Edmonton",
        addressRegion: "AB",
        addressCountry: "CA",
      },
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 53.5461,
        longitude: -113.4938,
      },
      geoRadius: "100000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landing Page Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Page & Lead Funnel Build",
            description:
              "Custom landing page built for conversion with lead capture, booking integration, A/B testing, and optional ad management.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "CAD",
            minPrice: "1000",
            maxPrice: "3000",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[450px] lg:min-h-[50vh] flex items-center">
        <Image
          src="/white_office.jpeg"
          alt="Landing page and lead funnel development for Edmonton businesses"
          fill
          priority
          className="object-cover object-[15%_85%] sm:object-[center_85%]"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-end">
          <div className="max-w-4xl text-right">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-200 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {content.hero.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-white leading-relaxed mb-8 max-w-2xl ml-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {content.hero.subheadline}
            </p>
            <CTA
              href={siteConfig.calendlyUrl}
              size="lg"
              external
              className="!bg-white !text-gray-900 hover:!bg-gray-100 !shadow-lg"
            >
              {content.hero.cta}
            </CTA>
          </div>
        </div>
      </section>

      {/* Problem / Value Prop */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Getting traffic but not getting leads?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {content.valueProps.map((prop, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-5 flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-gray-700 leading-relaxed">{prop}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Landing Page & Lead Funnel Build
          </h2>
          <p className="text-gray-500 mb-10">
            I build dedicated landing pages designed around one job: turning a
            stranger into a booked appointment, a quote request, or a sale. Then
            I can run ads directly to it, so you get a complete growth engine —
            not just a page.
          </p>
          <div className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {content.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {content.pricing.range}
                </p>
                <p className="text-sm text-gray-500">{content.pricing.note}</p>
              </div>
              <CTA href={siteConfig.calendlyUrl} size="md" external>
                Get Started
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Best for
          </h2>
          <div className="flex flex-wrap gap-3">
            {content.bestFor.map((item, i) => (
              <span
                key={i}
                className="text-sm font-medium text-teal-700 bg-teal-50 px-4 py-2 rounded-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {landingPageHowItWorks.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link
              href="/services/seo-edmonton"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                SEO Audit & Optimization
              </h3>
              <p className="text-sm text-gray-500">
                Make sure your business shows up in organic search results
                alongside your landing pages.
              </p>
            </Link>
            <Link
              href="/services/google-ads-edmonton"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                Google & Meta Ads Management
              </h3>
              <p className="text-sm text-gray-500">
                Drive targeted traffic to your landing page with professionally
                managed ad campaigns.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Common Landing Page Questions
          </h2>
          <FAQAccordion items={content.faq} />
        </div>
      </section>

      {/* CTA */}
      <BookCallSection />
    </>
  );
}
