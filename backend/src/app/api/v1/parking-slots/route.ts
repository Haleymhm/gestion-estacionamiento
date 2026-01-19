import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { parkingSlotService } from '@/services/parking-slot.service';
import { parkingSlotCreateSchema } from '@/schemas/parking-slot.schema';
import { SlotStatus } from '@prisma/client';

/**
 * @swagger
 * /api/v1/parking-slots:
 *   get:
 *     tags:
 *       - Parking Slots
 *     summary: List parking slots
 *     parameters:
 *       - in: query
 *         name: zoneId
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [AVAILABLE, OCCUPIED, MAINTENANCE, RESERVED]
 *     responses:
 *       200:
 *         description: List of slots
 *   post:
 *     tags:
 *       - Parking Slots
 *     summary: Create a new parking slot
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               zoneId:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [AVAILABLE, OCCUPIED, MAINTENANCE, RESERVED]
 *     responses:
 *       201:
 *         description: Slot created
 */


export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const zoneId = searchParams.get('zoneId') || undefined;
        const statusParam = searchParams.get('status');
        const status = statusParam && Object.values(SlotStatus).includes(statusParam as SlotStatus)
            ? (statusParam as SlotStatus)
            : undefined;

        const slots = await parkingSlotService.getAll(zoneId, status);
        return apiResponse(slots);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = parkingSlotCreateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const newSlot = await parkingSlotService.create(validation.data);
        return apiResponse(newSlot, 201);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
