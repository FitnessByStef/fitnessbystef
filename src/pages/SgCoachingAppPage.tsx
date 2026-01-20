import React, { useEffect, useMemo, useState } from "react";
import Seo from "../components/Seo";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type Slide = {
  key: string;
  kicker: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  tag?: "Coach" | "Client" | "PDF";
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  if (i < 0) return len - 1;
  if (i >= len) return 0;
  return i;
}

export default function SgCoachingAppPage() {
  const RDV_DISCOVERY_LINK = "https://calendly.com/stef-palanque"; // mets ton event exact si tu veux
  const CONTACT_ROUTE = "/contact";

  const slides = useMemo<Slide[]>(
    () => [
      {
        key: "vision",
        kicker: "L’ALLIANCE IA + HUMAIN",
        title: "SGCoaching : un coach augmenté, pas un coach remplacé.",
        text:
          "L’IA accélère la création du programme (sport / nutrition / bien-être / mental). " +
          "Le coach garde la main : il valide, ajuste, et applique sa stratégie. " +
          "Résultat : plus de qualité, plus vite, et un suivi plus cohérent.",
        image: "/assets/sgcoaching-story/VueCoach_Dashboard.png",
        alt: "Dashboard Coach SGCoaching",
        tag: "Coach",
      },
      {
        key: "coach-dashboard",
        kicker: "VUE COACH",
        title: "Dashboard : je sélectionne mon client, je pilote tout.",
        text:
          "Le coach choisit son client et accède à la semaine, aux séances, au plan nutritionnel, " +
          "et à tout l’historique. Tout est centralisé, clair, actionnable.",
        image: "/assets/sgcoaching-story/VueCoach_Dashboard.png",
        alt: "Vue Coach - Dashboard",
        tag: "Coach",
      },
      {
        key: "ai-generation",
        kicker: "VUE COACH",
        title: "Génération IA du programme hebdo… en gardant la logique d’entraînement.",
        text:
          "L’IA propose une base solide en tenant compte des objectifs, contraintes, douleurs, matériel, " +
          "fatigue, fréquence, etc. Le coach gagne un temps énorme sur le “brouillon intelligent”.",
        image: "/assets/sgcoaching-story/VueCoach_GenerationProgrammes.png",
        alt: "Vue Coach - Génération de programmes",
        tag: "Coach",
      },
      {
        key: "edit-session",
        kicker: "IA + HUMAIN",
        title: "Le coach modifie la séance si besoin : c’est là que ça devient puissant.",
        text:
          "Si la proposition ne colle pas (stratégie, récupération, profil du client), le coach ajuste : " +
          "contenu, volumes, intensités, consignes techniques, objectifs de séance.",
        image: "/assets/sgcoaching-story/VueCoach_ModificationSeance.png",
        alt: "Vue Coach - Modification d'une séance",
        tag: "Coach",
      },
      {
        key: "drag-drop",
        kicker: "GAIN DE TEMPS",
        title: "Réorganiser la semaine en glissé-déplacé, ultra rapide.",
        text:
          "Tu changes l’ordre des séances pour coller au planning du client (travail, enfants, fatigue, match, etc.). " +
          "Moins de friction = meilleur suivi = meilleurs résultats.",
        image: "/assets/sgcoaching-story/VueCoach_ModificationPlanning.png",
        alt: "Vue Coach - Modification planning (drag & drop)",
        tag: "Coach",
      },
      {
        key: "nutrition",
        kicker: "VUE COACH",
        title: "Plan nutritionnel : structuré, clair, et facile à adapter.",
        text:
          "Le coach voit le plan nutritionnel et peut l’ajuster. L’objectif : une nutrition simple, " +
          "tenable, alignée avec le sport, le sommeil, et la récupération.",
        image: "/assets/sgcoaching-story/VueClient_NutritionPlanning.png",
        alt: "Planification nutritionnelle (aperçu)",
        tag: "Client",
      },
      {
        key: "pdf-export",
        kicker: "LIVRABLES CLIENT",
        title: "Export PDF : le client repart avec quelque chose de concret.",
        text:
          "Aujourd’hui le client reçoit les PDFs (séances, nutrition, liste de courses). " +
          "Le coach peut éditer/ajuster les PDF pour une remise propre et pro.",
        image: "/assets/sgcoaching-story/PDFClient_SeanceRunning.png",
        alt: "PDF Séance Running",
        tag: "PDF",
      },
      {
        key: "pdf-nutrition",
        kicker: "LIVRABLES CLIENT",
        title: "Nutrition + liste de courses : simple, utile, applicable.",
        text:
          "On enlève le flou : quoi manger, comment structurer la semaine, et quoi acheter. " +
          "Le but n’est pas la perfection : c’est la régularité.",
        image: "/assets/sgcoaching-story/PDFClient_ShoppingList.png",
        alt: "PDF Liste de courses",
        tag: "PDF",
      },
      {
        key: "client-soon",
        kicker: "PROCHAINEMENT EN LIGNE",
        title: "Bientôt : le client aura sa propre vue en ligne en plus des PDF.",
        text:
          "Le client pourra consulter son planning, ses séances, sa nutrition, son bien-être et ses outils mentaux " +
          "directement dans l’app, avec une expérience beaucoup plus fluide.",
        image: "/assets/sgcoaching-story/VueClient_Dashboard.png",
        alt: "Vue Client - Dashboard",
        tag: "Client",
      },
      {
        key: "client-workouts",
        kicker: "VUE CLIENT",
        title: "Planning sportif + détail des séances.",
        text:
          "Le client voit sa semaine et le détail. Le coach garde la cohérence globale, et le client comprend " +
          "le “pourquoi” (et s’engage plus).",
        image: "/assets/sgcoaching-story/VueClient_WorkoutPlanning.png",
        alt: "Vue Client - Planning sportif",
        tag: "Client",
      },
      {
        key: "client-wellbeing",
        kicker: "VUE CLIENT",
        title: "Bien-être & mental : des outils concrets au quotidien.",
        text:
          "Sommeil, stress, récup, préparation mentale… le but c’est d’aider le client à tenir dans la durée " +
          "et à éviter les craquages / surmenage.",
        image: "/assets/sgcoaching-story/VueClient_WellBeingDayli.png",
        alt: "Vue Client - Bien-être quotidien",
        tag: "Client",
      },
      {
        key: "client-eft",
        kicker: "VUE CLIENT",
        title: "Outils (ex : EFT) : quand le mental bloque, on a un plan.",
        text:
          "Parce que la progression ne dépend pas seulement de la séance. Quand un client doute, stresse, " +
          "ou s’auto-sabote, il faut des outils simples et guidés.",
        image: "/assets/sgcoaching-story/VueClient_EFT.png",
        alt: "Vue Client - EFT",
        tag: "Client",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = slides[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => clampIndex(i - 1, slides.length));
      if (e.key === "ArrowRight") setIndex((i) => clampIndex(i + 1, slides.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  return (
    <>
      <Seo
        title="SGCoaching – L’app (IA + Coach) | Sport, Nutrition, Bien-être"
        description="Découvre comment SGCoaching combine IA + expertise du coach pour créer, ajuster et livrer des programmes clairs (sport/nutrition/bien-être/mental)."
        canonical="https://fitnessbystef.fr/sgcoaching-app"
      />

      <div className="page">
        {/* HERO */}
        <section className="hero-card hero-card--compact hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">SGCOACHING • L’APP • IA + HUMAIN</p>
            <h1 className="hero-title">Une histoire simple : tu avances, sans improviser.</h1>

            <p className="hero-text">
              SGCoaching, c’est une application qui aide le coach à créer vite un programme solide, puis à le rendre
              <b> juste</b> grâce à son expertise : ajustements, stratégie, priorités, récupération. Le meilleur des deux
              mondes.
            </p>

            <div className="hero-cta-row" style={{ marginTop: 12 }}>
              <a className="btn-primary" href={RDV_DISCOVERY_LINK} target="_blank" rel="noreferrer">
                Réserver l’offre découverte →
              </a>
              <a className="btn-secondary" href={CONTACT_ROUTE}>
                Me contacter
              </a>
            </div>

            <p className="axis-note" style={{ marginTop: 10 }}>
              Astuce : utilise les flèches ← → du clavier pour naviguer dans le carousel.
            </p>
          </div>

          <div className="hero-visual">
            <img src="/assets/Img_Fond_SGFitness.png" alt="SGCoaching" className="hero-chains" />
          </div>
        </section>

        {/* CAROUSEL */}
        <section className="axis-card" style={{ marginTop: 16 }}>
          <div className="offer-head" style={{ alignItems: "flex-end" }}>
            <div>
              <span className="offer-badge offer-badge--recommended">
                {current.tag ? `${current.tag} • ` : ""}Étape {index + 1}/{slides.length}
              </span>
              <h2 className="axis-title" style={{ marginTop: 10 }}>
                {current.title}
              </h2>
              <p className="axis-text" style={{ marginTop: 8, maxWidth: 900 }}>
                <b>{current.kicker} :</b> {current.text}
              </p>
            </div>

            <div className="offer-actions" style={{ gap: 10 }}>
              <button type="button" className="btn-secondary" onClick={() => setIndex((i) => clampIndex(i - 1, slides.length))}>
                ← Précédent
              </button>
              <button type="button" className="btn-primary" onClick={() => setIndex((i) => clampIndex(i + 1, slides.length))}>
                Suivant →
              </button>
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <div
              className="axis-card"
              style={{
                padding: 12,
                overflow: "hidden",
              }}
            >
              <img
                src={current.image}
                alt={current.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 14,
                }}
              />
            </div>

            {/* DOTS */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
              {slides.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Aller à l’étape ${i + 1}`}
                  className={cn("seg-btn", i === index && "seg-btn--active")}
                  style={{ padding: "8px 10px" }}
                  title={s.title}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* POUR QUI */}
        <section className="pricing-grid" style={{ marginTop: 16 }}>
          <article className="axis-card">
            <h2 className="axis-title">Pour les clients</h2>
            <ul className="axis-list" style={{ marginTop: 10 }}>
              <li>• Un plan clair (plus de flou, plus de “je fais au feeling”).</li>
              <li>• Un programme aligné avec ton agenda réel (fatigue, boulot, enfants…).</li>
              <li>• Nutrition simple + applicable + liste de courses.</li>
              <li>• Bien-être & mental : sommeil, stress, routines, outils.</li>
            </ul>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Pour les coachs</h2>
            <ul className="axis-list" style={{ marginTop: 10 }}>
              <li>• Gain de temps : l’IA propose une base cohérente.</li>
              <li>• Contrôle total : tu modifies, tu valides, tu imposes ta stratégie.</li>
              <li>• Drag & drop : tu adaptes vite aux contraintes du client.</li>
              <li>• Livrables PDF propres + app client (bientôt) = expérience premium.</li>
            </ul>
          </article>
        </section>

        {/* CTA FINAL */}
        <section className="axis-card" style={{ marginTop: 16 }}>
          <h2 className="axis-title">Prêt à tester ?</h2>
          <p className="axis-text" style={{ marginTop: 8 }}>
            Tu veux voir ce que ça donne pour toi (ou pour tes clients) ? On fait simple : un RDV, tes infos, et tu
            repars avec un programme concret sur 7 jours.
          </p>

          <div className="hero-cta-row" style={{ marginTop: 12 }}>
            <a className="btn-primary" href={RDV_DISCOVERY_LINK} target="_blank" rel="noreferrer">
              Réserver →
            </a>
            <a className="btn-secondary" href={CONTACT_ROUTE}>
              Me contacter
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
