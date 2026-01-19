import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { userService } from '@/services/user.service';
import { userCreateSchema } from '@/schemas/user.schema';

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: List all users
 *     responses:
 *       200:
 *         description: List of users
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
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
 *               name:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [ADMIN, OPERATOR]
 *     responses:
 *       201:
 *         description: User created
 */


export async function GET() {
    try {
        const users = await userService.getAll();
        return apiResponse(users);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = userCreateSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const newUser = await userService.create(validation.data);
        return apiResponse(newUser, 201);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
