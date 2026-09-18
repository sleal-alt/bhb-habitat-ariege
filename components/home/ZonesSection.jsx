"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ZONES, SITE } from "@/lib/site";

export default function ZonesSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="lg:flex lg:items-start lg:gap-16">
          <div className="lg:w-96 shrink-0 mb-10 lg:mb-0">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#FF7A35" }}>
              Zones d'intervention
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Couvreur partout<br />
              <span style={{ color: "#FF7A35" }}>en Ariège (09)</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,.6)" }}>
              Basé à <strong className="text-white">La Tour du Crieu</strong>, BHB Habitat intervient dans tout le département 09 : plaines de l'Ariège, Pays d'Olmes, Couserans et Haute-Ariège.
            </p>
            <ul className="space-y-2 text-sm mb-8" style={{ color: "rgba(255,255,255,.55)" }}>
              <li>✅ Déplacement gratuit pour le devis</li>
              <li>✅ Toutes communes du 09 couvertes</li>
              <li>✅ Urgences 7j/7 sur tout le département</li>
            </ul>
            <Link href="/zones" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
              Toutes les zones →
            </Link>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ZONES.map((z, i) => (
                <motion.div
                  key={z.slug}
                  initial={{ opacity: 0, scale: .9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .06 }}
                >
                  <Link
                    href={`/zones/${z.slug}`}
                    className="flex items-center gap-2 px-4 py-3.5 rounded-xl border transition-all hover:border-orange-500/50 hover:bg-white/8 group"
                    style={{ borderColor: "rgba(255,255,255,.1)", background: "rgba(255,255,255,.04)" }}
                  >
                    <MapPin className="w-3.5 h-3.5 shrink-0 group-hover:text-orange-400 transition-colors" style={{ color: "rgba(255,255,255,.3)" }} />
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">
                        {z.name}
                        {z.base && <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded font-bold" style={{ background: "var(--primary)", color: "white" }}>Base</span>}
                        {z.prefecture && <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded font-bold" style={{ background: "rgba(255,255,255,.15)", color: "white" }}>Préf.</span>}
                      </p>
                      <p className="text-[11px]" style={{ color: "rgba(255,255,255,.35)" }}>{z.pop} hab.</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,.3)" }}>
              + toutes les communes environnantes du département 09
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
