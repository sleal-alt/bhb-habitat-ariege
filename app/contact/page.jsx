import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `Contact — ${SITE.name} | Couvreur Ariège 09`,
  description: `Contactez BHB Habitat, votre couvreur Ariège (09) basé à La Tour du Crieu. Devis gratuit sous 24h, diagnostic offert. ☎ ${SITE.phone} · ${SITE.email} · Lun–Sam 7h–19h`,
};

export default function ContactPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <div className="py-16 px-4 text-center" style={{ background: "var(--navy)" }}>
        <h1 className="text-3xl lg:text-4xl font-black text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>Contact</h1>
        <p className="text-white/60">BHB Habitat répond sous 24h — Urgences 7j/7</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: <Phone className="w-5 h-5" />, label: "Téléphone", val: SITE.phone, href: SITE.phoneTel, note: "Urgences 7j/7 — Lun–Sam 7h–19h" },
              { icon: <Mail className="w-5 h-5" />, label: "Email", val: SITE.email, href: `mailto:${SITE.email}`, note: "Réponse sous 24h" },
              { icon: <MapPin className="w-5 h-5" />, label: "Adresse", val: `${SITE.address}, ${SITE.zip} ${SITE.city}`, note: "Déplacement gratuit pour le devis" },
              { icon: <Clock className="w-5 h-5" />, label: "Horaires", val: SITE.hours, note: "Urgences en dehors des horaires" },
            ].map(item => (
              <div key={item.label} className="flex gap-4 p-5 rounded-2xl border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: "var(--primary)" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--muted-fg)" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-base font-semibold hover:underline" style={{ color: "var(--fg)" }}>{item.val}</a>
                  ) : (
                    <p className="text-base font-semibold" style={{ color: "var(--fg)" }}>{item.val}</p>
                  )}
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-fg)" }}>{item.note}</p>
                </div>
              </div>
            ))}

            {/* Certifs */}
            <div className="flex gap-3">
              {SITE.certifications.map(c => (
                <span key={c} className="px-3 py-2 rounded-xl text-xs font-bold border" style={{ borderColor: "var(--border)", color: "var(--fg)" }}>
                  ✅ {c}
                </span>
              ))}
              <span className="px-3 py-2 rounded-xl text-xs font-bold border" style={{ borderColor: "var(--border)", color: "var(--fg)" }}>
                🛡️ Décennale 10 ans
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)", minHeight: "360px" }}>
            <iframe
              title="BHB Habitat - Ariège 09"
              src={SITE.mapEmbed}
              width="100%" height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
