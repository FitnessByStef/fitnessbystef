// src/pages/PdfProgramsPage.tsx
import React, { useState } from "react";
import Seo from "../components/Seo";

type PdfPack = {
  key: string;
  title: string;
  badge?: string;
  price: string; // indicatif
  subtitle: string;
  bullets: string[];
  variant?: "recommended" | "premium";
};

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function PdfCard({
  pack,
  open,
  onToggle,
}: {
  pack: PdfPack;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={cn(
        "axis-card",
        "offer-card",
        pack.variant === "recommended" && "offer-card--recommended",
        pack.variant === "premium" && "offer-card--premium"
      )}
    >
      <div className="offer-head">
        <div>
          {pack.badge ? (
            <span className={cn("offer-badge", pack.variant === "recommended" && "offer-badge--recommended")}>
              {pack.badge}
            </span>
          ) : null}
          <h2 className="axis-title offer-title">{pack.title}</h2>
        </div>

        <div className="offer-price">
          <div className="offer-price-main">{pack.price}</div>
        </div>
      </div>

      <p className="axis-text offer-subtitle">{pack.subtitle}</p>

      <ul className={cn("axis-list", "offer-bullets", !open && "offer-bullets--compact")}>
        {(open ? pack.bullets : pack.bullets.slice(0, 3)).map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>

      <div className="offer-actions">
        <a className="btn-primary" href="/contact">
          Me prévenir à la sortie →
        </a>
        <button type="button" className="btn-secondary offer-btn-details" onClick={onToggle}>
          {open ? "Masquer" : "Détails"}
        </button>
      </div>

      <p className="pdf-coming">
        🔒 Disponible bientôt (paiement + téléchargement)
      </p>
    </article>
  );
}

export default function PdfProgramsPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const packs: PdfPack[] = [
    {
      key: "pdf-start",
      title: "PDF Start — Remise en forme",
      badge: "Autonomie",
      price: "19€",
      subtitle: "Parfait si tu veux reprendre proprement, sans te prendre la tête.",
      bullets: [
        "Plan sur plusieurs semaines (progressif)",
        "Séances simples + consignes claires",
        "Focus : tonicité, souffle, bases solides",
        "Conseils récupération & organisation",
      ],
    },
    {
      key: "pdf-progress",
      title: "PDF Progress — Corps en Bonne Santé",
      badge: "Recommandé",
      price: "24€",
      subtitle: "Le meilleur équilibre : structure + progression + résultats visibles.",
      bullets: [
        "Plan complet (progression semaine par semaine)",
        "Renforcement + cardio + mobilité",
        "Intensités expliquées simplement",
        "Bonus : routine express (10–15 min) pour les jours chargés",
      ],
      variant: "recommended",
    },
    {
      key: "pdf-elite",
      title: "PDF Elite — Performance & silhouette",
      badge: "Avancé",
      price: "29€",
      subtitle: "Pour ceux qui veulent un plan plus exigeant, bien cadré et efficace.",
      bullets: [
        "Plan structuré (volume + intensité mieux dosés)",
        "Séances plus denses (force / cardio / gainage)",
        "Objectif : performance + esthétique",
        "Rappels récupération, sommeil, hygiène de vie",
      ],
      variant: "premium",
    },
  ];

  return (
    <>
      <Seo
        title="Coach sportif à Thèze (64) – Fitness, musculation, running | Studio Gris"
        description="Coach sportif à Thèze (64). Cours de fitness, musculation, course à pied, nutrition et préparation mentale. Studio Gris & SGCoaching : accompagnement personnalisé."
        canonical="https://fitnessbystef.fr/"
      />
      <div className="page">
        {/* HERO dans le même style que Coaching */}
        <section className="hero-card hero-card--compact">
          <div className="hero-main">
            <p className="hero-kicker">PROGRAMMES PDF • EN COURS DE PRÉPARATION</p>

            <h1 className="hero-title">Programmes PDF</h1>

            <p className="hero-text">
              Des plans <b>prêts à l’emploi</b> pour t’entraîner en autonomie avec une structure claire.
              Si tu veux du <b>sur-mesure + suivi</b>, SGCoaching est fait pour ça.
            </p>

            <ul className="hero-list">
              <li>• Débutant / Intermédiaire / Avancé.</li>
              <li>• Séances détaillées + consignes simples.</li>
              <li>• Objectifs : forme, perte de poids, renforcement, mobilité.</li>
            </ul>

            <div className="hero-cta-row">
              <a className="btn-primary" href="/contact">
                Être prévenu à la sortie →
              </a>
              <a className="btn-secondary" href="/sgcoaching">
                Plutôt un coaching sur-mesure
              </a>
            </div>

            <p className="axis-note" style={{ marginTop: 10 }}>
              Prix indicatif : <b>19€–29€</b> selon le programme.
            </p>
          </div>

          <div className="hero-visual">
            <img
              src="/assets/Img_Fond_SGFitness.png"
              alt="Chaîne SGCoaching"
              className="hero-chains"
            />
          </div>
        </section>

        {/* 3 cartes max visibles (comme Coaching) */}
        <section className="pricing-grid">
          {packs.map((p) => (
            <PdfCard
              key={p.key}
              pack={p}
              open={openKey === p.key}
              onToggle={() => setOpenKey((prev) => (prev === p.key ? null : p.key))}
            />
          ))}
        </section>

        {/* Bloc “Bientôt” propre et rassurant */}
        <section className="pdf-soon">
          <div className="axis-card">
            <h2 className="axis-title">Bientôt : paiement & téléchargement</h2>
            <p className="axis-text">
              Les programmes seront disponibles ici avec une fiche détaillée, un paiement en ligne
              et un téléchargement immédiat.
            </p>
            <ul className="axis-list">
              <li>• Achat sécurisé</li>
              <li>• Accès instantané au PDF</li>
              <li>• Mise à jour des programmes au fil du temps</li>
            </ul>
            <p className="axis-note">
              En attendant, tu peux me laisser un message : je te préviens dès que c’est en ligne.
            </p>
            <div className="hero-cta-row">
              <a className="btn-primary" href="/contact">
                OK, je veux être prévenu →
              </a>
              <a className="btn-secondary" href="https://www.studiogris.fr" target="_blank" rel="noreferrer">
                Voir les cours Studio Gris
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
