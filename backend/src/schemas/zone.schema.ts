import { z } from 'zod';

export const zoneSchema = z.object({
    name: z.string().min(1, "Name is required"),
});

export type ZoneInput = z.infer<typeof zoneSchema>;
