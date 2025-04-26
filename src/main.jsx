import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles'
import HeroSection from './Pages/HeroSection'
import Header from './Components/Header'
import About from './Pages/About'
import TimeLine from './Pages/Timeline'
import Navigation from './Components/Navigation'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import ExperienciaInternacional from './Pages/International'
import IdancetyConnect from './Pages/IdancetyConnect'
import ContactSection from './Pages/Contact'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import VideoBG from './Components/VideoBg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />

    <Navigation />
    <HeroSection />
    <About />
    <TimeLine />
    <Projects />
    <Skills />
    <ExperienciaInternacional />
    <IdancetyConnect />
    <ContactSection />
    <ScrollToTop />
    <VideoBG />
  </StrictMode>,
)
