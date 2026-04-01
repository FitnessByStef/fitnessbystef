import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function TelechargementVenusPage() {
  return (
    <>
      <Seo
        title="Téléchargement Vénus | SGCoaching"
        description="Téléchargement du programme Vénus."
        canonical="https://fitnessbystef.fr/telechargement/venus"
      />

      <div className="page">
        <section className="hero-card">
          <div className="hero-main">
            <p className="hero-kicker">TÉLÉCHARGEMENT</p>
            <h1 className="hero-title">Programme Vénus</h1>

            <p className="hero-text">
              Merci pour ton achat. Clique sur le bouton ci-dessous pour
              télécharger ton pack complet Vénus.
            </p>

            <div className="hero-cta-row">
              <a
                className="btn-primary"
                href="/downloads/sg-venus-reset4-8k4jf93jf0sdf934jfsdf93.zip"
                download
              >
                Télécharger Vénus
              </a>

              <Link
                to="/programmes/remise-en-forme-4-semaines"
                className="btn-secondary"
              >
                Retour
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}