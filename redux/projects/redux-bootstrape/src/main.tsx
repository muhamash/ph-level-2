import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
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
>>>>>>> origin/redux/intro
