import { prisma } from '@/lib/prisma';
import { ReservationCreateInput, ReservationUpdateInput } from '@/schemas/reservation.schema';
import { ReservationStatus, TicketStatus, SlotStatus } from '@prisma/client';
import { ticketService } from './ticket.service';

export const reservationService = {
    async getAll(clientId?: string) {
        const where: any = {};
        if (clientId) where.clientId = clientId;

        return await prisma.reservation.findMany({
            where,
            include: {
                vehicle: true,
                slot: { include: { zone: true } },
            },
            orderBy: { startTime: 'desc' }
        });
    },

    async getById(id: string) {
        return await prisma.reservation.findUnique({
            where: { id },
            include: {
                vehicle: true,
                slot: { include: { zone: true } },
                client: true,
                ticket: true,
            }
        });
    },

    async create(data: ReservationCreateInput) {
        const start = new Date(data.startTime);
        const end = new Date(data.endTime);

        // 1. Validation: Overlap Check
        // (NewStart < ExistingEnd) AND (NewEnd > ExistingStart)
        const activeReservations = [ReservationStatus.PENDING, ReservationStatus.CONFIRMED];

        // We only check for overlap on the SAME slot
        const overlapping = await prisma.reservation.findFirst({
            where: {
                slotId: data.slotId,
                status: { in: activeReservations },
                AND: [
                    { startTime: { lt: end } },
                    { endTime: { gt: start } }
                ]
            }
        });

        if (overlapping) {
            throw new Error("This slot is already reserved for the selected time range.");
        }

        // 2. Create Reservation
        return await prisma.reservation.create({
            data: {
                clientId: data.clientId,
                vehicleId: data.vehicleId,
                slotId: data.slotId,
                startTime: start,
                endTime: end,
                status: ReservationStatus.CONFIRMED, // Assume auto-confirmed for now
            },
            include: { slot: true, vehicle: true }
        });
    },

    async update(id: string, data: ReservationUpdateInput) {
        const reservation = await prisma.reservation.findUnique({ where: { id } });
        if (!reservation) throw new Error("Reservation not found");

        // Logic: If status changes to COMPLETED, we might want to trigger Ticket creation automatically?
        // However, AGENT.md says "When a vehicle with reservation arrives... at Check-In, change reservation to COMPLETED and create Ticket"
        // So this update might just be for cancellation or manual status change.

        // Check-in logic is usually handled in TicketService or a dedicated "checkInReservation" method.
        // Let's keep this simple update for now.

        const updated = await prisma.reservation.update({
            where: { id },
            data,
            include: { slot: true, vehicle: true }
        });

        // If cancelled, we don't need to do anything else as we don't block the slot permanently, just checking overlaps on query time.
        return updated;
    },

    // Special method to convert Reservation to Ticket (Check-In)
    async checkIn(reservationId: string, operatorId?: string) {
        return await prisma.$transaction(async (tx) => {
            const reservation = await tx.reservation.findUnique({ where: { id: reservationId } });
            if (!reservation) throw new Error("Reservation not found");

            if (reservation.status !== ReservationStatus.CONFIRMED) {
                throw new Error("Reservation is not in CONFIRMED state");
            }

            // Use Ticket Service logic but inside this transaction? 
            // Re-implementing simplified version to avoid circular deps or complex service calls inside transaction
            const config = await tx.systemConfig.findFirst();
            const currentPrice = config?.pricePerMinute || 0;

            // Create Ticket linked to Reservation
            const ticket = await tx.ticket.create({
                data: {
                    vehicleId: reservation.vehicleId,
                    slotId: reservation.slotId,
                    operatorId: operatorId,
                    reservationId: reservation.id,
                    pricePerMinuteSnapshot: currentPrice,
                    checkIn: new Date(),
                    status: TicketStatus.ACTIVE
                }
            });

            // Update Reservation
            await tx.reservation.update({
                where: { id: reservationId },
                data: { status: ReservationStatus.COMPLETED }
            });

            // Update Slot
            await tx.parkingSlot.update({
                where: { id: reservation.slotId },
                data: { status: SlotStatus.OCCUPIED }
            });

            return ticket;
        });
    }
};
