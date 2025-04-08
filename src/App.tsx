import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './components/Page';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
  );
}

export default App;
