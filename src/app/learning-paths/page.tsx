"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FlaskConical, Monitor, Server, Smartphone, Puzzle, type LucideIcon } from "lucide-react";

const paths: {
  title: string;
  description: string;
  href: string;
  gradient: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Fundamentals",
    description:
      "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
    href: "/learning-paths/fundamentals",
    gradient: "from-violet-700 to-fuchsia-700",
    Icon: FlaskConical,
  },
  {
    title: "Front-end Development",
    description:
      "All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more!",
    href: "/learning-paths/front-end",
    gradient: "from-emerald-700 to-green-800",
    Icon: Monitor,
  },
  {
    title: "Back-end Development",
    description:
      "All the courses you need to build powerful APIs for web and mobile apps. Node, Django, ASP.NET MVC, MySQL, and more!",
    href: "/learning-paths/back-end",
    gradient: "from-amber-600 to-orange-700",
    Icon: Server,
  },
  {
    title: "Mobile Development",
    description:
      "All the courses you need to build professional, cross-platform mobile apps using React Native.",
    href: "/learning-paths/mobile",
    gradient: "from-rose-600 to-red-700",
    Icon: Smartphone,
  },
  {
    title: "Game Development",
    description: "The fundamental courses you need to build games.",
    href: "/learning-paths/game",
    gradient: "from-violet-600 to-fuchsia-600",
    Icon: Puzzle,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function LearningPathsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 data-gsap="fade-up" className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            No More Guesswork
          </h1>
          <p data-gsap="fade-up" data-gsap-delay="0.1" className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow a proven path to build real coding skills and land your dream job.
          </p>
        </header>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paths.map((path) => {
            const Icon = path.Icon;
            return (
              <motion.div key={path.title} variants={card}>
                <Link
                  href={path.href}
                  className="btn-animate flex h-[22rem] flex-col rounded-2xl overflow-hidden border border-gray-800/80 bg-[#0c0c0c] shadow-xl transition hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                >
                  {/* Top section: same height on every card */}
                  <div
                    className={`flex h-32 shrink-0 items-center justify-center bg-gradient-to-br ${path.gradient}`}
                  >
                    <Icon
                      className="w-12 h-12 sm:w-14 sm:h-14 text-white shrink-0"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </div>
                  {/* Bottom section: same height on every card */}
                  <div className="flex flex-1 flex-col justify-start overflow-hidden bg-[#0a0a0a] px-5 py-5 sm:px-6 sm:py-6 text-left">
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-2">{path.title}</h2>
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-5">{path.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
