import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ChevronRight, MapPin } from "lucide-react";
import { ZONES, SERVICES, FAQS, SITE } from "@/lib/site";

export function generateStaticParams() {
  return ZONES.map(z => ({ slug: z.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const zone = ZONES.find(z => z.slug === slug);
  if (!zone) return {};
  return {
    title: `Couvreur ${zone.name} (09) — ${SITE.name} | Devis Gratuit`,
    description: `Couvreur à ${zone.name} (Ariège 09) — BHB Habitat intervient sur place pour démoussage, réfection toiture, charpente et étanchéité. Garantie décennale 10 ans. Devis gratuit sous 24h. ☎ ${SITE.phone}`,
  };
}

export default async function ZonePage({ params }) {
  const { slug } = await params;
  const zone = ZONES.find(z => z.slug === slug);
  if (!zone) return notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: SITE.legal,
    telephone: SITE.phoneTel.replace("tel:", ""),
    url: `${SITE.url}/zones/${zone.slug}`,
    areaServed: { "@type": "City", name: zone.name, addressRegion: "Ariège", addressCountry: "FR" },
    address: { "@type": "PostalAddress", addressLocality: SITE.city, postalCode: SITE.zip, addressCountry: "FR" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: SITE.googleRating, reviewCount: SITE.googleReviewCount },
  };

  return (
    <div style={{ background: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      {/* Hero */}
      <div className="py-16 lg:py-24 px-4" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,.4)" }}>
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/zones" className="hover:text-white">Zones</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{zone.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6" style={{ color: "#FF7A35" }} />
            <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,.6)" }}>Intervention à</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Couvreur à {zone.name}
            <br /><span style={{ color: "#FF7A35" }}>Ariège (09)</span>
          </h1>
          <p className="text-base lg:text-lg mb-8 max-w-2xl" style={{ color: "rgba(255,255,255,.65)" }}>
            Artisan couvreur avec garantie décennale, BHB Habitat intervient à {zone.name} et dans toute la commune pour le démoussage, la couverture, la charpente et l'étanchéité. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.phoneTel} className="flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-white transition-all hover:scale-105" style={{ background: "var(--primary)" }}>
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link href="/devis" className="flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-white border border-white/25 hover:bg-white/10">
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Services at this location */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <h2 className="text-2xl font-black mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
          Nos prestations à {zone.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {SERVICES.map(s => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="flex items-start gap-4 p-5 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <span className="text-2xl">{s.emoji}</span>
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--fg)" }}>{s.title}</p>
                <p className="text-xs" style={{ color: "var(--muted-fg)" }}>{s.headline}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO text */}
        <div className="max-w-3xl space-y-5 text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>
          <p>
            <strong style={{ color: "var(--fg)" }}>BHB Habitat</strong> est votre artisan couvreur de référence à <strong style={{ color: "var(--fg)" }}>{zone.name}</strong> en Ariège (09). Basé à La Tour du Crieu, BHB Habitat intervient régulièrement à {zone.name} pour tous types de travaux de toiture.
          </p>
          <p>
            Avec {SITE.experience} ans d'expérience en Ariège et plus de {SITE.chantiers} chantiers réalisés, notre artisan connaît parfaitement les spécificités climatiques de la région — pluies abondantes, enneigement hivernal, mousses et lichens liés à l'humidité. Un diagnostic précis, un devis transparent.
          </p>
          <p>
            Avec <strong style={{ color: "var(--fg)" }}>garantie décennale</strong>, nos travaux vous donnent accès aux aides de l'État (MaPrimeRénov', TVA 5,5%, Éco-PTZ). Garantie décennale 10 ans sur tous les travaux de couverture.
          </p>
        </div>

        {/* Nearby zones */}
        <div className="mt-14">
          <p className="text-sm font-bold mb-4" style={{ color: "var(--fg)" }}>Communes voisines</p>
          <div className="flex flex-wrap gap-2">
            {ZONES.filter(z => z.slug !== zone.slug).slice(0, 8).map(z => (
              <Link key={z.slug} href={`/zones/${z.slug}`}
                className="px-3 py-1.5 rounded-lg border text-xs transition-all hover:border-orange-400"
                style={{ borderColor: "var(--border)", color: "var(--muted-fg)" }}>
                Couvreur {z.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
