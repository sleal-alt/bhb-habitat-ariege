"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, SERVICES } from "@/lib/site";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/avis" },
  { label: "Zones", href: "/zones" },
  { label: "Expertises", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "🚨 Urgence", href: "/urgence", urgent: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const ref = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setOpen(false); setServOpen(false); }, [pathname]);
  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setServOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <>
      {/* Top urgence bar */}
      <div style={{ background: "var(--navy)" }} className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-xs" style={{ color: "rgba(255,255,255,.65)" }}>
            <span>📍 {SITE.address}, {SITE.city} ({SITE.deptNum})</span>
            <span>✅ Garantie décennale</span>
            <span>🛡️ Garantie décennale 10 ans</span>
          </div>
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-80"
            style={{ color: "#FF7A35" }}
          >
            <Phone className="w-3.5 h-3.5" /> Urgence 7j/7 — {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "white",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,.08)" : "0 1px 0 rgba(0,0,0,.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative overflow-hidden" style={{ width: 240, height: 84 }}>
              <Image
                src="/images/logo-bhb-habitat.png"
                alt="BHB Habitat — Couvreur Ariège"
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={ref}>
            <Link href="/" className={navCls(pathname === "/")}>Accueil</Link>

            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => setServOpen(v => !v)}
                className={navCls(pathname.startsWith("/services")) + " flex items-center gap-1"}
              >
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: .98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: .98 }}
                    transition={{ duration: .15 }}
                    className="absolute left-0 top-full mt-2 w-[600px] rounded-2xl shadow-2xl border p-5 z-50"
                    style={{ background: "white", borderColor: "var(--border)" }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--muted-fg)" }}>
                      Nos prestations
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES.map(s => (
                        <Link
                          key={s.slug}
                          href={s.href || `/services/${s.slug}`}
                          onClick={() => setServOpen(false)}
                          className="group flex gap-3 p-3 rounded-xl transition-colors hover:bg-gray-50"
                          style={s.slug === "urgence-toiture" ? { background: "#FEF2F2" } : {}}
                        >
                          <span className="text-xl shrink-0 mt-0.5">{s.emoji}</span>
                          <div>
                            <p className="text-sm font-semibold leading-tight transition-colors" style={s.slug === "urgence-toiture" ? { color: "#EF4444" } : {}}>
                              {s.shortTitle}
                            </p>
                            <p className="text-xs leading-relaxed mt-0.5" style={{ color: "var(--muted-fg)" }}>
                              {s.headline}
                            </p>
                          </div>
                          {s.urgency && (
                            <span className="ml-auto shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: "#FEF3C7", color: "#92400E" }}>
                              URGENT
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
                      <Link href="/services" onClick={() => setServOpen(false)} className="text-xs font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                        Voir toutes nos prestations →
                      </Link>
                      <a href={SITE.phoneTel} className="text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white" style={{ background: "var(--primary)" }}>
                        <Phone className="w-3 h-3" /> Urgence : {SITE.phone}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {LINKS.map(l => (
              l.urgent
                ? <Link key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-sm font-bold transition-colors text-white" style={{ background: "#EF4444" }}>{l.label}</Link>
                : <Link key={l.href} href={l.href} className={navCls(pathname === l.href)}>{l.label}</Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={SITE.phoneTel}
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
            >
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link
              href="/devis"
              className="hidden md:flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: "var(--navy)", color: "white" }}
            >
              Devis Gratuit
            </Link>
            <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t overflow-hidden"
              style={{ borderColor: "var(--border)", background: "white" }}
            >
              <div className="px-4 py-4 space-y-1">
                {[{ label: "Accueil", href: "/" }, ...SERVICES.map(s => ({ label: `${s.emoji} ${s.shortTitle}`, href: `/services/${s.slug}` })), ...LINKS].map(l => (
                  <Link key={l.href} href={l.href} className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                    {l.label}
                  </Link>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <a href={SITE.phoneTel} className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white" style={{ background: "var(--primary)" }}>
                    <Phone className="w-4 h-4" /> {SITE.phone}
                  </a>
                  <Link href="/devis" className="flex items-center justify-center py-3.5 rounded-xl font-bold text-white" style={{ background: "var(--navy)" }}>
                    Devis Gratuit Gratuit
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function navCls(active) {
  return `px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
    active
      ? "text-[var(--primary)] bg-[var(--primary-light)]"
      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
  }`;
}
