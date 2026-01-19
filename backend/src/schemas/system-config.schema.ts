import { z } from 'zod';

export const systemConfigSchema = z.object({
    pricePerMinute: z.number().min(0, "Price per minute must be positive"),
    companyName: z.string().optional(),
});

export type SystemConfigInput = z.infer<typeof systemConfigSchema>;
