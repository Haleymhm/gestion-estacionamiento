import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID?.replace(/"/g, "") || "",
        authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID?.replace(/"/g, "")}`,
        redirectUri: process.env.NEXT_PUBLIC_AZURE_AD_REDIRECT_URI?.replace(/"/g, "") || "http://localhost:3000",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};
