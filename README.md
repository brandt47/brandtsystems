# Brandt Systems Website

A high-converting, conversion-focused website for Brandt Systems — a freelance consulting business specializing in websites, automations, and growth systems for small businesses.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or your preferred package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
brandtsystems/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── services/          # Services page
│   │   ├── work/              # Portfolio/case studies
│   │   ├── pricing/           # Pricing page
│   │   ├── about/             # About page
│   │   ├── faq/               # FAQ page
│   │   ├── contact/           # Contact page
│   │   ├── api/contact/       # Contact form API route
│   │   ├── layout.tsx         # Root layout with nav/footer
│   │   ├── globals.css        # Global styles + design system
│   │   ├── sitemap.ts         # SEO sitemap
│   │   └── robots.ts          # Robots.txt
│   ├── components/            # Reusable React components
│   │   ├── Navigation.tsx     # Sticky navigation with mobile menu
│   │   ├── Footer.tsx         # Site footer
│   │   ├── CTA.tsx            # Call-to-action button component
│   │   ├── TestimonialCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CaseStudyCard.tsx
│   │   ├── PricingTierCard.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── BookCallSection.tsx
│   │   └── Analytics.tsx      # GA4 placeholder
│   └── content/
│       └── siteContent.ts     # 🎯 ALL EDITABLE COPY/CONTENT
├── public/                    # Static assets (images, etc.)
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json
```

## ✏️ Editing Content

### **IMPORTANT: All editable copy lives in one file:**

📄 **`src/content/siteContent.ts`**

This is where you can quickly update:
- Site name, location, contact info
- Hero headlines and CTAs
- Testimonials
- Service descriptions
- Case studies
- Pricing tiers
- FAQ questions/answers
- About bio and values
- Footer links

Simply edit the values in this file — no need to hunt through multiple components!

### Example: Updating Hero Text

```typescript
// In src/content/siteContent.ts
export const hero = {
  headline: "Your new headline here",
  subheadline: "Your new subheadline",
  primaryCTA: "Book a Call",
  secondaryCTA: "Get Started",
  // ...
};
```

## 🎨 Design System

The design uses a clean, modern aesthetic with:
- **Primary color:** Teal (`#0d9488`)
- **Typography:** Inter font family
- **Spacing:** Mobile-first responsive design
- **Components:** Cards, buttons, accordions with consistent styling

All design tokens are in:
- `src/app/globals.css` (custom classes)
- `tailwind.config.ts` (color palette, fonts)

## 📱 Features

✅ **Fully responsive** (mobile-first design)  
✅ **SEO optimized** (metadata, sitemap, robots.txt, JSON-LD schema)  
✅ **Accessible** (semantic HTML, focus states, ARIA labels)  
✅ **Fast performance** (Next.js 15 with App Router)  
✅ **Contact form** with validation (API route at `/api/contact`)  
✅ **Analytics ready** (GA4 placeholder in `Analytics.tsx`)  
✅ **7 complete pages** (Home, Services, Work, Pricing, About, FAQ, Contact)

## 🔧 Configuration

### 1. Update Site Config

Edit `src/content/siteContent.ts`:
- Change email, phone, location
- Update Calendly URL
- Modify pricing tiers
- Add/remove services

### 2. Connect Analytics

In `src/components/Analytics.tsx`:
- Replace `G-XXXXXXXXXX` with your actual GA4 measurement ID
- Conversion events are pre-configured for contact form submissions, call bookings, etc.

### 3. Wire Up Contact Form

The contact form currently logs submissions to the console. In production:

1. Open `src/app/api/contact/route.ts`
2. Integrate with your email service (SendGrid, Resend, etc.)
3. Or send to your CRM (Notion, HubSpot, Airtable, etc.)

Example integration points are commented in the code.

### 4. Add Images

Place images in the `public/` folder:
- `/public/og-image.jpg` (for OpenGraph social sharing)
- `/public/images/case-study-*.jpg` (for case studies)
- Update image references in the relevant components

### 5. Update Domain

Search and replace `brandtsystems.ca` with your actual domain in:
- `src/app/layout.tsx` (metadata)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## 📊 SEO

### Metadata

Each page has optimized metadata using Next.js 15 Metadata API:
- Title templates
- Descriptions
- OpenGraph tags
- Twitter cards

### Structured Data

JSON-LD schema for LocalBusiness and ProfessionalService is included on the home page.

### Sitemap & Robots

Auto-generated at:
- `https://yourdomain.com/sitemap.xml`
- `https://yourdomain.com/robots.txt`

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy (automatic)

### Other Platforms

Works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with `npm run build && npm start`

### Environment Variables

If you add environment variables (e.g., for email services):
- Create `.env.local` for local development
- Add them in your hosting platform's dashboard

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Analytics:** Google Analytics 4 (placeholder)
- **Deployment:** Vercel-ready (works anywhere)

## 📝 To-Do After Launch

- [ ] Replace placeholder images with real photos
- [ ] Connect contact form to email service or CRM
- [ ] Add actual GA4 measurement ID
- [ ] Update Calendly link
- [ ] Add more case studies as you complete projects
- [ ] Set up monthly support if needed

## 📧 Support

For questions or help with this codebase, contact Gabby at hello@brandtsystems.ca

## 📄 License

© 2026 Brandt Systems. All rights reserved.
