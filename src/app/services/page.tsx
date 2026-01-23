import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import BookCallSection from "@/components/BookCallSection";
import { services } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, booking systems, payment integrations, automations, and SEO services for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[400px] flex items-center">
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
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Services That Drive Growth
          </h1>
          <p className="text-xl text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            From websites that convert to automations that save hours every week —
            I build the systems that help small businesses grow.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-20">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-12 items-start ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h2>
                <p className="text-lg text-teal-600 font-medium mb-4">
                  {service.tagline}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="bg-teal-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-teal-900 mb-2">
                    Best for:
                  </p>
                  <p className="text-sm text-teal-700">
                    {service.bestFor.join(" • ")}
                  </p>
                </div>
              </div>
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    What you get:
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Sizes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Sizes
            </h2>
            <p className="text-xl text-gray-600">
              From quick wins to complete builds — I work at your pace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Wins */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Quick Wins
              </h3>
              <p className="text-teal-600 font-medium mb-4">1–3 hours</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Contact form setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Email notification fixes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Simple automation workflow
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Analytics setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Speed optimization audit
                </li>
              </ul>
            </div>

            {/* Small Builds */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-teal-500">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Small Builds
              </h3>
              <p className="text-teal-600 font-medium mb-4">1–2 weeks</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Landing page with forms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Booking system setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Payment integration (Stripe)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  3–5 page website
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Multi-step automation
                </li>
              </ul>
            </div>

            {/* Bigger Projects */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Bigger Projects
              </h3>
              <p className="text-teal-600 font-medium mb-4">2–6+ weeks</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Full website + booking + payments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Complex CRM integrations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Multi-page site with SEO
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  E-commerce setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Marketing automation suite
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Not sure what you need? Let&apos;s chat about your goals.
            </p>
            <CTA href="/contact" size="lg">
              Get a Custom Quote
            </CTA>
          </div>
        </div>
      </section>

      {/* CTA */}
      <BookCallSection />
    </>
  );
}
