'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Post } from '@/types/social';
import InstagramNavbar from '@/components/social/InstagramNavbar';
import Link from 'next/link';

export default function ExplorePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select('*, profiles(*)')
      .order('likes_count', { ascending: false })
      .limit(30);

    setPosts(data || []);
    setLoading(false);
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
      
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-gray-900 text-2xl font-semibold mb-6">Explore</h1>

        {posts.length > 0 ? (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {posts.map((post) => {
              const mediaUrl = post.video_url || post.image_url;
              const isVideo = post.video_url
                ? true
                : mediaUrl
                ? /\.(mp4|mov|webm|ogg)(\?|$)/i.test(mediaUrl)
                : false;

              return (
                <Link key={post.id} href={`/projects/social-media/post/${post.id}`}>
                  <div className="aspect-square bg-gray-100 hover:opacity-90 transition cursor-pointer relative group">
                    {mediaUrl ? (
                      <>
                        {isVideo ? (
                          <video
                            src={mediaUrl}
                            className="w-full h-full object-cover bg-black"
                            muted
                            playsInline
                          />
                        ) : (
                          <img src={mediaUrl} alt="" className="w-full h-full object-cover" />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-6 text-white">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <span>{post.likes_count}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{post.comments_count}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
                      <p className="text-gray-700 text-sm text-center line-clamp-6">{post.content}</p>
                    </div>
                  )}
                </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No posts to explore yet</p>
          </div>
        )}
      </div>
    </div>
  );
}