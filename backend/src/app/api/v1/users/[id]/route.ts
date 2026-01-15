import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  id: string;
}

// GET /api/users/[id] - Obtener un usuario por ID
export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
    });

    if (!user) {
      return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error interno del servidor', error: error.message },
      { status: 500 }
    );
  }
}

// PUT /api/users/[id] - Actualizar un usuario por ID
export async function PUT(request: Request, { params }: { params: Params }) {
  try {
    const data = await request.json();
    const { userCode, userName, userEmail, userRol, userStatus } = data;

    const updatedUser = await prisma.user.update({
      where: { id: params.id },
      data: {
        userCode,
        userName,
        userEmail,
        userRol,
        userStatus,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    // Manejo de error si el registro a actualizar no existe
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
    }
    // Manejo de error para campos unicos
    if (error.code === 'P2002') {
        let field = error.meta?.target?.split('_').pop();
        return NextResponse.json(
            { message: `Error: El ${field} ya existe en otro registro.` },
            { status: 409 }
        );
    }

    return NextResponse.json(
      { message: 'Error interno del servidor', error: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/users/[id] - Eliminar un usuario por ID
export async function DELETE(request: Request, { params }: { params: Params }) {
  try {
    const _ = await request.text(); // Safely consume request stream to ensure dynamic behavior
    await prisma.user.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 }); // No Content
  } catch (error: any) {
    // Manejo de error si el registro a eliminar no existe
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Error interno del servidor', error: error.message },
      { status: 500 }
    );
  }
}
