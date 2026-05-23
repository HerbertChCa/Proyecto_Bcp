import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '../../../utils/supabase/server';
import { synthesizeInitiativeProposal } from '@proyecto-bcp/shared-api';

function hasSupabaseConfig() {
  return Boolean(
    (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      (process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const rawIdea = String(body?.rawIdea || '').trim();

  if (!rawIdea) {
    return NextResponse.json({ error: 'rawIdea is required' }, { status: 400 });
  }

  const draft = synthesizeInitiativeProposal(rawIdea);

  if (!hasSupabaseConfig()) {
    return NextResponse.json({ persisted: false, draft, synthesizedIdea: draft });
  }

  const client = await createSupabaseServerClient();
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    return NextResponse.json({ persisted: false, draft, synthesizedIdea: draft });
  }

  const { data: rawIdeaRow, error: rawError } = await client
    .from('raw_ideas')
    .insert({
      user_id: user.id,
      content: rawIdea,
    })
    .select('*')
    .single();

  if (rawError) {
    return NextResponse.json(
      { persisted: false, draft, synthesizedIdea: draft, error: rawError.message },
      { status: 500 },
    );
  }

  const { data: synthesizedIdea, error: synthesisError } = await client
    .from('synthesized_ideas')
    .insert({
      raw_idea_id: rawIdeaRow.id,
      created_by: user.id,
      title: draft.title,
      summary: draft.summary,
      problem: draft.problem,
      audience: draft.audience,
      category: draft.category,
      estimated_time: draft.estimatedTime,
      activities: draft.activities,
      requirements: draft.requirements,
      impact: draft.impact,
    })
    .select('*')
    .single();

  if (synthesisError) {
    return NextResponse.json(
      { persisted: false, draft, synthesizedIdea: draft, error: synthesisError.message },
      { status: 500 },
    );
  }

  return NextResponse.json({
    persisted: true,
    draft,
    rawIdea: rawIdeaRow,
    synthesizedIdea,
  });
}
