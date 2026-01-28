'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const codeBlockRef = useRef(null);
  const ashleyRef = useRef(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      codeBlockRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo(
      ashleyRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ashleyRef.current,
          start: 'top 80%',
        },
      }
    );

    statsRef.current.forEach((stat, index) => {
      gsap.fromTo(
        stat,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition">
            <img 
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 rounded-lg"
            />
          </a>
          
          <div className="flex gap-8 items-center">
            <a href="/projects" className="text-gray-300 hover:text-white transition">
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

      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
              suppressHydrationWarning
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div ref={heroRef}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master Coding.<br />
              Build Real<br />
              Projects.
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              I build real-world applications that solve problems and create value. My focus is on clean code, scalable architecture, and products that people actually use.
            </p>
            <a 
              href="/projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              View Projects →
            </a>
          </div>

          <div ref={codeBlockRef} className="relative">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm md:text-base overflow-x-auto">
                <code className="text-gray-300">
{`const coder = {
  name: 'Master Coder',
  skills: ['React', 'Node'],
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section ref={ashleyRef} className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">Hello,</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">I'm Ashley Henderson.</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            I've spent years building real-world applications, and my goal isn't just to write code — it's to help you think like a professional software engineer, master problem-solving, and build skills you'll use for life.
          </p>
          <div className="max-w-3xl mx-auto">
            <img 
              src="/ashley.jpg" 
              alt="Ashley Henderson" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Projects Built', color: 'from-purple-600 to-pink-600' },
              { number: '100+', label: 'GitHub Commits', color: 'from-green-600 to-teal-600' },
              { number: '10+', label: 'Years Coding', color: 'from-pink-600 to-red-600' },
              { number: '8+', label: 'Tech Stacks', color: 'from-orange-600 to-yellow-600' },
            ].map((stat, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) statsRef.current[index] = el;
                }}
                className="text-center"
              >
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">
            Recognized by Professionals
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Ship Production Code
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            Full-stack software engineer who ships. I specialize in React, Node.js, and modern web frameworks, building solutions that bridge frontend elegance with backend power. Clean code, solid architecture, and scalable applications that solve real business problems are my priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              Projects
            </a>
            <a 
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg font-semibold hover:from-pink-700 hover:to-red-700 transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© Code with Ash</p>
            
            <div className="flex gap-6">
              <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/codewithash/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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