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
  calendlyUrl: "https://calendly.com/gabby-brandtsystems/15-minute-call",
  tagline: "Practical tech solutions that just work, without the complexity.",
  description: "Website development, integrations, booking systems, and SEO. 3+ years helping businesses get their tech working together seamlessly.",
};

export const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const hero = {
  headline: "Practical tech solutions that just work, without the complexity.",
  subheadline: "Websites, booking systems, integrations, and SEO \u2014 built to work together seamlessly.",
  primaryCTA: "Book a Free 15-Minute Call",
  secondaryCTA: "Get a Quote",
  trustLine: "Edmonton-based \u2022 3+ years development experience \u2022 Responds within 24 hours",
};

export const testimonials = [
  {
    quote: "Gabby is very good at what she does. She built my app from the ground up and did an outstanding job. Also her communication is excellent.",
    author: "Stephen V",
    role: "Owner, Promodome LTD",
    industry: "Technology",
  }


];

export const services = [
  {
    id: "websites",
    icon: "\uD83C\uDF10",
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
    icon: "\u2699\uFE0F",
    name: "Integrations & Automation",
    tagline: "Connect your tools and eliminate repetitive tasks",
    description: "Practical integrations like connecting your website to your CRM, automating booking confirmations, and syncing customer data.",
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
    icon: "\uD83D\uDCB3",
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
    icon: "\uD83D\uDCC8",
    name: "SEO & Google Ads",
    tagline: "Get found on Google and convert visitors into customers",
    description: "Technical SEO that gets you ranking, Google Ads campaigns that bring in qualified leads, and conversion tracking so you know what\u2019s working.",
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
    description: "Quick call to learn your goals, then 1\u20132 sessions to scope and plan.",
  },
  {
    step: 2,
    title: "Build",
    description: "I design and build the project we define. You will get regular updates along the way!",
  },
  {
    step: 3,
    title: "Optimize",
    description: "Launch, measure, and improve. I\u2019ll train you on everything and provide ongoing support as you grow.",
  },
];

export const servicesHowItWorks = [
  {
    step: 1,
    title: "Free Call",
    description: "15 minutes to confirm we\u2019re a good fit. No commitment.",
  },
  {
    step: 2,
    title: "Discovery",
    description: "1\u20132 sessions to scope your project and build a plan.",
  },
  {
    step: 3,
    title: "Build",
    description: "I build it, keep you updated, and deliver ready-to-launch.",
  },
  {
    step: 4,
    title: "Support",
    description: "Optional monthly retainer for ongoing updates and maintenance.",
  },
];

export const projectSizes = [
  {
    id: "quick-wins",
    name: "Quick Wins",
    startingPrice: "$150+",
    timeline: "1\u20133 hours",
    description: "Small tasks and setups you\u2019ve been putting off \u2014 done properly the first time.",
    examples: [
      "Contact form setup",
      "Booking system configuration",
      "Google Analytics install",
      "Small site fix or update",
    ],
  },
  {
    id: "small-builds",
    name: "Small Builds",
    startingPrice: "$500+",
    timeline: "3\u20135 days",
    description: "A focused project with a clear deliverable and a defined scope.",
    examples: [
      "Landing page",
      "Workflow automation",
      "Payment integration",
      "SEO audit + fixes",
    ],
  },
  {
    id: "bigger-projects",
    name: "Bigger Projects",
    startingPrice: "Custom quote",
    timeline: "2\u20136 weeks",
    description: "Full-scale builds that combine multiple services into one cohesive system.",
    examples: [
      "Full website + booking + automations",
      "Custom web application",
      "Google Ads + tracking setup",
      "Ongoing retainer work",
    ],
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
    goals: ["Implement secure payment processing", "Build robust authentication system", "Integrate AWS services for deployment and scalability", "Improve codebase stability"],
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
    id: "cossack-earthworks",
    category: ["Website"],
    client: "Cossack Earthworks",
    industry: "Excavation & Construction",
    image: "/images/case-study-cossack.jpg",
    title: "Basic website for a Local Excavation Company",
    context: "Cossack Earthworks wanted a professional online presence quickly, while maintining the rights to the website domain and code. We found a solution to make this happen!",
    goals: [
      "Launch a clean, professional site fast",
      "Ensure the client fully owns their domain and website",
      "Make it easy for local customers to get in touch",
    ],
    solution: [
      "Built a single-page landing site showcasing services, past work, and contact info",
      "Deployed to Vercel for inexpensive and easy hosting",
      "Client retains full ownership of the domain and all website code",
      "No maintenance contract or ongoing update fees, client prefers to reach out to me when/if updates are required",
      "Basic SEO setup for local search in the Sherwood Park & Edmonton area",
    ],
    tools: ["Next.js", "Tailwind CSS", "Vercel"],
    results: [
      { metric: "Inexpensive", label: "Vercel hosting" },
      { metric: "100%", label: "client ownership" },
      { metric: "$0", label: "monthly maintenance fees" },
    ],
    liveUrl: "https://www.cossackearthworks.ca/",
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
      "Integrated OpenAI\u2019s API for intelligent food photo recognition",
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
    description: "Let\u2019s confirm we\u2019re a good fit and understand your project at a high level. No commitment, no pressure\u2014just an honest conversation about what you need.",
    included: [
      "15-minute consultation",
      "Project overview discussion",
      "Fit assessment",
      "High-level scope review",
      "Clear next steps",
      "No obligation",
    ],
    bestFor: "Anyone exploring options and wanting to see if we\u2019re a good match",
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
    description: "This is where we bring your plan to life. Whether it\u2019s a website, booking system, automation, or full-scale integration\u2014I build it right the first time.",
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
    answer: "The paid planning step ensures we\u2019re both serious and aligned before any build work begins. You get a written plan, recommended solution, timeline, and detailed quote you can use to move forward confidently. It also filters out tire kickers so I can focus on clients ready to execute.",
  },
  {
    question: "How much will my project cost?",
    answer: "Every project is unique, so pricing is customized based on your specific needs, scope, and timeline. During the free intro call, I\u2019ll give you a ballpark estimate. The discovery session produces a detailed, itemized quote. I focus on fair pricing that reflects the value you\u2019ll receive.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! For larger projects, I offer flexible payment terms\u2014typically structured around project milestones or split into deposits and completion payments. We\u2019ll discuss what works best for your budget during the discovery session.",
  },
  {
    question: "What\u2019s included in monthly support?",
    answer: "Small edits, fixes, security updates, site monitoring, SEO reporting, automation maintenance, and priority support. Perfect for businesses that need ongoing help but not a full-time developer. Pricing varies based on your specific needs and how much support you require.",
  },
  {
    question: "Can I start small and add more later?",
    answer: "Absolutely. Many clients start with a free intro call, do paid discovery, build one thing (like a landing page or booking system), then expand with automations, SEO, or monthly support as they grow. You\u2019re never locked in and we scale as you need.",
  },
];

export const faqItems = [
  {
    question: "What platforms and tools do you work with?",
    answer: "Development: Next.js, React, C#/.NET, MongoDB, PostgreSQL, Firebase, Node.js, JavaScript/TypeScript. Cloud & Infrastructure: AWS (EventBridge, Lambda), deployment workflows. AI Integration: OpenAI API, AI-powered features. Integrations: Zapier, custom APIs, other technologies as needed. SEO: Google Search Console, Google Analytics, Screaming Frog. Ads: Google Ads, Google Tag Manager. Booking: Jane, Calendly, Acuity. Payments: Stripe, Square, PayPal. Modern Tools: Cursor AI for efficient development workflows. If you use something I haven\u2019t worked with yet, I\u2019ll learn it.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Quick wins (forms, booking setup): 1-3 hours. Small builds (landing page, automation): 3-5 days. Standard website: 1-2 weeks. Complex projects (full site + booking + automations): 2-6 weeks. Timeline depends on scope, revisions, and how quickly you provide content/feedback.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer: "I don\u2019t sell hosting directly, but I\u2019ll help you choose the right provider (usually Vercel, Netlify, or your existing host) and handle all the technical setup. You own your domain and hosting.",
  },
  {
    question: "What if I already have a website?",
    answer: "No problem! I can work with your existing site to add features, improve SEO, fix bugs, or integrate new tools. If it\u2019s beyond fixing, I\u2019ll recommend a rebuild and explain why.",
  },
  {
    question: "Can you help with SEO and Google Ads?",
    answer: "Yes. I handle technical SEO (speed, mobile, structured data), on-page optimization, local SEO (Google Business Profile), and Google Ads setup with conversion tracking. I focus on sustainable, long-term strategies \u2014 no shady tactics.",
  },
  {
    question: "What if I need something you haven\u2019t done before?",
    answer: "Then I\u2019ll figure it out. I\u2019m upfront about what I have and haven\u2019t done yet, but I learn fast and I\u2019m relentless about finding solutions. If it\u2019s technically possible, I\u2019ll make it happen \u2014 and I won\u2019t charge you to learn something I should already know.",
  },
  {
    question: "Do you offer training?",
    answer: "Absolutely. Every project includes training on how to use and update your systems. I\u2019ll record walkthroughs and provide documentation so you\u2019re never stuck.",
  },
  {
    question: "What\u2019s your refund policy?",
    answer: "I don\u2019t offer refunds on completed work, but I do offer revisions within the agreed scope. If we\u2019re not a good fit early on, I\u2019ll refund your deposit minus any work completed. Communication is key \u2014 I\u2019ll check in regularly to make sure you\u2019re happy.",
  },
  {
    question: "Do you work with clients outside Edmonton?",
    answer: "Yes! While I\u2019m based in Edmonton, I work with clients across Canada and the US. All communication is remote (Zoom, email, Slack).",
  },
  {
    question: "How do Stripe and payment integrations work?",
    answer: "I\u2019ll help you set up your Stripe account (or use your existing one), configure payment flows, and connect it to your booking system or website. You keep 100% of your revenue minus Stripe\u2019s processing fees (typically 2.9% + 30\u00A2 per transaction).",
  },
  {
    question: "Can you integrate with my existing CRM or tools?",
    answer: "Usually, yes! Most modern tools have APIs or work with Zapier/Make. I\u2019ll assess your current setup and recommend the best integration approach.",
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
    "Hi, I\u2019m Gabby!",
    "I\u2019m a software developer and consultant based in Edmonton, Alberta, with 3 years of development experience and a year of freelancing. I help small businesses build modern websites, improve their SEO, run Google Ads, and automate the repetitive tasks that slow things down.",
    "I work best with small businesses and teams that want someone straightforward and reliable who can take ownership of the technical side and make things work properly. If that sounds like what you\u2019re looking for, contact me \u2014 I\u2019d love to hear about your project."
  ],
  values: [
    {
      title: "Honest & Transparent",
      description: "I value clear communication and transparency in all my work. You will be updated regularly when working with me.",
    },
    {
      title: "Problem-Solver First",
      description: "You bring the goal. I\u2019ll figure out the best way to make it happen, even if it means learning something new.",
    },
    {
      title: "Built to Last",
      description: "Need changes later? Have questions? Want to expand? I\u2019m still here.",
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

// ============================================================================
// LANDING PAGE CONTENT — SEO, Google Ads, Landing Pages
// ============================================================================

export const landingPageHowItWorks = [
  {
    step: 1,
    title: "Free audit call",
    description:
      "We spend 30 minutes on your business. I look at your current setup, tell you what I\u2019d fix first, and you decide if you want to work together. No pitch deck, no pressure.",
  },
  {
    step: 2,
    title: "Scoped proposal",
    description:
      "You get a one-page proposal with exactly what I\u2019ll do, what you\u2019ll get, and what it costs. No surprise invoices, no scope creep.",
  },
  {
    step: 3,
    title: "Done in days, not months",
    description:
      "I move fast. Audits come back in 72 hours. Landing pages go live in 1\u20132 weeks. You\u2019ll see results from ads within the first 30 days, or we adjust immediately.",
  },
];

export const seoLandingPage = {
  hero: {
    eyebrow: "SEO for Edmonton Businesses",
    headline: "Get found on Google by the customers already searching for you.",
    subheadline:
      "Most local businesses in Edmonton are invisible on Google \u2014 not because their service is bad, but because of fixable technical issues nobody ever told them about. I\u2019ll find them and fix them.",
    cta: "Book a Free SEO Audit Call",
  },
  valueProps: [
    "Your competitors are ranking above you for searches you should own",
    "Your Google Business Profile is likely missing key optimizations",
    "Technical issues on your site are silently killing your rankings",
  ],
  deliverables: [
    "Complete Google Business Profile audit",
    "On-page SEO review of your top 5 pages",
    "Local citation and NAP consistency check",
    "Competitor gap analysis \u2014 what they rank for that you don\u2019t",
    "Prioritized action list: quick wins vs. long-term moves",
    "30-min walkthrough call to explain everything",
  ],
  pricing: {
    range: "$300\u2013550 CAD",
    note: "Delivered in 3 days",
  },
  bestFor: [
    "Dentists",
    "Gyms & fitness studios",
    "Contractors & trades",
    "Real estate agents",
    "Any Edmonton business that wants more local customers",
  ],
  faq: [
    {
      question: "What does an SEO audit actually include?",
      answer:
        "A full review of your Google Business Profile, on-page SEO for your top pages, local citation and NAP consistency checks, a competitor gap analysis showing what they rank for that you don\u2019t, and a prioritized action list with quick wins and long-term moves. You also get a 30-minute walkthrough call so everything makes sense.",
    },
    {
      question: "How long before I see results from SEO?",
      answer:
        "Quick wins (Google Business Profile fixes, title tag updates, broken links) can show movement within 1\u20132 weeks. More competitive keywords typically take 2\u20134 months of consistent work. I\u2019ll be upfront about what\u2019s realistic for your market during our audit call.",
    },
    {
      question: "Do you only work with Edmonton businesses?",
      answer:
        "I\u2019m based in Edmonton and specialize in local SEO for Alberta businesses, but I work with clients across Canada. Local SEO strategy is similar everywhere \u2014 the fundamentals don\u2019t change by city.",
    },
    {
      question: "What\u2019s the difference between SEO and Google Ads?",
      answer:
        "SEO is organic \u2014 you earn your rankings over time and don\u2019t pay per click. Google Ads is paid \u2014 you pay for each visitor but get instant visibility. Most businesses benefit from both. I can help you figure out the right mix.",
    },
  ],
};

export const adsLandingPage = {
  hero: {
    eyebrow: "Google & Meta Ads for Edmonton Businesses",
    headline: "Stop burning ad budget. Start getting leads that actually convert.",
    subheadline:
      "Running ads without a strategy is just burning cash. I set up your campaigns properly from day one \u2014 right targeting, right creative, right budget \u2014 then optimize them every month so your cost-per-lead goes down, not up.",
    cta: "Book a Free Ads Strategy Call",
  },
  valueProps: [
    "You\u2019re spending money on ads but can\u2019t tell what\u2019s working",
    "Your cost-per-lead keeps going up instead of down",
    "You don\u2019t have conversion tracking, so you\u2019re flying blind",
  ],
  deliverables: [
    "Full account and campaign setup (Google Ads or Meta Ads)",
    "Audience research and targeting configuration",
    "Ad copy and creative direction (you supply imagery)",
    "Conversion tracking and pixel installation",
    "Monthly optimization: bids, audiences, ad refresh",
    "Plain-English monthly report \u2014 no vanity metrics",
  ],
  pricing: {
    setup: "$350\u2013600 CAD",
    monthly: "$350/mo or 12\u201315% of ad spend",
    note: "Setup fee + monthly management (whichever is higher)",
  },
  bestFor: [
    "E-commerce businesses doing $10k+/mo",
    "Service businesses spending $1k+/mo on ads",
    "Dentists & clinics",
    "Gyms & fitness studios",
    "Contractors & home services",
  ],
  faq: [
    {
      question: "How much should I spend on ads?",
      answer:
        "It depends on your industry and goals, but most local Edmonton businesses I work with spend $1,000\u2013$3,000/month on ad budget (separate from management fees). During the free call, I\u2019ll tell you what\u2019s realistic for your market and what kind of return to expect.",
    },
    {
      question: "Google Ads or Meta Ads \u2014 which should I use?",
      answer:
        "Google Ads works best when people are actively searching for your service (dentists, plumbers, lawyers). Meta Ads works best for awareness and offers (gyms, restaurants, e-commerce). Many businesses benefit from both. I\u2019ll recommend the right channel during our call.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "You\u2019ll typically see leads coming in within the first 1\u20132 weeks of launching. The first 30 days are about gathering data and optimizing. By month 2\u20133, campaigns are usually dialed in and cost-per-lead starts dropping consistently.",
    },
    {
      question: "What if I\u2019ve tried ads before and they didn\u2019t work?",
      answer:
        "That\u2019s actually common. Most failed ad campaigns come down to poor targeting, no conversion tracking, or sending traffic to a page that doesn\u2019t convert. I audit what went wrong, fix the fundamentals, and rebuild from there.",
    },
  ],
};

export const landingPagesLandingPage = {
  hero: {
    eyebrow: "Landing Pages & Lead Funnels for Edmonton Businesses",
    headline: "Your website looks nice. But does it actually convert visitors into customers?",
    subheadline:
      "I build dedicated landing pages and lead funnels designed around one job: turning a stranger into a booked appointment, a quote request, or a sale. Then I can run ads directly to it, so you get a complete growth engine.",
    cta: "Book a Free Strategy Call",
  },
  valueProps: [
    "Your website gets traffic but nobody fills out the form or calls",
    "You\u2019re sending ad traffic to your homepage instead of a dedicated page",
    "You don\u2019t have a clear funnel from visitor to customer",
  ],
  deliverables: [
    "Custom landing page built for conversion, not just aesthetics",
    "Headline, copy, and offer structure (written with you)",
    "Lead capture form, booking integration, or checkout",
    "Mobile-first, fast-loading, and built for ad traffic",
    "A/B test setup so we know what\u2019s working",
    "Optional: ongoing ad management to drive traffic",
  ],
  pricing: {
    range: "$1,000\u20133,000 CAD",
    note: "Per funnel build",
  },
  bestFor: [
    "Dentists & dental clinics",
    "Gyms & fitness studios",
    "Real estate agents",
    "Contractors & home services",
    "Any business running ads without a dedicated landing page",
  ],
  faq: [
    {
      question: "What\u2019s the difference between a landing page and a website?",
      answer:
        "A website is your full online presence \u2014 multiple pages, navigation, about page, etc. A landing page is a single focused page with one goal: get the visitor to take a specific action (book a call, request a quote, buy something). Landing pages consistently convert 2\u20135x better than sending traffic to a homepage.",
    },
    {
      question: "Do I need a landing page if I already have a website?",
      answer:
        "Yes, especially if you\u2019re running ads. Your website is built for browsing. A landing page is built for converting. Sending ad traffic to your homepage is like paying for a billboard that points to your entire building instead of the front door.",
    },
    {
      question: "Can you also run ads to the landing page?",
      answer:
        "Absolutely. That\u2019s the ideal setup \u2014 a high-converting landing page paired with targeted ads. I offer ad management as an add-on so you get a complete growth engine, not just a pretty page.",
    },
    {
      question: "How long does it take to build a landing page?",
      answer:
        "Most landing pages go live in 1\u20132 weeks. That includes copywriting, design, development, and testing. If you need it faster, I can usually accommodate rush timelines for an additional fee.",
    },
  ],
};

export const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
  ],
  resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Book a Call", href: "/contact#book-call" },
  ],
};
