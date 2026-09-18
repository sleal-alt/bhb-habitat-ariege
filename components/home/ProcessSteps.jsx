"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";

const STEPS = [
  {
    n: "01",
    icon: "📞",
    title: "Vous appelez ou remplissez le formulaire",
    desc: "En 2 minutes, décrivez votre toiture. Nous vous répondons sous 24h pour planifier un diagnostic.",
    color: "var(--primary)",
  },
  {
    n: "02",
    icon: "🔍",
    title: "Diagnostic gratuit chez vous",
    desc: "On vient sur place, on monte sur le toit, on évalue l'état réel. Gratuit, sans engagement.",
    color: "#1D4ED8",
  },
  {
    n: "03",
    icon: "📋",
    title: "Devis détaillé & transparent",
    desc: "Un devis complet, lisible, sans surprise. Chaque poste expliqué. Validité 30 jours.",
    color: "#16A34A",
  },
  {
    n: "04",
    icon: "🏗️",
    title: "Travaux propres & dans les délais",
    desc: "On intervient avec notre équipe qualifiée. Chantier protégé, nettoyage complet à la fin.",
    color: "#92400E",
  },
  {
    n: "05",
    icon: "✅",
    title: "Réception & garantie remise",
    desc: "Vous validez le travail, on vous remet les attestations de garantie et l'assurance décennale.",
    color: "#D97706",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--muted)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Comment ça marche
          </p>
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
            De l'appel à la garantie —<br />
            <span style={{ color: "var(--primary)" }}>5 étapes simples</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted-fg)" }}>
            Transparence totale, de l'appel au chantier. Vous savez toujours où on en est.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5" style={{ background: "var(--border)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-5 relative z-10 text-white font-black shadow-lg"
                  style={{ background: s.color, boxShadow: `0 8px 24px ${s.color}40` }}
                >
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <span className="text-xs font-bold mb-2 px-2 py-0.5 rounded-full" style={{ background: `${s.color}18`, color: s.color }}>
                  Étape {s.n}
                </span>
                <h3 className="text-sm font-bold mb-2 leading-tight" style={{ color: "var(--fg)" }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted-fg)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-14">
          <Link href="/devis" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105" style={{ background: "var(--primary)" }}>
            Commencer — Devis Gratuit <ChevronRight className="w-4 h-4" />
          </Link>
          <a href={SITE.phoneTel} className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border transition-all hover:bg-gray-50" style={{ borderColor: "var(--border)", color: "var(--fg)" }}>
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
