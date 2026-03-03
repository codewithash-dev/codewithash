"use client";

import { useState } from "react";

export default function ShopProductActions({ projectSlug }: { projectSlug: string }) {
  const [loading, setLoading] = useState(false);

  async function handleAddToCart() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout/source-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectSlug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL returned");
    } catch (e) {
      setLoading(false);
      alert(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={loading}
      className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black disabled:opacity-60 transition"
    >
      {loading ? "Redirecting…" : "Add to cart"}
    </button>
  );
}
