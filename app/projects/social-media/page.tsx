'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function SocialLanding() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (!error && data.user) {
        await supabase.from('profiles').insert({
          id: data.user.id,
          username: username.toLowerCase(),
          full_name: fullName,
        });

        router.push('/projects/social-media/feed');
      } else {
        alert(error?.message || 'Error signing up');
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error && data.user) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('id, username')
          .eq('id', data.user.id)
          .single();

        if (profileError || !profile) {
          const baseUsername =
            email.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '').toLowerCase() ||
            `user${data.user.id.slice(0, 6)}`;
          let usernameCandidate = baseUsername;

          const insertProfile = async (usernameValue: string) =>
            supabase.from('profiles').insert({
              id: data.user.id,
              username: usernameValue,
              full_name: fullName || null,
            });

          let insertResult = await insertProfile(usernameCandidate);

          if (insertResult.error) {
            usernameCandidate = `${baseUsername}${data.user.id.slice(0, 4)}`;
            insertResult = await insertProfile(usernameCandidate);
          }

          if (insertResult.error) {
            alert(insertResult.error.message || 'Error creating profile');
            setLoading(false);
            return;
          }
        }

        router.push('/projects/social-media/feed');
      } else {
        alert(error?.message || 'Error signing in');
      }
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-5xl font-bold text-white text-center mb-2">SocialApp</h1>
        <p className="text-white/80 text-center mb-8">Connect with friends and share moments</p>

        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-white/60">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 rounded-lg font-semibold ${
                !isSignUp
                  ? 'bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 rounded-lg font-semibold ${
                isSignUp
                  ? 'bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {isSignUp && (
              <>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dd2a7b]"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dd2a7b]"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dd2a7b]"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dd2a7b]"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-60"
            >
              {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-white/80 mt-6 text-sm">
          Demo project • Part of Code With Ash portfolio
        </p>
      </div>
    </div>
  );
}
