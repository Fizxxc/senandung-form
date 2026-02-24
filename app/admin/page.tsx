import StatCard from "@/components/StatCard";
import { supabaseServer } from "@/lib/supabase/server";

export default async function AdminOverview() {
  const sb = await supabaseServer();

  const { count: total } = await sb.from("submissions").select("*", { count: "exact", head: true });
  const { count: newCount } = await sb
    .from("submissions")
    .select("*", { count: "exact", head: true })
    .eq("status", "new");

  const { count: vip } = await sb
    .from("submissions")
    .select("*", { count: "exact", head: true })
    .eq("ticket_type", "VIP");

  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Overview</div>
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard title="Total submissions" value={String(total ?? 0)} />
        <StatCard title="Status: new" value={String(newCount ?? 0)} />
        <StatCard title="VIP requests" value={String(vip ?? 0)} />
      </div>
      <div className="text-sm text-outline">
        Monitoring ringkas: gunakan tab “Submissions” untuk lihat data masuk.
      </div>
    </div>
  );
}
