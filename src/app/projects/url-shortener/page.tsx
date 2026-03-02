"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

type ShortLink = {
  id: number;
  original: string;
  short: string;
  copied: boolean;
};

export default function UrlShortenerLandingPage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [links, setLinks] = useState<ShortLink[]>([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = url.trim();

    if (!trimmed) {
      setError("Please add a link");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      let shortUrl: string | null = null;

      try {
        const res = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(trimmed)}`
        );

        if (res.ok) {
          const data = (await res.json()) as any;
          shortUrl =
            data?.result?.full_short_link ||
            data?.result?.short_link ||
            null;
        }
      } catch {
        // Swallow network errors and fall back to a mock URL
      }

      if (!shortUrl) {
        const token = Math.random().toString(36).slice(2, 8);
        shortUrl = `https://shrt.ly/${token}`;
      }

      setLinks((prev) => [
        { id: Date.now(), original: trimmed, short: shortUrl!, copied: false },
        ...prev,
      ]);
      setUrl("");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCopy(id: number, value: string) {
    navigator.clipboard?.writeText(value).catch(() => {});
    setLinks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, copied: true } : { ...item, copied: false }
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#f0f1f6] text-slate-900 pt-20 pb-16">
      {/* Page shell */}
      <div className="mx-auto flex max-w-5xl flex-col px-4 sm:px-6">
        {/* Header / nav */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <a href="/projects/url-shortener" className="flex items-center gap-2">
            <Image src="/url-shortener/logo.svg" alt="Shortly" width={121} height={33} className="h-8 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-500 md:flex">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#resources" className="hover:text-slate-900">
              Resources
            </a>
            <span className="mx-3 h-4 w-px bg-slate-200" />
            <button className="text-slate-500 hover:text-slate-900">
              Login
            </button>
            <button className="rounded-full bg-[#2acfcf] px-5 py-2 text-white shadow-sm hover:bg-[#9be3e2] hover:text-slate-900 transition">
              Sign Up
            </button>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              More than just{" "}
              <span className="block">shorter links</span>
            </h1>
            <p className="text-base text-slate-500 sm:text-lg">
              Build your brand’s recognition with each click. Gain detailed
              insights on how your links are performing.
            </p>
            <button className="rounded-full bg-[#2acfcf] px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#9be3e2] hover:text-slate-900 transition">
              Get Started
            </button>
          </div>
          <div className="relative flex items-center justify-center min-h-[280px]">
            <Image src="/url-shortener/illustration-working.svg" alt="" width={500} height={400} className="w-full max-w-sm h-auto object-contain" priority />
          </div>
        </section>

        {/* Shorten form */}
        <section className="-mt-16 mb-16">
          <div className="rounded-xl bg-[#3b3054] bg-[url('/url-shortener/bg-shorten-mobile.svg')] md:bg-[url('/url-shortener/bg-shorten-desktop.svg')] bg-cover bg-right-top px-4 py-6 shadow-lg sm:px-8 sm:py-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row sm:items-start"
            >
              <div className="flex-1">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Shorten a link here..."
                  className={`w-full rounded-md px-3 py-3 text-sm outline-none placeholder:text-slate-400 ${
                    error
                      ? "border-2 border-[#f46262] text-[#f46262]"
                      : "border border-transparent"
                  }`}
                />
                {error && (
                  <p className="mt-1 text-xs italic text-[#f46262]">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 rounded-md bg-[#2acfcf] px-6 text-sm font-semibold text-white shadow-md hover:bg-[#9be3e2] hover:text-slate-900 transition disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Shortening…" : "Shorten It!"}
              </button>
            </form>
          </div>
        </section>

        {/* Shortened links list */}
        {links.length > 0 && (
          <section className="mb-16 space-y-4">
            {links.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-md bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="truncate text-sm text-slate-900">
                  {item.original}
                </p>
                <div className="flex flex-col gap-3 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:border-none sm:pt-0">
                  <a
                    href={item.short}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#2acfcf]"
                  >
                    {item.short}
                  </a>
                  <button
                    onClick={() => handleCopy(item.id, item.short)}
                    className={`rounded-md px-6 py-2 text-sm font-semibold text-white transition ${
                      item.copied
                        ? "bg-[#3b3054]"
                        : "bg-[#2acfcf] hover:bg-[#9be3e2] hover:text-slate-900"
                    }`}
                  >
                    {item.copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Advanced statistics */}
        <section id="features" className="mb-20 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Advanced Statistics
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-sm text-slate-500 sm:text-base">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="relative grid gap-10 md:grid-cols-3 md:text-left">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-1 w-full -translate-x-1/2 -translate-y-1/2 bg-[#2acfcf] md:block" />
            {[
              { title: "Brand Recognition", body: "Boost your brand recognition with each click. Generic links don’t mean a thing.", icon: "/url-shortener/icon-brand-recognition.svg" },
              { title: "Detailed Records", body: "Gain insights into who is clicking your links. Knowing when and where people engage helps inform decisions.", icon: "/url-shortener/icon-detailed-records.svg" },
              { title: "Fully Customizable", body: "Improve brand awareness and content discoverability through customizable links.", icon: "/url-shortener/icon-fully-customizable.svg" },
            ].map((card, idx) => (
              <article
                key={card.title}
                className={`relative rounded-md bg-white px-6 pb-8 pt-12 shadow-sm ${
                  idx === 1 ? "md:mt-6" : idx === 2 ? "md:mt-12" : ""
                }`}
              >
                <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-[#3b3054] md:left-8 md:translate-x-0">
                  <Image src={card.icon} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Boost CTA */}
        <section
          id="pricing"
          className="mb-16 rounded-lg bg-[#3b3054] bg-[url('/url-shortener/bg-boost-mobile.svg')] md:bg-[url('/url-shortener/bg-boost-desktop.svg')] bg-cover bg-center py-12 text-center text-white"
        >
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Boost your links today
          </h2>
          <button className="rounded-full bg-[#2acfcf] px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#9be3e2] hover:text-slate-900 transition">
            Get Started
          </button>
        </section>

        {/* Footer */}
        <footer
          id="resources"
          className="mt-auto flex flex-col justify-between gap-10 border-t border-slate-200 pt-10 text-center text-sm text-slate-500 md:flex-row md:text-left"
        >
          <p className="font-bold text-slate-900">Shortly</p>
          <div className="flex flex-wrap justify-center gap-8 md:justify-start">
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Features</p>
              <p>Link Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Resources</p>
              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Company</p>
              <p>About</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Facebook"><Image src="/url-shortener/icon-facebook.svg" alt="" width={24} height={24} /></a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Twitter"><Image src="/url-shortener/icon-twitter.svg" alt="" width={24} height={24} /></a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Pinterest"><Image src="/url-shortener/icon-pinterest.svg" alt="" width={24} height={24} /></a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram"><Image src="/url-shortener/icon-instagram.svg" alt="" width={24} height={24} /></a>
          </div>
        </footer>
      </div>
    </main>
  );
}

