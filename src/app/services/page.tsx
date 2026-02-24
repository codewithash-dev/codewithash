import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          What I offer: full-stack development, architecture, and shipping production-ready applications.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 max-w-3xl">
          <div className="p-6 border border-gray-200 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Development</h2>
            <p className="text-gray-600">React, Node.js, and modern web frameworks. Frontend and backend.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Architecture & Code Quality</h2>
            <p className="text-gray-600">Clean code, scalable structure, and solutions that solve real business problems.</p>
          </div>
        </div>
        <p className="mt-12">
          <Link href="/contact" className="text-gray-900 font-semibold hover:underline">Contact</Link> to discuss your project.
        </p>
      </div>
    </div>
  );
}
