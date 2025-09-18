import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Chimeralinsight",
  description: "Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Client Component, import normal */}
        {children}
      </body>
    </html>
  );
}
