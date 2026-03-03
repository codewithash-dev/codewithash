import Link from "next/link";
import SupportShell from "@/app/components/SupportShell";

export default function PostsPage() {
  return (
    <SupportShell active="posts">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
          Posts
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Exclusive posts and updates for Code With Ash members. Join the membership to get access to build logs, tips, and early project previews.
        </p>
        <div className="rounded-xl border border-gray-200 bg-white p-6 mb-6">
          <p className="text-sm text-gray-500">
            Posts will appear here once they&apos;re published. For now, you can become a member to support the work and get early access when new content drops.
          </p>
        </div>
        <Link
          href="/membership"
          className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-black transition"
        >
          Become a member
        </Link>
      </div>
    </SupportShell>
  );
}
