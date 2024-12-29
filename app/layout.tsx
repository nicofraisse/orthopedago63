import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orthopédagogie 63",
  description: "@Todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <div
          className="max-w-3xl mx-auto pt-7 pb-20 bg-gray-50 px-5
        "
        >
          {children}
        </div>
        <footer className="bg-gray-100 py-4 text-center">
          <p>© {new Date().getFullYear()} Orthopédagogie 63</p>
          <p>Maryline Cailly-Moins</p>
          <p>Adresse : 5 rue des roses, 75200 Paris</p>
          <p>
            Mail:
            <a href="mailto:example@gmail.com">:example@gmail.com</a>
          </p>
          <p>Tel: 06 99 99 99 99</p>
        </footer>
      </body>
    </html>
  );
}
