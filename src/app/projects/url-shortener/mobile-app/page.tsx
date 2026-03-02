 "use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PreviewLink = {
  id: number;
  original: string;
  short: string;
  copied: boolean;
};

export default function UrlShortenerMobileAppPage() {
  const [previewLinks, setPreviewLinks] = useState<PreviewLink[]>([
    {
      id: 1,
      original: "https://www.frontendmentor.io",
      short: "https://rel.ink/k4lKyk",
      copied: true,
    },
    {
      id: 2,
      original: "https://twitter.com/frontendmentor",
      short: "https://rel.ink/gxOXp9",
      copied: false,
    },
  ]);
  const [copiedToast, setCopiedToast] = useState<string | null>(null);

  const phoneScrollRef = useRef<HTMLDivElement | null>(null);
  const scrollDownRef = useRef(true);

  useEffect(() => {
    const el = phoneScrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const node = phoneScrollRef.current;
      if (!node) return;
      const max = node.scrollHeight - node.clientHeight;
      const nextTop = scrollDownRef.current ? max : 0;
      node.scrollTo({ top: nextTop, behavior: "smooth" });
      scrollDownRef.current = !scrollDownRef.current;
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  function handlePreviewCopy(id: number, value: string) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    setPreviewLinks((prev) =>
      prev.map((link) =>
        link.id === id
          ? { ...link, copied: true }
          : { ...link, copied: false }
      )
    );
    setCopiedToast("Copied to clipboard");
    window.setTimeout(() => setCopiedToast(null), 1800);
  }

  return (
    <main className="relative min-h-screen bg-white text-slate-900 pt-24 pb-16 px-4 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        {/* Breadcrumb */}
        <p className="text-xs sm:text-sm text-slate-500">
          <Link
            href="/projects"
            className="underline-offset-4 hover:text-slate-900 hover:underline transition"
          >
            Projects
          </Link>{" "}
          <span className="mx-1">/</span>
          <Link
            href="/projects/url-shortener"
            className="underline-offset-4 hover:text-slate-900 hover:underline transition"
          >
            URL Shortener (Web)
          </Link>{" "}
          <span className="mx-1">/</span>
          <span className="text-slate-700">Mobile App</span>
        </p>

        {/* Header + actions */}
        <section>
          <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold">
            URL Shortener Mobile App
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-slate-600">
            A mobile-first version of the Shortly URL shortener experience,
            built with React Native and Expo, using the same brand, layout, and
            interactions as the web landing page.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/codewithash-dev/url-shortener"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animate inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-900 transition"
            >
              View mobile app code
            </a>
            <Link
              href="/projects/url-shortener"
              className="btn-animate inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              View web landing page
            </Link>
          </div>
        </section>

        {/* Layout: description + phone preview */}
        <section className="grid gap-10 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-lg font-semibold">What the app includes</h2>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600">
                <li>Shorten any URL with validation and inline error states.</li>
                <li>Persisted list of shortened links with one-tap copy.</li>
                <li>Brand-consistent colors, typography, and spacing from Shortly.</li>
                <li>Responsive layout tuned for common mobile screen sizes.</li>
                <li>Same section flow as the web page: hero, shorten form, results, stats, and CTA.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold">Tech stack</h2>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {[
                  "React Native",
                  "Expo",
                  "TypeScript",
                  "React Navigation",
                  "Context / hooks",
                  "REST API (shrtco.de)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold">Project focus</h2>
              <p className="text-sm sm:text-base text-slate-600">
                This mobile app is designed as a 1:1 translation of the Frontend
                Mentor Shortly design into a native experience. It emphasizes
                pixel-perfect UI, clean component structure, and reusable logic
                for link management that can be shared between web and mobile
                versions.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center">
            <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[2.2rem] border border-slate-200 bg-[#f0f1f6] shadow-2xl">
              <div
                ref={phoneScrollRef}
                className="absolute inset-0 overflow-y-auto scroll-smooth px-6 pt-10 pb-10"
              >
                <div className="flex flex-col gap-4">
                  <Image
                    src="/url-shortener/logo.svg"
                    alt="Shortly"
                    width={121}
                    height={33}
                    className="h-7 w-auto self-center"
                  />
                  <div className="rounded-xl bg-[#3b3054] px-3 py-3 text-xs text-white shadow-lg">
                    <p className="mb-1 text-[0.7rem] font-semibold">
                      Shorten a link here…
                    </p>
                    <div className="h-7 rounded-md bg-white/95" />
                    <div className="mt-2 flex justify-end">
                      <div className="h-7 w-20 rounded-md bg-[#2acfcf]" />
                    </div>
                  </div>

                  <div className="space-y-3 text-[0.7rem]">
                    {previewLinks.map((link, index) => (
                      <div
                        key={link.id}
                        className={`rounded-md bg-white px-3 py-2 shadow-sm ${
                          index === 1 ? "opacity-80" : ""
                        }`}
                      >
                        <div className="truncate text-slate-700">
                          {link.original}
                        </div>
                        <div className="mt-1 flex items-center justify-between gap-2 border-t border-slate-100 pt-2">
                          <span className="text-[#2acfcf]">{link.short}</span>
                          <button
                            type="button"
                            onClick={() => handlePreviewCopy(link.id, link.short)}
                            className={`rounded-md px-3 py-1 text-white transition ${
                              link.copied
                                ? "bg-[#3b3054]"
                                : "bg-[#2acfcf] hover:bg-[#9be3e2] hover:text-slate-900"
                            }`}
                          >
                            {link.copied ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-24" />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] border border-black/5" />
            </div>
          </div>
        </section>
        {copiedToast && (
          <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center">
            <div className="rounded-full bg-black/90 px-4 py-2 text-xs font-medium text-white shadow-lg">
              {copiedToast}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

