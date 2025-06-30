import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { RouterProvider } from 'react-router'
import './index.css'
import { ThemeProvider } from './providers/DarkMode.tsx'
import { store } from './redux/store.ts'
import router from './routes/Index.tsx'

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router}>
        </RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);