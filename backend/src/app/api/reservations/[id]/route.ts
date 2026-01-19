import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { reservationService } from '@/services/reservation.service';
import { reservationUpdateSchema } from '@/schemas/reservation.schema';

interface Props {
    params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const reservation = await reservationService.getById(id);
        if (!reservation) {
            return apiResponse(null, 404, 'Reservation not found');
        }
        return apiResponse(reservation);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();

        // Check if this is a "check-in" action
        if (body.action === 'check-in') {
            const ticket = await reservationService.checkIn(id, body.operatorId);
            return apiResponse(ticket);
        }

        const validation = reservationUpdateSchema.safeParse(body);
        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedReservation = await reservationService.update(id, validation.data);
        return apiResponse(updatedReservation);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
