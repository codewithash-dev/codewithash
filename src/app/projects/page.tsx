import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-lg text-gray-600 mb-12">
          Real-world applications I&apos;ve built. Clean code, solid architecture, products that people use.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Placeholder – replace with your real projects */}
          <article className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Project One</h2>
            <p className="text-gray-600">Description and tech stack. Link to live demo and code.</p>
            <div className="mt-4 flex gap-3">
              <span className="text-sm text-gray-500">React · Node</span>
            </div>
          </article>
          <article className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Project Two</h2>
            <p className="text-gray-600">Description and tech stack. Link to live demo and code.</p>
            <div className="mt-4 flex gap-3">
              <span className="text-sm text-gray-500">Next.js · TypeScript</span>
            </div>
          </article>
        </div>
        <p className="mt-8 text-gray-500">
          More projects coming. <Link href="/contact" className="text-gray-900 font-medium hover:underline">Get in touch</Link> for collaboration.
        </p>
      </div>
    </div>
  );
}
