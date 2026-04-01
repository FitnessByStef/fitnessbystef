import React from "react";
import Seo from "../components/Seo";

export default function VendredisOutdoorPage() {
  return (
    <>
      <Seo
        title="Les vendredis outdoor à Thèze | SGCoaching"
        description="Deux créneaux outdoor le vendredi à Thèze : Run Performance à 17h45 et Run & Burn à 19h00. Infos, tarifs et réservation."
        canonical="https://fitnessbystef.fr/vendredis-outdoor"
      />

      <div className="page">
        <section className="hero-card hero-card--compact">
          <div className="hero-main">
            <p className="hero-kicker">COURS COLLECTIFS • THÈZE</p>

            <h1 className="hero-title">Les vendredis outdoor</h1>

            <p className="hero-text">
              Deux créneaux le vendredi pour courir, progresser ou te défouler
              dans une ambiance motivante, en extérieur à Thèze.
            </p>

            <ul className="hero-list">
              <li>• 17h45 : Run Performance</li>
              <li>• 19h00 : Run &amp; Burn</li>
              <li>• En extérieur, selon météo</li>
              <li>• Places limitées</li>
            </ul>

            <div className="hero-cta-row">
              <a href="mailto:stef.palanque@gmail.com" className="btn-primary">
                Réserver ma place →
              </a>

              <a href="tel:0645387271" className="btn-secondary">
                Appeler
              </a>
            </div>
          </div>

          <div className="hero-visual hero-visual--photo">
            <img
              src="/assets/Images/FridayOutdoor.png"
              alt="Affiche Les vendredis outdoor à Thèze"
              className="hero-photo"
            />
          </div>
        </section>

        <section className="axes">
          <article className="axis-card">
            <h2 className="axis-title">17h45 • Run Performance</h2>
            <p className="axis-text">
              Un créneau orienté progression pour travailler avec méthode.
            </p>
            <ul className="axis-list">
              <li>• Fractionné</li>
              <li>• Technique</li>
              <li>• Travail de qualité</li>
              <li>• Pour progresser efficacement</li>
            </ul>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">19h00 • Run &amp; Burn</h2>
            <p className="axis-text">
              Un créneau plus fun et intense pour se défouler en fin de semaine.
            </p>
            <ul className="axis-list">
              <li>• Circuit + fractionné + défis</li>
              <li>• Intense</li>
              <li>• Fun</li>
              <li>• Défouloir</li>
            </ul>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Lieu & tarifs</h2>
            <p className="axis-text">
              Les séances ont lieu à Thèze, en extérieur, selon la météo.
            </p>
            <ul className="axis-list">
              <li>• Adhérents Fit And Fun / Studio Gris : 5€</li>
              <li>• Non adhérents : 7€</li>
              <li>• Carte 10 séances : 40€ / 60€</li>
            </ul>
          </article>
        </section>

        <section className="contact-strip">
          <div className="contact-strip__content">
            <h2 className="axis-title">Réserver ou poser une question</h2>
            <p className="axis-text">
              Réservation en message privé, par mail ou par téléphone.
            </p>

            <div className="hero-cta-row" style={{ marginTop: 18 }}>
              <a href="mailto:stef.palanque@gmail.com" className="btn-primary">
                stef.palanque@gmail.com
              </a>

              <a href="tel:0645387271" className="btn-secondary">
                06 45 38 72 71
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}