"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function EcoSphere360ProjectPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero pieces
      gsap.fromTo(
        "[data-eco-hero]",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
        }
      );

      // Cards
      gsap.fromTo(
        "[data-eco-card]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.3,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="mb-24 flex flex-col items-start justify-center pt-12">
        <div data-eco-hero className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
            System Operational • v2.4.0
          </span>
        </div>
        <h1
          data-eco-hero
          className="mb-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white"
        >
          Sustainability{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            Intelligence
          </span>{" "}
          Grid
        </h1>
        <p
          data-eco-hero
          className="mb-10 max-w-2xl text-xl text-zinc-400"
        >
          EcoSphere360 provides real-time environmental data analysis, compliance tracking, and farm readiness
          assessment through a cinematic, motion-first interface.
        </p>
        <div
          data-eco-hero
          className="flex flex-wrap gap-4"
        >
          <a href="/projects/ecosphere-360/vault">
            <button className="relative overflow-hidden rounded-full bg-emerald-400/10 px-6 py-3 font-medium text-emerald-400 backdrop-blur-sm transition-colors hover:bg-emerald-400/20 hover:text-white hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Launch Console
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </a>
          <button className="relative overflow-hidden rounded-full bg-transparent px-6 py-3 font-medium text-white border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
              Watch Reel
            </span>
          </button>
        </div>
      </section>

      <section ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-20">
        {[
          {
            href: "/projects/ecosphere-360/vault",
            title: "Evidence Vault",
            description:
              "Secure blockchain-verified storage for all sustainability claims and certifications.",
            iconPath:
              "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            video: "/assets/abstract_blockchain_security_visualization-B6KDI0D1.mp4",
          },
          {
            href: "/projects/ecosphere-360/policy",
            title: "Policy Navigator",
            description:
              "AI-driven analysis of global environmental regulations and compliance requirements.",
            iconPath:
              "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
            video: "/assets/global_data_scanning_map-q1FdT3zk.mp4",
          },
          {
            href: "/projects/ecosphere-360/scope3",
            title: "Scope 3 Analyzer",
            description:
              "Deep supply chain carbon footprint tracking and optimization engine.",
            iconPath:
              "M3 3v16a2 2 0 0 0 2 2h16 M18 17V9 M13 17V5 M8 17v-3",
            video: "/assets/supply_chain_network_graph-BUYPs-bf.mp4",
          },
          {
            href: "/projects/ecosphere-360/readiness",
            title: "Farm Readiness",
            description:
              "Real-time IoT sensor grid for agricultural readiness and crop health monitoring.",
            iconPath:
              "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
            video: "/assets/smart_farm_iot_sensor_grid-DxEq7qaf.mp4",
          },
          {
            href: "/projects/ecosphere-360/scanner",
            title: "Greenwash Scanner",
            description:
              "AI-powered NLP engine to detect misleading environmental claims in corporate text.",
            iconPath:
              "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            video: "/assets/ai_text_analysis_scanner-CpCOhQK7.mp4",
          },
        ].map((card, index) => (
          <a key={card.title} href={card.href}>
            <div
              data-eco-card
              className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:shadow-2xl group h-full cursor-pointer"
            >
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "radial-gradient(600px at 0px 0px, rgba(16,185,129,0.18), transparent 40%)" }} />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-colors group-hover:bg-emerald-400/20 group-hover:text-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d={card.iconPath} />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-emerald-400">
                  {card.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black/40 relative group-hover:border-emerald-400/30 transition-colors">
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-[opacity,filter] duration-500"
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </>
  );
}
