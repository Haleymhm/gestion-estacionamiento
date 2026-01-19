import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { zoneService } from '@/services/zone.service';
import { zoneSchema } from '@/schemas/zone.schema';

export async function GET() {
    try {
        const zones = await zoneService.getAll();
        return apiResponse(zones);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = zoneSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const newZone = await zoneService.create(validation.data);
        return apiResponse(newZone, 201);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
