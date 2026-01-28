import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/projects/ecommerce/admin/products"
          className="border rounded-lg p-6 hover:shadow-lg transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">Products</h3>
          <p className="text-gray-600">Manage your product catalog</p>
        </Link>
        <div className="border rounded-lg p-6 hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-semibold mb-2">Orders</h3>
          <p className="text-gray-600">View and manage orders</p>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600">View sales and performance</p>
        </div>
      </div>
    </div>
  );
}