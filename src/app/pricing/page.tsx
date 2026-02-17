import type { Metadata } from "next";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import BookCallSection from "@/components/BookCallSection";
import { pricingTiers, pricingFAQ } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "How We Work Together | Pricing",
  description:
    "A transparent 4-step process from free consultation to ongoing support. Discovery, strategy, build, and maintenance—priced fairly based on your needs.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[450px] lg:min-h-[50vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/white_office.jpeg"
          alt="Clean white office workspace with laptop and coffee mug"
          fill
          priority
          className="object-cover object-[15%_85%] sm:object-[center_85%]"
          sizes="100vw"
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-end">
          <div className="max-w-4xl text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              How We Work Together
            </h1>
            <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-3xl ml-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Four clear steps from discovery to long-term success. Let&apos;s build something great.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {pricingTiers.map((tier, idx) => (
              <div key={tier.id} className="relative group">
                {/* Connector line (except for last item) */}
                {idx < pricingTiers.length - 1 && (
                  <div className="absolute left-12 top-32 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-teal-300 to-transparent -mb-8 hidden lg:block" />
                )}
                
                <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg transition-all ${
                          idx === 0 ? "bg-gradient-to-br from-green-400 to-green-600 text-white" :
                          idx === 1 ? "bg-gradient-to-br from-teal-500 to-teal-700 text-white" :
                          idx === 2 ? "bg-gradient-to-br from-cyan-500 to-cyan-700 text-white" :
                          "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white"
                        }`}>
                          <span className="text-4xl font-bold">{idx + 1}</span>
                        </div>
                        {idx < pricingTiers.length - 1 && (
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:hidden">
                            <svg className="w-6 h-8 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            {tier.name}
                          </h3>
                          <div className="inline-flex items-center">
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                              idx === 0 ? "bg-green-100 text-green-800" :
                              "bg-teal-100 text-teal-800"
                            }`}>
                              {tier.startingPrice}
                            </span>
                            {tier.timeline && (
                              <span className="ml-3 text-gray-500 text-sm">
                                {tier.timeline}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                          {tier.description}
                        </p>
                      </div>

                      <div className="grid lg:grid-cols-5 gap-8">
                        {/* Included - takes up more space */}
                        <div className="lg:col-span-3">
                          <div className="mb-4">
                            <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              What&apos;s Included
                            </h4>
                          </div>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {tier.included.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700">
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
                                <span className="text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Best for - sidebar */}
                        <div className="lg:col-span-2">
                          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 h-full border border-teal-100">
                            <h4 className="font-bold text-teal-900 text-sm uppercase tracking-wide mb-3">
                              Perfect For
                            </h4>
                            <p className="text-teal-800 leading-relaxed">
                              {tier.bestFor}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA for first step */}
                      {idx === 0 && (
                        <div className="mt-8 pt-6 border-t border-gray-100">
                          <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            <span>Book Your Free Call</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                Common Questions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pricing Questions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about how we work and what it costs
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <FAQAccordion items={pricingFAQ} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <BookCallSection />
    </>
  );
}
