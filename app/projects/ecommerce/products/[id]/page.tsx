'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { Product } from '@/types/ecommerce';
import { useCartStore } from '@/lib/ecommerce-store';
import EcommerceNavbar from '@/components/ecommerce/Navbar';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  async function fetchProduct() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      return;
    }

    setProduct(data);
    setLoading(false);
  }

  if (loading) {
    return (
      <>
        <EcommerceNavbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <EcommerceNavbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">Product not found</div>
        </div>
      </>
    );
  }

  return (
    <>
      <EcommerceNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-96 bg-gray-200 rounded-lg">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-sm text-gray-500 mb-6">
              Category: {product.category}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Stock: {product.stock} available
            </p>
            <button
              onClick={() => addItem(product)}
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}