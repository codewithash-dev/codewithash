'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Product } from '@/types/ecommerce';
import ProductCard from '@/components/ecommerce/ProductCard';
import CategoryFilter from '@/components/ecommerce/CategoryFilter';
import EcommerceNavbar from '@/components/ecommerce/Navbar';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      return;
    }

    setProducts(data || []);
    const uniqueCategories = [...new Set(data?.map((p) => p.category) || [])];
    setCategories(uniqueCategories);
    setLoading(false);
  }

  if (loading) {
    return (
      <>
        <EcommerceNavbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">Loading products...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <EcommerceNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No products found
          </div>
        )}
      </div>
    </>
  );
}