"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AzureAdCallbackPage() {
  const [authInfo, setAuthInfo] = useState<string>("");
  const [jsonInfo, setJsonInfo] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Extrae el fragmento hash de la URL
    const hash = window.location.hash;
    setAuthInfo(hash || "No se recibió información de autenticación en el callback.");

    // Intenta decodificar el fragmento hash como JSON si es posible
    if (hash) {
      // El fragmento hash tiene formato: #key1=val1&key2=val2...
      const params = new URLSearchParams(hash.replace(/^#/, ""));
      const obj: Record<string, string> = {};
      params.forEach((value, key) => {
        obj[key] = value;
      });
      setJsonInfo(obj);
    }
    // Opcional: redirigir después de mostrar la info
    // setTimeout(() => router.push("/"), 10000);
  }, [router]);

  return (
    <div className="callback-container">
      <h1>Callback Azure AD</h1>
      <p>Información recibida en el callback (fragmento hash):</p>
      <pre className="callback-info">{authInfo}</pre>
      {jsonInfo && (
        <>
          <p>Fragmento decodificado como JSON:</p>
          <pre className="callback-info">{JSON.stringify(jsonInfo, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
