// next.config.ts
const nextConfig = {
  output: "export", // GitHub Pages = sitio estático
  trailingSlash: true, // URLs estáticas más compatibles
  images: {
    // En export estático no hay optimización de next/image
    unoptimized: true,
  },
};

export default nextConfig;
