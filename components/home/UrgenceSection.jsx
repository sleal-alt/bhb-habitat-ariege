"use client";
import { motion } from "framer-motion";
import { Phone, Zap, AlertTriangle, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

const SITUATIONS = [
  { icon: "💧", label: "Fuite d'eau active" },
  { icon: "🌪️", label: "Dégâts de tempête" },
  { icon: "🧱", label: "Tuiles cassées / envolées" },
  { icon: "❄️", label: "Infiltration après neige" },
  { icon: "🌿", label: "Affaissement de charpente" },
  { icon: "🪟", label: "Velux / lucarne endommagée" },
];

export default function UrgenceSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "var(--navy)" }}>
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "rgba(212,82,10,0.25)", color: "#FF7A35" }}>
              <Zap className="w-4 h-4" /> Intervention d'urgence
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-5" style={{ fontFamily: "var(--font-display)", lineHeight: 1.1 }}>
              Votre toit en danger ?<br />
              <span style={{ color: "#FF7A35" }}>On intervient vite.</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Fuite, tuile arrachée, tempête… une toiture endommagée ne peut pas attendre. BHB Habitat se déplace en urgence partout en Ariège (09), 7 jours sur 7, pour sécuriser votre habitation et stopper les infiltrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.phoneTel}
                className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
                style={{ background: "var(--primary)", color: "white" }}
              >
                <Phone className="w-5 h-5" /> {SITE.phone}
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="w-4 h-4" /> Disponible Lun–Sam · 7h–19h
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
                Situations d'urgence traitées
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SITUATIONS.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <span className="text-xl">{s.icon}</span>
                    <span className="text-sm font-medium text-white/80">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(212,82,10,0.2)", border: "1px solid rgba(212,82,10,0.3)" }}>
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#FF7A35" }} />
                <p className="text-sm text-white/75">
                  <strong className="text-white">Ne tardez pas.</strong> Une infiltration non traitée peut endommager l'isolation, la charpente et les plafonds en quelques jours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
