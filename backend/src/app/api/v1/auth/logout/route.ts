
import { NextResponse } from "next/server";

/**
 * Maneja el logout del usuario.
 * En una arquitectura JWT stateless, el logout es principalmente una operación del lado del cliente
 * (eliminar el token). Este endpoint existe para proporcionar un punto de terminación formal
 * para el proceso de logout en el frontend.
 */
export async function POST(request: Request) {
  try {
    // En el futuro, aquí se podría añadir lógica para invalidar el token en una "denylist"
    // si se requiere un nivel de seguridad más alto.
    
    return NextResponse.json({ message: "Logout successful." });

  } catch (error) {
    console.error("Logout Error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred during logout." },
      { status: 500 }
    );
  }
}
