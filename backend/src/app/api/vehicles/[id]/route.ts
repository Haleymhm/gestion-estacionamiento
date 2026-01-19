import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { vehicleService } from '@/services/vehicle.service';
import { vehicleUpdateSchema } from '@/schemas/vehicle.schema';

interface Props {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const vehicle = await vehicleService.getById(id);
        if (!vehicle) {
            return apiResponse(null, 404, 'Vehicle not found');
        }
        return apiResponse(vehicle);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();
        const validation = vehicleUpdateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedVehicle = await vehicleService.update(id, validation.data);
        return apiResponse(updatedVehicle);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function DELETE(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        await vehicleService.delete(id);
        return apiResponse({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
