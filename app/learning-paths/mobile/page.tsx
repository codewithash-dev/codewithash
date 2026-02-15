'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileDevelopment() {
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
      category: 'React Native Fundamentals',
      description: 'Learn to build cross-platform mobile apps with React Native. Master components, navigation, and native modules.',
      items: [
        { title: 'React Native Essentials', level: 'Beginner', duration: '6h' },
        { title: 'React Native Navigation', level: 'Beginner to Intermediate', duration: '4h' },
        { title: 'State Management with Redux', level: 'Intermediate', duration: '5h' },
      ],
    },
    {
      category: 'Native Features',
      description: 'Access device features like camera, location, notifications, and sensors. Build truly native experiences.',
      items: [
        { title: 'Working with Native Modules', level: 'Intermediate', duration: '4h' },
        { title: 'Camera & Media Access', level: 'Intermediate', duration: '3h' },
        { title: 'Push Notifications & Background Tasks', level: 'Intermediate', duration: '4h' },
      ],
    },
    {
      category: 'UI & Animation',
      description: 'Create beautiful, smooth user interfaces with React Native animations and gestures.',
      items: [
        { title: 'React Native UI Libraries', level: 'Beginner to Intermediate', duration: '4h' },
        { title: 'Advanced Animations with Reanimated', level: 'Intermediate to Pro', duration: '5h' },
        { title: 'Gesture Handling', level: 'Intermediate', duration: '3h' },
      ],
    },
    {
      category: 'Performance & Optimization',
      description: 'Optimize your apps for smooth performance, faster load times, and better user experience.',
      items: [
        { title: 'React Native Performance Optimization', level: 'Intermediate to Pro', duration: '4h' },
        { title: 'Memory Management & Debugging', level: 'Intermediate', duration: '3h' },
      ],
    },
    {
      category: 'Testing & Deployment',
      description: 'Test your apps thoroughly and deploy to App Store and Google Play.',
      items: [
        { title: 'Testing React Native Apps', level: 'Intermediate', duration: '4h' },
        { title: 'iOS Deployment Guide', level: 'Intermediate', duration: '3h' },
        { title: 'Android Deployment Guide', level: 'Intermediate', duration: '3h' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-12 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center">
          <p className="text-red-400 text-lg mb-4">Learning Paths</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mobile Development</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            All the courses you need to build professional, cross-platform mobile apps using React Native.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed">
              Mobile development with React Native lets you build apps for both iOS and Android using JavaScript and React. It's the fastest way to ship production-ready mobile apps.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              Here are the courses I believe you should take, listed in order. Master React Native from basics to advanced deployment.
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

                <div className="relative pl-8 border-l-2 border-red-500">
                  {section.items.map((course, index) => (
                    <div key={index} className="relative mb-8 last:mb-0">
                      <div className="absolute -left-[37px] w-4 h-4 bg-red-500 rounded-full"></div>
                      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition">
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