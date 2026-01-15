import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Evitamos configurar CORS aquí para no duplicar/contradecir al middleware
    return [];
  },
};

export default nextConfig;
