"use client";

import { useState } from "react";

type ReadinessTab = "overview" | "sensors" | "alerts" | "schedule";

const SECTIONS = [
  {
    id: "soil-moisture",
    title: "Soil Moisture",
    location: "Sector 7 - North",
    reading: "68%",
    status: "Optimal",
    description: "Soil moisture level across the irrigation zone.",
    unit: "%",
    lastUpdate: "2 mins ago",
    icon: "droplet",
  },
  {
    id: "temperature",
    title: "Temperature",
    location: "Sector 7 - South",
    reading: "24°C",
    status: "Normal",
    description: "Ambient temperature in the growing area.",
    unit: "°C",
    lastUpdate: "1 min ago",
    icon: "thermometer",
  },
  {
    id: "wind-speed",
    title: "Wind Speed",
    location: "Sector 7 - East",
    reading: "12km/h",
    status: "Low",
    description: "Wind speed affecting crop pollination and evaporation.",
    unit: "km/h",
    lastUpdate: "3 mins ago",
    icon: "wind",
  },
  {
    id: "npk-levels",
    title: "NPK Levels",
    location: "Sector 7 - Central",
    reading: "Balanced",
    status: "Good",
    description: "Nitrogen, Phosphorus, Potassium nutrient balance.",
    unit: "ratio",
    lastUpdate: "5 mins ago",
    icon: "npk",
  },
  {
    id: "crop-health",
    title: "Crop Health",
    location: "Sector 7 - Full",
    reading: "98%",
    status: "Excellent",
    description: "Overall crop vigor and health index.",
    unit: "%",
    lastUpdate: "1 min ago",
    icon: "leaf",
  },
  {
    id: "machinery",
    title: "Machinery",
    location: "Main Station",
    reading: "Active",
    status: "Running",
    description: "Equipment operational status and connectivity.",
    unit: "status",
    lastUpdate: "Now",
    icon: "machinery",
  },
] as const;

const OVERVIEW_CARDS = [
  { sectionId: "soil-moisture" as const, value: "68%", label: "Soil Moisture", status: "Optimal", statusColor: "text-emerald-400", iconColor: "text-blue-400" },
  { sectionId: "temperature" as const, value: "24°C", label: "Temperature", status: "Normal", statusColor: "text-emerald-400", iconColor: "text-orange-400" },
  { sectionId: "wind-speed" as const, value: "12km/h", label: "Wind Speed", status: "Low", statusColor: "text-blue-400", iconColor: "text-zinc-400" },
  { sectionId: "npk-levels" as const, value: "Balanced", label: "NPK Levels", status: "Good", statusColor: "text-emerald-400", iconColor: "text-violet-400" },
  { sectionId: "crop-health" as const, value: "98%", label: "Crop Health", status: "Excellent", statusColor: "text-emerald-400", iconColor: "text-emerald-400" },
  { sectionId: "machinery" as const, value: "Active", label: "Machinery", status: "Running", statusColor: "text-amber-400", iconColor: "text-amber-400" },
];

const ALERTS = [
  { id: "uv", title: "High UV Index Alert", desc: "UV index expected to reach critical levels between 12:00-15:00. Recommend shade cloth deployment.", time: "15 mins ago", gradient: "from-amber-900/60 to-transparent", iconBg: "bg-amber-500", resolved: false },
  { id: "zone-c", title: "Zone C Irrigation Low", desc: "Water pressure in Zone C dropped to 40psi. Check water supply line.", time: "2 hours ago", gradient: "from-red-900/60 to-transparent", iconBg: "bg-red-500", resolved: false },
  { id: "sensor-maint", title: "Sensor Maintenance Due", desc: "Soil moisture sensor in North sector requires quarterly calibration.", time: "1 day ago", gradient: "from-blue-900/60 to-transparent", iconBg: "bg-blue-500", resolved: false },
  { id: "planting", title: "Optimal Planting Window", desc: "Weather conditions ideal for next planting cycle. Temperature and humidity optimal.", time: "3 days ago", gradient: "from-blue-900/60 to-transparent", iconBg: "bg-blue-500", resolved: true },
];

const SCHEDULE_ITEMS = [
  { id: "zone-a", title: "Irrigation - Zone A", detail: "05:00 AM • 15 min", tag: "Zone A", tagColor: "bg-emerald-500/20 text-emerald-300", status: "Done", statusColor: "text-emerald-400", gradient: "from-emerald-500/10 to-transparent" },
  { id: "zone-b", title: "Irrigation - Zone B", detail: "05:45 AM • 45 min", tag: "Zone B", tagColor: "bg-blue-500/20 text-blue-300", status: "Running", statusColor: "text-blue-400", gradient: "from-blue-500/10 to-transparent" },
  { id: "zone-c", title: "Irrigation - Zone C", detail: "07:30 AM • 45 min", tag: "Zone C", tagColor: "bg-amber-500/20 text-amber-300", status: "Pending", statusColor: "text-amber-400", gradient: "from-zinc-800/80 to-transparent", canStart: true },
  { id: "pest", title: "Pest Monitoring", detail: "10:00 AM • 30 min", tag: "Full Field", tagColor: "bg-amber-500/20 text-amber-300", status: "Pending", statusColor: "text-amber-400", gradient: "from-zinc-800/80 to-transparent", canStart: true },
  { id: "fert", title: "Fertilizer Application", detail: "02:00 PM • 60 min", tag: "Sector 7", tagColor: "bg-amber-500/20 text-amber-300", status: "Pending", statusColor: "text-amber-400", gradient: "from-zinc-800/80 to-transparent", canStart: true },
];

function SectionIcon({ type, className = "h-6 w-6" }: { type: string; className?: string }) {
  const c = className;
  if (type === "droplet")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
    );
  if (type === "thermometer")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
    );
  if (type === "wind")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2.5 2.5 0 1 1 11 8H2"/><path d="M12.6 19.4A2.5 2.5 0 1 0 14 16H2"/></svg>
    );
  if (type === "npk")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M2 12h4"/><path d="M6 8v8"/><path d="M10 12h4"/><path d="M14 8v8"/><path d="M18 12h2"/><path d="M2 17h20"/></svg>
    );
  if (type === "leaf")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
    );
  if (type === "machinery")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={c}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11"/><path d="M15 18h2"/><path d="M19 18h2"/><path d="M18 8h1"/><path d="M2 14h12"/><path d="M4 11h2"/><path d="M8 11h2"/><path d="M12 11h2"/></svg>
    );
  return null;
}

export default function FarmReadinessPage() {
  const [activeTab, setActiveTab] = useState<ReadinessTab>("overview");
  const [selectedSection, setSelectedSection] = useState<typeof SECTIONS[number] | null>(null);
  const [buttonAction, setButtonAction] = useState<"download" | "configure" | null>(null);
  const [configOpen, setConfigOpen] = useState(false);
  const [irrigation, setIrrigation] = useState({ zoneA: false, zoneB: true, zoneC: false });
  const [resolvedAlerts, setResolvedAlerts] = useState<Set<string>>(new Set());
  const [scheduleStarted, setScheduleStarted] = useState<Set<string>>(new Set());

  const handleResolve = (id: string) => setResolvedAlerts((prev) => new Set(prev).add(id));
  const handleStart = (id: string) => setScheduleStarted((prev) => new Set(prev).add(id));

  const runDownload = () => {
    setButtonAction("download");
    setTimeout(() => setButtonAction(null), 2500);
  };
  const runConfigure = () => {
    setConfigOpen(true);
    setButtonAction("configure");
    setTimeout(() => setButtonAction(null), 1500);
  };

  return (
    <section className="pt-12 pb-24 space-y-8">
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          IoT SENSOR NETWORK
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Farm Readiness
        </h1>
        <p className="text-zinc-400 max-w-2xl">
          Real-time IoT sensor grid for agricultural readiness and crop health monitoring.
        </p>
      </header>

      <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-2 py-1">
        {[
          { id: "overview" as const, label: "Overview" },
          { id: "sensors" as const, label: "Sensors" },
          { id: "alerts" as const, label: "Alerts" },
          { id: "schedule" as const, label: "Schedule" },
        ].map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
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
        <div className="grid gap-6 md:grid-cols-3 items-start">
          <div className="space-y-4 md:col-span-2 min-w-0">
            {/* Metric grid: 3 columns × 2 rows on desktop, 2 columns on md */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
              {OVERVIEW_CARDS.map((card) => (
                <button
                  key={card.sectionId}
                  type="button"
                  onClick={() => setSelectedSection(SECTIONS.find((s) => s.id === card.sectionId) ?? null)}
                  className="group rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 text-left space-y-1.5 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.2)]"
                >
                  <div className="flex items-start justify-between">
                    <span className={`${card.iconColor} opacity-90`}>
                      <SectionIcon type={card.sectionId === "soil-moisture" ? "droplet" : card.sectionId === "temperature" ? "thermometer" : card.sectionId === "wind-speed" ? "wind" : card.sectionId === "npk-levels" ? "npk" : card.sectionId === "crop-health" ? "leaf" : "machinery"} className="h-5 w-5" />
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 mt-1" aria-hidden />
                  </div>
                  <p className="text-xl font-semibold text-white">{card.value}</p>
                  <p className="text-[11px] text-zinc-500">{card.label}</p>
                  <p className={`text-[11px] font-medium ${card.statusColor}`}>{card.status}</p>
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 space-y-3">
              <p className="text-xs text-emerald-300">SAT-LINK: ONLINE</p>
              <p className="text-[11px] text-zinc-500">
                LAT: 45.2391 N | LON: 12.4093 E
              </p>
              <div className="mt-3 h-28 rounded-lg border border-emerald-500/40 bg-black/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-transparent to-emerald-500/20" />
                <div className="absolute inset-x-0 top-0 h-0.5 bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-satlink-scan" />
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-400 mt-2">
                <span>Sector 7 - Wheat Fields</span>
                <span className="text-[11px] text-zinc-500">Last scan 14 mins ago</span>
              </div>
              <button
                type="button"
                className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
              >
                Analyze Sector
              </button>
            </div>
          </div>

          <aside className="space-y-4 md:col-span-1 min-w-0">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 space-y-3">
              <h2 className="text-sm font-semibold text-white">Irrigation Control</h2>
              <ul className="space-y-2 text-xs">
                {[
                  { zone: "Zone A", key: "zoneA" as const, label: "Zone A" },
                  { zone: "Zone B", key: "zoneB" as const, label: "Zone B" },
                  { zone: "Zone C", key: "zoneC" as const, label: "Zone C" },
                ].map((z) => {
                  const on = irrigation[z.key];
                  return (
                    <li key={z.zone} className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2">
                      <span className="text-zinc-200">{z.zone}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-medium ${on ? "text-blue-400" : "text-zinc-500"}`}>
                          {on ? "ACTIVE" : "STANDBY"}
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={on}
                          onClick={() => setIrrigation((prev) => ({ ...prev, [z.key]: !prev[z.key] }))}
                          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${on ? "bg-emerald-600" : "bg-zinc-700"}`}
                        >
                          <span className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform ${on ? "translate-x-5" : "translate-x-0"}`} />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 space-y-3">
              <h2 className="text-sm font-semibold text-white">Weather Forecast</h2>
              <div className="flex gap-4 text-sm text-zinc-300">
                <span>Now 24°</span>
                <span>14:00 26°</span>
                <span>16:00 23°</span>
              </div>
              <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
                Warning: High UV index expected between 12:00 - 15:00
              </div>
            </div>
          </aside>
        </div>
      )}

      {activeTab === "sensors" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OVERVIEW_CARDS.map((card) => (
            <button
              key={card.sectionId}
              type="button"
              onClick={() => setSelectedSection(SECTIONS.find((s) => s.id === card.sectionId) ?? null)}
              className="group rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 text-left space-y-1.5 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.2)]"
            >
              <div className="flex items-start justify-between">
                <span className={card.iconColor}>
                  <SectionIcon type={card.sectionId === "soil-moisture" ? "droplet" : card.sectionId === "temperature" ? "thermometer" : card.sectionId === "wind-speed" ? "wind" : card.sectionId === "npk-levels" ? "npk" : card.sectionId === "crop-health" ? "leaf" : "machinery"} className="h-5 w-5" />
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 mt-1" aria-hidden />
              </div>
              <p className="text-xl font-semibold text-white">{card.value}</p>
              <p className="text-[11px] text-zinc-500">{card.label}</p>
              <p className={`text-[11px] font-medium ${card.statusColor}`}>{card.status}</p>
            </button>
          ))}
        </div>
      )}

      {activeTab === "alerts" && (
        <div className="space-y-4">
          <p className="text-sm text-zinc-400">Show All Alerts</p>
          <ul className="space-y-3">
            {ALERTS.map((alert) => {
              const isResolved = alert.resolved || resolvedAlerts.has(alert.id);
              return (
                <li
                  key={alert.id}
                  className={`rounded-xl border border-zinc-800 bg-gradient-to-r ${alert.gradient} p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`}
                >
                  <div className="flex gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${alert.iconBg} text-white`}>
                      {alert.id === "uv" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                      ) : alert.id === "zone-c" ? (
                        <span className="text-sm font-bold">!</span>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
                      )}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-semibold text-white">{alert.title}</h3>
                        {isResolved && (
                          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-medium text-emerald-300">Resolved</span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">{alert.desc}</p>
                      <p className="text-[11px] text-zinc-500 mt-1">{alert.time}</p>
                    </div>
                  </div>
                  {!isResolved && (
                    <button
                      type="button"
                      onClick={() => handleResolve(alert.id)}
                      className="rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 transition-colors shrink-0"
                    >
                      Resolve
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {activeTab === "schedule" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              Today&apos;s Schedule
            </h2>
            <button
              type="button"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 transition-colors inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Export Schedule
            </button>
          </div>
          <ul className="space-y-2">
            {SCHEDULE_ITEMS.map((item) => {
              const started = scheduleStarted.has(item.id);
              const isRunning = item.status === "Running" || (item.canStart && started);
              const isDone = item.status === "Done";
              const isPending = item.status === "Pending" && !started;
              return (
                <li
                  key={item.id}
                  className={`rounded-xl border border-zinc-800 bg-gradient-to-r ${item.gradient} p-4 flex flex-wrap items-center justify-between gap-3`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isDone ? "bg-emerald-500/20 text-emerald-400" : isRunning ? "bg-blue-500/20 text-blue-400" : "bg-amber-500/20 text-amber-400"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-zinc-500">{item.detail}</p>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${item.tagColor}`}>{item.tag}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium ${isDone ? "text-emerald-400" : isRunning ? "text-blue-400" : item.statusColor}`}>
                      {isDone ? "Done" : isRunning ? "Running" : "Pending"}
                    </span>
                    {item.canStart && isPending && (
                      <button
                        type="button"
                        onClick={() => handleStart(item.id)}
                        className="rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 transition-colors"
                      >
                        Start
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Section detail modal */}
      {selectedSection && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setSelectedSection(null)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-700 bg-[#1c1c1f] shadow-2xl shadow-black/50 p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <SectionIcon type={selectedSection.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white">{selectedSection.title}</h2>
                  <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {selectedSection.location}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSection(null)}
                className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3">
                <p className="text-[11px] text-zinc-500 uppercase tracking-wide">Current Reading</p>
                <p className="text-xl font-bold text-white mt-0.5">{selectedSection.reading}</p>
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3">
                <p className="text-[11px] text-zinc-500 uppercase tracking-wide">Status</p>
                <p className="text-lg font-semibold text-emerald-400 mt-0.5">{selectedSection.status}</p>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-800/60 bg-emerald-950/30 px-4 py-3 mb-4">
              <p className="text-[11px] text-zinc-400 uppercase tracking-wide">Description</p>
              <p className="text-sm text-emerald-100/90 mt-1">{selectedSection.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px] text-zinc-500 mb-5">
              <span>Unit: {selectedSection.unit}</span>
              <span>Last Update: {selectedSection.lastUpdate}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={runDownload}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download Data
              </button>
              <button
                type="button"
                onClick={runConfigure}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                Configure
              </button>
              <button
                type="button"
                className="rounded-xl border border-zinc-600 p-2.5 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-emerald-500/50 transition-all duration-300"
                aria-label="Copy or refresh"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Toast for button actions */}
      {buttonAction && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white shadow-xl">
          {buttonAction === "download" ? "Download started…" : "Opening configuration…"}
        </div>
      )}

      {/* Configure panel (button layout) */}
      {configOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50" aria-hidden="true" onClick={() => setConfigOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm rounded-l-2xl border border-zinc-700 border-r-0 bg-[#1c1c1f] shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Configure</h3>
              <button type="button" onClick={() => setConfigOpen(false)} className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <p className="text-xs text-zinc-500">
              {selectedSection ? `Settings for ${selectedSection.title}` : "Sensor configuration"}.
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <label className="text-[11px] text-zinc-500 uppercase tracking-wide">Threshold</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-zinc-500" placeholder="Default" />
              </div>
              <div>
                <label className="text-[11px] text-zinc-500 uppercase tracking-wide">Alert frequency</label>
                <select className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white">
                  <option>Every 5 min</option>
                  <option>Every 15 min</option>
                  <option>Every hour</option>
                </select>
              </div>
              <button type="button" className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-medium text-white hover:bg-emerald-500" onClick={() => setConfigOpen(false)}>
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
