"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, AlertTriangle } from "lucide-react";
import { SERVICES } from "@/lib/site";

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Nos Prestations
          </p>
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
            Toutes les interventions toiture<br />
            <span style={{ color: "var(--primary)" }}>en Ariège (09)</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--muted-fg)" }}>
            Artisan couvreur depuis {new Date().getFullYear() - 2008} ans. Devis gratuit, transparence totale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .08 }}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${i === 0 ? "md:col-span-2" : ""}`}
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              {/* Urgency badge */}
              {s.urgency && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "#FEF3C7", color: "#92400E" }}>
                  <AlertTriangle className="w-3 h-3" /> URGENCE 7j/7
                </div>
              )}

              {/* Color accent bar */}
              <div className="h-1 w-full transition-all duration-300 group-hover:h-1.5" style={{ background: s.color }} />

              <div className="p-6 lg:p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: `${s.color}18` }}>
                    {s.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight mb-1" style={{ color: "var(--fg)" }}>
                      {s.title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: s.color }}>{s.headline}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted-fg)" }}>{s.description}</p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {s.benefits.map(b => (
                    <li key={b} className="flex items-center gap-2.5 text-sm">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white shrink-0 font-bold" style={{ background: s.color }}>✓</span>
                      <span style={{ color: "var(--fg)" }}>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all group-hover:shadow-md"
                  style={{ background: `${s.color}14`, color: s.color }}
                >
                  <span>En savoir plus</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-sm mb-3" style={{ color: "var(--muted-fg)" }}>Pas sûr de votre besoin ? On évalue gratuitement.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105" style={{ background: "var(--primary)" }}>
            Devis gratuit — Réponse en 24h <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
