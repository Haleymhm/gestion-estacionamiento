# Documentación API Backend - Sistema de Gestión de Estacionamiento

> [!NOTE]
> Esta documentación está destinada al equipo de frontend para facilitar la integración con el backend.
> Todas las rutas están bajo el prefijo **`/api/v1`**

---

## 📚 Tabla de Contenidos

1. [Autenticación](#-autenticación)
2. [Clientes](#-clientes)
3. [Usuarios](#-usuarios)
4. [Vehículos](#-vehículos)
5. [Zonas](#-zonas)
6. [Espacios de Estacionamiento](#-espacios-de-estacionamiento)
7. [Reservaciones](#-reservaciones)
8. [Tickets](#-tickets)
9. [Configuración del Sistema](#-configuración-del-sistema)
10. [Códigos de Respuesta HTTP](#-códigos-de-respuesta-http)

---

## 🔐 Autenticación

### 1. Registro de Usuario

**Ruta:** `POST /api/v1/auth/register`

**Descripción del flujo:**

1. El usuario envía sus credenciales (email, contraseña, nombre)
2. El sistema valida que todos los campos requeridos estén presentes
3. Verifica que el email no esté registrado
4. Hashea la contraseña usando bcrypt
5. Crea el usuario con rol por defecto `OPERATOR`
6. Retorna los datos del usuario (sin la contraseña)

**Request Body:**

```json
{
  "email": "string (formato email)",
  "password": "string (mínimo 6 caracteres)",
  "name": "string (requerido)"
}
```

**Campos Requeridos:**

- ✅ `email` - Email válido
- ✅ `password` - Mínimo 6 caracteres
- ✅ `name` - Nombre completo del usuario

**Ejemplo de Request:**

```json
{
  "email": "operador@parking.com",
  "password": "securePass123",
  "name": "Juan Pérez"
}
```

**Códigos de Respuesta:**

- `201 Created` - Usuario creado exitosamente
- `400 Bad Request` - Campos faltantes o inválidos
- `409 Conflict` - Email ya registrado
- `500 Internal Server Error` - Error del servidor

**Ejemplo de Respuesta Exitosa (201):**

```json
{
  "id": "uuid-del-usuario",
  "email": "operador@parking.com",
  "name": "Juan Pérez",
  "role": "OPERATOR"
}
```

---

### 2. Login / Autenticación

**Ruta:** `POST /api/v1/auth/login`

**Descripción del flujo:**

1. El usuario envía email y contraseña
2. El sistema busca el usuario por email
3. Verifica la contraseña usando bcrypt
4. Genera un JWT con validez de 1 día
5. Retorna el token y datos del usuario

**Request Body:**

```json
{
  "email": "string (formato email)",
  "password": "string"
}
```

**Campos Requeridos:**

- ✅ `email` - Email registrado
- ✅ `password` - Contraseña del usuario

**Ejemplo de Request:**

```json
{
  "email": "operador@parking.com",
  "password": "securePass123"
}
```

**Códigos de Respuesta:**

- `200 OK` - Login exitoso
- `400 Bad Request` - Email o contraseña faltantes
- `401 Unauthorized` - Credenciales inválidas
- `500 Internal Server Error` - Error del servidor

**Ejemplo de Respuesta Exitosa (200):**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid-del-usuario",
    "email": "operador@parking.com",
    "name": "Juan Pérez",
    "role": "OPERATOR"
  }
}
```

---

### 3. Verificar Autenticación

**Ruta:** `GET /api/v1/auth/me`

**Descripción del flujo:**

1. El cliente envía el token JWT en el header Authorization
2. El sistema verifica la validez del token
3. Retorna los datos decodificados del token

**Headers Requeridos:**

```
Authorization: Bearer <token>
```

**Ejemplo de Request:**

```bash
GET /api/v1/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Códigos de Respuesta:**

- `200 OK` - Token válido
- `401 Unauthorized` - Token inválido, expirado o faltante
- `500 Internal Server Error` - Error del servidor

**Ejemplo de Respuesta Exitosa (200):**

```json
{
  "message": "Authenticated",
  "user": {
    "userId": "uuid-del-usuario",
    "email": "operador@parking.com",
    "role": "OPERATOR"
  }
}
```

---

## 👥 Clientes

### 1. Listar Todos los Clientes

**Ruta:** `GET /api/v1/clients`

**Descripción del flujo:**
Obtiene la lista completa de clientes registrados en el sistema.

**Request Body:** N/A

**Ejemplo de Request:**

```bash
GET /api/v1/clients
```

**Códigos de Respuesta:**

- `200 OK` - Lista obtenida exitosamente
- `500 Internal Server Error` - Error del servidor

**Ejemplo de Respuesta Exitosa (200):**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-cliente",
      "email": "cliente@example.com",
      "fullName": "María González",
      "phone": "+56912345678",
      "createdAt": "2026-01-26T10:00:00.000Z",
      "updatedAt": "2026-01-26T10:00:00.000Z"
    }
  ]
}
```

---

### 2. Crear Cliente

**Ruta:** `POST /api/v1/clients`

**Descripción del flujo:**

1. Valida los datos del cliente
2. Hashea la contraseña
3. Crea el cliente en la base de datos
4. Retorna el cliente creado

**Request Body:**

```json
{
  "email": "string (formato email)",
  "password": "string (mínimo 6 caracteres)",
  "fullName": "string (requerido)",
  "phone": "string (opcional)"
}
```

**Campos Requeridos:**

- ✅ `email` - Email válido
- ✅ `password` - Mínimo 6 caracteres
- ✅ `fullName` - Nombre completo
- ⚪ `phone` - Opcional

**Ejemplo de Request:**

```json
{
  "email": "nuevo.cliente@example.com",
  "password": "clientPass456",
  "fullName": "Carlos Ramírez",
  "phone": "+56987654321"
}
```

**Códigos de Respuesta:**

- `201 Created` - Cliente creado exitosamente
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 3. Obtener Cliente por ID

**Ruta:** `GET /api/v1/clients/{id}`

**Descripción del flujo:**
Obtiene los detalles de un cliente específico usando su ID.

**Parámetros de Ruta:**

- `id` - UUID del cliente

**Ejemplo de Request:**

```bash
GET /api/v1/clients/abc123-uuid-456
```

**Códigos de Respuesta:**

- `200 OK` - Cliente encontrado
- `404 Not Found` - Cliente no existe
- `500 Internal Server Error` - Error del servidor

---

### 4. Actualizar Cliente

**Ruta:** `PUT /api/v1/clients/{id}`

**Descripción del flujo:**
Actualiza la información de un cliente existente.

**Request Body:**

```json
{
  "fullName": "string (opcional)",
  "phone": "string (opcional)"
}
```

**Campos Opcionales:**

- ⚪ `fullName`
- ⚪ `phone`

**Ejemplo de Request:**

```json
{
  "fullName": "Carlos Ramírez Actualizado",
  "phone": "+56911111111"
}
```

**Códigos de Respuesta:**

- `200 OK` - Cliente actualizado
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 5. Eliminar Cliente

**Ruta:** `DELETE /api/v1/clients/{id}`

**Descripción del flujo:**
Elimina un cliente del sistema.

**Parámetros de Ruta:**

- `id` - UUID del cliente

**Ejemplo de Request:**

```bash
DELETE /api/v1/clients/abc123-uuid-456
```

**Códigos de Respuesta:**

- `200 OK` - Cliente eliminado
- `500 Internal Server Error` - Error del servidor

**Ejemplo de Respuesta Exitosa (200):**

```json
{
  "success": true,
  "data": {
    "message": "Client deleted successfully"
  }
}
```

---

## 👤 Usuarios

### 1. Listar Todos los Usuarios

**Ruta:** `GET /api/v1/users`

**Descripción del flujo:**
Obtiene la lista de todos los usuarios del sistema (operadores y administradores).

**Ejemplo de Request:**

```bash
GET /api/v1/users
```

**Códigos de Respuesta:**

- `200 OK` - Lista obtenida exitosamente
- `500 Internal Server Error` - Error del servidor

---

### 2. Crear Usuario

**Ruta:** `POST /api/v1/users`

**Descripción del flujo:**
Crea un nuevo usuario en el sistema con un rol específico.

**Request Body:**

```json
{
  "email": "string (formato email)",
  "password": "string (mínimo 6 caracteres)",
  "name": "string (requerido)",
  "role": "ADMIN | OPERATOR"
}
```

**Campos Requeridos:**

- ✅ `email` - Email válido
- ✅ `password` - Mínimo 6 caracteres
- ✅ `name` - Nombre del usuario
- ✅ `role` - `ADMIN` o `OPERATOR`

**Ejemplo de Request:**

```json
{
  "email": "admin@parking.com",
  "password": "adminPass789",
  "name": "Ana Martínez",
  "role": "ADMIN"
}
```

**Códigos de Respuesta:**

- `201 Created` - Usuario creado
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 3. Obtener Usuario por ID

**Ruta:** `GET /api/v1/users/{id}`

**Parámetros de Ruta:**

- `id` - UUID del usuario

**Códigos de Respuesta:**

- `200 OK` - Usuario encontrado
- `404 Not Found` - Usuario no existe
- `500 Internal Server Error` - Error del servidor

---

### 4. Actualizar Usuario

**Ruta:** `PUT /api/v1/users/{id}`

**Request Body:**

```json
{
  "name": "string (opcional)",
  "email": "string (opcional)",
  "role": "string (opcional)"
}
```

**Códigos de Respuesta:**

- `200 OK` - Usuario actualizado
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 5. Eliminar Usuario

**Ruta:** `DELETE /api/v1/users/{id}`

**Códigos de Respuesta:**

- `200 OK` - Usuario eliminado
- `500 Internal Server Error` - Error del servidor

---

## 🚗 Vehículos

### 1. Listar Todos los Vehículos

**Ruta:** `GET /api/v1/vehicles`

**Descripción del flujo:**
Obtiene la lista de todos los vehículos registrados.

**Ejemplo de Request:**

```bash
GET /api/v1/vehicles
```

**Códigos de Respuesta:**

- `200 OK` - Lista obtenida exitosamente
- `500 Internal Server Error` - Error del servidor

---

### 2. Crear Vehículo

**Ruta:** `POST /api/v1/vehicles`

**Descripción del flujo:**

1. Valida los datos del vehículo
2. Verifica que la patente no exista
3. Crea el vehículo asociado a un cliente
4. Retorna el vehículo creado

**Request Body:**

```json
{
  "plate": "string (requerido)",
  "brand": "string (requerido)",
  "model": "string (requerido)",
  "clientId": "string UUID (requerido)"
}
```

**Campos Requeridos:**

- ✅ `plate` - Patente del vehículo
- ✅ `brand` - Marca del vehículo
- ✅ `model` - Modelo del vehículo
- ✅ `clientId` - UUID del cliente propietario

**Ejemplo de Request:**

```json
{
  "plate": "ABC123",
  "brand": "Toyota",
  "model": "Corolla 2020",
  "clientId": "uuid-del-cliente"
}
```

**Códigos de Respuesta:**

- `201 Created` - Vehículo creado
- `400 Bad Request` - Validación falla
- `409 Conflict` - Patente ya existe
- `500 Internal Server Error` - Error del servidor

---

### 3. Obtener Vehículo por ID

**Ruta:** `GET /api/v1/vehicles/{id}`

**Parámetros de Ruta:**

- `id` - UUID del vehículo

**Códigos de Respuesta:**

- `200 OK` - Vehículo encontrado
- `404 Not Found` - Vehículo no existe
- `500 Internal Server Error` - Error del servidor

---

### 4. Actualizar Vehículo

**Ruta:** `PUT /api/v1/vehicles/{id}`

**Request Body:**

```json
{
  "plate": "string (opcional)",
  "brand": "string (opcional)",
  "model": "string (opcional)",
  "clientId": "string UUID (opcional)"
}
```

**Códigos de Respuesta:**

- `200 OK` - Vehículo actualizado
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 5. Eliminar Vehículo

**Ruta:** `DELETE /api/v1/vehicles/{id}`

**Códigos de Respuesta:**

- `200 OK` - Vehículo eliminado
- `500 Internal Server Error` - Error del servidor

---

## 📍 Zonas

### 1. Listar Todas las Zonas

**Ruta:** `GET /api/v1/zones`

**Descripción del flujo:**
Obtiene la lista de zonas de estacionamiento configuradas.

**Ejemplo de Request:**

```bash
GET /api/v1/zones
```

**Códigos de Respuesta:**

- `200 OK` - Lista obtenida exitosamente
- `500 Internal Server Error` - Error del servidor

---

### 2. Crear Zona

**Ruta:** `POST /api/v1/zones`

**Request Body:**

```json
{
  "name": "string (requerido)"
}
```

**Campos Requeridos:**

- ✅ `name` - Nombre de la zona

**Ejemplo de Request:**

```json
{
  "name": "Zona A - Norte"
}
```

**Códigos de Respuesta:**

- `201 Created` - Zona creada
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 3. Obtener Zona por ID

**Ruta:** `GET /api/v1/zones/{id}`

**Códigos de Respuesta:**

- `200 OK` - Zona encontrada
- `404 Not Found` - Zona no existe
- `500 Internal Server Error` - Error del servidor

---

### 4. Actualizar Zona

**Ruta:** `PUT /api/v1/zones/{id}`

**Request Body:**

```json
{
  "name": "string (requerido)"
}
```

**Códigos de Respuesta:**

- `200 OK` - Zona actualizada
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 5. Eliminar Zona

**Ruta:** `DELETE /api/v1/zones/{id}`

**Códigos de Respuesta:**

- `200 OK` - Zona eliminada
- `500 Internal Server Error` - Error del servidor

---

## 🅿️ Espacios de Estacionamiento

### 1. Listar Espacios de Estacionamiento

**Ruta:** `GET /api/v1/parking-slots`

**Descripción del flujo:**
Obtiene la lista de espacios de estacionamiento, con filtros opcionales.

**Query Parameters (Opcionales):**

- `zoneId` - UUID de la zona para filtrar
- `status` - Estado del espacio: `AVAILABLE`, `OCCUPIED`, `MAINTENANCE`, `RESERVED`

**Ejemplo de Request:**

```bash
GET /api/v1/parking-slots?zoneId=uuid-zona&status=AVAILABLE
```

**Códigos de Respuesta:**

- `200 OK` - Lista obtenida exitosamente
- `500 Internal Server Error` - Error del servidor

**Ejemplo de Respuesta Exitosa (200):**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-slot",
      "code": "A-101",
      "status": "AVAILABLE",
      "zoneId": "uuid-zona",
      "zone": {
        "id": "uuid-zona",
        "name": "Zona A - Norte"
      }
    }
  ]
}
```

---

### 2. Crear Espacio de Estacionamiento

**Ruta:** `POST /api/v1/parking-slots`

**Request Body:**

```json
{
  "code": "string (requerido)",
  "zoneId": "string UUID (requerido)",
  "status": "AVAILABLE | OCCUPIED | MAINTENANCE | RESERVED (opcional, default: AVAILABLE)"
}
```

**Campos Requeridos:**

- ✅ `code` - Código del espacio (ej: "A-101")
- ✅ `zoneId` - UUID de la zona
- ⚪ `status` - Estado inicial (default: `AVAILABLE`)

**Ejemplo de Request:**

```json
{
  "code": "A-102",
  "zoneId": "uuid-de-zona",
  "status": "AVAILABLE"
}
```

**Códigos de Respuesta:**

- `201 Created` - Espacio creado
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 3. Obtener Espacio por ID

**Ruta:** `GET /api/v1/parking-slots/{id}`

**Códigos de Respuesta:**

- `200 OK` - Espacio encontrado
- `404 Not Found` - Espacio no existe
- `500 Internal Server Error` - Error del servidor

---

### 4. Actualizar Espacio

**Ruta:** `PUT /api/v1/parking-slots/{id}`

**Request Body:**

```json
{
  "code": "string (opcional)",
  "status": "AVAILABLE | OCCUPIED | MAINTENANCE | RESERVED (opcional)",
  "zoneId": "string UUID (opcional)"
}
```

**Códigos de Respuesta:**

- `200 OK` - Espacio actualizado
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 5. Eliminar Espacio

**Ruta:** `DELETE /api/v1/parking-slots/{id}`

**Códigos de Respuesta:**

- `200 OK` - Espacio eliminado
- `500 Internal Server Error` - Error del servidor

---

## 📅 Reservaciones

### 1. Listar Reservaciones

**Ruta:** `GET /api/v1/reservations`

**Descripción del flujo:**
Obtiene la lista de reservaciones con filtro opcional por cliente.

**Query Parameters (Opcionales):**

- `clientId` - UUID del cliente para filtrar sus reservaciones

**Ejemplo de Request:**

```bash
GET /api/v1/reservations?clientId=uuid-del-cliente
```

**Códigos de Respuesta:**

- `200 OK` - Lista obtenida exitosamente
- `500 Internal Server Error` - Error del servidor

---

### 2. Crear Reservación

**Ruta:** `POST /api/v1/reservations`

**Descripción del flujo:**

1. Valida que el espacio esté disponible
2. Verifica que no haya traslapes de tiempo
3. Valida que `endTime` sea posterior a `startTime`
4. Crea la reservación y marca el espacio como `RESERVED`

**Request Body:**

```json
{
  "clientId": "string UUID (requerido)",
  "vehicleId": "string UUID (requerido)",
  "slotId": "string UUID (requerido)",
  "startTime": "string datetime ISO 8601 (requerido)",
  "endTime": "string datetime ISO 8601 (requerido)"
}
```

**Campos Requeridos:**

- ✅ `clientId` - UUID del cliente
- ✅ `vehicleId` - UUID del vehículo
- ✅ `slotId` - UUID del espacio de estacionamiento
- ✅ `startTime` - Fecha/hora de inicio (formato ISO 8601)
- ✅ `endTime` - Fecha/hora de fin (formato ISO 8601)

**Ejemplo de Request:**

```json
{
  "clientId": "uuid-cliente",
  "vehicleId": "uuid-vehiculo",
  "slotId": "uuid-espacio",
  "startTime": "2026-01-27T10:00:00.000Z",
  "endTime": "2026-01-27T12:00:00.000Z"
}
```

**Códigos de Respuesta:**

- `201 Created` - Reservación creada
- `400 Bad Request` - Validación falla
- `409 Conflict` - Espacio no disponible o hay traslape de horarios
- `500 Internal Server Error` - Error del servidor

---

### 3. Obtener Reservación por ID

**Ruta:** `GET /api/v1/reservations/{id}`

**Códigos de Respuesta:**

- `200 OK` - Reservación encontrada
- `404 Not Found` - Reservación no existe
- `500 Internal Server Error` - Error del servidor

---

### 4. Actualizar Reservación / Check-in

**Ruta:** `PUT /api/v1/reservations/{id}`

**Descripción del flujo:**

#### Opción A: Actualizar estado de reservación

Cambia el estado de la reservación.

**Request Body:**

```json
{
  "status": "PENDING | CONFIRMED | COMPLETED | CANCELLED | NOSHOW"
}
```

#### Opción B: Realizar Check-in (convertir reservación a ticket)

Cuando el cliente llega al estacionamiento.

**Request Body:**

```json
{
  "action": "check-in",
  "operatorId": "uuid-del-operador"
}
```

**Campos:**

- ✅ `action` - Debe ser `"check-in"`
- ✅ `operatorId` - UUID del operador que realiza el check-in

**Códigos de Respuesta:**

- `200 OK` - Reservación actualizada o check-in exitoso
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

## 🎫 Tickets

### 1. Listar Todos los Tickets

**Ruta:** `GET /api/v1/tickets`

**Descripción del flujo:**
Obtiene la lista de todos los tickets de estacionamiento.

**Ejemplo de Request:**

```bash
GET /api/v1/tickets
```

**Códigos de Respuesta:**

- `200 OK` - Lista obtenida exitosamente
- `500 Internal Server Error` - Error del servidor

---

### 2. Crear Ticket (Check-in)

**Ruta:** `POST /api/v1/tickets`

**Descripción del flujo:**

1. Valida que el espacio esté disponible
2. Crea el ticket con estado `ACTIVE`
3. Registra la hora de entrada (`startTime`)
4. Marca el espacio como `OCCUPIED`

**Request Body:**

```json
{
  "vehicleId": "string UUID (requerido)",
  "slotId": "string UUID (requerido)",
  "operatorId": "string UUID (requerido)"
}
```

**Campos Requeridos:**

- ✅ `vehicleId` - UUID del vehículo
- ✅ `slotId` - UUID del espacio de estacionamiento
- ✅ `operatorId` - UUID del operador que registra la entrada

**Ejemplo de Request:**

```json
{
  "vehicleId": "uuid-vehiculo",
  "slotId": "uuid-espacio",
  "operatorId": "uuid-operador"
}
```

**Códigos de Respuesta:**

- `201 Created` - Ticket creado (check-in exitoso)
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

### 3. Obtener Ticket por ID

**Ruta:** `GET /api/v1/tickets/{id}`

**Códigos de Respuesta:**

- `200 OK` - Ticket encontrado
- `404 Not Found` - Ticket no existe
- `500 Internal Server Error` - Error del servidor

---

### 4. Actualizar Ticket (Check-out)

**Ruta:** `PUT /api/v1/tickets/{id}`

**Descripción del flujo:**

1. Actualiza el estado del ticket (generalmente a `COMPLETED`)
2. Registra la hora de salida (`endTime`)
3. Calcula el monto a pagar basado en el tiempo transcurrido
4. Marca el espacio como `AVAILABLE`

**Request Body:**

```json
{
  "status": "ACTIVE | COMPLETED | CANCELLED"
}
```

**Campos:**

- ✅ `status` - Nuevo estado del ticket

**Ejemplo de Request:**

```json
{
  "status": "COMPLETED"
}
```

**Códigos de Respuesta:**

- `200 OK` - Ticket actualizado (check-out exitoso)
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

## ⚙️ Configuración del Sistema

### 1. Obtener Configuración

**Ruta:** `GET /api/v1/system-config`

**Descripción del flujo:**
Obtiene la configuración global del sistema (precio por minuto, nombre de la empresa, etc.).

**Ejemplo de Request:**

```bash
GET /api/v1/system-config
```

**Códigos de Respuesta:**

- `200 OK` - Configuración obtenida
- `500 Internal Server Error` - Error del servidor

**Ejemplo de Respuesta Exitosa (200):**

```json
{
  "success": true,
  "data": {
    "id": "config-id",
    "pricePerMinute": 50,
    "companyName": "Estacionamiento Central"
  }
}
```

---

### 2. Actualizar Configuración

**Ruta:** `PUT /api/v1/system-config`

**Descripción del flujo:**
Actualiza la configuración global del sistema.

**Request Body:**

```json
{
  "pricePerMinute": "number (opcional)",
  "companyName": "string (opcional)"
}
```

**Campos Opcionales:**

- ⚪ `pricePerMinute` - Precio por minuto de estacionamiento
- ⚪ `companyName` - Nombre de la empresa

**Ejemplo de Request:**

```json
{
  "pricePerMinute": 60,
  "companyName": "Parking Premium"
}
```

**Códigos de Respuesta:**

- `200 OK` - Configuración actualizada
- `400 Bad Request` - Validación falla
- `500 Internal Server Error` - Error del servidor

---

## 📋 Códigos de Respuesta HTTP

### Respuestas Exitosas (2xx)

| Código | Significado | Uso |
|--------|-------------|-----|
| `200 OK` | Solicitud exitosa | GET, PUT, DELETE exitosos |
| `201 Created` | Recurso creado exitosamente | POST exitoso |

### Errores del Cliente (4xx)

| Código | Significado | Causa |
|--------|-------------|-------|
| `400 Bad Request` | Solicitud inválida | Validación de campos falla |
| `401 Unauthorized` | No autenticado | Token inválido o faltante |
| `404 Not Found` | Recurso no encontrado | ID no existe en la base de datos |
| `409 Conflict` | Conflicto | Email/patente duplicado, espacio ocupado |

### Errores del Servidor (5xx)

| Código | Significado | Causa |
|--------|-------------|-------|
| `500 Internal Server Error` | Error del servidor | Error inesperado en el backend |

---

## 🔄 Formato de Respuesta Estándar

Todas las respuestas de la API siguen este formato:

**Respuesta Exitosa:**

```json
{
  "success": true,
  "data": { /* ... datos solicitados ... */ }
}
```

**Respuesta de Error:**

```json
{
  "success": false,
  "error": "Mensaje descriptivo del error"
}
```

---

## 🔒 Autenticación en Endpoints Protegidos

> [!IMPORTANT]
> Muchos endpoints requieren autenticación. Incluye el token JWT en el header `Authorization`.

**Formato del Header:**

```
Authorization: Bearer <token-jwt>
```

**Ejemplo en JavaScript (fetch):**

```javascript
const response = await fetch('/api/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

---

## 📝 Notas Adicionales

### Enums Importantes

**SlotStatus (Estados de Espacio):**

- `AVAILABLE` - Disponible
- `OCCUPIED` - Ocupado
- `MAINTENANCE` - En mantenimiento
- `RESERVED` - Reservado

**ReservationStatus (Estados de Reservación):**

- `PENDING` - Pendiente
- `CONFIRMED` - Confirmada
- `COMPLETED` - Completada
- `CANCELLED` - Cancelada
- `NOSHOW` - Cliente no se presentó

**TicketStatus (Estados de Ticket):**

- `ACTIVE` - Activo (vehículo actualmente estacionado)
- `COMPLETED` - Completado (vehículo ya salió)
- `CANCELLED` - Cancelado

**UserRole (Roles de Usuario):**

- `ADMIN` - Administrador
- `OPERATOR` - Operador

---

## 🛠️ Herramientas de Prueba

### Ejemplo con cURL

```bash
# Login
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"operador@parking.com","password":"securePass123"}'

# Crear Zona (con token)
curl -X POST http://localhost:3000/api/v1/zones \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"name":"Zona B - Sur"}'
```

### Ejemplo con Postman

1. Crear una colección llamada "Parking API"
2. Agregar variable de entorno `{{baseUrl}}` = `http://localhost:3000/api/v1`
3. Agregar variable `{{token}}` después del login
4. Configurar "Authorization" en las requests protegidas

---

> [!TIP]
> Para más detalles sobre los modelos de datos, consulta el archivo [schema.prisma](file:///home/haleymhm/Projects/repositories-git/gestion-estacionamiento/backend/prisma/schema.prisma)
