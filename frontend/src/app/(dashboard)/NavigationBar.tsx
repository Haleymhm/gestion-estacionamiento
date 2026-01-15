"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import getCookie from "@/lib/getToken";
import { canAccess } from "@/lib/roleUtils";
import {
  BellIcon,
  Building2Icon,
  CalendarIcon,
  FactoryIcon,
  HouseIcon,
  PowerIcon,
  SettingsIcon,
  UserIcon,
  SquareParkingIcon,
  LogOutIcon,
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_MS_INCIDENCIAS_URL;

  useEffect(() => {
    const fetchUser = async () => {
      const token = getCookie("token");
      console.log("Token from cookie:");
      console.log(token);
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
        document.cookie = `rol=${data.userRol}; path=/; max-age=${60 * 60}; samesite=lax`;
        
      } else {
        handleLogout();
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const { instance } = useMsal();
  const handleLogout = async () => {
    try {
      await fetch(`${apiUrl}auth/logout`, { method: "POST" });
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      console.error("Error al cerrar sesión:", e);
      toast.error(`Error al cerrar sesión: ${errorMessage}`);
    } finally {
      document.cookie = "token=; path=/; max-age=0";
      document.cookie = "rol=; path=/; max-age=0";
      document.cookie = "periodo=; path=/; max-age=0";
      // Cerrar sesión en Azure AD y redirigir al login
      instance.logoutRedirect({ postLogoutRedirectUri: "/login" });
    }
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-2 bg-white shadow-sm">
      <div className="flex items-left gap-6">
        <Link href="/dashboard" className="flex items-center">
          <Image
            src="/images/ollamani-logo.png"
            alt="Ollamani Grupo"
            width={177}
            height={60}
          />
        </Link>
        <span className="text-lg text-[#0047BA] font-medium py-4 px-3">
          <span className="font-bold text-[#0047BA]">
            Gestión de Estacionamientos
          </span>
          <span className="text-gray-400"> | </span>
            <span className="inline-flex items-center gap-1">
              <CalendarIcon className="w-4 h-4 inline-block text-blue-900" />
              <span className="text-[#0047BA] font-semibold">
                {new Date().toLocaleDateString("es-MX", {
                  timeZone: "UTC",
                })}
              </span>
            </span>
        </span>
      </div>
      <div className="flex items-center gap-6 text-gray-400">
        <span className="text-gray-500 text-sm">
          Hola{" "}
          <span className="font-bold text-[#0047BA]">
            {user ? user.userName : "..."}
          </span>
        </span>
        <Link href="/dashboard" className="flex items-center">
          <HouseIcon className="w-5 h-5" />
        </Link>
        {canAccess(user?.userRol, "menu", "config") && (        
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <SettingsIcon className="w-5 h-5" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col min-w-[260px] max-h-[400px] max-w-full overflow-y-auto overflow-x-hidden">

                    {canAccess(user?.userRol, "menu", "parking") && (
                      <NavigationMenuLink asChild>
                        <Link
                          href="/parkings"
                          className="px-4 py-2 hover:bg-accent rounded flex-row items-center gap-2"
                        >
                          <SquareParkingIcon className="w-5 h-5" />
                          Estacionamientos
                        </Link>
                      </NavigationMenuLink>
                    )}
                    
                    {canAccess(user?.userRol, "menu", "users") && (
                      <NavigationMenuLink asChild>
                        <Link
                          href="/users"
                          className="px-4 py-2 hover:bg-accent rounded flex-row items-center gap-2"
                        >
                          <UserIcon className="w-5 h-5" />
                          Usuarios
                        </Link>
                      </NavigationMenuLink>
                    )}

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
        <PowerIcon
          className="w-5 h-5 text-md"
          onClick={handleLogout}
          aria-label="Cerrar sesión"
        />
      </div>
    </header>
  );
};

export default NavigationBar;
