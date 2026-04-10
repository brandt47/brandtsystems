// Placeholder for Google Analytics 4 integration
// Replace with your actual GA4 measurement ID

export default function Analytics() {
  // In production, replace 'G-XXXXXXXXXX' with your actual GA4 ID
  const GA_MEASUREMENT_ID = "G-1KB0BS9M60";

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Helper function to track conversion events
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  const win = window as unknown as { gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void };
  if (typeof window !== "undefined" && win.gtag) {
    win.gtag("event", eventName, eventParams);
  }
}

// Predefined conversion events
export const ConversionEvents = {
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  BOOK_CALL_CLICK: "book_call_click",
  GET_QUOTE_CLICK: "get_quote_click",
  LEAD_MAGNET_DOWNLOAD: "lead_magnet_download",
};
