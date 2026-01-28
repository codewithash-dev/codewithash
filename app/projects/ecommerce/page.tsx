import Link from 'next/link';

export default function EcommerceLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-center mb-6">
        E-Commerce Store
      </h1>
      <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl">
        Full-stack e-commerce with Next.js, Supabase, Stripe & cart management
      </p>
      <div className="flex gap-4">
        <Link
          href="/projects/ecommerce/products"
          className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
        >
          View Store
        </Link>
        <Link
          href="/projects/ecommerce/admin"
          className="border-2 border-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
        >
          Admin Panel
        </Link>
      </div>
    </div>
  );
}