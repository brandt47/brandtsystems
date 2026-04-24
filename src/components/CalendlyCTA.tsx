"use client";

import CTA from "./CTA";
import { siteConfig } from "@/content/siteContent";
import { trackEvent, ConversionEvents } from "@/components/Analytics";

interface CalendlyCTAProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CalendlyCTA({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CalendlyCTAProps) {
  return (
    <CTA
      href={siteConfig.calendlyUrl}
      variant={variant}
      size={size}
      external
      className={className}
      onClick={() => trackEvent(ConversionEvents.BOOK_CALL_CLICK)}
    >
      {children}
    </CTA>
  );
}
