import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { userService } from '@/services/user.service';
import { userCreateSchema } from '@/schemas/user.schema';

export async function GET() {
    try {
        const users = await userService.getAll();
        return apiResponse(users);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = userCreateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const newUser = await userService.create(validation.data);
        return apiResponse(newUser, 201);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
