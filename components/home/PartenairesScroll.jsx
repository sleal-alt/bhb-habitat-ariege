"use client";
import Image from "next/image";

const LOGOS = [
  { src: "/images/logos/logo-algimouss.png", alt: "Algimouss — produits démoussage" },
  { src: "/images/logos/logo-dalep.png", alt: "DALEP — traitements bâtiment" },
  { src: "/images/logos/logo-velux.png", alt: "VELUX — fenêtres de toit" },
  { src: "/images/logos/logo-monier.png", alt: "Monier Group — tuiles couverture" },
  { src: "/images/logos/logo-seigneurie.png", alt: "Seigneurie — peintures toiture" },
  { src: "/images/logos/logo-arcane-industries.png", alt: "Arcane Industries — matériaux toiture" },
];

// Double pour boucle infinie
const ALL = [...LOGOS, ...LOGOS];

export default function PartenairesScroll() {
  return (
    <section className="py-12 overflow-hidden border-y" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>
          Nos marques partenaires
        </p>
      </div>

      <div className="relative">
        {/* Fondu gauche/droite */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--card), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--card), transparent)" }} />

        <div
          className="flex gap-12 items-center"
          style={{
            animation: "scroll-logos 22s linear infinite",
            width: "max-content",
          }}
        >
          {ALL.map((logo, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-12 px-4 opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
