/**
 * Centralized project metadata for Code with Ash.
 * Used by the projects list, project detail pages, and paid source-code flow.
 * Add stripeSourcePriceId when you create a Stripe product for that project's source code.
 */

export type ProjectStatus = "live" | "soon";

export type CodeAccessType = "download" | "private_repo";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  status: ProjectStatus;
  demoUrl?: string;
  /** Set in .env as STRIPE_PRICE_<SLUG> (e.g. STRIPE_PRICE_ECOM). When set, Buy is enabled. */
  stripeSourcePriceId?: string;
  /** Display price on Shop page (e.g. "$10"). When set, project appears in Shop. */
  priceDisplay?: string;
  /** Member price on Shop page (e.g. "$5 for members"). */
  memberPriceDisplay?: string;
  codeAccessType?: CodeAccessType;
  tags: string[];
};

/** Server-side: get Stripe price ID for a project (from env STRIPE_PRICE_<UPPER_SLUG>). */
export function getStripePriceIdForProject(slug: string): string | undefined {
  const key = `STRIPE_PRICE_${slug.replace(/-/g, "_").toUpperCase()}`;
  return typeof process !== "undefined" ? (process.env[key] as string | undefined) : undefined;
}

export const PROJECTS: Project[] = [
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with cart, checkout, payments, and admin dashboard.",
    demoUrl: "https://codewithash.com/projects/ecommerce",
    tags: ["Next.js", "React", "Stripe", "Tailwind", "TypeScript", "SQL", "HTML5", "CSS3"],
    image: "/projects/ecommerce.png",
    status: "live",
    priceDisplay: "$12",
    memberPriceDisplay: "$7 for members",
    codeAccessType: "download",
  },
  {
    slug: "creator-analytics",
    title: "Creator Analytics & AI Insights",
    description:
      "Python + Next.js polyglot project that turns creator metrics into fast analytics APIs and AI-style insights.",
    demoUrl: "/projects/creator-analytics",
    tags: ["Next.js", "React", "TypeScript", "Python", "JavaScript", "AI"],
    image: "/projects/creator-analytics.png",
    status: "live",
    priceDisplay: "$10",
    memberPriceDisplay: "$5 for members",
    codeAccessType: "download",
  },
  {
    slug: "social-media",
    title: "Full Stack Social Media App",
    description: "Instagram-style social app with posts, likes, comments, and profiles.",
    demoUrl: "/projects/social-media/feed",
    tags: ["Next.js", "Supabase", "Tailwind", "Expo", "TypeScript", "SQL", "HTML5", "CSS3"],
    image: "/projects/social-media.png",
    status: "live",
    priceDisplay: "$12",
    memberPriceDisplay: "$7 for members",
    codeAccessType: "download",
  },
  {
    slug: "real-estate",
    title: "Real Estate Platform",
    description: "Real estate listings with filters, search, and property details.",
    demoUrl: "/projects/real-estate",
    tags: ["React", "Node.js", "MongoDB", "TypeScript", "HTML5", "CSS3"],
    image: "/projects/real-estate-new.png",
    status: "live",
    priceDisplay: "$15",
    memberPriceDisplay: "$10 for members",
    codeAccessType: "download",
  },
  {
    slug: "ecosphere-360",
    title: "EcoSphere360 Sustainability Grid",
    description:
      "Cinematic sustainability intelligence platform with real-time environmental data, compliance tools, and farm readiness monitoring.",
    demoUrl: "/projects/ecosphere-360",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "AI", "HTML5", "CSS3"],
    image: "/mascot-icon.png",
    status: "live",
    priceDisplay: "$15",
    memberPriceDisplay: "$10 for members",
    codeAccessType: "download",
  },
  {
    slug: "fitness",
    title: "Fitness App",
    description: "Workout tracking app with programs, exercises, and progress UI.",
    demoUrl: "https://fitforge-expo.vercel.app",
    tags: ["React Native", "Expo", "Firebase", "Tailwind", "JavaScript"],
    image: "/projects/fitness.png",
    status: "live",
    priceDisplay: "$8",
    memberPriceDisplay: "$4 for members",
    codeAccessType: "download",
  },
  {
    slug: "login-credentials",
    title: "Login Credentials System",
    description: "Secure credential vault with categories, notes, and Supabase auth.",
    demoUrl: "/projects/login-credentials",
    tags: ["React Native", "Expo", "Supabase", "TypeScript", "JavaScript", "SQL"],
    image: "/projects/login-credentials.png",
    status: "live",
    priceDisplay: "$8",
    memberPriceDisplay: "$4 for members",
    codeAccessType: "download",
  },
  {
    slug: "url-shortener",
    title: "URL Shortener Mobile App",
    description: "Shorten and manage links with a clean, mobile-first UI.",
    demoUrl: "/projects/url-shortener/mobile-app",
    tags: ["React Native", "Expo", "Tailwind", "JavaScript"],
    image: "/projects/url-shortener.png",
    status: "live",
    priceDisplay: "$5",
    memberPriceDisplay: "$2 for members",
    codeAccessType: "download",
  },
  {
    slug: "lawn-care",
    title: "Lawn Care Style Portfolio",
    description: "Marketing-style portfolio for a lawn care business with modern UI.",
    demoUrl: "/projects/lawn-care",
    tags: ["Next.js", "Tailwind", "TypeScript", "HTML5", "CSS3"],
    image: "/projects/lawn-care.png",
    status: "live",
    priceDisplay: "$5",
    memberPriceDisplay: "$2 for members",
    codeAccessType: "download",
  },
  {
    slug: "food-delivery-ui",
    title: "Food Delivery App UI",
    description: "High-fidelity food delivery app interface design.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/food-delivery-ui.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "course-learning",
    title: "Course Learning App",
    description: "Course learning platform UI for browsing and enrolling.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/course-learning.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "fullstack-chat",
    title: "Full Stack Chat App",
    description: "Messaging experience with chats, contacts, and notifications.",
    tags: ["React Native", "Expo", "JavaScript"],
    image: "/projects/fullstack-chat.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "wallpaper-app",
    title: "Wallpaper App",
    description: "Image browsing experience with filters and categories.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/wallpaper-app.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "firebase-auth-chat",
    title: "Firebase Auth & Chat",
    description: "Authentication and chat flow powered by Firebase.",
    tags: ["React Native", "Firebase", "JavaScript"],
    image: "/projects/firebase-auth-chat.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "onboarding-ui",
    title: "Onboarding UI",
    description: "Multi-screen onboarding flow for mobile apps.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/onboarding-ui.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "ai-story-generator",
    title: "AI Story Generator",
    description: "AI-powered story creation experience for mobile.",
    tags: ["React Native", "AI", "JavaScript"],
    image: "/projects/ai-story-generator.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "travel-app",
    title: "Travel App",
    description: "Travel destination discovery and booking UI.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/travel-app.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    description: "Weather app design with detailed forecast screens.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/weather-app.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "fast-food-app",
    title: "Fast Food App",
    description: "Food ordering interface for fast food restaurants.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/fast-food-app.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "ecommerce-app-ui",
    title: "Ecommerce App UI",
    description: "Ecommerce mobile app concept focused on products and cart.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/ecommerce.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "coffee-app",
    title: "Coffee App",
    description: "Coffee shop ordering and discovery mobile UI.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/coffee-app.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "login-signup-ui",
    title: "Login & SignUp UI",
    description: "Authentication flows with login and signup screens.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/login-credentials.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "ai-voice-assistant",
    title: "AI Voice Assistant",
    description: "Mobile interface for a friendly AI voice assistant.",
    tags: ["React Native", "AI", "JavaScript"],
    image: "/projects/ai-voice-assistant.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "fruit-shop-app",
    title: "Fruit Shop App",
    description: "Fresh produce shopping experience with product cards.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/fruit-shop-app.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "food-delivery-app",
    title: "Food Delivery App",
    description: "Food delivery listing and checkout experience.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/food-delivery-ui.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker App",
    description: "Modern expense tracking UI with charts and categories.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/expense-tracker.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "movie-app",
    title: "Movie App",
    description: "Movie browsing app with trending, upcoming, and rated tabs.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/movie-app.png",
    status: "soon",
    codeAccessType: "download",
  },
  {
    slug: "youtube-clone",
    title: "Youtube Clone",
    description: "YouTube-style video feed with shorts and navigation.",
    tags: ["React Native", "UI", "JavaScript"],
    image: "/projects/youtube-clone.png",
    status: "soon",
    codeAccessType: "download",
  },
];

const projectBySlug = new Map<string, Project>();
PROJECTS.forEach((p) => projectBySlug.set(p.slug, p));

export function getProjectBySlug(slug: string): Project | undefined {
  return projectBySlug.get(slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

/** Projects that appear in the Shop (have a display price). */
export function getShopProjects(): Project[] {
  return PROJECTS.filter((p) => p.priceDisplay);
}
