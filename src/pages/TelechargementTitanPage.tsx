import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function TelechargementTitanPage() {
  return (
    <>
      <Seo
        title="Téléchargement Titan | SGCoaching"
        description="Téléchargement du programme Titan."
        canonical="https://fitnessbystef.fr/telechargement/titan"
      />

      <div className="page">
        <section className="hero-card">
          <div className="hero-main">
            <p className="hero-kicker">TÉLÉCHARGEMENT</p>
            <h1 className="hero-title">Programme Titan</h1>

            <p className="hero-text">
              Merci pour ton achat. Clique sur le bouton ci-dessous pour
              télécharger ton pack complet Titan.
            </p>

            <div className="hero-cta-row">
              <a
                className="btn-primary"
                href="/downloads/sg-titan-reset4-7a9sd87f6sdf876sdf876sdf.zip"
                download
              >
                Télécharger Titan
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