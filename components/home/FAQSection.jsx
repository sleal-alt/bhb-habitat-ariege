"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/site";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--muted)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
            Vos questions,<br />
            <span style={{ color: "var(--primary)" }}>nos réponses</span>
          </h2>
          <p className="text-base" style={{ color: "var(--muted-fg)" }}>
            Tout ce que vous devez savoir avant de nous contacter.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border transition-all"
              style={{ background: "var(--card)", borderColor: open === i ? "var(--primary)" : "var(--border)" }}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold leading-tight" style={{ color: "var(--fg)" }}>{f.q}</span>
                <ChevronDown
                  className="w-4 h-4 shrink-0 transition-transform"
                  style={{ color: "var(--primary)", transform: open === i ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: .25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
