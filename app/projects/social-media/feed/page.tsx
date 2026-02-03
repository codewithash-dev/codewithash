'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Post } from '@/types/social';
import InstagramPostCard from '@/components/social/InstagramPostCard';
import InstagramCreatePost from '@/components/social/InstagramCreatePost';
import InstagramNavbar from '@/components/social/InstagramNavbar';
import InstagramStories from '@/components/social/InstagramStories';
import { useAuthStore } from '@/lib/social-store';
import { useRouter } from 'next/navigation';

export default function FeedPage() {
  const { user, setUser } = useAuthStore();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/projects/social-media');
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (profile) {
      setUser(profile);
    }
    setLoading(false);
  }

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select('*, profiles(*)')
      .order('created_at', { ascending: false });

    setPosts(data || []);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <InstagramNavbar />
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <InstagramNavbar />
      
      {/* Stories Section */}
      <div className="max-w-[630px] mx-auto px-4 py-6 border-b border-gray-200">
        <InstagramStories />
      </div>

      {/* Feed */}
      <div className="max-w-[630px] mx-auto px-4 py-6">
        {posts.map((post) => (
          <InstagramPostCard key={post.id} post={post} onUpdate={fetchPosts} />
        ))}

        {posts.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-700 text-lg">No posts yet</p>
            <p className="text-gray-500 text-sm mt-2">Start sharing moments with your friends</p>
          </div>
        )}
      </div>

      <InstagramCreatePost onPostCreated={fetchPosts} />
    </div>
  );
}