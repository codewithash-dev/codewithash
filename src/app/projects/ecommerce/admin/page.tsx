"use client";

import Link from "next/link";
import StoreNav from "../StoreNav";

export default function EcommerceAdminPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pb-16">
      <StoreNav cartCount={0} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h1 data-gsap="fade-up" className="text-2xl font-bold mb-2">
          Admin Panel
        </h1>
        <p data-gsap="fade-up" className="text-slate-600 mb-8">
          Manage products, inventory, and orders for CodeWithAsh Store.
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
              className="btn-animate px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition text-sm"
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
              className="btn-animate px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition text-sm"
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
              className="btn-animate px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition text-sm"
            >
              Update inventory
            </button>
          </section>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects/ecommerce/products"
            className="btn-animate inline-flex items-center justify-center gradient-cta text-white px-6 py-3 rounded-lg font-semibold"
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
