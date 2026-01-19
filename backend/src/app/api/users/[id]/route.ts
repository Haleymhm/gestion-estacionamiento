import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { userService } from '@/services/user.service';
import { userUpdateSchema } from '@/schemas/user.schema';

interface Props {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const user = await userService.getById(id);
        if (!user) {
            return apiResponse(null, 404, 'User not found');
        }
        return apiResponse(user);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();
        const validation = userUpdateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedUser = await userService.update(id, validation.data);
        return apiResponse(updatedUser);
    } catch (error) {
        // Handle specific Prisma errors like P2025 (Record not found) if needed
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function DELETE(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        await userService.delete(id);
        return apiResponse({ message: 'User deleted successfully' });
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
