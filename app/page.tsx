'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Code2, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const categories = ['All', 'React Native', 'Next.js', 'Full Stack', 'Firebase', 'AI/ML']

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'Real-time weather app with geolocation, city search, and dynamic UI',
    image: '/projects/weather-app.png',
    category: 'React Native',
    tags: ['React Native', 'Expo', 'API Integration', 'Geolocation'],
    github: 'https://github.com/codewithash-dev/weather-app',
    demo: '#',
  },
  {
    id: 2,
    title: 'Full Stack Chat App',
    description: 'Real-time messaging with Firebase Auth, Firestore, and Socket.io',
    image: '/projects/chat-app.png',
    category: 'Full Stack',
    tags: ['React Native', 'Node.js', 'Socket.io', 'Firebase'],
    github: 'https://github.com/codewithash-dev/chat-app',
    demo: '#',
  },
  {
    id: 3,
    title: 'Expense Tracker',
    description: 'Personal finance tracker with charts, categories, and data export',
    image: '/projects/expense-tracker.png',
    category: 'React Native',
    tags: ['React Native', 'AsyncStorage', 'Charts', 'CRUD'],
    github: 'https://github.com/codewithash-dev/expense-tracker',
    demo: '#',
  },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">CodeWithAsh</span>
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</Link>
              <Link href="#about" className="text-gray-300 hover:text-purple-400 transition">About</Link>
              <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Building production-ready mobile and web applications
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Full-stack developer specializing in React Native, Next.js, and modern JavaScript
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/codewithash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:ashley@codewithash.com" className="text-gray-400 hover:text-purple-400 transition">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Projects</h2>
          
          {/* Category Filter - Horizontal Scroll */}
          <div className="mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 min-w-max pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition group"
              >
                <div className="relative h-48 bg-slate-700">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <Code2 className="w-16 h-16" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </a>
                    
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">About Me</h2>
          
          <div className="bg-slate-800/50 rounded-xl p-8 md:p-12">
            <p className="text-xl text-gray-300 mb-6">
              Software Engineering student with hands-on experience in full-stack development, systems analysis, and technical problem-solving.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{projects.length}+</div>
                <div className="text-gray-400">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">400+</div>
                <div className="text-gray-400">Hours of Training</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-400">Certifications</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
                <div className="space-y-2">
                  <div className="text-gray-300">• JavaScript, React, Node.js</div>
                  <div className="text-gray-300">• React Native, Expo</div>
                  <div className="text-gray-300">• Next.js, TypeScript</div>
                  <div className="text-gray-300">• MongoDB, Firebase</div>
                  <div className="text-gray-300">• Git, GitHub, VS Code</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                <div className="text-gray-300 mb-4">
                  <div className="font-semibold">Per Scholas</div>
                  <div className="text-gray-400">Software Engineering Bootcamp</div>
                  <div className="text-sm text-gray-500">October 2025</div>
                </div>
                <div className="text-gray-300">
                  <div className="font-semibold">Certifications</div>
                  <div className="text-sm text-gray-400">IBM SkillsBuild, Google IT Support (In Progress)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-8">
            Open to opportunities in full-stack development and software engineering
          </p>
          
          
            href="mailto:ashley@codewithash.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold rounded-lg transition transform hover:scale-105"
          >
            <Mail className="w-6 h-6" />
            Get In Touch
          </a>

          <div className="flex justify-center gap-8 mt-12">
            <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/codewithash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

          <p className="text-gray-500 mt-8">Greenville, SC | (980) 415-0814</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2025 Ashley Henderson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}