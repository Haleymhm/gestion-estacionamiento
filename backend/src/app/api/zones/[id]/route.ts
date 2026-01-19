import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { zoneService } from '@/services/zone.service';
import { zoneSchema } from '@/schemas/zone.schema';

interface Props {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const zone = await zoneService.getById(id);
        if (!zone) {
            return apiResponse(null, 404, 'Zone not found');
        }
        return apiResponse(zone);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();
        const validation = zoneSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedZone = await zoneService.update(id, validation.data);
        return apiResponse(updatedZone);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function DELETE(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        await zoneService.delete(id);
        return apiResponse({ message: 'Zone deleted successfully' });
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
