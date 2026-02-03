import AdminProductForm from '@/components/ecommerce/AdminProductForm';

export default function NewProductPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Add New Product</h2>
        <AdminProductForm />
      </div>
    </div>
  );
}