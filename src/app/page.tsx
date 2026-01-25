import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import BookCallSection from "@/components/BookCallSection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  hero,
  testimonials,
  services,
  howItWorks,
  caseStudies,
  faqItems,
  siteConfig,
} from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Home",
  description: hero.subheadline,
};

export default function Home() {
  // Schema.org structured data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://brandtsystems.ca/#organization",
        name: siteConfig.name,
        description: siteConfig.description,
        url: "https://brandtsystems.ca",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Edmonton",
          addressRegion: "AB",
          addressCountry: "CA",
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
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://brandtsystems.ca/#service",
        name: siteConfig.name,
        description: siteConfig.tagline,
        provider: {
          "@id": "https://brandtsystems.ca/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Canada",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development & Automation Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
            },
          })),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center">
        {/* Background Image */}
        <Image
          src="/flower_and_office_setup.webp"
          alt="Professional office workspace with flowers"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {hero.headline}
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <CTA href={siteConfig.calendlyUrl} size="lg" external>
                {hero.primaryCTA}
              </CTA>
              <CTA href="/contact" variant="outline" size="lg" className="!border-white !border-[3px] !text-white !bg-black/30 hover:!bg-white/20 backdrop-blur-sm">
                {hero.secondaryCTA}
              </CTA>
            </div>
            <p className="text-sm text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{hero.trustLine}</p>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-12">
            Trusted by small businesses across Canada
          </h2>
          <div className={`grid gap-8 ${testimonials.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : testimonials.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systems that work together so you can focus on what you do best
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                name={service.name}
                tagline={service.tagline}
                description={service.description}
                href="/services"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and focused on your success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-3xl font-bold text-sky-600 mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Previous Work
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Here are some of my previous projects!
            </p>
          </div>
          <div className={`grid gap-8 ${caseStudies.slice(0, 3).length === 1 ? 'grid-cols-1 max-w-md mx-auto' : caseStudies.slice(0, 3).length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTA href="/work" variant="outline" className="!border-white !border-[3px] !text-white !bg-white/10 hover:!bg-white/20 backdrop-blur-sm">
              View All Case Studies
            </CTA>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Free Small Business Website SEO Checklist
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            10 quick wins to improve your Google rankings (no tech background needed)
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Download
            </button>
          </form>
          <p className="mt-4 text-sm text-teal-100">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section> */}

      {/* FAQ Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working together
            </p>
          </div>
          <FAQAccordion items={faqItems.slice(0, 5)} />
        </div>
      </section>

      {/* Final CTA */}
      <BookCallSection />
    </>
  );
}
