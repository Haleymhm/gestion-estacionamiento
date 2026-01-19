import { NextRequest } from 'next/server';
import { apiResponse } from '@/lib/api-response';
import { systemConfigService } from '@/services/system-config.service';
import { systemConfigSchema } from '@/schemas/system-config.schema';

/**
 * @swagger
 * /api/v1/system-config:
 *   get:
 *     tags:
 *       - System Config
 *     summary: Get system configuration
 *     description: Returns the current system configuration including global price per minute.
 *     responses:
 *       200:
 *         description: System configuration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     pricePerMinute:
 *                       type: number
 *                     companyName:
 *                       type: string
 *   put:
 *     tags:
 *       - System Config
 *     summary: Update system configuration
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pricePerMinute:
 *                 type: number
 *               companyName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated configuration
 */


export async function GET() {
    try {
        const config = await systemConfigService.getConfig();
        return apiResponse(config);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = systemConfigSchema.safeParse(body);

        if (!validation.success) {
            return apiResponse(null, 400, validation.error.message);
        }

        const updatedConfig = await systemConfigService.updateConfig(validation.data);
        return apiResponse(updatedConfig);
    } catch (error) {
        return apiResponse(null, 500, (error as Error).message);
    }
}
