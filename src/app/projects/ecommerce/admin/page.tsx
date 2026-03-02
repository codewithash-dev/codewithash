"use client";

import Link from "next/link";

export default function EcommerceAdminPage() {
  return (
    <main className="ecommerce-project min-h-screen bg-white text-slate-900 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <nav className="flex gap-4 text-sm text-slate-600 mb-6">
          <Link href="/projects/ecommerce/products" className="hover:text-slate-900">Products</Link>
          <Link href="/projects/ecommerce/cart" className="hover:text-slate-900">Cart</Link>
          <Link href="/projects/ecommerce/admin" className="font-medium text-slate-900">Admin</Link>
        </nav>
        <h1 data-gsap="fade-up" className="text-2xl font-bold mb-2">
          Admin Panel
        </h1>
        <p data-gsap="fade-up" className="text-slate-600 mb-8">
          Manage products, inventory, and orders for Demo Shop.
        </p>

        <div
          data-gsap="fade-up"
          data-gsap-delay="0.08"
          className="grid sm:grid-cols-2 gap-6 mb-10"
        >
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Products
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Add, edit, or remove products from the store.
            </p>
            <button
              type="button"
              className="ecommerce-cta btn-animate px-4 py-2 rounded-lg transition text-sm"
              style={{ backgroundColor: "#000", color: "#fff", backgroundImage: "none" }}
            >
              Manage products
            </button>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Orders
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              View and fulfill customer orders.
            </p>
            <button
              type="button"
              className="ecommerce-cta btn-animate px-4 py-2 rounded-lg transition text-sm"
              style={{ backgroundColor: "#000", color: "#fff", backgroundImage: "none" }}
            >
              View orders
            </button>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:col-span-2 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Inventory
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Update stock levels and track inventory.
            </p>
            <button
              type="button"
              className="ecommerce-cta btn-animate px-4 py-2 rounded-lg transition text-sm"
              style={{ backgroundColor: "#000", color: "#fff", backgroundImage: "none" }}
            >
              Update inventory
            </button>
          </section>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects/ecommerce/products"
            className="ecommerce-cta btn-animate inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "#000", color: "#fff", backgroundImage: "none" }}
          >
            View Store
          </Link>
          <Link
            href="/projects/ecommerce"
            className="text-slate-500 hover:text-slate-900 transition text-sm"
          >
            ← Back to project
          </Link>
        </div>
      </div>
    </main>
  );
}
