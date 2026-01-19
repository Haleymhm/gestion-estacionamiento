import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { clientService } from '@/services/client.service';
import { clientUpdateSchema } from '@/schemas/client.schema';

interface Props {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const client = await clientService.getById(id);
        if (!client) {
            return apiResponse(null, 404, 'Client not found');
        }
        return apiResponse(client);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();
        const validation = clientUpdateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedClient = await clientService.update(id, validation.data);
        return apiResponse(updatedClient);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function DELETE(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        await clientService.delete(id);
        return apiResponse({ message: 'Client deleted successfully' });
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
