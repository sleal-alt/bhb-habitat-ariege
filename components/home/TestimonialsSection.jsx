"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { REVIEWS, SITE } from "@/lib/site";

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(n)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Avis Clients
          </p>
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
            Ce que disent nos clients
            <br /><span style={{ color: "var(--primary)" }}>en Ariège</span>
          </h2>
          {/* Google badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border mt-4" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold" style={{ color: "var(--fg)" }}>5,0 / 5 sur Google</p>
              <p className="text-xs" style={{ color: "var(--muted-fg)" }}>{SITE.googleReviewCount} avis vérifiés</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .07 }}
              className="rounded-2xl p-6 border relative transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <Quote className="w-8 h-8 absolute top-4 right-4 opacity-8" style={{ color: "var(--primary)" }} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0" style={{ background: "var(--primary)" }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "var(--fg)" }}>{r.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted-fg)" }}>{r.service} · {r.date}</p>
                </div>
              </div>
              <Stars n={r.rating} />
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--fg)" }}>"{r.text}"</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={SITE.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all hover:shadow-md text-sm"
            style={{ borderColor: "var(--border)", color: "var(--fg)", background: "var(--card)" }}
          >
            Voir tous les avis sur Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
