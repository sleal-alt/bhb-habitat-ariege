import { Star } from "lucide-react";
import Link from "next/link";
import { REVIEWS, SITE } from "@/lib/site";

export const metadata = {
  title: `Avis Clients — ${SITE.name} | 5★ sur Google`,
  description: `${SITE.googleReviewCount} avis clients vérifiés pour BHB Habitat, couvreur Ariège (09). Démoussage, toiture, charpente : ce que nos clients de Pamiers, Foix, Saverdun et tout le département 09 disent de nos travaux.`,
};

function Stars({ n = 5 }) {
  return <div className="flex gap-0.5">{[...Array(n)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>;
}

export default function AvisPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <div className="py-16 lg:py-20 px-4 text-center" style={{ background: "var(--navy)" }}>
        <h1 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Avis de nos clients
        </h1>
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/15" style={{ background: "rgba(255,255,255,.08)" }}>
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
          <div className="text-left">
            <p className="text-sm font-bold text-white">5,0 / 5</p>
            <p className="text-xs text-white/50">{SITE.googleReviewCount} avis Google vérifiés</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {REVIEWS.map((r, i) => (
            <div key={r.name} className="rounded-2xl p-6 border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0" style={{ background: "var(--primary)" }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "var(--fg)" }}>{r.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted-fg)" }}>{r.service} · {r.date}</p>
                </div>
              </div>
              <Stars n={r.rating} />
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--fg)" }}>"{r.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{ background: "var(--primary)" }}>
            Laisser un avis sur Google →
          </a>
        </div>
      </div>
    </div>
  );
}
