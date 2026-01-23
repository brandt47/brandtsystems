import Link from "next/link";

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string[];
  results: { metric: string; label: string }[];
  image?: string;
}

export default function CaseStudyCard({
  id,
  title,
  client,
  industry,
  category,
  results,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work#${id}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group"
    >
      {/* Placeholder Image */}
      <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
        <span className="text-6xl opacity-20">{category[0] === "Website" ? "🌐" : category[0] === "Automation" ? "⚙️" : "📈"}</span>
      </div>

      <div className="p-6">
        {/* Category Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {category.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium px-2 py-1 bg-teal-50 text-teal-700 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {client} • {industry}
        </p>

        {/* Results */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
          {results.slice(0, 3).map((result, idx) => (
            <div key={idx} className="text-center">
              <p className="text-lg font-bold text-teal-600">{result.metric}</p>
              <p className="text-xs text-gray-600">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
