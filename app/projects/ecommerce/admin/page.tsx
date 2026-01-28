import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-white">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/projects/ecommerce/admin/products"
          className="border border-gray-800 rounded-lg p-6 hover:shadow-lg hover:border-gray-700 transition bg-gray-900"
        >
          <h3 className="text-xl font-semibold mb-2 text-white">Products</h3>
          <p className="text-gray-400">Manage your product catalog</p>
        </Link>
        <div className="border border-gray-800 rounded-lg p-6 hover:shadow-lg hover:border-gray-700 transition bg-gray-900">
          <h3 className="text-xl font-semibold mb-2 text-white">Orders</h3>
          <p className="text-gray-400">View and manage orders</p>
        </div>
        <div className="border border-gray-800 rounded-lg p-6 hover:shadow-lg hover:border-gray-700 transition bg-gray-900">
          <h3 className="text-xl font-semibold mb-2 text-white">Analytics</h3>
          <p className="text-gray-400">View sales and performance</p>
        </div>
      </div>
    </div>
  );
}