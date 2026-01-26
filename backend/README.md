# 🅿️ Sistema de Gestión de Estacionamiento - Backend

API REST completa para la gestión integral de estacionamientos, desarrollada con Next.js, Prisma y PostgreSQL. Soporta tanto operación manual (operadores) como reservas mediante aplicación móvil.

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Endpoints](#-api-endpoints)
- [Base de Datos](#-base-de-datos)
- [Testing](#-testing)
- [Documentación](#-documentación)
- [Scripts Disponibles](#-scripts-disponibles)

---

## 🚀 Características

### Gestión de Usuarios

- ✅ Autenticación JWT para usuarios del sistema (Admin/Operador)
- ✅ Autenticación separada para clientes de app móvil
- ✅ Roles: `ADMIN` (acceso completo) y `OPERATOR` (operador de guardia)
- ✅ Gestión CRUD de usuarios y clientes

### Infraestructura

- ✅ Gestión de zonas de estacionamiento
- ✅ Gestión de espacios con estados: `AVAILABLE`, `OCCUPIED`, `MAINTENANCE`, `RESERVED`
- ✅ Asignación de espacios por zona con códigos únicos

### Operación

- ✅ Registro de vehículos (con o sin cliente asociado)
- ✅ Check-in/Check-out de vehículos
- ✅ Cálculo automático de tarifas por tiempo
- ✅ Gestión de tickets con histórico completo

### Reservas (App Móvil)

- ✅ Sistema de reservaciones con estados: `PENDING`, `CONFIRMED`, `COMPLETED`, `CANCELLED`, `NOSHOW`
- ✅ Validación de disponibilidad y traslape de horarios
- ✅ Conversión de reserva a ticket en check-in
- ✅ Clientes pueden gestionar múltiples vehículos

### Configuración

- ✅ Configuración global de tarifas (precio por minuto)
- ✅ Snapshot de precios en tickets para histórico
- ✅ Personalización del nombre de empresa

---

## 🛠️ Stack Tecnológico

### Backend

- **Framework:** Next.js 16.1.3 (App Router)
- **Runtime:** Node.js
- **Lenguaje:** TypeScript 5.9.3
- **ORM:** Prisma 6.19.2
- **Base de Datos:** PostgreSQL

### Seguridad

- **Autenticación:** JWT (jsonwebtoken)
- **Hash de Contraseñas:** bcryptjs

### Validación

- **Schema Validation:** Zod 4.3.5

### Documentación

- **API Docs:** Swagger UI + swagger-jsdoc

### Desarrollo

- **Linting:** ESLint 9.39.2
- **Compiler:** React Compiler (babel-plugin-react-compiler)

---

## 📦 Requisitos Previos

- **Node.js:** >= 18.x
- **PostgreSQL:** >= 14.x
- **npm/pnpm/yarn:** Gestor de paquetes

---

## 🔧 Instalación

1. **Clonar el repositorio:**

```bash
git clone <url-del-repositorio>
cd backend
```

1. **Instalar dependencias:**

```bash
npm install
# o
pnpm install
# o
yarn install
```

1. **Configurar base de datos:**
Ver sección [Configuración](#-configuración)

2. **Ejecutar migraciones de Prisma:**

```bash
npx prisma migrate dev
```

1. **Generar cliente de Prisma:**

```bash
npx prisma generate
```

---

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Base de Datos
DATABASE_URL="postgresql://usuario:password@localhost:5432/gestion_estacionamiento"

# JWT Secret (cambiar en producción)
JWT_SECRET="tu-clave-secreta-super-segura-cambiar-en-produccion"

# Next.js
NODE_ENV="development"
```

### Configuración de PostgreSQL

1. **Crear la base de datos:**

```sql
CREATE DATABASE gestion_estacionamiento;
```

1. **Verificar conexión:**

```bash
npx prisma db pull
```

### Primera Ejecución

Después de configurar la base de datos, ejecuta las migraciones:

```bash
# Ejecutar migraciones
npx prisma migrate dev --name init

# (Opcional) Seed inicial de datos
# Crear un script de seed en prisma/seed.ts si lo necesitas
```

---

## 🚀 Uso

### Modo Desarrollo

```bash
npm run dev
```

El servidor se iniciará en [http://localhost:5000](http://localhost:5000)

### Modo Producción

```bash
# Build
npm run build

# Iniciar en producción
npm start
```

### Documentación Swagger

Accede a la documentación interactiva de la API:

```
http://localhost:5000/api/docs
```

### Endpoints Principales

- **Autenticación:** `/api/v1/auth/*`
- **Clientes:** `/api/v1/clients`
- **Usuarios:** `/api/v1/users`
- **Vehículos:** `/api/v1/vehicles`
- **Zonas:** `/api/v1/zones`
- **Espacios:** `/api/v1/parking-slots`
- **Reservaciones:** `/api/v1/reservations`
- **Tickets:** `/api/v1/tickets`
- **Configuración:** `/api/v1/system-config`

Para más detalles, consulta la [Documentación de la API](docs/walkthrough/api-documentation.md)

---

## 📁 Estructura del Proyecto

```
backend/
├── docs/                           # Documentación
│   ├── modelo-entidad-relacion.md # Diagrama ER completo
│   └── walkthrough/
│       └── api-documentation.md   # Documentación de API
├── prisma/
│   ├── schema.prisma              # Esquema de base de datos
│   └── migrations/                # Migraciones de Prisma
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── v1/               # API Routes v1
│   │   │       ├── auth/         # Autenticación
│   │   │       ├── clients/      # Gestión de clientes
│   │   │       ├── users/        # Gestión de usuarios
│   │   │       ├── vehicles/     # Gestión de vehículos
│   │   │       ├── zones/        # Gestión de zonas
│   │   │       ├── parking-slots/ # Espacios de estacionamiento
│   │   │       ├── reservations/ # Reservaciones
│   │   │       ├── tickets/      # Tickets
│   │   │       └── system-config/ # Configuración
│   │   └── page.tsx              # Página principal
│   ├── lib/
│   │   ├── api-response.ts       # Helper de respuestas API
│   │   ├── auth.ts               # Utilidades de autenticación
│   │   └── prisma.ts             # Cliente Prisma singleton
│   ├── schemas/                  # Schemas de validación Zod
│   │   ├── client.schema.ts
│   │   ├── parking-slot.schema.ts
│   │   ├── reservation.schema.ts
│   │   ├── system-config.schema.ts
│   │   ├── ticket.schema.ts
│   │   ├── user.schema.ts
│   │   ├── vehicle.schema.ts
│   │   └── zone.schema.ts
│   └── services/                 # Lógica de negocio
│       ├── client.service.ts
│       ├── parking-slot.service.ts
│       ├── reservation.service.ts
│       ├── system-config.service.ts
│       ├── ticket.service.ts
│       ├── user.service.ts
│       ├── vehicle.service.ts
│       └── zone.service.ts
├── .env                          # Variables de entorno (no commiteado)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🌐 API Endpoints

### Autenticación

| Método | Ruta | Descripción | Autenticación |
|--------|------|-------------|---------------|
| `POST` | `/api/v1/auth/register` | Registro de usuario | No |
| `POST` | `/api/v1/auth/login` | Login | No |
| `GET` | `/api/v1/auth/me` | Verificar token | Sí |

### Clientes (App Móvil)

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/v1/clients` | Listar clientes |
| `POST` | `/api/v1/clients` | Crear cliente |
| `GET` | `/api/v1/clients/:id` | Obtener cliente |
| `PUT` | `/api/v1/clients/:id` | Actualizar cliente |
| `DELETE` | `/api/v1/clients/:id` | Eliminar cliente |

### Usuarios (Staff)

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/v1/users` | Listar usuarios |
| `POST` | `/api/v1/users` | Crear usuario |
| `GET` | `/api/v1/users/:id` | Obtener usuario |
| `PUT` | `/api/v1/users/:id` | Actualizar usuario |
| `DELETE` | `/api/v1/users/:id` | Eliminar usuario |

### Vehículos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/v1/vehicles` | Listar vehículos |
| `POST` | `/api/v1/vehicles` | Registrar vehículo |
| `GET` | `/api/v1/vehicles/:id` | Obtener vehículo |
| `PUT` | `/api/v1/vehicles/:id` | Actualizar vehículo |
| `DELETE` | `/api/v1/vehicles/:id` | Eliminar vehículo |

### Zonas

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/v1/zones` | Listar zonas |
| `POST` | `/api/v1/zones` | Crear zona |
| `GET` | `/api/v1/zones/:id` | Obtener zona |
| `PUT` | `/api/v1/zones/:id` | Actualizar zona |
| `DELETE` | `/api/v1/zones/:id` | Eliminar zona |

### Espacios de Estacionamiento

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/v1/parking-slots` | Listar espacios (con filtros) |
| `POST` | `/api/v1/parking-slots` | Crear espacio |
| `GET` | `/api/v1/parking-slots/:id` | Obtener espacio |
| `PUT` | `/api/v1/parking-slots/:id` | Actualizar espacio |
| `DELETE` | `/api/v1/parking-slots/:id` | Eliminar espacio |

**Filtros disponibles:**

- `?zoneId=<uuid>` - Filtrar por zona
- `?status=<AVAILABLE|OCCUPIED|MAINTENANCE|RESERVED>` - Filtrar por estado

### Reservaciones

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/v1/reservations` | Listar reservaciones |
| `POST` | `/api/v1/reservations` | Crear reservación |
| `GET` | `/api/v1/reservations/:id` | Obtener reservación |
| `PUT` | `/api/v1/reservations/:id` | Actualizar/Check-in |

**Query params:**

- `?clientId=<uuid>` - Filtrar por cliente

**Check-in (Convertir reserva a ticket):**

```json
PUT /api/v1/reservations/:id
{
  "action": "check-in",
  "operatorId": "uuid-operador"
}
```

### Tickets

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/v1/tickets` | Listar tickets |
| `POST` | `/api/v1/tickets` | Crear ticket (check-in) |
| `GET` | `/api/v1/tickets/:id` | Obtener ticket |
| `PUT` | `/api/v1/tickets/:id` | Actualizar (check-out) |

### Configuración del Sistema

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/v1/system-config` | Obtener configuración |
| `PUT` | `/api/v1/system-config` | Actualizar configuración |

---

## 🗄️ Base de Datos

### Modelos Principales

- **SystemConfig** - Configuración global del sistema
- **User** - Personal del estacionamiento (Admin/Operador)
- **Client** - Usuarios de la app móvil
- **Zone** - Zonas de estacionamiento
- **ParkingSlot** - Espacios individuales de estacionamiento
- **Vehicle** - Vehículos registrados
- **Reservation** - Reservas de espacios
- **Ticket** - Registro de entrada/salida de vehículos

### Diagrama ER

Para ver el diagrama completo de entidad-relación, consulta:

- [docs/modelo-entidad-relacion.md](docs/modelo-entidad-relacion.md)

### Prisma Studio (DB UI)

```bash
npx prisma studio
```

Abre una interfaz web en `http://localhost:5555` para visualizar y editar datos.

---

## 🧪 Testing

> [!NOTE]
> El proyecto actualmente no tiene tests implementados. Se recomienda agregar:
>
> - Tests unitarios con Jest
> - Tests de integración para endpoints
> - Tests E2E con Playwright

Para agregar tests:

```bash
# Instalar dependencias
npm install --save-dev jest @types/jest ts-jest

# Crear archivo jest.config.js
# Crear carpeta __tests__/
```

---

## 📖 Documentación

### Documentación Disponible

1. **[API Documentation](docs/walkthrough/api-documentation.md)**
   - Documentación completa de todos los endpoints
   - Request/Response examples
   - Códigos de error
   - Guía de autenticación

2. **[Modelo Entidad-Relación](docs/modelo-entidad-relacion.md)**
   - Diagrama ER completo con Mermaid
   - Descripción de cada entidad
   - Relaciones y cardinalidades
   - Reglas de negocio
   - Flujos de procesos

3. **Swagger UI**
   - Documentación interactiva
   - Probar endpoints directamente
   - Disponible en: `http://localhost:5000/api/docs`

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **Desarrollo** | `npm run dev` | Inicia servidor en modo desarrollo (puerto 5000) |
| **Build** | `npm run build` | Compila el proyecto para producción |
| **Producción** | `npm start` | Inicia servidor en modo producción |
| **Lint** | `npm run lint` | Ejecuta ESLint |
| **Prisma Migrate** | `npx prisma migrate dev` | Crea y aplica migraciones |
| **Prisma Generate** | `npx prisma generate` | Genera cliente de Prisma |
| **Prisma Studio** | `npx prisma studio` | Abre UI de base de datos |
| **Prisma Reset** | `npx prisma migrate reset` | Resetea DB y aplica migraciones |

---

## 🔐 Autenticación

### JWT Token

Todas las rutas protegidas requieren un token JWT en el header:

```http
Authorization: Bearer <token>
```

### Flujo de Autenticación

1. **Login:** `POST /api/v1/auth/login`

```json
{
  "email": "admin@parking.com",
  "password": "password123"
}
```

1. **Recibir token:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "admin@parking.com",
    "name": "Admin",
    "role": "ADMIN"
  }
}
```

1. **Usar token en requests:**

```javascript
fetch('/api/v1/users', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
```

---

## 🌟 Características Técnicas

### Arquitectura

- **API Routes:** Next.js App Router
- **Separation of Concerns:**
  - `schemas/` - Validación de datos (Zod)
  - `services/` - Lógica de negocio
  - `lib/` - Utilidades compartidas
  - `app/api/` - Handlers de endpoints

### Validación

Todos los endpoints usan Zod para validación de datos:

```typescript
// Ejemplo
const clientCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(1),
  phone: z.string().optional(),
});
```

### Respuestas Consistentes

Todas las respuestas siguen el formato:

```json
{
  "success": true,
  "data": { ... }
}
```

O en caso de error:

```json
{
  "success": false,
  "error": "mensaje descriptivo"
}
```

### Seguridad

- ✅ Contraseñas hasheadas con bcrypt (10 rounds)
- ✅ JWT con expiración de 1 día
- ✅ Validación de tipos con TypeScript
- ✅ Validación de datos con Zod
- ✅ Variables de entorno para secretos

---

## 🚧 Roadmap y Mejoras Futuras

- [ ] Implementar tests automatizados
- [ ] Agregar sistema de pagos
- [ ] Notificaciones push para reservas
- [ ] Reportes y analytics
- [ ] Sistema de promociones/descuentos
- [ ] Multi-tenancy (múltiples estacionamientos)
- [ ] Integración con pasarelas de pago
- [ ] API de webhooks para integraciones
- [ ] Rate limiting
- [ ] Logs estructurados

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto es privado y propietario.

---

## 👥 Equipo

Desarrollado por el equipo de [Nombre de tu Empresa/Equipo]

---

## 📞 Soporte

Para reportar bugs o solicitar features, por favor abre un issue en el repositorio.

---

## 🙏 Agradecimientos

- Next.js Team
- Prisma Team
- Comunidad de código abierto

---

> [!TIP]
> Para comenzar rápidamente, sigue la sección [Instalación](#-instalación) y luego revisa la [Documentación de la API](docs/walkthrough/api-documentation.md)

> [!WARNING]
> Asegúrate de cambiar `JWT_SECRET` en producción y nunca commitear el archivo `.env`
