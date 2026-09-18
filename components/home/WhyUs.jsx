"use client";
import { motion } from "framer-motion";
import { Phone, Clock, ShieldCheck, ThumbsUp, MapPin, Wrench } from "lucide-react";
import { SITE } from "@/lib/site";

const REASONS = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Réponse en 24h",
    desc: "Devis gratuit envoyé sous 24h après diagnostic. Pas d'attente, pas de surprise."
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Garantie décennale 10 ans",
    desc: "Tous nos travaux sont couverts par une assurance décennale. Votre toiture protégée une décennie."
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: `${SITE.experience} ans d'expérience`,
    desc: `Depuis ${SITE.founded}, ${SITE.chantiers}+ chantiers réalisés en Ariège. Un savoir-faire éprouvé sur tous types de toitures.`
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Tout le département 09",
    desc: "Pamiers, Foix, Mirepoix, Lavelanet… BHB Habitat se déplace partout en Ariège sans frais de déplacement."
  },
  {
    icon: <ThumbsUp className="w-7 h-7" />,
    title: `${SITE.googleRating}★ sur Google`,
    desc: `${SITE.googleReviewCount} avis clients vérifiés. La satisfaction de nos clients est notre meilleure carte de visite.`
  },
  {
    icon: <Phone className="w-7 h-7" />,
    title: "Urgences 7j/7",
    desc: "Fuite, tuile cassée, tempête ? BHB Habitat intervient en urgence pour sécuriser votre toit rapidement."
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Pourquoi nous choisir
          </p>
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
            L'artisan couvreur qui<br />
            <span style={{ color: "var(--primary)" }}>tient ses promesses</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted-fg)" }}>
            BHB Habitat, c'est un artisan local avec une vraie garantie, pas une franchise anonyme. Voici pourquoi nos clients nous font confiance depuis {SITE.experience} ans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,82,10,0.1)", color: "var(--primary)" }}>
                {r.icon}
              </div>
              <div>
                <p className="font-bold mb-1.5 text-sm" style={{ color: "var(--fg)" }}>{r.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
