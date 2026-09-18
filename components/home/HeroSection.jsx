"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronRight, Shield, Star, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

const SLIDES = [
  {
    tag: "🧹 Démoussage Hydrofuge",
    headline: "Votre toiture propre",
    accent: "& protégée 10 ans",
    sub: "Démoussage complet, traitement hydrofuge garanti 10 ans. Résultats visibles en une journée. Devis gratuit en 24h.",
    cta: { label: "Devis Démoussage Gratuit", href: "/devis" },
    img: "/images/chantiers/demoussage-haute-pression-toiture-ariege-bhb-habitat.png",
    overlay: "rgba(15,17,23,0.62)",
    pill: { label: "Garanti 10 ans", color: "#16A34A" },
  },
  {
    tag: "🏠 Couverture & Réfection",
    headline: "Toiture neuve ou",
    accent: "rénovée, garantie décennale",
    sub: "Tuiles canal, ardoises, tuiles béton. Artisan couvreur avec garantie décennale 10 ans en Ariège.",
    cta: { label: "Devis Couverture Gratuit", href: "/devis" },
    img: "/images/chantiers/couverture-neuve-tuiles-canal-ariege-bhb-habitat.webp",
    overlay: "rgba(26,18,5,0.58)",
    pill: { label: "Décennale 10 ans", color: "#D4520A" },
  },
  {
    tag: "💧 Étanchéité & Urgences",
    headline: "Fuite toiture ?",
    accent: "Intervention sous 48h",
    sub: "Réparation fuites, étanchéité terrasse, membrane EPDM. Urgences 7j/7 sur tout l'Ariège. Appelez maintenant.",
    cta: { label: `Appeler maintenant — ${SITE.phone}`, href: SITE.phoneTel, tel: true },
    img: "/images/chantiers/etancheite-toiture-terrasse-bitume-ariege-bhb-habitat.png",
    overlay: "rgba(12,26,46,0.65)",
    pill: { label: "Urgence 7j/7", color: "#EF4444" },
  },
  {
    tag: "🪵 Charpente Bois",
    headline: "Charpente traditionnelle",
    accent: "posée par des artisans",
    sub: "Construction et réfection de charpente bois. Ossature traditionnelle, garantie décennale. Devis gratuit en 24h.",
    cta: { label: "Devis Charpente Gratuit", href: "/devis" },
    img: "/images/chantiers/charpente-bois-construction-ariege-bhb-habitat.png",
    overlay: "rgba(20,12,5,0.60)",
    pill: { label: "Artisan certifié", color: "#92400E" },
  },
];

const TRUST_PILLS = [
  { icon: <Shield className="w-3.5 h-3.5" />, label: "Garantie décennale" },
  { icon: <Star className="w-3.5 h-3.5" />, label: "5★ sur Google" },
  { icon: <Clock className="w-3.5 h-3.5" />, label: "Devis en 24h" },
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const next = (i) => { setIdx(i); resetTimer(); };
  const resetTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIdx(p => (p + 1) % SLIDES.length), 5500);
  };

  useEffect(() => { resetTimer(); return () => clearInterval(timer.current); }, []);

  const slide = SLIDES[idx];

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", flexDirection: "column" }}>
      {/* Background photo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .9 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.img}
            alt={slide.tag}
            fill
            className="object-cover"
            sizes="100vw"
            priority={idx === 0}
          />
          <div className="absolute inset-0" style={{ background: slide.overlay }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto px-4 lg:px-6 py-14 lg:py-20">
        <div className="max-w-3xl">
          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {TRUST_PILLS.map(p => (
              <span key={p.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20" style={{ background: "rgba(255,255,255,.08)", backdropFilter: "blur(8px)" }}>
                {p.icon} {p.label}
              </span>
            ))}
          </div>

          {/* Tag */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`tag-${idx}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: .4 }}
              className="text-sm font-semibold mb-4"
              style={{ color: slide.pill.color }}
            >
              {slide.tag}
            </motion.p>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: .45, delay: .05 }}
              className="text-white mb-3"
              style={{ fontSize: "clamp(2.2rem,5.5vw,4rem)", fontFamily: "var(--font-display)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              {slide.headline}
              <br />
              <span style={{ color: slide.pill.color }}>{slide.accent}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Sub */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`s-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .4, delay: .1 }}
              className="text-base lg:text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: "rgba(255,255,255,.72)" }}
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            {slide.cta.tel ? (
              <a
                href={slide.cta.href}
                className="flex items-center gap-2.5 px-6 py-4 rounded-xl font-bold text-white text-base transition-all hover:scale-105 active:scale-95"
                style={{ background: "var(--primary)" }}
              >
                <Phone className="w-5 h-5" /> {slide.cta.label}
              </a>
            ) : (
              <Link
                href={slide.cta.href}
                className="flex items-center gap-2.5 px-6 py-4 rounded-xl font-bold text-white text-base transition-all hover:scale-105 active:scale-95"
                style={{ background: "var(--primary)" }}
              >
                {slide.cta.label} <ChevronRight className="w-4 h-4" />
              </Link>
            )}
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm border border-white/25 text-white transition-all hover:bg-white/10"
            >
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm" style={{ color: "rgba(255,255,255,.6)" }}>
              <strong className="text-white">5,0</strong> — {SITE.googleReviewCount} avis Google · {SITE.chantiers}+ chantiers en Ariège
            </span>
          </div>
        </div>
      </div>

      {/* Slide nav */}
      <div className="relative z-10 flex justify-center gap-2 pb-8">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => next(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: i === idx ? "32px" : "8px", background: i === idx ? "white" : "rgba(255,255,255,.3)" }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs" style={{ writingMode: "vertical-rl" }}>Découvrir</span>
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
