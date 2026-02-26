"use client";

import { useState } from "react";
import Image from "next/image";
import type { Post } from "./data";
import { MOCK_COMMENTS } from "./data";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const comments = MOCK_COMMENTS[post.id] ?? [];

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <article className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <header className="flex items-center gap-3 px-4 py-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
          <Image
            src={post.author.avatar}
            alt={post.author.displayName}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-slate-900 truncate">{post.author.displayName}</p>
          <p className="text-xs text-slate-500 truncate">@{post.author.username}</p>
        </div>
        <span className="text-xs text-slate-400">{post.timestamp}</span>
      </header>
      <div className="relative aspect-square w-full bg-slate-100">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 600px"
        />
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center gap-4 mb-2">
          <button
            type="button"
            onClick={toggleLike}
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition"
            aria-label={liked ? "Unlike" : "Like"}
          >
            <span className={liked ? "text-rose-500" : ""}>
              {liked ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
            </span>
            <span className="text-sm font-medium">{likeCount}</span>
          </button>
          <button
            type="button"
            onClick={() => setShowComments((prev) => !prev)}
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {post.comments}
          </button>
        </div>
        <p className="text-sm text-slate-800">
          <span className="font-semibold text-slate-900">{post.author.username}</span>{" "}
          {post.caption}
        </p>
        {showComments && comments.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
            {comments.map((c) => (
              <p key={c.id} className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">{c.author.username}</span>{" "}
                <span className="text-slate-600">{c.text}</span>
                <span className="text-xs text-slate-400 ml-1">{c.timestamp}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
