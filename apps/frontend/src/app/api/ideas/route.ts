import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '../../../utils/supabase/server';
import { synthesizeInitiativeProposal } from '@proyecto-bcp/shared-api';

import OpenAI from 'openai';

function hasSupabaseConfig() {
  return Boolean(
    (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      (process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  let rawIdeasInput = body?.rawIdeas || body?.rawIdea;
  
  if (!Array.isArray(rawIdeasInput)) {
    rawIdeasInput = [rawIdeasInput].filter(Boolean);
  }

  const rawIdeas = rawIdeasInput.map((s: string) => String(s).trim()).filter(Boolean);

  if (rawIdeas.length === 0) {
    return NextResponse.json({ error: 'rawIdeas is required' }, { status: 400 });
  }

  const combinedRawIdeaText = rawIdeas.map((idea: string, i: number) => `Idea ${i + 1}: ${idea}`).join('\n\n');
  const primaryRawIdeaId = body?.primaryRawIdeaId || null;

  let draft;

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey || apiKey === 'pon_aqui_tu_openai_api_key') {
      throw new Error('OpenAI API key not configured');
    }

    const openai = new OpenAI({ apiKey });
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `Eres un asistente experto en innovación social y proyectos comunitarios. 
Tu tarea es sintetizar múltiples ideas ciudadanas en una única propuesta estructurada.
Busca los puntos en común de las ideas que te darán y fusiénalas de manera lógica.
El usuario te dará un texto con una o más ideas y tú debes devolver EXCLUSIVAMENTE un objeto JSON válido con la siguiente estructura exacta:
{
  "title": "Un título corto y atractivo (máximo 10 palabras)",
  "summary": "Un resumen de 1 a 2 oraciones de la propuesta consolidada",
  "problem": "El problema principal que intenta resolver",
  "audience": "El público objetivo o beneficiarios principales",
  "category": "Una categoría (ej. Medio Ambiente, Educación, Salud, Tecnología, Cultura, etc.)",
  "estimatedTime": "Tiempo estimado de dedicación semanal (ej. '4 horas por semana')",
  "activities": ["Actividad 1", "Actividad 2", "Actividad 3"],
  "requirements": ["Requisito 1", "Requisito 2"],
  "impact": ["Impacto esperado 1", "Impacto esperado 2"]
}`
        },
        {
          role: "user",
          content: combinedRawIdeaText
        }
      ]
    });

    const resultText = response.choices[0].message.content || '{}';
    const parsed = JSON.parse(resultText);

    draft = {
      title: parsed.title || "Iniciativa Consolidada",
      summary: parsed.summary || "Propuesta sintetizada",
      problem: parsed.problem || "",
      audience: parsed.audience || "",
      category: parsed.category || "General",
      estimatedTime: parsed.estimatedTime || "Variable",
      activities: Array.isArray(parsed.activities) ? parsed.activities : [],
      requirements: Array.isArray(parsed.requirements) ? parsed.requirements : [],
      impact: Array.isArray(parsed.impact) ? parsed.impact : []
    };

  } catch (err) {
    console.error("OpenAI synthesis failed, falling back to local:", err);
    draft = synthesizeInitiativeProposal(rawIdeas[0]);
  }

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

  const { data: synthesizedIdea, error: synthesisError } = await client
    .from('synthesized_ideas')
    .insert({
      raw_idea_id: primaryRawIdeaId,
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
    synthesizedIdea,
  });
}
