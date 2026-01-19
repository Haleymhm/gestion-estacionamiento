import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { ticketService } from '@/services/ticket.service';
import { ticketCreateSchema } from '@/schemas/ticket.schema';

/**
 * @swagger
 * /api/v1/tickets:
 *   get:
 *     tags:
 *       - Tickets
 *     summary: List all tickets
 *     responses:
 *       200:
 *         description: List of tickets
 *   post:
 *     tags:
 *       - Tickets
 *     summary: Create a new ticket (Check-in)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vehicleId:
 *                 type: string
 *               slotId:
 *                 type: string
 *               operatorId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created
 */


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
