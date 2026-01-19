import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="À propos – Coach sportif à Thèze (64) | Studio Gris"
        description="Découvrez mon parcours, ma méthode et mon approche : sport, nutrition, mental, santé."
        canonical="https://fitnessbystef.fr/a-propos"
      />

      <div className="page">
        <section className="hero-card hero-card--compact hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">À PROPOS • MÉTHODE • CONFIANCE</p>
            <h1 className="hero-title">Je suis Stéphane.</h1>

            <p className="hero-text">
              Je coach avec une approche simple : <b>on structure</b>, <b>on progresse</b>, <b>on dure</b>.
              Mon objectif : te faire évoluer sans te cramer, en respectant ton niveau et ton emploi du temps.
            </p>

            <ul className="hero-list">
              <li>• Coaching : fitness, musculation, course à pied, mobilité.</li>
              <li>• Nutrition : cadrage calories + macros + habitudes.</li>
              <li>• Mental : routines, régularité, gestion du stress si besoin.</li>
            </ul>
            
            <div className="hero-cta-row">
              <Link to="/sgcoaching" className="btn-primary">Découvrir SGCoaching →</Link>
              <Link to="/contact" className="btn-secondary">Me contacter</Link>
            </div>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/hero-renfo.png"
              alt="Coach sportif – renforcement"
              className="hero-photo"
            />
          </div>
        </section>

        <section className="axes">
          <article className="axis-card">
            <h2 className="axis-title">Ma méthode</h2>
            <p className="axis-text">
              Moins de blabla, plus de clarté : un plan simple, des ajustements réguliers, et un suivi réel.
            </p>
            <ul className="axis-list">
              <li>• Progression graduelle</li>
              <li>• Technique + prévention douleurs</li>
              <li>• Régularité & récupération</li>
            </ul>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Pour qui ?</h2>
            <p className="axis-text">
              Débutant à intermédiaire, ou sportif déjà actif qui veut une structure propre.
            </p>
            <ul className="axis-list">
              <li>• Reprise / remise en forme</li>
              <li>• Perte de poids / silhouette</li>
              <li>• Perf running / hygiène de vie</li>
            </ul>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Où je coach</h2>
            <p className="axis-text">
              Au Studio Gris (présentiel) et via SGCoaching (à distance) selon ton besoin.
            </p>
            <div className="hero-cta-row">
              <a className="btn-primary" href="https://www.studiogris.fr" target="_blank" rel="noreferrer">
                Studio Gris →
              </a>
              <Link className="btn-secondary" to="/sgcoaching">
                Offres SGCoaching →
              </Link>
            </div>
          </article>
        </section>
        {/* ✅ APERÇU GALERIE (sans clic, sans scroll vertical) */}
<section className="axis-card" style={{ marginTop: 18 }}>
  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
    <div>
      <p className="hero-kicker" style={{ marginBottom: 6 }}>APERÇU</p>
      <h2 className="axis-title" style={{ margin: 0 }}>Galerie</h2>
      <p className="axis-text" style={{ marginTop: 6 }}>
        Un aperçu rapide de mon univers (tu peux faire défiler horizontalement).
      </p>
    </div>

    {/* Option : bouton si tu veux quand même la page, mais pas obligatoire */}
    {/* <Link to="/galerie" className="btn-secondary">Voir tout →</Link> */}
    </div>

    <div className="gallery-strip" aria-label="Aperçu galerie">
        {[
        { src: "/assets/images/gallery-athletic.png", alt: "Cours Athletic Studio Gris" },
        { src: "/assets/images/gallery-powerpulse.jpg", alt: "Cours Powerpulse Studio Gris" },
        { src: "/assets/images/gallery-boxing.png", alt: "Cardio Boxing Studio Gris" },
        { src: "/assets/images/gallery-running-1.jpg", alt: "Running" },
        { src: "/assets/images/gallery-running-2.jpg", alt: "Running" },
        { src: "/assets/images/gallery-tennis.jpeg", alt: "Tennis" },
        ].map((it) => (
        <figure key={it.src} className="gallery-strip__item">
            <img src={it.src} alt={it.alt} />
            <figcaption className="axis-note" style={{ marginTop: 8 }}>{it.alt}</figcaption>
        </figure>
        ))}
    </div>
    </section>

      </div>
    </>
  );
}
