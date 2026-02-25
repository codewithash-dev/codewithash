"use client";

import Link from "next/link";
import Image from "next/image";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-14 py-2 flex items-center justify-between">
        <Link
          href="/"
          className="btn-animate flex flex-nowrap items-center gap-3 hover:opacity-90 transition inline-flex"
        >
          <Image
            src="/images/ashley-profile.png"
            alt="Ashley Henderson"
            width={40}
            height={40}
            priority
            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-700 shrink-0"
          />
          <span className="flex flex-col items-start justify-center shrink-0 min-w-0">
            <span className="font-bold text-lg text-white leading-tight whitespace-nowrap">Code With Ash</span>
            <span className="text-xs text-gray-400 font-normal leading-tight whitespace-nowrap">Build something great!</span>
          </span>
        </Link>
        <div className="flex items-center gap-8 text-sm text-gray-300">
          <Link href="/projects" className="btn-animate hover:text-white font-medium transition inline-block">
            Projects
          </Link>
          <Link href="/learning-paths" className="btn-animate hover:text-white font-medium transition inline-block">
            Learning
          </Link>
          <Link href="/services" className="btn-animate hover:text-white font-medium transition inline-block">
            Services
          </Link>
          <Link href="/contact" className="btn-animate hover:text-white font-medium transition inline-block">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
