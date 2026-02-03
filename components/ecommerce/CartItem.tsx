'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/ecommerce';
import { useCartStore } from '@/lib/ecommerce-store';

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-4 border-b border-gray-200 py-4">
      <div className="relative w-24 h-24 bg-gray-200 rounded">
        {item.product.image_url ? (
          <Image
            src={item.product.image_url}
            alt={item.product.name}
            fill
            className="object-cover rounded"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
            No Image
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
        <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 py-1 border border-gray-300 rounded">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            +
          </button>
          <button
            onClick={() => removeItem(item.product.id)}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="font-semibold text-gray-900">
        ${(item.product.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}