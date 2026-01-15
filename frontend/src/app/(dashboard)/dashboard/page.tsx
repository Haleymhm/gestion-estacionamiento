"use client";

import getCookie from "@/lib/getToken";
import { canAccess } from "@/lib/roleUtils";
import {
  AlarmClockIcon,
  CalendarSync,
  ChartNoAxesCombined,
  Coffee,
  FileSearchIcon,
  Megaphone,
  PenToolIcon,
  TentTree,
  WalletCardsIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Es una buena práctica definir una interfaz para los datos del usuario.
interface User {
  id: string;
  name: string;
  email: string;
  role?: string; // Agregar el rol del usuario
}

const icons = {
  incidencias: (
    <WalletCardsIcon className="w-12 h-12 group-hover:scale-110 transition-transform" />
  ),
  vacaciones: (
    <TentTree className="w-12 h-12 group-hover:scale-110 transition-transform" />
  ),
  tiempolibre: (
    <Coffee className="w-12 h-12 group-hover:scale-110 transition-transform" />
  ),
  reportes: (
    <ChartNoAxesCombined className="w-12 h-12 group-hover:scale-110 transition-transform" />
  ),
  datos: (
    <FileSearchIcon className="w-12 h-12 group-hover:scale-110 transition-transform" />
  ),
  comunicados: (
    <Megaphone className="w-12 h-12 group-hover:scale-110 transition-transform" />
  ),
  nomina: (
    <CalendarSync className="w-12 h-12 group-hover:scale-110 transition-transform" />
  ),
};

export default function DashboardPage() {
  const [cookieRol, setCookieRol] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [incidenciasCount, setIncidenciasCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_MS_INCIDENCIAS_URL;
  
  // Consolidar toda la inicialización en un solo useEffect
  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        // Obtener rol de la cookie
        const rol = getCookie("rol");
        setCookieRol(rol);

        // Verificar sesión
        const token = getCookie("token");
        const res = await fetch(`${apiUrl}auth/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (res.ok) {
          const data = await res.json();
          
          setUser(data);

          console.log("User data from /dashboard initialization:");
          console.log(user);
          
          // Si no tenemos rol en la cookie, usar el rol del usuario
          if (!rol && data.role) {
            
            setCookieRol(data.role);
          }
          
          // Pequeño delay para asegurar que la cookie se lea correctamente
          await new Promise(resolve => setTimeout(resolve, 100));
          
          // Re-leer la cookie después del delay
          const rolAfterDelay = getCookie("rol");
          if (rolAfterDelay && rolAfterDelay !== rol) {
            
            setCookieRol(rolAfterDelay);
          }
        } else {
          router.push("/login");

          return;
        }

        // Marcar como cargado
        setIsLoading(false);
      } catch (error) {
        console.error("Error initializing dashboard:", error);
        router.push("/login");
      }
    };

    initializeDashboard();
  }, [router]);

  // Efecto adicional para manejar cambios en el rol
  useEffect(() => {
    console.log("User or cookieRol changed:", { user, cookieRol });
    if (user && !cookieRol && user.role) {
      
      setCookieRol(user.role);
    }
  }, [user, cookieRol]);

  

    
  // Solo mostrar loading si no tenemos usuario O si estamos cargando
  if (!user || isLoading) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Cargando...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#fbfafe]">
      {/* Header */}
      <main className="mx-auto py-8">
        


      </main>
    </div>
  );
}

interface CardButtonProps {
  icon: keyof typeof icons;
  label: string;
  source?: string;
}


