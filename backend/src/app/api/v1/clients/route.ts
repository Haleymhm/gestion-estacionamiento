import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { clientService } from '@/services/client.service';
import { clientCreateSchema } from '@/schemas/client.schema';

/**
 * @swagger
 * /api/v1/clients:
 *   get:
 *     tags:
 *       - Clients
 *     summary: List all clients
 *     responses:
 *       200:
 *         description: List of clients
 *   post:
 *     tags:
 *       - Clients
 *     summary: Create a new client
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               fullName:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Client created
 */


export async function GET() {
    try {
        const clients = await clientService.getAll();
        return apiResponse(clients);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = clientCreateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const newClient = await clientService.create(validation.data);
        return apiResponse(newClient, 201);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
