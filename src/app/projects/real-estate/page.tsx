import Link from "next/link";

export default function RealEstateProjectPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm text-gray-400 mb-3">
          <Link href="/projects" className="hover:text-white transition underline-offset-4 hover:underline">
            Projects
          </Link>{" "}
          <span className="mx-1">/</span>
          <span className="text-gray-300">Real Estate</span>
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Real Estate Platform</h1>
        <p className="text-base text-gray-300 max-w-2xl mb-8">
          Real estate listings with filters, search, and property details.
        </p>
        <Link href="/projects" className="text-fuchsia-400 hover:text-white transition">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
