import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { parkingSlotService } from '@/services/parking-slot.service';
import { parkingSlotUpdateSchema } from '@/schemas/parking-slot.schema';

interface Props {
    params: Promise<{ id: string }>;
}

/**
 * @swagger
 * /api/v1/parking-slots/{id}:
 *   get:
 *     tags:
 *       - Parking Slots
 *     summary: Get parking slot by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Slot details
 *   put:
 *     tags:
 *       - Parking Slots
 *     summary: Update parking slot
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [AVAILABLE, OCCUPIED, MAINTENANCE, RESERVED]
 *               zoneId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Slot updated
 *   delete:
 *     tags:
 *       - Parking Slots
 *     summary: Delete parking slot
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Slot deleted
 */
export async function GET(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const slot = await parkingSlotService.getById(id);
        if (!slot) {
            return apiResponse(null, 404, 'Parking slot not found');
        }
        return apiResponse(slot);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();
        const validation = parkingSlotUpdateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedSlot = await parkingSlotService.update(id, validation.data);
        return apiResponse(updatedSlot);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function DELETE(req: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        await parkingSlotService.delete(id);
        return apiResponse({ message: 'Parking slot deleted successfully' });
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
