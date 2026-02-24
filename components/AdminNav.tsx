"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function AdminNav() {
  const path = usePathname();
  const sb = supabaseBrowser();

  async function logout() {
    await sb.auth.signOut();
    window.location.href = "/admin/login";
  }

  const item = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-xl border-2 border-outline ${
        path === href ? "bg-beige/40" : "bg-cream/50 hover:bg-beige/20"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="flex flex-wrap gap-2 items-center justify-between">
      <div className="flex gap-2">
        {item("/admin", "Overview")}
        {item("/admin/submissions", "Submissions")}
      </div>
      <button onClick={logout} className="btn-vintage rounded-xl px-3 py-2 font-semibold">
        Logout
      </button>
    </div>
  );
}
