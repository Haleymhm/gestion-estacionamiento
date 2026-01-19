import { z } from 'zod';

export const vehicleCreateSchema = z.object({
    plate: z.string().min(1, "Plate is required"),
    brand: z.string().optional(),
    model: z.string().optional(),
    clientId: z.string().uuid().optional(),
});

export const vehicleUpdateSchema = z.object({
    plate: z.string().min(1).optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    clientId: z.string().uuid().optional(),
});

export type VehicleCreateInput = z.infer<typeof vehicleCreateSchema>;
export type VehicleUpdateInput = z.infer<typeof vehicleUpdateSchema>;
