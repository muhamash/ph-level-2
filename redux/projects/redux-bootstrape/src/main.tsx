import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import './index.css'
import { ThemeProvider } from './providers/DarkMode.tsx'
import router from './routes/Index.tsx'

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>,
);
