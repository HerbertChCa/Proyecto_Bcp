import type {
	CreateIdeaInput,
	CreateInitiativeInput,
	Initiative,
	RawIdea,
	SynthesizedIdea,
} from './schemas';

export type AppRouter = {
	ideas: {
		submit: (input: CreateIdeaInput) => Promise<RawIdea>;
		getSynthesized: () => Promise<SynthesizedIdea[]>;
	};
	initiatives: {
		getAll: () => Promise<Initiative[]>;
		create: (input: CreateInitiativeInput) => Promise<Initiative>;
	};
	participations: {
		enroll: (input: { user_id: string; initiative_id: string }) => Promise<{
			id: string;
			user_id: string;
			initiative_id: string;
			status: string | null;
			match_score: number | null;
			match_reason: string | null;
			applied_at: string | null;
			accepted_at: string | null;
			completed_at: string | null;
		}>;
	};
};