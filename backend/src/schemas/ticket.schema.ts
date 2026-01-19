import { z } from 'zod';
import { TicketStatus } from '@prisma/client';

export const ticketCreateSchema = z.object({
    vehicleId: z.string().uuid("Vehicle ID is required"),
    slotId: z.string().uuid("Slot ID is required"),
    operatorId: z.string().uuid("Operator ID is required").optional(),
});

export const ticketUpdateSchema = z.object({
    status: z.nativeEnum(TicketStatus).optional(),
    // Manual override for checkout time or total amount if needed by admin
    checkOut: z.string().datetime().optional(),
    totalAmount: z.number().optional(),
});

export type TicketCreateInput = z.infer<typeof ticketCreateSchema>;
export type TicketUpdateInput = z.infer<typeof ticketUpdateSchema>;
