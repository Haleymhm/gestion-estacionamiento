import { NextResponse } from "next/server";

const ALLOWED_METHODS = "GET,POST,PUT,PATCH,DELETE,OPTIONS";
const ALLOWED_HEADERS =
  "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version";

export function middleware(request: Request) {
  const origin = request.headers.get("origin");

  // Preflight request
  if (request.method === "OPTIONS") {
    const preflight = new NextResponse(null, { status: 200 });
    if (origin) preflight.headers.set("Access-Control-Allow-Origin", origin);
    preflight.headers.set("Access-Control-Allow-Methods", ALLOWED_METHODS);
    preflight.headers.set("Access-Control-Allow-Headers", ALLOWED_HEADERS);
    preflight.headers.set("Access-Control-Allow-Credentials", "true");
    preflight.headers.set("Vary", "Origin");
    return preflight;
  }

  const response = NextResponse.next();
  if (origin) response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.set("Access-Control-Allow-Methods", ALLOWED_METHODS);
  response.headers.set("Access-Control-Allow-Headers", ALLOWED_HEADERS);
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Vary", "Origin");
  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};


