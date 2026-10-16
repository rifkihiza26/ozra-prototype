import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroProvider from "@/components/ui/IntroProvider";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/ui/CartDrawer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ozratactical.com"),
  title: {
    default: "OZRA® Tactical — Precision in Every Stitch",
    template: "%s — OZRA® Tactical",
  },
  description:
    "PT. Ozra Mega Perkasa Indonesia — Spesialis manufaktur seragam taktis, pakaian dinas, corporate uniform, dan sportswear custom di Jakarta. Dipercaya oleh instansi pemerintah dan militer.",
  keywords: [
    "ozra tactical",
    "seragam taktis",
    "pakaian dinas lapangan",
    "baju pdl custom",
    "jersey sublimasi",
    "workshirt kemenhub",
    "corporate uniform jakarta",
    "ozratactical",
  ],
  openGraph: {
    type: "website",
    siteName: "OZRA® Tactical",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        {/* Orbitron, Syncopate, Rajdhani + Barlow Condensed & Barlow */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400&family=Barlow:wght@300;400;500&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@500;600;700&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <IntroProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
          </IntroProvider>
        </CartProvider>
      </body>
    </html>
  );
}
