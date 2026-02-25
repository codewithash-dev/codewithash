"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCodeBlock from "./HeroCodeBlock";

gsap.registerPlugin(ScrollTrigger);

export default function HomePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLDivElement>(null);
  const helloContentRef = useRef<HTMLDivElement>(null);
  const helloImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero: stagger in on load
      gsap.fromTo(
        heroRef.current?.querySelectorAll(".hero-text") ?? [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" }
      );

      // Hello section: animate when scrolling into view
      if (helloRef.current && helloContentRef.current && helloImageRef.current) {
        gsap.fromTo(
          helloContentRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: helloRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
        gsap.fromTo(
          helloImageRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: helloRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Stats: stagger in on scroll
      gsap.fromTo(
        statsRef.current?.querySelectorAll("[data-stat]") ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Ready section: animate when scrolling into view
      gsap.fromTo(
        readyRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: readyRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Run once on load so sections already in view still animate
      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero: left text + right code block (typewriter) */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden bg-transparent">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef}>
            <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              Master Coding.
              <br />
              Build Real
              <br />
              Projects.
            </h1>
            <p className="hero-text mt-6 text-lg text-gray-300 max-w-xl">
              I build real-world applications that solve problems and create value. My focus is on clean code, scalable architecture, and products that people actually use.
            </p>
            <div className="hero-text mt-8">
              <Link
                href="/projects"
                className="btn-animate inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white gradient-cta-hero shadow-lg hover:opacity-95"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <HeroCodeBlock />
          </div>
        </div>
      </section>

      {/* Hello / I'm Ashley Henderson with image below, centered */}
      <section
        ref={helloRef}
        className="py-24 px-4 sm:px-6 bg-gradient-to-b from-black/80 via-slate-950/90 to-black text-center"
      >
        <div ref={helloContentRef} className="max-w-5xl mx-auto">
          <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Hello,
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            I&apos;m Ashley Henderson.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 text-center">
            I&apos;ve spent years building real-world applications, and my goal isn&apos;t just to write
            code — it&apos;s to help you think like a professional software engineer, master
            problem-solving, and build skills you&apos;ll use for life.
          </p>
          <div ref={helloImageRef} className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <Image
                src="/images/ashley-wide-profile.png"
                alt="Ashley Henderson coding at a desk with multiple monitors"
                width={1200}
                height={800}
                className="w-full h-auto rounded-3xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats - colored numbers */}
      <section className="py-16 px-4 sm:px-6 text-center bg-transparent">
        <div ref={statsRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div data-stat className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-fuchsia-400">300+</p>
              <p className="text-gray-400 mt-1">Projects Built</p>
            </div>
            <div data-stat className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-emerald-400">1000</p>
              <p className="text-gray-400 mt-1">Commits</p>
            </div>
            <div data-stat className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-rose-400">10+</p>
              <p className="text-gray-400 mt-1">Years Coding</p>
            </div>
            <div data-stat className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-amber-400">200+</p>
              <p className="text-gray-400 mt-1">Tech Stacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Ship - gradient section */}
      <section
        ref={readyRef}
        className="py-32 px-6 bg-gradient-to-b from-black/70 via-black/80 to-slate-900/90"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-fuchsia-400 uppercase tracking-wider mb-2">
            Recognized by Professionals
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Ship Production Code
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Full-stack software engineer who ships. I specialize in React, Node.js, and modern web frameworks, building solutions that bridge frontend elegance with backend power. Clean code, solid architecture, and scalable applications that solve real business problems are my priorities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="btn-animate inline-flex items-center justify-center gradient-cta text-white px-6 py-3 rounded-lg font-semibold"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="btn-animate inline-flex items-center justify-center bg-gradient-to-r from-rose-600 to-red-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
