import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Seo from "../components/Seo";

const SERVICE_ID = "service_c7038f7";   
const TEMPLATE_ID = "template_ri2ova2";    
const PUBLIC_KEY = "gJWMor4mNkpxe8-y_";         


export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    // ✅ Injecte le "Sujet" au début du message pour rester 100% compatible template
    const form = formRef.current;
    if (!form) return;

    const titleInput = form.querySelector<HTMLInputElement>('input[name="title"]');
    const msgTextarea = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

    const title = (titleInput?.value || "").trim();
    const message = (msgTextarea?.value || "").trim();

    if (msgTextarea) {
      msgTextarea.value =
        `Sujet : ${title || "(sans sujet)"}\n\n` +
        `${message}`;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Impossible d'envoyer le message. Réessaie dans quelques secondes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Seo
          title="Coach sportif à Thèze (64) – Fitness, musculation, running | Studio Gris"
          description="Coach sportif à Thèze (64). Cours de fitness, musculation, course à pied, nutrition et préparation mentale. Studio Gris & SGCoaching : accompagnement personnalisé."
          canonical="https://fitnessbystef.fr/"
        />
      <div className="page">
        <section className="hero-card hero-card--compact">
          <div className="hero-main">
            <p className="hero-kicker">CONTACT</p>
            <h1 className="hero-title">Me contacter</h1>

            <p className="hero-text">
              Une question sur les cours, les programmes PDF ou SGCoaching ?
              Écris-moi ici, je te répondrai rapidement.
            </p>

            <form ref={formRef} onSubmit={onSubmit} className="contact-form">
              {/* Sujet (non utilisé directement dans le template, injecté dans message) */}
              <div className="form-group">
                <label className="form-label">Sujet</label>
                <input
                  className="form-input"
                  type="text"
                  name="title"
                  required
                  placeholder="Ex : SGCoaching / Programmes PDF / Cours Studio Gris…"
                />
              </div>

              {/* from_name */}
              <div className="form-group">
                <label className="form-label">Ton nom</label>
                <input
                  className="form-input"
                  type="text"
                  name="from_name"
                  required
                  placeholder="Ex : Laura"
                />
              </div>

              {/* reply_to */}
              <div className="form-group">
                <label className="form-label">Ton email</label>
                <input
                  className="form-input"
                  type="email"
                  name="reply_to"
                  required
                  placeholder="ton@email.fr"
                />
              </div>

              {/* message */}
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  required
                  rows={6}
                  placeholder="Écris ton message…"
                />
              </div>

              <div className="hero-cta-row">
                <button className="btn-primary" type="submit" disabled={loading}>
                  {loading ? "Envoi…" : "Envoyer le message →"}
                </button>

                <a
                  className="btn-secondary"
                  href="https://www.studiogris.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cours Studio Gris
                </a>
              </div>

              {success ? (
                <p className="form-success">✅ Message envoyé. Je te réponds au plus vite.</p>
              ) : null}

              {error ? <p className="form-error">❌ {error}</p> : null}
            </form>

            <p className="axis-note" style={{ marginTop: 14 }}>
              Astuce : si tu es abonné(e) Studio Gris, tu as accès aux tarifs SGCoaching préférentiels.
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
      </div>
    </>
  );
}
