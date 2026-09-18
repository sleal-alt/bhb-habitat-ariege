import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import { SITE } from "@/lib/site";

const sora = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["400","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const BASE = SITE.url;

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: `Couvreur Ariège 09 — ${SITE.name} | Devis Gratuit 24h`,
    template: `%s | ${SITE.name} — Couvreur Ariège 09`,
  },
  description: `BHB Habitat — Couvreur en Ariège (09) depuis ${SITE.founded}. Démoussage garanti 10 ans, réfection toiture, charpente, étanchéité. Garantie décennale. Devis gratuit 24h. ☎ ${SITE.phone}`,
  keywords: ["couvreur ariège", "couvreur 09", "couvreur pamiers", "couvreur foix", "couvreur saverdun", "démoussage toiture ariège", "traitement hydrofuge ariège 09", "réfection toiture ariège", "charpente ariège", "étanchéité ariège", "BHB Habitat", "couvreur la tour du crieu"],
  openGraph: { type: "website", locale: "fr_FR", siteName: SITE.name },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${BASE}/#organization`,
  name: SITE.legal,
  alternateName: SITE.name,
  url: BASE,
  telephone: SITE.phoneTel.replace("tel:", ""),
  email: SITE.email,
  description: `BHB Habitat, artisan couvreur à La Tour du Crieu (Ariège 09). ${SITE.experience} ans d'expérience, ${SITE.chantiers}+ chantiers. Démoussage, couverture, charpente, étanchéité, zinguerie. Garantie décennale 10 ans.`,
  address: { "@type": "PostalAddress", streetAddress: SITE.address, addressLocality: SITE.city, postalCode: SITE.zip, addressRegion: SITE.dept, addressCountry: "FR" },
  geo: { "@type": "GeoCoordinates", latitude: 43.038, longitude: 1.619 },
  areaServed: { "@type": "AdministrativeArea", name: "Ariège", containedInPlace: { "@type": "Country", name: "France" } },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "Garantie Décennale", credentialCategory: "Assurance Construction" },
    { "@type": "EducationalOccupationalCredential", name: "Garantie Décennale" },
  ],
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "19:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: SITE.googleRating, reviewCount: SITE.googleReviewCount },
  priceRange: "€€",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
