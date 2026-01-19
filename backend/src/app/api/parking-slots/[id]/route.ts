import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { parkingSlotService } from '@/services/parking-slot.service';
import { parkingSlotUpdateSchema } from '@/schemas/parking-slot.schema';

interface Props {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const slot = await parkingSlotService.getById(id);
        if (!slot) {
            return apiResponse(null, 404, 'Parking slot not found');
        }
        return apiResponse(slot);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();
        const validation = parkingSlotUpdateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedSlot = await parkingSlotService.update(id, validation.data);
        return apiResponse(updatedSlot);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function DELETE(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        await parkingSlotService.delete(id);
        return apiResponse({ message: 'Parking slot deleted successfully' });
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
