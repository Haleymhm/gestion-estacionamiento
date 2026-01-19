import { prisma } from '@/lib/prisma';
import { VehicleCreateInput, VehicleUpdateInput } from '@/schemas/vehicle.schema';

export const vehicleService = {
    async getAll() {
        return await prisma.vehicle.findMany({
            include: {
                client: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true
                    }
                },
            }
        });
    },

    async getById(id: string) {
        return await prisma.vehicle.findUnique({
            where: { id },
            include: {
                client: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true
                    }
                },
                tickets: {
                    orderBy: { checkIn: 'desc' },
                    take: 5
                }
            }
        });
    },

    async getByPlate(plate: string) {
        return await prisma.vehicle.findUnique({
            where: { plate },
            include: {
                client: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true
                    }
                }
            }
        });
    },

    async create(data: VehicleCreateInput) {
        return await prisma.vehicle.create({
            data,
            include: {
                client: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true
                    }
                }
            }
        });
    },

    async update(id: string, data: VehicleUpdateInput) {
        return await prisma.vehicle.update({
            where: { id },
            data,
            include: {
                client: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true
                    }
                }
            }
        });
    },

    async delete(id: string) {
        return await prisma.vehicle.delete({
            where: { id },
        });
    },
};
