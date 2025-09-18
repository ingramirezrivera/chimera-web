// next.config.ts
const isProd = process.env.NODE_ENV === "production";
const repo = "chimera-web"; // 👈 tu nombre de repo en GitHub

const nextConfig = {
  output: "export", // GitHub Pages = sitio estático
  trailingSlash: true, // URLs estáticas más compatibles
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    // En export estático no hay optimización de next/image
    unoptimized: true,
  },
};

export default nextConfig;
