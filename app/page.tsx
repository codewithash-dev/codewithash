export default function Home() {
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
            <a href="/courses" className="text-gray-300 hover:text-white transition">
              Courses
            </a>
            <a href="/learning-paths" className="text-gray-300 hover:text-white transition">
              Learning Paths
            </a>
            <a href="/lifetime-access" className="text-gray-300 hover:text-white transition">
              Lifetime Access
            </a>
            <a href="/forum" className="text-gray-300 hover:text-white transition">
              Forum
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
            <a 
              href="/members" 
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Members Area
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
              href="/projects" 
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

      {/* Why You'll Love Learning Here */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="text-purple-400 text-xl mb-4">Why You'll Love Learning Here</p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Quality, Structure, and Real Results
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-32">
          {/* Perfectly Structured Courses */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">A clear path to master coding</p>
              <h3 className="text-4xl font-bold mb-6">Perfectly Structured Courses</h3>
              <p className="text-xl text-gray-300">
                No more jumping between random YouTube tutorials. Follow a clear, logical path designed to build your skills step-by-step.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform rotate-6 flex items-center justify-center shadow-2xl">
                  <div className="text-center space-y-4 p-8">
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-400 rounded-2xl shadow-xl"></div>
                <div className="absolute -bottom-10 -left-6 w-20 h-20 bg-teal-400 rounded-2xl shadow-xl"></div>
              </div>
            </div>
          </div>

          {/* Clear and Bite-Sized Lessons */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative">
                <div className="w-96 h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
                  <div className="flex gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute right-6 top-6 w-32 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-4 shadow-xl">
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="space-y-3 bg-orange-500/20 p-4 rounded-xl mt-6">
                    <p className="text-xs text-orange-300 font-semibold">Course contents</p>
                    <div className="h-2 bg-orange-400/30 rounded"></div>
                    <div className="h-2 bg-orange-400/30 rounded"></div>
                    <div className="h-2 bg-orange-400/30 rounded"></div>
                    <div className="h-2 bg-orange-400/30 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Straightforward and to the point</p>
              <h3 className="text-4xl font-bold mb-6">Clear and Bite-Sized Lessons</h3>
              <p className="text-xl text-gray-300">
                Each lesson is focused and fluff-free, so you can make real progress—even with a busy schedule. Get exactly what you need without wasting a minute.
              </p>
            </div>
          </div>

          {/* More than Just Code */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Deep understanding, not just shortcuts</p>
              <h3 className="text-4xl font-bold mb-6">More than Just Code</h3>
              <p className="text-xl text-gray-300">
                I go beyond the "what" and show you the "why" and "how" behind every concept, so you can code with real understanding.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-56 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl transform -rotate-12 shadow-2xl"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-64 bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl shadow-2xl z-10 p-6 flex flex-col items-center justify-center">
                      <div className="space-y-2 text-sm font-mono text-white/80">
                        <div>{'<div>'}</div>
                        <div className="pl-4">{'<code>'}</div>
                        <div className="pl-8 text-purple-200">...</div>
                        <div className="pl-4">{'</code>'}</div>
                        <div>{'</div>'}</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-40 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl transform rotate-12 shadow-2xl" style={{marginLeft: '120px', marginTop: '80px'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hands-on Projects */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-teal-900 to-cyan-900 rounded-full shadow-2xl flex items-center justify-center">
                    <svg className="w-64 h-64 opacity-20" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="50" cy="30" r="8"/>
                      <path d="M30 45 L50 30 L70 45 L70 70 L30 70 Z" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-48 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-4 z-10">
                    <div className="flex gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-2 text-xs font-mono text-teal-200">
                      <div className="h-2 bg-teal-400/30 rounded"></div>
                      <div className="h-2 bg-teal-400/30 rounded w-3/4"></div>
                      <div className="h-2 bg-teal-400/30 rounded w-1/2"></div>
                    </div>
                    <div className="mt-4 bg-pink-500 rounded-xl p-3 shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-pink-300 rounded"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-1.5 bg-pink-300/60 rounded"></div>
                          <div className="h-1.5 bg-pink-300/40 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Get ready for real-world work</p>
              <h3 className="text-4xl font-bold mb-6">Hands-on Projects You'll Love</h3>
              <p className="text-xl text-gray-300">
                We'll build real-world projects together, giving you the confidence to tackle real challenges on the job.
              </p>
            </div>
          </div>

          {/* Built on 20+ Years of Experience */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Decades of coding, shared with you</p>
              <h3 className="text-4xl font-bold mb-6">Built on 20+ Years of Experience</h3>
              <p className="text-xl text-gray-300">
                With over two decades in the industry, I've seen it all. I'll share insights and lessons that you won't find in any textbook.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    '#8b5cf6', '#ec4899', '#f97316', 
                    '#06b6d4', '#10b981', '#f59e0b', 
                    '#6366f1', '#ef4444', '#14b8a6'
                  ].map((color, i) => (
                    <div 
                      key={i}
                      className="w-20 h-20 rounded-2xl transform hover:scale-110 transition shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by Millions */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative">
                <div className="w-96 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                    </svg>
                  </div>
                  <div className="bg-white/95 rounded-xl px-8 py-3 mb-6 shadow-lg">
                    <p className="text-purple-600 font-bold text-sm">Programming with Mosh</p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <button className="border-2 border-white text-white px-8 py-2.5 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition text-sm">
                    SUBSCRIBE
                  </button>
                </div>
                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl px-6 py-4 shadow-2xl">
                  <p className="text-2xl font-bold">3M+</p>
                  <p className="text-xs text-purple-200">Subscribers</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-pink-500 rounded-3xl transform rotate-12 shadow-2xl"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Join a global community of learners</p>
              <h3 className="text-4xl font-bold mb-6">Trusted by Millions</h3>
              <p className="text-xl text-gray-300">
                #1 ranked tutorials on YouTube, trusted by millions for their clarity and depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Employees */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-xl mb-4">Recognized by Professionals</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            Trusted by Employees at Leading Companies
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            My courses are used by professionals from top companies like Microsoft, Amazon, and Google, helping them sharpen their skills and stay ahead in their fields.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="/courses" 
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition hover:scale-105"
            >
              Browse Courses
            </a>
            <a 
              href="/signup" 
              className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition hover:scale-105"
            >
              Join for Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© Code with Ash</p>
            
            <div className="flex gap-6">
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
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