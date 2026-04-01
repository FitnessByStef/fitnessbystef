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
        description="Titan : programme PDF homme sur 4 semaines pour retrouver tonus, énergie et structure."
        canonical="https://fitnessbystef.fr/programmes/titan"
      />

      <div className="page">
        <section className="hero-card hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">PROGRAMME PDF • HOMME</p>
            <h1 className="hero-title">Titan</h1>

            <p className="hero-text">
              Un programme 4 semaines pour reprendre sérieusement, retrouver du tonus
              et remettre de la structure dans ton quotidien.
            </p>

            <ul className="hero-list">
              <li>• Progressif et motivant</li>
              <li>• Accessible et cadré</li>
              <li>• Pensé pour reprendre sans se cramer</li>
            </ul>

            <div className="price-box">
              <span className="price-box__label">Programme PDF</span>
              <strong className="price-box__price">19€</strong>
            </div>

            <div className="hero-cta-row">
              <a
                className="btn-primary"
                href={titan.stripeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Acheter RESET 4 - Titan →
              </a>

              <Link to="/programmes/remise-en-forme-4-semaines" className="btn-secondary">
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
      </div>
    </>
  );
}