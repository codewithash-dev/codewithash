export default function Contact() {
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
            <a href="/projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
            <a href="/contact" className="text-white font-semibold">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl mx-auto w-full">
          <h1 className="text-5xl font-bold mb-6 text-center">Contact Us</h1>
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