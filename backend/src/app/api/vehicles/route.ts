import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { vehicleService } from '@/services/vehicle.service';
import { vehicleCreateSchema } from '@/schemas/vehicle.schema';

export async function GET() {
    try {
        const vehicles = await vehicleService.getAll();
        return apiResponse(vehicles);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = vehicleCreateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        // Check if plate already exists to return friendly error
        const existing = await vehicleService.getByPlate(validation.data.plate);
        if (existing) {
            return apiResponse(null, 409, `Vehicle with plate ${validation.data.plate} already exists`);
        }

        const newVehicle = await vehicleService.create(validation.data);
        return apiResponse(newVehicle, 201);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
