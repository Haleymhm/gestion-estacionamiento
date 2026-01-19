import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { systemConfigService } from '@/services/system-config.service';
import { systemConfigSchema } from '@/schemas/system-config.schema';

export async function GET() {
    try {
        const config = await systemConfigService.getConfig();
        return apiResponse(config);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = systemConfigSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedConfig = await systemConfigService.updateConfig(validation.data);
        return apiResponse(updatedConfig);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
