'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GameDevelopment() {
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
      category: 'Game Development Fundamentals',
      description: 'Learn the core concepts of game development including game loops, physics, collision detection, and game design principles.',
      items: [
        { title: 'Introduction to Game Development', level: 'Beginner', duration: '4h' },
        { title: 'Game Design Principles', level: 'Beginner', duration: '3h' },
        { title: 'Math for Game Developers', level: 'Beginner to Intermediate', duration: '5h' },
      ],
    },
    {
      category: 'Unity Game Engine',
      description: 'Master Unity, one of the most popular game engines. Build 2D and 3D games for multiple platforms.',
      items: [
        { title: 'Unity Fundamentals', level: 'Beginner', duration: '6h' },
        { title: 'Unity 2D Game Development', level: 'Intermediate', duration: '8h' },
        { title: 'Unity 3D Game Development', level: 'Intermediate to Pro', duration: '10h' },
      ],
    },
    {
      category: 'C# for Game Development',
      description: 'Learn C# programming specifically for game development. Master scripting, gameplay mechanics, and game logic.',
      items: [
        { title: 'C# Programming Essentials', level: 'Beginner', duration: '5h' },
        { title: 'C# for Unity', level: 'Intermediate', duration: '6h' },
        { title: 'Advanced Game Scripting', level: 'Intermediate to Pro', duration: '5h' },
      ],
    },
    {
      category: 'Game Physics & AI',
      description: 'Implement realistic physics and intelligent AI behaviors in your games.',
      items: [
        { title: 'Game Physics Fundamentals', level: 'Intermediate', duration: '4h' },
        { title: 'AI for Games', level: 'Intermediate', duration: '5h' },
        { title: 'Pathfinding & Navigation', level: 'Intermediate to Pro', duration: '3h' },
      ],
    },
    {
      category: 'Publishing & Monetization',
      description: 'Learn how to publish your games and implement monetization strategies.',
      items: [
        { title: 'Publishing to App Stores', level: 'Intermediate', duration: '3h' },
        { title: 'Game Monetization Strategies', level: 'Intermediate', duration: '2h' },
        { title: 'Marketing Your Game', level: 'Intermediate', duration: '3h' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-12 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-lg mb-4">Learning Paths</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Game Development</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The fundamental courses you need to build games.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed">
              Game development combines programming, design, art, and storytelling. Whether you want to build indie games or work at a AAA studio, this path will teach you the fundamentals.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              Here are the courses I believe you should take, listed in order. Master game engines, programming, and game design principles.
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

                <div className="relative pl-8 border-l-2 border-purple-500">
                  {section.items.map((course, index) => (
                    <div key={index} className="relative mb-8 last:mb-0">
                      <div className="absolute -left-[37px] w-4 h-4 bg-purple-500 rounded-full"></div>
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