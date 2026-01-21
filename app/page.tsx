import Link from 'next/link'
import { Code2, Smartphone, Globe, Sparkles, Mail, Github, Linkedin, Award, Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Ashley Henderson</span>
            </div>
            <div className="hidden md:flex gap-8">
              <Link href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</Link>
              <Link href="#skills" className="text-gray-300 hover:text-purple-400 transition">Skills</Link>
              <Link href="#experience" className="text-gray-300 hover:text-purple-400 transition">Experience</Link>
              <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Code2 className="w-10 h-10 text-purple-400 animate-bounce" />
            <Globe className="w-10 h-10 text-blue-400 animate-bounce delay-100" />
            <Smartphone className="w-10 h-10 text-pink-400 animate-bounce delay-200" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Software Engineer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full-Stack Developer | Web Developer | Systems Builder
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Detail-oriented Software Engineering student with hands-on experience in full-stack web development, 
            systems analysis, and technical problem-solving. Strong foundation in JavaScript, React, Node.js, 
            and MongoDB with experience building and deploying responsive applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="#projects" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
              View Projects
            </Link>
            <a href="mailto:ashley@codewithash.com" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border-2 border-purple-500 transition transform hover:scale-105">
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/codewithash" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Code2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Programming</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• JavaScript (ES6+)</li>
                <li>• Asynchronous programming</li>
                <li>• API integration (JSON, XML)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React (JSX, Hooks, state management)</li>
                <li>• Responsive design (CSS, Flexbox, Grid)</li>
                <li>• Web performance optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js (event loop, npm)</li>
                <li>• Express.js (RESTful APIs, middleware)</li>
                <li>• Error handling & routing</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Databases</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• MongoDB (schema design)</li>
                <li>• CRUD operations</li>
                <li>• Indexing & query optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Full-Stack Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Frontend-backend integration</li>
                <li>• RESTful service creation</li>
                <li>• API security</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Tools & Workflow</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git, GitHub, branching strategies</li>
                <li>• npm, environment configuration</li>
                <li>• Version control best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <Globe className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Web Application Project</h3>
              <p className="text-gray-400 mb-4">Per Scholas Software Engineering Program</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Designed and built responsive web application using HTML, CSS, and JavaScript</li>
                <li>• Implemented DOM manipulation, form validation, and error handling</li>
                <li>• Integrated Firebase Authentication for secure login and protected routes</li>
                <li>• Version-controlled and deployed using Git and GitHub</li>
              </ul>
              <a href="https://github.com/codewithash/web-application-project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition">
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition">
              <Code2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Full-Stack Applications</h3>
              <p className="text-gray-400 mb-4">Built and deployed during technical upskilling</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Built responsive web applications with React</li>
                <li>• Implemented RESTful APIs with Node.js and Express</li>
                <li>• Deployed production-ready applications</li>
                <li>• Strengthened problem-solving and self-directed learning skills</li>
              </ul>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Certifications</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Per Scholas | Software Engineering</h3>
                  <p className="text-gray-400">October 2025</p>
                </div>
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-gray-300">
                15-week intensive program, 400+ hours. Full-stack web development fundamentals, 
                hands-on labs and collaborative projects, Agile workflows and version control.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 font-semibold">IBM SkillsBuild</p>
                    <p className="text-gray-400 text-sm">Enhancing Applications w/ Embeddable AI</p>
                    <p className="text-gray-500 text-sm">December 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 font-semibold">IBM SkillsBuild</p>
                    <p className="text-gray-400 text-sm">Project Management Fundamentals</p>
                    <p className="text-gray-500 text-sm">December 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 font-semibold">Google IT Support</p>
                    <p className="text-gray-500 text-sm">Expected February 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 font-semibold">Meta Front-End Developer</p>
                    <p className="text-gray-500 text-sm">Expected March 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 font-semibold">AWS Cloud Practitioner</p>
                    <p className="text-gray-500 text-sm">Expected April 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-8">
            Open to opportunities in full-stack development, web engineering, and software development roles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:ashley@codewithash.com" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold rounded-lg transition transform hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              ashley@codewithash.com
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition">
              <Github className="w-8 h-8" />
              <span className="text-lg">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/codewithash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition">
              <Linkedin className="w-8 h-8" />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>

          <p className="text-gray-500 mt-8">Greenville, SC | (980) 415-0814</p>
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