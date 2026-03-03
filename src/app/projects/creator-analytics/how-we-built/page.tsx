"use client";

import Link from "next/link";

export default function HowWeBuiltCreatorAnalyticsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-24 pb-16 px-4 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs sm:text-sm text-slate-500">
            <Link
              href="/projects/creator-analytics"
              className="underline-offset-4 hover:underline"
            >
              ← Back to live dashboard
            </Link>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            How We Built the Creator Analytics &amp; AI Insights Dashboard
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-600">
            A behind-the-scenes look at how the Python + Next.js stack, Supabase
            Postgres, and motion design come together to power the live analytics
            experience on Code With Ash.
          </p>
        </header>

        <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
          <section>
            <h2>High-level architecture</h2>
            <p>
              The Creator Analytics dashboard is intentionally polyglot. The UI is
              built with Next.js and React, while the analytics and AI layer runs in
              a separate Python FastAPI service. Data is stored in Supabase
              Postgres, so the dashboard reads from the same type of database used
              across other Code With Ash projects.
            </p>
            <ul>
              <li>
                <strong>Frontend:</strong> Next.js App Router, Tailwind CSS,
                GSAP-powered motion.
              </li>
              <li>
                <strong>Backend:</strong> FastAPI, SQLModel, psycopg, with a clean
                REST API.
              </li>
              <li>
                <strong>Database:</strong> Supabase Postgres table
                <code>contentmetricsrow</code> seeded with creator content metrics.
              </li>
            </ul>
          </section>

          <section>
            <h2>Data model and Supabase integration</h2>
            <p>
              Each piece of content—like a YouTube video or mobile app tutorial—is
              represented as a row in Supabase. The schema tracks platform,
              cumulative views, likes, comments, and timestamps for when content was
              published and last updated.
            </p>
            <p>
              The Python service connects to Supabase with a{" "}
              <code>DATABASE_URL</code> environment variable. SQLModel handles table
              creation and queries, so the FastAPI endpoints can stay focused on
              analytics rather than SQL boilerplate.
            </p>
          </section>

          <section>
            <h2>Analytics API design</h2>
            <p>
              The API is intentionally minimal but expressive. A small set of
              endpoints covers the most important dashboard use cases:
            </p>
            <ul>
              <li>
                <code>GET /analytics/summary</code> &mdash; returns totals and
                engagement rate for a given lookback window.
              </li>
              <li>
                <code>GET /analytics/top-content</code> &mdash; ranks content by
                engagement score.
              </li>
              <li>
                <code>POST /ai/insights</code> &mdash; synthesizes narrative-style
                insights based on the same metrics.
              </li>
            </ul>
            <p>
              This separation makes it easy to swap in a real LLM later without
              changing the frontend contract.
            </p>
          </section>

          <section>
            <h2>Motion and interaction design</h2>
            <p>
              The dark dashboard intentionally leans into a cinematic analytics
              aesthetic. GSAP orchestrates entrance animations for the header,
              metric tiles, and top content rows, while hover states add subtle
              depth with glows and micro-movements.
            </p>
            <p>
              The light article page you are reading now is deliberately calmer:
              fewer animations, more whitespace, and typography tuned for reading
              long-form content. Together, the two pages form a narrative pair:
              <em>experience the product</em> first, then <em>learn how it was
              built</em>.
            </p>
          </section>

          <section>
            <h2>Why this project matters</h2>
            <p>
              Creator Analytics &amp; AI Insights shows how modern engineering teams
              can mix technologies comfortably: React on the front, Python on the
              back, and a managed Postgres in the middle. It is intentionally small
              enough to teach from, but real enough to extend into things like
              scheduled sync jobs, API-based data ingestion, and LLM-powered content
              recommendations.
            </p>
          </section>

          <section>
            <h2>What&apos;s next</h2>
            <p>
              Future iterations will experiment with real-time ingestion from
              creator platforms, richer time-series visualizations, and a fully
              hosted Python backend so the analytics API is available outside local
              development. There is also room to turn the insights endpoint into a
              true prompt-engineered LLM surface.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}

