create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  raw_skills text[];
begin
  if new.raw_user_meta_data ? 'skills' and jsonb_typeof(new.raw_user_meta_data->'skills') = 'array' then
    select coalesce(array_agg(value), '{}'::text[])
    into raw_skills
    from jsonb_array_elements_text(new.raw_user_meta_data->'skills') as value;
  else
    raw_skills := '{}'::text[];
  end if;

  insert into public.profiles (
    id,
    full_name,
    email,
    region,
    skills,
    created_at,
    updated_at
  ) values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(coalesce(new.email, ''), '@', 1), 'Usuario'),
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'region', 'general'),
    raw_skills,
    now(),
    now()
  )
  on conflict (id) do update set
    full_name = excluded.full_name,
    email = excluded.email,
    region = excluded.region,
    skills = excluded.skills,
    updated_at = now();

  return new;
end;
$$;

do $$
begin
  if not exists (
    select 1
    from pg_trigger
    where tgname = 'on_auth_user_created'
  ) then
    create trigger on_auth_user_created
      after insert on auth.users
      for each row
      execute function public.handle_new_user();
  end if;
end;
$$;

create table if not exists public.raw_ideas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.synthesized_ideas (
  id uuid primary key default gen_random_uuid(),
  raw_idea_id uuid not null references public.raw_ideas(id) on delete cascade,
  title text not null,
  summary text not null,
  problem text not null,
  audience text not null,
  category text not null,
  estimated_time text not null,
  activities text[] not null default '{}'::text[],
  requirements text[] not null default '{}'::text[],
  impact text[] not null default '{}'::text[],
  created_by uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.raw_ideas enable row level security;
alter table public.synthesized_ideas enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'raw_ideas' and policyname = 'raw_ideas_select_own'
  ) then
    create policy raw_ideas_select_own on public.raw_ideas
      for select
      using (auth.uid() = user_id);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'raw_ideas' and policyname = 'raw_ideas_insert_own'
  ) then
    create policy raw_ideas_insert_own on public.raw_ideas
      for insert
      with check (auth.uid() = user_id);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'synthesized_ideas' and policyname = 'synthesized_ideas_select_own'
  ) then
    create policy synthesized_ideas_select_own on public.synthesized_ideas
      for select
      using (auth.uid() = created_by);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'synthesized_ideas' and policyname = 'synthesized_ideas_insert_own'
  ) then
    create policy synthesized_ideas_insert_own on public.synthesized_ideas
      for insert
      with check (auth.uid() = created_by);
  end if;
end;
$$;