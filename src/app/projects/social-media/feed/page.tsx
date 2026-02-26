import SocialNav from "../SocialNav";
import PostCard from "../PostCard";
import { MOCK_POSTS } from "../data";

export default function SocialFeedPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SocialNav />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="sr-only">Feed</h1>
        <ul className="space-y-6">
          {MOCK_POSTS.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
