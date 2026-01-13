// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero-card">
        <div className="hero-main">
          <p className="hero-kicker">COACHING • MOUVEMENT • MENTAL • SANTÉ</p>

          <h1 className="hero-title">
            Un corps en bonne santé,
            <br />
            avec une méthode claire et réaliste.
          </h1>

          <p className="hero-text">
            Avec le Studio Gris et SGCoaching, je t’accompagne sur trois axes :
            des cours en salle, des programmes PDF structurés (bientôt) et un coaching
            personnalisé via SGCoaching.
          </p>

          <ul className="hero-list">
            <li>• Cours de fitness en présentiel au Studio Gris.</li>
            <li>• Programmes PDF pour t’entraîner en autonomie (à venir).</li>
            <li>• Coaching complet via SGCoaching : sport, nutrition, mental.</li>
          </ul>

          <div className="hero-cta-row">
            <Link to="/sgcoaching" className="btn-primary">
              Découvrir SGCoaching →
            </Link>
            <a
              href="https://www.studiogris.fr"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Voir le Studio Gris
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

      {/* 3 AXES — version “fenêtres” (cards cliquables) */}
      <section className="axes">
        <article className="axis-card">
          <h2 className="axis-title">Cours de fitness au Studio Gris</h2>
          <p className="axis-text">
            Renforcement, cardio, mobilité, boxe… en petit groupe, dans une ambiance conviviale.
            L’objectif : te faire progresser en respectant ton corps et ton niveau.
          </p>
          <ul className="axis-list">
            <li>• Adaptation des exercices à chaque personne.</li>
            <li>• Posture, gainage, mobilité, souffle.</li>
            <li>• Cadre bienveillant, sans jugement.</li>
          </ul>
          <div className="hero-cta-row">
            <Link to="/studio-gris" className="btn-primary">
              Voir les cours →
            </Link>
            <a
              href="https://www.studiogris.fr"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Site Studio Gris
            </a>
          </div>
        </article>

        <article className="axis-card">
          <h2 className="axis-title">Programmes PDF – Corps en Bonne Santé</h2>
          <p className="axis-text">
            Des programmes téléchargeables pour structurer ton entraînement sur plusieurs semaines :
            Débutant, Intermédiaire, Avancé.
          </p>
          <ul className="axis-list">
            <li>• Plans par semaines & objectifs.</li>
            <li>• Explications simples des mouvements.</li>
            <li>• Rappels récupération & hygiène de vie.</li>
          </ul>
          <p className="axis-note">
            Mise en vente prochainement (paiement en ligne). Prix indicatif : 19€–29€.
          </p>
          <div className="hero-cta-row">
            <Link to="/programmes-pdf" className="btn-primary">
              Voir les PDF →
            </Link>
          </div>
        </article>

        <article className="axis-card">
          <h2 className="axis-title">SGCoaching – le suivi personnalisé</h2>
          <p className="axis-text">
            Un accompagnement individuel : plan d’entraînement, nutrition, suivi de tes séances,
            feedbacks… et préparation mentale quand c’est nécessaire (avec moi).
          </p>
          <ul className="axis-list">
            <li>• Plan adapté à ton niveau et ton emploi du temps.</li>
            <li>• Ajustements réguliers + WhatsApp.</li>
            <li>• Approche globale : corps, mental, récupération.</li>
          </ul>
          <div className="hero-cta-row">
            <Link to="/sgcoaching" className="btn-primary">
              Voir les offres →
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
