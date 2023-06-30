import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import MainNavBar from './components/Navbar';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNavBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

