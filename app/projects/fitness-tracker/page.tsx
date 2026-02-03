'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FitnessTrackerProject() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    );
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-lg" />
          </a>
          <div className="flex gap-8 items-center">
            <a href="/projects" className="text-white font-semibold">
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

      <section className="pt-32 pb-12 px-6">
        <div ref={heroRef} className="max-w-5xl mx-auto">
          <a href="/projects" className="text-green-400 hover:text-green-300 mb-6 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fitness Tracker</h1>
          <p className="text-xl text-gray-400 mb-6">
            Track workouts, nutrition, and progress with charts and goal setting.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full">React Native</span>
            <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full">Express</span>
            <span className="px-4 py-2 bg-yellow-600/20 text-yellow-400 rounded-full">Chart.js</span>
            <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full">PostgreSQL</span>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div ref={contentRef} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl h-96 mb-12 overflow-hidden">
            <img 
              src="/projects/fitness-tracker.jpg" 
              alt="Fitness Tracker App" 
              className="w-full h-full object-cover"
            />
            <div className="text-8xl">💪</div>
          </div>

          <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Try It Live</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
              <a 
                href="https://snack.expo.dev/@codewithash-dev/fitness-app?platform=web&preview=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 text-center"
              >
                🚀 Open Live Demo
              </a>
              <a 
                href="https://github.com/codewithash-dev/codewithash/tree/main/projects/fitforge-expo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-center"
              >
                👀 View Code on GitHub
              </a>
            </div>
            
            <div className="bg-black rounded-xl overflow-hidden border border-gray-700">
              <iframe
                src="https://snack.expo.dev/@codewithash-dev/fitness-app?platform=web&preview=true&theme=dark"
                style={{
                  width: '100%',
                  height: '700px',
                  border: 0,
                }}
                title="Fitness Tracker Demo"
                allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">
              If the demo doesn't load, <a href="https://snack.expo.dev/@codewithash-dev/fitness-app" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">open it in a new tab</a>.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                A comprehensive fitness tracking mobile app built with React Native. Users can log workouts, track nutrition, monitor progress with detailed charts, set goals, and receive personalized recommendations.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Workout logging with exercise library and custom routines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Nutrition tracking with barcode scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Progress charts and statistics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Goal setting with progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Calendar view of workout history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Personal records and achievements</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Mobile</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• React Native + Expo</li>
                    <li>• React Navigation</li>
                    <li>• Chart.js for visualizations</li>
                    <li>• AsyncStorage</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Backend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Node.js + Express</li>
                    <li>• PostgreSQL</li>
                    <li>• Nutritionix API</li>
                    <li>• JWT Authentication</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Creating intuitive data visualizations on mobile required careful consideration of screen space. I used Chart.js with responsive configurations and implemented horizontal scrolling for detailed workout history.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Offline functionality was essential for gym users without reliable internet. I implemented local data storage with AsyncStorage and background sync to ensure users never lose workout data.
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <a 
                href="https://snack.expo.dev/@codewithash-dev/fitness-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
              >
                Try Live Demo →
              </a>
            <a 
              href="https://github.com/codewithash-dev/codewithash/tree/main/projects/fitforge-expo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105"
              >
                View Code →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© Code with Ash</p>
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