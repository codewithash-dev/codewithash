import Image from "next/image";
import SocialNav from "../SocialNav";
import { CURRENT_USER, MOCK_POSTS } from "../data";

const userPosts = MOCK_POSTS.filter((p) => p.author.id === CURRENT_USER.id);

export default function SocialProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SocialNav />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
          <div className="relative h-24 w-24 rounded-full overflow-hidden bg-slate-200 shrink-0 ring-4 ring-white shadow">
            <Image
              src={CURRENT_USER.avatar}
              alt={CURRENT_USER.displayName}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div className="text-center sm:text-left flex-1 min-w-0">
            <h1 className="text-xl font-bold text-slate-900">{CURRENT_USER.displayName}</h1>
            <p className="text-slate-500 text-sm mb-1">@{CURRENT_USER.username}</p>
            {CURRENT_USER.bio && (
              <p className="text-slate-700 text-sm mt-2">{CURRENT_USER.bio}</p>
            )}
            <div className="flex justify-center sm:justify-start gap-6 mt-4 text-sm">
              <span className="font-semibold text-slate-900">{userPosts.length} posts</span>
              <span className="text-slate-500">·</span>
              <span className="font-semibold text-slate-900">
                {MOCK_POSTS.reduce((acc, p) => acc + p.likes, 0)} total likes
              </span>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Posts</h2>
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {userPosts.map((post) => (
              <a
                key={post.id}
                href="/projects/social-media/feed"
                className="relative aspect-square rounded-lg overflow-hidden bg-slate-200 block group"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition duration-200"
                  sizes="(max-width: 640px) 33vw, 200px"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
