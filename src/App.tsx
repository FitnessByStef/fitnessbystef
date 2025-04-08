import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Page';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL || ""}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
