import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/home/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montreal = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueMontreal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montreal",
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UrbanNest Realty | Find a home that feels like yours",
  description:
    "Discover verified residential apartments, luxury villas, plots, and commercial properties across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Pune on UrbanNest Realty.",
  keywords: [
    "real estate India",
    "flats for sale",
    "apartments in Mumbai",
    "villas in Bengaluru",
    "RERA approved projects",
    "zero brokerage properties",
    "UrbanNest Realty",
  ],
  authors: [{ name: "UrbanNest Realty" }],
  openGraph: {
    title: "UrbanNest Realty | Find a home that feels like yours",
    description:
      "India's premier editorial real estate portal. RERA-verified listings, direct developer connections, and verified owner homes.",
    url: "https://urbannestrealty.in",
    siteName: "UrbanNest Realty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        width: 1200,
        height: 630,
        alt: "UrbanNest Realty Luxury Living",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanNest Realty | Find a home that feels like yours",
    description:
      "Explore 250,000+ verified homes and RERA-approved new launches across India.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "UrbanNest Realty",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    description:
      "India's leading real estate discovery portal featuring RERA-verified new launch projects, ready-to-move homes, and commercial spaces.",
    url: "https://urbannestrealty.in",
    telephone: "+91-1800-420-6378",
    priceRange: "₹₹ - ₹₹₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cyber City, DLF Phase 2",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4907,
      longitude: 77.0911,
    },
    sameAs: [
      "https://facebook.com/urbannestrealty",
      "https://twitter.com/urbannest_in",
      "https://instagram.com/urbannestrealty",
      "https://linkedin.com/company/urbannest-realty",
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${montreal.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body bg-white text-ink antialiased selection:bg-primary/20 selection:text-primary">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
