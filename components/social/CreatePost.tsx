'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/social-store';

export default function CreatePost({ onPostCreated }: { onPostCreated: () => void }) {
  const { user } = useAuthStore();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !content.trim()) return;

    setLoading(true);

    const { error } = await supabase.from('posts').insert({
      user_id: user.id,
      content: content.trim(),
    });

    if (error) {
      console.error('Error creating post:', error);
      alert('Error creating post');
    } else {
      setContent('');
      onPostCreated();
    }

    setLoading(false);
  }

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-6 mb-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full bg-gray-800 text-white rounded-lg p-4 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
      />
      <button
        type="submit"
        disabled={loading || !content.trim()}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed"
      >
        {loading ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
}