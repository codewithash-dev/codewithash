export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-black text-white py-4">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>
        </div>
        {children}
      </div>
    );
  }