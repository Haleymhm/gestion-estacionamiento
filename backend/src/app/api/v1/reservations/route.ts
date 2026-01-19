import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { reservationService } from '@/services/reservation.service';
import { reservationCreateSchema } from '@/schemas/reservation.schema';

/**
 * @swagger
 * /api/v1/reservations:
 *   get:
 *     tags:
 *       - Reservations
 *     summary: List reservations
 *     parameters:
 *       - in: query
 *         name: clientId
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reservations
 *   post:
 *     tags:
 *       - Reservations
 *     summary: Create a new reservation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *               vehicleId:
 *                 type: string
 *               slotId:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Reservation created
 */


export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const clientId = searchParams.get('clientId') || undefined;

        const reservations = await reservationService.getAll(clientId);
        return apiResponse(reservations);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = reservationCreateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const newReservation = await reservationService.create(validation.data);
        return apiResponse(newReservation, 201);
    } catch (error) {
        // Catch-all for "Wait" or overlap errors
        return apiResponse(null, 409, (error as Error).message);
    }
}
