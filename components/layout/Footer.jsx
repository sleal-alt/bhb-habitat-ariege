import Link from "next/link";
import { SITE, SERVICES, ZONES } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)" }} className="text-white">
      {/* Pre-footer CTA */}
      <div style={{ background: "var(--primary)", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Un projet toiture ? On vous rappelle gratuitement.
            </p>
            <p className="text-sm opacity-80 mt-1">Devis gratuit · Diagnostic offert · Réponse sous 24h</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-2 px-6 py-3 bg-white font-bold rounded-xl text-sm transition-all hover:scale-105"
              style={{ color: "var(--primary)" }}
            >
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link
              href="/devis"
              className="flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-colors"
            >
              Devis en ligne
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm" style={{ background: "var(--primary)" }}>
                RC
              </div>
              <div>
                <p className="font-bold" style={{ fontFamily: "var(--font-display)" }}>BHB Habitat</p>
                <p className="text-xs opacity-50">Artisan couvreur Ariège 09</p>
              </div>
            </div>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              Artisan couvreur depuis {SITE.founded} en Ariège. Démoussage, couverture, charpente, étanchéité. Votre toit entre de bonnes mains.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href={SITE.phoneTel} className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity hover:text-orange-400">
                <Phone className="w-4 h-4 shrink-0" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 shrink-0" /> {SITE.email}
              </a>
              <span className="flex items-start gap-2.5 opacity-60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> {SITE.address}, {SITE.city}
              </span>
              <span className="flex items-center gap-2.5 opacity-60">
                <Clock className="w-4 h-4 shrink-0" /> {SITE.hours}
              </span>
            </div>
            {/* Certif badges */}
            <div className="flex gap-2 mt-5">
              {SITE.certifications.map(c => (
                <span key={c} className="px-2.5 py-1 rounded-lg text-xs font-bold border border-white/20 text-white/70">
                  ✅ {c}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-5">Nos Services</p>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm opacity-65 hover:opacity-100 hover:text-orange-400 transition-all flex items-center gap-2">
                    <span>{s.emoji}</span> {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/devis" className="text-sm font-bold hover:underline" style={{ color: "#FF7A35" }}>
                  → Devis gratuit en ligne
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-5">Zones d'intervention</p>
            <div className="flex flex-wrap gap-1.5">
              {ZONES.map(z => (
                <Link
                  key={z.slug}
                  href={`/zones/${z.slug}`}
                  className="text-xs px-2 py-1 rounded-lg border border-white/10 opacity-60 hover:opacity-100 hover:border-white/30 transition-all"
                >
                  {z.name}
                </Link>
              ))}
            </div>
            <p className="text-xs opacity-40 mt-3">+ tout l'Ariège (09) · Déplacement gratuit</p>
          </div>

          {/* Liens / Garanties */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-5">Infos pratiques</p>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "Nos expertises", href: "/a-propos" },
                { label: "Nos réalisations", href: "/realisations" },
                { label: "Avis clients", href: "/avis" },
                { label: "Contact", href: "/contact" },
                { label: "Urgence toiture", href: "/urgence" },
                { label: "Mentions légales", href: "/mentions-legales" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm opacity-65 hover:opacity-100 transition-opacity">{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className="p-3 rounded-xl border border-white/10" style={{ background: "rgba(255,255,255,.04)" }}>
              <Shield className="w-5 h-5 mb-2" style={{ color: "#4ADE80" }} />
              <p className="text-xs font-semibold mb-0.5">Garanties</p>
              <p className="text-xs opacity-50">Décennale 10 ans · RC pro · Hydrofuge 10 ans · Assuré</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs opacity-40">
          <p>© {new Date().getFullYear()} {SITE.legal} — SIRET {SITE.siret}</p>
          <p>Site réalisé par <a href="https://optimization.fr" className="hover:opacity-100 underline">Renk · optimization.fr</a></p>
        </div>
      </div>
    </footer>
  );
}
