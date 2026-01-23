import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  name: string;
  tagline: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  icon,
  name,
  tagline,
  description,
  href,
}: ServiceCardProps) {
  const content = (
    <>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-teal-600 font-medium mb-3">{tagline}</p>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {href && (
        <div className="mt-4 text-teal-600 font-medium inline-flex items-center">
          Learn more 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  );

  const baseClasses = "bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all hover:-translate-y-1 h-full";

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
