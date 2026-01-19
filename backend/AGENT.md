# AGENT.md - Backend Instructions: Gestor de Estacionamientos

## 1. Objetivo del Backend

Crear una API robusta, segura y escalable para gestionar un estacionamiento. El sistema debe manejar la lógica de asignación de lugares, cálculo de tiempos y costos, y asegurar la integridad de los datos.

## 2. Stack Tecnológico (Backend Only)

- **Runtime:** Node.js.
- **Lenguaje:** TypeScript (Strict Mode).
- **ORM:** Prisma.
- **Base de Datos:** (PostgreSQL / MySQL - según tu configuración).
- **Validación:** Zod (Recomendado para validar datos antes de que lleguen a Prisma).

## 3. Arquitectura y Estructura

- **Arquitectura de Capas:**
  1. **Routes/Controllers:** Reciben la petición HTTP y validan los inputs.
  2. **Services (Lógica de Negocio):** Aquí va la lógica real (cálculos de tarifas, verificaciones).
  3. **Database (Prisma):** Solo interacción con la BD.
- **Separación:** No mezcles lógica de base de datos dentro de los controladores.

## 4. Reglas de Desarrollo

### TypeScript & Prisma

- Usa siempre los **tipos generados por Prisma** (`Prisma.UserCreateInput`, etc.) para asegurar consistencia.
- **Prohibido `any`:** Si no sabes el tipo, defínelo o pregunta al usuario como proseguir.
- Manejo de asincronía: Usa siempre `async/await` con bloques `try/catch` para capturar errores de base de datos.

### Base de Datos (Schema)

- Usa nombres descriptivos en inglés para el modelo de datos (ej: `ParkingSlot`, `Ticket`, `Rate`).
- Configura correctamente las relaciones en el `schema.prisma` (ej: Un `Ticket` pertenece a un `Vehicle` y ocupa un `ParkingSlot`).
- Usa `Enums` para estados fijos (ej: `SlotStatus`: AVAILABLE, OCCUPIED, MAINTENANCE).

### Lógica de Negocio (Estacionamiento)

- **Cálculo de Tarifas:** La lógica debe soportar cobro por minuto, hora o fracción. Debe ser testeable.
- **Concurrencia:** Asegúrate de que dos vehículos no puedan reservar el mismo puesto al mismo tiempo (Usa transacciones de Prisma `$transaction` si es necesario).
- **Auditoría:** Registra (timestamp) la hora exacta de entrada y salida (`checkIn`, `checkOut`).

### Lógica de Reservas (App Móvil)

- **Validación de Disponibilidad (Overlap):**
  - Antes de confirmar una reserva en un `ParkingSlot`, DEBES verificar que no exista otra `Reservation` activa (CONFIRMED) en ese mismo rango de fechas.
  - La lógica es: `(NewStart < ExistingEnd) AND (NewEnd > ExistingStart)`. Si esto es verdadero, hay conflicto.
  
- **Flujo Reserva -> Ticket:**
  - Cuando un vehículo con reserva llega, el sistema debe buscar la `Reservation` por placa y fecha actual.
  - Al hacer Check-In, cambia el estado de la `Reservation` a `COMPLETED` y crea el `Ticket` vinculando ambos.

- **Expiración:**

  - Implementar un "Cron Job" o chequeo que marque como `NOSHOW` las reservas que pasaron su `startTime` por más de X minutos (ej: 15 min) sin que el auto llegara.

## 5. Formato de Respuestas (API)

- Todas las respuestas deben seguir un formato JSON estándar:

  ```json
  {
    "success": true,
    "data": { ... },
    "error": null
  }
- Usa códigos de estado HTTP correctos (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error).
