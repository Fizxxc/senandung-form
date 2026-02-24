"use client";

import { useState } from "react";
import { submissionSchema } from "@/lib/validators";

export default function PublicForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      full_name: String(form.get("full_name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      ticket_type: String(form.get("ticket_type") || "1-Day Pass"),
      qty: String(form.get("qty") || "1"),
      notes: String(form.get("notes") || ""),
    };

    const parsed = submissionSchema.safeParse(payload);
    if (!parsed.success) {
      setLoading(false);
      setError("Data belum valid. Pastikan email benar & jumlah tiket 1–10.");
      return;
    }

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    setLoading(false);

    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setError(j?.message || "Gagal mengirim. Coba lagi ya.");
      return;
    }

    const j = await res.json();
    window.location.href = `/ticket/${j.ticket_code}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-outline">Nama Lengkap</label>
          <input name="full_name" className="w-full px-3 py-2 rounded-xl input-vintage" placeholder="Nama sesuai identitas" required />
        </div>
        <div>
          <label className="text-sm text-outline">Email</label>
          <input name="email" className="w-full px-3 py-2 rounded-xl input-vintage" placeholder="nama@email.com" required />
        </div>
        <div>
          <label className="text-sm text-outline">No. HP (opsional)</label>
          <input name="phone" className="w-full px-3 py-2 rounded-xl input-vintage" placeholder="08xxxxxxxxxx" />
        </div>
        <div>
          <label className="text-sm text-outline">Jumlah Tiket</label>
          <input name="qty" type="number" min={1} max={10} defaultValue={1} className="w-full px-3 py-2 rounded-xl input-vintage" />
        </div>
      </div>

      <div>
        <label className="text-sm text-outline">Jenis Tiket</label>
        <select name="ticket_type" className="w-full px-3 py-2 rounded-xl input-vintage">
          <option>1-Day Pass</option>
          <option>3-Day Pass</option>
          <option>VIP</option>
        </select>
      </div>

      <div>
        <label className="text-sm text-outline">Catatan (opsional)</label>
        <textarea name="notes" className="w-full px-3 py-2 rounded-xl input-vintage" rows={4} placeholder="Request khusus, jam kedatangan, dsb." />
      </div>

      {error && (
        <div className="rounded-xl border-2 border-outline bg-beige/30 px-3 py-2 text-sm">
          {error}
        </div>
      )}

      <button disabled={loading} className="btn-vintage w-full rounded-xl px-4 py-3 font-semibold">
        {loading ? "Mengirim..." : "Kirim Form Ticket"}
      </button>

      <p className="text-xs text-outline/90 text-center">
        Dengan mengirim form, tim kami akan menghubungi kamu untuk langkah pembayaran & konfirmasi.
      </p>
    </form>
  );
}
