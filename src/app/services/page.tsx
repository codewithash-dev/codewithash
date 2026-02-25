"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Smartphone, LayoutDashboard, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Responsive, modern websites built with the latest tech. From landing pages to full corporate sites, I deliver clean code that works flawlessly across all devices.",
    gradient: "from-pink-500 to-amber-400",
    Icon: Globe,
    iconLabel: null as string | null,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps built with React Native. User-friendly, feature-rich applications that engage your audience and grow your brand.",
    gradient: "from-fuchsia-500 to-rose-500",
    Icon: Smartphone,
    iconLabel: null as string | null,
  },
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications with React, Node.js, and modern frameworks. APIs, databases, authentication — built for scale, security, and maintainability.",
    gradient: "from-orange-400 to-pink-500",
    Icon: Globe,
    iconLabel: "</>" as string | null,
  },
  {
    title: "UI/UX & Code Architecture",
    description:
      "Thoughtful design and solid architecture. I focus on clean code, scalable patterns, and user-centric interfaces that balance aesthetics with functionality.",
    gradient: "from-emerald-400 to-cyan-400",
    Icon: LayoutDashboard,
    iconLabel: null as string | null,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero: WHAT I DO / Design. Build. Deploy. */}
        <section className="text-center mb-20">
          <p data-gsap="fade-up" className="text-xs sm:text-sm font-semibold text-fuchsia-400 uppercase tracking-[0.25em] mb-3">
            What I Do
          </p>
          <h1 data-gsap="fade-up" data-gsap-delay="0.06" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Design. Build. Deploy.
          </h1>
          <p data-gsap="fade-up" data-gsap-delay="0.12" className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            From concept to production — I build responsive websites, mobile apps, and
            full-stack applications tailored to your needs. Clean code, modern tech, and
            solutions that scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-animate inline-flex items-center justify-center gap-2 gradient-cta text-white px-6 py-3 rounded-lg font-semibold hover:opacity-95"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="btn-animate inline-flex items-center justify-center gap-2 border border-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Expert Services grid */}
        <section className="mb-24">
          <header className="text-center mb-10">
            <p data-gsap="fade-up" className="text-xs sm:text-sm font-semibold text-fuchsia-400 uppercase tracking-[0.25em] mb-3">
              Expert Services
            </p>
            <h2 data-gsap="fade-up" data-gsap-delay="0.06" className="text-3xl sm:text-4xl font-bold">
              Custom Solutions for Your Digital Success
            </h2>
          </header>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-8"
          >
            {services.map(({ title, description, gradient, Icon, iconLabel }) => (
              <motion.article
                key={title}
                variants={item}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-gradient-to-b from-[#020617] to-[#020617] border border-gray-800 px-6 py-6 sm:py-8 shadow-[0_0_30px_rgba(15,23,42,0.6)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.8)] hover:border-purple-500 transition-all cursor-default"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}>
                  {iconLabel ? (
                    <span className="text-lg font-mono font-semibold text-white leading-none">{iconLabel}</span>
                  ) : (
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Ready to Build Something Great? */}
        <section className="pt-16 border-t border-gray-900 text-center">
          <h3 data-gsap="fade-up" className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Build Something Great?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-6">
            Let&apos;s turn your idea into reality. Reach out and we&apos;ll create
            something amazing together.
          </p>
          <Link
            href="/contact"
            className="btn-animate inline-flex items-center justify-center gap-2 gradient-cta text-white px-6 py-3 rounded-lg font-semibold hover:opacity-95"
          >
            Let&apos;s Connect
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
