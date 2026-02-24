import { NextResponse } from "next/server";
import { submissionSchema } from "@/lib/validators";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = submissionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("submissions")
      .insert(parsed.data)
      .select("id,ticket_code")
      .single();

    if (error) return NextResponse.json({ message: error.message }, { status: 500 });

    return NextResponse.json({ ok: true, id: data.id, ticket_code: data.ticket_code });
  } catch {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}