'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const featuredProjects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    tags: ['Next.js'],
    image: '/projects/ecommerce.jpg',
    link: '/projects/ecommerce',
    subtitle: 'Stripe Integration',
    description: 'Full checkout flow with Stripe, cart management, and admin dashboard.',
  },
  {
    id: 'social-media',
    title: 'Full Stack Social Media App',
    tags: ['Next.js'],
    image: '/projects/social-media.jpg',
    link: '/projects/social-media',
    subtitle: 'Instagram-Style Feed',
    description: 'Posts, comments, likes, and profiles with real-time Supabase backend.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    tags: ['React'],
    image: '/projects/real-estate.jpg',
    link: '/projects/real-estate',
    subtitle: 'Map Integration',
    description: 'Property listings with search, filters, and interactive Mapbox maps.',
  },
];

export default function LawnCareProject() {
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
          <Link href="/projects" className="text-emerald-400 hover:text-emerald-300 mb-6 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Lawn Care Style Portfolio</h1>
          <p className="text-xl text-gray-400 mb-6">
            A premium project showcase inspired by Lawn Care OS. Dark theme, emerald accents, and featured work cards with image overlays.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full">Next.js</span>
            <span className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full">Tailwind</span>
            <span className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full">GSAP</span>
          </div>
        </div>
      </section>

      {/* Featured Work - Lawn Care design */}
      <section ref={contentRef} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">6+</div>
              <div className="text-sm text-gray-400 mt-1">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">Full Stack</div>
              <div className="text-sm text-gray-400 mt-1">Web & Mobile</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">Modern</div>
              <div className="text-sm text-gray-400 mt-1">Tech Stacks</div>
            </div>
          </div>

          <div className="border-t border-gray-700/50 pt-16">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                Featured Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
                Premium Project Portfolio
              </h2>
              <p className="text-gray-400 max-w-2xl text-lg">
                Watch the craftwork in motion. Each project showcases precision, attention to detail, and professional execution with modern frameworks and clean code.
              </p>
            </div>

            {/* Featured project cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {featuredProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  className="group block rounded-2xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-medium mb-3">
                        {project.tags[0]}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-emerald-400/90 text-sm font-medium mb-2">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Ready to see more? View complete portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
