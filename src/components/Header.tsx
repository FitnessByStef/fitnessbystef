// src/components/Header.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook } from "lucide-react";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* LEFT: Brand */}
        <div className="header-left">
          <NavLink
            to="/"
            end
            className="header-brand"
            aria-label="Retour à l’accueil"
          >
            <div className="header-logo-wrapper">
              <img
                src="/assets/Logo_SG.png"
                alt="SGCoaching"
                className="header-logo"
              />
            </div>

            <div className="header-titles">
              <p className="header-title">
                <span className="header-title-main">SGCoaching</span>
                <span className="header-title-sub">
                  {" "}• Corps en bonne santé
                </span>
              </p>
              <p className="header-tagline">
                Fitness • Musculation • Running • Nutrition • Mental
              </p>
            </div>
          </NavLink>
        </div>

        {/* CENTER: Nav */}
        <nav className="header-nav" aria-label="Menu principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn("nav-pill", isActive && "nav-pill--active")
            }
          >
            Accueil
          </NavLink>
          
          <NavLink
            to="/sgcoaching"
            className={({ isActive }) =>
              cn("nav-pill", isActive && "nav-pill--active")
            }
          >
            SGCoaching
          </NavLink>
          
          <NavLink
            to="/sgcoaching-app"
            className={({ isActive }) => cn("nav-pill", isActive && "nav-pill--active")}
          >
            L’app
          </NavLink>
          
          <NavLink
            to="/studio-gris"
            className={({ isActive }) =>
              cn("nav-pill", isActive && "nav-pill--active")
            }
          >
            Studio Gris
          </NavLink>

          

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              cn("nav-pill", isActive && "nav-pill--active")
            }
          >
            À propos
          </NavLink>
        </nav>

        {/* RIGHT: Social + CTA */}
        <div className="header-actions">
          <a
            href="https://www.facebook.com/profile.php?id=61578888413122"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Page Facebook Studio Gris"
            title="Facebook"
          >
            <Facebook size={18} />
          </a>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn("cta-btn", isActive && "cta-btn--active")
            }
          >
            Contact →
          </NavLink>
        </div>
      </div>
    </header>
  );
}
