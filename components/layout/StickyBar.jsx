"use client";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { SITE } from "@/lib/site";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="flex" style={{ boxShadow: "0 -4px 24px rgba(0,0,0,.12)" }}>
        <a
          href={SITE.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
        >
          <Phone className="w-4 h-4" />
          <span>Appeler maintenant</span>
        </a>
        <Link
          href="/devis"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white"
          style={{ background: "var(--navy)", borderLeft: "1px solid rgba(255,255,255,.15)" }}
        >
          <FileText className="w-4 h-4" />
          <span>Devis gratuit</span>
        </Link>
      </div>
    </div>
  );
}
