import { NextResponse } from 'next/server';
import { synthesizeInitiativeProposal } from '@proyecto-bcp/shared-api';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawIdea: string = body?.rawIdea ?? '';

    if (!rawIdea || typeof rawIdea !== 'string') {
      return NextResponse.json({ error: 'rawIdea is required' }, { status: 400 });
    }

    const draft = synthesizeInitiativeProposal(rawIdea);

    return NextResponse.json(draft);
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 });
  }
}
