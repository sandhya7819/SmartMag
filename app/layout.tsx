import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartMag - Premium News & Magazine Template",
  description: "A high-fidelity clone of the SmartMag WordPress theme built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
