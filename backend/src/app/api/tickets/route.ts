import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { ticketService } from '@/services/ticket.service';
import { ticketCreateSchema } from '@/schemas/ticket.schema';

export async function GET() {
    try {
        const tickets = await ticketService.getAll();
        return apiResponse(tickets);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = ticketCreateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const newTicket = await ticketService.create(validation.data);
        return apiResponse(newTicket, 201);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
