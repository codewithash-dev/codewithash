export default function URLShortenerPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ffaa] to-[#4a9eff] bg-clip-text text-transparent">
            URL Shortener Mobile App
          </h1>
          <p className="text-xl text-gray-400">
            Professional iOS app with QR codes, analytics & sharing
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#00ffaa]">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['React Native', 'Expo', 'Bitly API', 'AsyncStorage', 'QR Codes'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-900 border border-[#00ffaa] rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#00ffaa]">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔗', title: 'Shorten URLs', desc: 'Via Bitly API integration' },
              { icon: '📱', title: 'QR Codes', desc: 'Generate for every link' },
              { icon: '📊', title: 'Analytics', desc: 'Track click engagement' },
              { icon: '↗️', title: 'Share', desc: 'iOS share sheet integration' },
              { icon: '💾', title: 'Storage', desc: 'Local data persistence' },
              { icon: '🎨', title: 'Dark Theme', desc: 'Teal/blue accent colors' },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#00ffaa]">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#00ffaa]">App Preview</h2>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <p className="text-gray-400 text-center">Screenshots coming soon...</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/codewithash-dev/url-shortener"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#00ffaa] text-black font-bold rounded-lg hover:bg-[#00cc88] transition"
          >
            View Code →
          </a>
          <span className="px-6 py-3 bg-gray-900 border border-[#4a9eff] text-[#4a9eff] font-bold rounded-lg">
            Coming to App Store - Feb 2026
          </span>
        </div>
      </div>
    </div>
  );
}