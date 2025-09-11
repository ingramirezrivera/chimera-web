/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// ⚠️ Replace with your actual repo name (GitHub repository)
const repo = "chimera-web";

module.exports = {
  output: "export",
  images: { unoptimized: true }, // needed if you use next/image
  trailingSlash: true, // avoids 404s on refresh for subpaths
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};
