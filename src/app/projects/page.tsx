"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ALL_TECHS = [
  "All",
  "React Native",
  "Reanimated",
  "Firebase",
  "Tailwind",
  "Supabase",
  "Sanity",
  "RapidAPI",
  "Expo",
  "Node.js",
  "MongoDB",
  "Next.js",
  "React",
  "Stripe",
  "TypeScript",
  "UI",
  "AI",
  // Languages
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "SQL",
  "Bash",
  "PHP",
  "Swift",
  "HTML5",
  "CSS3",
];

type ProjectStatus = "live" | "soon";

type Project = {
  title: string;
  description: string;
  image: string;
  status: ProjectStatus;
  demoUrl?: string;
  codeUrl?: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, checkout, payments, and admin dashboard.",
    demoUrl: "https://codewithash.com/projects/ecommerce",
    codeUrl: "https://github.com/codewithash-dev/ecommerce",
    tags: ["Next.js", "React", "Stripe", "Tailwind", "TypeScript"],
    image: "/projects/ecommerce.png",
    status: "live",
  },
  {
    title: "Full Stack Social Media App",
    description: "Instagram-style social app with posts, likes, comments, and profiles.",
    demoUrl: "/projects/social-media/feed",
    codeUrl: "https://github.com/codewithash-dev/social-media-app",
    tags: ["Next.js", "Supabase", "Tailwind", "Expo"],
    image: "/projects/social-media.png",
    status: "live",
  },
  {
    title: "Real Estate Platform",
    description: "Real estate listings with filters, search, and property details.",
    demoUrl: "/projects/real-estate",
    codeUrl: "https://github.com/codewithash-dev/real-estate-platform",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/projects/real-estate-new.png",
    status: "live",
  },
  {
    title: "EcoSphere360 Sustainability Grid",
    description:
      "Cinematic sustainability intelligence platform with real-time environmental data, compliance tools, and farm readiness monitoring.",
    demoUrl: "/projects/ecosphere-360",
    codeUrl: "https://github.com/codewithash-dev/ecosphere-360",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "AI"],
    image: "/mascot-icon.png",
    status: "live",
  },
  {
    title: "Fitness App",
    description: "Workout tracking app with programs, exercises, and progress UI.",
    demoUrl: "https://fitforge-expo.vercel.app",
    codeUrl: "https://github.com/codewithash-dev/forge-fit-global",
    tags: ["React Native", "Expo", "Firebase", "Tailwind"],
    image: "/projects/fitness.png",
    status: "live",
  },
  {
    title: "Login Credentials System",
    description: "Secure credential vault with categories, notes, and Supabase auth.",
    demoUrl: "/projects/login-credentials",
    codeUrl: "https://github.com/codewithash-dev/login-credentials",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    image: "/projects/login-credentials.png",
    status: "live",
  },
  {
    title: "URL Shortener Mobile App",
    description: "Shorten and manage links with a clean, mobile-first UI.",
    demoUrl: "/projects/url-shortener/mobile-app",
    codeUrl: "https://github.com/codewithash-dev/url-shortener",
    tags: ["React Native", "Expo", "Tailwind"],
    image: "/projects/url-shortener.png",
    status: "live",
  },
  {
    title: "Lawn Care Style Portfolio",
    description: "Marketing-style portfolio for a lawn care business with modern UI.",
    demoUrl: "/projects/lawn-care",
    codeUrl: undefined,
    tags: ["Next.js", "Tailwind"],
    image: "/projects/lawn-care.png",
    status: "live",
  },
  {
    title: "Food Delivery App UI",
    description: "High-fidelity food delivery app interface design.",
    tags: ["React Native", "UI"],
    image: "/projects/food-delivery-ui.png",
    status: "soon",
  },
  {
    title: "Course Learning App",
    description: "Course learning platform UI for browsing and enrolling.",
    tags: ["React Native", "UI"],
    image: "/projects/course-learning.png",
    status: "soon",
  },
  {
    title: "Full Stack Chat App",
    description: "Messaging experience with chats, contacts, and notifications.",
    tags: ["React Native", "Expo"],
    image: "/projects/fullstack-chat.png",
    status: "soon",
  },
  {
    title: "Wallpaper App",
    description: "Image browsing experience with filters and categories.",
    tags: ["React Native", "UI"],
    image: "/projects/wallpaper-app.png",
    status: "soon",
  },
  {
    title: "Firebase Auth & Chat",
    description: "Authentication and chat flow powered by Firebase.",
    tags: ["React Native", "Firebase"],
    image: "/projects/firebase-auth-chat.png",
    status: "soon",
  },
  {
    title: "Onboarding UI",
    description: "Multi-screen onboarding flow for mobile apps.",
    tags: ["React Native", "UI"],
    image: "/projects/onboarding-ui.png",
    status: "soon",
  },
  {
    title: "AI Story Generator",
    description: "AI-powered story creation experience for mobile.",
    tags: ["React Native", "AI"],
    image: "/projects/ai-story-generator.png",
    status: "soon",
  },
  {
    title: "Travel App",
    description: "Travel destination discovery and booking UI.",
    tags: ["React Native", "UI"],
    image: "/projects/travel-app.png",
    status: "soon",
  },
  {
    title: "Weather App",
    description: "Weather app design with detailed forecast screens.",
    tags: ["React Native", "UI"],
    image: "/projects/weather-app.png",
    status: "soon",
  },
  {
    title: "Fast Food App",
    description: "Food ordering interface for fast food restaurants.",
    tags: ["React Native", "UI"],
    image: "/projects/fast-food-app.png",
    status: "soon",
  },
  {
    title: "Ecommerce App UI",
    description: "Ecommerce mobile app concept focused on products and cart.",
    tags: ["React Native", "UI"],
    image: "/projects/ecommerce.png",
    status: "soon",
  },
  {
    title: "Coffee App",
    description: "Coffee shop ordering and discovery mobile UI.",
    tags: ["React Native", "UI"],
    image: "/projects/coffee-app.png",
    status: "soon",
  },
  {
    title: "Login & SignUp UI",
    description: "Authentication flows with login and signup screens.",
    tags: ["React Native", "UI"],
    image: "/projects/login-credentials.png",
    status: "soon",
  },
  {
    title: "AI Voice Assistant",
    description: "Mobile interface for a friendly AI voice assistant.",
    tags: ["React Native", "AI"],
    image: "/projects/ai-voice-assistant.png",
    status: "soon",
  },
  {
    title: "Fruit Shop App",
    description: "Fresh produce shopping experience with product cards.",
    tags: ["React Native", "UI"],
    image: "/projects/fruit-shop-app.png",
    status: "soon",
  },
  {
    title: "Food Delivery App",
    description: "Food delivery listing and checkout experience.",
    tags: ["React Native", "UI"],
    image: "/projects/food-delivery-ui.png",
    status: "soon",
  },
  {
    title: "Expense Tracker App",
    description: "Modern expense tracking UI with charts and categories.",
    tags: ["React Native", "UI"],
    image: "/projects/expense-tracker.png",
    status: "soon",
  },
  {
    title: "Movie App",
    description: "Movie browsing app with trending, upcoming, and rated tabs.",
    tags: ["React Native", "UI"],
    image: "/projects/movie-app.png",
    status: "soon",
  },
  {
    title: "Youtube Clone",
    description: "YouTube-style video feed with shorts and navigation.",
    tags: ["React Native", "UI"],
    image: "/projects/youtube-clone.png",
    status: "soon",
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const visibleProjects = PROJECTS.filter((p) => {
    const matchesFilter =
      filter === "All"
        ? true
        : p.tags.some((t) => t.toLowerCase() === filter.toLowerCase());
    const matchesSearch =
      search.trim() === ""
        ? true
        : p.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 data-gsap="fade-up" className="text-4xl sm:text-5xl font-bold mb-2 text-white">Projects</h1>
        <p data-gsap="fade-up" data-gsap-delay="0.08" className="text-lg text-gray-300 mb-6">
          Real-world applications built with modern tech stacks.
        </p>

        <div data-gsap="fade-up" data-gsap-delay="0.12" className="w-full max-w-3xl mb-6">
          <input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-gray-800 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_TECHS.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`btn-animate px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === tech
                  ? "gradient-cta text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <h2 data-gsap="fade-up" className="text-xl font-semibold text-gray-300 mb-6 self-start md:self-auto md:text-left w-full max-w-6xl">
          All Projects
        </h2>
        <div data-gsap="fade-up" data-gsap-stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              data-gsap-item
              className="rounded-2xl overflow-hidden border border-gray-800 bg-[#050816] hover:border-fuchsia-500/80 hover:shadow-[0_0_40px_rgba(217,70,239,0.4)] transition"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                {project.status === "soon" && (
                  <div className="absolute inset-0 bg-black/40" />
                )}
                {project.status === "soon" && (
                  <span className="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-fuchsia-500 text-white">
                    Coming Soon
                  </span>
                )}
              </div>
              <div className="bg-[#020617] px-4 py-4">
                <h3 className="text-base font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  {project.status === "live" ? (
                    <>
                      <div className="flex gap-3">
                        <Link
                          href={project.demoUrl ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-animate inline-flex items-center gap-1 hover:text-fuchsia-300 transition-transform"
                        >
                          <span>▶</span>
                          <span>Demo</span>
                        </Link>
                        {project.codeUrl && (
                          <Link
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-animate inline-flex items-center gap-1 hover:text-fuchsia-300 transition-transform"
                          >
                            <span>{"</>"}</span>
                            <span>Code</span>
                          </Link>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>⏱</span>
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
