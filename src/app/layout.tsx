import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChimeralInsight",
  description: "Next.js + Tailwind baseline",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-neutral-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
