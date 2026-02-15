'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LearningPaths() {
  const heroRef = useRef(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

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
      link: '/learning-paths/fundamentals',
      description: 'Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!',
      gradient: 'from-pink-500 via-purple-500 to-purple-600',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Front-end Development',
      link: '/learning-paths/front-end',
      description: 'All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more!',
      gradient: 'from-teal-400 via-green-400 to-green-500',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Back-end Development',
      link: '/learning-paths/back-end',
      description: 'All the courses you need to build powerful APIs for web and mobile apps. Node, Django, ASP.NET MVC, MySQL, and more!',
      gradient: 'from-yellow-400 via-orange-400 to-orange-500',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Mobile Development',
      link: '/learning-paths/mobile',
      description: 'All the courses you need to build professional, cross-platform mobile apps using React Native.',
      gradient: 'from-orange-500 via-red-400 to-orange-600',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Game Development',
      link: '/learning-paths/game-dev',
      description: 'The fundamental courses you need to build games.',
      gradient: 'from-blue-400 via-purple-400 to-purple-500',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
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
            <a
              key={index}
              href={path.link}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer block"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className={`h-48 bg-gradient-to-br ${path.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {path.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{path.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}