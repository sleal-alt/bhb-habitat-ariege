import Link from "next/link";
import { MapPin } from "lucide-react";
import { ZONES, SITE } from "@/lib/site";

export const metadata = {
  title: `Zones d'intervention Ariège 09 — ${SITE.name}`,
  description: `BHB Habitat, couvreur Ariège (09), intervient à Pamiers, Foix, Saverdun, Mirepoix, Lavelanet, Tarascon-sur-Ariège et dans toutes les communes du 09. Déplacement gratuit. Devis sous 24h. ☎ ${SITE.phone}`,
};

export default function ZonesPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <div className="py-16 lg:py-20 px-4 text-center" style={{ background: "var(--navy)" }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#FF7A35" }}>Zones d'intervention</p>
        <h1 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Couvreur partout en Ariège (09)
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Basé à La Tour du Crieu, BHB Habitat intervient dans tout le département 09. Déplacement gratuit pour le devis.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ZONES.map(z => (
            <Link key={z.slug} href={`/zones/${z.slug}`}
              className="group flex items-center gap-3 p-5 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <MapPin className="w-4 h-4 shrink-0 group-hover:text-orange-500 transition-colors" style={{ color: "var(--muted-fg)" }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                  {z.name}
                  {z.base && <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded font-bold text-white" style={{ background: "var(--primary)" }}>Base</span>}
                </p>
                <p className="text-xs" style={{ color: "var(--muted-fg)" }}>{z.pop} hab.</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-center mt-8" style={{ color: "var(--muted-fg)" }}>
          + toutes les communes environnantes du département 09 · Ariège · Occitanie
        </p>
      </div>
    </div>
  );
}
