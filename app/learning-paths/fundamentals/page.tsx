'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Fundamentals() {
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
      category: 'Programming Languages',
      description: 'I have several courses on various programming languages such as Python, Java, JavaScript, and C#. Professional software engineers often know more than one language, but if you\'re starting out, just focus on one language. I recommend you learn Java first, even if you\'re not planning to use it in the future. Java is a classic programming language with amazing features. Once you learn Java, you can quickly and easily switch to similar languages like JavaScript, C#, C++, etc.',
      items: [
        { title: 'Ultimate Java Part 1: Fundamentals', level: 'Beginner', duration: '4h' },
        { title: 'Ultimate Java Part 2: Object-oriented Programming', level: 'Intermediate', duration: '4h' },
        { title: 'Ultimate Java Part 3: Advanced Topics', level: 'Intermediate to Pro', duration: '6h' },
      ],
    },
    {
      category: 'Data Structures & Algorithms',
      description: 'Studying classic data structures and algorithms helps you improve your programming and problem-solving skills. These topics are frequently asked in coding interviews, and this course will help you master them.',
      items: [
        { title: 'Ultimate Data Structures & Algorithms: Part 1', level: 'Beginner', duration: '5h' },
        { title: 'Ultimate Data Structures & Algorithms: Part 2', level: 'Intermediate', duration: '6h' },
        { title: 'Ultimate Data Structures & Algorithms: Part 3', level: 'Intermediate', duration: '3h' },
      ],
    },
    {
      category: 'Design Patterns',
      description: 'Design patterns are engineered solutions to common problems in software design, and are often asked about in coding interviews. There are 20 classic design patterns commonly known as GoF (Gang of Four) patterns. The following courses help you learn and understand these patterns and appreciate object-oriented programming techniques.',
      items: [
        { title: 'Mastering Design Patterns: Part 1', level: 'Beginner', duration: '4h' },
        { title: 'Mastering Design Patterns: Part 2', level: 'Intermediate', duration: '2h' },
        { title: 'Mastering Design Patterns: Part 3', level: 'Intermediate', duration: '1h' },
      ],
    },
    {
      category: 'Version Control and Collaboration',
      description: 'Version control is like a time machine for software engineers. It allows you to go back in time and see the exact state of your code at any point. This is incredibly important because it means you can easily track changes, fix bugs, and collaborate with others without the fear of losing or messing up your code.',
      items: [
        { title: 'The Ultimate Git Course', level: 'Beginner to Pro', duration: '6h' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-12 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-lg mb-4">Learning Paths</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fundamentals</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The essential skills every software engineer must have.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed">
              If you're pursuing a career as a professional software engineer, you should dedicate the first three to six months to mastering the fundamentals.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              Here are the courses I believe you should take, listed in order. Depending on your knowledge and experience level, you can take all the courses in order, or just pick the ones that are best for you.
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

                <div className="relative pl-8 border-l-2 border-pink-500">
                  {section.items.map((course, index) => (
                    <div key={index} className="relative mb-8 last:mb-0">
                      <div className="absolute -left-[37px] w-4 h-4 bg-pink-500 rounded-full"></div>
                      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
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