import type { Metadata } from "next";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import BookCallSection from "@/components/BookCallSection";
import CTA from "@/components/CTA";
import { faqItems } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about working with Brandt Systems, including timeline, pricing, platforms, and support.",
};

export default function FAQPage() {
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Everything you need to know about working together. Don&apos;t see your
            question? <a href="/contact" className="text-teal-600 hover:text-teal-700 font-medium underline">Get in touch</a>.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The best way to get answers is to have a quick chat. No pressure,
            just honest conversation about your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href="/contact" size="lg">
              Contact Me
            </CTA>
            <CTA href="/pricing" variant="outline" size="lg">
              View Pricing
            </CTA>
          </div>
        </div>
      </section>

      {/* CTA */}
      <BookCallSection />
    </>
  );
}
