import React, { useMemo } from "react";
import Seo from "../components/Seo";
import { Link, useSearchParams } from "react-router-dom";
import { PROGRAMS, ProgramKey } from "../config/programLinks";

function isProgramKey(value: string | null): value is ProgramKey {
  return value === "titan" || value === "venus";
}

export default function ProgramDownloadPage() {
  const [searchParams] = useSearchParams();

  const program = searchParams.get("program");
  const key = searchParams.get("key");

  const config = useMemo(() => {
    if (!isProgramKey(program)) return null;

    const selected = PROGRAMS[program];
    if (key !== selected.downloadKey) return null;

    return selected;
  }, [program, key]);

  return (
    <>
      <Seo
        title="Téléchargement du programme | SGCoaching"
        description="Téléchargement du programme SGCoaching."
        canonical="https://fitnessbystef.fr/programmes/download"
      />

      <div className="page">
        <section className="success-card">
          {!config ? (
            <>
              <p className="hero-kicker">ACCÈS NON VALIDE</p>
              <h1 className="hero-title">Lien invalide ou incomplet</h1>
              <p className="hero-text">
                Ce lien de téléchargement n’est pas valide.
              </p>

              <div className="hero-cta-row">
                <Link to="/programmes/remise-en-forme-4-semaines" className="btn-primary">
                  Voir les programmes →
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Me contacter
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="hero-kicker">PAIEMENT TERMINÉ</p>
              <h1 className="hero-title">Ton programme est prêt</h1>
              <p className="hero-text">
                Merci pour ton achat. Tu peux télécharger <strong>{config.title}</strong> ci-dessous.
              </p>

              <div className="download-card">
                <p className="download-card__title">{config.title}</p>
                <p className="download-card__subtitle">
                  Programme PDF 4 semaines • {config.audience}
                </p>

                <a
                  className="btn-primary"
                  href={config.filePath}
                  download
                >
                  Télécharger le PDF →
                </a>
              </div>

              <p className="axis-note" style={{ marginTop: 16 }}>
                Pense à enregistrer ton PDF sur ton téléphone ou ton ordinateur.
              </p>
            </>
          )}
        </section>
      </div>
    </>
  );
}