// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} SGCoaching • Studio Gris</p>
      <p className="footer-small">
        Coaching, performance & bien-être accessible.
      </p>
    </footer>
  );
}
