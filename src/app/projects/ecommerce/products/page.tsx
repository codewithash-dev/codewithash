"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import StoreNav from "../StoreNav";

type Cart = Record<string, number>;

const MOCK_PRODUCTS = [
  { id: "1", name: "Wireless Headphones", price: 89.99, image: "/ecommerce/headphones.jpg" },
  { id: "2", name: "Mechanical Keyboard", price: 129.99, image: "/ecommerce/keyboard.jpg" },
  { id: "3", name: "USB-C Hub", price: 49.99, image: "/ecommerce/usb-hub.jpg" },
  { id: "4", name: "Desk Lamp", price: 39.99, image: "/ecommerce/desk-lamp.jpg" },
  { id: "5", name: "Monitor Stand", price: 59.99, image: "/ecommerce/monitor-stand.jpg" },
  { id: "6", name: "Webcam HD", price: 79.99, image: "/ecommerce/headphones.jpg" },
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

export default function EcommerceProductsPage() {
  const [loading, setLoading] = useState(true);
  const [cart, setCartState] = useState<Cart>({});

  useEffect(() => {
    queueMicrotask(() => setCartState(getCart()));
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
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

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-16">
      <StoreNav cartCount={count} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 data-gsap="fade-up" className="text-2xl font-bold mb-2">
          Products
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Sample catalog for the CodeWithAsh demo store.
        </p>
        {loading ? (
          <p data-gsap="fade-up" className="text-gray-400">
            Loading products...
          </p>
        ) : (
          <ul
            data-gsap="fade-up"
            data-gsap-stagger
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {MOCK_PRODUCTS.map((product) => (
              <li
                key={product.id}
                data-gsap-item
                className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="relative aspect-square bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-slate-900 mb-1">{product.name}</h2>
                  <p className="text-fuchsia-600 font-medium mb-3">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateCart(product.id, -1)}
                      disabled={(cart[product.id] ?? 0) === 0}
                      className="w-8 h-8 rounded-lg border border-slate-300 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                    >
                      −
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm text-slate-800">
                      {cart[product.id] ?? 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateCart(product.id, 1)}
                      className="btn-animate w-8 h-8 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"
                    >
                      +
                    </button>
                    <span className="ml-2 text-xs text-slate-500">in cart</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects/ecommerce/cart"
            className="btn-animate inline-flex items-center justify-center gradient-cta text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Cart {count > 0 && `(${count})`}
          </Link>
          <Link
            href="/projects/ecommerce"
            className="text-gray-400 hover:text-white transition text-sm"
          >
            ← Back to project
          </Link>
        </div>
      </div>
    </main>
  );
}
