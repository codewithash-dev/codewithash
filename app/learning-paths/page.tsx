'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LearningPaths() {
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

  const paths = [
    {
      title: 'Fundamentals',
      description: 'Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!',
      gradient: 'from-pink-500 via-purple-500 to-purple-600',
      icon: (
        <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
          <rect x="40" y="50" width="120" height="80" rx="8" fill="url(#grad1)" />
          <circle cx="60" cy="40" r="20" fill="#FF6B35" />
          <rect x="100" y="90" width="60" height="40" rx="4" fill="#FF8C42" />
          <path d="M50 70h40v10h-40z" fill="#4A4A4A" />
          <path d="M50 85h40v5h-40z" fill="#4A4A4A" />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#16213e" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Front-end Development',
      description: 'All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more!',
      gradient: 'from-teal-400 via-green-400 to-green-500',
      icon: (
        <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
          <rect x="40" y="40" width="120" height="90" rx="8" fill="white" />
          <rect x="50" y="50" width="40" height="8" rx="4" fill="#A855F7" />
          <rect x="50" y="65" width="100" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="75" width="100" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="85" width="80" height="4" rx="2" fill="#D1D5DB" />
          <circle cx="165" cy="55" r="15" fill="#EC4899" />
          <rect x="155" y="100" width="30" height="20" rx="4" fill="#8B5CF6" />
        </svg>
      ),
    },
    {
      title: 'Back-end Development',
      description: 'All the courses you need to build powerful APIs for web and mobile apps. Node, Django, ASP.NET MVC, MySQL, and more!',
      gradient: 'from-yellow-400 via-orange-400 to-orange-500',
      icon: (
        <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
          <rect x="50" y="40" width="100" height="70" rx="8" fill="white" />
          <rect x="60" y="55" width="80" height="8" rx="4" fill="#3B82F6" />
          <rect x="60" y="70" width="80" height="8" rx="4" fill="#3B82F6" />
          <rect x="60" y="85" width="60" height="8" rx="4" fill="#3B82F6" />
          <rect x="145" y="50" width="30" height="30" rx="6" fill="#6366F1" />
          <circle cx="80" cy="140" r="12" fill="#8B5CF6" />
        </svg>
      ),
    },
    {
      title: 'Mobile Development',
      description: 'All the courses you need to build professional, cross-platform mobile apps using React Native.',
      gradient: 'from-orange-500 via-red-400 to-orange-600',
      icon: (
        <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
          <rect x="65" y="30" width="70" height="140" rx="12" fill="url(#grad2)" />
          <rect x="75" y="45" width="50" height="100" rx="4" fill="#3B82F6" />
          <circle cx="100" cy="155" r="6" fill="#EC4899" />
          <circle cx="165" cy="70" r="8" fill="#10B981" />
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5B8DEF" />
              <stop offset="100%" stopColor="#0063F7" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Game Development',
      description: 'The fundamental courses you need to build games.',
      gradient: 'from-blue-400 via-purple-400 to-purple-500',
      icon: (
        <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
          <path d="M100 60 L130 100 L100 140 L70 100 Z" fill="white" />
          <circle cx="90" cy="90" r="8" fill="#10B981" />
          <circle cx="110" cy="90" r="8" fill="#EF4444" />
          <circle cx="90" cy="110" r="8" fill="#3B82F6" />
          <circle cx="110" cy="110" r="8" fill="#F59E0B" />
          <circle cx="165" cy="60" r="10" fill="#10B981" />
          <path d="M60 80 Q55 100 60 120" stroke="#8B5CF6" strokeWidth="3" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-lg" />
          </a>
          <div className="flex gap-8 items-center">
            <a href="/projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
            <a href="/learning-paths" className="text-white font-semibold">
              Learning Paths
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">No More Guesswork</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow a proven path to build real coding skills and land your dream job.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`h-48 bg-gradient-to-br ${path.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {path.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{path.description}</p>
                </div>
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