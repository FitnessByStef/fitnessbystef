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
import SgCoachingAppPage from "./pages/SgCoachingAppPage";
import ProgrammeTitanPage from "./pages/ProgrammeTitanPage";
import ProgrammeVenusPage from "./pages/ProgrammeVenusPage";
import ProgramDownloadPage from "./pages/ProgramDownloadPage";
import TelechargementVenusPage from "./pages/TelechargementVenus";
import TelechargementTitanPage from "./pages/TelechargementTitanPage";
import VendredisOutdoorPage from "./pages/VendredisOutdoorPage";

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
          <Route path="/sgcoaching-app" element={<SgCoachingAppPage />} />
          
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          
          <Route path="/programmes/titan" element={<ProgrammeTitanPage />} />
          <Route path="/programmes/venus" element={<ProgrammeVenusPage />} />
          <Route path="/programmes/download" element={<ProgramDownloadPage />} />
          <Route path="/telechargement/titan" element={<TelechargementTitanPage />} />
          <Route path="/telechargement/venus" element={<TelechargementVenusPage />} />
          <Route path="/vendredis-outdoor" element={<VendredisOutdoorPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
