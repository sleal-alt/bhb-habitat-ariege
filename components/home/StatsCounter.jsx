"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "", duration = 1800 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setValue(Math.floor(start));
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, target, duration]);

  return <span ref={ref}>{value.toLocaleString("fr-FR")}{suffix}</span>;
}

const STATS = [
  { value: 300, suffix: "+", label: "Chantiers réalisés", sub: "En Ariège et Occitanie", color: "#D4520A" },
  { value: 17, suffix: " ans", label: "D'expérience locale", sub: "Artisan ariégeois depuis 2008", color: "#1A2744" },
  { value: 10, suffix: " ans", label: "Garantie hydrofuge", sub: "La plus longue du marché", color: "#16A34A" },
  { value: 100, suffix: "%", label: "Clients satisfaits", sub: "5★ sur Google Maps", color: "#F59E0B" },
];

export default function StatsCounter() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-white mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Des chiffres qui parlent
          </motion.h2>
          <p className="text-white/50 max-w-lg mx-auto">BHB Habitat en Ariège — une réputation construite chantier après chantier.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
              className="rounded-2xl p-6 lg:p-8 text-center border border-white/10"
              style={{ background: "rgba(255,255,255,.05)", backdropFilter: "blur(8px)" }}
            >
              <p className="text-3xl lg:text-5xl font-black mb-2" style={{ fontFamily: "var(--font-display)", color: s.color }}>
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm font-bold text-white mb-1">{s.label}</p>
              <p className="text-xs text-white/40">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
