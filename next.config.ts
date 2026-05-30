import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  
  // Cloudflare Pagesで静的エクスポートを行うための設定
  output: "export", 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;