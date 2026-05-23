-- ============================================================
-- Migration 0002: Fix initiatives status constraint and add
-- service_role policies for backend reads on synthesized_ideas
-- ============================================================

-- 1. The initiatives_status_check constraint was updated to include 'active'
--    (already applied via MCP on 2026-05-23). This migration ensures the
--    constraint is idempotent in any fresh environment.
ALTER TABLE public.initiatives DROP CONSTRAINT IF EXISTS initiatives_status_check;
ALTER TABLE public.initiatives
  ADD CONSTRAINT initiatives_status_check
  CHECK (status = ANY (ARRAY[
    'open'::text,
    'active'::text,
    'in_progress'::text,
    'closed'::text,
    'completed'::text
  ]));

-- 2. Allow the Supabase service_role to read all synthesized_ideas
--    (needed by the backend tRPC router getSynthesized endpoint).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'synthesized_ideas'
      AND policyname = 'synthesized_ideas_service_role_read'
  ) THEN
    CREATE POLICY synthesized_ideas_service_role_read
      ON public.synthesized_ideas
      FOR SELECT
      TO service_role
      USING (true);
  END IF;
END;
$$;

-- 3. Allow the Supabase service_role to insert synthesized_ideas
--    (needed by the backend tRPC router ideas.submit endpoint).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'synthesized_ideas'
      AND policyname = 'synthesized_ideas_service_role_insert'
  ) THEN
    CREATE POLICY synthesized_ideas_service_role_insert
      ON public.synthesized_ideas
      FOR INSERT
      TO service_role
      WITH CHECK (true);
  END IF;
END;
$$;

-- 4. Allow the Supabase service_role to insert raw_ideas
--    (needed by the backend tRPC router ideas.submit endpoint).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'raw_ideas'
      AND policyname = 'raw_ideas_service_role_insert'
  ) THEN
    CREATE POLICY raw_ideas_service_role_insert
      ON public.raw_ideas
      FOR INSERT
      TO service_role
      WITH CHECK (true);
  END IF;
END;
$$;
