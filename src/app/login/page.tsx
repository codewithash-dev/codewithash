import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Member login</h1>
        <p className="text-gray-400">
          Member login is coming soon. Once available, you&apos;ll be able to sign in
          and get discounted access to project source code.
        </p>
        <Link
          href="/projects"
          className="btn-animate inline-flex items-center justify-center rounded-lg bg-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-fuchsia-500"
        >
          Back to projects
        </Link>
      </div>
    </main>
  );
}
