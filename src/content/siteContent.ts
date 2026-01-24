// ============================================================================
// BRANDT SYSTEMS - SITE CONTENT
// ============================================================================
// All editable copy and content in one place for easy updates

export const siteConfig = {
  name: "Brandt Systems",
  location: "Edmonton, Alberta, Canada",
  email: "hello@brandtsystems.ca",
  phone: "(780) 555-0123",
  responseTime: "Within 24 hours",
  calendlyUrl: "https://calendly.com/brandtsystems/intro-call", // Replace with actual URL
  tagline: "Practical tech solutions that just work, without the complexity.",
  description: "Website development, integrations, booking systems, and SEO. 4+ years helping businesses get their tech working together seamlessly.",
};

export const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const hero = {
  headline: "Practical tech solutions that just work, without the complexity.",
  subheadline: "Websites, booking systems, integrations, and SEO — built to work together seamlessly.",
  primaryCTA: "Book a Free 15-Minute Call",
  secondaryCTA: "Get a Quote",
  trustLine: "Edmonton-based • 4+ years development experience • Practical solutions that work • Responds within 24 hours",
};

export const testimonials = [
  {
    quote: "Gabby is very good at what she does. She built my app from the gound up and did an outstanding job. Also her communication is excellent.",
    author: "Stephen V",
    role: "Owner, Promodome LTD",
    industry: "Technology",
  }, {
    quote: "Gabby is very good at what she does. She built my app from the gound up and did an outstanding job. Also her communication is excellent.",
    author: "Stephen V",
    role: "Owner, Promodome LTD",
    industry: "Technology",
  },
  {
    quote: "Gabby is very good at what she does. She built my app from the gound up and did an outstanding job. Also her communication is excellent.",
    author: "Stephen V",
    role: "Owner, Promodome LTD",
    industry: "Technology",
  }


];

export const services = [
  {
    id: "websites",
    icon: "🌐",
    name: "Websites & Web Apps",
    tagline: "Professional websites that work for your business",
    description: "Clean, fast, mobile-friendly websites built with modern tools like Next.js and React.",
    deliverables: [
      "Professional business websites",
      "Landing pages that convert",
      "Contact forms & lead capture",
      "Mobile-responsive design",
      "Fast loading & SEO-ready",
      "Can also build sites through Shopify, Square, etc."
    ],
    bestFor: ["Service businesses", "Local businesses", "Consultants & coaches", "Online retailers"],
  },
  {
    id: "integrations",
    icon: "⚙️",
    name: "Integrations & Automation",
    tagline: "Connect your tools and eliminate repetitive tasks",
    description: "Practical integrations line connecting your website to your CRM, automating booking confirmations, and syncing customer data. Focus on solutions that save time and reduce manual work.",
    deliverables: [
      "Zapier workflow automation",
      "API integrations & connections",
      "CRM integrations",
      // "Email marketing automation setup",
      "Form submissions to databases",
      // "Booking confirmations & reminders",
      // "Payment notifications & tracking"
    ],
    bestFor: ["Service providers", "Growing businesses", "Teams looking for efficiency", "Anyone tired of manual processes"],
  },
  {
    id: "booking-payments",
    icon: "💳",
    name: "Bookings, Payments & Client Intake",
    tagline: "Make it easy for clients to book and pay you",
    description: "Integrated booking systems with payment collection, automated reminders, and intake forms.",
    deliverables: [
      "Jane/Calendly/Acuity setup & customization",
      "Stripe integration for deposits & full payments",
      "Automated booking confirmations & reminders",
      "Client intake forms (pre-appointment)",
      "Waitlist & cancellation management",
      "Sync bookings to your calendar & CRM",
    ],
    bestFor: ["Health & wellness", "Coaches & consultants", "Beauty & spa", "Professional services"],
  },
  {
    id: "seo-ads",
    icon: "📈",
    name: "SEO & Google Ads",
    tagline: "Get found on Google and convert visitors into customers",
    description: "Technical SEO that gets you ranking, Google Ads campaigns that bring in qualified leads, and conversion tracking so you know what's working. Data-driven marketing that actually drives ROI.",
    deliverables: [
      "Technical SEO audit & implementation",
      "On-page optimization & content strategy",
      "Local SEO & Google Business Profile optimization",
      "Google Ads campaign setup & management",
      "Conversion tracking (Google Analytics, Google Tag Manager)",
      "A/B testing & landing page optimization",
      "Monthly performance reporting & strategy adjustments",
    ],
    bestFor: ["Local businesses", "Service providers", "E-commerce", "Anyone serious about growth"],
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Discover",
    description: "15-minute intro call to understand your goals, pain points, and what success looks like for you. Then 1-2 discovery/ strategy sessions to plan and research the project.",
  },
  {
    step: 2,
    title: "Build",
    description: "I design and build the project we define. You will get regular updates along the way!",
  },
  {
    step: 3,
    title: "Optimize",
    description: "Launch, measure, and improve. I'll train you on everything and provide ongoing support as you grow.",
  },
];

export const caseStudies = [
  {
    id: "wellness-booking",
    category: ["Website", "Booking", "Automation"],
    client: "Wellness Studio",
    industry: "Health & Wellness",
    image: "/images/case-study-1.jpg", // Placeholder
    title: "Automated Booking System Saves 10+ Hours/Week",
    context: "A busy wellness studio was losing clients due to slow email booking and manual payment collection.",
    goals: ["Reduce booking friction", "Automate reminders", "Collect deposits upfront"],
    solution: [
      "Set up Jane booking system with custom intake forms",
      "Integrated Stripe for automatic deposit collection",
      "Built automated email & SMS reminder sequences",
      "Created dashboard for tracking no-shows and revenue",
    ],
    tools: ["Jane", "Stripe", "Zapier", "Google Calendar"],
    results: [
      { metric: "10+ hours", label: "saved per week" },
      { metric: "40%", label: "reduction in no-shows" },
      { metric: "100%", label: "deposit collection rate" },
    ],
  },
  {
    id: "local-seo",
    category: ["Website", "SEO"],
    client: "Home Services Company",
    industry: "Home Services",
    image: "/images/case-study-2.jpg",
    title: "From Page 3 to Page 1 in 90 Days",
    context: "Local home services company wasn't showing up in Google searches despite great reviews.",
    goals: ["Rank for local keywords", "Increase organic traffic", "Generate qualified leads"],
    solution: [
      "Technical SEO audit & fixes (speed, mobile, structured data)",
      "Optimized Google Business Profile with service areas",
      "Created SEO-optimized service pages with local content",
      "Set up conversion tracking and lead capture forms",
    ],
    tools: ["Next.js", "Google Search Console", "Google Analytics", "Ahrefs"],
    results: [
      { metric: "Page 1", label: "for 8 target keywords" },
      { metric: "300%", label: "increase in organic traffic" },
      { metric: "25+", label: "qualified leads/month" },
    ],
  },
  {
    id: "workflow-automation",
    category: ["Integration", "Automation"],
    client: "Professional Services",
    industry: "Business Services",
    image: "/images/case-study-3.jpg",
    title: "Connected Systems Save 15 Hours Per Week",
    context: "Business was manually copying information from website forms into their database, then creating invoices and follow-up tasks. Everything required double-entry and was prone to errors.",
    goals: ["Connect forms to database", "Automate invoice creation", "Eliminate manual data entry"],
    solution: [
      "Connected website contact forms to CRM using Zapier",
      "Set up automatic invoice creation for new clients",
      "Created automated notification system",
      "Built simple tracking dashboard",
      "Added team notifications for new inquiries",
    ],
    tools: ["Zapier", "CRM System", "Invoicing Software", "Notifications", "Spreadsheets"],
    results: [
      { metric: "15 hours", label: "saved per week" },
      { metric: "0", label: "data entry errors" },
      { metric: "60%", label: "faster processing" },
    ],
  },
];

export const pricingTiers = [
  {
    id: "free-intro-call",
    name: "Free Intro Call",
    startingPrice: "Free",
    timeline: "15 minutes",
    description: "Let's confirm we're a good fit and understand your project at a high level. No commitment, no pressure—just an honest conversation about what you need.",
    included: [
      "15-minute consultation",
      "Project overview discussion",
      "Fit assessment",
      "High-level scope review",
      "Clear next steps",
      "No obligation",
    ],
    bestFor: "Anyone exploring options and wanting to see if we're a good match",
  },
  {
    id: "paid-discovery",
    name: "Discovery & Strategy",
    startingPrice: "Fixed Fee",
    timeline: "1-2 sessions",
    description: "Professional planning before any build work. Get clarity on your goals, tech stack, and a detailed roadmap to execute. This is where we turn your vision into a concrete plan.",
    included: [
      "Goals + scope clarity session",
      "Tech review (audit what you have now)",
      "SEO / tracking audit (if relevant)",
      "Recommended solution + timeline",
      "Written plan with detailed quote",
      "Roadmap you can take anywhere",
    ],
    bestFor: "Businesses ready to invest in proper planning before building",
  },
  {
    id: "build-implementation",
    name: "Build & Implementation",
    startingPrice: "Custom Quote",
    timeline: "Project-based",
    description: "This is where we bring your plan to life. Whether it's a website, booking system, automation, or full-scale integration—I build it right the first time.",
    included: [
      "Custom web development",
      "Website design & development",
      "Booking & payment systems",
      "Workflow automation",
      "SEO setup & optimization",
      "Ad campaign setup & tracking",
      "Training & documentation",
    ],
    bestFor: "Businesses ready to execute and bring their digital vision to life",
  },
  {
    id: "monthly-support",
    name: "Ongoing Support",
    startingPrice: "Monthly Retainer",
    timeline: "Ongoing",
    description: "Keep everything running smoothly with proactive maintenance, updates, and optimization. Think of it as having a technical partner on call whenever you need one.",
    included: [
      "Small edits + fixes",
      "Security updates & monitoring",
      "Performance optimization",
      "SEO & analytics reporting",
      "Automation maintenance",
      "Priority support",
    ],
    bestFor: "Businesses who want peace of mind and ongoing optimization",
  },
];

export const pricingFAQ = [
  {
    question: "How does the process work?",
    answer: "Step 1: Free 15-minute intro call to confirm fit. Step 2: Paid Discovery/Strategy session where we clarify goals, review your tech, and create a detailed plan with pricing. Step 3: Build/Implementation based on the agreed scope. Step 4: Optional monthly support retainer for ongoing maintenance and optimization.",
  },
  {
    question: "Why do I need to pay for discovery/strategy?",
    answer: "The paid planning step ensures we're both serious and aligned before any build work begins. You get a written plan, recommended solution, timeline, and detailed quote you can use to move forward confidently. It also filters out tire kickers so I can focus on clients ready to execute.",
  },
  {
    question: "How much will my project cost?",
    answer: "Every project is unique, so pricing is customized based on your specific needs, scope, and timeline. During the free intro call, I'll give you a ballpark estimate. The discovery session produces a detailed, itemized quote. I focus on fair pricing that reflects the value you'll receive.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! For larger projects, I offer flexible payment terms—typically structured around project milestones or split into deposits and completion payments. We'll discuss what works best for your budget during the discovery session.",
  },
  {
    question: "What's included in monthly support?",
    answer: "Small edits, fixes, security updates, site monitoring, SEO reporting, automation maintenance, and priority support. Perfect for businesses that need ongoing help but not a full-time developer. Pricing varies based on your specific needs and how much support you require.",
  },
  {
    question: "Can I start small and add more later?",
    answer: "Absolutely. Many clients start with a free intro call, do paid discovery, build one thing (like a landing page or booking system), then expand with automations, SEO, or monthly support as they grow. You're never locked in and we scale as you need.",
  },
];

export const faqItems = [
  {
    question: "What platforms and tools do you work with?",
    answer: "Development: Next.js, React, C#, MongoDb, Firebase, Node.js, JavaScript/TypeScript. Integrations: Zapier, custom APIs, other technologies as needed. SEO: Google Search Console, Google Analytics, Screaming Frog. Ads: Google Ads, Google Tag Manager. Booking: Jane, Calendly, Acuity. Payments: Stripe, Square, PayPal. If you use something I haven't worked with yet, I'll learn it.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Quick wins (forms, booking setup): 1-3 hours. Small builds (landing page, automation): 3-5 days. Standard website: 1-2 weeks. Complex projects (full site + booking + automations): 2-6 weeks. Timeline depends on scope, revisions, and how quickly you provide content/feedback.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer: "I don't sell hosting directly, but I'll help you choose the right provider (usually Vercel, Netlify, or your existing host) and handle all the technical setup. You own your domain and hosting.",
  },
  {
    question: "What if I already have a website?",
    answer: "No problem! I can work with your existing site to add features, improve SEO, fix bugs, or integrate new tools. If it's beyond fixing, I'll recommend a rebuild and explain why.",
  },
  {
    question: "Can you help with SEO and Google Ads?",
    answer: "Yes. I handle technical SEO (speed, mobile, structured data), on-page optimization, local SEO (Google Business Profile), and Google Ads setup with conversion tracking. I focus on sustainable, long-term strategies — no shady tactics.",
  },
  {
    question: "What if I need something you haven't done before?",
    answer: "Then I'll figure it out. I'm upfront about what I have and haven't done yet, but I learn fast and I'm relentless about finding solutions. If it's technically possible, I'll make it happen — and I won't charge you to learn something I should already know.",
  },
  {
    question: "Do you offer training?",
    answer: "Absolutely. Every project includes training on how to use and update your systems. I'll record walkthroughs and provide documentation so you're never stuck.",
  },
  {
    question: "What's your refund policy?",
    answer: "I don't offer refunds on completed work, but I do offer revisions within the agreed scope. If we're not a good fit early on, I'll refund your deposit minus any work completed. Communication is key — I'll check in regularly to make sure you're happy.",
  },
  {
    question: "Do you work with clients outside Edmonton?",
    answer: "Yes! While I'm based in Edmonton, I work with clients across Canada and the US. All communication is remote (Zoom, email, Slack).",
  },
  {
    question: "How do Stripe and payment integrations work?",
    answer: "I'll help you set up your Stripe account (or use your existing one), configure payment flows, and connect it to your booking system or website. You keep 100% of your revenue minus Stripe's processing fees (typically 2.9% + 30¢ per transaction).",
  },
  {
    question: "Can you integrate with my existing CRM or tools?",
    answer: "Usually, yes! Most modern tools have APIs or work with Zapier/Make. I'll assess your current setup and recommend the best integration approach.",
  },
  {
    question: "What if something breaks after launch?",
    answer: "I provide 30 days of post-launch bug fixes at no charge. After that, you can either handle minor updates yourself (with my training) or sign up for monthly support.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! Monthly support plans range from $150-$800/month and include small edits, fixes, security updates, monitoring, SEO check-ins, and priority support. Perfect for businesses that want peace of mind.",
  },
];

export const aboutContent = {
  name: "Gabrielle 'Gabby' Brandt",
  title: "Founder, Brandt Systems",
  bio: [
    "I'm a developer and integration specialist who helps businesses solve tech problems. From building custom web applications to connecting systems with modern tools, optimizing SEO, and running Google Ads campaigns that actually convert.",
    "My core skills: development in multiple languages (JavaScript, Python, PHP), integrations (Zapier, APIs, and enterprise platforms), technical SEO, and Google Ads. 4+ years of hands-on experience building practical solutions that work.",
    "Here's my promise: whatever tech challenge you bring me, I'll figure it out. I'm a fast learner, a relentless problem-solver, and I don't stop until it works exactly the way you need it to.",
    "I won't pretend to know everything — but I will research, test, and build until the solution is solid. No jargon, no fluff, no disappearing after launch. Just clear communication and real results.",
    "Based in Edmonton, Alberta, I work with clients across Canada and the US. When I'm not deep in code or testing integrations, you'll find me hiking, learning new tools, or helping businesses get their tech working seamlessly.",
  ],
  values: [
    {
      title: "Honest & Transparent",
      description: "I won't overpromise or pretend to be something I'm not. If I don't know how to do something yet, I'll tell you — and then I'll figure it out.",
    },
    {
      title: "Problem-Solver First",
      description: "I don't just execute. I think through your actual needs, find the best solution, and make it happen — even if it means learning something new.",
    },
    {
      title: "Built to Last",
      description: "I stick around after launch. Questions? Issues? Want to add something new? I'm here to support you as your business grows.",
    },
  ],
  credentials: [
    "4+ years of professional development experience",
    "Expert in integrations (Zapier, APIs, enterprise platforms)",
    "Proficient in JavaScript, Python, PHP, and modern frameworks",
    "Specialized in SEO and Google Ads for conversions",
    "Fast learner who figures things out",
  ],
};

export const leadMagnet = {
  title: "Free Website SEO Checklist",
  description: "10 quick wins to improve your Google rankings (no tech background needed).",
  ctaText: "Download Free Checklist",
  placeholder: "Enter your email",
};

export const contactForm = {
  budgetOptions: [
    "Under $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Not sure yet",
  ],
  timelineOptions: [
    "ASAP (within 1 week)",
    "1-2 weeks",
    "2-4 weeks",
    "1-3 months",
    "Just exploring",
  ],
};

export const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Pricing", href: "/pricing" },
  ],
  resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Book a Call", href: "/contact#book-call" },
  ],
};
