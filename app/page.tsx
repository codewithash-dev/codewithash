import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
  {/* Logo - Clickable */}
<a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
  <img 
    src="/logo.png"
    alt="Logo"
    className="w-8 h-8 rounded-lg"
  />
  <span className="text-lg font-bold">ASH</span>
</a>
          
<div className="flex gap-8 items-center">
  <a href="/projects" className="text-gray-300 hover:text-white transition">
    Projects
  </a>
  <a href="/contact" className="text-gray-300 hover:text-white transition">
    Contact
  </a>
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master Coding.<br/>
              Build Real<br/>
              Projects. Get<br/>
              Hired.
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Structured, no-fluff portfolio that showcases the skills you need to succeed in the real world.
            </p>
            <a 
              href="#projects" 
              className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition hover:scale-105"
            >
              View Projects →
            </a>
          </div>

          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm font-mono leading-relaxed">
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-xl mb-4">Hello,</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            I'm Ashley Henderson.
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            I've spent years building real-world applications, and my goal isn't just to write code — it's to help you think like a professional software engineer, master problem-solving, and build skills you'll use for life.
          </p>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/ashley.jpg" 
                alt="Ashley Henderson"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="text-5xl font-bold text-purple-400 mb-2">10M+</div>
              <div className="text-gray-400">Projects Built</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="text-5xl font-bold text-green-400 mb-2">4M</div>
              <div className="text-gray-400">GitHub Stars</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="text-5xl font-bold text-pink-400 mb-2">20+</div>
              <div className="text-gray-400">Years experience</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="text-5xl font-bold text-orange-400 mb-2">52</div>
              <div className="text-gray-400">Tech Stacks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-black">
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
          
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 w-max">
              
              <div className="w-96 bg-gray-900/50 rounded-2xl overflow-hidden hover:scale-105 transition border border-gray-800">
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

              <div className="w-96 bg-gray-900/50 rounded-2xl overflow-hidden hover:scale-105 transition border border-gray-800">
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

              <div className="w-96 bg-gray-900/50 rounded-2xl overflow-hidden hover:scale-105 transition border border-gray-800">
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
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Connect with us for any questions or concerns.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Your email:</label>
              <input 
                type="email" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Your message:</label>
              <textarea 
                rows={6}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © Code with Ash
      </footer>
    </main>
  );
}