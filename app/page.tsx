import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image 
              src="/ChatGPT_Image_Jan_22__2026__09_31_10_AM.png"
              alt="Code With Ash Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">ASH</span>
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

      {/* Hero Section - Side by Side */}
      <section className="min-h-screen grid md:grid-cols-2 items-center px-6 pt-20">
        {/* Left - Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Master Coding.<br/>
            Build Real<br/>
            Projects. Get<br/>
            Hired.
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Structured, no-fluff portfolio that showcases the skills you need to succeed in the real world.
          </p>
          <a 
            href="#projects" 
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition hover:scale-105"
          >
            View Projects →
          </a>
        </div>

        {/* Right - Code Window */}
        <div className="hidden md:flex justify-center items-center">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 w-full max-w-lg shadow-2xl">
            {/* Mac Window Dots */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            {/* Code */}
            <pre className="text-sm font-mono">
              <code>
                <span className="text-purple-400">const</span> <span className="text-blue-300">coder</span> = {'{\n'}
                {'  '}name: <span className="text-yellow-300">'Master Coder'</span>,{'\n'}
                {'  '}skills: [<span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Node'</span>],{'\n'}
                {'  '}hardWorker: <span className="text-orange-400">true</span>,{'\n'}
                {'  '}problemSolver: <span className="text-orange-400">true</span>,{'\n'}
                {'  '}hireable: <span className="text-green-400">function</span>() {'{\n'}
                {'    '}<span className="text-purple-400">return</span> ({'\n'}
                {'      '}<span className="text-blue-300">this</span>.hardWorker &&{'\n'}
                {'      '}<span className="text-blue-300">this</span>.problemSolver &&{'\n'}
                {'      '}<span className="text-blue-300">this</span>.skills.length {'>='}  <span className="text-orange-400">5</span>{'\n'}
                {'    '});{'\n'}
                {'  '}{'}\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 text-xl mb-4">Hello,</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            I'm Ashley Henderson.
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I've spent years building real-world applications, and my goal isn't just to write code — it's to help you think like a professional software engineer, master problem-solving, and build skills you'll use for life.
          </p>
          
          {/* Photo */}
          <div className="flex justify-center mb-12">
            <div className="relative w-96 h-96 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
              <Image 
                src="/700.JPG" 
                alt="Ashley Henderson"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-400">Projects Built</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
              <div className="text-gray-400">Tech Stacks</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-700/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-pink-400 mb-2">3</div>
              <div className="text-gray-400">Realms Governed</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-gray-400">Lines of Code</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-purple-600/20 rounded-full mb-4">
              <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Projects</h2>
            <p className="text-gray-400 text-lg">
              Real-world applications built with modern tech stacks
            </p>
          </div>
          
          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-8 w-max px-4">
              
              {/* Project Card 1 */}
              <div className="w-96 bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-purple-500/30">
                <div className="w-full h-56 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project 1</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                  <p className="text-gray-400 mb-4">Brief description of what this project does and the technologies used to build it.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-500/30">React</span>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Node.js</span>
                  </div>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition font-semibold">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="w-96 bg-gradient-to-br from-pink-900/50 to-pink-800/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-pink-500/30">
                <div className="w-full h-56 bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project 2</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                  <p className="text-gray-400 mb-4">Brief description of what this project does and the technologies used to build it.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm border border-pink-500/30">Next.js</span>
                    <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm border border-pink-500/30">MongoDB</span>
                  </div>
                  <a href="#" className="text-pink-400 hover:text-pink-300 transition font-semibold">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="w-96 bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-blue-500/30">
                <div className="w-full h-56 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project 3</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                  <p className="text-gray-400 mb-4">Brief description of what this project does and the technologies used to build it.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Firebase</span>
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition font-semibold">
                    View Project →
                  </a>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="w-96 bg-gradient-to-br from-orange-900/50 to-orange-800/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-orange-500/30">
                <div className="w-full h-56 bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project 4</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                  <p className="text-gray-400 mb-4">Brief description of what this project does and the technologies used to build it.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm border border-orange-500/30">React Native</span>
                    <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm border border-orange-500/30">Expo</span>
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
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            We're here for you: Connect with us for any questions or concerns.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Your email:</label>
              <input 
                type="email" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Your message:</label>
              <textarea 
                rows={6}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Send
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-12">
            <a 
              href="https://github.com/codewithash-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/codewithash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        © Code with Ash
      </footer>
    </main>
  );
}