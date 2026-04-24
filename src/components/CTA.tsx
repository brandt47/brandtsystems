import Link from "next/link";

interface CTAProps {
  variant?: "primary" | "secondary" | "outline";
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  external?: boolean;
  onClick?: () => void;
}

export default function CTA({
  variant = "primary",
  href,
  children,
  className = "",
  size = "md",
  external = false,
  onClick,
}: CTAProps) {
  const baseClasses = "inline-block font-semibold rounded-lg transition-all hover:scale-105 shadow-sm text-center";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/20",
    secondary: "bg-gray-900 hover:bg-gray-800 text-white",
    outline: "border-2 border-teal-600 text-teal-600 hover:bg-teal-50",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
