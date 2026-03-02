"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Cart = Record<string, number>;

const MOCK_PRODUCTS: { id: string; name: string; price: number }[] = [
  { id: "1", name: "Wireless Headphones", price: 89.99 },
  { id: "2", name: "Mechanical Keyboard", price: 129.99 },
  { id: "3", name: "USB-C Hub", price: 49.99 },
  { id: "4", name: "Desk Lamp", price: 39.99 },
  { id: "5", name: "Monitor Stand", price: 59.99 },
  { id: "6", name: "Webcam HD", price: 79.99 },
];

const CART_KEY = "codewithash-store-cart";

function getCart(): Cart {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setCart(cart: Cart) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartCount(cart: Cart): number {
  return Object.values(cart).reduce((a, q) => a + q, 0);
}

export default function EcommerceCartPage() {
  const [cart, setCartState] = useState<Cart>({});

  useEffect(() => {
    queueMicrotask(() => setCartState(getCart()));
  }, []);

  const updateCart = (id: string, delta: number) => {
    setCartState((prev) => {
      const next = { ...prev };
      const q = (next[id] ?? 0) + delta;
      if (q <= 0) delete next[id];
      else next[id] = q;
      setCart(next);
      return next;
    });
  };

  const count = cartCount(cart);
  const entries = Object.entries(cart).filter(([, q]) => q > 0);
  const byId = Object.fromEntries(MOCK_PRODUCTS.map((p) => [p.id, p]));
  const subtotal = entries.reduce(
    (sum, [id, q]) => sum + (byId[id]?.price ?? 0) * q,
    0
  );

  return (
    <main className="ecommerce-project min-h-screen bg-white text-slate-900 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <nav className="flex gap-4 text-sm text-slate-600 mb-6">
          <Link href="/projects/ecommerce/products" className="hover:text-slate-900">Products</Link>
          <Link href="/projects/ecommerce/cart" className="font-medium text-slate-900">Cart {count > 0 && `(${count})`}</Link>
          <Link href="/projects/ecommerce/admin" className="hover:text-slate-900">Admin</Link>
        </nav>
        <h1 data-gsap="fade-up" className="text-2xl font-bold mb-2">
          Cart
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Review your items before checkout. This is a demo cart — no payments
          are processed.
        </p>

        {entries.length === 0 ? (
          <p data-gsap="fade-up" className="text-slate-500 mb-6">
            Your cart is empty.
          </p>
        ) : (
          <ul data-gsap="fade-up" className="space-y-4 mb-8">
            {entries.map(([id, q]) => {
              const product = byId[id];
              if (!product) return null;
              return (
                <li
                  key={id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <div>
                    <p className="font-medium text-slate-900">{product.name}</p>
                    <p className="text-sm text-slate-600">
                      ${product.price.toFixed(2)} × {q}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCart(id, -1)}
                      className="ecommerce-cta btn-animate w-8 h-8 rounded transition"
                      style={{ backgroundColor: "#000", color: "#fff", backgroundImage: "none" }}
                    >
                      −
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm">{q}</span>
                    <button
                      type="button"
                      onClick={() => updateCart(id, 1)}
                      className="ecommerce-cta btn-animate w-8 h-8 rounded transition"
                      style={{ backgroundColor: "#000", color: "#fff", backgroundImage: "none" }}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {entries.length > 0 && (
          <div data-gsap="fade-up" className="border-t border-gray-800 pt-4 mb-6">
            <p className="text-lg font-semibold text-slate-900">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects/ecommerce/products"
            className="ecommerce-cta btn-animate inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "#000", color: "#fff", backgroundImage: "none" }}
          >
            Continue shopping
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
