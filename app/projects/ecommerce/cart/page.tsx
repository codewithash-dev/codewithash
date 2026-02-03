'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/ecommerce-store';
import CartItem from '@/components/ecommerce/CartItem';
import EcommerceNavbar from '@/components/ecommerce/Navbar';

export default function CartPage() {
  const { items, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="bg-slate-50 min-h-screen text-gray-900">
        <EcommerceNavbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link
              href="/projects/ecommerce/products"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded hover:from-purple-700 hover:to-pink-700 inline-block transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen text-gray-900">
      <EcommerceNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-6 h-fit shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Subtotal</span>
              <span>${total().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-bold text-xl text-gray-900">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>
            </div>
            <Link
              href="/projects/ecommerce/checkout"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded hover:from-purple-700 hover:to-pink-700 w-full block text-center mt-6 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}