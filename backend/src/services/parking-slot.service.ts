import { prisma } from '@/lib/prisma';
import { ParkingSlotCreateInput, ParkingSlotUpdateInput } from '@/schemas/parking-slot.schema';
import { SlotStatus } from '@prisma/client';

export const parkingSlotService = {
    async getAll(zoneId?: string, status?: SlotStatus) {
        const where: any = {};
        if (zoneId) where.zoneId = zoneId;
        if (status) where.status = status;

        return await prisma.parkingSlot.findMany({
            where,
            include: {
                zone: true,
            },
            orderBy: {
                code: 'asc'
            }
        });
    },

    async getById(id: string) {
        return await prisma.parkingSlot.findUnique({
            where: { id },
            include: {
                zone: true,
            }
        });
    },

    async create(data: ParkingSlotCreateInput) {
        return await prisma.parkingSlot.create({
            data,
            include: {
                zone: true
            }
        });
    },

    async update(id: string, data: ParkingSlotUpdateInput) {
        return await prisma.parkingSlot.update({
            where: { id },
            data,
            include: {
                zone: true
            }
        });
    },

    async delete(id: string) {
        return await prisma.parkingSlot.delete({
            where: { id },
        });
    },
};
