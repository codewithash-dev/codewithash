"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CERTIFICATES = [
  {
    name: "Carbon Offset Certificate #202401",
    chain: "Ethereum",
    time: "24 mins ago",
    hash: "0x7f9a8c2d...5e1b",
    gas: "0.042 ETH",
  },
  {
    name: "ISO 14001 Environmental Management",
    chain: "Polygon",
    time: "2 hours ago",
    hash: "0x3b2e1f4a...9c7d",
    gas: "0.031 ETH",
  },
  {
    name: "Scope 3 Emission Verification",
    chain: "Ethereum",
    time: "1 day ago",
    hash: "0x8d4c6e2b...1a3f",
    gas: "0.067 ETH",
  },
  {
    name: "Water Conservation Badge",
    chain: "Polygon",
    time: "3 days ago",
    hash: "0x5c9e7ab1...4d2c",
    gas: "0.026 ETH",
  },
];

const AUDIT_TRAILS = [
  { title: "Certificate Uploaded", by: "admin@ecosphere.io", date: "Nov 30, 2024 14:32" },
  { title: "Blockchain Verification", by: "system@ecosphere.io", date: "Nov 30, 2024 14:28" },
  { title: "Access Granted", by: "admin@ecosphere.io", date: "Nov 29, 2024 09:15" },
  { title: "Export Report", by: "admin@ecosphere.io", date: "Nov 28, 2024 16:42" },
];

const BLOCKCHAIN_TXS = [
  { address: "0x7f9a8c2d...5e1b", time: "24 mins ago", eth: "0.042 ETH" },
  { address: "0x3b2e1f4a...9c7d", time: "2 hours ago", eth: "0.018 ETH" },
  { address: "0x8d4c6e2b...1a3f", time: "1 day ago", eth: "0.091 ETH" },
];

const INTEGRATIONS = [
  { name: "Ethereum Network", id: "0x742d35Cc...1d9d", status: "Connected", statusColor: "text-emerald-400" },
  { name: "Polygon Testnet", id: "0x5aAeb6053...5F1b", status: "Connected", statusColor: "text-emerald-400" },
  { name: "Salesforce CRM", desc: "Real-time data sync", status: "Syncing", statusColor: "text-amber-400" },
  { name: "ISO 14001 Database", desc: "Automated validation", status: "Connected", statusColor: "text-emerald-400" },
];

type VaultTab = "certificates" | "audit" | "blockchain" | "integrations";

export default function EvidenceVaultPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<VaultTab>("certificates");
  const [expandedCertificate, setExpandedCertificate] = useState<string | null>(
    CERTIFICATES[0]?.name ?? null
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-eco-vault-hero]",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
      gsap.fromTo(
        "[data-eco-vault-row]",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.06,
          delay: 0.25,
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="pt-12 pb-24">
      <header data-eco-vault-hero className="mb-8 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Evidence
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-all duration-300 hover:shadow-[0_0_24px_rgba(16,185,129,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Evidence Vault
          </h1>
        </div>
        <p className="text-zinc-400 max-w-2xl">
          Secure, blockchain-verified repository for all your sustainability certifications and audit trails.
        </p>
      </header>

      <div data-eco-vault-hero className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex flex-wrap items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 p-1.5">
          {[
            { id: "certificates", label: "Certificates", icon: "document" as const },
            { id: "audit", label: "Audit Trails", icon: "document" as const },
            { id: "blockchain", label: "Blockchain", icon: "lock" as const },
            { id: "integrations", label: "Integrations", icon: "filter" as const },
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as VaultTab)}
                className={`inline-flex min-h-[40px] min-w-[120px] items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    : "text-white hover:bg-zinc-800 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                }`}
              >
                {tab.icon === "document" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                )}
                {tab.icon === "lock" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                )}
                {tab.icon === "filter" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
        <div className="flex gap-2 text-xs text-zinc-500">
          <span className="hidden sm:inline">Vault Status:</span>
          <span className="font-medium text-emerald-300">All systems secure</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr),minmax(0,1.1fr)]">
        <div className="space-y-4">
          {activeTab === "certificates" && (
            <>
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-xs text-zinc-400 mb-2 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.12)] focus-within:border-emerald-500/50 focus-within:shadow-[0_0_24px_rgba(16,185,129,0.2)]">
                <input
                  type="text"
                  placeholder="Search certificates..."
                  className="w-full bg-transparent outline-none text-sm placeholder:text-zinc-500"
                />
              </div>
              <div className="space-y-3">
                {CERTIFICATES.map((cert, idx) => {
                  const isExpanded = expandedCertificate === cert.name;
                  return (
                    <div
                      key={cert.name}
                      data-eco-vault-row
                      onClick={() =>
                        setExpandedCertificate(isExpanded ? null : cert.name)
                      }
                      className={`group rounded-xl border px-4 py-3 transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? "border-emerald-500/60 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                          : "border-zinc-800 bg-zinc-950/60 hover:border-emerald-500/50 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:via-emerald-500/5 hover:to-transparent hover:shadow-[0_0_26px_rgba(16,185,129,0.25)]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
                            <span className="text-lg">▢</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white group-hover:text-emerald-200">
                              {cert.name}
                            </p>
                            <p className="text-xs text-zinc-300 group-hover:text-emerald-100/80">
                              {cert.chain} • {cert.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-right">
                          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-200">
                            Verified
                          </span>
                          <span className="hidden sm:inline text-[11px] text-zinc-400 group-hover:text-emerald-100/80">
                            ID #{idx + 1}
                          </span>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-4 space-y-3 border-t border-emerald-500/30 pt-3 text-xs text-zinc-200">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <p className="text-[11px] uppercase tracking-wide text-zinc-400">
                                Transaction Hash
                              </p>
                              <p className="font-mono text-sm text-emerald-200">
                                {cert.hash}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-[11px] uppercase tracking-wide text-zinc-400">
                                Gas Used
                              </p>
                              <p className="text-sm font-medium text-white">
                                {cert.gas}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <button
                              type="button"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 rounded-full bg-emerald-600 px-4 py-2 text-xs font-medium text-white hover:bg-emerald-500 hover:shadow-[0_0_18px_rgba(16,185,129,0.6)] transition-all duration-300"
                            >
                              Download
                            </button>
                            <button
                              type="button"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-sky-500 hover:shadow-[0_0_18px_rgba(56,189,248,0.6)] transition-all duration-300"
                            >
                              Share
                            </button>
                            <button
                              type="button"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 rounded-full bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-500 hover:shadow-[0_0_18px_rgba(248,113,113,0.6)] transition-all duration-300"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {activeTab === "audit" && (
            <div className="space-y-3">
              {AUDIT_TRAILS.map((entry) => (
                <div
                  key={entry.title + entry.date}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{entry.title}</p>
                      <p className="text-xs text-zinc-500">
                        By {entry.by} • {entry.date}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Success
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "blockchain" && (
            <div className="space-y-3">
              {BLOCKCHAIN_TXS.map((tx) => (
                <div
                  key={tx.address}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-white">{tx.address}</span>
                      <button type="button" className="rounded p-1 text-zinc-500 hover:text-emerald-400 hover:bg-zinc-800 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all duration-300" aria-label="Copy address">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </button>
                    </div>
                    <span className="text-xs text-zinc-500">{tx.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300">
                      Confirmed
                    </span>
                    <span className="text-sm font-medium text-white">{tx.eth}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {INTEGRATIONS.map((intg) => (
                <div
                  key={intg.name}
                  className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-emerald-400">
                        {intg.name.includes("Ethereum") ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                        ) : intg.name.includes("Polygon") ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400" aria-hidden="true">
                            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                          </svg>
                        ) : intg.name.includes("Salesforce") ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400" aria-hidden="true">
                            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{intg.name}</p>
                        <p className="text-xs text-zinc-500">{intg.desc ?? intg.id}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${intg.statusColor}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {intg.status}
                    </span>
                    <button type="button" className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 hover:shadow-[0_0_16px_rgba(16,185,129,0.5)] transition-all duration-300">
                      Configure
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 space-y-4 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_32px_rgba(16,185,129,0.1)]">
          <div>
            <h2 className="text-sm font-semibold text-white mb-1">Vault Security</h2>
            <p className="text-xs text-zinc-500">
              Snapshot of current encryption, blockchain, and access controls.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <dt className="text-zinc-500">Encryption</dt>
              <dd className="font-medium text-white">AES-256</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Blockchain</dt>
              <dd className="font-medium text-white">Polygon POS</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Access Level</dt>
              <dd className="font-medium text-white">Admin</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Total Assets</dt>
              <dd className="font-medium text-white">4 Certs</dd>
            </div>
          </dl>
          <div className="mt-2 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-500/5 px-4 py-3 text-xs text-emerald-200">
            Zero tamper events detected in the last 30 days.
          </div>
        </aside>
      </div>
    </section>
  );
}


