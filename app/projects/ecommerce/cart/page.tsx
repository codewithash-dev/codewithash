'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/ecommerce-store';
import CartItem from '@/components/ecommerce/CartItem';
import EcommerceNavbar from '@/components/ecommerce/Navbar';

export default function CartPage() {
  const { items, total } = useCartStore();

  if (items.length === 0) {
    return (
      <>
        <EcommerceNavbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link
              href="/projects/ecommerce/products"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <EcommerceNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          <div className="border rounded-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>
            </div>
            <Link
              href="/projects/ecommerce/checkout"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full block text-center mt-6"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}