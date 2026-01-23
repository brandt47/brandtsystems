import CTA from "./CTA";

interface PricingTierCardProps {
  name: string;
  startingPrice: string;
  timeline: string;
  description: string;
  included: string[];
  notIncluded?: string[];
  bestFor: string;
  featured?: boolean;
}

export default function PricingTierCard({
  name,
  startingPrice,
  timeline,
  description,
  included,
  notIncluded,
  bestFor,
  featured = false,
}: PricingTierCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-8 border-2 transition-all hover:shadow-lg ${
        featured
          ? "border-teal-500 shadow-lg scale-105 relative"
          : "border-gray-200 hover:border-teal-300"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-teal-600">{startingPrice}</span>
        <span className="text-gray-600 ml-2">starting</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        ⏱️ Timeline: <span className="font-medium">{timeline}</span>
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      {/* Included */}
      <div className="mb-6">
        <p className="font-semibold text-gray-900 mb-3">What&apos;s included:</p>
        <ul className="space-y-2">
          {included.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
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

      {/* Not Included */}
      {notIncluded && notIncluded.length > 0 && (
        <div className="mb-6">
          <p className="font-semibold text-gray-900 mb-3">Not included:</p>
          <ul className="space-y-2">
            {notIncluded.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
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
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Best For */}
      <div className="mb-6 p-4 bg-teal-50 rounded-lg">
        <p className="text-sm font-medium text-teal-900">Best for:</p>
        <p className="text-sm text-teal-700">{bestFor}</p>
      </div>

      <CTA href="/contact" variant={featured ? "primary" : "outline"} className="w-full">
        Get Started
      </CTA>
    </div>
  );
}
