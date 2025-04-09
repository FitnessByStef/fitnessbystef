import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Page'; // Vérifie que le chemin est correct
import PrivacyPolicy from './components/PrivacyPolicy'; // Vérifie que le chemin est correct

const App = () => {
  return (
    <Router basename="/fitnessbystef"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
