import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BookCallSection from "@/components/BookCallSection";
import {
  services,
  pricingFAQ,
  servicesHowItWorks,
  projectSizes,
  seoLandingPage,
  adsLandingPage,
  landingPagesLandingPage,
} from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, automations, bookings, and SEO — practical systems built to help small businesses grow.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero (matches Work page) ─────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[450px] lg:min-h-[50vh] flex items-center">
        <Image
          src="/white_office.jpeg"
          alt="Clean white office workspace with laptop and coffee mug"
          fill
          priority
          className="object-cover object-[15%_85%] sm:object-[center_85%]"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-end">
          <div className="max-w-4xl text-right">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              What I Build
            </h1>
            <p className="text-xl text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Practical systems for small businesses — websites, bookings,
              automations, and SEO.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Websites, automations, and bookings — built to help small businesses
            grow.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 rounded-lg p-6 flex flex-col"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialized Services ─────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Specialized Services
          </h2>
          <p className="text-gray-500 mb-10 text-sm">
            In-depth service pages for Edmonton businesses looking for SEO, ads,
            or landing pages.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                href: "/services/seo-edmonton",
                icon: "\uD83D\uDD0D",
                name: seoLandingPage.hero.eyebrow,
                description: seoLandingPage.hero.subheadline,
              },
              {
                href: "/services/google-ads-edmonton",
                icon: "\uD83D\uDCE3",
                name: adsLandingPage.hero.eyebrow,
                description: adsLandingPage.hero.subheadline,
              },
              {
                href: "/services/landing-pages-edmonton",
                icon: "\uD83D\uDCC4",
                name: landingPagesLandingPage.hero.eyebrow,
                description: landingPagesLandingPage.hero.subheadline,
              },
            ].map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col hover:shadow-lg hover:border-teal-200 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{page.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {page.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  {page.description}
                </p>
                <span className="mt-auto text-teal-600 font-medium text-sm inline-flex items-center">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesHowItWorks.map((step) => (
              <div key={step.step} className="relative flex gap-4">
                {/* Step number badge */}
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

      {/* ── Project Sizes ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Project Sizes
          </h2>
          <p className="text-gray-500 mb-10 text-sm">
            Every project gets a custom quote. Here&apos;s roughly what to expect.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {projectSizes.map((tier) => (
              <div
                key={tier.id}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-base font-bold text-gray-900">
                    {tier.name}
                  </h3>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded whitespace-nowrap">
                    {tier.startingPrice}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-4">{tier.timeline}</p>
                <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                <ul className="space-y-1.5">
                  {tier.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-500">
                      — {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Common Questions
          </h2>
          <FAQAccordion items={pricingFAQ} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <BookCallSection />
    </>
  );
}
