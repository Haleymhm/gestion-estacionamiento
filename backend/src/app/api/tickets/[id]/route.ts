import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { ticketService } from '@/services/ticket.service';
import { ticketUpdateSchema } from '@/schemas/ticket.schema';

interface Props {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const ticket = await ticketService.getById(id);
        if (!ticket) {
            return apiResponse(null, 404, 'Ticket not found');
        }
        return apiResponse(ticket);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();
        const validation = ticketUpdateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedTicket = await ticketService.update(id, validation.data);
        return apiResponse(updatedTicket);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
