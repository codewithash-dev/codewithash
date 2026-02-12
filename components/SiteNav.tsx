'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/learning-paths', label: 'Learning' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-lg" />
          <span className="text-white font-bold text-2xl tracking-wide leading-none -ml-3 hidden lg:inline">ASH</span>
        </Link>

        <div className="flex gap-8 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white transition'}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
