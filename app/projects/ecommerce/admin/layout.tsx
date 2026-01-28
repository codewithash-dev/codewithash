export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <div className="bg-black text-white py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </div>
      <div className="bg-black min-h-screen">
        {children}
      </div>
    </div>
  );
}