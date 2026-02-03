'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/social-store';
import { Comment } from '@/types/social';
import Link from 'next/link';

export default function CommentSection({ postId }: { postId: string }) {
  const { user } = useAuthStore();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  async function fetchComments() {
    const { data } = await supabase
      .from('comments')
      .select('*, profiles(*)')
      .eq('post_id', postId)
      .order('created_at', { ascending: false });

    setComments(data || []);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    setLoading(true);

    const { error } = await supabase.from('comments').insert({
      post_id: postId,
      user_id: user.id,
      content: newComment.trim(),
    });

    if (!error) {
      setNewComment('');
      fetchComments();
    }

    setLoading(false);
  }

  async function handleDelete(commentId: string) {
    if (!confirm('Delete this comment?')) return;

    await supabase.from('comments').delete().eq('id', commentId);
    fetchComments();
  }

  return (
    <div className="mt-6">
      <h3 className="text-gray-900 text-xl font-bold mb-4">Comments</h3>

      {user && (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full bg-gray-50 text-gray-900 rounded-lg p-4 mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-200"
            rows={2}
          />
          <button
            type="submit"
            disabled={loading || !newComment.trim()}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-60"
          >
            {loading ? 'Posting...' : 'Comment'}
          </button>
        </form>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <Link href={`/projects/social-media/profile/${comment.user_id}`} className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full p-[2px]">
                  <span className="w-full h-full bg-white rounded-full flex items-center justify-center text-gray-900 text-sm">
                    {comment.profiles?.username?.[0]?.toUpperCase()}
                  </span>
                </div>
                <span className="text-gray-900 font-semibold">{comment.profiles?.username}</span>
              </Link>
              {user?.id === comment.user_id && (
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              )}
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-gray-500 text-center py-8">No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
}