
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, status } = body;

    // 1. Validar que el status sea 'success' y que el username exista
    if (status !== "success" || !username) {
      return NextResponse.json(
        { message: "Invalid login attempt: status is not 'success' or username is missing." },
        { status: 400 }
      );
    }

    // 2. Buscar el usuario en la base de datos por su email
    const user = await prisma.user.findUnique({
      where: {
        userEmail: username,
      },
    });

    // Si el usuario no se encuentra, devolver un error
    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    // 3. Si el usuario existe, generar el JWT para crear la sesión
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.userEmail,
        // Puedes añadir más datos del usuario al token si lo necesitas
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h", // El token expirará en 1 hora
      }
    );

    // 4. Devolver el token al cliente
    return NextResponse.json({ token });
    
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
