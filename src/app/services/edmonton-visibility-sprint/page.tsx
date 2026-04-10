import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { siteConfig } from "@/content/siteContent";

export const metadata: Metadata = {
  title:
    "Edmonton Visibility Sprint | Local SEO in 60 Days | Brandt Systems",
  description:
    "A done-for-you 60-day local SEO sprint for Edmonton businesses. Google Business Profile optimization, technical SEO fixes, keyword targeting, AI search readiness, and live tracking. Founding client pricing available.",
  keywords: [
    "Edmonton SEO sprint",
    "local SEO Edmonton",
    "Google Business Profile optimization Edmonton",
    "SEO audit Edmonton",
    "Edmonton local SEO service",
    "Edmonton visibility sprint",
    "small business SEO Edmonton",
    "Google rankings Edmonton",
    "SEO consultant Edmonton",
    "AI search optimization Edmonton",
  ],
  openGraph: {
    title: "Edmonton Visibility Sprint | Brandt Systems",
    description:
      "Get found on Google in 60 days. A done-for-you local SEO sprint for Edmonton businesses — founding client pricing available for 3 spots.",
    url: "https://brandtsystems.ca/services/edmonton-visibility-sprint",
  },
};

const deliverables = [
  {
    label: "Google Business Profile",
    description:
      "Full buildout: hours, photos, services, categories, posts, Q&A, and citation consistency across top directories.",
  },
  {
    label: "Technical SEO audit + fixes",
    description:
      "Google Search Console errors, indexing issues, sitemap, robots.txt, llms.txt, broken links, and mobile usability.",
  },
  {
    label: "On-page optimization",
    description:
      "Title tags, meta descriptions, H1 structure, service page optimization, internal linking, and content clarity updates for up to 10 pages.",
  },
  {
    label: "Keyword targeting map",
    description:
      "10\u201315 local search terms mapped to the right pages on your site, including question-based and answer-style searches that support AI visibility.",
  },
  {
    label: "GA4 + conversion tracking",
    description:
      "Call click tracking, form submission tracking, and GBP call tracking so you see leads, not just traffic.",
  },
  {
    label: "Citation audit",
    description:
      "NAP (name, address, phone) consistency check and correction across your top 10 online directories.",
  },
  {
    label: "Review generation campaign",
    description:
      "Email or text script to help you collect more Google reviews from past customers (2 campaigns).",
  },
  {
    label: "AI search visibility optimization",
    description:
      "Schema enhancements, FAQ/service content restructuring, answer-style formatting, local entity consistency, and trust signal improvements so your business is easier for Google AI Overviews and ChatGPT-style tools to understand and recommend.",
  },
  {
    label: "Live reporting dashboard",
    description:
      "Looker Studio dashboard including rankings, GBP calls, organic traffic, conversions, indexed pages, and AI search readiness signals, including question-based search impressions, FAQ visibility, and long-tail service query growth.",
  },
  {
    label: "Weekly Loom update",
    description:
      "A short 3\u20135 minute screen-recorded update every week showing what was done, what changed, and what\u2019s next.",
  },
  {
    label: "60-day final report",
    description:
      "Before/after PDF showing GBP impressions, keyword visibility, traffic, and conversion data with written summary.",
  },
];

const timelineSteps = [
  {
    days: "Days 1\u20132",
    title: "Access granted \u2192 full audit delivered",
    description:
      "I audit your GBP, connect Google Search Console, review your GA4 setup, and record a Loom walkthrough of exactly what\u2019s broken and what I\u2019m going to fix. You see the full picture within 48 hours.",
  },
  {
    days: "Days 3\u20135",
    title: "GBP fully optimized + top errors fixed",
    description:
      "Your Google Business Profile is completely rebuilt with the right categories, services, photos, and your first post. Top technical errors are resolved and submitted to Google for re-crawling.",
  },
  {
    days: "Days 6\u20137",
    title: "Dashboard live + first report sent",
    description:
      "Your live reporting dashboard is up and tracking. I send your first weekly Loom update covering everything completed and what the next 2 weeks look like.",
  },
];

const expectedResults = [
  "Increased Google Business Profile impressions and more calls/clicks from the map listing",
  "Improved keyword visibility in Google Search Console",
  "Technical issues resolved so pages index properly and stay crawlable",
  "Better structured service pages for AI summaries and answer-style searches",
  "Stronger local trust signals through citations, reviews, and schema",
  "Tracking in place so you can see calls, form fills, and leads tied to search visibility",
];

const goodFit = [
  "You\u2019re a local Edmonton business that relies on people finding you through Google (clinics, home services, retail, wellness studios, service businesses)",
  "Your Google Business Profile hasn\u2019t been properly set up or hasn\u2019t been touched in a while",
  "You\u2019re not sure if your website is properly indexed or technically sound",
  "You want better Google visibility but don\u2019t have the time or expertise to figure out SEO yourself",
  "You want to actually see what\u2019s working \u2014 calls, leads, and traffic tied to real data",
];

const notFit = [
  "You need paid advertising results immediately (Google Ads is a separate service)",
  "You need a brand-new website built before SEO makes sense",
  "You\u2019re expecting instant results \u2014 SEO improvements typically show movement within 30\u201390 days",
];

const gettingStartedItems = [
  { label: "Google Business Profile access", detail: "Add me as a manager (not owner)" },
  { label: "Google Search Console access", detail: "Full user access" },
  { label: "GA4 property access", detail: "Editor level" },
  { label: "Website CMS login", detail: "WordPress, Squarespace, Wix, etc." },
  { label: "Business info sheet", detail: "I send you a simple form: address, hours, services, service area" },
  { label: "3\u20135 photos", detail: "Storefront, team, or work in action (for your GBP listing)" },
  { label: "Signed agreement", detail: "Including the case study rights clause" },
];

export default function EdmontonVisibilitySprintPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Edmonton Visibility Sprint \u2014 Brandt Systems",
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
      name: "Edmonton Visibility Sprint",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Edmonton Visibility Sprint \u2014 One-Time",
            description:
              "Full 60-day local SEO sprint with GBP optimization, technical SEO, keyword targeting, AI search readiness, and live reporting.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "CAD",
            price: "997",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Edmonton Visibility Sprint \u2014 Sprint + Ongoing",
            description:
              "60-day sprint plus monthly SEO maintenance, GBP posts, ongoing reporting, and ranking monitoring.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "CAD",
            price: "497",
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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300 mb-4">
            Founding Client Offer &mdash; Limited to 3 Spots
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Edmonton Visibility Sprint
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
            A 60-day local SEO intensive for Edmonton businesses. Not just
            Google Search &mdash; Google Maps, AI Overviews, ChatGPT, and the
            newer &ldquo;best near me&rdquo; searches that are becoming more
            common. This sprint fixes that.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
<CTA href="/contact" size="lg">
            Claim Your Spot
          </CTA>
            
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Most Edmonton businesses are harder to find than they should be
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not just on Google Search, but in Google Maps, Google AI Overviews,
            ChatGPT, and the newer &ldquo;best near me&rdquo; style searches
            that are becoming more common.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your customers are asking full questions like:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              "best physio clinic near me",
              "top bakery in Edmonton",
              "Who installs garage doors in Sherwood Park",
              "best massage therapist for runners",
            ].map((query, i) => (
              <p
                key={i}
                className="text-sm text-gray-600 italic bg-gray-50 rounded-lg px-4 py-2 border border-gray-100"
              >
                &ldquo;{query}&rdquo;
              </p>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Those answers increasingly come from Google Maps, Google AI
            Overviews, ChatGPT, voice assistants, and conversational
            &ldquo;best near me&rdquo; tools.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Over 60 days, I handle your local search visibility from end to end:
            fixing the technical SEO foundation, optimizing your Google Business
            Profile, improving your on-page content, strengthening your local
            trust signals, and making sure your website is structured clearly
            enough for both Google and AI-powered search tools to understand and
            recommend. You hand over access. I do the work. You get a live
            dashboard and clear weekly updates showing real movement.
          </p>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            What you can expect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The goal of this sprint is to improve search visibility. That means
            more people finding your business when they search locally, more
            calls and messages coming through your Google listing, stronger
            visibility for your service pages, and better readiness for
            AI-generated search answers.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Every business and market is different, so I can&apos;t make
            promises about specific ranking positions. Google&apos;s algorithm is
            outside anyone&apos;s control, and being &ldquo;#1 on Google&rdquo;
            within a specific time frame cannot be guaranteed. What I do promise
            is a complete, professionally built local search foundation that
            gives your business the best possible chance of showing up across
            modern search.
          </p>
          <h3 className="text-base font-bold text-gray-900 mb-4">
            Typical improvements clients see over 60 days:
          </h3>
          <ul className="space-y-3">
            {expectedResults.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            What&apos;s included
          </h2>
          <p className="text-gray-500 mb-10">
            Every founding client sprint includes the following, delivered over
            60 days.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg bg-white p-5 flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1"
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
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week 1 Transparency */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Week 1 &mdash; what happens first
          </h2>
          <p className="text-gray-500 mb-12">
            The first 7 days are the most important. Here&apos;s exactly what
            gets done.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {timelineSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-1">
                    {step.days}
                  </p>
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
          <p className="mt-10 text-sm font-medium text-gray-700 border-l-4 border-teal-500 pl-4">
            You see real work, real changes, and a real dashboard within the
            first week.
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-teal-200 rounded-xl p-8 sm:p-10 bg-teal-50/30">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              The Visibility Guarantee
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If, after 60 days, your Google Business Profile visibility,
              indexed keyword footprint, and tracked organic lead activity have
              not improved, I&apos;ll continue working for an additional 30 days
              at no additional cost.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              I don&apos;t guarantee specific ranking positions because no one
              can control Google&apos;s algorithm. What I do guarantee is that
              your business will leave this sprint with a stronger local search
              foundation, cleaner technical signals, and measurable progress in
              the metrics that matter.
            </p>
            <p className="text-xs text-gray-400">
              Guarantee applies when required access, business information, and
              requested approvals are provided within 48 hours, and recommended
              technical fixes can be implemented on the current website platform.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Founding client pricing
          </h2>
          <p className="text-gray-500 mb-10 max-w-3xl">
            These rates are available exclusively to my first 3 founding
            clients. After these spots are filled, this package moves to
            standard pricing (starting at $1,000/month with no one-time sprint
            option).
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Option A */}
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-teal-300 transition-all hover:shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                One-Time Sprint
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-teal-600">$997</span>
                <span className="text-gray-600 ml-2">one-time</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Full 60-day sprint deliverables. Ideal if you want a clear start
                and end. No ongoing commitment required.
              </p>
              <CTA href="/contact" variant="outline" className="w-full">
                Get Started
              </CTA>
            </div>

            {/* Option B — Recommended */}
            <div className="bg-white rounded-xl p-8 border-2 border-teal-500 shadow-lg scale-105 relative transition-all hover:shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sprint + Ongoing
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-teal-600">$497</span>
                <span className="text-gray-600 ml-2">
                  setup + $497/month
                </span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sprint deliverables plus monthly SEO maintenance, 4 GBP
                posts/month, reporting, and ranking monitoring.
              </p>
              <CTA href="/contact" variant="primary" className="w-full">
                Get Started
              </CTA>
            </div>
          </div>
          
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Is this a fit for your business?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Good Fit */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-4">
                This sprint is a fit if:
              </h3>
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
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
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-4">
                This is not a fit if:
              </h3>
              <ul className="space-y-3">
                {notFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What I Need From You */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            What I need from you to get started
          </h2>
          <p className="text-gray-500 mb-8">
            Once you sign on as a founding client, here&apos;s what I ask for
            within 48 hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {gettingStartedItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border border-gray-200 rounded-lg bg-white p-4"
              >
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
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
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
                SEO Audit & Quick Wins Report
              </h3>
              <p className="text-sm text-gray-500">
                Need a one-time audit instead of a full sprint? Get a prioritized
                action list within 3 days.
              </p>
            </Link>
            <Link
              href="/services/google-ads-edmonton"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                Google Ads Management
              </h3>
              <p className="text-sm text-gray-500">
                Pair your organic SEO sprint with paid ads for faster results and
                more leads.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="claim-your-spot"
        className="py-20 bg-gradient-to-br from-teal-600 to-teal-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            3 founding spots available
          </h2>
          <p className="text-xl text-teal-50 mb-4 max-w-2xl mx-auto">
            To claim your spot, reach out directly. I&apos;ll send a free
            3-minute Loom walkthrough of your current Google presence &mdash; no obligation, just a free look at where things stand.
          </p>
          <p className="text-teal-100 mb-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-white underline underline-offset-4 hover:text-teal-200 transition-colors"
            >
              {siteConfig.email}
            </a>
            <span className="mx-3 text-teal-300">&bull;</span>
            <a
              href="https://brandtsystems.ca"
              className="font-semibold text-white underline underline-offset-4 hover:text-teal-200 transition-colors"
            >
              brandtsystems.ca
            </a>
          </p>
          <CTA
            href={`mailto:${siteConfig.email}?subject=Edmonton%20Visibility%20Sprint%20%E2%80%94%20Founding%20Client%20Spot&body=Hi%20Gabby%2C%0A%0AI%E2%80%99m%20interested%20in%20the%20Edmonton%20Visibility%20Sprint.%20Here%E2%80%99s%20a%20bit%20about%20my%20business%3A%0A%0A`}
            variant="secondary"
            size="lg"
            external
            className="!bg-white hover:!bg-teal-800 !text-black hover:!text-white shadow-lg"
          >
            Claim Your Spot
          </CTA>
          <p className="mt-6 text-sm text-teal-100">
            Founding pricing is only available to the first 3 clients.
          </p>
        </div>
      </section>
    </>
  );
}
