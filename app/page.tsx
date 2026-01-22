export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-center">
          Ashley Henderson
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 text-center">
          Software Engineer • Real Estate Broker • Pilot • Captain
        </p>
        <a 
          href="#projects" 
          className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition hover:scale-105"
        >
          View Projects
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-5xl font-bold mb-12 text-center">Projects</h2>
        
        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-8">
          <div className="flex gap-6 w-max">
            
            {/* Project Card 1 */}
            <div className="w-80 h-96 bg-gray-900 rounded-lg p-6 hover:scale-105 transition">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-400">Brief description goes here</p>
            </div>

            {/* Project Card 2 */}
            <div className="w-80 h-96 bg-gray-900 rounded-lg p-6 hover:scale-105 transition">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-400">Brief description goes here</p>
            </div>

            {/* Project Card 3 */}
            <div className="w-80 h-96 bg-gray-900 rounded-lg p-6 hover:scale-105 transition">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-400">Brief description goes here</p>
            </div>

            {/* Project Card 4 */}
            <div className="w-80 h-96 bg-gray-900 rounded-lg p-6 hover:scale-105 transition">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-400">Brief description goes here</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
        <div className="flex justify-center gap-8 mt-12">
          <a 
            href="https://github.com/codewithash-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/codewithash" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2025 Ashley Henderson. All rights reserved.
      </footer>
    </main>
  );
}