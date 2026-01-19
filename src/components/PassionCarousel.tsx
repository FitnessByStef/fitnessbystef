import React from "react";

export type Slide = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  alt: string;
};

export function PassionCarousel({ slides }: { slides: Slide[] }) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = React.useState(0);

  function scrollToIndex(i: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const items = Array.from(scroller.querySelectorAll<HTMLElement>("[data-slide]"));
    const el = items[i];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function prev() {
    scrollToIndex(Math.max(0, index - 1));
  }
  function next() {
    scrollToIndex(Math.min(slides.length - 1, index + 1));
  }

  // Met à jour l’index selon l’élément le plus proche du centre
  React.useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const items = Array.from(scroller.querySelectorAll<HTMLElement>("[data-slide]"));
      if (items.length === 0) return;

      const center = scroller.scrollLeft + scroller.clientWidth / 2;

      let best = 0;
      let bestDist = Infinity;

      items.forEach((el, i) => {
        const elCenter = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(elCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setIndex(best);
    };

    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [slides.length]);

  // Clavier desktop
  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  return (
    <section className="carousel-block">
      <div className="carousel-head">
        <p className="hero-kicker">MULTI-DISCIPLINES</p>
        <h2 className="axis-title">Passionné, polyvalent, et toujours sur le terrain.</h2>
        <p className="axis-text">
          J’aime varier : cardio, renfo en musique, course à pied, musculation… et j’enseigne aussi le tennis en club.
          <br />
          <b>Fais glisser</b> ou utilise les flèches.
        </p>
      </div>

      <div className="carousel-shell" tabIndex={0} onKeyDown={onKeyDown}>
        <button
          type="button"
          className="carousel-nav carousel-nav--left"
          onClick={prev}
          aria-label="Précédent"
          disabled={index === 0}
        >
          ‹
        </button>

        <div className="carousel-snap" ref={scrollerRef} aria-roledescription="carousel">
          {slides.map((s, i) => (
            <article
              key={s.id}
              data-slide
              className={`carousel-card ${i === index ? "is-active" : "is-inactive"}`}
              onClick={() => scrollToIndex(i)}
              role="group"
              aria-label={`${i + 1} sur ${slides.length}`}
            >
              <div className="carousel-img">
                <img src={s.img} alt={s.alt} />
              </div>
              <div className="carousel-caption">
                <div className="carousel-title">{s.title}</div>
                <div className="carousel-sub">{s.subtitle}</div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="carousel-nav carousel-nav--right"
          onClick={next}
          aria-label="Suivant"
          disabled={index === slides.length - 1}
        >
          ›
        </button>
      </div>

      <div className="carousel-dots" aria-label="Navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot ${i === index ? "is-active" : ""}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Aller à ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
