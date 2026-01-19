import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import StudioGrisPage from "./pages/StudioGrisPage";
import PdfProgramsPage from "./pages/PdfProgramsPage";
import CoachingPage from "./pages/CoachingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  return (
    <>
      <Header />

      <main className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio-gris" element={<StudioGrisPage />} />
          <Route path="/programmes-pdf" element={<PdfProgramsPage />} />
          <Route path="/sgcoaching" element={<CoachingPage />} />
          
          
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
