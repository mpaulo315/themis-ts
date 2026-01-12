import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
import router from './router/index.ts'

const QUERY_CLIENT = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={QUERY_CLIENT}>
      <RouterProvider router={router}/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
