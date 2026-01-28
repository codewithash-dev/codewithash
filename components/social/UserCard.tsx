import Link from 'next/link';
import { Profile } from '@/types/social';

export default function UserCard({ profile }: { profile: Profile }) {
  return (
    <Link
      href={`/projects/social-media/profile/${profile.id}`}
      className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
          {profile.avatar_url ? (
            <img src={profile.avatar_url} alt="" className="w-12 h-12 rounded-full" />
          ) : (
            <span className="text-white text-lg">{profile.username[0].toUpperCase()}</span>
          )}
        </div>
        <div>
          <p className="text-white font-semibold">{profile.full_name || profile.username}</p>
          <p className="text-gray-400 text-sm">@{profile.username}</p>
        </div>
      </div>
      {profile.bio && <p className="text-gray-300 text-sm mt-2">{profile.bio}</p>}
    </Link>
  );
}