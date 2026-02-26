import Link from "next/link";

const METRICS = [
  { label: "Integrated Suite", value: "6-in-1" },
  { label: "More Revenue", value: "40%" },
  { label: "Saved Weekly", value: "20hrs" },
];

const MODULES = [
  {
    name: "LawnCRM Core",
    badge: "Customer Profiles",
    description:
      "Client Management + Scheduling + Messaging. The foundation of your landscaping business.",
  },
  {
    name: "RouteIQ",
    badge: "Smart Routing",
    description:
      "AI route optimization and fuel efficiency so every crew day is perfectly planned.",
  },
  {
    name: "LawnQuote AI",
    badge: "Instant Estimates",
    description:
      "Satellite-based quote generator that turns leads into booked jobs in minutes.",
  },
  {
    name: "CrewHub",
    badge: "Time Tracking",
    description:
      "Crew app, timesheets, and payroll exports so your field team runs like a franchise.",
  },
  {
    name: "WeatherShield Pro",
    badge: "Auto-Reschedule",
    description:
      "Weather-aware scheduling that automatically shifts jobs when storms roll in.",
  },
  {
    name: "LawnPay",
    badge: "Auto-Billing",
    description:
      "Billing, invoicing, and tap‑to‑pay that keeps cashflow healthy and predictable.",
  },
];

const PRICING = [
  {
    name: "Starter",
    highlight: "Essential tools for solo operators.",
    price: "$49/mo",
    cta: "Start Free Trial",
    featured: false,
    items: [
      "Client Portal",
      "Basic Scheduling",
      "Up to 50 active customers",
      "LawnPay",
      "LawnCRM Core",
    ],
  },
  {
    name: "Growth",
    highlight: "For growing teams needing efficiency.",
    price: "$99/mo",
    cta: "Get Started",
    featured: true,
    items: [
      "Crew App Access",
      "Advanced Reporting",
      "LawnQuote AI (50/mo)",
      "RouteIQ Optimization",
      "Everything in Starter",
    ],
  },
  {
    name: "Team Pro",
    highlight: "Complete management for multi-crew ops.",
    price: "$149/mo",
    cta: "Contact Sales",
    featured: false,
    items: [
      "Priority Support",
      "Payroll Exports",
      "Unlimited Crew Members",
      "CrewHub Management",
      "Everything in Growth",
    ],
  },
];

const RESOURCES = [
  {
    title: "Video Tutorials",
    description:
      "Step-by-step guides to get you up and running with each Lawn Care OS module.",
  },
  {
    title: "Documentation",
    description:
      "Complete API docs and integration guides for connecting to your existing stack.",
  },
  {
    title: "Community Forum",
    description:
      "Connect with other landscapers, share playbooks, and learn what's working.",
  },
  {
    title: "Live Webinars",
    description:
      "Weekly training sessions with product experts and industry leaders.",
  },
  {
    title: "Case Studies",
    description:
      "Real-world success stories from crews that scaled with Lawn Care OS.",
  },
  {
    title: "Support Center",
    description: "24/7 customer support so you're never stuck on the job.",
  },
];

export default function LawnCareProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero */}
        <section className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-[0.25em] mb-3">
              Rated #1 Software for Landscaping Businesses
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              Welcome to <span className="text-green-400">Lawn Care OS</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8">
              Built as a flagship product by Code With Ash. Replace the chaos of
              texts, notebooks, and spreadsheets with one powerful platform
              optimized for scheduling, routing, quoting, and getting paid.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="btn-animate inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400 transition">
                Start Free Trial
              </button>
              <button className="btn-animate inline-flex items-center justify-center rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-white hover:text-black transition">
                Watch Demo
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-gray-800 bg-[#020617] px-4 py-3 text-left"
                >
                  <p className="text-sm font-semibold text-white">{m.value}</p>
                  <p className="text-xs text-gray-400">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-emerald-500/10 to-transparent blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl border border-green-500/30 bg-gradient-to-br from-[#020617] via-[#020617] to-black p-6 shadow-[0_18px_50px_rgba(22,163,74,0.45)]">
              <p className="text-xs font-semibold text-green-300 uppercase tracking-[0.25em] mb-3">
                Command Center
              </p>
              <h2 className="text-xl font-bold mb-4">
                Live schedule, crews, and cashflow at a glance.
              </h2>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li>• Live GPS crew tracking</li>
                <li>• Drag-and-drop dispatch board</li>
                <li>• Real-time revenue and receivables</li>
                <li>• Pending quote approvals in one view</li>
              </ul>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-black/50 p-3 border border-gray-800">
                  <p className="text-green-400 font-semibold mb-1">
                    Today&apos;s Routes
                  </p>
                  <p className="text-gray-400">12 crews · 86 stops</p>
                </div>
                <div className="rounded-xl bg-black/50 p-3 border border-gray-800">
                  <p className="text-green-400 font-semibold mb-1">
                    Payments Collected
                  </p>
                  <p className="text-gray-400">$18,240 · 92%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="space-y-8">
          <header className="flex flex-col gap-2">
            <p className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-[0.25em]">
              Featured Work
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Premium Lawn Care Portfolio
                </h2>
                <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
                  Watch Lawn Care OS in action. Each project showcases precision,
                  attention to detail, and professional execution.
                </p>
              </div>
              <Link
                href="#pricing"
                className="btn-animate inline-flex items-center justify-center rounded-lg border border-gray-700 px-4 py-2 text-xs sm:text-sm text-gray-200 hover:bg-white hover:text-black transition"
              >
                View complete portfolio →
              </Link>
            </div>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Cutting Service",
                subtitle: "Professional Lawn Cutting",
                detail: "Zero-Turn Efficiency",
                body: "Precision mowing with perfect stripe patterns.",
              },
              {
                title: "Design & Build",
                subtitle: "Landscape Design",
                detail: "Complete Transformation",
                body: "Beautiful before-and-after garden installations.",
              },
              {
                title: "Portfolio",
                subtitle: "Premium Project",
                detail: "Golden Hour Beauty",
                body: "Finished landscapes with professional lighting and edges.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-[#020617] via-[#020617] to-black p-5"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-green-400">
                  {card.title}
                </div>
                <h3 className="text-lg font-semibold mb-1">{card.subtitle}</h3>
                <p className="text-sm text-green-300 mb-2">{card.detail}</p>
                <p className="text-sm text-gray-300">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="space-y-8">
          <header className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-[0.25em] mb-3">
              The Full Stack
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Six powerful modules. One integrated platform.
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Each module is powerful on its own, but together they become the
              ultimate Lawn Care OS.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <article
                key={mod.name}
                className="rounded-2xl border border-gray-800 bg-[#020617] p-5 flex flex-col justify-between hover:border-green-500/70 transition"
              >
                <div>
                  <p className="text-xs font-semibold text-green-300 uppercase tracking-wide mb-2">
                    {mod.badge}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{mod.name}</h3>
                  <p className="text-sm text-gray-300">{mod.description}</p>
                </div>
                <button className="mt-4 inline-flex text-xs text-green-300 hover:text-green-200 underline underline-offset-4">
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Dashboard highlight */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Control your entire operation from one screen.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-5">
              Real-time crew tracking, instant drag-and-drop scheduling, and
              financial health at a glance. The Dashboard is your command
              center.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Live GPS crew tracking</li>
              <li>• Drag &amp; drop dispatch board</li>
              <li>• Financial health pulse</li>
              <li>• Pending quote approvals in one view</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl border border-gray-800 bg-[#020617] p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Today&apos;s Overview
                </p>
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-[11px] text-green-300">
                  Live
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl border border-gray-800 bg-black/40 p-3">
                  <p className="text-gray-400">Active Crews</p>
                  <p className="text-lg font-semibold text-white">12</p>
                </div>
                <div className="rounded-xl border border-gray-800 bg-black/40 p-3">
                  <p className="text-gray-400">Stops Today</p>
                  <p className="text-lg font-semibold text-white">86</p>
                </div>
                <div className="rounded-xl border border-gray-800 bg-black/40 p-3">
                  <p className="text-gray-400">On-Time</p>
                  <p className="text-lg font-semibold text-white">97%</p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-800 bg-black/40 p-4 text-xs text-gray-300">
                <p className="font-semibold text-white mb-1">
                  Financial Health Pulse
                </p>
                <p>Today: $18,240 collected · 11 invoices overdue</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="space-y-8">
          <header className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-[0.25em] mb-3">
              Simple Pricing
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Simple, transparent pricing
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Choose the plan that fits your business stage. Upgrade as you
              grow.
            </p>
          </header>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-2xl border bg-[#020617] p-6 flex flex-col ${
                  tier.featured
                    ? "border-green-500 shadow-[0_18px_60px_rgba(22,163,74,0.55)]"
                    : "border-gray-800"
                }`}
              >
                {tier.featured && (
                  <span className="mb-3 inline-flex self-start rounded-full bg-green-600/20 px-3 py-1 text-[11px] font-semibold text-green-300">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-300 mb-3">{tier.highlight}</p>
                <p className="text-2xl font-bold mb-4">{tier.price}</p>
                <ul className="mb-6 space-y-2 text-sm text-gray-300">
                  {tier.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <button className="mt-auto btn-animate inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition">
                  {tier.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="space-y-8">
          <header className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-[0.25em] mb-3">
              Learn &amp; Support
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Resources to help you succeed
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              From training materials to customer support, Lawn Care OS has
              everything you need to master the platform.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r) => (
              <article
                key={r.title}
                className="rounded-2xl border border-gray-800 bg-[#020617] p-5"
              >
                <h3 className="text-base font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-gray-300">{r.description}</p>
              </article>
            ))}
          </div>
          <p className="text-center text-sm text-gray-300">
            Have more questions?{" "}
            <Link
              href="/contact"
              className="text-green-300 hover:text-green-200 underline underline-offset-4"
            >
              Contact our team
            </Link>
            .
          </p>
        </section>

        {/* Enterprise */}
        <section className="space-y-8">
          <div className="rounded-3xl border border-green-500/40 bg-gradient-to-br from-green-600/30 via-black to-black p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-xs sm:text-sm font-semibold text-green-200 uppercase tracking-[0.25em] mb-3">
                  For Large Teams
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Enterprise Solutions
                </h2>
                <p className="text-sm sm:text-base text-green-50 mb-5">
                  Built for multi-location operations, large teams, and complex
                  business requirements.
                </p>
                <h3 className="text-lg font-semibold mb-1">Business Elite</h3>
                <p className="text-sm text-green-100 mb-4">
                  Custom pricing with unlimited everything, dedicated support,
                  and advanced security.
                </p>
                <ul className="space-y-2 text-sm text-green-100">
                  <li>• Unlimited team members &amp; locations</li>
                  <li>• Advanced analytics and profitability insights</li>
                  <li>• SSO, granular permissions, and audit logs</li>
                  <li>• Custom integrations and white-label options</li>
                </ul>
                <button className="mt-6 btn-animate inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-100 transition">
                  Schedule Demo
                </button>
              </div>
              <div className="space-y-4 text-sm text-green-100 min-w-[220px]">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-black/40 p-3 border border-green-500/40">
                    <p className="text-xs text-green-200">Fortune</p>
                    <p className="text-xl font-bold">500</p>
                  </div>
                  <div className="rounded-xl bg-black/40 p-3 border border-green-500/40">
                    <p className="text-xs text-green-200">Locations</p>
                    <p className="text-xl font-bold">100+</p>
                  </div>
                  <div className="rounded-xl bg-black/40 p-3 border border-green-500/40">
                    <p className="text-xs text-green-200">Customers</p>
                    <p className="text-xl font-bold">2M+</p>
                  </div>
                  <div className="rounded-xl bg-black/40 p-3 border border-green-500/40">
                    <p className="text-xs text-green-200">Revenue</p>
                    <p className="text-xl font-bold">$50M+</p>
                  </div>
                </div>
                <div className="rounded-xl bg-black/40 p-4 border border-green-500/40">
                  <p className="text-xs text-green-200 mb-1">
                    &quot;Lawn Care OS transformed how we manage 50+ crews
                    across 3 states. The white-label solution let us rebrand it
                    for our franchise partners.&quot;
                  </p>
                  <p className="text-xs font-semibold mt-2">John Davidson</p>
                  <p className="text-[11px] text-green-200">
                    CEO, National Landscaping Group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}