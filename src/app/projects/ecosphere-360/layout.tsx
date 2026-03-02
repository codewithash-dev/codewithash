"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

type IconKey = "dashboard" | "vault" | "policy" | "scope3" | "box" | "shield";

function SidebarIcon({ icon }: { icon: IconKey }) {
  const base = "text-zinc-500 group-hover:text-emerald-400";
  switch (icon) {
    case "dashboard":
      return (
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
          className={`relative z-10 h-5 w-5 drop-shadow-[0_0_8px_rgba(0,255,100,0.8)] ${base}`}
          aria-hidden="true"
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      );
    case "vault":
      return (
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
          className={`relative z-10 h-5 w-5 ${base}`}
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      );
    case "policy":
      return (
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
          className={`relative z-10 h-5 w-5 ${base}`}
          aria-hidden="true"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      );
    case "scope3":
      return (
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
          className={`relative z-10 h-5 w-5 ${base}`}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "box":
      return (
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
          className={`relative z-10 h-5 w-5 ${base}`}
          aria-hidden="true"
        >
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
    case "shield":
      return (
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
          className={`relative z-10 h-5 w-5 ${base}`}
          aria-hidden="true"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export default function EcoSphere360Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/projects/ecosphere-360", label: "Dashboard", icon: "dashboard" as const },
    { href: "/projects/ecosphere-360/vault", label: "Evidence Vault", icon: "vault" as const },
    { href: "/projects/ecosphere-360/policy", label: "Policy Navigator", icon: "policy" as const },
    { href: "/projects/ecosphere-360/scope3", label: "Scope 3 Analyzer", icon: "scope3" as const },
    { href: "/projects/ecosphere-360/readiness", label: "Farm Readiness", icon: "box" as const },
    { href: "/projects/ecosphere-360/scanner", label: "Greenwash Scanner", icon: "shield" as const },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="flex min-h-screen w-full bg-black text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-16 md:top-20 z-50 flex h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-20 flex-col items-center border-r border-white/5 bg-black/40 backdrop-blur-xl py-8">
        <a
          href="/projects/ecosphere-360"
          className="mb-12 h-10 w-10 rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,100,0.3)] transition-shadow"
        >
          <img
            alt="EcoSphere360"
            src="/mascot-icon.png"
            className="h-full w-full object-cover"
          />
        </a>
        <nav className="flex flex-1 flex-col gap-6">
          {navItems.map((item) => {
            return (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-transparent group-hover:bg-emerald-400/15 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.7)] transition-all duration-300" />
                <SidebarIcon icon={item.icon} />
                <span className="pointer-events-none absolute left-20 rounded-full bg-black px-3 py-1 text-xs font-medium text-white opacity-0 translate-x-1 whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
        <div className="mt-auto opacity-50">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-purple-500" />
        </div>
      </aside>

      {/* Main content + background + footer */}
      <main className="flex-1 pl-20">
        <div className="relative min-h-screen pb-20">
          {/* Soft background glows */}
          <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-400/5 blur-[120px]" />
            <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </div>
        </div>

        <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-8 py-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center gap-6">
                <p className="text-xs text-zinc-500">© 2025 EcoSphere360</p>
                <div className="h-3 w-px bg-white/10" />
                <a
                  href="mailto:wealthmastermind7@gmail.com"
                  className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  Contact Legal
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-xs">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Compliance
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

