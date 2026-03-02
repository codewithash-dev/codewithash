export default function GreenwashScannerPage() {
  return (
    <section className="pt-16 pb-24 flex flex-col items-start gap-10">
      <header className="space-y-3 max-w-2xl">
        <p className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-[11px] font-semibold text-red-300 uppercase tracking-wide">
          AI Compliance Engine v3.0
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Greenwash Scanner
        </h1>
        <p className="text-zinc-400">
          Analyze marketing claims, corporate reports, and product pages for misleading environmental claims using NLP and regulatory databases.
        </p>
      </header>

      <div className="w-full max-w-3xl">
        <div className="relative rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-4 shadow-[0_0_35px_rgba(168,85,247,0.4)]">
          <span className="text-zinc-500 text-sm">🌐</span>
          <input
            type="url"
            placeholder="Enter URL to analyze (e.g. company.com/sustainability)"
            className="flex-1 bg-transparent text-sm md:text-base text-zinc-100 placeholder:text-zinc-500 outline-none"
          />
          <button className="rounded-full bg-emerald-500 px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold text-black">
            Analyze
          </button>
        </div>
      </div>
    </section>
  );
}


