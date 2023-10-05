import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlboalStyle } from './style/GlobalStyle';
import { UserContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <GlboalStyle/>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);