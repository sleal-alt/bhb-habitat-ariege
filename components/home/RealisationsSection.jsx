"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const REALS = [
  { img: "/images/chantiers/couverture-tuiles-canal-ariege-bhb-habitat.png", alt: "Couverture tuiles canal toiture Ariège — BHB Habitat", label: "Couverture", lieu: "Pamiers" },
  { img: "/images/chantiers/demoussage-haute-pression-toiture-ariege-bhb-habitat.png", alt: "Démoussage haute pression toiture Ariège — BHB Habitat", label: "Démoussage", lieu: "Foix" },
  { img: "/images/chantiers/charpente-bois-construction-ariege-bhb-habitat.png", alt: "Charpente bois construction Ariège — BHB Habitat", label: "Charpente", lieu: "Saverdun" },
  { img: "/images/chantiers/etancheite-toiture-terrasse-bitume-ariege-bhb-habitat.png", alt: "Étanchéité toiture terrasse bitume Ariège — BHB Habitat", label: "Étanchéité", lieu: "Mirepoix" },
  { img: "/images/chantiers/pose-tuiles-couvreur-ariege-bhb-habitat.png", alt: "Pose tuiles couvreur Ariège — BHB Habitat", label: "Couverture", lieu: "La Tour du Crieu" },
  { img: "/images/chantiers/pose-membrane-sous-toiture-isolation-ariege.png", alt: "Pose membrane sous-toiture isolation Ariège — BHB Habitat", label: "Couverture", lieu: "Foix" },
];

const TAG_COLORS = {
  "Démoussage": "#16A34A",
  "Couverture": "#D4520A",
  "Charpente": "#92400E",
  "Étanchéité": "#1D4ED8",
};

export default function RealisationsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Nos réalisations</p>
            <h2 className="text-3xl lg:text-4xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
              Chantiers réalisés<br />
              <span style={{ color: "var(--primary)" }}>en Ariège (09)</span>
            </h2>
          </div>
          <Link href="/realisations" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--primary)" }}>
            Voir tout <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {REALS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ aspectRatio: i === 0 ? "16/9" : "4/3", gridColumn: i === 0 ? "span 2" : "span 1" }}
            >
              <Image
                src={r.img}
                alt={r.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: TAG_COLORS[r.label] || "#D4520A" }}>{r.label}</span>
                <span className="text-xs font-medium text-white/80">📍 {r.lieu}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/realisations" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--primary)" }}>
            Voir toutes nos réalisations <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
