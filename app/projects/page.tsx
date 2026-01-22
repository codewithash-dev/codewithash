export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img 
              src="/logo.png"
              alt="Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-bold">ASH</span>
          </a>
          
          <div className="flex gap-8 items-center">
            <a href="/projects" className="text-white font-semibold">
              Projects
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="py-32 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-purple-600/20 rounded-full mb-4">
              <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
            <p className="text-gray-400 text-lg">
              Real-world applications built with modern tech stacks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project Card 1 */}
            <div className="bg-gray-900/50 rounded-2xl overflow-hidden hover:scale-105 transition border border-gray-800">
              <div className="w-full h-56 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Project 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                <p className="text-gray-400 mb-4">Brief description goes here</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Node.js</span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-900/50 rounded-2xl overflow-hidden hover:scale-105 transition border border-gray-800">
              <div className="w-full h-56 bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Project 2</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                <p className="text-gray-400 mb-4">Brief description goes here</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm">Next.js</span>
                </div>
                <a href="#" className="text-pink-400 hover:text-pink-300 font-semibold">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-900/50 rounded-2xl overflow-hidden hover:scale-105 transition border border-gray-800">
              <div className="w-full h-56 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Project 3</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                <p className="text-gray-400 mb-4">Brief description goes here</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">TypeScript</span>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © Code with Ash
      </footer>
    </main>
  );
}