// src/pages/StudioGrisPage.tsx
import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function StudioGrisPage() {
  return (
    <>
      <Seo
        title="Cours Fitness au Studio Gris – Thèze (64) | PowerPulse, Athletic, Cardio Boxing"
        description="Découvre les cours du Studio Gris à Thèze (64) : PowerPulse (renfo en musique), Athletic (cardio), Cardio Boxing. Planning & réservations sur le site."
        canonical="https://fitnessbystef.fr/studio-gris"
      />

      <div className="page">
        {/* HERO compact */}
        <section className="hero-card hero-card--compact hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">STUDIO GRIS • COURS COLLECTIFS</p>
            <h1 className="hero-title">Les cours au Studio Gris</h1>

            <p className="hero-text">
              3 formats simples, efficaces, et accessibles. Tu viens, tu transpires, tu progresses — dans une ambiance
              motivante et bienveillante.
            </p>

            <div className="hero-cta-row">
              <a
                href="https://www.studiogris.fr"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Planning & réservations →
              </a>
              <Link to="/sgcoaching" className="btn-secondary">
                Coaching à distance →
              </Link>
            </div>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/gallery-powerpulse.jpg"
              alt="Cours fitness au Studio Gris"
              className="hero-photo"
            />
          </div>
        </section>

        {/* 3 cours - cartes courtes */}
        <section className="axes" style={{ marginTop: 18 }}>
          {/* PowerPulse */}
          <article className="axis-card">
            <p className="hero-kicker" style={{ marginBottom: 6 }}>
              RENFORCEMENT EN MUSIQUE
            </p>
            <h2 className="axis-title">PowerPulse</h2>
            <p className="axis-text">
              Un cours complet orienté renforcement : mouvements simples, intensité progressive, et gros travail
              “full body”.
            </p>
            <ul className="axis-list">
              <li>• Tonus + silhouette</li>
              <li>• Jambes / fessiers / haut du corps</li>
              <li>• Options faciles → avancées</li>
            </ul>

            <div className="media-tile">
              <img
                src="/assets/Images/gallery-powerpulse.jpg"
                alt="PowerPulse – renforcement en musique"
              />
            </div>
          </article>

          {/* Athletic */}
          <article className="axis-card">
            <p className="hero-kicker" style={{ marginBottom: 6 }}>
              CARDIO ATHLÉTIQUE
            </p>
            <h2 className="axis-title">Athletic</h2>
            <p className="axis-text">
              Cardio + renfo dynamique : déplacements, enchaînements, et travail d’endurance. Parfait pour se sentir
              “fit” rapidement.
            </p>
            <ul className="axis-list">
              <li>• Souffle / endurance</li>
              <li>• Coordination + explosivité</li>
              <li>• Gros boost énergie</li>
            </ul>

            <div className="media-tile">
              <img
                src="/assets/Images/gallery-athletic.png"
                alt="Athletic – cardio athlétique"
              />
            </div>
          </article>

          {/* Cardio Boxing */}
          <article className="axis-card">
            <p className="hero-kicker" style={{ marginBottom: 6 }}>
              CARDIO + BOXE
            </p>
            <h2 className="axis-title">Cardio Boxing</h2>
            <p className="axis-text">
              Un mix cardio et frappes : combos simples, intensité, et défoulement. Très bon pour la confiance et le
              mental.
            </p>
            <ul className="axis-list">
              <li>• Défoulement + cardio</li>
              <li>• Technique accessible</li>
              <li>• Ambiance ultra motivante</li>
            </ul>

            <div className="media-tile">
              <img
                src="/assets/Images/gallery-boxing.png"
                alt="Cardio Boxing – Studio Gris"
              />
            </div>
          </article>
        </section>

        {/* Bandeau CTA final (court) */}
        <section className="hero-card hero-card--compact" style={{ marginTop: 18 }}>
          <div className="hero-main">
            <p className="hero-kicker">INFOS PRATIQUES</p>
            <h2 className="hero-title" style={{ fontSize: "1.6rem" }}>
              Voir le planning du Studio Gris
            </h2>
            <p className="hero-text">
              Horaires, réservations, tarifs : tout est sur le site officiel.
            </p>

            <div className="hero-cta-row">
              <a
                href="https://www.studiogris.fr"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Ouvrir studiogris.fr →
              </a>
            </div>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/hero-boxing.png"
              alt="Studio Gris – cours cardio boxing"
              className="hero-photo"
            />
          </div>
        </section>
      </div>
    </>
  );
}
