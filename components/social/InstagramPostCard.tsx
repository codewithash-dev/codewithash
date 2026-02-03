'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Post } from '@/types/social';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/social-store';

export default function InstagramPostCard({ post, onUpdate }: { post: Post; onUpdate: () => void }) {
  const { user } = useAuthStore();
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes_count);
  const [showComments, setShowComments] = useState(false);
  const mediaUrl = post.image_url;
  const isVideo = mediaUrl ? /\.(mp4|mov|webm|ogg)(\?|$)/i.test(mediaUrl) : false;

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
    <div className="bg-white border border-gray-200 rounded-sm mb-6 max-w-[470px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <Link href={`/projects/social-media/profile/${post.user_id}`} className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full p-[2px]">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="text-gray-900 text-sm">{post.profiles?.username?.[0]?.toUpperCase()}</span>
            </div>
          </div>
          <span className="text-gray-900 font-semibold text-sm">{post.profiles?.username}</span>
        </Link>
        {isOwnPost && (
          <button onClick={handleDelete} className="text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Image */}
      {mediaUrl && (
        <>
          {isVideo ? (
            <video
              src={mediaUrl}
              className="w-full aspect-square object-cover bg-black"
              controls
              playsInline
            />
          ) : (
            <img src={mediaUrl} alt="" className="w-full aspect-square object-cover" />
          )}
        </>
      )}

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={handleLike} className="hover:text-gray-500">
            {isLiked ? (
              <svg className="w-7 h-7 text-red-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ) : (
              <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            )}
          </button>
          <Link href={`/projects/social-media/post/${post.id}`}>
            <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
          <button className="text-gray-800 hover:text-gray-500">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>

        {/* Likes */}
        <p className="text-gray-900 font-semibold text-sm mb-2">{likesCount} likes</p>

        {/* Caption */}
        <p className="text-gray-900 text-sm">
          <Link href={`/projects/social-media/profile/${post.user_id}`} className="font-semibold mr-2 text-gray-900">
            {post.profiles?.username}
          </Link>
          {post.content}
        </p>

        {/* Comments count */}
        {post.comments_count > 0 && (
          <Link href={`/projects/social-media/post/${post.id}`} className="text-gray-500 text-sm mt-1 block">
            View all {post.comments_count} comments
          </Link>
        )}

        {/* Timestamp */}
        <p className="text-gray-400 text-xs mt-1">
          {new Date(post.created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}