import { getCurrentYear } from "@/lib/utils";

// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... (type definitions omitted for brevity, no changes required)

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "Modern CRM for Teams",
    titleBefore: "Your team's ",
    titleHighlight: "CRM,",
    titleAfter: " reimagined",
    subtitle:
      "DealNest helps your team organize contacts, companies, and deals—effortlessly.",
    primaryCta: { label: "Get Started with DealNest", href: "#pricing" },
    secondaryCta: { label: "See how it works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "DealNest CRM dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built With Trusted Tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why DealNest",
    heading: "A streamlined CRM for growing teams",
    description:
      "DealNest brings all your contacts, companies, and pipeline into one workspace for effortless team collaboration and customer management.",
    items: [
      {
        icon: "Blocks",
        title: "Unified Contacts",
        description: "Keep all your customer information in one secure place.",
      },
      {
        icon: "LineChart",
        title: "Pipeline Management",
        description: "Visualize deals and move them forward with ease.",
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description: "Work together seamlessly with notes, tags, and shared insights.",
      },
      {
        icon: "Sparkle",
        title: "Quick Setup",
        description: "Get started in minutes with our intuitive dashboard.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "All-in-one CRM that actually works for teams",
    subtitle:
      "DealNest is built for growing teams needing a faster, smarter way to manage relationships and close more deals.",
    items: [
      {
        icon: "Phone",
        title: "Unified Contacts",
        description:
          "All your customer, lead, and partner info — always one search away.",
      },
      {
        icon: "TrendingUp",
        title: "Deal Tracking",
        description:
          "Visual pipelines, sales stages, and status updates keep everyone focused.",
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description:
          "Notes, tagging, and assignments help teams keep knowledge flowing.",
      },
      {
        icon: "Building2",
        title: "Companies Overview",
        description: "View all organizations linked with your relationships.",
      },
      {
        icon: "Rocket",
        title: "Quick Setup",
        description: "Get started in minutes with no technical headaches.",
      },
      {
        icon: "LayoutDashboard",
        title: "Beautiful, Intuitive UI",
        description: "A clean, modern dashboard that keeps your team moving.",
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Essential CRM Features For Teams",
    subtitle:
      "DealNest gives you only what you need to sell and support without distraction.",
    items: [
      {
        title: "Contact Management",
        description: "Centralize every relationship and communication.",
        pro: false,
      },
      {
        title: "Company Records",
        description: "Keep organizations organized and up-to-date.",
        pro: false,
      },
      {
        title: "Deal Pipeline",
        description: "See every opportunity from lead through win.",
        pro: false,
      },
      {
        title: "Role-based Access",
        description: "Protect sensitive data and workflows by team role.",
        pro: true,
      },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams growing with DealNest",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Jessica M.",
        role: "Head of Sales, Growthify",
        comment:
          "DealNest made onboarding our team so smooth—everyone was excited to finally ditch spreadsheets.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Ethan R.",
        role: "Customer Success Lead, RocketLabs",
        comment:
          "We track all our customers, companies and deals in one simple workspace. The UI gets out of the way and helps us stay organized.",
        rating: 4.9,
      },
      {
        image: "/demo-img.jpg",
        name: "Priya S.",
        role: "Founder, Matchmaker.io",
        comment:
          "Easy setup, quick access to all our contacts—DealNest is the internal CRM I wish we had two years ago.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Aaron K.",
        role: "Growth Ops, Upward",
        comment:
          "Fast, modern, and does only what we need. The pipeline view alone is a game changer.",
        rating: 4.7,
      },
      {
        image: "/demo-img.jpg",
        name: "Maya Patel",
        role: "Team Lead, CustomerWorks",
        comment:
          "I love how easy it is to add new companies or deals. Our sales workflow is much clearer.",
        rating: 5.0,
      },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the DealNest team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Architect"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Start free, grow as a team",
    subtitle: "Flexible plans for every stage of your team's CRM journey.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: false,
        price: 0,
        description: "For small teams needing core CRM basics.",
        buttonText: "Get Started Free",
        benefits: [
          "Up to 5 teammates",
          "Unlimited contacts/companies",
          "Pipeline tracking",
          "Team collaboration",
        ],
      },
      {
        title: "Team",
        popular: true,
        price: 49,
        description: "Upgrade for advanced permissions & team reporting.",
        buttonText: "Start 14-day trial",
        benefits: [
          "Everything in Free",
          "Role-based access",
          "Team performance metrics",
          "Priority support",
        ],
      },
      {
        title: "Growth",
        popular: false,
        price: 149,
        description: "For organizations needing advanced automation.",
        buttonText: "Contact for demo",
        benefits: ["Custom integrations", "API access", "Dedicated onboarding", "SLAs & compliance"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to DealNest",
    description:
      "Questions about onboarding, migrating data, or growing your sales pipeline? Reach out and we’ll help your team succeed.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: {
        label: "Location",
        value: "Remote-first • Mumbai, IN",
      },
      phone: {
        label: "Phone",
        value: "",
      },
      email: {
        label: "Email",
        value: "chirag@bidx.ai",
      },
      hours: { label: "Working Hours", value: ["Monday - Friday", "10AM - 6PM IST"] },
    },
    formSubjects: ["CRM Demo", "Data Migration", "Integrations", "Pricing & Plans", "Sales Support"],
    formSubmitLabel: "Contact DealNest",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Is DealNest free to start?",
        answer: "Yes. Get started with unlimited contacts, companies, and deals for up to 5 team members, no credit card required.",
      },
      {
        question: "Can I import my existing contacts?",
        answer: "Absolutely. We support secure CSV imports and custom onboarding assistance for all plans.",
      },
      {
        question: "Does DealNest have role-based permissions?",
        answer: "Yes. Team and Growth plans give you advanced permission controls and more.",
      },
      {
        question: "Can I integrate with calendar and email tools?",
        answer: "Integrations are coming soon! You'll be able to connect your favorite tools.",
      },
      {
        question: "Is my data secure?",
        answer: "Your data is always encrypted in transit and at rest. Only team members can access your CRM.",
      },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "DealNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chiragdodiya" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} DealNest. All rights reserved.`,
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "DealNest",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "DealNest CRM preview" },
    features: [
      {
        title: "Unified Contacts",
        description: "Every relationship, note, or tag, organized and searchable.",
      },
      {
        title: "Deal Pipeline",
        description: "Move every opportunity forward with pipeline views.",
      },
      {
        title: "Team Collaboration",
        description: "Shared notes, assignments, and tags for every customer.",
      },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View DealNest on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}