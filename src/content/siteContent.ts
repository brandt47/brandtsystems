// ============================================================================
// BRANDT SYSTEMS - SITE CONTENT
// ============================================================================
// All editable copy and content in one place for easy updates

export const siteConfig = {
  name: "Brandt Systems",
  location: "Edmonton, Alberta, Canada",
  email: "gabby@brandtsystems.ca",
  phone: "(780) 555-0123",
  responseTime: "Within 24 hours",
  calendlyUrl: "https://calendly.com/brandtsystems/intro-call", // Replace with actual URL
  tagline: "Practical tech solutions that just work, without the complexity.",
  description: "Website development, integrations, booking systems, and SEO. 3+ years helping businesses get their tech working together seamlessly.",
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
  trustLine: "Edmonton-based • 3+ years development experience • Responds within 24 hours",
};

export const testimonials = [
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
    id: "promopilot-platform",
    category: ["Website", "Integration", "Automation"],
    client: "Promopilot",
    industry: "SaaS & Technology",
    image: "/images/case-study-promopilot.jpg", // Placeholder
    title: "Enterprise SaaS Platform with Payment Processing & AWS Integration",
    context: "Enhanced and stabilized a Next.js SaaS platform requiring secure payment processing, user authentication, and Stripe for subscription management.",
    goals: ["Implement secure payment processing", "Build robust authentication system", "Integrate AWS services for deployment andscalability", "Improve codebase stability"],
    solution: [
      "Built and integrated Stripe payment processing with custom Next.js integration code",
      "Designed comprehensive MySQL database schema for user and subscription data",
      "Collaborated with AWS engineer to configure EventBridge + Lambda for subscription handling",
      "Designed and implemented secure end-to-end user authentication system using Auth.js",
      "Enhanced existing Next.js + TypeScript + Tailwind CSS codebase for production readiness",
      "Contributed to deployment workflows ensuring platform scalability and reliability",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MySQL", "AWS EventBridge", "AWS Lambda"],
    results: [
      { metric: "Secure", label: "payment processing" },
      { metric: "Scalable", label: "AWS infrastructure" },
      { metric: "Production", label: "ready platform" },
    ],
  },
  {
    id: "snappea-nutrition-app",
    category: ["Website", "Integration", "Automation"],
    client: "Snappea",
    industry: "Health & Technology",
    image: "/images/case-study-snappea.jpg", // Placeholder
    title: "AI-Powered Nutrition Tracker with Photo Recognition",
    context: "Developed a progressive web app that revolutionizes nutrition tracking by allowing users to log meals instantly with photo recognition technology.",
    goals: ["Build full-stack PWA from scratch", "Integrate AI photo recognition", "Create seamless user experience", "Implement real-time nutrition tracking"],
    solution: [
      "Led end-to-end development using React and TypeScript for frontend",
      "Built robust backend with .NET and MongoDB for data management",
      "Integrated OpenAI's API for intelligent food photo recognition",
      "Implemented Firebase for real-time data sync and user authentication",
      "Developed progressive web app features for mobile-first experience",
      "Created intuitive UI/UX for instant meal logging with single photo snap",
      "Hosted app on a digital ocean droplet"
    ],
    tools: ["React", "TypeScript", ".NET", "MongoDB", "Firebase", "OpenAI API", "Cursor AI"],
    results: [
      { metric: "1-snap", label: "meal logging" },
      { metric: "AI-powered", label: "food recognition" },
      { metric: "Full-stack", label: "PWA solution" },
    ],
  }
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
    answer: "Development: Next.js, React, C#/.NET, MongoDB, PostgreSQL, Firebase, Node.js, JavaScript/TypeScript. Cloud & Infrastructure: AWS (EventBridge, Lambda), deployment workflows. AI Integration: OpenAI API, AI-powered features. Integrations: Zapier, custom APIs, other technologies as needed. SEO: Google Search Console, Google Analytics, Screaming Frog. Ads: Google Ads, Google Tag Manager. Booking: Jane, Calendly, Acuity. Payments: Stripe, Square, PayPal. Modern Tools: Cursor AI for efficient development workflows. If you use something I haven't worked with yet, I'll learn it.",
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
  name: "Gabrielle Brandt",
  title: "Founder, Brandt Systems",
  bio: [
    "Hi, I'm Gabby! (A new headshot scheduled for a future sprint😂)",
    "I’m a software developer and consultant based in Edmonton, Alberta. I help businesses build modern websites, improve SEO, run Google Ads, and automate the repetitive tasks that slow things down. I’ve been developing for 3 years, and freelancing for the past year. Outside of work, I’m usually running, xc skiing, or hanging out with my cat.",
    "I can help with website builds and upgrades, technical SEO and SEO-friendly site structure, Google Ads setup and conversion tracking, automations and integrations (like forms, email, CRMs, and workflows), and custom internal tools and dashboards. I work best with small businesses and teams that want someone straightforward and reliable who can take ownership of the technical side and make things work properly.",
    "I like to keep things straightforward. We’ll start with a quick call to talk through what you need, then I’ll send a clear plan and pricing. From there, I’ll build it, keep you updated, and make sure everything is tested and ready to go before launch. If you have a project in mind, feel free to reach out and tell me what you’re looking for."
  ],
    values: [
    {
      title: "Honest & Transparent",
      description: "I value clear communication and transparency in all my work. You will be updated regularily when working with me.",
    },
    {
      title: "Problem-Solver First",
      description: "You bring the goal. I’ll figure out the best way to make it happen, even if it means learning something new.",
    },
    {
      title: "Built to Last",
      description: "Need changes later? Have questions? Want to expand? I’m still here.",
    },
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
