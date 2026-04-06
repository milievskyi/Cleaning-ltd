import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumeclean.ca"), // TODO: Replace with real domain
  title: {
    default: "Lume | Premium Residential Cleaning in Edmonton, Alberta", // TODO: Update brand name
    template: "%s | Lume Cleaning",
  },
  description:
    "Edmonton's trusted residential cleaning service. Deep cleaning, regular maintenance, move-in/out cleaning — insured, bonded, and satisfaction guaranteed. Serving Edmonton and surrounding areas.",
  keywords: [
    "residential cleaning Edmonton",
    "house cleaning Edmonton",
    "deep cleaning service Alberta",
    "move-in cleaning Edmonton",
    "eco-friendly cleaning Edmonton",
    "professional cleaners Edmonton",
    "home cleaning service Alberta",
    "HEPA cleaning Edmonton",
  ],
  authors: [{ name: "Lume Cleaning" }], // TODO: Update brand name
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://lumeclean.ca", // TODO: Replace with real domain
    siteName: "Lume Cleaning", // TODO: Update brand name
    title: "Lume | Premium Residential Cleaning in Edmonton, Alberta",
    description:
      "Edmonton's trusted residential cleaning service. Deep cleaning, regular maintenance, move-in/out cleaning — insured, bonded, eco-friendly.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHt2TBkpfT9gjyT3zs1cZsaugZkjXJRxZUZ4hLaqwbd9rZfytIo9XLfUS5VpjxsTP720JCy7hIqUQu_ASNv6eYWGwAJgSCycPI8JLe6aDodAB9_l_UsUXzt3jdnz3roAqRxr86iF7VjvXkwavVN_Whw00BhjqUJ2b9uIwifZl2DKGMILG4jruhuhbQUSHYMj6h09r4QCEMWBZAB2h1ro5Pw74qoAFHMnMdsnG943GcH1sl0iHtb1G92DkYUffylnQpsfkk1TMjT7I",
        width: 1200,
        height: 630,
        alt: "Lume Cleaning — Premium Residential Service in Edmonton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lume | Premium Residential Cleaning in Edmonton, Alberta",
    description:
      "Edmonton's trusted residential cleaning service. Insured, bonded, eco-friendly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// schema.org LocalBusiness + CleaningService structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Lume Cleaning", // TODO: Replace with final brand name
  description:
    "Premium residential cleaning service in Edmonton, Alberta. Deep cleaning, regular maintenance, move-in/out, eco-friendly products. Insured & bonded.",
  url: "https://lumeclean.ca", // TODO: Replace with real domain
  telephone: "+17805550100", // TODO: Replace with real phone
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, E-Transfer",
  areaServed: {
    "@type": "City",
    name: "Edmonton",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Alberta",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    addressCountry: "CA",
    // TODO: Add real street address when available
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Regular Residential Cleaning",
          description: "Bi-weekly or monthly home maintenance cleaning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Cleaning",
          description:
            "Thorough top-to-bottom cleaning with HEPA filtration and eco-friendly disinfection.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Move-In / Move-Out Cleaning",
          description:
            "Complete cleaning for move-ins and move-outs in Edmonton.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.variable} font-body`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
