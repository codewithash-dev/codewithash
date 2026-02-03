'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCartStore } from '@/lib/ecommerce-store';
import EcommerceNavbar from '@/components/ecommerce/Navbar';

export default function SuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-slate-50 min-h-screen text-gray-900">
      <EcommerceNavbar />
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-4xl font-bold mb-4">Order Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. You will receive an email confirmation shortly.
          </p>
        </div>
        <Link
          href="/projects/ecommerce/products"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 inline-block transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}