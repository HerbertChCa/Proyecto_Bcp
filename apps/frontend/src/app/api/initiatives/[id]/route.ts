import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '../../../../utils/supabase/server';

function hasSupabaseConfig() {
  return Boolean(
    (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      (process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!hasSupabaseConfig()) {
    return NextResponse.json({ error: 'Supabase no esta configurado.' }, { status: 503 });
  }

  const client = await createSupabaseServerClient();
  const { data, error } = await client
    .from('initiatives')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json(data);
}
