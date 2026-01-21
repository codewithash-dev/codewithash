import Link from 'next/link'
import { Code2, Smartphone, Globe, Sparkles, Mail, Github, Linkedin } from 'lucide-react'

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
              <Link href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</Link>
              <Link href="#about" className="text-gray-300 hover:text-purple-400 transition">About</Link>
              <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Smartphone className="w-8 h-8 text-blue-400 animate-bounce" />
            <Globe className="w-8 h-8 text-purple-400 animate-bounce delay-100" />
            <Code2 className="w-8 h-8 text-pink-400 animate-bounce delay-200" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Software Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Building production-ready mobile and web applications with React Native, Next.js, and modern tooling
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#projects" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
              View Projects
            </Link>
            <Link href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border-2 border-purple-500 transition transform hover:scale-105">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">Real apps, real users, real impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition transform hover:scale-105">
              <Smartphone className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">React Native App</h3>
              <p className="text-gray-400 mb-6">iOS and Android mobile application built with Expo and Firebase</p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">React Native</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">Expo</span>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition transform hover:scale-105">
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Next.js Web App</h3>
              <p className="text-gray-400 mb-6">Full-stack web application with server-side rendering and API routes</p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">TypeScript</span>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8 hover:border-pink-500/50 transition transform hover:scale-105">
              <Code2 className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">SaaS Platform</h3>
              <p className="text-gray-400 mb-6">AI-powered web platform with authentication and payment integration</p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-pink-900/50 text-pink-300 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 text-sm rounded-full">Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">About Me</h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 md:p-12">
            <p className="text-xl text-gray-300 mb-6">
              I'm <span className="text-purple-400 font-bold">Ashley</span>, a software engineer focused on building production-ready applications.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Technical Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-purple-400 font-semibold mb-1">Mobile</p>
                    <p className="text-gray-400 text-sm">React Native, Expo</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-blue-400 font-semibold mb-1">Web</p>
                    <p className="text-gray-400 text-sm">Next.js, React, TypeScript</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-green-400 font-semibold mb-1">Backend</p>
                    <p className="text-gray-400 text-sm">Node.js, Firebase, Supabase</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-pink-400 font-semibold mb-1">Styling</p>
                    <p className="text-gray-400 text-sm">Tailwind CSS</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-yellow-400 font-semibold mb-1">Tools</p>
                    <p className="text-gray-400 text-sm">VS Code, Cursor, Git</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-cyan-400 font-semibold mb-1">AI</p>
                    <p className="text-gray-400 text-sm">Claude, Copilot</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Approach</h3>
                <p className="text-gray-300 leading-relaxed">
                  I build by doing. My focus is on shipping real applications that solve real problems. 
                  I prioritize clean code, scalable architecture, and modern best practices. From API integration 
                  to UI polish, I handle the full development lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-8">
            Available for freelance projects and collaboration
          </p>
          
          <a 
            href="mailto:ashley@codewithash.com" 
            className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold rounded-lg transition transform hover:scale-105 mb-8"
          >
            ashley@codewithash.com
          </a>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2025 Ashley Henderson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}