'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/social-store';

export default function FollowButton({ userId }: { userId: string }) {
  const { user } = useAuthStore();
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkIfFollowing();
  }, [userId, user]);

  async function checkIfFollowing() {
    if (!user || user.id === userId) return;

    const { data } = await supabase
      .from('follows')
      .select('id')
      .eq('follower_id', user.id)
      .eq('following_id', userId)
      .single();

    setIsFollowing(!!data);
  }

  async function handleFollow() {
    if (!user) return;
    setLoading(true);

    if (isFollowing) {
      await supabase
        .from('follows')
        .delete()
        .eq('follower_id', user.id)
        .eq('following_id', userId);
      
      setIsFollowing(false);
    } else {
      await supabase.from('follows').insert({
        follower_id: user.id,
        following_id: userId,
      });
      
      setIsFollowing(true);
    }

    setLoading(false);
  }

  if (!user || user.id === userId) return null;

  return (
    <button
      onClick={handleFollow}
      disabled={loading}
      className={`px-6 py-2 rounded-lg font-semibold transition ${
        isFollowing
          ? 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
          : 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white hover:opacity-90'
      } disabled:opacity-50`}
    >
      {loading ? '...' : isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
}