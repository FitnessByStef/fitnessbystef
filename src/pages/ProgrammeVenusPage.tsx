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
        description="Vénus : programme PDF femme sur 4 semaines pour retrouver énergie, tonicité et régularité."
        canonical="https://fitnessbystef.fr/programmes/venus"
      />

      <div className="page">
        <section className="hero-card hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">PROGRAMME PDF • FEMME</p>
            <h1 className="hero-title">Vénus</h1>

            <p className="hero-text">
              Un programme 4 semaines pour relancer ta remise en forme, retrouver
              énergie, tonicité et régularité avec un cadre clair.
            </p>

            <ul className="hero-list">
              <li>• Progressif et motivant</li>
              <li>• Facile à suivre</li>
              <li>• Sans logique extrême</li>
            </ul>

            <div className="price-box">
              <span className="price-box__label">Programme PDF</span>
              <strong className="price-box__price">19€</strong>
            </div>

            <div className="hero-cta-row">
              <a
                className="btn-primary"
                href={venus.stripeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Acheter RESET 4 - Vénus →
              </a>

              <Link to="/programmes/remise-en-forme-4-semaines" className="btn-secondary">
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
      </div>
    </>
  );
}