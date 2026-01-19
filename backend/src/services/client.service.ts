import { prisma } from '@/lib/prisma';
import { ClientCreateInput, ClientUpdateInput } from '@/schemas/client.schema';

export const clientService = {
    async getAll() {
        return await prisma.client.findMany({
            select: {
                id: true,
                email: true,
                fullName: true,
                phone: true,
                // Exclude password
            }
        });
    },

    async getById(id: string) {
        return await prisma.client.findUnique({
            where: { id },
            include: {
                vehicles: true,
            }
        });
    },

    async create(data: ClientCreateInput) {
        // Note: Password hashing should be done here in a real application
        return await prisma.client.create({
            data,
            select: {
                id: true,
                email: true,
                fullName: true,
                phone: true,
            }
        });
    },

    async update(id: string, data: ClientUpdateInput) {
        return await prisma.client.update({
            where: { id },
            data,
            select: {
                id: true,
                email: true,
                fullName: true,
                phone: true,
            }
        });
    },

    async delete(id: string) {
        return await prisma.client.delete({
            where: { id },
        });
    },
};
