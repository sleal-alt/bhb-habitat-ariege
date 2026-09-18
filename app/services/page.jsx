import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

export const metadata = {
  title: `Services Couverture Ariège 09 — ${SITE.name}`,
  description: `Tous les travaux de toiture en Ariège (09) — BHB Habitat : démoussage traitement hydrofuge, couverture tuiles, charpente bois, étanchéité toiture terrasse, zinguerie zinc. Garantie décennale. Devis gratuit ☎ ${SITE.phone}`,
};

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <div className="py-16 lg:py-20 px-4 text-center" style={{ background: "var(--navy)" }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#FF7A35" }}>Toutes les prestations</p>
        <h1 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Nos services toiture en Ariège
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">Artisan couvreur garanti décennale — Devis gratuit sous 24h</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <Link key={s.slug} href={s.href || `/services/${s.slug}`}
              className="group flex gap-5 p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: `${s.color}18` }}>
                {s.emoji}
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold mb-1" style={{ color: "var(--fg)" }}>{s.title}</h2>
                <p className="text-sm font-medium mb-2" style={{ color: s.color }}>{s.headline}</p>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--muted-fg)" }}>{s.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: s.color }}>
                  En savoir plus <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
