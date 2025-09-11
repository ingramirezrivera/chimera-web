import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "chimera-web"; // <- exact GitHub repository name

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // required if you use next/image with static export
  trailingSlash: true, // avoids 404 on refresh for subpaths
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
