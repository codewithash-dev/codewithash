export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-black">A</span>
            </div>
            <span className="text-xl font-bold">CODE WITH ASH</span>
          </div>
          
          {/* Nav Links */}
          <div className="flex gap-8 items-center">
            <a href="#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
        <div className="text-center mb-8">
          <h1 className="text-7xl md:text-9xl font-bold mb-6">
            Software Engineer
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-4">
            Full-Stack Developer | Web Developer | Systems Builder
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            Detail-oriented Software Engineering student with hands-on experience in full-stack web development, systems analysis, and technical problem-solving. Strong foundation in JavaScript, React, Node.js, and MongoDB with experience building and deploying responsive applications.
          </p>
        </div>
        
        <div className="flex gap-4 mt-8">
          <a 
            href="#projects" 
            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="border-2 border-purple-600 hover:bg-purple-600/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-12">
          <a 
            href="https://github.com/codewithash-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/codewithash" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">Projects</h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Real-world applications built with modern tech stacks
          </p>
          
          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-8 w-max px-4">
              
              {/* Project Card 1 */}
              <div className="w-96 bg-gray-800/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700">
                <div className="w-full h-56 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project 1</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                  <p className="text-gray-400 mb-4">Brief description of what this project does and the technologies used to build it.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Node.js</span>
                  </div>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition font-semibold">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="w-96 bg-gray-800/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700">
                <div className="w-full h-56 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project 2</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                  <p className="text-gray-400 mb-4">Brief description of what this project does and the technologies used to build it.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">MongoDB</span>
                  </div>
                  <a href="#" className="text-green-400 hover:text-green-300 transition font-semibold">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="w-96 bg-gray-800/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700">
                <div className="w-full h-56 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project 3</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                  <p className="text-gray-400 mb-4">Brief description of what this project does and the technologies used to build it.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Firebase</span>
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition font-semibold">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="w-96 bg-gray-800/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700">
                <div className="w-full h-56 bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project 4</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                  <p className="text-gray-400 mb-4">Brief description of what this project does and the technologies used to build it.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm">Expo</span>
                  </div>
                  <a href="#" className="text-orange-400 hover:text-orange-300 transition font-semibold">
                    View Project →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            Open to opportunities in full-stack development, web engineering, and software development roles.
          </p>
          <a 
            href="mailto:ashley@codewithash.com" 
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-10 py-5 rounded-lg text-xl font-semibold transition hover:scale-105"
          >
            ashley@codewithash.com
          </a>
          
          <div className="flex justify-center gap-8 mt-16">
            <a 
              href="https://github.com/codewithash-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition text-lg"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/codewithash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2025 Ashley Henderson. All rights reserved.
      </footer>
    </main>
  );
}