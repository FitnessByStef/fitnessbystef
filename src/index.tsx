import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    {/* Ajouter le basename ici pour gérer les routes dans GitHub Pages */}
    <Router basename={window.location.pathname || ""}>
      <App />
    </Router>
  </React.StrictMode>
);
