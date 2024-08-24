import React from 'react';
import { createRoot } from 'react-dom/client';
import AppForCode from './AppForCode.jsx';
import './index.css';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppForCode />
  </React.StrictMode>
);

