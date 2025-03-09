import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Mail, Phone, MapPin } from "react-feather";

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
  description:
    "Cabinet d'orthopédagogie à Chamalieres - Accompagnement personnalisé des apprenants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <Header />

        <div className="max-w-4xl mx-auto pt-7 pb-20 px-5">{children}</div>

        <footer className="bg-white py-8 border-t border-gray-200 mt-10">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Orthopédagogie 63
                </h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                  <p>5 bis avenue de Royat, 63400 Chamalieres</p>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={18} className="text-blue-500 flex-shrink-0" />
                  <a
                    href="mailto:example@gmail.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    example@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={18} className="text-blue-500 flex-shrink-0" />
                  <a
                    href="tel:0699999999"
                    className="hover:text-blue-600 transition-colors"
                  >
                    06 99 99 99 99
                  </a>
                </div>
                <p className="text-sm text-gray-500 pt-2">
                  © {new Date().getFullYear()} Maryline Cailly-Moins - Tous
                  droits réservés
                </p>
              </div>

              <div className="h-64 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.1451219237123!2d3.0565905765275774!3d45.77212997107426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f71bc6eb219c9d%3A0xbeb1f4a437fd1896!2s5bis%20Av.%20de%20Royat%2C%2063400%20Chamali%C3%A8res!5e0!3m2!1sfr!2sfr!4v1710034156710!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cabinet d'orthopédagogie à Chamalieres"
                  aria-label="Carte montrant l'emplacement du cabinet à Chamalieres"
                ></iframe>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
