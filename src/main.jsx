import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles'
import HeroSection from './Pages/HeroSection'
import Header from './Components/Header'
import About from './Pages/About'
import TimeLine from './Pages/Timeline'
import Navigation from './Components/Navigation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
  
    <Navigation/>
    <HeroSection />
    <About />
    <TimeLine />
  </StrictMode>,
)
