import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Inter({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZIKFIX — Professional Phone & Laptop Repair in Awka",
  description:
    "Fast, reliable phone and laptop repairs in Awka, Anambra. Screen repair, battery replacement, water damage, and quality phones for sale. Open 24/7 at Dynamo Junction, UNIZIK.",
  keywords: [
    "phone repair Awka",
    "laptop repair Awka",
    "screen repair UNIZIK",
    "ZIKFIX",
    "phone repair Anambra",
    "iPhone repair Awka",
    "gadget sales Nigeria",
    "screen replacement",
    "Dynamo Junction",
  ],
  openGraph: {
    title: "ZIKFIX — Professional Phone & Laptop Repair in Awka",
    description:
      "Fast, reliable phone and laptop repairs in Awka, Anambra. Screen repair, battery replacement, water damage, and quality phones for sale. Open 24/7 at Dynamo Junction, UNIZIK.",
    siteName: "ZIKFIX",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZIKFIX — Professional Phone & Laptop Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZIKFIX — Professional Phone & Laptop Repair in Awka",
    description:
      "Fast, reliable phone and laptop repairs in Awka, Anambra. Open 24/7 at Dynamo Junction, UNIZIK.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Poppins + JetBrains Mono */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <CartProvider>
          <ScrollToTop />
          {children}
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
