'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Product } from '@/types/ecommerce';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    setProducts(data || []);
    setLoading(false);
  }

  async function deleteProduct(id: string) {
    if (!confirm('Delete this product?')) return;

    await supabase.from('products').delete().eq('id', id);
    fetchProducts();
  }

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8 text-gray-600">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Products</h2>
          <Link
            href="/projects/ecommerce/admin/products/new"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded hover:from-purple-700 hover:to-pink-700 transition"
          >
            Add Product
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="text-gray-700">
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}