// next.config.ts
const isProd = process.env.NODE_ENV === "production";
const repo = "chimera-web";

const nextConfig = {
  output: "export", // sitio estático para GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true, // no hay servidor de imágenes en Pages
  },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
