import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'СК Феникс | Строительная Компания в Ижевске',
  description: 'ООО "Строительная Компания "Феникс" - надежный партнер в области строительства, реконструкции и капитального ремонта объектов. Строительство "под ключ", отделочные работы.',
  keywords: 'строительство Ижевск, строительная компания Феникс, ремонт под ключ, капитальный ремонт, реконструкция зданий, строительные работы Удмуртия',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'СК Феникс | Строительная Компания',
    description: 'Полный комплекс строительных и ремонтных работ, отделочные работы любого вида.',
    locale: 'ru_RU',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "СК Феникс",
    "legalName": "ООО «Строительная Компания «Феникс»",
    "url": "https://ckfenix.ru",
    "logo": "https://ckfenix.ru/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Курортная, д. 12",
      "addressLocality": "Ижевск",
      "postalCode": "426009",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-3412-37-57-22",
      "contactType": "customer service"
    },
    "email": "office@ckfenix.ru",
    "description": "Строительство, реконструкция, капитальный ремонт объектов капитального строительства."
  };

  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
