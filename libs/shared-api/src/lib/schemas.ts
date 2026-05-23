import { z } from 'zod';

const UuidSchema = z.string().uuid();
const DateStringSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const TimestampSchema = z.string().datetime({ offset: true });
const StringArraySchema = z.array(z.string());

export const UserSchema = z.object({
  id: UuidSchema,
  full_name: z.string(),
  email: z.string(),
  age: z.number().int().nullable(),
  region: z.string(),
  district: z.string().nullable(),
  bio: z.string().nullable(),
  skills: StringArraySchema.nullable(),
  interests: StringArraySchema.nullable(),
  avatar_url: z.string().nullable(),
  points: z.number().int().nullable(),
  level: z.number().int().nullable(),
  is_active: z.boolean().nullable(),
  created_at: TimestampSchema.nullable(),
  updated_at: TimestampSchema.nullable(),
});

export type User = z.infer<typeof UserSchema>;

export const OrganizationSchema = z.object({
  id: UuidSchema,
  name: z.string(),
  description: z.string().nullable(),
  logo_url: z.string().nullable(),
  created_at: TimestampSchema.nullable(),
  updated_at: TimestampSchema.nullable(),
});

export type Organization = z.infer<typeof OrganizationSchema>;

export const RawIdeaSchema = z.object({
  content: z.string().trim().min(1),
});

export type RawIdea = z.infer<typeof RawIdeaSchema>;

export const CreateIdeaInputSchema = RawIdeaSchema;

export type CreateIdeaInput = z.infer<typeof CreateIdeaInputSchema>;

export const SynthesizedIdeaSchema = z.object({
  title: z.string(),
  summary: z.string(),
  problem: z.string(),
  audience: z.string(),
  category: z.string(),
  estimatedTime: z.string(),
  activities: StringArraySchema,
  requirements: StringArraySchema,
  impact: StringArraySchema,
});

export type SynthesizedIdea = z.infer<typeof SynthesizedIdeaSchema>;

export const InitiativeSchema = z.object({
  id: UuidSchema,
  title: z.string(),
  description: z.string(),
  summary: z.string().nullable(),
  category: z.string(),
  region: z.string(),
  district: z.string().nullable(),
  required_skills: StringArraySchema.nullable(),
  max_participants: z.number().int().nullable(),
  current_participants: z.number().int().nullable(),
  start_date: DateStringSchema.nullable(),
  end_date: DateStringSchema.nullable(),
  status: z.string().nullable(),
  organizer_id: UuidSchema.nullable(),
  points_reward: z.number().int().nullable(),
  image_url: z.string().nullable(),
  created_at: TimestampSchema.nullable(),
  updated_at: TimestampSchema.nullable(),
});

export type Initiative = z.infer<typeof InitiativeSchema>;

export const CreateInitiativeInputSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  reward_type: z.string().trim().min(1),
});

export type CreateInitiativeInput = z.infer<typeof CreateInitiativeInputSchema>;