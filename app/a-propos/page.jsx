import Link from "next/link";
import { Phone, ChevronRight, CheckCircle, AlertTriangle, Wrench } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `Nos expertises toiture — ${SITE.name} | Couvreur Ariège 09`,
  description: `Découvrez les expertises de BHB Habitat, couvreur Ariège (09) depuis ${SITE.founded} : démoussage, couverture tuiles, charpente bois, étanchéité et zinguerie zinc. Savoir-faire technique détaillé. ${SITE.chantiers}+ chantiers en Ariège.`,
};

const EXPERTISES = [
  {
    emoji: "🧹",
    slug: "demoussage-traitement",
    title: "Démoussage & Traitement Hydrofuge",
    subtitle: "La solution préventive numéro 1 en Ariège",
    intro: "En Ariège, le climat humide et les hivers rigoureux créent des conditions idéales pour la prolifération des mousses, lichens et algues sur les toitures. Ces organismes ne sont pas seulement inesthétiques — ils retiennent l'humidité, accélèrent la dégradation des matériaux et fragilisent la structure de votre toit.",
    points: [
      {
        title: "Pourquoi les mousses sont dangereuses",
        content: "Les mousses peuvent retenir jusqu'à 6 fois leur poids en eau. Cette humidité constante infiltre les tuiles poreuses, provoque des cycles gel-dégel destructeurs et peut, en 5 à 10 ans, rendre une toiture irréparable. Un démoussage préventif tous les 5-7 ans prolonge la durée de vie de votre couverture de 15 à 20 ans."
      },
      {
        title: "Notre méthode en 3 étapes",
        content: "1. Nettoyage haute pression basse (50-80 bars) pour décoller les mousses sans fragiliser les tuiles. 2. Application d'un traitement biocide professionnel sur toute la surface — lichens, algues, champignons sont éliminés en profondeur. 3. Projection d'un hydrofuge pénétrant à base de siloxane qui imperméabilise les tuiles et empêche la réapparition des mousses pendant 10 ans."
      },
      {
        title: "Les signes qui doivent vous alerter",
        content: "Tuiles verdâtres ou noircies, présence de mousses visibles à l'œil nu depuis le sol, gouttières obstruées régulièrement, traces d'humidité sous les toits, tuiles qui se déchaussent : ces signaux indiquent que votre toit réclame une intervention. Plus tôt vous agissez, moins les travaux seront coûteux."
      },
      {
        title: "Résultats garantis 10 ans",
        content: "Notre traitement hydrofuge est garanti par écrit pendant 10 ans. En cas de réapparition des mousses dans ce délai, nous retraitons gratuitement. Cette garantie est valable quel que soit le type de couverture : tuiles canal, tuiles béton, ardoises, fibrociment."
      }
    ],
    cta: "Devis démoussage gratuit",
    warning: "Une toiture non traitée peut perdre 30 % de sa durée de vie."
  },
  {
    emoji: "🏠",
    slug: "couverture-toiture",
    title: "Couverture & Réfection de Toiture",
    subtitle: "Pose, rénovation et remplacement de couverture",
    intro: "La couverture est la première protection de votre maison contre les intempéries. En Ariège, les conditions climatiques sont exigeantes : neige, gel, pluies abondantes, vents. Une toiture défaillante met en danger l'ensemble de votre patrimoine. BHB Habitat maîtrise tous les types de couvertures adaptées au contexte local ariégeois.",
    points: [
      {
        title: "Les différents types de couvertures en Ariège",
        content: "Tuiles canal (romanes) : la référence en Ariège pour les toitures à faible pente, elles offrent une excellente résistance aux cycles gel-dégel. Tuiles béton : plus économiques, adaptées aux pentes moyennes et fortes. Ardoises naturelles : pour les constructions traditionnelles ou de prestige, durabilité exceptionnelle de 80 à 100 ans. Zinc et bac acier : pour les toitures plates ou à très faible pente."
      },
      {
        title: "Réfection partielle ou totale : comment choisir ?",
        content: "Une réfection partielle suffit quand les dommages concernent moins de 30 % de la surface (tuiles cassées, noues défectueuses, arêtiers). Au-delà, une réfection totale est plus économique à long terme : remplacement de la sous-toiture (feutre bitumé ou pare-vapeur), vérification de la charpente, pose d'un écran HPV (Haute Perméabilité à la Vapeur) et re-couverture complète."
      },
      {
        title: "L'importance de la sous-toiture",
        content: "La sous-toiture est souvent négligée mais déterminante. Un écran HPV de qualité (Solitex, Divoroll, Tyvek) permet à la vapeur d'eau de s'évacuer tout en bloquant les infiltrations d'eau liquide. Sans sous-toiture performante, votre isolation et votre charpente se dégradent prématurément. Nous ne faisons jamais l'impasse sur ce poste, même en réfection partielle."
      },
      {
        title: "Garantie décennale sur toute la couverture",
        content: "Chaque chantier de couverture réalisé par BHB Habitat est couvert par notre garantie décennale : pendant 10 ans, tout défaut affectant la solidité ou l'étanchéité de votre toiture est pris en charge. Nos matériaux sont sélectionnés auprès de fabricants reconnus (Imerys, Terreal, Edilians) avec des garanties fabricant de 30 à 50 ans."
      }
    ],
    cta: "Diagnostic toiture gratuit",
    warning: "20 % des sinistres habitation sont dus à des défauts de couverture."
  },
  {
    emoji: "🪵",
    slug: "charpente",
    title: "Charpente & Ossature Bois",
    subtitle: "La structure qui porte tout",
    intro: "La charpente est le squelette de votre toiture. Invisible mais fondamentale, elle supporte le poids de la couverture, des charges de neige (importantes en Ariège) et doit résister aux vents. Une charpente saine est la condition sine qua non d'une toiture performante. BHB Habitat réalise le diagnostic, la rénovation et la pose de charpentes traditionnelles et industrielles.",
    points: [
      {
        title: "Charpente traditionnelle vs fermette industrielle",
        content: "La charpente traditionnelle en bois massif (pin, douglas, chêne) est taillée et assemblée sur mesure par un charpentier. Elle offre des combles aménageables et une grande durabilité (100 à 150 ans). La fermette industrielle (fermettes triangulées préfabriquées) est plus rapide et moins coûteuse à poser, mais les combles sont perdus. En Ariège, pour les maisons de caractère, la charpente traditionnelle reste la solution de référence."
      },
      {
        title: "Les pathologies fréquentes de charpente en Ariège",
        content: "Pourriture des bois due à l'humidité (condensation, infiltrations non traitées) : les pieds de chevrons et les sablières sont les zones les plus exposées. Attaques de capricornes et vrillettes : ces insectes xylophages peuvent creuser jusqu'à 80 % de la section d'un bois avant d'être détectés. Fléchissement des pannes et chevrons sous les charges de neige. Déformation de la charpente liée à des tuiles trop lourdes ou mal réparties."
      },
      {
        title: "Notre méthode de diagnostic charpente",
        content: "Avant tout devis, nous réalisons un diagnostic complet : sondage des bois au poinçon pour détecter les pourritures cachées, inspection des assemblages (embrèvements, boulons, sabots métalliques), vérification des descentes de charges sur les murs porteurs, mesure des flèches et déformations. Ce diagnostic est gratuit et conditionne un devis précis et sans surprise."
      },
      {
        title: "Traitement curatif et préventif obligatoire",
        content: "En Ariège, toute intervention sur charpente doit inclure un traitement insecticide-fongicide professionnel (injection sous pression dans les bois, badigeonnage des zones exposées). Ce traitement protège les bois sains et stoppe la progression dans les zones attaquées. Nous utilisons des produits homologués CTB-P+ (Classe d'Emploi 2 et 3) compatibles avec la présence humaine après séchage."
      }
    ],
    cta: "Diagnostic charpente gratuit",
    warning: "Une charpente attaquée par les insectes peut s'effondrer sans signe avant-coureur."
  },
  {
    emoji: "💧",
    slug: "etancheite",
    title: "Étanchéité & Toiture Terrasse",
    subtitle: "Zéro infiltration, tranquillité garantie",
    intro: "Les toitures-terrasses et les toitures à faible pente sont très répandues dans l'habitat des années 1970-2000 en Ariège. Leur principale vulnérabilité : l'étanchéité. Une terrasse mal étanchée provoque des infiltrations qui endommagent isolants, dalles béton, cloisons intérieures et plafonds. BHB Habitat maîtrise les techniques modernes d'étanchéité pour toitures plates et semi-plates.",
    points: [
      {
        title: "Les systèmes d'étanchéité : bicouche vs monocouche",
        content: "Le système bicouche bitumineux est la référence historique : deux nappes de bitume SBS armé de polyester, soudées au chalumeau en quinconce. Très robuste, idéal pour les terrasses accessibles. Les membranes TPO et EPDM (monocouche) sont plus récentes : pose par soudure à air chaud ou adhésivage, haute résistance aux UV et aux variations thermiques, durée de vie de 25 à 40 ans. Pour les toitures végétalisées, nous préconisons l'EPDM associé à une couche drainante et un substrat léger."
      },
      {
        title: "Les points singuliers : là où tout se joue",
        content: "90 % des infiltrations sur toiture terrasse proviennent des points singuliers, pas de la surface plate : relevés d'étanchéité en pied de mur (minimum 15 cm de hauteur), costières de lanterneaux et châssis de toit, sorties de ventilations et fourreaux de câbles, joints de dilatation, évacuations d'eaux pluviales (EEP). BHB Habitat apporte un soin particulier à ces zones critiques, avec des accessoires préformés soudés à chaud."
      },
      {
        title: "Isolation thermique des toitures terrasses",
        content: "Une toiture terrasse est aussi un vecteur de déperdition thermique majeur : jusqu'à 25 % des pertes de chaleur d'une maison. Nous intervenons souvent en combinant étanchéité et isolation thermique par l'extérieur (ITE) avec des panneaux PIR (polyisocyanurate) ou en laine de roche. Cette combinaison permet d'améliorer drastiquement le DPE et le confort thermique été comme hiver."
      },
      {
        title: "Diagnostic infiltration : trouver la source exacte",
        content: "Localiser une infiltration sur toiture terrasse est un métier. L'eau peut parcourir plusieurs mètres entre le point d'entrée et la tache au plafond. Nous utilisons la méthode de remplissage d'eau par zones (test à l'eau) et le détecteur d'humidité électromagnétique pour cartographier précisément les zones défaillantes avant intervention, évitant ainsi de déposer toute la membrane pour retrouver un défaut localisé."
      }
    ],
    cta: "Diagnostic étanchéité gratuit",
    warning: "Une infiltration non traitée double de surface tous les 2 ans en moyenne."
  },
  {
    emoji: "🔧",
    slug: "zinguerie",
    title: "Zinguerie & Accessoires",
    subtitle: "Noues, gouttières, faîtages et habillages zinc",
    intro: "La zinguerie est l'ensemble des ouvrages métalliques qui assurent l'évacuation des eaux pluviales et la jonction étanche entre les différents éléments de toiture. Souvent négligée, elle est pourtant essentielle : une gouttière mal fixée, une noue percée ou un faîtage défaillant peuvent causer des infiltrations importantes. BHB Habitat réalise tous les travaux de zinguerie en zinc naturel, zinc prépatiné, aluminium laqué ou inox.",
    points: [
      {
        title: "Le zinc naturel vs les alternatives",
        content: "Le zinc naturel (Z14 ou Z15 selon la norme NF EN 988) est le matériau de référence en zinguerie traditionnelle. Sa durée de vie dépasse 80 ans. Il se patine naturellement en quelques années pour former une couche de protection (patine grise bleutée). Le zinc prépatiné (RHEINZINK, VM Zinc Quartz) offre dès la pose l'aspect patiné sans attendre. Pour les copropriétés ou les projets à budget serré, l'aluminium laqué (50 ans de garantie) est une bonne alternative."
      },
      {
        title: "Les gouttières : section, pente et fixation",
        content: "Une gouttière mal dimensionnée déborde à chaque pluie et provoque des dégâts aux murs et aux fondations. Le calcul de section tient compte de la surface de toiture collectée et de la pluviométrie locale. En Ariège, avec des épisodes orageux intenses, nous surdimensionnons systématiquement les sections (DN 125 minimum) et préconisons des descentes de gouttière avec crépines anti-feuilles. La pente minimale est de 3 mm par mètre linéaire pour assurer un écoulement constant."
      },
      {
        title: "Noues et chéneaux : les zones les plus exposées",
        content: "Les noues sont les angles rentrants entre deux pans de toiture — elles concentrent toute l'eau de pluie des deux versants. En Ariège, lors des orages de printemps et d'automne, le débit peut être considérable. Une noue en zinc doit être d'une largeur minimale de 33 cm développée, avec un recouvrement d'au moins 15 cm sous les tuiles de chaque côté. Les chéneaux (gouttières encaissées) nécessitent une pente parfaite et une section généreuse — nous les réalisons avec un solin d'étanchéité pour prévenir tout débordement."
      },
      {
        title: "Habillages et solins : l'étanchéité des jonctions",
        content: "Partout où la toiture rencontre un mur (pignon, cheminée, velux, mur de refend), il faut un solin étanche. Ces habillages en zinc sont scellés dans la maçonnerie et glissés sous les tuiles pour éviter toute infiltration à la jonction. La qualité de ces solins conditionne la durabilité des abords de cheminées et des murs pignon — zones classiquement sujettes aux infiltrations sur les maisons ariégeoises."
      }
    ],
    cta: "Devis zinguerie gratuit",
    warning: "50 % des dégâts des eaux toiture viennent d'une zinguerie défaillante."
  }
];

export default function ExpertisesPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <div className="py-16 lg:py-24 px-4" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#FF7A35" }}>Savoir-faire</p>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-5" style={{ fontFamily: "var(--font-display)" }}>
            Nos expertises toiture<br />
            <span style={{ color: "#FF7A35" }}>en Ariège (09)</span>
          </h1>
          <p className="text-base lg:text-lg max-w-2xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,.65)" }}>
            {SITE.experience} ans de terrain en Ariège. Chaque prestation détaillée par nos techniciens : matériaux, méthodes, points de vigilance. Ce que vous devez savoir avant de confier votre toit à un artisan.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.phoneTel} className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white" style={{ background: "var(--primary)" }}>
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link href="/devis" className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white border border-white/25 hover:bg-white/10">
              Devis Gratuit <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Nav ancres */}
      <div className="sticky top-16 z-30 border-b overflow-x-auto" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 flex gap-1 py-2 min-w-max">
          {EXPERTISES.map(e => (
            <a key={e.slug} href={`#${e.slug}`}
              className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all hover:opacity-80"
              style={{ color: "var(--fg)" }}>
              {e.emoji} {e.title.split(" & ")[0].split(" ")[0]} {e.title.split(" & ")[0].split(" ")[1] || ""}
            </a>
          ))}
        </div>
      </div>

      {/* Sections expertises */}
      <div className="max-w-5xl mx-auto px-4 py-12 lg:py-20 space-y-24">
        {EXPERTISES.map((e, idx) => (
          <section key={e.slug} id={e.slug}>
            {/* En-tête prestation */}
            <div className="flex items-start gap-5 mb-8 pb-8 border-b" style={{ borderColor: "var(--border)" }}>
              <span className="text-4xl">{e.emoji}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--primary)" }}>
                  Prestation {idx + 1}/{EXPERTISES.length}
                </p>
                <h2 className="text-2xl lg:text-3xl font-black mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
                  {e.title}
                </h2>
                <p className="text-base font-semibold" style={{ color: "var(--muted-fg)" }}>{e.subtitle}</p>
              </div>
            </div>

            {/* Alerte */}
            <div className="flex items-start gap-3 p-4 rounded-xl mb-8" style={{ background: "rgba(212,82,10,0.08)", border: "1px solid rgba(212,82,10,0.2)" }}>
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
              <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>{e.warning}</p>
            </div>

            {/* Intro */}
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--muted-fg)" }}>{e.intro}</p>

            {/* Points techniques */}
            <div className="space-y-6">
              {e.points.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                  <div className="flex items-start gap-3 mb-3">
                    <Wrench className="w-4 h-4 shrink-0 mt-1" style={{ color: "var(--primary)" }} />
                    <h3 className="font-bold text-base" style={{ color: "var(--fg)" }}>{p.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed pl-7" style={{ color: "var(--muted-fg)" }}>{p.content}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/devis"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-all hover:scale-105"
                style={{ background: "var(--primary)" }}
              >
                <CheckCircle className="w-4 h-4" /> {e.cta}
              </Link>
              <a href={SITE.phoneTel} className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--fg)" }}>
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <div className="py-16 px-4" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Votre projet toiture en Ariège ?
          </h2>
          <p className="text-white/60 mb-8">Devis gratuit sous 24h · Diagnostic offert · Garantie décennale 10 ans</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE.phoneTel} className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-lg text-white" style={{ background: "var(--primary)" }}>
              <Phone className="w-5 h-5" /> {SITE.phone}
            </a>
            <Link href="/devis" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white border border-white/25 hover:bg-white/10">
              Devis en ligne <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
