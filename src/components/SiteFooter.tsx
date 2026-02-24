import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2026 Code with Ash</p>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/terms" className="hover:text-white transition">
            Terms of Use
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
