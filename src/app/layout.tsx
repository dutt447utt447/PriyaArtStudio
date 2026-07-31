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
    default: "Resin Artist in Rohtak | Luxury Resin Art & Varmala Preservation | Priya Art Studio",
    template: "%s | Priya Art Studio Rohtak",
  },
  description:
    "Premier Resin Artist in Rohtak, Haryana — Priya Kalher. Handcrafting luxury Resin Art in Rohtak, Wedding Varmala Flower Preservation, Ring Ceremony Platters, Resin Wall Clocks & Pooja Thalis in Jagdish Colony, Rohtak.",
  keywords: [
    "Resin Artist in Rohtak",
    "Best Resin Artist in Rohtak",
    "Resin Art in Rohtak",
    "Priya Kalher Resin Artist",
    "Resin Art Studio Rohtak",
    "Varmala Preservation in Rohtak",
    "Wedding Varmala Preservation Haryana",
    "Resin Clock in Rohtak",
    "Ring Ceremony Platter in Rohtak",
    "Resin Ring Tray Rohtak",
    "Resin Pooja Thali in Rohtak",
    "Wedding Invitation Preservation Rohtak",
    "Custom Floral Keepsakes Haryana",
    "Priya Art Studio Rohtak",
    "Jagdish Colony Rohtak Resin Studio",
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
    title: "Resin Artist in Rohtak | Resin Art & Varmala Preservation | Priya Art Studio",
    description:
      "Looking for the best Resin Artist in Rohtak? Priya Kalher creates luxury resin art, wedding varmala blocks, ring platters & resin clocks in Rohtak, Haryana.",
    url: BRAND_INFO.baseUrl,
    siteName: BRAND_INFO.name,
    images: [
      {
        url: "/images/varmala-preservation.png",
        width: 1200,
        height: 630,
        alt: "Priya Art Studio - Best Resin Artist in Rohtak",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resin Artist in Rohtak | Resin Art & Varmala Preservation",
    description:
      "Premier Resin Artist in Rohtak. Custom wedding varmala preservation & luxury resin creations by Priya Kalher.",
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
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Rohtak, Haryana, India",
    "geo.position": "28.8955;76.5912",
    "ICBM": "28.8955, 76.5912",
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
