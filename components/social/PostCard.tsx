'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Post } from '@/types/social';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/social-store';

export default function PostCard({ post, onUpdate }: { post: Post; onUpdate: () => void }) {
  const { user } = useAuthStore();
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes_count);

  useEffect(() => {
    checkIfLiked();
  }, [user, post.id]);

  async function checkIfLiked() {
    if (!user) return;

    const { data } = await supabase
      .from('likes')
      .select('id')
      .eq('post_id', post.id)
      .eq('user_id', user.id)
      .single();

    setIsLiked(!!data);
  }

  async function handleLike() {
    if (!user) return;

    if (isLiked) {
      await supabase
        .from('likes')
        .delete()
        .eq('post_id', post.id)
        .eq('user_id', user.id);
      
      setIsLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      await supabase.from('likes').insert({
        post_id: post.id,
        user_id: user.id,
      });
      
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    }
  }

  async function handleDelete() {
    if (!confirm('Delete this post?')) return;

    await supabase.from('posts').delete().eq('id', post.id);
    onUpdate();
  }

  const isOwnPost = user?.id === post.user_id;

  return (
    <div className="bg-gray-900 rounded-lg p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <Link href={`/projects/social-media/profile/${post.user_id}`} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            {post.profiles?.avatar_url ? (
              <img src={post.profiles.avatar_url} alt="" className="w-10 h-10 rounded-full" />
            ) : (
              <span className="text-white">{post.profiles?.username?.[0]?.toUpperCase()}</span>
            )}
          </div>
          <div>
            <p className="text-white font-semibold">{post.profiles?.full_name || post.profiles?.username}</p>
            <p className="text-gray-400 text-sm">@{post.profiles?.username}</p>
          </div>
        </Link>
        {isOwnPost && (
          <button onClick={handleDelete} className="text-red-400 hover:text-red-300 text-sm">
            Delete
          </button>
        )}
      </div>

      <p className="text-white mb-4">{post.content}</p>

      {post.image_url && (
        <img src={post.image_url} alt="" className="w-full rounded-lg mb-4" />
      )}

      <div className="flex items-center gap-6 text-gray-400">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 hover:text-red-400 ${isLiked ? 'text-red-400' : ''}`}
        >
          <span>{isLiked ? '❤️' : '🤍'}</span>
          <span>{likesCount}</span>
        </button>
        <Link href={`/projects/social-media/post/${post.id}`} className="flex items-center gap-2 hover:text-blue-400">
          <span>💬</span>
          <span>{post.comments_count}</span>
        </Link>
      </div>
    </div>
  );
}