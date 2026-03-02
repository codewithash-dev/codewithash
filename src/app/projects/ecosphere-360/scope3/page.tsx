"use client";

import { useState } from "react";

type ScopeTab = "overview" | "suppliers" | "recommendations" | "timeline";
type RiskLevel = "high" | "medium" | "low";

const SUPPLIERS = [
  { name: "Logistics Partner A", region: "Transport · China", emissions: "2400", engagement: 45, potential: "600", risk: "high" as RiskLevel },
  { name: "Air Freight Express", region: "Transport · Singapore", emissions: "1200", engagement: 35, potential: "400", risk: "high" as RiskLevel },
  { name: "Energy Grid Ltd", region: "Power · Germany", emissions: "980", engagement: 85, potential: "200", risk: "low" as RiskLevel },
  { name: "Packaging Co.", region: "Materials · USA", emissions: "650", engagement: 60, potential: "150", risk: "low" as RiskLevel },
  { name: "Supplier X Corp", region: "Materials · India", emissions: "1850", engagement: 72, potential: "450", risk: "medium" as RiskLevel },
  { name: "Raw Material Hub", region: "Materials · Brazil", emissions: "1100", engagement: 55, potential: "300", risk: "medium" as RiskLevel },
];

type RiskFilter = "All" | "High" | "Medium" | "Low";
type SortOption = "Emissions" | "Risk" | "Name";

export default function Scope3AnalyzerPage() {
  const [activeTab, setActiveTab] = useState<ScopeTab>("overview");
  const [selectedSupplier, setSelectedSupplier] = useState<typeof SUPPLIERS[0] | null>(null);
  const [riskFilter, setRiskFilter] = useState<RiskFilter>("All");
  const [sortBy, setSortBy] = useState<SortOption>("Emissions");

  const filteredSuppliers = SUPPLIERS.filter((s) => {
    if (riskFilter === "All") return true;
    return s.risk === riskFilter.toLowerCase() as RiskLevel;
  });

  const sortedSuppliers = [...filteredSuppliers].sort((a, b) => {
    if (sortBy === "Emissions") return parseInt(b.emissions, 10) - parseInt(a.emissions, 10);
    if (sortBy === "Risk") {
      const order = { high: 0, medium: 1, low: 2 };
      return order[a.risk] - order[b.risk];
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <section className="pt-12 pb-24">
      <header className="mb-6 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Emissions Intelligence
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Scope 3 Analyzer
        </h1>
        <p className="text-zinc-400 max-w-2xl">
          Deep supply chain carbon footprint tracking and optimization engine.
        </p>
      </header>

      <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-2 py-1">
        {[
          { id: "overview", label: "Overview" },
          { id: "suppliers", label: "Suppliers" },
          { id: "recommendations", label: "Recommendations" },
          { id: "timeline", label: "Timeline" },
        ].map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as ScopeTab)}
              className={`min-h-[34px] rounded-full px-4 text-sm font-medium transition-all duration-300 ${
                active
                  ? "bg-emerald-600 text-white shadow-[0_0_24px_rgba(16,185,129,0.5)]"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Row 1: Four KPI cards — equal width, same height, one row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Emissions", value: "8,180", unit: "tCO2e", badge: "-12%", badgeGreen: true },
              { label: "High-Risk Suppliers", value: "2", unit: "count", badge: "-1", badgeGreen: false },
              { label: "Reduction Potential", value: "2,100", unit: "tCO2e", badge: "High", badgeGreen: false },
              { label: "YOY Progress", value: "-15%", unit: "reduction", badge: "", badgeGreen: false },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-zinc-700/80 bg-[#28282D] p-4 min-h-[100px] flex flex-col justify-between"
              >
                <p className="text-[11px] text-zinc-500 flex items-center justify-between">
                  <span className="uppercase tracking-wide">{card.label}</span>
                  {card.badge && (
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium shrink-0 ${card.badgeGreen ? "bg-emerald-500/20 text-emerald-300" : "text-red-400"}`}>
                      {card.badge}
                    </span>
                  )}
                </p>
                <p className="text-2xl font-bold text-white">{card.value}</p>
                {card.unit && <p className="text-xs text-zinc-500">{card.unit}</p>}
              </div>
            ))}
          </div>

          {/* Row 2: Two columns — same height, aligned tops, identical padding */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-stretch">
            <div className="rounded-xl border border-zinc-700/80 bg-[#28282D] p-5 flex flex-col h-full min-h-0">
              <div className="flex items-center justify-between shrink-0 h-9 mb-4">
                <h2 className="text-sm font-semibold text-white">Emission Breakdown by Category</h2>
                <button className="rounded-full border border-zinc-600 px-3 py-1.5 text-[11px] text-zinc-300 hover:border-emerald-500 hover:text-white transition-colors shrink-0">
                  Export Report
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 items-center flex-1 min-h-0">
                <div className="relative h-40 w-40 shrink-0">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
                    {/* Four arc segments — blue, purple, green, orange; dash leaves small gap */}
                    <path d="M 92 50 A 42 42 0 0 1 50 92" fill="none" stroke="#5F85E0" strokeWidth="14" strokeLinecap="butt" strokeDasharray="60 8" />
                    <path d="M 50 92 A 42 42 0 0 1 8 50" fill="none" stroke="#9B59B6" strokeWidth="14" strokeLinecap="butt" strokeDasharray="60 8" />
                    <path d="M 8 50 A 42 42 0 0 1 50 8" fill="none" stroke="#6BBF94" strokeWidth="14" strokeLinecap="butt" strokeDasharray="60 8" />
                    <path d="M 50 8 A 42 42 0 0 1 92 50" fill="none" stroke="#F5A623" strokeWidth="14" strokeLinecap="butt" strokeDasharray="60 8" />
                  </svg>
                </div>
                <ul className="space-y-2 text-xs w-full shrink-0">
                  {[
                    { label: "Raw Materials", value: "400 tCO2e", hex: "#5F85E0" },
                    { label: "Manufacturing", value: "300 tCO2e", hex: "#9B59B6" },
                    { label: "Logistics", value: "300 tCO2e", hex: "#6BBF94" },
                    { label: "End of Life", value: "200 tCO2e", hex: "#F5A623" },
                  ].map((row) => (
                    <li key={row.label} className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: row.hex }} />
                        <span style={{ color: row.hex }}>{row.label}</span>
                      </span>
                      <span className="text-zinc-500">{row.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="rounded-xl border border-zinc-700/80 bg-[#28282D] p-5 flex flex-col h-full min-h-0">
              <div className="flex items-center justify-between shrink-0 h-9 mb-4">
                <h2 className="text-sm font-semibold text-white">Top Contributors</h2>
              </div>
              <ul className="space-y-2 text-xs flex-1 min-h-0">
                {[
                  { name: "Logistics Partner A", sub: "Transport", risk: "High Risk", color: "text-red-400", value: "2489 t" },
                  { name: "Supplier X Corp", sub: "Materials", risk: "Moderate Risk", color: "text-amber-400", value: "1850 t" },
                  { name: "Energy Grid Ltd", sub: "Power", risk: "Low Risk", color: "text-emerald-400", value: "993 t" },
                  { name: "Packaging Co.", sub: "Materials", risk: "Low Risk", color: "text-emerald-400", value: "659 t" },
                ].map((s) => (
                  <li key={s.name} className="flex items-center justify-between rounded-lg border border-zinc-700/60 bg-zinc-900/60 px-3 py-2">
                    <div>
                      <p className="text-zinc-100 font-medium">{s.name}</p>
                      <p className="text-[10px] text-zinc-500">{s.sub}</p>
                      <p className={`text-[11px] ${s.color}`}>{s.risk}</p>
                    </div>
                    <span className="text-[11px] text-zinc-400 font-medium">{s.value}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-medium text-[#6B8FFF] hover:underline shrink-0 pt-3">View Full Supplier List →</p>
            </aside>
          </div>
        </div>
      )}

      {activeTab === "suppliers" && (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "Total Emissions", value: "8,180", unit: "tCO2e" },
              { label: "High Risk", value: "2", unit: "suppliers" },
              { label: "Medium Risk", value: "3", unit: "suppliers" },
              { label: "Low Risk", value: "4", unit: "suppliers" },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 space-y-1.5"
              >
                <p className="text-[11px] text-zinc-500">{card.label}</p>
                <p className="text-xl font-semibold text-white">
                  {card.value}
                </p>
                <p className="text-[11px] text-zinc-500">{card.unit}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5">
              <span className="text-zinc-500">Filter by Risk:</span>
              {(["All", "High", "Medium", "Low"] as const).map((level) => {
                const active = riskFilter === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setRiskFilter(level)}
                    className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-emerald-700 text-emerald-100 border border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                        : "border border-transparent text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {level}
                  </button>
                );
              })}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5">
              <span className="text-zinc-500">Sort by:</span>
              {(["Emissions", "Risk", "Name"] as const).map((opt) => {
                const active = sortBy === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSortBy(opt)}
                    className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-emerald-700 text-emerald-100 border border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                        : "border border-transparent text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sortedSuppliers.map((s) => {
              const riskPillClass = s.risk === "high"
                ? "bg-[#FF4D4D] text-white"
                : s.risk === "medium"
                ? "bg-[#FFB300] text-white"
                : "bg-[#4CAF50] text-white";
              const riskLabel = s.risk === "high" ? "High Risk" : s.risk === "medium" ? "Medium Risk" : "Low Risk";
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setSelectedSupplier(s)}
                  className="group w-full text-left rounded-xl border border-zinc-700/80 bg-[#28282D] p-4 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="text-sm font-bold text-white">{s.name}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">{s.region}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase ${riskPillClass}`}>
                      {riskLabel}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-zinc-500 mb-0.5">Emissions</p>
                      <p className="text-white font-semibold">{s.emissions}</p>
                      <p className="text-[10px] text-zinc-500">tCO2e</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-zinc-500 mb-0.5">Engagement</p>
                      <p className="font-semibold text-[#6B8FFF]">{s.engagement}%</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-zinc-500 mb-0.5">Potential</p>
                      <p className="font-semibold text-[#7BFF7F]">{s.potential}</p>
                      <p className="text-[10px] text-zinc-500">tCO2e</p>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-[#6B8FFF] group-hover:underline inline-flex items-center gap-1">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selectedSupplier && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setSelectedSupplier(null)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/50 p-6">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl font-bold text-white">
                  {selectedSupplier.name}
                </h2>
                <p className="text-sm text-zinc-400 mt-0.5">
                  {selectedSupplier.region}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSupplier(null)}
                className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-5 text-sm">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-zinc-500 mb-0.5">Total Emissions</p>
                <p className="text-lg font-semibold text-white">{selectedSupplier.emissions}</p>
                <p className="text-xs text-zinc-500">tCO2e</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-zinc-500 mb-0.5">Engagement Score</p>
                <p className="text-lg font-semibold text-white">{selectedSupplier.engagement}%</p>
                <div className="mt-1.5 h-2 w-full rounded-full bg-zinc-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500"
                    style={{ width: `${selectedSupplier.engagement}%` }}
                  />
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-zinc-500 mb-1">Risk Level</p>
                <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-sm font-semibold ${
                  selectedSupplier.risk === "high" ? "bg-red-600 text-white" :
                  selectedSupplier.risk === "medium" ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"
                }`}>
                  {selectedSupplier.risk === "high" ? "High" : selectedSupplier.risk === "medium" ? "Medium" : "Low"}
                </span>
              </div>
            </div>

            <div className="mb-5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 mb-2">
                Reduction Potential
              </p>
              <div className="rounded-xl bg-emerald-900/40 border border-emerald-700/50 px-4 py-3">
                <p className="text-lg font-semibold text-emerald-300">
                  {selectedSupplier.potential} tCO2e
                </p>
                <p className="text-xs text-emerald-200/90 mt-0.5">
                  Achievable through engagement initiatives and capacity building
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download Plan
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                Copy ID
              </button>
              <button
                type="button"
                className="rounded-xl border border-zinc-600 p-2.5 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-emerald-500/50 transition-all duration-300"
                aria-label="Open external"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {activeTab === "recommendations" && (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "Reduction Potential", value: "2,100", unit: "tCO2e" },
              { label: "Suggested Actions", value: "4", unit: "initiatives" },
              { label: "Avg. Payback", value: "3.2", unit: "years" },
              { label: "Implementation Status", value: "40%", unit: "in progress" },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 space-y-1.5"
              >
                <p className="text-[11px] text-zinc-500">{card.label}</p>
                <p className="text-xl font-semibold text-white">
                  {card.value}
                </p>
                <p className="text-[11px] text-zinc-500">{card.unit}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Engage high-risk logistics partners",
                desc: "Schedule quarterly reviews with transport providers to implement emission reduction targets.",
                potential: "800 tCO2e reduction potential",
                tag: "High",
              },
              {
                title: "Renewable energy transition",
                desc: "Encourage suppliers to source 50% of energy from renewables by 2026.",
                potential: "450 tCO2e reduction potential",
                tag: "High",
              },
              {
                title: "Supplier capacity building",
                desc: "Invest in training and certifications for sustainable practices across supply chain.",
                potential: "350 tCO2e reduction potential",
                tag: "Medium",
              },
              {
                title: "Material substitution study",
                desc: "Evaluate low-carbon alternative materials for packaging and raw materials.",
                potential: "220 tCO2e reduction potential",
                tag: "Medium",
              },
            ].map((rec) => (
              <div
                key={rec.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-5 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs"
              >
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white">
                    {rec.title}
                  </p>
                  <p className="text-zinc-400">
                    {rec.desc}
                  </p>
                  <p className="text-emerald-300 text-[11px]">
                    {rec.potential}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    rec.tag === "High"
                      ? "bg-red-500/10 text-red-300"
                      : "bg-amber-500/10 text-amber-300"
                  }`}>
                    {rec.tag} Impact
                  </span>
                  <button
                    type="button"
                    className="rounded-full bg-emerald-600 px-4 py-1.5 text-[11px] font-medium text-white hover:bg-emerald-500 transition-colors"
                  >
                    Add to Action Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "timeline" && (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "Total Emissions", value: "8,180", unit: "tCO2e" },
              { label: "Projection (12m)", value: "7,200", unit: "tCO2e" },
              { label: "Reduction Rate", value: "-15%", unit: "last 6 months" },
              { label: "Avg. Monthly", value: "1,033", unit: "tCO2e" },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 space-y-1.5"
              >
                <p className="text-[11px] text-zinc-500">{card.label}</p>
                <p className="text-xl font-semibold text-white">
                  {card.value}
                </p>
                <p className="text-[11px] text-zinc-500">{card.unit}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">
                Emissions Trend (6-Month)
              </h2>
              <button className="text-[11px] text-zinc-400 hover:text-white hover:text-emerald-400 transition-colors">
                Export Chart
              </button>
            </div>
            <div className="space-y-4">
              {/* Bar chart with Y-axis scale 0–1200, X-axis Jan–Jun */}
              <div className="rounded-2xl border border-zinc-700/60 bg-zinc-950/80 p-4 md:p-6">
                <div className="flex gap-3 md:gap-4 min-h-[260px]">
                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between text-[11px] text-zinc-500 font-medium shrink-0 pt-0.5 pb-6">
                    {[1200, 900, 600, 300, 0].map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </div>
                  {/* Chart area */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex-1 flex items-end justify-between gap-2 md:gap-3 px-1" style={{ minHeight: 200 }}>
                      {[
                        { month: "Jan", value: 1180 },
                        { month: "Feb", value: 1050 },
                        { month: "Mar", value: 950 },
                        { month: "Apr", value: 850 },
                        { month: "May", value: 780 },
                        { month: "Jun", value: 680 },
                      ].map((bar) => {
                        const maxVal = 1200;
                        const pct = Math.min(bar.value / maxVal, 1);
                        return (
                          <div key={bar.month} className="flex flex-1 flex-col items-center gap-2">
                            <div className="w-full max-w-[48px] flex-1 flex flex-col justify-end min-h-[160px]">
                              <div
                                className="w-full rounded-t-md bg-emerald-500/90 transition-all duration-300 hover:bg-emerald-400/90"
                                style={{ height: `${pct * 100}%`, minHeight: pct > 0 ? 4 : 0 }}
                                title={`${bar.value} tCO2e`}
                              />
                            </div>
                            <span className="text-[11px] text-zinc-400">{bar.month}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center gap-2 pt-2 mt-1 border-t border-zinc-700/60">
                      <span className="inline-block w-3 h-3 rounded-sm bg-emerald-500/90" aria-hidden />
                      <span className="text-[11px] text-zinc-500">tCO2e Emissions</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3 text-xs text-zinc-400">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                    Reduction Rate
                  </p>
                  <p className="text-emerald-300 text-sm font-medium">
                    -15% <span className="text-zinc-500 text-xs">last 6 months</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                    Avg. Monthly Emissions
                  </p>
                  <p className="text-sm font-medium text-white">
                    1,033 <span className="text-zinc-500 text-xs">tCO2e</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                    Projection (12m)
                  </p>
                  <p className="text-sky-400 text-sm font-medium">
                    -22% <span className="text-zinc-500 text-xs">vs baseline</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
