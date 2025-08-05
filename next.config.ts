import type { NextConfig } from "next";
import * as path from "path";

const nextConfig: NextConfig = {
  // Equivalent to Vite's output standalone
  output: "standalone",

  // Generate build ID for cache busting (Next.js does this automatically, but you can customize)
  generateBuildId: async () => {
    // You can use git commit hash, timestamp, or let Next.js handle it automatically
    return `build-${Date.now()}`;
  },

  // Webpack configuration for additional cache busting
  webpack: (config, { isServer }) => {
    // Path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
      "@integration": path.resolve(__dirname, "./src/integration"),
    };

    // Custom filename hashing for production builds (similar to Vite's rollupOptions)
    if (!isServer && process.env.NODE_ENV === "production") {
      config.output.filename = "static/chunks/[name]-[contenthash].js";
      config.output.chunkFilename = "static/chunks/[name]-[contenthash].js";
    }

    return config;
  },

  // Ensure proper cache headers for static assets
  async headers() {
    return [
      {
        // Cache static assets with hash for 1 year
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache Next.js static files
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Don't cache HTML files to ensure fresh content
        source: "/:path*.html",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },

  // Image optimization with caching
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },

  // Compiler options for better optimization (compatible with older Node.js)
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable SWC minification (available in Next.js 12+)
  swcMinify: true,
};

export default nextConfig;
