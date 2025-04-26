
// Navigation.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Navigation.css';
import LogoImg from '../../assets/logo.webp';
// Importando ícones do Lucide React
import { 
  User, 
  Map, 
  FolderArchive, 
  Brain, 
  Globe, 
  Music, 
  Mail, 
  X, 
  Menu,
  ChevronUp
} from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Adiciona event listener para fechar menu clicando fora
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Função para rolagem suave
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Ajuste para compensar altura da barra de navegação
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

 
  
  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="logo">
        <img src={LogoImg} alt="Logo" />
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Klaus Duarte</a>
      </div>
      
      {/* Botão hambúrguer com ícone que muda */}
      <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className="burger-icon" /> : <Menu className="burger-icon" />}
      </button>
      
      <div className={`menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')}><User className="nav-icon" /> Sobre</a></li>
        <li><a href="#jornada" onClick={(e) => scrollToSection(e, '#jornada')}><Map className="nav-icon" /> Jornada</a></li>
        <li><a href="#projetos" onClick={(e) => scrollToSection(e, '#projects')}><FolderArchive className="nav-icon" /> Projetos</a></li>
        <li><a href="#expertise" onClick={(e) => scrollToSection(e, '#skills')}><Brain className="nav-icon" /> Expertise</a></li>
        <li><a href="#internacional" onClick={(e) => scrollToSection(e, '#experiencia')}><Globe className="nav-icon" /> Internacional</a></li>
        <li><a href="#idancety" onClick={(e) => scrollToSection(e, '#idancety-global')}><Music className="nav-icon" /> IDANCETY</a></li>
        <li><a href="#contato" onClick={(e) => scrollToSection(e, '#contato')}><Mail className="nav-icon" /> Contato</a></li>
      </ul>

     
    </nav>
  );
};

export default Navigation;