'use client';

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition">
            <img 
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 rounded-lg"
            />
          </a>
          
          <div className="flex gap-8 items-center">
  <a href="/projects" className="text-gray-300 hover:text-white transition">
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

      {/* Projects Content */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-400">Real-world applications built with modern tech stacks</p>
        </div>

        <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <h3 className="text-4xl font-bold">Project 1</h3>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Project Name</h4>
              <p className="text-gray-400 mb-4">Brief description goes here</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Node.js</span>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition">View Project →</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-pink-500 transition-all duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center">
              <h3 className="text-4xl font-bold">Project 2</h3>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Project Name</h4>
              <p className="text-gray-400 mb-4">Brief description goes here</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm">Next.js</span>
              </div>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition">View Project →</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <h3 className="text-4xl font-bold">Project 3</h3>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Project Name</h4>
              <p className="text-gray-400 mb-4">Brief description goes here</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">TypeScript</span>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© Code with Ash</p>
            
            <div className="flex gap-6">
              <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/codewithash/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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