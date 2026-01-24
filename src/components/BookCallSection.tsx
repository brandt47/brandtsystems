import CTA from "./CTA";
import { siteConfig } from "@/content/siteContent";

export default function BookCallSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
          Book a free 15-minute intro call. No pressure, no sales pitch — just a
          quick chat to see if I can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTA
            href={siteConfig.calendlyUrl}
            variant="secondary"
            size="lg"
            external
            className="bg-white hover:bg-gray-100 text-black hover:text-white shadow-lg"
          >
            📅 Book a Free 15-Minute Call
          </CTA>
          <CTA
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-teal-700"
          >
            Get a Quote
          </CTA>
        </div>
        <p className="mt-6 text-sm text-teal-100">
          ✓ No commitment required • ✓ Response within 24 hours
        </p>
      </div>
    </section>
  );
}
