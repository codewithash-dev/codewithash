import Link from 'next/link'
import { Code2, Plane, Anchor, BookOpen, Sparkles, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">CodeWithAsh</span>
            </div>
            <div className="hidden md:flex gap-8">
              <Link href="#courses" className="text-gray-300 hover:text-purple-400 transition">Courses</Link>
              <Link href="#about" className="text-gray-300 hover:text-purple-400 transition">About</Link>
              <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Plane className="w-8 h-8 text-blue-400 animate-bounce" />
            <Anchor className="w-8 h-8 text-cyan-400 animate-bounce" />
            <Code2 className="w-8 h-8 text-purple-400 animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Governor of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">3 Realms</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Land 🏡 • Air ✈️ • Sea 🌊
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Real Estate Broker • Pilot • Captain • Software Engineer
          </p>
          
          <p className="text-2xl md:text-3xl font-semibold text-white mb-12">
            Teaching you to <span className="text-purple-400">build real apps</span> that actually ship 🚀
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#courses" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
              View Courses
            </Link>
            <Link href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border-2 border-purple-500 transition transform hover:scale-105">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Master Real-World Development</h2>
            <p className="text-xl text-gray-400">No fluff. Just build, ship, repeat.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition transform hover:scale-105">
              <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">React Native Mastery</h3>
              <p className="text-gray-400 mb-6">Build iOS & Android apps with Expo. From setup to App Store.</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-purple-400">$99</span>
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">Learn More</button>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition transform hover:scale-105">
              <Code2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Next.js Full Stack</h3>
              <p className="text-gray-400 mb-6">Modern web apps with React, TypeScript, and Tailwind.</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-blue-400">$149</span>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Learn More</button>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition transform hover:scale-105">
              <Sparkles className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Dev</h3>
              <p className="text-gray-400 mb-6">Use Cursor, Copilot, and Claude to 10x your output.</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-pink-400">$79</span>
                <button className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Who Is Teaching You?</h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 md:p-12">
            <p className="text-xl text-gray-300 mb-6">
              I am <span className="text-purple-400 font-bold">Ashley</span> and I do not just code. I govern 3 realms:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <span className="text-3xl">🏡</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Land: Real Estate Broker</h3>
                  <p className="text-gray-400">Licensed in 13 states. Building businesses, not just properties.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="text-3xl">✈️</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Air: Commercial Pilot</h3>
                  <p className="text-gray-400">Cirrus Vision SF50 & Honda Jet rated. Systems thinking at altitude.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="text-3xl">🌊</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sea: Yacht Captain</h3>
                  <p className="text-gray-400">Co-captain of a 100 foot Sunreef with my husband. Navigation plus teamwork.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="text-3xl">💻</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Code: Software Engineer</h3>
                  <p className="text-gray-400">Building apps with React Native, Next.js, and AI tools. Ship first, perfect later.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 border-l-4 border-purple-500 pl-6 italic">
              I teach the way I learn: by building real things, fixing real problems, and keeping it goofy along the way. No theory overload just practical code that works.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let Us Connect</h2>
          <p className="text-xl text-gray-400 mb-8">Questions? Course ideas? Just want to say hi?</p>
          
          <a href="mailto:ashley@codewithash.com" className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold rounded-lg transition transform hover:scale-105">
            ashley@codewithash.com
          </a>
          
          <div className="mt-12 pt-12 border-t border-slate-700">
            <p className="text-gray-500">Servant of YAHUAH • Honoring the Shabbat</p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2025 CodeWithAsh. Built with Next.js</p>
        </div>
      </footer>
    </div>
  )
}