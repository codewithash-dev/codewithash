import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          Master Coding.<br />
          Build Real<br />
          Projects.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">
          I build real-world applications that solve problems and create value. My focus is on clean code, scalable architecture, and products that people actually use.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 mt-8 text-gray-900 font-semibold hover:underline"
        >
          View Projects →
        </Link>
      </section>

      {/* Hello / About */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 mb-2">Hello,</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            I&apos;m Ashley Henderson.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            I&apos;ve spent years building real-world applications, and my goal isn&apos;t just to write code — it&apos;s to help you think like a professional software engineer, master problem-solving, and build skills you&apos;ll use for life.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">5+</p>
            <p className="text-gray-600 mt-1">Projects Built</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">100+</p>
            <p className="text-gray-600 mt-1">GitHub Commits</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">10+</p>
            <p className="text-gray-600 mt-1">Years Coding</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">8+</p>
            <p className="text-gray-600 mt-1">Tech Stacks</p>
          </div>
        </div>
      </section>

      {/* Ready to Ship */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Recognized by Professionals
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Ship Production Code
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Full-stack software engineer who ships. I specialize in React, Node.js, and modern web frameworks, building solutions that bridge frontend elegance with backend power. Clean code, solid architecture, and scalable applications that solve real business problems are my priorities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
