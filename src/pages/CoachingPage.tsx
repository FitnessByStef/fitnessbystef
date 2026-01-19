// src/pages/CoachingPage.tsx
import React, { useMemo, useState } from "react";
import Seo from "../components/Seo";

type Audience = "studio" | "exterieur";

type Offer = {
  key: string;
  title: string;
  badge?: string;
  price: string;
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
  const isExternal = /^https?:\/\//i.test(offer.ctaHref);

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
            <span
              className={cn(
                "offer-badge",
                offer.variant === "recommended" && "offer-badge--recommended"
              )}
            >
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
        <a
          className="btn-primary"
          href={offer.ctaHref}
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        >
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
  const [audience, setAudience] = useState<Audience>("exterieur");
  const [openKey, setOpenKey] = useState<string | null>(null);

  // ✅ IMPORTANT : mets ici le lien DIRECT vers l'event type (pas juste le profil).
  // Ex: https://calendly.com/stef-palanque/sgcoaching-45min
  const RDV_DISCOVERY_LINK = "https://calendly.com/stef-palanque"; // TODO: remplace par le lien exact de l'évènement
  const CONTACT_ROUTE = "/contact";

  const offers = useMemo<Record<Audience, Offer[]>>(
    () => ({
      studio: [
        {
          key: "studio-essentiel",
          title: "SGCoaching Essentiel — Abonnés Studio Gris",
          badge: "Tarif abonnés",
          price: "+20€ / mois",
          subtitle: "Le cadre + les programmes, sans RDV. Parfait pour compléter les cours.",
          bullets: [
            "Programmes sport + nutrition via SGCoaching",
            "WhatsApp (questions + ajustements)",
            "Ajustements réguliers",
            "Objectifs, contraintes et niveau pris en compte",
          ],
          ctaLabel: "Me contacter →",
          ctaHref: CONTACT_ROUTE,
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
          ctaLabel: "Me contacter →",
          ctaHref: CONTACT_ROUTE,
          variant: "recommended",
        },
        {
          key: "studio-premium",
          title: "SGCoaching Premium Holistique — Studio Gris",
          badge: "Premium",
          price: "+80€ / mois",
          subtitle: "Sport + nutrition + routines : l’accompagnement complet, simple et efficace.",
          bullets: [
            "1 RDV par semaine (présentiel ou visio)",
            "Sport + nutrition personnalisés",
            "Routines bien-être (sommeil, stress, récup)",
            "Préparation mentale si besoin",
          ],
          ctaLabel: "Me contacter →",
          ctaHref: CONTACT_ROUTE,
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
          ctaLabel: "Me contacter →",
          ctaHref: CONTACT_ROUTE,
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
          ctaLabel: "Me contacter →",
          ctaHref: CONTACT_ROUTE,
          variant: "recommended",
        },
        {
          key: "ext-premium",
          title: "SGCoaching Premium Holistique",
          badge: "Premium",
          price: "159€ / mois",
          subtitle: "Sport + nutrition + routines : l’accompagnement complet.",
          bullets: [
            "1 RDV par semaine",
            "Sport + nutrition personnalisés",
            "Préparation mentale si besoin",
            "Approche holistique : stress, récupération, sommeil",
          ],
          ctaLabel: "Me contacter →",
          ctaHref: CONTACT_ROUTE,
          variant: "premium",
        },
      ],
    }),
    []
  );

  const list = offers[audience];

  return (
    <>
      <Seo
        title="SGCoaching – Coaching sport, nutrition & bien-être | Thèze (64)"
        description="Réserve l’offre découverte : entretien + programme personnalisé sport/nutrition/bien-être pour 7 jours généré avec SGCoaching."
        canonical="https://fitnessbystef.fr/sgcoaching"
      />

      <div className="page">
        <section className="hero-card hero-card--compact hero-card--with-chains">
          <div className="hero-main">
            <p className="hero-kicker">SGCOACHING • SPORT • NUTRITION • BIEN-ÊTRE</p>
            <h1 className="hero-title">Un plan clair. Des ajustements. Des résultats.</h1>

            <p className="hero-text">
              Tu veux arrêter d’improviser ? On fait simple : on échange, je comprends ton objectif et tes contraintes,
              et tu repars avec un plan concret.
            </p>

            {/* ✅ Seule offre avec réservation/paiement */}
            <div className="axis-card" style={{ marginTop: 14 }}>
              <div className="offer-head" style={{ marginBottom: 6 }}>
                <div>
                  <span className="offer-badge offer-badge--recommended">Offre découverte</span>
                  <h2 className="axis-title" style={{ marginTop: 8 }}>
                    RDV + programme personnalisé 7 jours
                  </h2>
                </div>
                <div className="offer-price">
                  <div className="offer-price-main">39.99€</div>
                </div>
              </div>

              <p className="axis-text">
                Un entretien (30–40 min) + un programme <b>sport / nutrition / bien-être</b> généré avec SGCoaching à la
                fin du RDV.
              </p>

              <ul className="axis-list">
                <li>• Objectif + niveau + contraintes (temps, douleurs, matériel)</li>
                <li>• Planning sport sur 7 jours + conseils techniques</li>
                <li>• Cadre nutrition simple (calories/macros + exemples)</li>
                <li>• Routine bien-être (sommeil / stress / récup) selon le besoin</li>
              </ul>

              <div className="hero-cta-row" style={{ marginTop: 10 }}>
                <a className="btn-primary" href={RDV_DISCOVERY_LINK} target="_blank" rel="noreferrer">
                  Réserver →
                </a>
                <a className="btn-secondary" href={CONTACT_ROUTE}>
                  Me contacter
                </a>
              </div>

              <p className="axis-note" style={{ marginTop: 10 }}>
                Pour les coachings mensuels (Essentiel / Suivi / Premium), passe par <b>Me contacter</b>.
              </p>
            </div>

            {/* Switch audience */}
            <div className="segmented" style={{ marginTop: 14 }}>
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
                  Tu peux aussi rejoindre le <b>Studio Gris</b> pour des <b>tarifs préférentiels</b>.
                </>
              ) : (
                <>Tarifs préférentiels réservés aux abonnés Studio Gris.</>
              )}
            </p>
          </div>

          <div className="hero-visual">
            <img src="/assets/Img_Fond_SGFitness.png" alt="SGCoaching" className="hero-chains" />
          </div>
        </section>

        {/* Offres mensuelles : CTA -> Contact uniquement */}
        <section id="offres" className="pricing-grid">
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
    </>
  );
}
