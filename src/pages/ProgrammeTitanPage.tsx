import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import { PROGRAMS } from "../config/programLinks";

export default function ProgrammeTitanPage() {
  const titan = PROGRAMS.titan;

  return (
    <>
      <Seo
        title="Titan – Programme PDF homme 4 semaines | SGCoaching"
        description="Titan : un pack complet sur 4 semaines avec sport, nutrition, shopping list et bien-être pour reprendre sérieusement."
        canonical="https://fitnessbystef.fr/#/programmes/titan"
      />

      <div className="page">
        <section className="hero-card hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">PACK PDF COMPLET • HOMME</p>
            <h1 className="hero-title">Titan</h1>

            <p className="hero-text">
              Un programme complet sur 4 semaines pour reprendre sérieusement,
              retrouver du tonus, relancer ta dynamique et remettre de la
              structure dans ton quotidien.
            </p>

            <ul className="hero-list">
              <li>• Programme sportif progressif sur 4 semaines</li>
              <li>• Nutrition structurée semaine après semaine</li>
              <li>• Shopping lists prêtes à l’emploi</li>
              <li>• Bien-être, motivation et recentrage</li>
            </ul>

            <div className="price-box">
              <span className="price-box__label">Pack PDF complet</span>
              <strong className="price-box__price">19€</strong>
            </div>

            <div className="hero-cta-row">
              <a
                className="btn-primary"
                href={titan.stripeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Acheter Titan →
              </a>

              <Link to="/programmes-pdf" className="btn-secondary">
                Retour
              </Link>
            </div>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/hero-renfo.png"
              alt="Programme Titan"
              className="hero-photo"
            />
          </div>
        </section>

        <section className="content-section">
          <h2>Ce que contient le pack Titan</h2>

          <div className="content-grid">
            <div className="content-card">
              <h3>Sport</h3>
              <p>
                4 semaines de programme sportif progressif pour reprendre avec
                un vrai cadre, retrouver du tonus et remettre ton corps en
                mouvement sans partir dans tous les sens.
              </p>
            </div>

            <div className="content-card">
              <h3>Nutrition</h3>
              <p>
                Un programme nutritionnel simple, structuré et cohérent pour
                accompagner la remise en forme et retrouver de meilleures
                habitudes au quotidien.
              </p>
            </div>

            <div className="content-card">
              <h3>Shopping lists</h3>
              <p>
                Une liste de courses par semaine pour savoir quoi acheter,
                gagner du temps et passer plus facilement à l’action.
              </p>
            </div>

            <div className="content-card">
              <h3>Bien-être</h3>
              <p>
                Des contenus dédiés au mental et à l’équilibre global :
                motivation, mantras, EFT, fleurs de Bach, conseils et routines
                pour renforcer la régularité.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Pour qui ?</h2>
          <p>
            Titan s’adresse à l’homme qui veut reprendre sérieusement, retrouver
            de l’énergie, se remettre dans un cadre propre et avancer étape par
            étape avec une méthode simple à suivre.
          </p>
        </section>

        <section className="content-section">
          <h2>Pourquoi ce programme est différent</h2>
          <p>
            Tu ne reçois pas juste un PDF sport isolé. Tu reçois un pack global
            sur 4 semaines avec entraînement, nutrition, organisation,
            accompagnement bien-être et outils concrets pour t’aider à tenir
            dans la durée.
          </p>
        </section>

        <section className="content-section content-section--cta">
          <h2>Prêt à relancer la machine ?</h2>
          <p>
            Commence avec un cadre clair, progressif et motivant.
          </p>

          <a
            className="btn-primary"
            href={titan.stripeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Je prends le pack Titan →
          </a>
        </section>
      </div>
    </>
  );
}