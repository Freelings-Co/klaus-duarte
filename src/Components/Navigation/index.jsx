// Navigation.jsx
import React, { useState, useEffect } from 'react';
import './Navigation.css';
import LogoImg from '../../assets/logo.webp'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={LogoImg} alt="" />
        <a href="#home">Klaus Duarte</a>
      </div>
      <div className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a></li>
        <li><a href="#jornada" onClick={() => setMobileMenuOpen(false)}>Jornada</a></li>
        <li><a href="#projetos" onClick={() => setMobileMenuOpen(false)}>Projetos</a></li>
        <li><a href="#expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</a></li>
        <li><a href="#internacional" onClick={() => setMobileMenuOpen(false)}>Internacional</a></li>
        <li><a href="#idancety" onClick={() => setMobileMenuOpen(false)}>IDANCETY</a></li>
        <li><a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;