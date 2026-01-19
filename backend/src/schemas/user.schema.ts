import { z } from 'zod';
import { UserRole } from '@prisma/client';

export const userCreateSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6), // In a real app, we should hash this
    name: z.string().min(1),
    role: z.nativeEnum(UserRole).default(UserRole.OPERATOR),
});

export const userUpdateSchema = z.object({
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    name: z.string().min(1).optional(),
    role: z.nativeEnum(UserRole).optional(),
});

export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
