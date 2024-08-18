import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Creates a root container for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the App component inside the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
