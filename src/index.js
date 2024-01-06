import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// components
import Main from './main/main';

// styles
import './index.css';
import { ScreenProvider } from './providers/screenProvider';
import { ModalProvider } from './providers/modalProvder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScreenProvider>
      <ModalProvider>
        <BrowserRouter basename='/website'>
          <Main/>
        </BrowserRouter>
      </ModalProvider>
    </ScreenProvider>
  </React.StrictMode>
);