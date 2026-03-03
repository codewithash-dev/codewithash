"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SupportShell from "@/app/components/SupportShell";

type Tier = "supporter" | "platinum";

export default function MembershipPage() {
  const [joining, setJoining] = useState<Tier | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("success");
    if (s === "supporter" || s === "platinum") setSuccess(s);
  }, []);

  async function handleJoin(tier: Tier) {
    setJoining(tier);
    try {
      const res = await fetch("/api/checkout/membership-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL returned");
    } catch (e) {
      setJoining(null);
      alert(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return (
    <SupportShell active="membership">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
            Become a member
          </h1>
          <p className="text-sm text-gray-600">
            Support Code With Ash and get exclusive benefits, including discounted source code and more.
          </p>
        </div>

        {success && (
          <div className="rounded-xl border border-emerald-400/60 bg-emerald-50 px-4 py-3 mb-8 text-sm text-emerald-800 text-center">
            {success === "supporter"
              ? "Thanks for joining as a Supporter! You now have access to member discounts."
              : "Thanks for going Platinum! You have lifetime access to member benefits and free source code."}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col shadow-sm">
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-yellow-600">
                Monthly
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-1">Supporter</h2>
              <p className="text-2xl font-semibold text-gray-900 mt-2">$8</p>
              <p className="text-sm text-gray-500">/month</p>
            </div>
            <ul className="text-sm text-gray-700 space-y-2 flex-1">
              <li>Support on a monthly basis</li>
              <li>Unlock exclusive posts and updates</li>
              <li>Free & discounted source code</li>
            </ul>
            <button
              type="button"
              onClick={() => handleJoin("supporter")}
              disabled={!!joining}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-black disabled:opacity-60 transition"
            >
              {joining === "supporter" ? "Redirecting…" : "Join"}
            </button>
          </div>

          <div className="rounded-2xl border border-yellow-500 bg-yellow-50 p-6 flex flex-col shadow-sm">
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-yellow-700">
                Lifetime access
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-1">Platinum</h2>
              <p className="text-2xl font-semibold text-gray-900 mt-2">$250</p>
              <p className="text-sm text-gray-600">/one-time</p>
            </div>
            <ul className="text-sm text-gray-800 space-y-2 flex-1">
              <li>Lifetime discount on shop items</li>
              <li>Lifetime access to exclusive content</li>
              <li>Access to full library</li>
              <li>Early access to new projects</li>
              <li>
                <strong className="text-gray-900">Free source code (all projects)</strong>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => handleJoin("platinum")}
              disabled={!!joining}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-yellow-600 bg-yellow-500/10 py-3 text-sm font-semibold text-yellow-800 hover:bg-yellow-500/20 disabled:opacity-60 transition"
            >
              {joining === "platinum" ? "Redirecting…" : "Join"}
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          <Link href="/shop" className="text-gray-700 hover:underline">
            Browse the shop
          </Link>
          {" · "}
          <Link href="/projects" className="text-gray-700 hover:underline">
            View all projects
          </Link>
        </p>
      </div>
    </SupportShell>
  );
}
