'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const heroRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 80%',
        },
      }
    );
  }, []);

  const projects = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      link: '/projects/ecommerce',
      description: 'Full-stack online store with Stripe payments, cart, and product management',
      gradient: 'from-blue-600 to-purple-600',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      demoUrl: '/projects/ecommerce',
      codeUrl: 'https://github.com/codewithash-dev/ecommerce',
    },
    {
      id: 'social-media',
      title: 'Social Media App',
      link: '/projects/social-media',
      description: 'Instagram-style dark mode platform with posts, likes, comments, follows, and image uploads',
      gradient: 'from-purple-600 to-pink-600',
      image: '/projects/social-media.jpg',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      demoUrl: '/projects/social-media',
      codeUrl: 'https://github.com/codewithash-dev/social-media-app',
    },
    {
      id: 'real-estate',
      title: 'Real Estate Platform',
      link: '/projects/real-estate',
      description: 'Property listing platform with search, filters, and interactive maps.',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      image: '/projects/real-estate.jpg',
      tags: ['React', 'MongoDB', 'Mapbox'],
      demoUrl: '/projects/real-estate',
      codeUrl: 'https://github.com/codewithash-dev/real-estate-platform',
    },
    {
      id: 'fitness-tracker',
      title: 'Fitness Tracker',
      link: '/projects/fitness-tracker',
      description: 'Track workouts, nutrition, and progress with charts and goal setting.',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      image: '/projects/fitness-tracker.jpg',
      tags: ['React Native', 'Express', 'Chart.js'],
      demoUrl: '/projects/fitness-tracker',
      codeUrl: 'https://github.com/codewithash-dev/codewithash/tree/main/projects/fitforge-expo',
    },
    {
      id: 'login-credentials',
      title: 'Login Credentials System',
      link: '/projects/login-credentials',
      description: 'Secure authentication system with JWT, OAuth, and two-factor authentication.',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      image: '/projects/login-credentials.jpg',
      tags: ['Node.js', 'JWT', 'OAuth'],
      demoUrl: 'https://snack.expo.dev/@codewithash-dev/login-credentials?platform=web&preview=true',
      codeUrl: 'https://github.com/codewithash-dev/login-credentials',
    },
    {
      id: 'url-shortener',
      title: 'URL Shortener Mobile App',
      link: '/projects/url-shortener',
      description: 'Professional iOS app with QR codes, click analytics, and instant sharing built with React Native.',
      gradient: 'from-teal-500 to-cyan-500',
      image: '/projects/url-shortener.jpg',
      tags: ['React Native', 'Expo', 'Bitly API', 'QR Codes'],
      demoUrl: null,
      codeUrl: 'https://github.com/codewithash-dev/url-shortener',
    },
  ];
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-lg" />
            <span className="text-white font-bold text-2xl tracking-wide -ml-1">ASH</span>
          </a>
          <div className="flex gap-8 items-center">
            <a href="/projects" className="text-white font-semibold">
              Projects
            </a>
            <a href="/learning-paths" className="text-gray-300 hover:text-white transition">
              Learning Paths
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-12 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world applications built with modern tech stacks
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <a href={project.link} className="block">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>

                {(project.demoUrl || project.codeUrl) && (
                  <div className="px-6 pb-6 flex gap-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition text-sm"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex-1 bg-gray-800 text-gray-400 py-2 rounded-lg font-semibold text-center text-sm border border-gray-700">
                        Coming Soon
                      </div>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 bg-gray-800 text-white py-2 rounded-lg font-semibold text-center hover:bg-gray-700 transition flex items-center justify-center gap-2 text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© Code with Ash</p>
            <div className="flex gap-6">
              <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/codewithash/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Use</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}