"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTimes, FaShare, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function CopyIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

export default function ProductDetailHeader() {
  const [shareOpen, setShareOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    }
    if (shareOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [shareOpen]);

  const url = typeof window !== "undefined" ? window.location.href : "";

  function copyLink() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setShareOpen(false);
    }
  }

  function tweet() {
    const text = encodeURIComponent("Code With Ash – Source Code");
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`, "_blank", "noopener,noreferrer");
    setShareOpen(false);
  }

  function facebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    setShareOpen(false);
  }

  return (
    <header className="flex items-center justify-between w-full mb-6">
      <div className="flex items-center gap-3">
        <Link
          href="/shop"
          className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition"
          aria-label="Close / Back to shop"
        >
          <FaTimes className="h-5 w-5" />
        </Link>
        <Link
          href="/shop"
          className="flex items-center gap-3 rounded-lg hover:opacity-90 transition"
        >
          <Image
            src="/images/ashley-profile.png"
            alt=""
            width={36}
            height={36}
            className="rounded-lg border border-gray-200 object-cover aspect-square"
          />
          <span className="text-sm font-semibold text-gray-900">Code With Ash</span>
        </Link>
      </div>
      <div className="relative" ref={shareRef}>
        <button
          type="button"
          onClick={() => setShareOpen((o) => !o)}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          aria-expanded={shareOpen}
          aria-haspopup="true"
        >
          <FaShare className="h-4 w-4" aria-hidden />
          Share
        </button>
        {shareOpen && (
          <div className="absolute right-0 top-full mt-1 z-50 min-w-[180px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            <button
              type="button"
              onClick={copyLink}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
            >
              <CopyIcon />
              Copy link
            </button>
            <button
              type="button"
              onClick={tweet}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FaXTwitter className="h-4 w-4 shrink-0" aria-hidden />
              Tweet
            </button>
            <button
              type="button"
              onClick={facebook}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FaFacebook className="h-4 w-4 shrink-0" aria-hidden />
              Share
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
