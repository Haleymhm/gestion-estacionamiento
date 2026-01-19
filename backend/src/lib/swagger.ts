import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
    const spec = createSwaggerSpec({
        apiFolder: 'src/app/api', // define api folder
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Parking Management API',
                version: '1.0',
                description: 'API for managing parking lots, tickets, and reservations.',
            },
            tags: [
                { name: 'System Config', description: 'Global system settings' },
                { name: 'Users', description: 'Staff management' },
                { name: 'Clients', description: 'Mobile app users' },
                { name: 'Vehicles', description: 'Vehicle management' },
                { name: 'Zones', description: 'Parking zones' },
                { name: 'Parking Slots', description: 'Slots within zones' },
                { name: 'Tickets', description: 'Active parking tickets' },
                { name: 'Reservations', description: 'Future bookings' },
            ],
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                },
            },
            security: [],
        },
    });
    return spec;
};
