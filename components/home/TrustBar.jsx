"use client";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

const ITEMS = [
  { emoji: "🏆", value: `${SITE.experience} ans`, label: "d'expérience", sub: "Depuis 2008 en Ariège" },
  { emoji: "🏠", value: `${SITE.chantiers}+`, label: "chantiers réalisés", sub: "Particuliers & pros" },
  { emoji: "⭐", value: "5/5", label: "sur Google", sub: `${SITE.googleReviewCount} avis vérifiés` },
  { emoji: "✅", value: "Décennale", label: "Garantie 10 ans", sub: "Assurance incluse" },
  { emoji: "🛡️", value: "10 ans", label: "Garantie décennale", sub: "RC pro incluse" },
  { emoji: "⚡", value: "24–48h", label: "Délai devis & urgences", sub: "Réponse rapide" },
];

export default function TrustBar() {
  return (
    <section className="py-4 overflow-hidden" style={{ background: "var(--navy)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,.06)", borderRadius: "1rem", overflow: "hidden" }}>
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .07 }}
              className="flex flex-col items-center text-center py-5 px-3"
              style={{ background: "var(--navy)" }}
            >
              <span className="text-xl mb-1">{item.emoji}</span>
              <p className="text-lg font-black text-white" style={{ fontFamily: "var(--font-display)" }}>{item.value}</p>
              <p className="text-xs font-semibold text-white/70">{item.label}</p>
              <p className="text-[10px] text-white/35 mt-0.5 hidden sm:block">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
