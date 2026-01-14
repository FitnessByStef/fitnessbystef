// src/pages/StudioGrisPage.tsx
import React from "react";
import Seo from "../components/Seo";

export default function StudioGrisPage() {
  return (
    <>
      <Seo
        title="Coach sportif à Thèze (64) – Fitness, musculation, running | Studio Gris"
        description="Coach sportif à Thèze (64). Cours de fitness, musculation, course à pied, nutrition et préparation mentale. Studio Gris & SGCoaching : accompagnement personnalisé."
        canonical="https://fitnessbystef.fr/"
      />
      <div className="page">
        <section className="hero-card">
          <div className="hero-main">
            <p className="hero-kicker">STUDIO GRIS • COURS FITNESS</p>
            <h1 className="hero-title">Les cours au Studio Gris</h1>
            <p className="hero-text">
              Des cours accessibles, progressifs, et efficaces : renforcement, cardio, mobilité,
              boxe… Le but : te faire évoluer sans te cramer.
            </p>

            <ul className="hero-list">
              <li>• Petits groupes, coaching de qualité.</li>
              <li>• Corrections techniques & adaptation.</li>
              <li>• Ambiance motivante et bienveillante.</li>
            </ul>

            <div className="hero-cta-row">
              <a
                href="https://www.studiogris.fr"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Voir planning & réservations →
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/assets/Img_Fond_SGFitness.png"
              alt="Chaîne SGCoaching"
              className="hero-chains"
            />
          </div>
        </section>

        <section className="axes">
          <article className="axis-card">
            <h2 className="axis-title">Option abonnés : SGCoaching + WhatsApp</h2>
            <p className="axis-text">
              Tu suis les cours au Studio Gris et tu veux un cadre + un plan ? Tu bénéficies d’un tarif
              préférentiel réservé aux abonnés.
            </p>
            <ul className="axis-list">
              <li>• Programmes sport + nutrition via SGCoaching.</li>
              <li>• WhatsApp pour les ajustements.</li>
              <li>• Possibilité d’ajouter 1 RDV hebdo.</li>
            </ul>
            <p className="axis-note">
              Les offres Studio Gris sont détaillées dans la page SGCoaching.
            </p>
          </article>

          <article className="axis-card">
            <h2 className="axis-title">Objectif : progression durable</h2>
            <p className="axis-text">
              On construit un corps solide : posture, gainage, souffle, mobilité. Et si tu veux aller plus loin,
              SGCoaching te donne une structure complète.
            </p>
            <ul className="axis-list">
              <li>• Moins de douleurs, plus d’énergie.</li>
              <li>• Meilleure régularité.</li>
              <li>• Résultats visibles et durables.</li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
