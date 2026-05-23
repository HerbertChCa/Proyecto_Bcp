import { Injectable } from '@nestjs/common';
import {
  synthesizeInitiativeProposal,
  type InitiativeDraft,
} from '@proyecto-bcp/shared-api';

@Injectable()
export class AiSynthesisService {
  async synthesizePendingIdeas(
    pendingIdeas: string[],
    categories: string[] = [],
  ): Promise<InitiativeDraft> {
    const normalizedIdeas = pendingIdeas.map((idea) => idea.trim()).filter(Boolean);
    const normalizedCategories = categories.map((category) => category.trim()).filter(Boolean);

    const promptBlueprint = [
      'You are an AI assistant that synthesizes community initiative ideas.',
      'Return only valid JSON with title, summary, and category.',
      'Input ideas:',
      JSON.stringify(normalizedIdeas),
      'Input categories:',
      JSON.stringify(normalizedCategories),
      'TODO: replace this blueprint with the final production prompt.',
    ].join('\n');

    console.log('[AiSynthesisService] OpenAI mock request', {
      promptBlueprint,
      pendingIdeas: normalizedIdeas,
      categories: normalizedCategories,
    });

    const primaryIdea = normalizedIdeas[0] || 'Iniciativa comunitaria';

    return synthesizeInitiativeProposal({ rawIdea: primaryIdea });
  }
}