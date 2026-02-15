'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FrontEndDevelopment() {
  const heroRef = useRef(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  const courses = [
    {
      category: 'HTML & CSS',
      description: 'Master the fundamentals of building beautiful, responsive websites with HTML and CSS.',
      items: [
        { title: 'HTML5 Fundamentals', level: 'Beginner', duration: '3h' },
        { title: 'CSS3 Complete Guide', level: 'Beginner', duration: '4h' },
        { title: 'Responsive Design Mastery', level: 'Intermediate', duration: '3h' },
      ],
    },
    {
      category: 'JavaScript',
      description: 'Learn modern JavaScript from basics to advanced concepts. Understand ES6+, async programming, and more.',
      items: [
        { title: 'JavaScript Fundamentals', level: 'Beginner', duration: '6h' },
        { title: 'Advanced JavaScript', level: 'Intermediate', duration: '5h' },
        { title: 'Modern JavaScript (ES6+)', level: 'Intermediate', duration: '4h' },
      ],
    },
    {
      category: 'React',
      description: 'Build powerful single-page applications with React. Learn hooks, state management, and best practices.',
      items: [
        { title: 'React Fundamentals', level: 'Beginner', duration: '8h' },
        { title: 'React Advanced Patterns', level: 'Intermediate', duration: '6h' },
        { title: 'React with TypeScript', level: 'Intermediate to Pro', duration: '5h' },
      ],
    },
    {
      category: 'CSS Frameworks',
      description: 'Speed up development with modern CSS frameworks like Tailwind and Bootstrap.',
      items: [
        { title: 'Tailwind CSS Complete Guide', level: 'Beginner', duration: '4h' },
        { title: 'Bootstrap 5 Essentials', level: 'Beginner', duration: '3h' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-12 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center">
          <p className="text-teal-400 text-lg mb-4">Learning Paths</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Front-end Development</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more!
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed">
              If you want to become a front-end developer, you need to master HTML, CSS, and JavaScript. These are the core technologies that power every website on the internet.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              Here are the courses I believe you should take, listed in order. Start with the fundamentals and work your way up to advanced frameworks like React.
            </p>
          </div>

          <div className="space-y-16">
            {courses.map((section, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) sectionsRef.current[idx] = el;
                }}
              >
                <h2 className="text-3xl font-bold mb-6">{section.category}</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {section.description}
                </p>

                <div className="relative pl-8 border-l-2 border-teal-500">
                  {section.items.map((course, index) => (
                    <div key={index} className="relative mb-8 last:mb-0">
                      <div className="absolute -left-[37px] w-4 h-4 bg-teal-500 rounded-full"></div>
                      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-teal-500 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-400 transition">
                          {course.title}
                        </h3>
                        <div className="flex gap-4 text-sm text-gray-400">
                          <span>{course.level}</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}