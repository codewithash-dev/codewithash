"use client";

import Link from "next/link";

export default function SocialNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/projects/social-media/feed"
          className="font-bold text-lg text-sky-600 hover:text-sky-700 transition"
        >
          Connect
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/projects/social-media/feed"
            className="font-medium text-sky-600 hover:text-sky-700"
          >
            Home
          </Link>
          <Link
            href="/projects/social-media/feed"
            className="text-slate-500 hover:text-slate-700"
          >
            Explore
          </Link>
          <Link
            href="/projects/social-media/profile"
            className="text-slate-500 hover:text-slate-700"
          >
            Profile
          </Link>
          <Link
            href="/projects/social-media"
            className="text-slate-400 hover:text-slate-600 text-xs"
          >
            ← Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
