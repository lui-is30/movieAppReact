import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import { Details } from './components/pages/Details.tsx'
import ResultSearchPages from './components/pages/ResultSearchPages.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider>

      <BrowserRouter>
      <Routes>

      <Route path='/' element={<App />} />
      <Route path='details/:id/:media_type' element={<Details />} />
      <Route path='result/:input' element={<ResultSearchPages />} />

      </Routes>
      </BrowserRouter>
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)




