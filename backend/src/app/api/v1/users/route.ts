import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST /api/users - Crear un nuevo usuario
export async function POST(request: Request) {
  const data = await request.json();
  const { userCode, userName, userEmail, userRol, userStatus } = data;
  try {

    // Validacion basica
    if (!userCode || !userName || !userEmail || !userRol || !userStatus) {
      return NextResponse.json(
        { message: 'Error: Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        userCode,
        userName,
        userEmail,
        userRol,
        userStatus,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    // Manejo de errores especificos de Prisma (ej. constraint unico)
    if (error.code === 'P2002') {
      const targetRaw = error.meta?.target;
      const field = typeof targetRaw === 'string' ? targetRaw.split('_').pop() : undefined;
      const value = field === 'email' ? userEmail : userCode;
      return NextResponse.json(
        { message: `Error: El ${field} '${value}' ya existe.` },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { message: 'Error interno del servidor', error: error.message },
      { status: 500 }
    );
  }
}

// GET /api/users - Obtener todos los usuarios con paginación
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

    if (isNaN(page) || page < 1 || isNaN(pageSize) || pageSize < 1) {
      return NextResponse.json(
        { message: 'Error: Los parámetros "page" y "pageSize" deben ser números positivos.' },
        { status: 400 }
      );
    }

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const [users, total] = await prisma.$transaction([
      prisma.user.findMany({
        skip,
        take,
      }),
      prisma.user.count(),
    ]);

    const totalPages = Math.ceil(total / pageSize);

    return NextResponse.json({
      data: users,
      pagination: {
        totalRecords: total,
        totalPages,
        currentPage: page,
        pageSize,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error interno del servidor', error: error.message },
      { status: 500 }
    );
  }
}
