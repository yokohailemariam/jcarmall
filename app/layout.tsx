import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/components/header";
import { Footer } from "@/components/shared/components/footer";

export const metadata: Metadata = {
  title: "J Car Mall - Luxury Car Importer ",
  description: "Luxury cars importer in Addis Ababa",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased `}>
        <Header />
        <div className="flex justify-center w-full">
          <div className="w-full md:max-w-6xl">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
