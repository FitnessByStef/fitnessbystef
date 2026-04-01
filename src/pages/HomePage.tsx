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
        description="Coaching sport, nutrition et bien-être. Découvre aussi les programmes PDF 4 semaines RESET 4-Titan et RESET 4-Vénus."
        canonical="https://fitnessbystef.fr/"
      />

      <div className="page">
        <section className="hero-card hero-card--compact hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">COACHING • SPORT • NUTRITION • BIEN-ÊTRE</p>

            <h1 className="hero-title">
              Une méthode simple pour progresser sans te cramer.
            </h1>

            <p className="hero-text">
              Un cadre clair, des ajustements, et de la régularité. Objectif :
              des résultats visibles, mais surtout durables.
            </p>

            <ul className="hero-list">
              <li>• Entraînement : renforcement, fitness, course à pied, mobilité.</li>
              <li>• Nutrition : calories + macros + habitudes (simple et tenable).</li>
              <li>• Routines : sommeil, stress, récupération (quand c’est le vrai frein).</li>
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

              <Link to="/sgcoaching" className="btn-secondary">
                Découvrir SGCoaching
              </Link>
            </div>

            <p className="axis-note" style={{ marginTop: 10 }}>
              Créneaux limités chaque semaine • Paiement à la réservation via Calendly
            </p>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/hero-running.jpeg"
              alt="Coach sportif – renforcement"
              className="hero-photo"
            />
          </div>
        </section>

        {/* BLOC VENTE DIRECTEMENT VISIBLE */}
        <section className="program-sale-hero">
          <div className="program-sale-hero__header">
            <p className="hero-kicker">PROGRAMMES PDF • 4 SEMAINES</p>
            <h2 className="hero-title" style={{ fontSize: "2.2rem" }}>
              Choisis ton programme et démarre tout de suite
            </h2>
            <p className="hero-text">
              Deux programmes simples, progressifs et motivants pour relancer ta remise en forme avec un vrai cadre.
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

        <section className="axes">
          <article className="axis-card">
            <h2 className="axis-title">Ce que tu obtiens</h2>
            <p className="axis-text">
              Un plan concret, adapté à ton temps, ton niveau, et tes contraintes. Pas de blabla.
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
              Si tu veux être guidé avec une méthode claire et tenable.
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
              Présentiel au Studio Gris (cours) et coaching à distance via SGCoaching.
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