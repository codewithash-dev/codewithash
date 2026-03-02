"use client";

import Link from "next/link";

type StoreNavProps = {
  cartCount?: number;
};

export default function StoreNav({ cartCount = 0 }: StoreNavProps) {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-14 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        <Link
          href="/projects/ecommerce/products"
          className="font-semibold text-slate-900 hover:text-slate-700 transition"
        >
          CodeWithAsh Shop
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <Link
            href="/projects/ecommerce/products"
            className="hover:text-slate-900 font-medium transition"
          >
            Products
          </Link>
          <Link
            href="/projects/ecommerce/cart"
              className="hover:text-slate-900 font-medium transition inline-flex items-center gap-1"
          >
            Cart
            {cartCount > 0 && (
              <span className="ecommerce-cta text-xs font-bold rounded-full min-w-[1.25rem] h-5 px-1.5 flex items-center justify-center" style={{ backgroundColor: "#000", color: "#fff", backgroundImage: "none" }}>
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            href="/projects/ecommerce/admin"
              className="hover:text-slate-900 font-medium transition"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
