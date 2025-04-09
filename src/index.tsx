import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Pas besoin d'importer BrowserRouter ici
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    {/* Router ici pour que tout soit encapsulé */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);