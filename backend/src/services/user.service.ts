import { prisma } from '@/lib/prisma';
import { UserCreateInput, UserUpdateInput } from '@/schemas/user.schema';

export const userService = {
    async getAll() {
        return await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                // Exclude password
            }
        });
    },

    async getById(id: string) {
        return await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
            }
        });
    },

    async create(data: UserCreateInput) {
        // Note: Password hashing should be done here in a real application
        return await prisma.user.create({
            data,
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
            }
        });
    },

    async update(id: string, data: UserUpdateInput) {
        return await prisma.user.update({
            where: { id },
            data,
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
            }
        });
    },

    async delete(id: string) {
        return await prisma.user.delete({
            where: { id },
        });
    },
};
