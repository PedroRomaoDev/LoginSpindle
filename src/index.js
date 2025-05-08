import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';

// Se desejar adicionar VLibras aqui, incluir o useEffect e script aqui, mas vou deixar básico.

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
