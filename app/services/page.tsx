'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    servicesRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const services = [
    {
      title: 'Website Development',
      description: 'Responsive, modern websites built with the latest tech. From landing pages to full corporate sites, I deliver clean code that works flawlessly across all devices.',
      gradient: 'from-purple-600 to-pink-600',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9m9 9 0 0112-9" />
        </svg>
      ),
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform iOS and Android apps built with React Native. User-friendly, feature-rich applications that engage your audience and grow your brand.',
      gradient: 'from-pink-600 to-red-600',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Full-Stack Applications',
      description: 'End-to-end web applications with React, Node.js, and modern frameworks. APIs, databases, authentication — built for scale, security, and maintainability.',
      gradient: 'from-orange-500 via-pink-500 to-purple-600',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'UI/UX & Code Architecture',
      description: 'Thoughtful design and solid architecture. I focus on clean code, scalable patterns, and user-centric interfaces that balance aesthetics with functionality.',
      gradient: 'from-teal-500 via-purple-500 to-pink-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">What I Do</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Design. Build. Deploy.
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            From concept to production — I build responsive websites, mobile apps, and full-stack applications tailored to your needs. Clean code, modern tech, and solutions that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4 text-center">Expert Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Custom Solutions for Your Digital Success
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) servicesRef.current[index] = el;
                }}
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let&apos;s turn your idea into reality. Reach out and we&apos;ll create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] hover:shadow-2xl hover:shadow-purple-500/30 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Connect
          </a>
        </div>
      </section>

    </main>
  );
}
