import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronRight, Check, Shield, Star } from "lucide-react";
import { SERVICES, FAQS, SITE } from "@/lib/site";
import { SERVICE_CONTENT } from "@/lib/serviceContent";

const SERVICE_IMAGES = {
  "demoussage-traitement": { src: "/images/chantiers/demoussage-haute-pression-toiture-ariege-bhb-habitat.png", alt: "Démoussage haute pression toiture Ariège — BHB Habitat" },
  "couverture-toiture":    { src: "/images/chantiers/couverture-tuiles-canal-ariege-bhb-habitat.png", alt: "Couverture tuiles canal toiture Ariège 09 — BHB Habitat" },
  "charpente":             { src: "/images/chantiers/charpente-bois-construction-ariege-bhb-habitat.png", alt: "Charpente bois construction Ariège — BHB Habitat" },
  "etancheite":            { src: "/images/chantiers/etancheite-toiture-terrasse-bitume-ariege-bhb-habitat.png", alt: "Étanchéité toiture terrasse Ariège 09 — BHB Habitat" },
  "zinguerie":             { src: "/images/chantiers/zinguerie-gouttiere-maison-ariege-bhb-habitat.png", alt: "Zinguerie gouttières maison Ariège — BHB Habitat" },
};

export function generateStaticParams() {
  return SERVICES.flatMap(s => [
    { slug: s.slug },
    ...s.subServices.map(ss => ({ slug: ss.slug }))
  ]);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug)
    || SERVICES.flatMap(s => s.subServices).find(ss => ss.slug === slug);
  if (!service) return {};
  const title = service.title || service.shortTitle;
  return {
    title: `${title} Ariège 09 — ${SITE.name}`,
    description: `${title} en Ariège (09) — BHB Habitat, artisan couvreur basé à La Tour du Crieu. ${SITE.experience} ans d'expérience locale, ${SITE.chantiers}+ chantiers réalisés. Garantie décennale 10 ans. Devis gratuit sous 24h. ☎ ${SITE.phone}`,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    const sub = SERVICES.flatMap(s => s.subServices.map(ss => ({ ...ss, parent: s }))).find(ss => ss.slug === slug);
    if (!sub) return notFound();
    return <SubServicePage sub={sub} />;
  }

  const content = SERVICE_CONTENT[slug];

  // Schema.org Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "RoofingContractor",
      name: SITE.legal,
      telephone: SITE.phoneTel.replace("tel:", ""),
      address: { "@type": "PostalAddress", addressLocality: SITE.city, postalCode: SITE.zip, addressCountry: "FR" },
    },
    areaServed: { "@type": "AdministrativeArea", name: "Ariège" },
    description: service.description,
  };

  const faqSchema = content?.faqLocal ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqLocal.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  } : null;

  return (
    <div style={{ background: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <div className="py-16 lg:py-24 px-4" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,.4)" }}>
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{service.shortTitle}</span>
          </nav>
          <div className="lg:flex lg:items-start lg:gap-12">
            <div className="flex-1 mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{service.emoji}</span>
                {service.urgency && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#FEF3C7", color: "#92400E" }}>URGENCE 7j/7</span>
                )}
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {service.title}
                <br /><span className="text-2xl lg:text-3xl" style={{ color: "#FF7A35" }}>en Ariège (09)</span>
              </h1>
              <p className="text-lg mb-6 max-w-2xl" style={{ color: "rgba(255,255,255,.7)" }}>{service.description}</p>
              <div className="flex flex-wrap gap-3">
                <a href={SITE.phoneTel} className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-all hover:scale-105" style={{ background: "var(--primary)" }}>
                  <Phone className="w-4 h-4" /> {SITE.phone}
                </a>
                <Link href="/devis" className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white border border-white/25 hover:bg-white/10 transition-colors">
                  Devis Gratuit
                </Link>
              </div>
              {/* Trust */}
              <div className="flex flex-wrap gap-4 mt-6 text-xs" style={{ color: "rgba(255,255,255,.5)" }}>
                <span>✅ Garantie décennale</span>
                <span>🛡️ Décennale 10 ans</span>
                <span>⭐ 5/5 Google</span>
                <span>📍 {SITE.chantiers}+ chantiers en Ariège</span>
              </div>
            </div>

            {/* Photo + Benefits card */}
            <div className="lg:w-80 shrink-0 space-y-4">
              {SERVICE_IMAGES[slug] && (
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src={SERVICE_IMAGES[slug].src} alt={SERVICE_IMAGES[slug].alt} fill className="object-cover" sizes="320px" />
                </div>
              )}
            <div className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(255,255,255,.05)" }}>
              <p className="text-sm font-bold text-white mb-4">Inclus dans notre prestation</p>
              <ul className="space-y-3 mb-5">
                {service.benefits.map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <Check className="w-4 h-4 shrink-0" style={{ color: "#4ADE80" }} />
                    <span className="text-sm text-white/80">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Garantie décennale 10 ans obligatoire</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span>{SITE.googleRating}/5 · {SITE.googleReviewCount} avis Google</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-services nav */}
      {service.subServices?.length > 0 && (
        <div className="py-6 px-4 border-b" style={{ background: "var(--muted)", borderColor: "var(--border)" }}>
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold uppercase tracking-wider mr-2" style={{ color: "var(--muted-fg)" }}>Nos interventions :</span>
            {service.subServices.map(ss => (
              <Link key={ss.slug} href={`/services/${ss.slug}`}
                className="px-4 py-1.5 rounded-full border text-xs font-medium transition-all hover:border-orange-400 hover:text-orange-600"
                style={{ borderColor: "var(--border)", color: "var(--muted-fg)", background: "var(--card)" }}>
                {ss.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Rich content */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {content ? (
              <>
                {/* Intro */}
                <p className="text-base leading-relaxed mb-10" style={{ color: "var(--muted-fg)", fontSize: "1.05rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1.25rem" }}>
                  {content.intro}
                </p>

                {/* Sections */}
                <div className="space-y-12">
                  {content.sections.map((section, i) => (
                    <div key={i}>
                      <h2 className="text-xl lg:text-2xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {section.body.split("\n\n").map((para, j) => (
                          <p key={j} className="text-base leading-relaxed" style={{ color: "var(--muted-fg)" }}>
                            {para.split(/(\*\*[^*]+\*\*)/).map((part, k) =>
                              part.startsWith("**") && part.endsWith("**")
                                ? <strong key={k} style={{ color: "var(--fg)" }}>{part.slice(2, -2)}</strong>
                                : part
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Local FAQ */}
                {content.faqLocal?.length > 0 && (
                  <div className="mt-14">
                    <h2 className="text-xl font-black mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
                      Questions fréquentes — {service.shortTitle}
                    </h2>
                    <div className="space-y-4">
                      {content.faqLocal.map((f, i) => (
                        <div key={i} className="rounded-2xl p-5 border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                          <p className="text-sm font-bold mb-2" style={{ color: "var(--fg)" }}>{f.q}</p>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>{f.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Fallback generic content */
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--muted-fg)" }}>
                <p>BHB Habitat, artisan couvreur basé à La Tour du Crieu (09100), intervient pour tous vos travaux de <strong style={{ color: "var(--fg)" }}>{service.title.toLowerCase()}</strong> dans tout le département de l'Ariège. Avec {SITE.experience} ans d'expérience et plus de {SITE.chantiers} chantiers réalisés, vous bénéficiez d'un savoir-faire éprouvé et d'une connaissance approfondie des spécificités climatiques de notre région.</p>
                <p>Le département de l'Ariège présente des conditions météorologiques particulièrement exigeantes pour les toitures : pluviométrie importante, hivers avec neige en altitude, vents violents et cycles gel-dégel fréquents. Ces conditions accélèrent le vieillissement des matériaux de couverture et nécessitent un entretien régulier et des interventions de qualité réalisées par un professionnel qualifié.</p>
                <p>Avec <strong style={{ color: "var(--fg)" }}>garantie décennale 10 ans</strong>, BHB Habitat respecte les normes en vigueur. Ces certifications attestent de notre sérieux et de la qualité de nos prestations.</p>
                <p>Tous nos travaux sont couverts par la garantie décennale obligatoire (10 ans) et notre assurance responsabilité civile professionnelle. En faisant appel à BHB Habitat, vous choisissez la tranquillité d'esprit : votre investissement est protégé pendant 10 ans, et nous restons à vos côtés en cas de problème.</p>
                <p>Nous vous proposons un devis gratuit et détaillé, établi après une visite sur place pour évaluer précisément vos besoins. Le devis vous est remis sous 48h, avec un chiffrage transparent et sans surprise. Nous intervenons sur l'ensemble du département 09, de Pamiers à Ax-les-Thermes en passant par Foix, Saverdun, Mirepoix, Lavelanet et Saint-Girons. Le déplacement pour le devis est gratuit.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-4">
              {/* CTA box */}
              <div className="rounded-2xl p-6 text-white" style={{ background: "var(--primary)" }}>
                <p className="text-sm font-bold mb-1">Devis gratuit — Réponse 24h</p>
                <p className="text-xs opacity-75 mb-4">Pour votre {service.shortTitle.toLowerCase()} en Ariège</p>
                <a href={SITE.phoneTel} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm mb-2 bg-white transition-all hover:scale-105" style={{ color: "var(--primary)" }}>
                  <Phone className="w-4 h-4" /> {SITE.phone}
                </a>
                <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors">
                  Formulaire en ligne
                </Link>
              </div>

              {/* Service info */}
              <div className="rounded-2xl p-5 border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--muted-fg)" }}>Informations pratiques</p>
                <ul className="space-y-2.5 text-sm" style={{ color: "var(--fg)" }}>
                  <li className="flex gap-2"><span>⏱️</span><span>Devis gratuit sous 24h</span></li>
                  <li className="flex gap-2"><span>🛡️</span><span>Garantie décennale 10 ans</span></li>
                  <li className="flex gap-2"><span>✅</span><span>Garantie décennale</span></li>
                  <li className="flex gap-2"><span>📍</span><span>Tout le département 09</span></li>
                  <li className="flex gap-2"><span>🚗</span><span>Déplacement devis gratuit</span></li>
                  {service.urgency && <li className="flex gap-2"><span>⚡</span><span style={{ color: "#DC2626" }}>Urgences 7j/7 — 24/48h</span></li>}
                </ul>
              </div>

              {/* Other services */}
              <div className="rounded-2xl p-5 border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--muted-fg)" }}>Nos autres services</p>
                <ul className="space-y-2">
                  {SERVICES.filter(s => s.slug !== slug).map(s => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm hover:underline" style={{ color: "var(--muted-fg)" }}>
                        <span>{s.emoji}</span> {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubServicePage({ sub }) {
  const parentContent = SERVICE_CONTENT[sub.parent.slug];

  return (
    <div style={{ background: "var(--bg)" }}>
      <div className="py-16 lg:py-20 px-4" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,.4)" }}>
            <Link href="/" className="hover:text-white">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/services/${sub.parent.slug}`} className="hover:text-white">{sub.parent.shortTitle}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{sub.shortTitle}</span>
          </nav>
          <span className="text-3xl mb-4 block">{sub.parent.emoji}</span>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {sub.title}
            <br /><span className="text-xl" style={{ color: "#FF7A35" }}>en Ariège (09)</span>
          </h1>
          <p className="text-base mb-6" style={{ color: "rgba(255,255,255,.65)" }}>
            Artisan couvreur garanti décennale — Devis gratuit sous 24h
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.phoneTel} className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white" style={{ background: "var(--primary)" }}>
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link href="/devis" className="flex items-center px-6 py-3.5 rounded-xl font-bold text-white border border-white/25 hover:bg-white/10">
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-5 text-base leading-relaxed" style={{ color: "var(--muted-fg)" }}>
        <p>BHB Habitat, artisan couvreur basé en Ariège depuis <strong style={{ color: "var(--fg)" }}>{SITE.experience} ans</strong>, réalise vos travaux de <strong style={{ color: "var(--fg)" }}>{sub.title.toLowerCase()}</strong> dans tout le département 09. Avec plus de <strong style={{ color: "var(--fg)" }}>{SITE.chantiers} chantiers</strong> réalisés, nous avons l'expérience et les compétences pour répondre à tous vos besoins en matière de {sub.parent.shortTitle.toLowerCase()}.</p>

        <p>En Ariège, les conditions climatiques (pluies abondantes, hivers rigoureux, cycles gel-dégel en altitude) exigent des travaux de qualité, réalisés avec des matériaux adaptés et une mise en œuvre soignée. C'est la philosophie qui guide chacune de nos interventions depuis notre création en {SITE.founded}.</p>

        <p>Avec <strong style={{ color: "var(--fg)" }}>garantie décennale 10 ans</strong>, tous nos travaux sont éligibles aux aides de l'État (MaPrimeRénov', TVA réduite 5,5%, Éco-PTZ). Tous nos travaux sont couverts par la <strong style={{ color: "var(--fg)" }}>garantie décennale 10 ans</strong> et notre assurance RC professionnelle.</p>

        <p>Nous intervenons sur l'ensemble du département de l'Ariège : Pamiers, Foix, Saverdun, La Tour du Crieu, Mirepoix, Varilhes, Lavelanet, Tarascon-sur-Ariège, Saint-Girons, Ax-les-Thermes et toutes les communes du 09. Le déplacement pour le devis est entièrement gratuit.</p>

        <div className="mt-8 p-5 rounded-2xl" style={{ background: "var(--primary-light)", borderLeft: "4px solid var(--primary)" }}>
          <p className="text-sm font-bold mb-3" style={{ color: "var(--primary)" }}>Demandez votre devis {sub.title.toLowerCase()} gratuit</p>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.phoneTel} className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm" style={{ background: "var(--primary)" }}>
              <Phone className="w-4 h-4" /> Appeler maintenant
            </a>
            <Link href="/devis" className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border" style={{ borderColor: "var(--primary)", color: "var(--primary)" }}>
              Formulaire en ligne
            </Link>
          </div>
        </div>

        <Link href={`/services/${sub.parent.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline mt-4" style={{ color: "var(--primary)" }}>
          ← Voir tout sur {sub.parent.title}
        </Link>
      </div>
    </div>
  );
}
