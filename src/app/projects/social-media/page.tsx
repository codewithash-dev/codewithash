import Link from "next/link";

export default function SocialMediaProjectPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm text-slate-400 mb-3">
          <Link href="/projects" className="hover:text-white transition underline-offset-4 hover:underline">
            Projects
          </Link>{" "}
          <span className="mx-1">/</span>
          <span className="text-slate-300">Social Media App</span>
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Full Stack Social Media App
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8">
          Instagram-style social app with posts, likes, comments, and profiles. Built with Next.js,
          Supabase, and Tailwind. Demo includes a feed, post interactions, and profile view.
        </p>
        <section className="flex flex-wrap gap-4 mb-12">
          <Link
            href="/projects/social-media/feed"
            className="btn-animate inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-400 transition"
          >
            Open Demo
          </Link>
          <a
            href="https://github.com/codewithash-dev/social-media-app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animate inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800 transition"
          >
            View code
          </a>
        </section>
        <section className="grid gap-8 sm:grid-cols-[1fr,1fr]">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">What&apos;s included</h2>
            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>Infinite-style feed with mock posts</li>
              <li>Like and comment counts with toggle like</li>
              <li>User profiles and post grids</li>
              <li>Responsive layout (mobile-first)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Tech stack</h2>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
