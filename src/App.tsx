import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivacyPolicy from './components/PrivacyPolicy';
import HomePage from './components/Page';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default App;
