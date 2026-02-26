import Link from "next/link";
import Script from "next/script";

const SNACK_ID = "@codewithash-dev/login-credentials";

export default function LoginCredentialsDemoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Script
        src="https://snack.expo.dev/embed.js"
        strategy="afterInteractive"
      />
      {/* Top bar / back */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/projects"
            className="text-sm text-gray-400 hover:text-white transition font-medium"
          >
            ← Back to Projects
          </Link>
          <span className="text-sm font-medium text-gray-400">Login Credentials System</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
            Login Credentials Demo
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Secure credential vault with categories, notes, and Supabase auth. Try it in the preview below or{" "}
            <a
              href={`https://snack.expo.dev/${SNACK_ID}?platform=web&preview=true`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-400 hover:text-fuchsia-300 underline underline-offset-2"
            >
              open in Snack
            </a>
            .
          </p>
        </div>

        {/* Expo Snack embed - embed.js looks for [data-snack-id] and mounts the player */}
        <div
          data-snack-id={SNACK_ID}
          data-snack-platform="web"
          data-snack-preview="true"
          data-snack-theme="dark"
          className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]"
          style={{ minHeight: "505px", height: "70vh" }}
        />

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`https://snack.expo.dev/${SNACK_ID}?platform=web&preview=true`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
          >
            Open in Snack →
          </a>
          <a
            href="https://github.com/codewithash-dev/login-credentials"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 text-gray-400 px-5 py-2.5 text-sm font-medium hover:text-white hover:border-white/20 transition"
          >
            View code
          </a>
        </div>
      </div>
    </main>
  );
}
