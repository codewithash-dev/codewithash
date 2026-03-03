"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function UrlShortenerMobileAppPage() {
  useEffect(() => {
    const DURATION = 14000;

    function scheduleClicks() {
      const btn1 = document.getElementById("btn1");
      const btn2 = document.getElementById("btn2");

      window.setTimeout(() => {
        if (!btn1) return;
        btn1.textContent = "Copied!";
        btn1.classList.add("clicked");
        window.setTimeout(() => {
          btn1.textContent = "Copy";
          btn1.classList.remove("clicked");
        }, 1800);
      }, DURATION * 0.33);

      window.setTimeout(() => {
        if (!btn2) return;
        btn2.textContent = "Copied!";
        btn2.classList.add("clicked");
        window.setTimeout(() => {
          btn2.textContent = "Copy";
          btn2.classList.remove("clicked");
        }, 1800);
      }, DURATION * 0.44);
    }

    scheduleClicks();
    const id = window.setInterval(scheduleClicks, DURATION);
    return () => window.clearInterval(id);
  }, []);

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
            <div className="shortly-shell">
              <h2 className="shortly-title">Shortly</h2>
              <p className="shortly-subtitle">
                Your URL shortener — live mobile preview
              </p>

              <div className="phone-wrap">
                <div className="phone">
                  <div className="phone-notch" />
                  <div className="cursor">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M4 2L4 18L8.5 13.5L11.5 20L13.5 19L10.5 12.5L17 12.5L4 2Z"
                        fill="white"
                        stroke="#35323E"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="click-ripple" />

                  <div className="status-bar">
                    <span>9:41</span>
                    <span>▐▐ ◼</span>
                  </div>

                  <div className="phone-screen">
                    <div className="scroll-content">
                      <div className="s-nav">
                        <div className="s-nav-logo">Shortly</div>
                        <div className="s-hamburger">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>

                      <div className="s-hero">
                        <img
                          className="s-hero-img"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MzMiIGhlaWdodD0iNDgyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeDI9IjEwMCUiIHkxPSI1MCUiIHkyPSI1MCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxODM4NjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxQTdGQzEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii0uMTMlIiB4Mj0iMTAwJSIgeTE9IjUwLjA1NyUiIHkyPSI1MC4wNTclIj48c3RvcCBvZmZzZXQ9IjAlIi8+PHN0b3Agb2Zmc2V0PSI5OSUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMTc2LjA3MiUiIHgyPSIzMTAuMzkzJSIgeTE9Ii01NjYuMDM3JSIgeTI9Ii01MzQuNjI5JSI+PHN0b3Agb2Zmc2V0PSIwJSIvPjxzdG9wIG9mZnNldD0iOTklIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjU4LjkyOCUiIHgyPSI1Mi4yNjklIiB5MT0iLTI1Ny45OTglIiB5Mj0iLTI3Ny4zNDQlIj48c3RvcCBvZmZzZXQ9IjAlIi8+PHN0b3Agb2Zmc2V0PSI5OSUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iMTU2LjA5OSUiIHgyPSI4LjEwOSUiIHkxPSItNjMuMjczJSIgeTI9Ii03Ni4xMTQlIj48c3RvcCBvZmZzZXQ9IjAlIi8+PHN0b3Agb2Zmc2V0PSI5OSUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4MT0iMjM2MS4wNDQlIiB4Mj0iMjE2Mi42NTElIiB5MT0iLTE2NTg0LjkwNiUiIHkyPSItMTY2NDcuNTQ3JSI+PHN0b3Agb2Zmc2V0PSIwJSIvPjxzdG9wIG9mZnNldD0iOTklIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjI0MS4zOTElIiB4Mj0iMTMzLjE0MiUiIHkxPSItNDI2LjA1MiUiIHkyPSItNDEyLjE5NSUiPjxzdG9wIG9mZnNldD0iMCUiLz48c3RvcCBvZmZzZXQ9Ijk5JSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImgiIHgxPSIxMDYuODUlIiB4Mj0iLTM1LjgyMSUiIHkxPSIyMi41MDIlIiB5Mj0iMTkuMjclIj48c3RvcCBvZmZzZXQ9IjAlIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iaSIgeDE9IjE0LjE2OSUiIHgyPSIxMTQuMTY4JSIgeTE9Ii00MS4zMzUlIiB5Mj0iLTQxLjMzNSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxODM4NjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxQTdGQzEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4="
                          alt="Working illustration"
                        />
                        <h1>More than just shorter links</h1>
                        <p>
                          Build your brand&apos;s recognition and get detailed
                          insights on how your links are performing.
                        </p>
                        <button className="s-btn-cyan">Get Started</button>
                      </div>

                      <div className="s-shorten">
                        <div className="s-shorten-box">
                          <input
                            className="s-input"
                            placeholder="Shorten a link here..."
                            readOnly
                          />
                          <div className="s-err">Please add a link</div>
                          <button className="s-shorten-btn">Shorten It!</button>
                        </div>
                      </div>

                      <div className="s-results">
                        <div className="s-result-row">
                          <div className="s-result-orig">
                            https://www.frontendmentor.io
                          </div>
                          <div className="s-result-bottom">
                            <span className="s-result-short">
                              https://rel.ink/k4lKyk
                            </span>
                            <button id="btn1" className="s-copy-btn">
                              Copy
                            </button>
                          </div>
                        </div>
                        <div className="s-result-row">
                          <div className="s-result-orig">
                            https://twitter.com/frontendmentor
                          </div>
                          <div className="s-result-bottom">
                            <span className="s-result-short">
                              https://rel.ink/gxOXp9
                            </span>
                            <button id="btn2" className="s-copy-btn">
                              Copy
                            </button>
                          </div>
                        </div>
                        <div className="s-result-row">
                          <div className="s-result-orig">
                            https://www.linkedin.com/company/frontend...
                          </div>
                          <div className="s-result-bottom">
                            <span className="s-result-short">
                              https://rel.ink/gob3X9
                            </span>
                            <button className="s-copy-btn">Copy</button>
                          </div>
                        </div>
                      </div>

                      <div className="s-stats">
                        <h2>Advanced Statistics</h2>
                        <p className="s-stats-sub">
                          Track how your links are performing across the web with our
                          advanced statistics dashboard.
                        </p>

                        <div className="s-card">
                          <div className="s-card-icon">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzJCRDBEMCIgZD0iTTM2LjQwNiAxMS43MTljLjY0OCAwIDEuMTcyLjUyNCAxLjE3MiAxLjE3MnYyNC43NjVoMS4yNWExLjE3MiAxLjE3MiAwIDExMCAyLjM0NEgxLjE3MmExLjE3MiAxLjE3MiAwIDExMC0yLjM0NGgxLjI1VjI0LjYxYzAtLjY0Ny41MjQtMS4xNzIgMS4xNzItMS4xNzJIOC4yOGMuNjQ4IDAgMS4xNzIuNTI1IDEuMTcyIDEuMTcydjEzLjA0N2gyLjM0NHYtOC4zNmMwLS42NDYuNTI0LTEuMTcxIDEuMTcyLTEuMTcxaDQuNjg3Yy42NDggMCAxLjE3Mi41MjUgMS4xNzIgMS4xNzJ2OC4zNmgyLjM0NFYxOS45MjFjMC0uNjQ3LjUyNC0xLjE3MiAxLjE3Mi0xLjE3Mmg0LjY4N2MuNjQ4IDAgMS4xNzIuNTI1IDEuMTcyIDEuMTcydjE3LjczNGgyLjM0NFYxMi44OTFjMC0uNjQ4LjUyNC0xLjE3MiAxLjE3Mi0xLjE3MnptLTEuMTcyIDIuMzQ0aC0yLjM0M3YyMy41OTNoMi4zNDNWMTQuMDYzem0tOS4zNzUgNy4wM2gtMi4zNDN2MTYuNTYzaDIuMzQzVjIxLjA5NHptLTkuMzc1IDkuMzc2aC0yLjM0M3Y3LjE4N2gyLjM0M1YzMC40N3pNNy4xMSAyNS43OEg0Ljc2NnYxMS44NzVoMi4zNDNWMjUuNzgxek0zNC4wNjIgMGEzLjUyIDMuNTIgMCAwMTMuNTE2IDMuNTE2IDMuNTIgMy41MiAwIDAxLTMuNTE2IDMuNTE1Yy0uNzIgMC0xLjM4OS0uMjE3LTEuOTQ3LS41OWwtNC4wNzMgMy4wNTVhMy41MiAzLjUyIDAgMDEtMy4zNTUgNC41NjcgMy40OTYgMy40OTYgMCAwMS0xLjUxNC0uMzQ0bC00LjY4OSA0LjY4OGMuMjIuNDU5LjM0NC45NzMuMzQ0IDEuNTE1YTMuNTIgMy41MiAwIDAxLTMuNTE1IDMuNTE1IDMuNTIgMy41MiAwIDAxLTMuNDg4LTMuOTQ5bC0zLjQ1LTEuNzI0YTMuNTAzIDMuNTAzIDAgMDEtMi40MzguOTg2IDMuNTIgMy41MiAwIDAxLTMuNTE1LTMuNTE2IDMuNTIgMy41MiAwIDAxMy41MTUtMy41MTUgMy41MiAzLjUyIDAgMDEzLjQ4OCAzLjk0OWwzLjQ1IDEuNzI1YTMuNTAzIDMuNTAzIDAgMDEzLjk1Mi0uNjQzbDQuNjg5LTQuNjg4YTMuNDk2IDMuNDk2IDAgMDEtLjM0NC0xLjUxNSAzLjUyIDMuNTIgMCAwMTMuNTE1LTMuNTE2Yy43MiAwIDEuMzkuMjE4IDEuOTQ4LjU5bDQuMDczLTMuMDU0QTMuNTIgMy41MiAwIDAxMzQuMDYzIDB6bS0xOC43NSAxOC43NWMtLjY0NiAwLTEuMTcxLjUyNi0xLjE3MSAxLjE3MiAwIC42NDYuNTI1IDEuMTcyIDEuMTcxIDEuMTcyLjY0NyAwIDEuMTcyLS41MjYgMS4xNzItMS4xNzIgMC0uNjQ2LS41MjUtMS4xNzItMS4xNzItMS4xNzJ6bS05LjM3NC00LjY4OGMtLjY0NyAwLTEuMTcyLjUyNi0xLjE3MiAxLjE3MiAwIC42NDYuNTI1IDEuMTcyIDEuMTcxIDEuMTcyLjY0NyAwIDEuMTcyLS41MjYgMS4xNzItMS4xNzIgMC0uNjQ2LS41MjUtMS4xNzEtMS4xNzEtMS4xNzF6bTE4Ljc1LTQuNjg3Yy0uNjQ3IDAtMS4xNzIuNTI2LTEuMTcyIDEuMTcyIDAgLjY0Ni41MjUgMS4xNzIgMS4xNzIgMS4xNzIuNjQ2IDAgMS4xNzEtLjUyNiAxLjE3MS0xLjE3MiAwLS42NDYtLjUyNS0xLjE3Mi0xLjE3Mi0xLjE3MnptOS4zNzUtNy4wMzFjLS42NDcgMC0xLjE3Mi41MjYtMS4xNzIgMS4xNzIgMCAuNjQ2LjUyNSAxLjE3MSAxLjE3MiAxLjE3MS42NDYgMCAxLjE3MS0uNTI1IDEuMTcxLTEuMTcxcy0uNTI1LTEuMTcyLTEuMTcyLTEuMTcyeiIvPjwvc3ZnPg=="
                              alt="Brand Recognition"
                            />
                          </div>
                          <h3>Brand Recognition</h3>
                          <p>
                            Boost your brand recognition with each click. Generic
                            links don&apos;t mean a thing. Branded links help instill
                            confidence in your content.
                          </p>
                        </div>

                        <div className="s-connector" />

                        <div className="s-card">
                          <div className="s-card-icon">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzJCRDBEMCIgZD0iTTE5Ljk2OCAwYzExLjAxIDAgMTkuOTY5IDguOTU4IDE5Ljk2OSAxOS45NjhzLTguOTU4IDE5Ljk2OS0xOS45NjkgMTkuOTY5QzguOTU4IDM5LjkzNyAwIDMwLjk3OSAwIDE5Ljk2OCAwIDguOTU4IDguOTU4IDAgMTkuOTY4IDB6bTcuODA1IDM1LjU3OWMtNC44NjMtMi40MDItMTAuNzQ2LTIuNDAyLTE1LjYwOSAwYTE3LjMzOSAxNy4zMzkgMCAwMDcuODA0IDEuODYyIDE3LjM0IDE3LjM0IDAgMDA3LjgwNS0xLjg2MnptLTYuNTU2LTMzLjAyVjYuMjRIMTguNzJWMi41NmExNy4zNjIgMTcuMzYyIDAgMDAtOS40OTIgMy42NTZsMi43OTggMi43OTctMS43NjUgMS43NjVMNy4zNzMgNy44OWExNy40MSAxNy40MSAwIDAwLTQuNjc4IDkuNTgyaDQuNzkzdjIuNDk3SDIuNDk2YzAgNS44MDUgMi44NTcgMTAuOTQzIDcuMjI3IDE0LjEyMiA2LjIxNy0zLjcxNCAxNC4yNzQtMy43MTQgMjAuNDkgMCA0LjM3LTMuMTc5IDcuMjI4LTguMzE3IDcuMjI4LTE0LjEyM2gtNC45OTJ2LTIuNDk2aDQuNzkzYTE3LjQxIDE3LjQxIDAgMDAtNC42NzgtOS41ODJsLTIuODg4IDIuODg4LTEuNzY1LTEuNzY1IDIuNzk4LTIuNzk3YTE3LjM2MiAxNy4zNjIgMCAwMC05LjQ5Mi0zLjY1N3ptLTIuNDM3IDguMjkyYy4zMzItMS4wMzQgMi4wNDUtMS4wMzQgMi4zNzcgMCAuNjM1IDEuOTc4IDMuODA0IDExLjk1NSAzLjgwNCAxNC4xMWE0Ljk5NyA0Ljk5NyAwIDAxLTQuOTkzIDQuOTkyIDQuOTk3IDQuOTk3IDAgMDEtNC45OTItNC45OTJjMC0yLjE1NSAzLjE3LTEyLjEzMiAzLjgwNC0xNC4xMXptMS4xODggNC41NjdjLTEuMjMzIDQuMDQ3LTIuNDk2IDguNTIyLTIuNDk2IDkuNTQzYTIuNSAyLjUgMCAwMDIuNDk2IDIuNDk2IDIuNSAyLjUgMCAwMDIuNDk3LTIuNDk2YzAtMS4wMi0xLjI2My01LjQ5Ni0yLjQ5Ny05LjU0M3oiLz48L3N2Zz4="
                              alt="Detailed Records"
                            />
                          </div>
                          <h3>Detailed Records</h3>
                          <p>
                            Gain insights into who is clicking your links. Knowing when
                            and where people engage helps inform better decisions.
                          </p>
                        </div>

                        <div className="s-connector" />

                        <div className="s-card">
                          <div className="s-card-icon">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHBhdGggZmlsbD0iIzJCRDBEMCIgZD0iTTQ2LjYwOCA2LjAyYS45NzUuOTc1IDAgMDAtLjkyNy0uMDQ3bC03LjYyNCAzLjU5MWE4LjI4MyA4LjI4MyAwIDAwLTQuNzI4IDYuODM3bC0uMTk2IDIuNDM2LTMuOTUgNi41NjF2LTIuODAxYzAtLjAxLS4wMDYtLjAxNy0uMDA2LS4wMjdhLjk3NC45NzQgMCAwMC0uMDQ2LS4yODRsLTEuODM4LTUuNTE0IDMuNzUzLTcuNTA0YS45ODQuOTg0IDAgMDAtLjA5OS0xLjAzbC01LjktNy44NjdhMS4wMTkgMS4wMTkgMCAwMC0xLjU3MyAwTDE3LjU3MyA4LjI0YS45ODQuOTg0IDAgMDAtLjA5MyAxLjAzbDMuNzUzIDcuNTAzLTEuODM4IDUuNTE0YS45NzQuOTc0IDAgMDAtLjA0Ny4yODR2My45NTFsLTYuMTI3LTkuMjk5Yy0uMDA3LS4wMS0uMDItLjAxNy0uMDI2LS4wMjZhLjk5NS45OTUgMCAwMC0uMjExLS4yMTVjLS4wMi0uMDEzLS4wMzYtLjAzLS4wNTYtLjA0Mi0uMDItLjAxMy0uMDIyLS4wMi0uMDM1LS4wMjdsLTMuNjA1LTIuMDg1LTEuNDk3LTIuMjcxTDUuNjI4IDkuMjdhLjk4My45ODMgMCAwMC0xLjE0Ny0uMzg2TC42NTQgMTAuMjI3YS45ODMuOTgzIDAgMDAtLjQ5MSAxLjQ2OGwyLjcwNSA0LjEwNyAxLjQ5MiAyLjI3LjQ5MiA0LjEzN2EuMzYuMzYgMCAwMC4wMS4wNGMuMDA0LjAyLjAwOS4wNDEuMDE1LjA2MWEuOTczLjk3MyAwIDAwLjExNi4yOTVjLjAwNy4wMS4wMDcuMDIzLjAxNC4wMzMuMDA3LjAxIDE0LjYyNCAyMi4xNjUgMTQuNjk1IDIyLjIyNUE0Ljg3IDQuODcgMCAwMDI0LjI1NSA0OGMuNCAwIC44LS4wNSAxLjE5LS4xNDVhNC44ODYgNC44ODYgMCAwMDMuMDI4LTIuMjM1bDEzLjA4LTIxLjY5OCAyLjA2NS0xLjMwN2E4LjM0MyA4LjM0MyAwIDAwMi42Ni0yLjcyMSA4LjI1OSA4LjI1OSAwIDAwMS4xOC00LjY1MWwtLjM4My04LjQyYS45ODQuOTg0IDAgMDAtLjQ2Ny0uODAzem0tNy4xMjIgMTcuNTI0bC0xLjUyMiAyLjUyNy01LjA1NC0zLjA0OCAxLjUyNC0yLjUyNyA1LjA1MiAzLjA0OHpNMjEuMzE1IDM4LjQ0NlYyMy41OGg1Ljl2NS4wOGwtNS45IDkuNzg2em0xLjY5My0yMC43NjZoMi41MTVsMS4zMSAzLjkzM2gtNS4xMzZsMS4zMS0zLjkzM3ptMS4yNTctNi44ODVhLjk4My45ODMgMCAxMTAtMS45NjYuOTgzLjk4MyAwIDAxMCAxLjk2NnptMC04LjE5NGw0Ljc1IDYuMzMxLTMuMzkgNi43OGgtLjM3N3YtMy4xM2EyLjk1IDIuOTUgMCAxMC0xLjk2NiAwdjMuMTNoLS4zNzZsLTMuMzktNi43OCA0Ljc1LTYuMzMxek0xMC41MyAxNy44MThsLS4yOS4xOS0zLjYyMSAyLjM4Ny0uMzMzLTIuNzg3YS45ODIuOTgyIDAgMDAtLjE1Ni0uNDI0bC0xLjA4MS0xLjY0Mkw2LjY5IDE0LjQ2bDEuMDgxIDEuNjQyYS45ODguOTg4IDAgMDAuMzI5LjMxbDIuNDI5IDEuNDA2em0tNi4xMjItNi44MjZsMS4yIDEuODIyLTEuNjQyIDEuMDgyLTEuNDc1LTIuMjMyIDEuOTE3LS42NzJ6bTUuMjQ5IDkuNzU1bDIuNDU4LTEuNjI0IDcuMjMzIDEwLjk3MnYxMC43MjZMNy4xOTMgMjIuMzcxbDIuNDY0LTEuNjI0em0xNy4xMzUgMjMuODUxYTIuOTUgMi45NSAwIDExLTUuMDUyLTMuMDQ4bDcuNDI1LTEyLjMxNWguMDE3di0uMDI3bDIuNzEyLTQuNDk5IDIuNTI3IDEuNTI2IDIuNTMgMS41Mi0xMC4xNiAxNi44NDN6bTE3LjgwNy0yNS43MjRhNi4zNTMgNi4zNTMgMCAwMS0yLjAyOCAyLjA3M2wtMS43NDcgMS4xMDctMi44NTItMS43MTctMi44NTItMS43MTcuMTYyLTIuMDY1YTYuMzE4IDYuMzE4IDAgMDEzLjYwNC01LjIxM0w0NS4xOCA4LjM4bC4xMjUgMi43NGEuOTczLjk3MyAwIDAwLS4yOTUuMDE0bC0yLjM4Mi41OWE1Ljk4NiA1Ljk4NiAwIDAwLTQuNDI1IDQuNTI0Ljk4My45ODMgMCAwMDEuOTE5LjQzIDQuMDMyIDQuMDMyIDAgMDEyLjk3Ny0zLjA0M2wyLjI5Ny0uNTcuMTAzIDIuMjYyYTYuMzA0IDYuMzA0IDAgMDEtLjkgMy41NDh6Ii8+PC9zdmc+"
                              alt="Fully Customizable"
                            />
                          </div>
                          <h3>Fully Customizable</h3>
                          <p>
                            Improve brand awareness and content discoverability through
                            customizable links, supercharging audience engagement.
                          </p>
                        </div>
                      </div>

                      <div className="s-boost">
                        <h2>Boost your links today</h2>
                        <button className="s-btn-cyan">Get Started</button>
                      </div>

                      <div className="s-footer">
                        <div className="s-footer-logo">Shortly</div>
                        <div className="s-footer-col">
                          <h4>Features</h4>
                          <a href="#">Link Shortening</a>
                          <a href="#">Branded Links</a>
                          <a href="#">Analytics</a>
                        </div>
                        <div className="s-footer-col">
                          <h4>Resources</h4>
                          <a href="#">Blog</a>
                          <a href="#">Developers</a>
                          <a href="#">Support</a>
                        </div>
                        <div className="s-footer-col">
                          <h4>Company</h4>
                          <a href="#">About</a>
                          <a href="#">Our Team</a>
                          <a href="#">Careers</a>
                          <a href="#">Contact</a>
                        </div>
                        <div className="s-social">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="phone-home-bar" />
                </div>

                <div className="phone-shadow" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .shortly-shell {
          --cyan: #2bd0d0;
          --dark-violet: #35323e;
          --very-dark-blue: #232127;
          --grayish-violet: #9e9aa7;
          --light-gray: #eff1f7;
          --red: #f46363;
          --white: #fff;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px 8px 8px;
          width: 100%;
        }

        .shortly-shell::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          background: radial-gradient(
            circle,
            rgba(43, 208, 208, 0.12) 0%,
            transparent 70%
          );
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .shortly-shell {
            margin-top: -120px;
          }
        }

        .shortly-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--dark-violet);
          letter-spacing: -0.5px;
          text-align: center;
          position: relative;
        }

        .shortly-subtitle {
          color: var(--grayish-violet);
          font-size: 0.75rem;
          margin-top: 4px;
          margin-bottom: 24px;
          text-align: center;
          position: relative;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        @keyframes cursorMove {
          0% {
            top: 200px;
            left: 140px;
            opacity: 0;
          }
          3% {
            top: 200px;
            left: 140px;
            opacity: 1;
          }
          12% {
            top: 330px;
            left: 140px;
            opacity: 1;
          }
          18% {
            top: 330px;
            left: 140px;
            opacity: 1;
          }
          25% {
            top: 430px;
            left: 200px;
            opacity: 1;
          }
          30% {
            top: 440px;
            left: 258px;
            opacity: 1;
          }
          35% {
            top: 440px;
            left: 258px;
            opacity: 1;
          }
          42% {
            top: 476px;
            left: 258px;
            opacity: 1;
          }
          47% {
            top: 476px;
            left: 258px;
            opacity: 1;
          }
          55% {
            top: 560px;
            left: 150px;
            opacity: 1;
          }
          62% {
            top: 560px;
            left: 150px;
            opacity: 1;
          }
          70% {
            top: 200px;
            left: 140px;
            opacity: 0;
          }
          100% {
            top: 200px;
            left: 140px;
            opacity: 0;
          }
        }

        @keyframes rippleAnim {
          0%,
          30% {
            top: 430px;
            left: 249px;
            transform: scale(0);
            opacity: 0;
          }
          33% {
            top: 430px;
            left: 249px;
            transform: scale(0);
            opacity: 1;
          }
          36% {
            top: 430px;
            left: 249px;
            transform: scale(1.5);
            opacity: 0;
          }
          44% {
            top: 466px;
            left: 249px;
            transform: scale(0);
            opacity: 1;
          }
          47% {
            top: 466px;
            left: 249px;
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            top: 430px;
            left: 249px;
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes shadowFloat {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateX(-50%) scale(0.7);
            opacity: 0.3;
          }
        }

        @keyframes scrollPhone {
          0% {
            transform: translateY(0);
          }
          8% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-180px);
          }
          55% {
            transform: translateY(-180px);
          }
          68% {
            transform: translateY(-480px);
          }
          80% {
            transform: translateY(-480px);
          }
          95% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }

        .phone-wrap {
          position: relative;
          animation: float 6s ease-in-out infinite;
        }

        .phone-shadow {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 18px;
          background: radial-gradient(
            ellipse,
            rgba(43, 208, 208, 0.25) 0%,
            transparent 70%
          );
          animation: shadowFloat 6s ease-in-out infinite;
        }

        .phone {
          width: 320px;
          height: 680px;
          background: var(--white);
          border-radius: 32px;
          border: 2px solid #d0d5e8;
          box-shadow: 0 28px 56px rgba(53, 50, 62, 0.2),
            0 0 0 1px rgba(43, 208, 208, 0.1),
            inset 0 2px 0 rgba(255, 255, 255, 0.8);
          overflow: hidden;
          position: relative;
        }

        .cursor {
          position: absolute;
          width: 22px;
          height: 22px;
          z-index: 100;
          pointer-events: none;
          animation: cursorMove 14s ease-in-out infinite;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .click-ripple {
          position: absolute;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(43, 208, 208, 0.4);
          z-index: 90;
          pointer-events: none;
          animation: rippleAnim 14s ease-in-out infinite;
          transform: scale(0);
        }

        .phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 18px;
          background: #1a1820;
          border-radius: 18px;
          z-index: 20;
        }

        .status-bar {
          background: var(--white);
          padding: 10px 18px 4px;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 700;
          color: var(--dark-violet);
          position: relative;
          z-index: 10;
        }

        .phone-screen {
          height: calc(100% - 34px);
          overflow: hidden;
          position: relative;
          background: var(--light-gray);
        }

        .scroll-content {
          animation: scrollPhone 14s ease-in-out infinite;
        }

        .s-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: var(--white);
        }

        .s-nav-logo {
          font-size: 16px;
          font-weight: 800;
          color: var(--dark-violet);
        }

        .s-hamburger {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .s-hamburger span {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--grayish-violet);
          border-radius: 2px;
        }

        .s-hero {
          background: var(--white);
          padding: 0 20px 20px;
          text-align: center;
        }

        .s-hero-img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          object-position: center top;
          margin-bottom: 14px;
          border-radius: 12px;
        }

        .s-hero h1 {
          font-size: 22px;
          font-weight: 800;
          color: var(--dark-violet);
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .s-hero p {
          font-size: 11px;
          color: var(--grayish-violet);
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .s-btn-cyan {
          background: var(--cyan);
          color: var(--white);
          border: none;
          border-radius: 22px;
          padding: 10px 28px;
          font-family: inherit;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
        }

        .s-shorten {
          background: var(--light-gray);
          padding: 0 20px 14px;
        }

        .s-shorten-box {
          background: #3a3054;
          border-radius: 10px;
          padding: 18px;
          margin-top: -10px;
          position: relative;
          overflow: hidden;
        }

        .s-input {
          width: 100%;
          padding: 9px 12px;
          border-radius: 6px;
          border: 3px solid var(--red);
          font-size: 11px;
          color: rgba(53, 50, 62, 0.5);
          margin-bottom: 5px;
          outline: none;
        }

        .s-err {
          color: var(--red);
          font-style: italic;
          font-size: 9px;
          margin-bottom: 8px;
        }

        .s-shorten-btn {
          width: 100%;
          background: var(--cyan);
          color: var(--white);
          border: none;
          border-radius: 6px;
          padding: 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .s-results {
          background: var(--light-gray);
          padding: 0 20px;
        }

        .s-result-row {
          background: var(--white);
          border-radius: 6px;
          margin-bottom: 10px;
          overflow: hidden;
        }

        .s-result-orig {
          padding: 9px 12px;
          font-size: 11px;
          color: var(--dark-violet);
          border-bottom: 1px solid var(--light-gray);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .s-result-bottom {
          padding: 9px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .s-result-short {
          font-size: 11px;
          color: var(--cyan);
          font-weight: 600;
        }

        .s-copy-btn {
          background: var(--cyan);
          color: var(--white);
          border: none;
          border-radius: 5px;
          padding: 5px 12px;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .s-copy-btn.copied {
          background: var(--dark-violet);
        }

        .s-stats {
          background: var(--light-gray);
          padding: 24px 20px 0;
          text-align: center;
        }

        .s-stats h2 {
          font-size: 16px;
          font-weight: 800;
          color: var(--dark-violet);
          margin-bottom: 8px;
        }

        .s-stats-sub {
          font-size: 11px;
          color: var(--grayish-violet);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .s-card {
          background: var(--white);
          border-radius: 6px;
          padding: 44px 18px 20px;
          margin-bottom: 26px;
          text-align: left;
          position: relative;
        }

        .s-card-icon {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          background: var(--very-dark-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .s-card-icon img {
          width: 26px;
          height: 26px;
        }

        .s-card h3 {
          font-size: 14px;
          font-weight: 700;
          color: var(--dark-violet);
          margin-bottom: 6px;
          text-align: center;
        }

        .s-card p {
          font-size: 11px;
          color: var(--grayish-violet);
          line-height: 1.7;
          text-align: center;
        }

        .s-connector {
          width: 6px;
          height: 48px;
          background: var(--cyan);
          margin: 0 auto -24px;
          position: relative;
          z-index: 1;
        }

        .s-boost {
          background: #3a3054;
          padding: 40px 20px;
          text-align: center;
          background-image: radial-gradient(
              circle at -30% 50%,
              #4b3f6b 0%,
              transparent 60%
            ),
            radial-gradient(circle at 130% 50%, #4b3f6b 0%, transparent 60%);
        }

        .s-boost h2 {
          color: var(--white);
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .s-footer {
          background: var(--very-dark-blue);
          padding: 26px 20px;
          text-align: center;
        }

        .s-footer-logo {
          font-size: 20px;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 22px;
        }

        .s-footer-col {
          margin-bottom: 16px;
        }

        .s-footer-col h4 {
          color: var(--white);
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .s-footer-col a {
          display: block;
          color: var(--grayish-violet);
          text-decoration: none;
          font-size: 11px;
          margin-bottom: 6px;
        }

        .s-social {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 12px;
          color: var(--grayish-violet);
          font-size: 14px;
        }

        .phone-home-bar {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: #ccc;
          border-radius: 4px;
        }
      `}</style>
    </main>
  );
}
