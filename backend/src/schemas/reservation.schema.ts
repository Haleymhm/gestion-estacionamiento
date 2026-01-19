import { z } from 'zod';
import { ReservationStatus } from '@prisma/client';

export const reservationCreateSchema = z.object({
    clientId: z.string().uuid("Client ID is required"),
    vehicleId: z.string().uuid("Vehicle ID is required"),
    slotId: z.string().uuid("Slot ID is required"),
    startTime: z.string().datetime(),
    endTime: z.string().datetime(),
}).refine(data => new Date(data.startTime) < new Date(data.endTime), {
    message: "End time must be after start time",
    path: ["endTime"]
});

export const reservationUpdateSchema = z.object({
    status: z.nativeEnum(ReservationStatus).optional(),
});

export type ReservationCreateInput = z.infer<typeof reservationCreateSchema>;
export type ReservationUpdateInput = z.infer<typeof reservationUpdateSchema>;
