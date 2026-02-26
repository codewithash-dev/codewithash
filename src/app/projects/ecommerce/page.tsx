import Link from "next/link";

export default function EcommerceProjectPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <p
          data-gsap="fade-up"
          className="text-xs sm:text-sm text-slate-500 mb-3"
        >
          <Link
            href="/projects"
            className="hover:text-slate-900 transition underline-offset-4 hover:underline"
          >
            Projects
          </Link>{" "}
          <span className="mx-1">/</span>
          <span className="text-slate-700">E-Commerce Store</span>
        </p>

        {/* Title + description */}
        <section className="mb-10">
          <h1
            data-gsap="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
          >
            E-Commerce Store
          </h1>
          <p
            data-gsap="fade-up"
            data-gsap-delay="0.08"
            className="text-base sm:text-lg text-slate-600 max-w-2xl"
          >
            Full-stack e-commerce built with Next.js, Supabase, and Stripe. Includes
            products, cart management, checkout flow, and an admin experience for
            managing the store.
          </p>
        </section>

        {/* Primary actions */}
        <section
          data-gsap="fade-up"
          data-gsap-delay="0.12"
          className="mb-16 flex flex-wrap gap-4"
        >
          <Link
            href="/projects/ecommerce/products"
            className="btn-animate inline-flex items-center justify-center gradient-cta text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Store
          </Link>
          <Link
            href="/projects/ecommerce/admin"
            className="btn-animate inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold"
            style={{
              background: "linear-gradient(to right, #5b21b6, #a21caf)",
              color: "#ffffff",
            }}
          >
            Admin Panel
          </Link>
          <a
            href="https://github.com/codewithash-dev/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animate inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold"
            style={{
              background: "linear-gradient(to right, #5b21b6, #a21caf)",
              color: "#ffffff",
            }}
          >
            View code
          </a>
        </section>

        {/* Tech stack + summary */}
        <section
          data-gsap="fade-up"
          data-gsap-delay="0.18"
          className="grid gap-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)]"
        >
          <div>
            <h2 className="text-xl font-semibold mb-3">What&apos;s Included</h2>
            <ul className="space-y-2 text-sm sm:text-base text-slate-600 list-disc list-inside">
              <li>Product listing grid with filtering-ready structure.</li>
              <li>Persistent cart with add, remove, and quantity updates.</li>
              <li>Checkout flow wired for Stripe payments.</li>
              <li>Supabase-backed data layer for products and orders.</li>
              <li>Admin routes for managing inventory and orders.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Supabase",
                "Stripe",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

