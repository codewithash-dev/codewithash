import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
        <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/projects/ecommerce/admin/products"
          className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-purple-200 transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Products
          </h3>
          <p className="text-gray-600">Manage your product catalog</p>
        </Link>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-purple-200 transition bg-white">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Orders
            </h3>
            <p className="text-gray-600">View and manage orders</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-purple-200 transition bg-white">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Analytics
            </h3>
            <p className="text-gray-600">View sales and performance</p>
          </div>
        </div>
      </div>
    </div>
  );
}