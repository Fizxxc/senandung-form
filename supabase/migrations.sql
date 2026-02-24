-- Roles enum
do $$ begin
  create type public.user_role as enum ('admin', 'staff');
exception when duplicate_object then null;
end $$;

-- Profiles (role per user)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role public.user_role not null default 'staff',
  created_at timestamptz not null default now()
);

-- Ticket form submissions
create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  ticket_type text not null,
  qty int not null check (qty >= 1 and qty <= 10),
  notes text,
  status text not null default 'new'
);

alter table public.profiles enable row level security;
alter table public.submissions enable row level security;

create or replace function public.is_admin(uid uuid)
returns boolean
language sql stable as $$
  select exists(
    select 1 from public.profiles p
    where p.id = uid and p.role = 'admin'
  );
$$;

create policy "profiles_read_own"
on public.profiles for select
to authenticated
using (id = auth.uid());

create policy "profiles_admin_all"
on public.profiles for all
to authenticated
using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

create policy "submissions_staff_read"
on public.submissions for select
to authenticated
using (public.is_admin(auth.uid()) OR exists(
  select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','staff')
));

create policy "submissions_staff_update"
on public.submissions for update
to authenticated
using (public.is_admin(auth.uid()) OR exists(
  select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','staff')
))
with check (true);

create policy "submissions_admin_delete"
on public.submissions for delete
to authenticated
using (public.is_admin(auth.uid()));

-- Optional: auto create profiles row on new auth user
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'staff')
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
