// main.jsx or index.jsx (React 18+)
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root

root.render(
  <BrowserRouter>
    <App />  {/* Wrap your app with BrowserRouter */}
  </BrowserRouter>
);
