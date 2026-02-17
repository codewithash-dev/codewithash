'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoginCredentialsProject() {
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
          <a href="/projects" className="text-indigo-400 hover:text-indigo-300 mb-6 inline-block">
            ← Back to Projects
          </a>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🔐 Login Credentials Manager</h1>
          <p className="text-xl text-gray-400 mb-6">
            A secure mobile app to store and manage your login credentials with Supabase authentication.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded-full">React Native</span>
            <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full">Expo Router</span>
            <span className="px-4 py-2 bg-pink-600/20 text-pink-400 rounded-full">Supabase</span>
            <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full">TypeScript</span>
            <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full">Expo Secure Store</span>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div ref={contentRef} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden mb-12">
            <div className="h-96 flex items-center justify-center">
              <div className="text-9xl">🔐</div>
            </div>
          </div>

          <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Try It Live</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
              <a
                href="https://snack.expo.dev/@codewithash-dev/login-credentials?platform=ios&preview=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-center"
              >
                🚀 Open Live Demo
              </a>
              <a
                href="https://github.com/codewithash-dev/login-credentials"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-center"
              >
                👀 View Code on GitHub
              </a>
            </div>

            <div className="bg-black rounded-xl overflow-hidden border border-gray-700">
              <iframe
                src="https://snack.expo.dev/@codewithash-dev/login-credentials?platform=ios&preview=true&theme=dark"
                style={{
                  width: '100%',
                  height: '700px',
                  border: 0,
                }}
                title="Login Credentials Demo"
                allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">
              If the demo doesn't load, <a href="https://snack.expo.dev/@codewithash-dev/login-credentials" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">open it in a new tab</a>.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                A React Native mobile app built with Expo that allows users to securely store and manage their login credentials. Features include user authentication, password visibility toggle, categorization, and cloud sync via Supabase.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Secure authentication with Supabase (sign up, sign in, sign out)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Store credentials with title, username, password, URL, and notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Organize credentials by category (social, banking, email, work, other)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Toggle password visibility with eye icon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Delete credentials with confirmation dialog</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Pull-to-refresh to sync latest credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Responsive tab navigation (Credentials, Add New, Profile)</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-400">Frontend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• React Native + Expo</li>
                    <li>• Expo Router (file-based routing)</li>
                    <li>• TypeScript</li>
                    <li>• React Hooks (useState, useEffect)</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Backend & Security</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Supabase (Auth & Database)</li>
                    <li>• Expo Secure Store</li>
                    <li>• PostgreSQL (via Supabase)</li>
                    <li>• Row Level Security (RLS)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Security Implementation</h2>
              <div className="bg-gray-900/50 border border-indigo-500/30 rounded-xl p-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 font-semibold">Authentication:</span>
                    <span>Supabase handles user authentication with secure JWT tokens stored in Expo Secure Store</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 font-semibold">Data Protection:</span>
                    <span>All credentials are encrypted at rest and in transit using Supabase's built-in security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 font-semibold">Access Control:</span>
                    <span>Row Level Security (RLS) ensures users can only access their own credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 font-semibold">Password Visibility:</span>
                    <span>Passwords are masked by default with a toggle to reveal them only when needed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Database Schema</h2>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  {`credentials table:
  - id (UUID, primary key)
  - user_id (UUID, foreign key to auth.users)
  - title (TEXT)
  - username (TEXT)
  - password (TEXT)
  - url (TEXT, optional)
  - notes (TEXT, optional)
  - category (ENUM: social, banking, email, work, other)
  - created_at (TIMESTAMP)
  - updated_at (TIMESTAMP)`}
                </pre>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-indigo-400">Challenge:</strong> Ensuring secure storage of sensitive credentials on mobile devices.
                <br />
                <strong className="text-green-400">Solution:</strong> Used Expo Secure Store for token storage and Supabase's encryption for database-level protection. Implemented RLS policies to ensure data isolation between users.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-indigo-400">Challenge:</strong> Creating an intuitive UX for password management without compromising security.
                <br />
                <strong className="text-green-400">Solution:</strong> Implemented a toggle for password visibility and confirmation dialogs for destructive actions like deletion to prevent accidental data loss.
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="https://snack.expo.dev/@codewithash-dev/login-credentials"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Try Live Demo →
              </a>
              <a
                href="https://github.com/codewithash-dev/codewithash/tree/main/projects/login-credentials"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
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