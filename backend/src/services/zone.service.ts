import { prisma } from '@/lib/prisma';
import { ZoneInput } from '@/schemas/zone.schema';

export const zoneService = {
    async getAll() {
        return await prisma.zone.findMany({
            include: {
                _count: {
                    select: { slots: true }
                }
            }
        });
    },

    async getById(id: string) {
        return await prisma.zone.findUnique({
            where: { id },
            include: {
                slots: true,
            }
        });
    },

    async create(data: ZoneInput) {
        return await prisma.zone.create({
            data,
        });
    },

    async update(id: string, data: ZoneInput) {
        return await prisma.zone.update({
            where: { id },
            data,
        });
    },

    async delete(id: string) {
        return await prisma.zone.delete({
            where: { id },
        });
    },
};
