'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TypeAnimation } from 'react-type-animation';

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
              <pre className="text-sm md:text-base overflow-x-auto min-h-[300px]">
                <code className="text-gray-300">
                  <TypeAnimation
                    sequence={[
                      'const coder = {\n  name: \'Master Coder\',\n  skills: [\'React\', \'Node\'],\n  hardWorker: true,\n  problemSolver: true,\n  hireable: function() {\n    return (\n      this.hardWorker &&\n      this.problemSolver &&\n      this.skills.length >= 5\n    );\n  }\n}',
                      3000,
                    ]}
                    wrapper="span"
                    speed={75}
                    style={{ whiteSpace: 'pre' }}
                    repeat={Infinity}
                    cursor={true}
                  />
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

    </main>
  );
}