import Link from 'next/link';

export default function EcommerceLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-gray-900">
      <h1 className="text-6xl font-bold text-center mb-6">
        E-Commerce Store
      </h1>
      <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl">
        Full-stack e-commerce with Next.js, Supabase, Stripe & cart management
      </p>
      <div className="flex gap-4">
        <Link
          href="/projects/ecommerce/products"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition"
        >
          View Store
        </Link>
        <Link
          href="/projects/ecommerce/admin"
          className="border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition"
        >
          Admin Panel
        </Link>
      </div>
    </div>
  );
}