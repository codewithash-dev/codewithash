'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/ecommerce-store';

export default function EcommerceNavbar() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white text-gray-900 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/projects/ecommerce"
            className="text-2xl font-bold text-gray-900"
          >
            CodeWithAsh Store
          </Link>
          <div className="flex gap-6 items-center">
            <Link
              href="/projects/ecommerce/products"
              className="text-gray-600 hover:text-purple-700 transition"
            >
              Products
            </Link>
            <Link
              href="/projects/ecommerce/cart"
              className="text-gray-600 hover:text-purple-700 transition relative"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/projects/ecommerce/admin"
              className="text-gray-600 hover:text-purple-700 transition"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}