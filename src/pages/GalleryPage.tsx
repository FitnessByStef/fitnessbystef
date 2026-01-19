import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Mon univers – Coach complet | Studio Gris & SGCoaching"
        description="Énergie du collectif, rigueur du running, pédagogie du tennis : une approche complète et cohérente."
        canonical="https://fitnessbystef.fr/galerie"
      />

      <div className="page">
        <section className="hero-card hero-card--compact">
          <div className="hero-main">
            <p className="hero-kicker">MON UNIVERS</p>
            <h1 className="hero-title">Complet, passionné, cohérent.</h1>
            <p className="hero-text" style={{ marginBottom: 0 }}>
              3 piliers qui expliquent ma façon de coacher : énergie, rigueur, pédagogie.
            </p>

            <div className="hero-cta-row">
              <Link to="/sgcoaching" className="btn-primary">Voir SGCoaching →</Link>
              <Link to="/a-propos" className="btn-secondary">À propos</Link>
            </div>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img className="hero-photo" src="/assets/images/gallery-running-1.jpg" alt="Running" />
          </div>
        </section>

        {/* 3 tuiles : 1 écran */}
        <section className="axes" style={{ marginTop: 16 }}>
          <article className="axis-card">
            <h2 className="axis-title">Studio Gris</h2>
            <p className="axis-text">L’énergie du collectif, du fun, et du travail bien fait.</p>
            <div className="media-tile">
              <img src="/assets/images/gallery-boxing.png" alt="Cardio Boxing Studio Gris" />
            </div>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Running</h2>
            <p className="axis-text">Rigueur, foulée, progressivité : construire sans se cramer.</p>
            <div className="media-tile">
              <img src="/assets/images/gallery-running-2.jpg" alt="Running" />
            </div>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Tennis</h2>
            <p className="axis-text">Technique et pédagogie : mieux bouger, mieux exécuter.</p>
            <div className="media-tile">
              <img src="/assets/images/gallery-tennis.jpeg" alt="Tennis" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
