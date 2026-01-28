'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/ecommerce-store';
import { useRouter } from 'next/navigation';
import EcommerceNavbar from '@/components/ecommerce/Navbar';

export default function CheckoutPage() {
  const { items, total } = useCartStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleCheckout() {
    setLoading(true);
    
    const response = await fetch('/api/ecommerce/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items.map((item) => ({
          product_id: item.product.id,
          quantity: item.quantity,
          price: item.product.price,
          name: item.product.name,
        })),
      }),
    });

    const { url } = await response.json();
    
    if (url) {
      window.location.href = url;
    }
  }

  if (items.length === 0) {
    router.push('/projects/ecommerce/cart');
    return null;
  }

  return (
    <>
      <EcommerceNavbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        <div className="border rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {items.map((item) => (
            <div key={item.product.id} className="flex justify-between mb-2">
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>${total().toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition w-full disabled:bg-gray-400"
        >
          {loading ? 'Processing...' : 'Pay with Stripe'}
        </button>
      </div>
    </>
  );
}