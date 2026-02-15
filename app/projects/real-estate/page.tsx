'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function RealEstateProject() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    );
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-12 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto">
          <a href="/projects" className="text-orange-400 hover:text-orange-300 mb-6 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Estate Platform</h1>
          <p className="text-xl text-gray-400 mb-6">
            Property listing platform with search, filters, and interactive maps.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full">React</span>
            <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full">MongoDB</span>
            <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full">Mapbox</span>
            <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full">Express</span>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div ref={contentRef} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-2xl h-96 mb-12 overflow-hidden">
            <img 
              src="/projects/real-estate.jpg" 
              alt="Real Estate App" 
              className="w-full h-full object-cover"
            />
            <div className="text-8xl">🏡</div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                A comprehensive real estate platform that connects buyers with properties. Features advanced search with multiple filters, interactive maps showing property locations, virtual tours, and direct messaging between buyers and sellers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Advanced search with filters (price, bedrooms, location, type)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Interactive maps with Mapbox GL JS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Property listings with image galleries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Saved favorites and property comparisons</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Agent profiles and direct messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Mortgage calculator and affordability tools</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">Frontend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• React + TypeScript</li>
                    <li>• Mapbox GL JS</li>
                    <li>• Material-UI</li>
                    <li>• React Query</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Backend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Node.js + Express</li>
                    <li>• MongoDB + Mongoose</li>
                    <li>• Cloudinary for images</li>
                    <li>• JWT Authentication</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Handling geospatial queries efficiently was crucial. I used MongoDB's geospatial indexes to enable fast radius-based searches, allowing users to find properties within specific distances from landmarks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Implementing an intuitive filter system that updates results in real-time required careful state management. I used debouncing for search inputs and optimized queries to minimize database hits.
              </p>
            </div>

            <div className="flex justify-center">
  <a 
    href="https://github.com/codewithash-dev"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
  >
    View Code →
  </a>
</div>
          </div>
        </div>
      </section>

    </main>
  );
}