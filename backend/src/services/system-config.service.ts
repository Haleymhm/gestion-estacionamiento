import { prisma } from '@/lib/prisma';
import { SystemConfigInput } from '@/schemas/system-config.schema';

export const systemConfigService = {
    async getConfig() {
        const config = await prisma.systemConfig.findFirst();
        if (!config) {
            // If no config exists, create a default one
            return await prisma.systemConfig.create({
                data: {
                    pricePerMinute: 0,
                    companyName: 'Default Parking',
                },
            });
        }
        return config;
    },

    async updateConfig(data: SystemConfigInput) {
        const config = await this.getConfig();
        return await prisma.systemConfig.update({
            where: { id: config.id },
            data: {
                pricePerMinute: data.pricePerMinute,
                companyName: data.companyName,
            },
        });
    },
};
