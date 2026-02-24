export default function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border-2 border-outline bg-beige/20 p-4">
      <div className="text-sm text-outline">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
