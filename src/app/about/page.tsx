import type { Metadata } from "next";
import Image from "next/image";
import BookCallSection from "@/components/BookCallSection";
import { aboutContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Gabrielle 'Gabby' Brandt, founder of Brandt Systems. 10+ years building websites, automations, and growth systems for small businesses.",
};

export default function AboutPage() {
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
            Hi, I&apos;m Gabby
          </h1>
          <p className="text-xl text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            I build websites, booking systems, and automations that help small
            businesses grow — without the overwhelm.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo Placeholder */}
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-200 to-teal-400 flex items-center justify-center text-9xl">
                👩‍💻
              </div>
              <div className="mt-6 bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Quick Facts
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {aboutContent.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2">
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
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bio Text */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {aboutContent.name}
                </h2>
                <p className="text-teal-600 font-medium mb-6">
                  {aboutContent.title}
                </p>
              </div>

              {aboutContent.bio.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How I Work
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {["💬", "📊", "🤝"][idx]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Brandt Systems?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I&apos;m not a big agency with dozens of clients and cookie-cutter
                templates. I&apos;m one person who takes the time to understand your
                business, build systems that actually fit your workflow, and
                stick around to make sure everything works.
              </p>
              <p>
                You won&apos;t get passed off to a junior team member or left hanging
                after launch. You work directly with me from start to finish —
                and beyond.
              </p>
              <p className="font-medium text-teal-900">
                If you&apos;re looking for someone who genuinely cares about your
                success (and knows how to build systems that deliver it),
                let&apos;s talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <BookCallSection />
    </>
  );
}
