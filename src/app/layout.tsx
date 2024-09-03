import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "../components/navbar/NavBar";
import { CategoryBar } from "@/components/Categories/categoryBar/CategoryBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <CategoryBar />
        {children}
      </body>
    </html>
  );
}
