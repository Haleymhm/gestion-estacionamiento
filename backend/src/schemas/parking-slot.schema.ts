import { z } from 'zod';
import { SlotStatus } from '@prisma/client';

export const parkingSlotCreateSchema = z.object({
    code: z.string().min(1, "Code is required"),
    status: z.nativeEnum(SlotStatus).optional().default(SlotStatus.AVAILABLE),
    zoneId: z.string().uuid("Invalid zone ID"),
});

export const parkingSlotUpdateSchema = z.object({
    code: z.string().min(1).optional(),
    status: z.nativeEnum(SlotStatus).optional(),
    zoneId: z.string().uuid().optional(),
});

export type ParkingSlotCreateInput = z.infer<typeof parkingSlotCreateSchema>;
export type ParkingSlotUpdateInput = z.infer<typeof parkingSlotUpdateSchema>;
