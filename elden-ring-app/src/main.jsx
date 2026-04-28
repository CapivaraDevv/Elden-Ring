import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './features/home/HomePage.jsx'
import Header from './components/layout/Header.jsx'
import LoreHero from './features/lore/LoreHero.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HomePage />
    <LoreHero />
  </StrictMode>,
)
