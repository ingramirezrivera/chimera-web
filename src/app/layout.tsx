import "./globals.css";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
  ssr: false,
  loading: () => <div className="h-16 bg-[var(--brand)] shadow-lg" />,
});

export const metadata = {
  title: "Chimeralinsight",
  description: "Website with lazy-loaded Navbar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
