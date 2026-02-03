/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Story } from '@/types/social';
import { useAuthStore } from '@/lib/social-store';

export default function InstagramStories() {
  const { user } = useAuthStore();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [media, setMedia] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchStories();
  }, []);

  async function fetchStories() {
    const now = new Date().toISOString();
    const { data } = await supabase
      .from('stories')
      .select('*, profiles(*)')
      .gt('expires_at', now)
      .order('created_at', { ascending: false });

    setStories(data || []);
    setLoading(false);
  }

  function handleMediaSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  async function handleCreateStory(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !media) return;

    setSaving(true);
    const isVideo = media.type.startsWith('video/');
    const fileExt = media.name.split('.').pop();
    const fileName = `${user.id}-${Date.now()}.${fileExt}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('stories')
      .upload(fileName, media);

    if (uploadError) {
      alert(uploadError.message || 'Error uploading story');
      setSaving(false);
      return;
    }

    if (!uploadData) {
      alert('Upload failed');
      setSaving(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('stories')
      .getPublicUrl(fileName);

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    const { error } = await supabase.from('stories').insert({
      user_id: user.id,
      media_url: publicUrl,
      media_type: isVideo ? 'video' : 'image',
      expires_at: expiresAt,
    });

    if (error) {
      alert(error.message || 'Error creating story');
    } else {
      setMedia(null);
      setPreview(null);
      setShowModal(false);
      fetchStories();
    }

    setSaving(false);
  }

  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
      <button
        onClick={() => setShowModal(true)}
        className="flex flex-col items-center gap-1 flex-shrink-0"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full p-[2px]">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <span className="text-gray-900 text-lg">+</span>
          </div>
        </div>
        <span className="text-gray-700 text-xs">Your story</span>
      </button>

      {!loading &&
        stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full p-[2px]">
              <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                {story.media_type === 'video' ? (
                  <video
                    src={story.media_url}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                ) : (
                  <img src={story.media_url} alt="" className="w-full h-full object-cover" />
                )}
              </div>
            </div>
            <span className="text-gray-700 text-xs">
              {story.profiles?.username || 'story'}
            </span>
          </div>
        ))}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-gray-900 font-semibold">Add story</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-gray-900">
                ✕
              </button>
            </div>
            <form onSubmit={handleCreateStory} className="p-4">
              <div className="mb-4">
                {preview ? (
                  <div className="relative">
                    {media?.type.startsWith('video/') ? (
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
                        setMedia(null);
                        setPreview(null);
                      }}
                      className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <label className="w-full aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400">
                    <span className="text-gray-500 text-sm">Click to upload photo or video</span>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleMediaSelect}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <button
                type="submit"
                disabled={saving || !media}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-60"
              >
                {saving ? 'Sharing...' : 'Share story'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
