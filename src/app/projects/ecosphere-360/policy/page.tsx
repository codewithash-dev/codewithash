"use client";

import { useState } from "react";

type ImpactLevel = "high" | "medium" | "low";

const IMPACT_STYLES: Record<ImpactLevel, string> = {
  high: "bg-red-500/20 text-red-300 border-red-500/40",
  medium: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  low: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
};

const POLICIES = [
  {
    id: "eu-csrd",
    name: "EU CSRD",
    description: "Expands non-financial reporting requirements for large companies in the EU.",
    status: "Effective Jan 1, 2025",
    impact: "high" as ImpactLevel,
    overview: "The Corporate Sustainability Reporting Directive (CSRD) expands non-financial reporting requirements for large companies operating in the EU.",
    requirements: ["Double materiality assessment", "Scope 1, 2, 3 emissions", "TCFD climate disclosures", "Human rights due diligence"],
    deadline: "Reporting starts Q1 2025",
  },
  {
    id: "sec-climate",
    name: "SEC Climate Rule",
    description: "Mandatory climate-related disclosures for public companies including Scope 3.",
    status: "Proposed Amendment",
    impact: "medium" as ImpactLevel,
    overview: "SEC proposes mandatory climate-related disclosures for public companies including Scope 3 GHG emissions.",
    requirements: ["GHG emissions disclosure", "Climate risk assessment", "Governance framework", "Strategic planning"],
    deadline: "Final rule expected Q2 2025",
  },
  {
    id: "eu-taxonomy",
    name: "EU Taxonomy",
    description: "Classification system for environmentally sustainable economic activities.",
    status: "Updated Guidelines",
    impact: "high" as ImpactLevel,
    overview: "The EU Taxonomy provides a classification system for environmentally sustainable economic activities.",
    requirements: ["Activity classification", "Compliance testing", "Disclosure in annual reports", "Third-party verification"],
    deadline: "Full compliance Q4 2025",
  },
  {
    id: "california-carbon",
    name: "California Carbon Tax",
    description: "Carbon tax implementation targeting major industrial emitters.",
    status: "Legislative Review",
    impact: "medium" as ImpactLevel,
    overview: "California explores carbon tax implementation targeting major industrial emitters.",
    requirements: ["Emission quantification", "Compliance monitoring", "Payment mechanisms", "Offsets"],
    deadline: "Legislation TBD",
  },
  {
    id: "apac-green",
    name: "APAC Green Finance Initiative",
    description: "ASEAN and Asian markets align on green finance taxonomy standards.",
    status: "New Standards",
    impact: "low" as ImpactLevel,
    overview: "ASEAN and Asian markets align on green finance taxonomy standards.",
    requirements: ["Green project classification", "ESG reporting", "Compliance audits"],
    deadline: "Phase-in Q1 2025",
  },
  {
    id: "scope3",
    name: "Scope 3 Emissions Regulation",
    description: "Unified Scope 3 emissions methodology from international bodies.",
    status: "Mandatory Reporting",
    impact: "high" as ImpactLevel,
    overview: "International bodies establish unified Scope 3 emissions methodology.",
    requirements: ["Supplier engagement", "Data collection", "Third-party validation", "Annual reporting"],
    deadline: "Effective immediately",
  },
];

const RECENT_UPDATES = [
  { name: "EU CSRD", date: "Effective Jan 1, 2025" },
  { name: "SEC Climate Rule", date: "Proposed Amendment" },
  { name: "EU Taxonomy", date: "Updated Guidelines" },
  { name: "California Carbon Tax", date: "Legislative Review" },
];

export default function PolicyNavigatorPage() {
  const [impactFilter, setImpactFilter] = useState<string>("All Impacts");
  const [selectedPolicy, setSelectedPolicy] = useState<typeof POLICIES[0] | null>(null);

  const impactLabel = (impact: ImpactLevel) =>
    impact === "high" ? "High Impact" : impact === "medium" ? "Medium Impact" : "Low Impact";

  return (
    <section className="pt-12 pb-24">
      <header className="mb-8 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Regulatory Intelligence
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Policy Navigator
          </h1>
        </div>
        <p className="text-zinc-400 max-w-2xl">
          AI-driven analysis of global environmental regulations and compliance requirements.
        </p>
      </header>

      <div className="grid gap-8 items-start md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 p-1.5">
            {["All Impacts", "High Impact", "Medium Impact", "Low Impact"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setImpactFilter(tab)}
                className={`min-h-[36px] rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  impactFilter === tab
                    ? "bg-sky-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white hover:shadow-[0_0_16px_rgba(16,185,129,0.2)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {POLICIES.filter((p) => {
              if (impactFilter === "All Impacts") return true;
              return impactLabel(p.impact) === impactFilter;
            }).map((policy) => (
              <button
                key={policy.id}
                type="button"
                onClick={() => setSelectedPolicy(policy)}
                className="group text-left rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.2)] hover:bg-zinc-900/60"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </div>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${IMPACT_STYLES[policy.impact]}`}>
                    {impactLabel(policy.impact)}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-emerald-100 mb-1">
                  {policy.name}
                </h3>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-400 mb-3">
                  {policy.description}
                </p>
                <p className="text-[11px] text-zinc-500">
                  {policy.status}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-400 group-hover:text-emerald-300">
                  Read Analysis
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        <aside className="space-y-4 md:col-span-1 lg:pl-4">
          <div className="rounded-2xl border border-red-500/40 bg-red-500/5 p-4 transition-all duration-300 hover:border-red-500/60 hover:shadow-[0_0_24px_rgba(239,68,68,0.25)]">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-red-300 mb-2">
              Action Required
            </p>
            <p className="text-xs text-zinc-300 mb-3">
              3 policies require immediate attention to maintain compliance status.
            </p>
            <button
              type="button"
              className="w-full rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300"
            >
              Review Gaps
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 space-y-3 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_24px_rgba(16,185,129,0.08)]">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Quick Actions
            </h2>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-sm font-medium text-white hover:border-emerald-500/40 hover:shadow-[0_0_16px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Export Report
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 space-y-3 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_24px_rgba(16,185,129,0.08)]">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Recent Updates
            </h2>
            <ul className="space-y-2 text-xs">
              {RECENT_UPDATES.map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-zinc-500">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {selectedPolicy && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setSelectedPolicy(null)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/50 p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                </div>
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${IMPACT_STYLES[selectedPolicy.impact]}`}>
                  {impactLabel(selectedPolicy.impact)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPolicy(null)}
                className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <h2 className="text-xl font-bold text-white mb-0.5">
              {selectedPolicy.name}
            </h2>
            <p className="text-sm text-zinc-400 mb-5">
              {selectedPolicy.status}
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">
                  Overview
                </h3>
                <p className="text-zinc-300">
                  {selectedPolicy.overview}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-2">
                  Key Requirements
                </h3>
                <ul className="space-y-1.5">
                  {selectedPolicy.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2">
                      <span className="text-emerald-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="text-zinc-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-500/50 bg-red-500/10 px-4 py-3">
                <p className="text-sm font-medium text-white">
                  Deadline: {selectedPolicy.deadline}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
                Read Full Analysis
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download
              </button>
              <button
                type="button"
                className="rounded-xl border border-zinc-600 p-2.5 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-300"
                aria-label="Copy"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
