import Link from "next/link";
import Image from "next/image";

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
  { title: "Video Tutorials", description: "Step-by-step guides to get you up and running with each Lawn Care OS module." },
  { title: "Documentation", description: "Complete API docs and integration guides for connecting to your existing stack." },
  { title: "Community Forum", description: "Connect with other landscapers, share playbooks, and learn what's working." },
  { title: "Live Webinars", description: "Weekly training sessions with product experts and industry leaders." },
  { title: "Case Studies", description: "Real-world success stories from crews that scaled with Lawn Care OS." },
  { title: "Support Center", description: "24/7 customer support so you're never stuck on the job." },
];

const FEATURED_WORK = [
  {
    title: "Cutting Service",
    subtitle: "Professional Lawn Cutting",
    detail: "Zero-Turn Efficiency",
    body: "Precision mowing with perfect stripe patterns.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop",
  },
  {
    title: "Design & Build",
    subtitle: "Landscape Design",
    detail: "Complete Transformation",
    body: "Beautiful before-and-after garden installations.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop",
  },
  {
    title: "Portfolio",
    subtitle: "Premium Project",
    detail: "Golden Hour Beauty",
    body: "Finished landscapes with professional lighting and edges.",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&h=400&fit=crop",
  },
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop";
const DASHBOARD_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop";

export default function LawnCareProjectPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar / back */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/projects"
            className="text-sm text-slate-600 hover:text-emerald-600 transition font-medium"
          >
            ← Back to Projects
          </Link>
          <span className="text-sm font-semibold text-emerald-600">Lawn Care OS</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        {/* Hero: two-column, white bg, green accent */}
        <section className="pt-12 lg:pt-16 grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              Rated #1 Software for Landscaping Businesses
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
              Welcome to <span className="text-emerald-600">Lawn Care OS</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8">
              Replace the chaos of texts, notebooks, and spreadsheets with one powerful platform
              optimized for scheduling, routing, quoting, and getting paid.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                type="button"
                className="btn-animate inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-500 transition"
              >
                Start Free Trial
              </button>
              <button
                type="button"
                className="btn-animate inline-flex items-center justify-center rounded-xl border-2 border-slate-300 text-slate-700 px-6 py-3 font-semibold hover:border-slate-400 hover:bg-slate-50 transition"
              >
                Watch Demo
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left"
                >
                  <p className="text-sm font-bold text-slate-900">{m.value}</p>
                  <p className="text-xs text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl blur-2xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3]">
              <Image
                src={HERO_IMAGE}
                alt="Lawn care professional at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Metrics strip: full-width light green */}
        <section className="my-16 lg:my-24 rounded-2xl bg-emerald-50 border border-emerald-100 py-8 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-emerald-700">6-in-1</p>
              <p className="text-sm text-emerald-800/80 mt-1">Integrated Suite</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-emerald-700">40%</p>
              <p className="text-sm text-emerald-800/80 mt-1">More Revenue</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-emerald-700">20hrs</p>
              <p className="text-sm text-emerald-800/80 mt-1">Saved Weekly</p>
            </div>
          </div>
        </section>

        {/* Featured Work: cards with images */}
        <section className="space-y-8">
          <header className="flex flex-col gap-2">
            <p className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-[0.2em]">
              Featured Work
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Premium Lawn Care Portfolio
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
                  Watch Lawn Care OS in action. Each project showcases precision and professional execution.
                </p>
              </div>
              <a
                href="#pricing"
                className="btn-animate inline-flex items-center justify-center rounded-lg border-2 border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                View complete portfolio →
              </a>
            </div>
          </header>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_WORK.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    {card.title}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mt-1">{card.subtitle}</h3>
                  <p className="text-sm text-emerald-700 font-medium mt-0.5">{card.detail}</p>
                  <p className="text-sm text-slate-600 mt-2">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="pt-16 lg:pt-24 space-y-8">
          <header className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              The Full Stack
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Six powerful modules. One integrated platform.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Each module is powerful on its own, but together they become the ultimate Lawn Care OS.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <article
                key={mod.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition"
              >
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                  {mod.badge}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{mod.name}</h3>
                <p className="text-sm text-slate-600">{mod.description}</p>
                <button
                  type="button"
                  className="mt-4 text-sm font-medium text-emerald-600 hover:text-emerald-700 underline underline-offset-4"
                >
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Dashboard highlight: two-column, image right */}
        <section className="pt-16 lg:pt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Control your entire operation from one screen.
            </h2>
            <p className="text-slate-600 mb-5">
              Real-time crew tracking, instant drag-and-drop scheduling, and financial health at a glance.
              The Dashboard is your command center.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Live GPS crew tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Drag & drop dispatch board
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Financial health pulse
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Pending quote approvals in one view
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-50 rounded-2xl blur-xl opacity-50" />
            <div className="relative rounded-2xl border border-slate-200 overflow-hidden shadow-lg aspect-video">
              <Image
                src={DASHBOARD_IMAGE}
                alt="Dashboard overview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pt-16 lg:pt-24 space-y-8">
          <header className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              Simple Pricing
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Simple, transparent pricing
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Choose the plan that fits your business stage. Upgrade as you grow.
            </p>
          </header>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-2xl border-2 p-6 flex flex-col ${
                  tier.featured
                    ? "border-emerald-500 bg-emerald-50/50 shadow-lg shadow-emerald-500/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                {tier.featured && (
                  <span className="mb-3 inline-flex self-start rounded-full bg-emerald-600 text-white px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-600 mb-3">{tier.highlight}</p>
                <p className="text-2xl font-bold text-slate-900 mb-4">{tier.price}</p>
                <ul className="mb-6 space-y-2 text-sm text-slate-600">
                  {tier.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-auto btn-animate inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    tier.featured
                      ? "bg-emerald-600 text-white hover:bg-emerald-500"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {tier.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="pt-16 lg:pt-24 space-y-8">
          <header className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              Learn & Support
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Resources to help you succeed
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              From training materials to customer support, Lawn Care OS has everything you need.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r) => (
              <article
                key={r.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-emerald-200 transition"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600">{r.description}</p>
              </article>
            ))}
          </div>
          <p className="text-center text-sm text-slate-600">
            Have more questions?{" "}
            <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium underline underline-offset-4">
              Contact our team
            </Link>
            .
          </p>
        </section>

        {/* Enterprise CTA: green gradient */}
        <section className="pt-16 lg:pt-24">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              <div className="max-w-xl">
                <p className="text-xs sm:text-sm font-semibold text-emerald-200 uppercase tracking-[0.2em] mb-3">
                  For Large Teams
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Enterprise Solutions
                </h2>
                <p className="text-emerald-50 mb-5">
                  Built for multi-location operations, large teams, and complex business requirements.
                </p>
                <h3 className="text-lg font-semibold mb-1">Business Elite</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Custom pricing with unlimited everything, dedicated support, and advanced security.
                </p>
                <ul className="space-y-2 text-sm text-emerald-100">
                  <li>• Unlimited team members & locations</li>
                  <li>• Advanced analytics and profitability insights</li>
                  <li>• SSO, granular permissions, and audit logs</li>
                  <li>• Custom integrations and white-label options</li>
                </ul>
                <button
                  type="button"
                  className="mt-6 btn-animate inline-flex items-center justify-center rounded-xl bg-white text-emerald-800 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-50 transition"
                >
                  Schedule Demo
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 max-w-xs">
                {[
                  { label: "Fortune", value: "500" },
                  { label: "Locations", value: "100+" },
                  { label: "Customers", value: "2M+" },
                  { label: "Revenue", value: "$50M+" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white/10 backdrop-blur p-3 border border-white/20"
                  >
                    <p className="text-xs text-emerald-200">{label}</p>
                    <p className="text-xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
