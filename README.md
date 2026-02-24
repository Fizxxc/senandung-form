# Senandung Alam Festival Music 2026 — Ticket Form + Admin Dashboard

## Quickstart
1. Copy `.env.local.example` to `.env.local` and fill your Supabase keys.
2. Run the SQL in `supabase/migrations.sql` inside Supabase SQL Editor.
3. Put `char.png`, `logo.png`, `favicon.ico` inside `/public`.
4. Install & run:

```bash
npm install
npm run dev
```

## Notes
- Public form insert happens via `/api/submit` using Service Role key (server-only).
- Admin area requires login; no register UI.
- Roles: `admin` and `staff` stored in `profiles`.
