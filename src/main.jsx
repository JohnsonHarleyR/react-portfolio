import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import './index.css'
import App from './App.jsx'
import PortfolioProvider from './PortfolioContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </Provider>
  </StrictMode>,
)
