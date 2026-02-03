export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <div className="bg-white text-gray-900 py-4 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </div>
      <div className="bg-slate-50 min-h-screen">
        {children}
      </div>
    </div>
  );
}