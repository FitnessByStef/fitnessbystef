import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Seo
        title="À propos – Coach sportif à Thèze (64) | Studio Gris"
        description="Découvre une approche claire et durable : entraînement, nutrition, routines, et progression sans te cramer."
        canonical="https://fitnessbystef.fr/a-propos"
      />

      <div className="page">
        <section className="hero-card hero-card--compact hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">À PROPOS • APPROCHE • SUIVI</p>

            {/* ✅ Titre neutre, pas égocentrique */}
            <h1 className="hero-title">Une approche simple, complète, et durable.</h1>

            <p className="hero-text">
              Ici, pas de promesses magiques. L’idée est simple : <b>un plan clair</b>, <b>des ajustements</b>, et{" "}
              <b>de la régularité</b>. Tu progresses sans te cramer, en respectant ton niveau, ton planning et ta récup.
            </p>

            {/* ✅ “Complet” mais discret : on liste ce que la personne obtient */}
            <ul className="hero-list">
              <li>• Entraînement : fitness, musculation, course à pied, mobilité.</li>
              <li>• Nutrition : calories + macros + habitudes (sans prise de tête).</li>
              <li>• Routines : sommeil, stress, constance — quand c’est le vrai frein.</li>
            </ul>

            <div className="hero-cta-row">
              <Link to="/sgcoaching" className="btn-primary">
                Découvrir SGCoaching →
              </Link>
              <Link to="/contact" className="btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/hero-running.jpeg"
              alt="Coach sportif – renforcement"
              className="hero-photo"
            />
          </div>
        </section>

        <section className="axes">
          <article className="axis-card">
            <h2 className="axis-title">Ma façon de coacher</h2>
            <p className="axis-text">
              On va à l’essentiel : une structure simple, des repères, et un suivi réel. Le but : avancer vite… mais
              surtout avancer longtemps.
            </p>
            <ul className="axis-list">
              <li>• Progression graduelle (sans brûler les étapes)</li>
              <li>• Technique + prévention des douleurs</li>
              <li>• Récupération et régularité (le vrai levier)</li>
            </ul>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Pour qui c’est fait</h2>
            <p className="axis-text">
              Si tu veux une méthode claire, un cadre, et quelqu’un qui te guide sans te noyer dans le blabla.
            </p>
            <ul className="axis-list">
              <li>• Reprise / remise en forme</li>
              <li>• Silhouette / perte de poids</li>
              <li>• Perf running / hygiène de vie</li>
            </ul>
          </article>

          <article className="axis-card">
            {/* ✅ Orthographe propre */}
            <h2 className="axis-title">Où je coache</h2>
            <p className="axis-text">
              Au Studio Gris (présentiel) ou à distance via SGCoaching, selon ton besoin et ton emploi du temps.
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

        {/* ✅ Remplace “PILIERS” par un bloc discret et naturel */}
        <section className="axes" style={{ marginTop: 18 }}>
          <article className="axis-card">
            <p className="hero-kicker" style={{ marginBottom: 6 }}>
              TERRAIN
            </p>
            <h2 className="axis-title">Studio Gris</h2>
            <p className="axis-text">
              L’énergie du collectif : intensité, fun, et un cadre propre. Idéal pour se dépasser sans se prendre la tête.
            </p>
            <div className="media-tile">
              <img src="/assets/images/gallery-boxing.png" alt="Cardio Boxing Studio Gris" />
            </div>
          </article>

          <article className="axis-card">
            <p className="hero-kicker" style={{ marginBottom: 6 }}>
              TERRAIN
            </p>
            <h2 className="axis-title">Running</h2>
            <p className="axis-text">
              Construire une progression solide : endurance, séances clés, technique… pour durer et éviter les blessures.
            </p>
            <div className="media-tile">
              <img src="/assets/images/gallery-running-2.jpg" alt="Running – foulée" />
            </div>
          </article>

          <article className="axis-card">
            <p className="hero-kicker" style={{ marginBottom: 6 }}>
              TERRAIN
            </p>
            <h2 className="axis-title">Tennis</h2>
            <p className="axis-text">
              Technique et pédagogie : appuis, coordination, précision. Un gros plus pour un coaching complet et intelligent.
            </p>
            <div className="media-tile">
              <img src="/assets/images/gallery-tennis.jpeg" alt="Tennis – passion & technique" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
