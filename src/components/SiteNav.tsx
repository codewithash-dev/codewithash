"use client";

import Link from "next/link";
import Image from "next/image";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="btn-animate flex items-center gap-2 font-bold text-xl text-white hover:text-gray-200 transition inline-block"
        >
          <span className="relative flex items-center justify-center">
            <Image
              src="/images/cwa-logo-mark.png"
              alt="Code with Ash logo"
              width={28}
              height={28}
              priority
              className="w-7 h-7"
            />
          </span>
          ASH
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
