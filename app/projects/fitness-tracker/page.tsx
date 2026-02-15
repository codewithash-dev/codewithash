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

    </main>
  );
}