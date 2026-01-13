// src/components/Header.tsx
import React from "react";
import { NavLink } from "react-router-dom";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo-wrapper">
          <img src="/assets/Logo_SG.png" alt="SGCoaching" className="header-logo" />
        </div>

        <div>
          <p className="header-title">
            <span className="header-title-main">SGCoaching</span>
            <span className="header-title-sub"> • Corps en bonne santé</span>
          </p>
        </div>
      </div>

      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/studio-gris"
          className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
        >
          Cours Studio Gris
        </NavLink>

        <NavLink
          to="/sgcoaching"
          className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
        >
          SGCoaching
        </NavLink>

        <NavLink
          to="/programmes-pdf"
          className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
        >
          Programmes PDF
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => cn("nav-link", isActive && "nav-link-active")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
