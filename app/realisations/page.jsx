import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `Réalisations — ${SITE.name} | Couvreur Ariège`,
  description: `Réalisations BHB Habitat — couvreur Ariège (09) : ${SITE.chantiers}+ chantiers de démoussage, couverture tuiles, charpente bois et étanchéité réalisés à Pamiers, Foix, Saverdun, Mirepoix et dans tout le département 09.`,
};

const PROJECTS = [
  {
    title: "Démoussage & hydrofuge — Pamiers",
    service: "Démoussage",
    tag: "Maison individuelle",
    desc: "Nettoyage haute pression, démoussage complet et application hydrofuge garanti 10 ans sur une toiture de 120 m².",
    color: "#16A34A",
    img: "/images/chantiers/demoussage-haute-pression-toiture-ariege-bhb-habitat.png",
    alt: "Démoussage haute pression toiture Pamiers Ariège — BHB Habitat"
  },
  {
    title: "Réfection complète — Foix",
    service: "Couverture",
    tag: "Maison de village",
    desc: "Réfection complète de toiture en tuiles canal 150 m². Remplacement de la volige et traitement de la charpente.",
    color: "#D4520A",
    img: "/images/chantiers/couverture-tuiles-canal-ariege-bhb-habitat.png",
    alt: "Couverture tuiles canal Foix Ariège — BHB Habitat"
  },
  {
    title: "Charpente neuve — Saverdun",
    service: "Charpente",
    tag: "Extension",
    desc: "Pose d'une charpente traditionnelle sur extension de 60 m². Ossature bois et couverture tuiles.",
    color: "#92400E",
    img: "/images/chantiers/charpente-bois-construction-ariege-bhb-habitat.png",
    alt: "Charpente bois construction Saverdun Ariège — BHB Habitat"
  },
  {
    title: "Étanchéité terrasse — Mirepoix",
    service: "Étanchéité",
    tag: "Appartement",
    desc: "Étanchéité membrane EPDM sur toiture terrasse 80 m². Résolution d'infiltrations récurrentes.",
    color: "#1D4ED8",
    img: "/images/chantiers/etancheite-toiture-terrasse-bitume-ariege-bhb-habitat.png",
    alt: "Étanchéité toiture terrasse bitume Mirepoix Ariège — BHB Habitat"
  },
  {
    title: "Sous-toiture & réfection — La Tour du Crieu",
    service: "Couverture",
    tag: "Maison individuelle",
    desc: "Pose écran HPV Delta-NT et rechargement complet en tuiles canal sur maison ariégeoise.",
    color: "#D4520A",
    img: "/images/chantiers/pose-membrane-sous-toiture-isolation-ariege.png",
    alt: "Pose membrane sous-toiture isolation La Tour du Crieu Ariège — BHB Habitat"
  },
  {
    title: "Pose tuiles — Lavelanet",
    service: "Couverture",
    tag: "Maison individuelle",
    desc: "Remplacement couverture tuiles béton sur maison 100 m². Pose de la sous-toiture et comptage complet.",
    color: "#D4520A",
    img: "/images/chantiers/pose-tuiles-couvreur-ariege-bhb-habitat.png",
    alt: "Pose tuiles couvreur Lavelanet Ariège — BHB Habitat"
  },
  {
    title: "Changement de couverture — Ariège",
    service: "Couverture",
    tag: "Maison individuelle",
    desc: "Changement complet de couverture : dépose des anciennes tuiles, pose membrane Delta-NT et liteaux avant rechargement.",
    color: "#D4520A",
    img: "/images/chantiers/pose-delta-nt-liteaux-couverture-ariege-bhb-habitat.jpg",
    alt: "Pose Delta-NT liteaux réfection couverture Ariège — BHB Habitat"
  },
  {
    title: "Démoussage — Ariège",
    service: "Démoussage",
    tag: "Maison de village",
    desc: "Démoussage complet en hauteur et application traitement hydrofuge siloxane sur toiture tuiles.",
    color: "#16A34A",
    img: "/images/chantiers/demoussage-toiture-tuiles-ariege-couvreur-09.png",
    alt: "Démoussage toiture tuiles Ariège couvreur 09 — BHB Habitat"
  },
  {
    title: "Zinguerie & gouttières — Saverdun",
    service: "Zinguerie",
    tag: "Pavillon",
    desc: "Pose gouttières demi-rondes et descentes eaux pluviales sur pavillon 90 m². Finitions zinc prépatiné.",
    color: "#475569",
    img: "/images/chantiers/zinguerie-gouttiere-maison-ariege-bhb-habitat.png",
    alt: "Zinguerie gouttières maison Saverdun Ariège — BHB Habitat"
  },
  {
    title: "Couverture neuve — Ariège",
    service: "Couverture",
    tag: "Maison individuelle",
    desc: "Pose complète d'une couverture neuve en tuiles canal sur maison ariégeoise. Résultat impeccable, finitions soignées.",
    color: "#D4520A",
    img: "/images/chantiers/couverture-neuve-tuiles-canal-ariege-bhb-habitat.webp",
    alt: "Couverture neuve tuiles canal Ariège — BHB Habitat"
  },
];

const SERVICE_COLORS = {
  "Démoussage": "#16A34A",
  "Couverture": "#D4520A",
  "Charpente": "#92400E",
  "Étanchéité": "#1D4ED8",
  "Zinguerie": "#475569",
};

export default function RealisationsPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <div className="py-16 lg:py-20 px-4 text-center" style={{ background: "var(--navy)" }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#FF7A35" }}>Portfolio</p>
        <h1 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Nos réalisations en Ariège
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">{SITE.chantiers}+ chantiers réalisés en {SITE.experience} ans. Quelques exemples de nos interventions dans le département 09.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {PROJECTS.map(p => (
            <div key={p.title} className="rounded-2xl overflow-hidden border transition-all hover:shadow-lg hover:-translate-y-1" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full font-bold text-white shadow" style={{ background: SERVICE_COLORS[p.service] || "#D4520A" }}>{p.service}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold text-white shadow" style={{ background: "rgba(0,0,0,0.5)" }}>{p.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--fg)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-10 rounded-2xl" style={{ background: "var(--muted)" }}>
          <p className="text-base font-semibold mb-2" style={{ color: "var(--fg)" }}>Votre chantier à venir ?</p>
          <p className="text-sm mb-6" style={{ color: "var(--muted-fg)" }}>Devis gratuit sous 24h · Diagnostic offert · Garantie décennale 10 ans</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/devis" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white" style={{ background: "var(--primary)" }}>
              Devis Gratuit
            </Link>
            <a href={SITE.phoneTel} className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border" style={{ borderColor: "var(--border)", color: "var(--fg)" }}>
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
