'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FILTERS = ['All', 'React Native', 'Reanimated', 'Firebase', 'Tailwind', 'Supabase', 'Sanity', 'RapidAPI', 'Expo', 'Node.js', 'MongoDB', 'Next.js', 'React', 'Stripe', 'TypeScript'];

type Project = {
  id: string;
  title: string;
  tags: string[];
  image?: string;
  link?: string;
  youtubeUrl?: string;
  demoUrl?: string | null;
  codeUrl?: string;
  comingSoon: boolean;
  gradient?: string;
};

const projects: Project[] = [
  // Code With Ash - Live projects
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    image: '/projects/ecommerce.jpg',
    link: '/projects/ecommerce',
    demoUrl: '/projects/ecommerce',
    codeUrl: 'https://github.com/codewithash-dev/ecommerce',
    comingSoon: false,
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    id: 'social-media',
    title: 'Full Stack Social Media App',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    image: '/projects/social-media.jpg',
    link: '/projects/social-media',
    demoUrl: '/projects/social-media',
    codeUrl: 'https://github.com/codewithash-dev/social-media-app',
    comingSoon: false,
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    tags: ['React', 'MongoDB', 'Mapbox'],
    image: '/projects/real-estate.jpg',
    link: '/projects/real-estate',
    demoUrl: '/projects/real-estate',
    codeUrl: 'https://github.com/codewithash-dev/real-estate-platform',
    comingSoon: false,
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness App',
    tags: ['React Native', 'Expo', 'Express', 'Chart.js'],
    image: '/projects/fitness-tracker.jpg',
    link: '/projects/fitness-tracker',
    demoUrl: '/projects/fitness-tracker',
    codeUrl: 'https://github.com/codewithash-dev/codewithash/tree/main/projects/fitforge-expo',
    comingSoon: false,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 'login-credentials',
    title: 'Login Credentials System',
    tags: ['Node.js', 'React Native', 'Supabase'],
    image: '/projects/login-credentials.jpg',
    link: '/projects/login-credentials',
    demoUrl: 'https://snack.expo.dev/@codewithash-dev/login-credentials?platform=web&preview=true',
    codeUrl: 'https://github.com/codewithash-dev/login-credentials',
    comingSoon: false,
    gradient: 'from-indigo-500 to-pink-500',
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener Mobile App',
    tags: ['React Native', 'Expo'],
    image: '/projects/url-shortener.jpg',
    link: '/projects/url-shortener',
    demoUrl: null,
    codeUrl: 'https://github.com/codewithash-dev/url-shortener',
    comingSoon: false,
    gradient: 'from-teal-500 to-cyan-500',
  },
  // Coming Soon - from Code With Nomi style projects
  { id: 'food-delivery-ui', title: 'Food Delivery App UI', tags: ['React Native', 'Tailwind'], comingSoon: true, image: '/projects/Food-Delivery-App.jpg' },
  { id: 'course-learning', title: 'Course Learning App', tags: ['React Native', 'Node.js'], comingSoon: true, image: '/projects/course-learning-app.png' },
  { id: 'full-stack-chat', title: 'Full Stack Chat App', tags: ['React Native', 'Firebase'], comingSoon: true, image: '/projects/Fullstack-chat-app.png' },
  { id: 'wallpaper-app', title: 'Wallpaper App', tags: ['React Native', 'RapidAPI'], comingSoon: true, image: '/projects/wallpaper-app.jpg' },
  { id: 'firebase-auth-chat', title: 'Firebase Auth & Chat', tags: ['React Native', 'Firebase'], comingSoon: true, image: '/projects/Firebase.jpg' },
  { id: 'onboarding-ui', title: 'Onboarding UI', tags: ['React Native', 'Reanimated'], comingSoon: true, image: '/projects/Onboarding-UI.jpg' },
  { id: 'ai-story-generator', title: 'AI Story Generator', tags: ['React Native', 'RapidAPI'], comingSoon: true, image: '/projects/Ai-Generator.png' },
  { id: 'travel-app', title: 'Travel App', tags: ['React Native', 'MongoDB'], comingSoon: true, image: '/projects/travel-app.jpg' },
  { id: 'weather-app', title: 'Weather App', tags: ['React Native', 'RapidAPI'], comingSoon: true, image: '/projects/Weather-app.jpg' },
  { id: 'fast-food-app', title: 'Fast Food App', tags: ['React Native', 'Firebase'], comingSoon: true, image: '/projects/Fast-food-app.jpg' },
  { id: 'ecommerce-app-ui', title: 'Ecommerce App UI', tags: ['React Native', 'Tailwind'], comingSoon: true, image: '/projects/Ecommerce-app.png' },
  { id: 'coffee-app', title: 'Coffee App', tags: ['React Native', 'Sanity'], comingSoon: true, image: '/projects/Coffee-app.jpg' },
  { id: 'login-signup-ui', title: 'Login & SignUp UI', tags: ['React Native', 'Firebase'], comingSoon: true, image: '/projects/Firebase.jpg' },
  { id: 'ai-voice-assistant', title: 'AI Voice Assistant', tags: ['React Native', 'RapidAPI'], comingSoon: true, image: '/projects/AI-Voice-Assistant.jpg' },
  { id: 'fruit-shop', title: 'Fruit Shop App', tags: ['React Native', 'Expo'], comingSoon: true, image: '/projects/Fruit-shop-app.jpg' },
  { id: 'food-delivery-app', title: 'Food Delivery App', tags: ['React Native', 'Node.js'], comingSoon: true, image: '/projects/Food-Delivery-App.jpg' },
  { id: 'expense-tracker', title: 'Expense Tracker App', tags: ['React Native', 'Firebase'], comingSoon: true, image: '/projects/Expense-tracker-app.png' },
  { id: 'movie-app', title: 'Movie App', tags: ['React Native', 'RapidAPI'], comingSoon: true, image: '/projects/Movie-app.jpg' },
  { id: 'firebase-auth-app', title: 'Firebase Authentication: Login & SignUp', tags: ['React Native', 'Firebase'], comingSoon: true, image: '/projects/Firebase.jpg' },
  { id: 'food-recipe-app', title: 'Food Recipe App', tags: ['React Native', 'RapidAPI'], comingSoon: true, image: '/projects/Food-recipe-app.jpg' },
  { id: 'expensify-app', title: 'Expensify App (Expense Tracker)', tags: ['React Native', 'Node.js'], comingSoon: true, image: '/projects/Expensify-app.jpg' },
  { id: 'youtube-clone', title: 'Youtube Clone', tags: ['React Native', 'RapidAPI'], comingSoon: true, image: '/projects/Youtube-clone.jpg' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const heroRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = activeFilter === 'All' || p.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase());
    const matchesSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const refs = cardsRef.current.filter(Boolean);
    if (refs.length > 0) {
      gsap.fromTo(
        refs,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power3.out',
        }
      );
    }
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-6 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world applications built with modern tech stacks
          </p>
        </div>
      </section>

      {/* Search bar */}
      <section className="px-6 pb-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-12 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-2 justify-center min-w-max pb-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project grid - 3 columns like Nomi */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group"
            >
              {project.comingSoon ? (
                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
                    {project.image && (
                      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold px-4 py-2 bg-purple-600/90 rounded-lg backdrop-blur-sm">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Coming Soon</span>
                    </div>
                  </div>
                </div>
              ) : (
                <a href={project.link} className="block">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        {(project.demoUrl || project.codeUrl) && (
                          <>
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-sm hover:text-red-400 transition"
                              >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                                <span>Demo</span>
                              </a>
                            )}
                            {project.codeUrl && (
                              <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-sm hover:text-purple-400 transition"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>Code</span>
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© 2026 Code with Ash</p>
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
