"use client";

import { type ReactNode, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaTwitch, FaDiscord, FaUserPlus, FaShare } from "react-icons/fa";

const socials = [
  { icon: FaYoutube, href: "https://www.youtube.com/@CodeWithAshOfficial", label: "YouTube" },
  { icon: FaInstagram, href: "https://instagram.com/_codewithash", label: "Instagram" },
  { icon: FaTwitch, href: "https://twitch.tv/codewithash", label: "Twitch" },
  { icon: FaDiscord, href: "https://discord.gg/codewithash", label: "Discord" },
];

type SupportShellProps = {
  active: "home" | "membership" | "posts" | "shop";
  children: ReactNode;
};

export default function SupportShell({ active, children }: SupportShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [menuOpen]);

  function handleShare() {
    setMenuOpen(false);
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = "Code With Ash";
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title, url }).catch(() => {
        navigator.clipboard?.writeText(url);
      });
    } else {
      navigator.clipboard?.writeText(url);
    }
  }

  const tabs = [
    { id: "home" as const, label: "Home", href: "/" },
    { id: "membership" as const, label: "Membership", href: "/membership" },
    { id: "posts" as const, label: "Posts", href: "/posts" },
    { id: "shop" as const, label: "Shop", href: "/shop" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-black pt-0 pb-16">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4 relative">
          {/* Left: profile (links back to main home) */}
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0 rounded-lg overflow-hidden border border-gray-200 hover:opacity-90 transition">
              <Image
                src="/images/ashley-profile.png"
                alt="Code With Ash"
                width={44}
                height={44}
                className="rounded-lg border-0 object-cover aspect-square"
              />
            </Link>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">
                Code With Ash
              </span>
              <span className="text-xs text-gray-500">
                Building React & React Native Apps
              </span>
              <span className="text-xs text-gray-500">
                0 supporters
              </span>
            </div>
          </div>

          {/* Center: tabs — visible on mobile, perfectly centered on desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm absolute inset-x-0 justify-center pointer-events-none">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={
                  active === tab.id
                    ? "font-semibold text-gray-900 border-b-2 border-gray-900 pb-1"
                    : "text-gray-500 hover:text-gray-900"
                }
                // Re-enable interaction for links
                style={{ pointerEvents: "auto" }}
              >
                {tab.label}
              </Link>
            ))}
          </nav>

          {/* Right: menu + login / hamburger */}
          <div className="flex items-center gap-3 relative ml-auto" ref={menuRef}>
            {/* Mobile hamburger for tabs */}
            <button
              type="button"
              onClick={() => setMobileNavOpen((open) => !open)}
              className="p-2 rounded-full border border-gray-300 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-400 transition md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileNavOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop three-dots menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="hidden md:inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-2 py-1 text-gray-500 hover:text-gray-700 hover:border-gray-400"
              aria-label="More options"
              aria-expanded={menuOpen}
            >
              <span className="text-lg leading-none">•••</span>
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-full mt-1 z-50 min-w-[140px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                <a
                  href="https://www.youtube.com/@CodeWithAshOfficial?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaUserPlus className="text-gray-500" aria-hidden />
                  Follow
                </a>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleShare}
                >
                  <FaShare className="text-gray-500" aria-hidden />
                  Share
                </button>
              </div>
            )}
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-gray-800 bg-gray-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-black"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile nav dropdown for tabs */}
      {mobileNavOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={
                  active === tab.id
                    ? "font-semibold text-gray-900 border-b-2 border-gray-900 pb-1"
                    : "text-gray-500 hover:text-gray-900"
                }
                onClick={() => setMobileNavOpen(false)}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {active !== "shop" && (
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center gap-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xl text-gray-600 hover:text-gray-900 transition"
              >
                <Icon aria-hidden />
              </a>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

