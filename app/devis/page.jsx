"use client";
import { useState } from "react";
import { Phone, ChevronRight, CheckCircle, Loader2 } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

const INIT = { nom: "", tel: "", email: "", ville: "", service: "", message: "" };

export default function DevisPage() {
  const [form, setForm] = useState(INIT);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/bhb.habitat@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Nouveau devis BHB Habitat — ${form.service || "Non précisé"} — ${form.ville || "Ariège"}`,
          Nom: form.nom,
          Téléphone: form.tel,
          Email: form.email || "Non renseigné",
          Commune: form.ville || "Non renseignée",
          Prestation: form.service || "Non précisée",
          Message: form.message || "Aucun message",
          _replyto: form.email || "",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--bg)" }}>
        <div className="max-w-md w-full text-center p-10 rounded-3xl border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <CheckCircle className="w-16 h-16 mx-auto mb-5" style={{ color: "#16A34A" }} />
          <h1 className="text-2xl font-black mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
            Demande envoyée !
          </h1>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted-fg)" }}>
            Notre équipe vous recontacte sous <strong>24h</strong> pour planifier un diagnostic gratuit chez vous.
          </p>
          <a href={SITE.phoneTel} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-105" style={{ background: "var(--primary)" }}>
            <Phone className="w-4 h-4" /> Appeler directement — {SITE.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <div className="py-16 lg:py-24 text-center px-4" style={{ background: "var(--navy)" }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#FF7A35" }}>100% Gratuit · Sans engagement</p>
        <h1 className="text-3xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Demandez votre devis gratuit
        </h1>
        <p className="text-base text-white/60 max-w-xl mx-auto">
          Réponse sous 24h · Diagnostic offert · Devis transparent sans surprise
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 lg:py-20">
        <form onSubmit={submit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>Votre nom *</label>
              <input required value={form.nom} onChange={set("nom")} placeholder="Jean Dupont" className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2" style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>Téléphone *</label>
              <input required type="tel" value={form.tel} onChange={set("tel")} placeholder="06 00 00 00 00" className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>Email</label>
              <input type="email" value={form.email} onChange={set("email")} placeholder="jean@email.fr" className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>Commune</label>
              <input value={form.ville} onChange={set("ville")} placeholder="Pamiers, Foix..." className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>Type de prestation</label>
            <select value={form.service} onChange={set("service")} className="w-full px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }}>
              <option value="">Sélectionner...</option>
              {SERVICES.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
              <option value="Urgence / Fuite">Urgence / Fuite</option>
              <option value="Autre">Autre / Je ne sais pas</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>Décrivez votre projet</label>
            <textarea rows={5} value={form.message} onChange={set("message")} placeholder="Type de toit, superficie estimée, problème constaté, urgence..." className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none" style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }} />
          </div>

          {status === "error" && (
            <p className="text-sm text-center text-red-500 font-medium">
              Une erreur est survenue. Appelez directement le {SITE.phone}.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full flex items-center justify-center gap-2 py-5 rounded-xl font-bold text-white text-base transition-all hover:scale-[1.01] active:scale-99 disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ background: "var(--primary)" }}
          >
            {status === "sending" ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...</>
            ) : (
              <>Envoyer ma demande de devis <ChevronRight className="w-5 h-5" /></>
            )}
          </button>

          <p className="text-center text-xs" style={{ color: "var(--muted-fg)" }}>
            Réponse garantie sous 24h · Gratuit · Sans engagement
          </p>
        </form>

        <div className="mt-10 p-6 rounded-2xl border text-center" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--fg)" }}>Préférez-vous appeler directement ?</p>
          <a href={SITE.phoneTel} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105" style={{ background: "var(--primary)" }}>
            <Phone className="w-4 h-4" /> {SITE.phone} — Lun–Sam 7h–19h
          </a>
        </div>
      </div>
    </div>
  );
}
