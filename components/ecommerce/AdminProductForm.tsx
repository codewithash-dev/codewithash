'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminProductForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image_url: '',
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('products').insert({
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      stock: parseInt(formData.stock),
      image_url: formData.image_url,
    });

    if (error) {
      console.error('Error creating product:', error);
      alert('Error creating product');
    } else {
      router.push('/projects/ecommerce/admin/products');
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Description
        </label>
        <textarea
          required
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Price
        </label>
        <input
          type="number"
          step="0.01"
          required
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Category
        </label>
        <input
          type="text"
          required
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Stock
        </label>
        <input
          type="number"
          required
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          value={formData.image_url}
          onChange={(e) =>
            setFormData({ ...formData, image_url: e.target.value })
          }
          className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded hover:from-purple-700 hover:to-pink-700 disabled:opacity-60 transition"
      >
        {loading ? 'Creating...' : 'Create Product'}
      </button>
    </form>
  );
}