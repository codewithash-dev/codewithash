'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/social-store';
import { useRouter } from 'next/navigation';

export default function SocialNavbar() {
  const { user, setUser } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      setUser(profile);
    }
    setLoading(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/projects/social-media');
  }

  if (loading) return null;

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/projects/social-media/feed" className="text-2xl font-bold">
            SocialApp
          </Link>
          <div className="flex gap-6 items-center">
            {user ? (
              <>
                <Link href="/projects/social-media/feed" className="hover:text-gray-300">
                  Feed
                </Link>
                <Link href={`/projects/social-media/profile/${user.id}`} className="hover:text-gray-300">
                  Profile
                </Link>
                <button onClick={handleSignOut} className="hover:text-gray-300">
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/projects/social-media" className="hover:text-gray-300">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}