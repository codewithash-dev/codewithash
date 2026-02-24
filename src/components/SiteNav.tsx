'use client';

import Link from 'next/link';

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
          <span className="text-2xl">ASH</span>
        </Link>
        <div className="flex items-center gap-8 text-sm text-gray-600">
          <Link href="/projects" className="hover:text-gray-900 font-medium transition">
            Projects
          </Link>
          <Link href="/learning" className="hover:text-gray-900 font-medium transition">
            Learning
          </Link>
          <Link href="/services" className="hover:text-gray-900 font-medium transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-900 font-medium transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
