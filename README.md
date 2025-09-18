# Chimera Web

Base project for the **Chimera Web** site, built with **Next.js 14** and **Tailwind CSS v4**.

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/) – React framework
- [Tailwind CSS 4](https://tailwindcss.com/) – Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [PostCSS](https://postcss.org/) – CSS processor
- [@tailwindcss/postcss](https://tailwindcss.com/docs/installation) – Tailwind PostCSS plugin
- [Autoprefixer](https://github.com/postcss/autoprefixer) – Automatic vendor prefixes

## 🧩 Requirements

- Node.js ≥ 18.18 (20+ recommended)
- npm ≥ 9

## ⚙️ Installation

Clone the repository and navigate into the folder:

```bash
git clone https://github.com/ingramirezrivera/chimera-web.git
cd chimera-web
Install dependencies using the lock file to guarantee exact versions:

bash
Copy code
npm ci
Use npm ci instead of npm install to respect package-lock.json and avoid unintended upgrades.

▶️ Development
Start the development server:

bash
Copy code
npm run dev
The app will be available at http://localhost:3000.

🏗️ Production Build
bash
Copy code
npm run build
npm start
📂 Project Structure
python
Copy code
src/
  app/
    layout.tsx    # Global layout
    page.tsx      # Main page
    globals.css   # Global styles + Tailwind
  components/     # Reusable components
postcss.config.js
tailwind.config.js
next.config.ts
🔒 Version Locking
This project uses package-lock.json to freeze exact dependency versions.
On new machines or in deployments always install with:

bash
Copy code
npm ci
This ensures Next.js, Tailwind, and all sub-dependencies are installed at the same versions everywhere.

🌐 Deployment: GitHub Pages (static export)
This repository is deployed to GitHub Pages at:

arduino
Copy code
https://ingramirezrivera.github.io/chimera-web/
Because this is a project page, we need basePath and assetPrefix pointing to /chimera-web in production, and we must export a static site (no SSR / API routes).

1) next.config.ts
ts
Copy code
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "chimera-web"; // exact GitHub repository name

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // required if using next/image with static export
  trailingSlash: true,           // avoids 404 on refresh for subpaths
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
2) Scripts in package.json
json
Copy code
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next export",
    "build:pages": "next build && next export",
    "start": "next start"
  }
}
Optional local check (generates out/):

bash
Copy code
npm run build
npx next export
3) GitHub Actions workflow
Create .github/workflows/pages.yml:

yaml
Copy code
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build & Export static site
        run: |
          npm run build
          npx next export
          touch out/.nojekyll

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
4) Enable GitHub Pages
GitHub → Settings → Pages → Build and deployment → Source: GitHub Actions.

After pushing to main, the workflow will publish your site to:

arduino
Copy code
https://ingramirezrivera.github.io/chimera-web/
Note: With static export, avoid SSR-only features (server actions, dynamic server fetch without caching, API routes). For images, images.unoptimized: true allows next/image to work in export mode.

🧑‍💻 Contributing
Create a feature branch: git checkout -b feature/your-feature

Commit changes: git commit -m 'feat: add your feature'

Push: git push origin feature/your-feature

Open a Pull Request.

📜 License
MIT

sql
Copy code

Si quieres, hago un commit de “docs: add GitHub Pages deployment instructions” y lo empujas en tu rama/PR actual.
```

# Chimera Web

## GitHub Pages Deploy (con imágenes)

1. Edita `.env.production` con:
   NEXT_PUBLIC_BASE_PATH=/chimera-web

arduino
Copy code
(ajusta el valor si cambias el nombre del repo).

2. Build estático:

````bash
npm run build
Esto genera /out.

Publica /out en GitHub Pages (branch gh-pages o carpeta docs/).

En producción, las imágenes se servirán desde:

arduino
Copy code
https://<usuario>.github.io/chimera-web/logo.png
Migración a Hostinger
Borra .env.production (o deja NEXT_PUBLIC_BASE_PATH= vacío).

El sitio quedará en la raíz /, y las imágenes volverán a src="/logo.png".

yaml
Copy code

---

### 6. Commit sugerido

```powershell
git add next.config.ts src/components/layout/Navbar.tsx .gitignore README.md
git add .env.production   # opcional, si decides versionar este archivo
git commit -m "chore: fix logo path for GitHub Pages using NEXT_PUBLIC_BASE_PATH"
git push origin feat/navbar
````
