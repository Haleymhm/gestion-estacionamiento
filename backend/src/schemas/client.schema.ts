import { z } from 'zod';

export const clientCreateSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6), // In a real app, hash this
    fullName: z.string().min(1),
    phone: z.string().optional(),
});

export const clientUpdateSchema = z.object({
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    fullName: z.string().min(1).optional(),
    phone: z.string().optional(),
});

export type ClientCreateInput = z.infer<typeof clientCreateSchema>;
export type ClientUpdateInput = z.infer<typeof clientUpdateSchema>;
