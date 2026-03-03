"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Summary = {
  total_views: number;
  total_likes: number;
  total_comments: number;
  average_engagement_rate: number;
  item_count: number;
};

type TopContentItem = {
  id: number;
  title: string;
  platform: string;
  views: number;
  likes: number;
  comments: number;
  engagement_score: number;
};

type InsightsResponse = {
  summary: Summary;
  insights: string[];
};

const API_BASE = process.env.NEXT_PUBLIC_ANALYTICS_API_URL;

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_BASE) {
    throw new Error("NEXT_PUBLIC_ANALYTICS_API_URL is not configured.");
  }
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export default function CreatorAnalyticsProjectPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [topContent, setTopContent] = useState<TopContentItem[]>([]);
  const [insights, setInsights] = useState<string[] | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lookbackDays, setLookbackDays] = useState<7 | 30 | 90>(90);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const insightsPanelRef = useRef<HTMLDivElement | null>(null);

  async function loadAnalytics(currentLookback: number) {
    const [s, top] = await Promise.all([
      fetchJson<Summary>(`/analytics/summary?lookback_days=${currentLookback}`),
      fetchJson<TopContentItem[]>("/analytics/top-content?limit=4"),
    ]);
    setSummary(s);
    setTopContent(top);
    setLastUpdated(new Date());
  }

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        await loadAnalytics(lookbackDays);
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load analytics data.",
          );
        }
      }
    }

    if (API_BASE) {
      load();
      const id = window.setInterval(load, 60000);
      return () => {
        cancelled = true;
        window.clearInterval(id);
      };
    } else {
      setError("Analytics API URL is not configured.");
      return;
    }
  }, [lookbackDays]);

  useEffect(() => {
    if (!headerRef.current || !metricsRef.current || !listRef.current || !insightsPanelRef.current) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });
    tl.from(headerRef.current, { opacity: 0, y: 20 })
      .from(
        metricsRef.current.querySelectorAll("[data-metric-card]"),
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
          stagger: 0.08,
        },
        "-=0.3",
      )
      .from(
        listRef.current.querySelectorAll("[data-top-row]"),
        {
          opacity: 0,
          x: -20,
          stagger: 0.08,
        },
        "-=0.3",
      )
      .from(
        insightsPanelRef.current,
        {
          opacity: 0,
          y: 20,
        },
        "-=0.35",
      );
  }, []);

  async function handleGenerateInsights() {
    setLoadingInsights(true);
    setError(null);
    try {
      const data = await fetchJson<InsightsResponse>("/ai/insights", {
        method: "POST",
        body: JSON.stringify({ lookback_days: 30 }),
      });
      setInsights(data.insights);
      setSummary(data.summary);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate insights.",
      );
    } finally {
      setLoadingInsights(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <header ref={headerRef} className="space-y-3">
          <p className="text-xs sm:text-sm text-gray-400">
            Projects / Creator Analytics &amp; AI Insights
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Creator Analytics &amp; AI Insights
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-gray-300 mt-2">
                A Python + Next.js project that ingests creator metrics and turns them
                into fast, queryable APIs and AI‑style insights for content strategy.
              </p>
            </div>
            <div className="mt-3 md:mt-0 flex flex-col items-start gap-2 text-[11px] font-mono text-gray-400 md:items-end">
              <a
                href="/projects/creator-analytics/how-we-built"
                className="inline-flex items-center gap-1 rounded-full border border-gray-700 bg-gray-900/60 px-3 py-1 text-[11px] font-normal text-gray-200 hover:border-fuchsia-500/80 hover:text-white transition"
              >
                <span>Case study:</span>
                <span className="font-semibold text-fuchsia-300">
                  How we built this
                </span>
              </a>
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/50 bg-amber-500/10 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                LIVE DATA
              </span>
              <span className="hidden sm:inline text-gray-500">•</span>
              <span className="hidden sm:inline">
                Source: FastAPI + Supabase Postgres
              </span>
              {lastUpdated && (
                <>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span className="text-gray-500">
                    Updated{" "}
                    {lastUpdated.toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        {error && (
          <div className="rounded-lg border border-red-500/60 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <section className="grid gap-8 md:grid-cols-[1.6fr,1.2fr]">
          <div className="space-y-6" ref={metricsRef}>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-fuchsia-400/80">
                Metrics • Last {lookbackDays} days
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                Key metrics
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-800/80 bg-black/60 px-2 py-1 text-[11px] font-mono text-gray-400">
              <span className="text-gray-500">Range</span>
              {[7, 30, 90].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLookbackDays(value as 7 | 30 | 90)}
                  className={`rounded-full px-2 py-0.5 transition ${
                    lookbackDays === value
                      ? "bg-fuchsia-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/80"
                  }`}
                >
                  {value}d
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <MetricCard
                label="Total views"
                value={summary ? summary.total_views.toLocaleString() : "—"}
              />
              <MetricCard
                label="Total likes"
                value={
                  summary ? summary.total_likes.toLocaleString() : "—"
                }
              />
              <MetricCard
                label="Total comments"
                value={
                  summary ? summary.total_comments.toLocaleString() : "—"
                }
              />
              <MetricCard
                label="Avg engagement"
                value={
                  summary
                    ? `${summary.average_engagement_rate.toFixed(2)}%`
                    : "—"
                }
              />
            </div>

            <div className="space-y-3" ref={listRef}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-sky-400/80">
                    Ranked by engagement
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-gray-100">
                    Top performing content
                  </h3>
                </div>
              </div>
              <div className="space-y-2 rounded-2xl border border-gray-800/80 bg-gradient-to-b from-[#050816] to-black/60 p-4 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
                {topContent.length === 0 ? (
                  <p className="text-sm text-gray-400">
                    {API_BASE
                      ? "Loading content performance..."
                      : "Configure the analytics API URL to see top content."}
                  </p>
                ) : (
                  topContent.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 rounded-xl bg-black/40 px-3 py-2.5 text-sm border border-gray-800/80 hover:border-fuchsia-500/70 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-gray-500">
                            #{index + 1}
                          </span>
                          <p className="font-medium text-gray-100">
                            {item.title}
                          </p>
                        </div>
                        <p className="mt-0.5 text-xs text-gray-500 font-mono">
                          {item.platform.toUpperCase()} •{" "}
                          {item.views.toLocaleString()} views
                        </p>
                      </div>
                      <div className="text-right text-xs text-gray-300 font-mono">
                        <p className="flex items-center justify-end gap-2">
                          <span className="rounded-full bg-gray-800/80 px-2 py-0.5 text-[10px] text-gray-300">
                            👍 {item.likes.toLocaleString()} • 💬{" "}
                            {item.comments.toLocaleString()}
                          </span>
                        </p>
                        <p className="mt-1 text-[11px] text-fuchsia-300">
                          Engagement {item.engagement_score.toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400/80">
                Generated insights
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                AI‑style insights
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Hit the button to generate strategic insights from the analytics
                API. In production this endpoint can be backed by a real LLM.
              </p>
            </div>
            <button
              type="button"
              onClick={handleGenerateInsights}
              disabled={loadingInsights || !!error || !API_BASE}
              className="btn-animate inline-flex items-center justify-center rounded-lg bg-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingInsights ? "Generating…" : "Generate insights"}
            </button>

            <div
              ref={insightsPanelRef}
              className="min-h-[160px] rounded-2xl border border-gray-800/80 bg-gradient-to-b from-[#050816] to-black/60 p-4 text-sm text-gray-200 shadow-[0_0_40px_rgba(24,24,48,0.9)]"
            >
              {insights && insights.length > 0 ? (
                <ul className="space-y-2">
                  {insights.map((line, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">
                  No insights yet. Configure the analytics API URL and tap
                  &quot;Generate insights&quot; to see recommendations.
                </p>
              )}
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#050816] p-4 text-xs text-gray-400 font-mono">
              <p className="mb-1 font-semibold text-gray-200 tracking-[0.18em] uppercase text-[11px]">
                How it works
              </p>
              <p>
                The Next.js page calls a Python FastAPI backend that aggregates
                metrics and returns both raw analytics and synthesized
                recommendations, demonstrating a polyglot stack with a clean API
                boundary.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
};

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div
      data-metric-card
      className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gradient-to-b from-[#050816] to-black/70 px-3 py-4 shadow-[0_0_35px_rgba(15,23,42,0.8)] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(244,114,182,0.35)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.18),_transparent_55%)]" />
      <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-gray-400 relative">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-white relative font-mono tabular-nums">
        {value}
      </p>
    </div>
  );
}

