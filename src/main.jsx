import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CodemniLanding from './pages/landingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Router from './Router/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
      <Router/>
    <Footer/>
  </StrictMode>
)
