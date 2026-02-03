'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/social-store';

export default function InstagramCreatePost({ onPostCreated }: { onPostCreated: () => void }) {
  const { user } = useAuthStore();
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user || (!content.trim() && !image)) return;

    setLoading(true);

    let imageUrl = null;
    let videoUrl = null;

    // Upload media if present
    if (image) {
      const fileExt = image.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const isVideo = image.type.startsWith('video/');
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('posts')
        .upload(fileName, image);

      if (uploadError) {
        alert(uploadError.message || 'Error uploading media');
        setLoading(false);
        return;
      }

      if (uploadData) {
        const { data: { publicUrl } } = supabase.storage
          .from('posts')
          .getPublicUrl(fileName);
        
        if (isVideo) {
          videoUrl = publicUrl;
        } else {
          imageUrl = publicUrl;
        }
      }
    }

    // Create post
    const { error } = await supabase.from('posts').insert({
      user_id: user.id,
      content: content.trim(),
      image_url: imageUrl,
      video_url: videoUrl,
    });

    if (error) {
      console.error('Error creating post:', error);
      if (error.message?.includes('video_url')) {
        alert('Missing video_url column in Supabase. Add it, then try again.');
      } else {
        alert(error.message || 'Error creating post');
      }
    } else {
      setContent('');
      setImage(null);
      setPreview(null);
      setShowModal(false);
      onPostCreated();
    }

    setLoading(false);
  }

  if (!user) return null;

  return (
    <>
      {/* Create Post Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-20 md:bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition z-40"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-gray-900 font-semibold">Create new post</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4">
              {/* Image Upload */}
              <div className="mb-4">
                {preview ? (
                  <div className="relative">
                    {image?.type.startsWith('video/') ? (
                      <video
                        src={preview}
                        className="w-full aspect-square object-cover rounded-lg bg-black"
                        controls
                        playsInline
                      />
                    ) : (
                      <img src={preview} alt="Preview" className="w-full aspect-square object-cover rounded-lg" />
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setImage(null);
                        setPreview(null);
                      }}
                      className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <label className="w-full aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400">
                    <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-500 text-sm">Click to upload photo or video</span>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleImageSelect}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Caption */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a caption..."
                className="w-full bg-gray-50 text-gray-900 rounded-lg p-4 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows={4}
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || (!content.trim() && !image)}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sharing...' : 'Share'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}