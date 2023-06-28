import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import MainNavBar from './components/Navbar';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainNavBar />
    <App />
  </React.StrictMode>
);

