"use client";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Umbrella, Award } from "lucide-react";

const GARANTIES = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Garantie décennale",
    duration: "10 ans",
    desc: "Couvre tous les défauts de construction affectant la solidité de votre toiture pendant 10 ans après la fin des travaux.",
    color: "#1A2744",
  },
  {
    icon: <Umbrella className="w-8 h-8" />,
    title: "Traitement hydrofuge",
    duration: "10 ans",
    desc: "Notre traitement anti-mousse et hydrofuge repousse l'eau et les mousses pendant 10 ans. Résultat visible dès la première journée.",
    color: "#D4520A",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Devis transparent",
    duration: "Sans surprise",
    desc: "Prix fixé avant le début des travaux, détail poste par poste. Aucun coût caché, aucune mauvaise surprise à la fin du chantier.",
    color: "#1A6644",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "RC Professionnelle",
    duration: "Assuré",
    desc: "Responsabilité civile professionnelle souscrite. En cas d'accident ou de dommage sur votre propriété, vous êtes intégralement couverts.",
    color: "#6B21A8",
  },
];

export default function GarantiesSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--muted)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Nos garanties</p>
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
            Travaux réalisés avec<br />
            <span style={{ color: "var(--primary)" }}>toutes les garanties</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted-fg)" }}>
            Confier votre toiture à BHB Habitat, c'est avoir la certitude d'un travail bien fait, couvert et garanti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GARANTIES.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border flex flex-col"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${g.color}18`, color: g.color }}>
                {g.icon}
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{ background: `${g.color}15`, color: g.color }}>
                {g.duration}
              </div>
              <h3 className="font-black text-base mb-3" style={{ color: "var(--fg)" }}>{g.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
