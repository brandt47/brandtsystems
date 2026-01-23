import type { Metadata } from "next";
import Image from "next/image";
import PricingTierCard from "@/components/PricingTierCard";
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
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/flower_and_office_setup.webp"
          alt="Professional office workspace with flowers"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Overlay with pattern */}
        <div className="absolute inset-0 bg-teal-600/60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Simple, Transparent Process
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            How We Work Together
          </h1>
          <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Four clear steps from discovery to long-term success. Let's build something great.
          </p>
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

      {/* Why This Approach Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why This Approach Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most clients go through all 4 steps. This ensures we're aligned before building, 
              and you have support after launch. No surprises, no guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-100 hover:border-teal-300 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    The Discovery Step Matters
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                The discovery session ensures we're both serious and aligned before any build work begins. 
                You get a clear roadmap, and I can focus on clients ready to execute.
              </p>
              <p className="text-teal-800 font-medium">
                Think of it as insurance that your project will go smoothly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Flexible Payment Terms
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Payment plans available for larger projects. We'll structure something that works for your 
                budget—typically milestone-based for bigger builds.
              </p>
              <p className="text-blue-800 font-medium">
                Monthly support helps spread costs and keeps everything running smoothly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Custom Pricing Factors
                  </h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Scope & complexity of your project</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Number of integrations & systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom design vs. template-based</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Timeline urgency</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Can I Skip Steps?
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-green-700">Step 1 (Free Call):</strong> Always start here—it's free and helps us both.
                </p>
                <p>
                  <strong className="text-green-700">Step 2 (Discovery):</strong> Required for most projects. Small tweaks might skip this.
                </p>
                <p>
                  <strong className="text-green-700">Step 4 (Support):</strong> Optional, but highly recommended for peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-teal-50 text-lg mb-6 max-w-2xl">
                Book a free 15-minute intro call. We'll discuss your project, and I'll give you clear next steps—no obligation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Schedule Your Free Call</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
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
