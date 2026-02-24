"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function AdminLogin() {
  const sb = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const { error } = await sb.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      setErr("Login gagal. Cek email/password atau pastikan user dibuat oleh admin.");
      return;
    }
    window.location.href = "/admin";
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full vintage-border rounded-[1.25rem] bg-cream/70 px-6 py-8">
        <div className="text-2xl font-semibold">Admin Login</div>
        <p className="mt-1 text-sm text-outline">Tidak ada registrasi. User dibuat via Supabase.</p>

        <form onSubmit={onLogin} className="mt-5 space-y-3">
          <input
            className="w-full px-3 py-2 rounded-xl input-vintage"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full px-3 py-2 rounded-xl input-vintage"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {err && <div className="rounded-xl border-2 border-outline bg-beige/30 px-3 py-2 text-sm">{err}</div>}

          <button className="btn-vintage w-full rounded-xl px-4 py-3 font-semibold" disabled={loading}>
            {loading ? "Masuk..." : "Masuk"}
          </button>
        </form>
      </div>
    </main>
  );
}
