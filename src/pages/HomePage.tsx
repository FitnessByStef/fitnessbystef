import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import { PassionCarousel } from "../components/PassionCarousel";

export default function HomePage() {
  const RDV_DISCOVERY_LINK = "https://calendly.com/stef-palanque";

  return (
    <>
      <Seo
        title="Coach sportif à Thèze (64) – Sport, nutrition & bien-être | SGCoaching"
        description="Coaching sport, nutrition et bien-être à Thèze. Découvre aussi les programmes PDF 4 semaines RESET 4 Titan et RESET 4 Vénus, ainsi que les vendredis outdoor."
        canonical="https://fitnessbystef.fr/"
      />

      <div className="page">
        {/* HERO */}
        <section className="hero-card hero-card--compact hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">COACHING • SPORT • NUTRITION • BIEN-ÊTRE</p>

            <h1 className="hero-title">
              Une méthode simple pour progresser sans te cramer.
            </h1>

            <p className="hero-text">
              Un cadre clair, des ajustements utiles, et de la régularité.
              Objectif : des résultats visibles, mais surtout durables.
            </p>

            <ul className="hero-list">
              <li>• Entraînement : renforcement, fitness, course à pied, mobilité.</li>
              <li>• Nutrition : calories, macros, habitudes simples et tenables.</li>
              <li>• Routines : sommeil, stress, récupération quand c’est le vrai frein.</li>
            </ul>

            <div className="hero-cta-row">
              <a
                className="btn-primary"
                href={RDV_DISCOVERY_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Réserver l’offre découverte →
              </a>

              <Link to="/programmes/titan" className="btn-secondary">
                Voir les programmes PDF →
              </Link>
            </div>

            <div className="hero-cta-row" style={{ marginTop: 12 }}>
              <Link to="/vendredis-outdoor" className="btn-ghost">
                Voir les vendredis outdoor →
              </Link>

              <Link to="/sgcoaching" className="btn-ghost">
                Découvrir SGCoaching →
              </Link>
            </div>

            <p className="axis-note" style={{ marginTop: 12 }}>
              Créneaux limités chaque semaine • Paiement à la réservation via Calendly
            </p>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/hero-running.jpeg"
              alt="Coach sportif – renforcement et course à pied"
              className="hero-photo"
            />
          </div>
        </section>

        {/* ACCÈS RAPIDES */}
        <section className="quick-access">
          <Link to="/programmes/titan" className="quick-access__card">
            <span className="quick-access__label">PROGRAMMES PDF</span>
            <strong className="quick-access__title">RESET 4 Titan & Vénus</strong>
            <span className="quick-access__text">
              Démarre tout de suite avec un programme clair sur 4 semaines.
            </span>
          </Link>

          <Link to="/vendredis-outdoor" className="quick-access__card">
            <span className="quick-access__label">COURS COLLECTIFS</span>
            <strong className="quick-access__title">Les vendredis outdoor</strong>
            <span className="quick-access__text">
              17h45 Run Performance • 19h Run &amp; Burn à Thèze.
            </span>
          </Link>

          <Link to="/contact" className="quick-access__card">
            <span className="quick-access__label">CONTACT</span>
            <strong className="quick-access__title">Un projet ? Une question ?</strong>
            <span className="quick-access__text">
              Coaching, cours, programmes, partenariat : échangeons.
            </span>
          </Link>
        </section>

        {/* OUTDOOR HIGHLIGHT */}
        <section className="outdoor-highlight">
          <div className="outdoor-highlight__content">
            <p className="hero-kicker">🔥 LES VENDREDIS OUTDOOR</p>

            <h2 className="hero-title" style={{ fontSize: "2rem" }}>
              Viens courir ou te défouler à Thèze
            </h2>

            <p className="hero-text">
              Deux créneaux tous les vendredis, en extérieur, dans une ambiance
              motivante et accessible.
            </p>

            <div className="outdoor-highlight__times">
              <span>17h45 • Run Performance</span>
              <span>19h00 • Run &amp; Burn</span>
            </div>

            <div className="hero-cta-row" style={{ marginTop: 18 }}>
              <Link to="/vendredis-outdoor" className="btn-primary">
                Voir les infos →
              </Link>
            </div>
          </div>

          <Link to="/vendredis-outdoor" className="outdoor-highlight__visual">
            <img
              src="/assets/Images/FridayOutdoor.png"
              alt="Affiche Les vendredis outdoor à Thèze"
              className="outdoor-highlight__poster"
            />
          </Link>
        </section>

        {/* PROGRAMMES PDF */}
        <section className="program-sale-hero">
          <div className="program-sale-hero__header">
            <p className="hero-kicker">PROGRAMMES PDF • 4 SEMAINES</p>
            <h2 className="hero-title" style={{ fontSize: "2.2rem" }}>
              Choisis ton programme et démarre tout de suite
            </h2>
            <p className="hero-text">
              Deux programmes simples, progressifs et motivants pour relancer ta
              remise en forme avec un vrai cadre.
            </p>
          </div>

          <div className="program-choice-grid">
            <article className="program-choice-card">
              <span className="program-badge">Homme</span>
              <h2 className="axis-title">RESET 4 - Titan</h2>
              <p className="axis-text">
                Pour retrouver tonus, structure, énergie et régularité.
              </p>

              <ul className="axis-list">
                <li>• 4 semaines progressives</li>
                <li>• Simple à suivre</li>
                <li>• PDF immédiat après achat</li>
              </ul>

              <div className="price-box">
                <span className="price-box__label">Programme PDF</span>
                <strong className="price-box__price">19€</strong>
              </div>

              <div className="hero-cta-row" style={{ marginTop: 18 }}>
                <Link to="/programmes/titan" className="btn-primary">
                  Voir RESET 4 - Titan →
                </Link>
              </div>
            </article>

            <article className="program-choice-card">
              <span className="program-badge">Femme</span>
              <h2 className="axis-title">RESET 4 - Vénus</h2>
              <p className="axis-text">
                Pour retrouver énergie, tonicité et bonnes habitudes.
              </p>

              <ul className="axis-list">
                <li>• 4 semaines progressives</li>
                <li>• Cadre motivant</li>
                <li>• PDF immédiat après achat</li>
              </ul>

              <div className="price-box">
                <span className="price-box__label">Programme PDF</span>
                <strong className="price-box__price">19€</strong>
              </div>

              <div className="hero-cta-row" style={{ marginTop: 18 }}>
                <Link to="/programmes/venus" className="btn-primary">
                  Voir Vénus →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* BÉNÉFICES */}
        <section className="axes">
          <article className="axis-card">
            <h2 className="axis-title">Ce que tu obtiens</h2>
            <p className="axis-text">
              Un plan concret, adapté à ton temps, ton niveau et tes contraintes.
            </p>
            <ul className="axis-list">
              <li>• Plan d’entraînement structuré</li>
              <li>• Cadre nutrition simple</li>
              <li>• Ajustements selon ta fatigue</li>
            </ul>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Pour qui ?</h2>
            <p className="axis-text">
              Pour celles et ceux qui veulent être guidés avec une méthode claire et tenable.
            </p>
            <ul className="axis-list">
              <li>• Reprise / remise en forme</li>
              <li>• Silhouette / tonus</li>
              <li>• Running / hygiène de vie</li>
            </ul>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Où je coache</h2>
            <p className="axis-text">
              Présentiel, cours collectifs et accompagnement à distance via SGCoaching.
            </p>
            <div className="hero-cta-row">
              <a
                className="btn-primary"
                href="https://www.studiogris.fr"
                target="_blank"
                rel="noreferrer"
              >
                Studio Gris →
              </a>
              <Link className="btn-secondary" to="/contact">
                Me contacter
              </Link>
            </div>
          </article>
        </section>

        {/* PASSIONS / PREUVE */}
        <section className="passions">
          <PassionCarousel
            slides={[
              {
                id: "athletic",
                title: "Athletic",
                subtitle: "Cardio • explosivité • énergie",
                img: "/assets/Images/gallery-athletic.png",
                alt: "Cours Athletic",
              },
              {
                id: "powerpulse",
                title: "PowerPulse",
                subtitle: "Renfo en musique • rythme • intensité",
                img: "/assets/Images/gallery-powerpulse.jpg",
                alt: "Cours PowerPulse",
              },
              {
                id: "cardioboxing",
                title: "Cardio Boxing",
                subtitle: "Cardio • explosivité • énergie",
                img: "/assets/Images/hero-boxing.png",
                alt: "Cours Cardio Boxing",
              },
              {
                id: "running1",
                title: "Running",
                subtitle: "Endurance • structure • progression",
                img: "/assets/Images/gallery-running-1.jpg",
                alt: "Running – passion",
              },
              {
                id: "running3",
                title: "Course à pied",
                subtitle: "Régularité • plaisir • performance",
                img: "/assets/Images/Running3.jpg",
                alt: "Course à pied",
              },
              {
                id: "muscu",
                title: "Musculation",
                subtitle: "Force utile • posture • gainage",
                img: "/assets/Images/hero-renfo.png",
                alt: "Musculation – renforcement",
              },
              {
                id: "tennis",
                title: "Tennis",
                subtitle: "Enseignement en club • pédagogie • coordination",
                img: "/assets/Images/gallery-tennis.jpeg",
                alt: "Tennis – enseignement en club",
              },
            ]}
          />
        </section>
      </div>
    </>
  );
}