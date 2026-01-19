import { prisma } from '@/lib/prisma';
import { TicketCreateInput, TicketUpdateInput } from '@/schemas/ticket.schema';
import { TicketStatus, SlotStatus } from '@prisma/client';
import { systemConfigService } from './system-config.service';

export const ticketService = {
    async getAll() {
        return await prisma.ticket.findMany({
            include: {
                vehicle: true,
                slot: true,
            },
            orderBy: { checkIn: 'desc' }
        });
    },

    async getById(id: string) {
        return await prisma.ticket.findUnique({
            where: { id },
            include: {
                vehicle: true,
                slot: true,
                operator: true,
                reservation: true,
            }
        });
    },

    /**
     * CHECK-IN Logic
     */
    async create(data: TicketCreateInput) {
        // 1. Get current global price
        const config = await systemConfigService.getConfig();
        const currentPrice = config.pricePerMinute;

        // 2. Wrap in transaction to ensure slot consistency
        return await prisma.$transaction(async (tx) => {
            // Check if slot is available
            const slot = await tx.parkingSlot.findUnique({ where: { id: data.slotId } });
            if (!slot) throw new Error("Slot not found");
            if (slot.status !== SlotStatus.AVAILABLE && slot.status !== SlotStatus.RESERVED) {
                throw new Error("Slot is not available");
            }

            // Check if vehicle has active ticket
            const activeTicket = await tx.ticket.findFirst({
                where: { vehicleId: data.vehicleId, status: TicketStatus.ACTIVE }
            });
            if (activeTicket) throw new Error("Vehicle already has an active ticket");

            // Create Ticket
            const ticket = await tx.ticket.create({
                data: {
                    vehicleId: data.vehicleId,
                    slotId: data.slotId,
                    operatorId: data.operatorId,
                    pricePerMinuteSnapshot: currentPrice,
                    checkIn: new Date(),
                    status: TicketStatus.ACTIVE,
                },
                include: { vehicle: true, slot: true }
            });

            // Update Slot Status to OCCUPIED
            await tx.parkingSlot.update({
                where: { id: data.slotId },
                data: { status: SlotStatus.OCCUPIED }
            });

            return ticket;
        });
    },

    /**
     * CHECK-OUT Logic (or general update)
     */
    async update(id: string, data: TicketUpdateInput) {
        const existingTicket = await prisma.ticket.findUnique({ where: { id } });
        if (!existingTicket) throw new Error("Ticket not found");

        // If completing the ticket, calculate costs
        if (data.status === TicketStatus.COMPLETED && existingTicket.status === TicketStatus.ACTIVE) {
            return await this.processCheckout(id, existingTicket);
        }

        // If cancelling, free the slot
        if (data.status === TicketStatus.CANCELLED && existingTicket.status === TicketStatus.ACTIVE) {
            return await prisma.$transaction(async (tx) => {
                const ticket = await tx.ticket.update({
                    where: { id },
                    data: { status: TicketStatus.CANCELLED }
                });
                await tx.parkingSlot.update({
                    where: { id: ticket.slotId },
                    data: { status: SlotStatus.AVAILABLE }
                });
                return ticket;
            });
        }

        // Normal update (e.g. manual edit)
        return await prisma.ticket.update({
            where: { id },
            data,
            include: { vehicle: true, slot: true }
        });
    },

    async processCheckout(id: string, ticket: any) {
        const checkOutTime = new Date();
        const checkInTime = new Date(ticket.checkIn);
        const diffMs = checkOutTime.getTime() - checkInTime.getTime();
        const diffMinutes = Math.ceil(diffMs / (1000 * 60));

        const pricePerMinute = Number(ticket.pricePerMinuteSnapshot);
        const totalAmount = diffMinutes * pricePerMinute;

        return await prisma.$transaction(async (tx) => {
            // Update Ticket
            const updatedTicket = await tx.ticket.update({
                where: { id },
                data: {
                    checkOut: checkOutTime,
                    totalAmount: totalAmount,
                    status: TicketStatus.COMPLETED,
                },
                include: { vehicle: true, slot: true }
            });

            // Free Slot
            await tx.parkingSlot.update({
                where: { id: ticket.slotId },
                data: { status: SlotStatus.AVAILABLE }
            });

            return updatedTicket;
        });
    }
};
