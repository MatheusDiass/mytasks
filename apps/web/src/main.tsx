import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles.ts';
import { whiteTheme } from './styles/themes';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={whiteTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
