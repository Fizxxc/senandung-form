import { supabaseServer } from "@/lib/supabase/server";

export default async function SubmissionsPage() {
  const sb = await supabaseServer();
  const { data } = await sb
    .from("submissions")
    .select("ticket_code,id,created_at,full_name,email,phone,ticket_type,qty,status,notes")
    .order("created_at", { ascending: false })
    .limit(200);

  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Submissions</div>

      <div className="overflow-auto rounded-xl border-2 border-outline">
        <table className="min-w-[1000px] w-full text-sm">
          <thead className="bg-beige/30">
            <tr className="text-left">
              <th className="p-3">Waktu</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Email</th>
              <th className="p-3">HP</th>
              <th className="p-3">Tiket</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Status</th>
              <th className="p-3">Catatan</th>
            </tr>
          </thead>
          <tbody>
            {(data ?? []).map((r) => (
              <tr key={r.id} className="border-t border-outline/40">
                <td className="p-3 whitespace-nowrap">{new Date(r.created_at).toLocaleString("id-ID")}</td>
                <td className="p-3">{r.full_name}</td>
                <td className="p-3">{r.email}</td>
                <td className="p-3">{r.phone ?? "-"}</td>
                <td className="p-3">{r.ticket_type}</td>
                <td className="p-3">{r.qty}</td>
                <td className="p-3">{r.status}</td>
                <td className="p-3 max-w-[320px]">{r.notes ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-outline">
        Catatan: versi ini masih read-only. Bisa di-upgrade jadi editable status (dropdown + save).
      </div>
    </div>
  );
}
