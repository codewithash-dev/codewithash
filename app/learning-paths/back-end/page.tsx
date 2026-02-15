'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackEndDevelopment() {
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
      category: 'Node.js',
      description: 'Build fast, scalable server-side applications with Node.js and Express. Learn REST APIs, authentication, and more.',
      items: [
        { title: 'Node.js Fundamentals', level: 'Beginner', duration: '5h' },
        { title: 'Express.js Complete Guide', level: 'Intermediate', duration: '6h' },
        { title: 'RESTful API Development', level: 'Intermediate', duration: '4h' },
      ],
    },
    {
      category: 'Databases',
      description: 'Master both SQL and NoSQL databases. Learn MongoDB, PostgreSQL, MySQL, and database design principles.',
      items: [
        { title: 'SQL Mastery', level: 'Beginner', duration: '4h' },
        { title: 'MongoDB Complete Guide', level: 'Beginner', duration: '5h' },
        { title: 'PostgreSQL Deep Dive', level: 'Intermediate', duration: '4h' },
      ],
    },
    {
      category: 'Python & Django',
      description: 'Build powerful web applications with Python and Django. Learn MVC architecture, ORM, and deployment.',
      items: [
        { title: 'Python for Backend Development', level: 'Beginner', duration: '6h' },
        { title: 'Django Complete Guide', level: 'Intermediate', duration: '8h' },
        { title: 'Django REST Framework', level: 'Intermediate to Pro', duration: '5h' },
      ],
    },
    {
      category: 'Authentication & Security',
      description: 'Learn how to secure your applications with JWT, OAuth, encryption, and best security practices.',
      items: [
        { title: 'Authentication & Authorization', level: 'Intermediate', duration: '4h' },
        { title: 'API Security Best Practices', level: 'Intermediate to Pro', duration: '3h' },
      ],
    },
    {
      category: 'Deployment & DevOps',
      description: 'Deploy your applications to the cloud. Learn Docker, AWS, CI/CD, and monitoring.',
      items: [
        { title: 'Docker Essentials', level: 'Beginner to Intermediate', duration: '4h' },
        { title: 'AWS for Developers', level: 'Intermediate', duration: '6h' },
        { title: 'CI/CD with GitHub Actions', level: 'Intermediate', duration: '3h' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-12 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center">
          <p className="text-orange-400 text-lg mb-4">Learning Paths</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Back-end Development</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            All the courses you need to build powerful APIs for web and mobile apps. Node, Django, ASP.NET MVC, MySQL, and more!
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed">
              Back-end developers build the server-side logic that powers applications. You'll work with databases, APIs, authentication, and deployment.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              Here are the courses I believe you should take, listed in order. Master server-side programming, databases, and cloud deployment.
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

                <div className="relative pl-8 border-l-2 border-orange-500">
                  {section.items.map((course, index) => (
                    <div key={index} className="relative mb-8 last:mb-0">
                      <div className="absolute -left-[37px] w-4 h-4 bg-orange-500 rounded-full"></div>
                      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition">
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