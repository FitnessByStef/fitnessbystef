// src/pages/CoachingPage.tsx
import React, { useMemo, useState } from "react";

type Audience = "studio" | "exterieur";

type Offer = {
  key: string;
  title: string;
  badge?: string; // "Recommandé", "Premium", etc.
  price: string;  // "+60€ / mois"
  subtitle: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  variant?: "recommended" | "premium";
};

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function OfferCard({
  offer,
  open,
  onToggle,
}: {
  offer: Offer;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={cn(
        "axis-card",
        "offer-card",
        offer.variant === "recommended" && "offer-card--recommended",
        offer.variant === "premium" && "offer-card--premium"
      )}
    >
      <div className="offer-head">
        <div>
          {offer.badge ? (
            <span className={cn("offer-badge", offer.variant === "recommended" && "offer-badge--recommended")}>
              {offer.badge}
            </span>
          ) : null}
          <h2 className="axis-title offer-title">{offer.title}</h2>
        </div>

        <div className="offer-price">
          <div className="offer-price-main">{offer.price}</div>
        </div>
      </div>

      <p className="axis-text offer-subtitle">{offer.subtitle}</p>

      <ul className={cn("axis-list", "offer-bullets", !open && "offer-bullets--compact")}>
        {(open ? offer.bullets : offer.bullets.slice(0, 3)).map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>

      <div className="offer-actions">
        <a className="btn-primary" href={offer.ctaHref}>
          {offer.ctaLabel}
        </a>
        <button type="button" className="btn-secondary offer-btn-details" onClick={onToggle}>
          {open ? "Masquer" : "Détails"}
        </button>
      </div>
    </article>
  );
}

export default function CoachingPage() {
  const [audience, setAudience] = useState<Audience>("studio");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const offers = useMemo<Record<Audience, Offer[]>>(
    () => ({
      studio: [
        {
          key: "studio-essentiel",
          title: "SGCoaching Essentiel — Studio Gris",
          badge: "Abonnés Studio Gris",
          price: "+20€ / mois",
          subtitle: "Le cadre + les programmes, sans RDV. Parfait pour compléter les cours.",
          bullets: [
            "Programmes sport + nutrition via SGCoaching",
            "WhatsApp (questions + ajustements)",
            "Ajustements réguliers",
            "Objectifs, contraintes et niveau pris en compte",
          ],
          ctaLabel: "Je démarre →",
          ctaHref: "/contact",
        },
        {
          key: "studio-suivi",
          title: "SGCoaching Suivi Hebdo — Studio Gris",
          badge: "Recommandé",
          price: "+60€ / mois",
          subtitle: "1 RDV / semaine. On structure, on ajuste, tu progresses sans te cramer.",
          bullets: [
            "1 RDV par semaine (présentiel ou visio)",
            "Programmes sport + nutrition personnalisés",
            "WhatsApp + ajustements",
            "Suivi fatigue, motivation, progression",
          ],
          ctaLabel: "Je veux du suivi →",
          ctaHref: "/contact",
          variant: "recommended",
        },
        {
          key: "studio-premium",
          title: "SGCoaching Premium Holistique — Studio Gris",
          badge: "Premium",
          price: "+80€ / mois",
          subtitle: "Transformation complète : corps + mental + équilibre. Ton offre signature.",
          bullets: [
            "1 RDV par semaine (présentiel ou visio)",
            "Sport + nutrition personnalisés",
            "Préparation mentale avec moi",
            "Approche holistique : stress, récupération, routines",
          ],
          ctaLabel: "Passer en Premium →",
          ctaHref: "/contact",
          variant: "premium",
        },
      ],
      exterieur: [
        {
          key: "ext-essentiel",
          title: "SGCoaching Essentiel",
          badge: "À distance",
          price: "49€ / mois",
          subtitle: "Plan clair + structure + WhatsApp. Sans RDV. Simple, efficace.",
          bullets: [
            "Programmes sport + nutrition via SGCoaching",
            "WhatsApp",
            "Ajustements réguliers",
            "Objectifs, contraintes et niveau pris en compte",
          ],
          ctaLabel: "Demander infos →",
          ctaHref: "/contact",
        },
        {
          key: "ext-suivi",
          title: "SGCoaching Suivi Hebdo",
          badge: "Recommandé",
          price: "109€ / mois",
          subtitle: "1 RDV / semaine. Le meilleur ratio résultats / encadrement.",
          bullets: [
            "1 RDV par semaine",
            "Sport + nutrition personnalisés",
            "WhatsApp + ajustements",
            "Suivi progression, fatigue, motivation",
          ],
          ctaLabel: "Commencer →",
          ctaHref: "/contact",
          variant: "recommended",
        },
        {
          key: "ext-premium",
          title: "SGCoaching Premium Holistique",
          badge: "Premium",
          price: "159€ / mois",
          subtitle: "Sport + nutrition + préparation mentale : l’accompagnement complet.",
          bullets: [
            "1 RDV par semaine",
            "Sport + nutrition personnalisés",
            "Préparation mentale avec moi",
            "Approche holistique : stress, récupération, routines",
          ],
          ctaLabel: "Choisir Premium →",
          ctaHref: "/contact",
          variant: "premium",
        },
      ],
    }),
    []
  );

  const list = offers[audience];

  return (
    <div className="page">
      {/* HERO (plus court, plus vendeur) */}
      <section className="hero-card hero-card--compact">
        <div className="hero-main">
          <p className="hero-kicker">SGCOACHING • SPORT • NUTRITION • MENTAL</p>
          <h1 className="hero-title">SGCoaching</h1>
          <p className="hero-text">
            Une méthode simple : <b>on structure</b>, <b>on ajuste</b>, <b>tu progresses</b>.
            L’application apporte la base, moi je fais le coaching réel : personnalisation, suivi
            et préparation mentale quand c’est nécessaire.
          </p>

          {/* SWITCH (sans scroll, lisible) */}
          <div className="segmented">
            <button
              type="button"
              className={cn("seg-btn", audience === "studio" && "seg-btn--active")}
              onClick={() => {
                setAudience("studio");
                setOpenKey(null);
              }}
            >
              Abonné Studio Gris
            </button>
            <button
              type="button"
              className={cn("seg-btn", audience === "exterieur" && "seg-btn--active")}
              onClick={() => {
                setAudience("exterieur");
                setOpenKey(null);
              }}
            >
              Client extérieur
            </button>
          </div>

          <p className="axis-note" style={{ marginTop: 10 }}>
            {audience === "exterieur" ? (
              <>
                Astuce : en rejoignant le <b>Studio Gris</b>, tu passes sur des <b>tarifs préférentiels</b>.
              </>
            ) : (
              <>
                Tarifs préférentiels réservés aux abonnés Studio Gris.
              </>
            )}
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

      {/* PRICING : 3 cartes max (finis les 2 grosses sections) */}
      <section className="pricing-grid">
        {list.map((o) => (
          <OfferCard
            key={o.key}
            offer={o}
            open={openKey === o.key}
            onToggle={() => setOpenKey((prev) => (prev === o.key ? null : o.key))}
          />
        ))}
      </section>
    </div>
  );
}
