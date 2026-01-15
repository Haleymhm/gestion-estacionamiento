"use client";

import { Button } from "@/components/ui/button";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const { instance, inProgress, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;
  const appEnvironment = process.env.NODE_ENV;
  const [tokenInfo, setTokenInfo] = useState<string>("");
  const apiUrl = process.env.NEXT_PUBLIC_MS_INCIDENCIAS_URL;


  useEffect(() => {
    const sendTokenToBackend = async (response: any) => {
      const payload = {
        username: response.account.username,
        expiresOn: response.expiresOn,
        extExpiresOn: response.extExpiresOn,
        tokenType: response.tokenType,
        accessToken: response.accessToken,
        status: "success",
      };

      try {
        const res = await fetch(`${apiUrl}auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        

        if (res.ok) {
          toast.success("Login exitoso. Redirigiendo...");
          const data = await res.json();
          // Guardar el token en una cookie
          document.cookie = `token=${data.token}; path=/; max-age=${60 * 60 * 24}; samesite=lax`;
          
          router.push("/dashboard");
        } else {
          setTokenInfo("Error en login backend: " + res.status);
          toast.warning("El Usuario no está autorizado para usar la aplicación.");
        }
      } catch (error) {
        setTokenInfo("Error en login backend: " + error);
      }
    };

    if (isAuthenticated && accounts.length > 0) {
      instance
        .acquireTokenSilent({
          account: accounts[0],
          scopes: ["user.read"]
        })
        .then((response) => {

          setTokenInfo(JSON.stringify(response, null, 2));

          return sendTokenToBackend(response);

        })
        .catch((e) => {
          setTokenInfo("Error obteniendo token: " + e.message);
        });
    }
  }, [isAuthenticated, accounts, instance, apiUrl, router]);

  const handleLogin = () => {
    if (inProgress !== InteractionStatus.None) return;
    instance.loginPopup({ scopes: ["user.read"] }).catch((e) => {
      console.error(e);
    });
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Columna izquierda: branding */}
      <div className="hidden md:flex flex-col justify-between items-center w-1/2 bg-[#0047BA] relative overflow-hidden">
        {/* Imagen de fondo con overlay azul */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/login-bg.jpg"
            alt="Fondo login"
            fill
            style={{ objectFit: "cover", opacity: 1 }}
            priority
          />
          <div className="absolute inset-0 bg-[#0047BA] opacity-90" />
        </div>
        {/* Logos y personas */}
        <div className="relative z-10 flex flex-col h-full w-full justify-between">
          <div className="flex-1 flex flex-col justify-center items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 ">
              <Image
                src="/images/playcity.png"
                alt="PlayCity"
                width={220}
                height={124}
              />
              <Image
                src="/images/banorte.png"
                alt="Banorte"
                width={220}
                height={124}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-8 ">
              <Image
                src="/images/intermex.png"
                alt="Intermex"
                width={220}
                height={124}
              />
              <Image
                src="/images/televisa.png"
                alt="Televisa"
                width={220}
                height={124}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Columna derecha: login */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 min-h-screen bg-white px-6">
        <div className="w-full max-w-md mx-auto">
          {/* Logo principal */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/ollamani-logo.png"
              alt="Ollamani Grupo"
              width={220}
              height={75}
            />
          </div>
          <h1 className="text-center text-[#0047BA] text-lg font-semibold mb-2">
            {appName || ' '}
          </h1>
          <h2 className="text-center text-[#0047BA] text-md font-semibold mb-2">
            Gesti&oacute;n de Cultura y Desarrollo
          </h2>
          <h3 className="text-center text-gray-700 text-base font-medium mb-6">
            Inicio de Sesión
          </h3>
          <div className="space-y-5">
            <Button
              onClick={handleLogin}
              className="w-full h-11 text-base font-semibold bg-[#0047BA] hover:bg-[#142654] text-white rounded-md mt-2"
              disabled={inProgress !== InteractionStatus.None}
            >
              {inProgress !== InteractionStatus.None ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar sesión con Microsoft"
              )}
            </Button>
            <div className="text-center text-gray-500 text-base font-bold mt-3">
              {appVersion ? `Versión ${appVersion}` : ' '} <br />
              {appEnvironment ? `Entorno ${appEnvironment}` : ' '}
            </div>
            {/* Mostrar información del usuario autenticado y token */}
            {/*
            {isAuthenticated && accounts.length > 0 && (
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <h4 className="font-bold mb-2">Usuario autenticado:</h4>
                <pre className="text-xs mb-2">{JSON.stringify(accounts[0], null, 2)}</pre>   
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
