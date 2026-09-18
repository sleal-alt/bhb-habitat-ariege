import Link from "next/link";
import Image from "next/image";
import { Phone, Clock, Shield, AlertTriangle, CheckCircle, ChevronRight, Zap } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `Urgence Toiture Ariège 09 — Fuite, Tuiles Cassées, Tempête | ${SITE.name}`,
  description: `Urgence toiture en Ariège (09) — BHB Habitat intervient sous 48h : fuite toiture, tuiles cassées après tempête, dégâts des eaux. Couvreur urgentiste 7j/7. Appelez le ${SITE.phone}.`,
};

const URGENCES = [
  {
    icon: "💧",
    title: "Fuite toiture",
    desc: "Infiltration d'eau dans les combles, taches au plafond, moisissures. Intervention rapide avant aggravation des dégâts.",
    color: "#1D4ED8",
  },
  {
    icon: "🌪️",
    title: "Tuiles cassées / tempête",
    desc: "Après intempéries, vents violents ou grêle : tuiles déplacées, arrachées ou brisées. Bâchage d'urgence et remplacement.",
    color: "#D4520A",
  },
  {
    icon: "🏚️",
    title: "Charpente endommagée",
    desc: "Affaissement de charpente, bois pourri, structure fragilisée. Diagnostic et sécurisation en urgence.",
    color: "#92400E",
  },
  {
    icon: "❄️",
    title: "Infiltration pluie / neige",
    desc: "Humidité persistante dans les combles, pont thermique, condensation. Traitement des zones vulnérables.",
    color: "#0EA5E9",
  },
  {
    icon: "⚡",
    title: "Dégâts après foudre",
    desc: "Toiture endommagée après foudre ou impact. Sécurisation immédiate, constat pour assurance.",
    color: "#EAB308",
  },
  {
    icon: "🪟",
    title: "Velux / fenêtre de toit",
    desc: "Velux brisé, joint défaillant, fuite autour d'une lucarne. Remplacement ou étanchéité en urgence.",
    color: "#16A34A",
  },
];

const ETAPES = [
  { num: "01", title: "Vous appelez", desc: `Composez le ${SITE.phone} — disponible 7j/7 dès 7h du matin.` },
  { num: "02", title: "On évalue", desc: "En 5 minutes au téléphone, on évalue la gravité et on planifie l'intervention." },
  { num: "03", title: "On intervient", desc: "Un artisan se déplace sous 48h, avec le matériel adapté à votre urgence." },
  { num: "04", title: "Devis & travaux", desc: "Devis sur place, travaux définitifs réalisés en une fois. Garantie décennale." },
];

const ASSURANCE_TIPS = [
  "Photographiez les dégâts avant toute intervention",
  "Conservez les factures et rapports d'expertise",
  "Déclarez le sinistre à votre assureur sous 5 jours",
  "Demandez-nous un constat écrit de l'état du toit",
];

export default function UrgencePage() {
  return (
    <div style={{ background: "var(--bg)" }}>

      {/* Hero urgence */}
      <div className="relative overflow-hidden" style={{ background: "#0F1117", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <Image
          src="/images/chantiers/couvreur-intervention-toiture-tuiles-ariege-09.png"
          alt="Intervention urgence toiture Ariège — BHB Habitat"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: "#EF4444" }}>
                <Zap className="w-3.5 h-3.5" /> URGENCE 7j/7
              </span>
            </div>
            <h1 className="text-white font-black mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontFamily: "var(--font-display)", lineHeight: 1.1 }}>
              Urgence toiture <br />
              <span style={{ color: "#FF7A35" }}>en Ariège ?</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,.72)" }}>
              Fuite, tuiles cassées, dégâts de tempête — BHB Habitat intervient sous 48h sur tout le département 09. Appelez maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={SITE.phoneTel}
                className="flex items-center justify-center gap-2.5 px-8 py-5 rounded-xl font-black text-white text-lg transition-all hover:scale-105 active:scale-95"
                style={{ background: "#EF4444", boxShadow: "0 4px 24px rgba(239,68,68,.4)" }}
              >
                <Phone className="w-5 h-5" /> {SITE.phone}
              </a>
              <Link
                href="/devis"
                className="flex items-center justify-center gap-2 px-8 py-5 rounded-xl font-bold text-white border border-white/25 transition-all hover:bg-white/10"
              >
                Devis gratuit <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {["Intervention sous 48h", "Devis gratuit sur place", "Garantie décennale"].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,.65)" }}>
                  <CheckCircle className="w-4 h-4 text-green-400" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau CTA fixe */}
      <div className="sticky top-0 z-40 border-b" style={{ background: "#EF4444", borderColor: "#DC2626" }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Urgence toiture ? Intervention rapide en Ariège</span>
          </div>
          <a
            href={SITE.phoneTel}
            className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-lg font-black text-sm text-red-600 bg-white hover:bg-red-50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> {SITE.phone}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">

        {/* Types d'urgences */}
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-3 text-center" style={{ color: "#FF7A35" }}>Nos interventions d'urgence</p>
          <h2 className="text-2xl lg:text-3xl font-black text-center mb-10" style={{ color: "var(--fg)", fontFamily: "var(--font-display)" }}>
            Quel est votre problème ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {URGENCES.map(u => (
              <div key={u.title} className="p-5 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{u.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "var(--fg)" }}>{u.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>{u.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comment ça marche */}
        <div className="mb-16 rounded-2xl p-8 lg:p-12" style={{ background: "var(--navy)" }}>
          <p className="text-sm font-bold uppercase tracking-widest mb-3 text-center" style={{ color: "#FF7A35" }}>Comment ça marche</p>
          <h2 className="text-2xl lg:text-3xl font-black text-center mb-10 text-white" style={{ fontFamily: "var(--font-display)" }}>
            Intervention en 4 étapes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ETAPES.map((e, i) => (
              <div key={e.num} className="relative">
                <div className="text-5xl font-black mb-3 opacity-20 text-white" style={{ fontFamily: "var(--font-display)" }}>{e.num}</div>
                <h3 className="font-bold text-white mb-2">{e.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>{e.desc}</p>
                {i < ETAPES.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px opacity-20" style={{ background: "white" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Photo + assurance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-auto">
            <Image
              src="/images/chantiers/pose-delta-nt-liteaux-couverture-ariege-bhb-habitat.jpg"
              alt="Réfection toiture urgence Ariège — BHB Habitat"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#FF7A35" }}>Dégâts d'intempéries</p>
            <h2 className="text-2xl font-black mb-4" style={{ color: "var(--fg)", fontFamily: "var(--font-display)" }}>
              Prise en charge par votre assurance
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted-fg)" }}>
              Les dommages causés par la tempête, la grêle ou un événement climatique exceptionnel sont généralement couverts par votre assurance habitation. BHB Habitat vous accompagne dans les démarches.
            </p>
            <ul className="space-y-3 mb-8">
              {ASSURANCE_TIPS.map(t => (
                <li key={t} className="flex items-start gap-2 text-sm" style={{ color: "var(--fg)" }}>
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-white w-fit transition-all hover:scale-105"
              style={{ background: "#EF4444" }}
            >
              <Phone className="w-4 h-4" /> Appeler maintenant — {SITE.phone}
            </a>
          </div>
        </div>

        {/* Zones */}
        <div className="rounded-2xl p-8 mb-16 border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-black mb-2 text-center" style={{ color: "var(--fg)", fontFamily: "var(--font-display)" }}>
            Zones d'intervention urgence en Ariège
          </h2>
          <p className="text-sm text-center mb-6" style={{ color: "var(--muted-fg)" }}>
            BHB Habitat intervient en urgence sur tout le département 09 (Ariège)
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Pamiers", "Foix", "Saverdun", "Mirepoix", "Lavelanet", "La Tour du Crieu", "Mazères", "Varilhes", "Tarascon-sur-Ariège", "Saint-Girons", "Ax-les-Thermes", "Auterive"].map(v => (
              <span key={v} className="px-3 py-1.5 rounded-full text-sm font-medium border" style={{ color: "var(--fg)", borderColor: "var(--border)" }}>
                📍 {v}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "var(--primary)", color: "white" }}>
              + tout le 09
            </span>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center rounded-2xl py-14 px-6" style={{ background: "#EF4444" }}>
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Une urgence toiture en Ariège ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">Appelez maintenant — disponible 7j/7 · Intervention sous 48h · Devis gratuit sur place</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={SITE.phoneTel}
              className="flex items-center justify-center gap-2.5 px-10 py-5 rounded-xl font-black text-red-600 text-lg bg-white hover:bg-red-50 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" /> {SITE.phone}
            </a>
            <Link
              href="/devis"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              Devis gratuit en ligne
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
