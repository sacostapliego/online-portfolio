import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import theme from './assets/theme'
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HashRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </HashRouter>
  </React.StrictMode>
);
