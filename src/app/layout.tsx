import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimera Web",
  description: "Proyecto Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
