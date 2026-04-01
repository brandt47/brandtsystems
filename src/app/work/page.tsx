"use client";

import { useState } from "react";
import Image from "next/image";
import BookCallSection from "@/components/BookCallSection";
import { caseStudies } from "@/content/siteContent";

// Note: Can't export metadata from client component, would need to create separate metadata file

const categories = ["All", "Website", "Integration", "Automation", "Booking", "SEO", "Ads"];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) =>
          study.category.includes(selectedCategory)
        );

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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Real Work, Real Results
            </h1>
            <p className="text-xl text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Here&apos;s what I&apos;ve built for small businesses like yours —
              with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              id={study.id}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left: Details */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.category.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs font-semibold px-3 py-1 bg-teal-100 text-teal-700 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h2>
                  <p className="text-teal-600 font-medium mb-6">
                    {study.client} • {study.industry}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Context
                      </h3>
                      <p className="text-gray-700">{study.context}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Goals
                      </h3>
                      <ul className="space-y-1">
                        {study.goals.map((goal, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-teal-600 mt-1">•</span>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: Solution & Results */}
                  <div className="space-y-6">
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Site
                    </a>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      What I Did
                    </h3>
                    <ul className="space-y-2">
                      {study.solution.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700"
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

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Tools Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-teal-600 rounded-lg p-6 text-white">
                    <h3 className="font-semibold mb-4 text-teal-50">
                      Results
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <p className="text-2xl font-bold mb-1">
                            {result.metric}
                          </p>
                          <p className="text-sm text-teal-100">
                            {result.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No case studies found for this category.
            </p>
          </div>
        )}
      </section>

      <BookCallSection />
    </>
  );
}
