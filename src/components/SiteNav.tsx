"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/learning-paths", label: "Learning" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800 min-h-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-14 py-2 flex items-center gap-4">
        {/* Left: logo / brand */}
        <Link
          href="/"
          className="btn-animate flex flex-shrink-0 items-center gap-2 sm:gap-3 hover:opacity-90 transition inline-flex min-w-0"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/ashley-profile.png"
            alt="Ashley Henderson"
            width={40}
            height={40}
            priority
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-gray-700 shrink-0"
          />
          <span className="flex flex-col items-start justify-center min-w-0">
            <span className="font-bold text-base sm:text-lg text-white leading-tight truncate max-w-[140px] sm:max-w-none sm:whitespace-nowrap">
              Code With Ash
            </span>
            <span className="text-[10px] sm:text-xs text-gray-400 font-normal leading-tight truncate max-w-[140px] sm:max-w-none sm:whitespace-nowrap">
              Think Like A Visionary
            </span>
          </span>
        </Link>

        {/* Center: desktop nav links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 text-sm text-gray-300">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="btn-animate hover:text-white font-medium transition inline-block whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Supporters button + mobile hamburger */}
        <div className="flex items-center gap-3 ml-auto">
          <Link
            href="/membership"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black hover:bg-gray-100 transition"
          >
            Supporters
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/98 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="btn-animate py-3 px-2 text-gray-300 hover:text-white font-medium transition rounded-lg hover:bg-gray-800/50"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="btn-animate mt-2 py-3 px-2 text-white font-semibold transition rounded-full bg-white/10 hover:bg-white/20 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Supporters
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
