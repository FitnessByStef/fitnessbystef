'use client';
import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Layout>
      {/* Header */}
      <header className="p-6 border-b border-gray-800 shadow-md flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wide">FitnessByStef</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-green-400">À propos</a>
          <a href="#services" className="hover:text-green-400">Mes services</a>
          <a href="#app" className="hover:text-green-400">Mon application</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Transforme ton corps, renforce ton mental</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Coaching sportif, mental et nutritionnel sur-mesure, pensé pour te faire progresser avec une approche holistique.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20 bg-gray-950">
        <h3 className="text-3xl font-bold mb-6 text-green-400">Qui suis-je ?</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Je m'appelle Stéphane, analyste-programmeur, coach diplômé en tennis (AMT), passionné de course à pied, de fitness et de développement personnel. 
          Mon objectif : t'accompagner vers une transformation complète, durable et motivante. J'ai conçu ma propre application pour un suivi personnalisé et intelligent.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-20 bg-gray-900">
        <h3 className="text-3xl font-bold mb-10 text-green-400">Mes services</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Coaching course à pied</h4>
            <p className="text-gray-300">Programme adapté, suivi VMA, seuil, objectifs clairs et progressifs pour performer et se faire plaisir.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Coaching fitness</h4>
            <p className="text-gray-300">Sessions dynamiques et efficaces (circuit, abdos, muscu, cardio, boxe) pour se renforcer et se dépasser.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Préparation mentale</h4>
            <p className="text-gray-300">Travail sur la motivation, les routines de performance, la concentration et la gestion des émotions.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Conseils nutrition</h4>
            <p className="text-gray-300">Apprentissage des bases, stratégies simples (carb-cycling, bons choix) et accompagnement selon ton rythme de vie.</p>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="app" className="py-16 px-6 md:px-20 bg-gray-950">
        <h3 className="text-3xl font-bold mb-6 text-green-400">Mon application</h3>
        <p className="text-gray-300 text-lg max-w-3xl">
          J’ai entièrement développé mon application de coaching pour permettre un suivi individualisé : gestion des entraînements, nutrition, progrès hebdomadaires, 
          objectifs, vidéos explicatives... Le tout dans un design clair et motivant. Disponible bientôt !
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-gray-900">
        <h3 className="text-3xl font-bold mb-6 text-green-400">Me contacter</h3>
        <p className="text-gray-300 mb-4">Envie de te lancer ? Une question ? Contacte-moi par email ou via mes réseaux sociaux.</p>
        <p className="text-green-300">contact@fitnessbystef.fr</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 bg-gray-950 border-t border-gray-800">
        <p>
          &copy; {new Date().getFullYear()} FitnessByStef. Tous droits réservés.
          <nav>
            {/* Utiliser Link au lieu de <a> */}
            <Link to="/privacy-policy">Politique de confidentialité</Link>
          </nav>
        </p>
      </footer>
    </Layout>
  );
}
