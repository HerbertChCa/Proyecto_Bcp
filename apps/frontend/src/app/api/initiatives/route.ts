import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '../../../utils/supabase/server';

function hasSupabaseConfig() {
  return Boolean(
    (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      (process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}

export async function GET() {
  if (!hasSupabaseConfig()) {
    return NextResponse.json([]);
  }

  const client = await createSupabaseServerClient();

  const { data, error } = await client
    .from('initiatives')
    .select('id,title,summary,category,created_at')
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const title = String(body?.title || '').trim();
  const description = String(body?.description || '').trim();
  const rewardType = String(body?.reward_type || '').trim();

  if (!title || !description || !rewardType) {
    return NextResponse.json(
      { error: 'title, description and reward_type are required' },
      { status: 400 },
    );
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { error: 'Supabase no esta configurado.' },
      { status: 503 },
    );
  }

  const client = await createSupabaseServerClient();
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Debes iniciar sesión.' }, { status: 401 });
  }

  const userMetadata = user.user_metadata as Record<string, unknown> | undefined;
  const isVerifiedOrganization = Boolean(
    userMetadata?.organization_verified ||
      userMetadata?.is_verified_organization ||
      userMetadata?.verified_organization ||
      userMetadata?.organization_status === 'verified',
  );

  if (!isVerifiedOrganization) {
    return NextResponse.json(
      { error: 'La organizacion no esta verificada.' },
      { status: 403 },
    );
  }

  const pointsReward =
    { points: 10, badge: 25, certificate: 50, impact: 75 }[rewardType] ?? 0;

  const { data, error } = await client
    .from('initiatives')
    .insert({
      title,
      description,
      summary: description,
      category: rewardType,
      region: 'general',
      status: 'active',
      current_participants: 0,
      points_reward: pointsReward,
      organizer_id: user.id,
      district: null,
      required_skills: [],
      max_participants: null,
      start_date: null,
      end_date: null,
      image_url: null,
    })
    .select('*')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
