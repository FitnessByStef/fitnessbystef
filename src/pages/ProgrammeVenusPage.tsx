import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import { PROGRAMS } from "../config/programLinks";

export default function ProgrammeVenusPage() {
  const venus = PROGRAMS.venus;

  return (
    <>
      <Seo
        title="Vénus – Programme PDF femme 4 semaines | SGCoaching"
        description="Vénus : un pack complet sur 4 semaines avec sport, nutrition, shopping list et bien-être pour retrouver énergie, tonicité et régularité."
        canonical="https://fitnessbystef.fr/#/programmes/venus"
      />

      <div className="page">
        <section className="hero-card hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">PACK PDF COMPLET • FEMME</p>
            <h1 className="hero-title">Vénus</h1>

            <p className="hero-text">
              Un programme complet sur 4 semaines pour relancer ta remise en
              forme, retrouver de l’énergie, de la tonicité et de la régularité,
              avec un cadre clair et motivant.
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
                href={venus.stripeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Acheter Vénus →
              </a>

              <Link to="/programmes-pdf" className="btn-secondary">
                Retour
              </Link>
            </div>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/gallery-athletic.png"
              alt="Programme Vénus"
              className="hero-photo"
            />
          </div>
        </section>

        <section className="content-section">
          <h2>Ce que contient le pack Vénus</h2>

          <div className="content-grid">
            <div className="content-card">
              <h3>Sport</h3>
              <p>
                4 semaines de programme sportif progressif pour reprendre avec
                logique, retrouver de la tonicité et remettre ton corps en
                mouvement avec un cadre clair.
              </p>
            </div>

            <div className="content-card">
              <h3>Nutrition</h3>
              <p>
                Un programme nutritionnel simple, structuré et cohérent pour
                accompagner ta remise en forme et retrouver de meilleures
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
                Des contenus dédiés à l’équilibre global : motivation, mantras,
                EFT, fleurs de Bach, conseils et routines pour t’aider à tenir
                dans la durée.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Pour qui ?</h2>
          <p>
            Vénus s’adresse à la femme qui veut reprendre sérieusement, retrouver
            de l’énergie, se sentir mieux dans son corps, remettre du cadre dans
            son quotidien et avancer étape par étape sans tomber dans l’extrême.
          </p>
        </section>

        <section className="content-section">
          <h2>Pourquoi ce programme est différent</h2>
          <p>
            Tu ne reçois pas juste un PDF sport isolé. Tu reçois un pack global
            sur 4 semaines avec entraînement, nutrition, organisation,
            accompagnement bien-être et outils concrets pour renforcer ta
            régularité.
          </p>
        </section>

        <section className="content-section content-section--cta">
          <h2>Prête à reprendre avec un vrai cadre ?</h2>
          <p>
            Commence avec un pack clair, progressif et motivant.
          </p>

          <a
            className="btn-primary"
            href={venus.stripeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Je prends le pack Vénus →
          </a>
        </section>
      </div>
    </>
  );
}