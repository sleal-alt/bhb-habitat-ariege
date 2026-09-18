"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ChevronRight, Clock, Shield, Star } from "lucide-react";
import { SITE } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "var(--primary)" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-white/20 text-white">
            <Clock className="w-4 h-4" /> Devis gratuit sous 24h — Diagnostic offert
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 text-balance" style={{ fontFamily: "var(--font-display)", lineHeight: 1.1 }}>
            Votre toiture mérite<br />un artisan de confiance.
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            BHB Habitat intervient sur tout le département 09. Garanti décennale, {SITE.chantiers}+ chantiers réalisés. Appelez maintenant ou demandez votre devis en ligne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.phoneTel}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-lg bg-white transition-all hover:scale-105 active:scale-95 shadow-xl"
              style={{ color: "var(--primary)" }}
            >
              <Phone className="w-5 h-5" /> {SITE.phone}
            </a>
            <Link
              href="/devis"
              className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold text-lg text-white border-2 border-white/30 transition-all hover:bg-white/10"
            >
              Devis en ligne <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Micro-trust */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Garanti décennale</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4" /> 5★ Google</span>
            <span className="flex items-center gap-1.5">✅ Garantie décennale</span>
            <span className="flex items-center gap-1.5">📍 Ariège 09</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
