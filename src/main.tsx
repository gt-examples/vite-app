import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GTProvider } from 'gt-react';
import gtConfig from '../gt.config.json';
import loadTranslations from './loadTranslations';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GTProvider config={gtConfig} loadTranslations={loadTranslations}>
      <App />
    </GTProvider>
  </StrictMode>,
);
