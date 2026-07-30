import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { JsonLdSchemas } from "@/components/seo/JsonLdSchemas";
import { BRAND_INFO } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_INFO.baseUrl),
  title: {
    default: "Resin Art in Rohtak | Varmala Preservation & Custom Resin Clocks | Priya Art Studio",
    template: "%s | Priya Art Studio Rohtak",
  },
  description:
    "Leading Resin Art Studio in Rohtak, Haryana by Priya Kalher. Specializing in Wedding Varmala Preservation in Rohtak, Ring Ceremony Platters, Resin Wall Clocks, & Royal Pooja Thalis. Located at Jagdish Colony, Rohtak.",
  keywords: [
    "Resin Art in Rohtak",
    "Resin Artist in Rohtak",
    "Priya Kalher Resin Artist",
    "Varmala Preservation in Rohtak",
    "Wedding Varmala Preservation Haryana",
    "Resin Clock in Rohtak",
    "Ring Ceremony Platter in Rohtak",
    "Resin Ring Tray Rohtak",
    "Resin Pooja Thali in Rohtak",
    "Wedding Invitation Preservation Rohtak",
    "Custom Floral Keepsakes Haryana",
    "Priya Art Studio Rohtak",
    "Resin Name Plate Rohtak",
  ],
  authors: [{ name: "Priya Kalher", url: BRAND_INFO.baseUrl }],
  creator: "Priya Kalher",
  publisher: BRAND_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Resin Art in Rohtak | Varmala Preservation & Custom Resin Clocks",
    description:
      "Crafting memories into timeless art in Rohtak, Haryana by Priya Kalher. Bespoke wedding varmala preservation, ring ceremony platters, resin clocks & luxury pooja thalis.",
    url: BRAND_INFO.baseUrl,
    siteName: BRAND_INFO.name,
    images: [
      {
        url: "/images/varmala-preservation.png",
        width: 1200,
        height: 630,
        alt: "Priya Art Studio Wedding Varmala Preservation Rohtak",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resin Art in Rohtak | Varmala Preservation & Resin Clocks",
    description:
      "Crafting memories into timeless art in Rohtak. Bespoke wedding varmala preservation & luxury resin creations by Priya Kalher.",
    images: ["/images/varmala-preservation.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BRAND_INFO.baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <body className="antialiased bg-white text-ebony-dark selection:bg-gold-accent selection:text-white overflow-x-hidden">
        <JsonLdSchemas />
        {children}
      </body>
    </html>
  );
}
