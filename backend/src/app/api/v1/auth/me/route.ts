
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

// Definimos una interfaz para el payload del token para tener un tipado seguro
interface TokenPayload {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

export async function GET(request: Request) {
  try {
    // La lógica de verificación de token es un candidato perfecto para ser extraída a un middleware
    // y así reutilizarla en todas las rutas protegidas.

    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Authorization header is missing or invalid." },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
    } catch (error) {
      // Esto atrapa errores de token inválido, expirado, etc.
      return NextResponse.json({ message: "Invalid or expired token." }, { status: 401 });
    }

    const { userId } = decodedToken;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    // No hay campos sensibles como contraseñas en tu modelo, por lo que es seguro devolver el objeto completo.
    return NextResponse.json(user);

  } catch (error) {
    console.error("Me Route Error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
