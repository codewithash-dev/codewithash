'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/ecommerce';
import { useCartStore } from '@/lib/ecommerce-store';

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <Link href={`/projects/ecommerce/products/${product.id}`}>
        <div className="relative h-64 bg-gray-200">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/projects/ecommerce/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-gray-600">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}