"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";

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
              key={project.slug}
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
                          target={project.demoUrl?.startsWith("http") ? "_blank" : undefined}
                          rel={project.demoUrl?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="btn-animate inline-flex items-center gap-1 hover:text-fuchsia-300 transition-transform"
                        >
                          <span>▶</span>
                          <span>Demo</span>
                        </Link>
                        <Link
                          href="/shop"
                          className="btn-animate inline-flex items-center gap-1 hover:text-fuchsia-300 transition-transform"
                        >
                          <span>{"</>"}</span>
                          <span>Source Code</span>
                        </Link>
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
