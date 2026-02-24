import AdminNav from "@/components/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="vintage-border rounded-[1.25rem] bg-cream/70 px-5 py-4">
          <div className="text-xl font-semibold">Senandung Alam • Admin Panel</div>
          <div className="mt-3">
            <AdminNav />
          </div>
        </div>

        <div className="vintage-border rounded-[1.25rem] bg-cream/70 px-5 py-5">
          {children}
        </div>
      </div>
    </main>
  );
}
