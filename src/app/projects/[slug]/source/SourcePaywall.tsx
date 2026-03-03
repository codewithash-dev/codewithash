"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

function DownloadButton({ slug }: { slug: string }) {
  const [downloading, setDownloading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleDownload() {
    setDownloading(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/source-download?slug=${encodeURIComponent(slug)}`, {
        credentials: "include",
        redirect: "manual",
      });
      if (res.status === 302) {
        const url = res.headers.get("Location");
        if (url) window.location.href = url;
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.message) setMessage(data.message);
      else setMessage(data.error || "Download unavailable.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        className="btn-animate inline-flex items-center justify-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-fuchsia-500 disabled:opacity-60"
      >
        {downloading ? "Preparing…" : "Download source code"}
      </button>
      {message && (
        <p className="text-sm text-amber-200/90">{message}</p>
      )}
    </div>
  );
}

type AccessState = {
  hasAccess: boolean;
  isMember?: boolean;
  canPurchase: boolean;
  projectTitle?: string;
  error?: string;
} | null;

type Props = { project: Project };

export default function SourcePaywall({ project }: Props) {
  const [state, setState] = useState<AccessState>(null);
  const [loading, setLoading] = useState(true);
  const [buyLoading, setBuyLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    const slug = project.slug;
    const url = sessionId
      ? `/api/source/access?slug=${encodeURIComponent(slug)}&session_id=${encodeURIComponent(sessionId)}`
      : `/api/source/access?slug=${encodeURIComponent(slug)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data: AccessState) => setState(data))
      .catch(() => setState({ hasAccess: false, canPurchase: false }))
      .finally(() => setLoading(false));
  }, [project.slug]);

  async function handleBuy() {
    setBuyLoading(true);
    try {
      const res = await fetch("/api/checkout/source-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectSlug: project.slug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL returned");
    } catch (e) {
      setState((s) => ({
        ...s,
        hasAccess: false,
        canPurchase: s?.canPurchase ?? false,
        error: e instanceof Error ? e.message : "Something went wrong",
      }));
    } finally {
      setBuyLoading(false);
    }
  }

  if (loading || state === null) {
    return (
      <div className="rounded-xl border border-gray-800 bg-[#050816] p-8 text-center text-gray-400">
        Checking access…
      </div>
    );
  }

  if (state.hasAccess) {
    return (
      <div className="space-y-6">
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-emerald-200">
          <p className="font-semibold">You have access to this source code.</p>
          <p className="mt-2 text-sm text-gray-300">
            {state.isMember
              ? "Your membership includes access to this project."
              : "You purchased access to this project."}
          </p>
        </div>
        <div className="rounded-xl border border-gray-800 bg-[#050816] p-6 text-sm text-gray-300">
          <p className="mb-2 font-medium text-white">How to get the code</p>
          <p className="mb-4">
            You&apos;ll receive the full source code with an Installation-guide.txt
            file in the root directory. Use the button below to download.
          </p>
          <DownloadButton slug={project.slug} />
        </div>
        <Link
          href="/projects"
          className="text-sm text-gray-400 hover:text-fuchsia-300"
        >
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {state.error && (
        <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
          {state.error}
        </div>
      )}
      <div className="rounded-xl border border-gray-800 bg-[#050816] p-6">
        <p className="mb-4 text-gray-300">
          Log in as a member for discounted access, or buy this source code
          once.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="btn-animate inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-gray-800/80 px-4 py-2.5 text-sm font-medium text-white hover:border-fuchsia-500/80 hover:bg-gray-800"
          >
            Login as member
          </Link>
          {state.canPurchase ? (
            <button
              type="button"
              onClick={handleBuy}
              disabled={buyLoading}
              className="btn-animate inline-flex items-center justify-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-fuchsia-500 disabled:opacity-60"
            >
              {buyLoading ? "Redirecting…" : "Buy source code"}
            </button>
          ) : (
            <span className="rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-gray-500">
              Purchase not yet available for this project
            </span>
          )}
        </div>
      </div>
      <Link
        href="/projects"
        className="text-sm text-gray-400 hover:text-fuchsia-300"
      >
        ← Back to projects
      </Link>
    </div>
  );
}
