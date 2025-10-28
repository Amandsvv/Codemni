import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CodemniLanding from './pages/landingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CodemniLanding/>
  </StrictMode>,
)
