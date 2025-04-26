// ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { ChevronsUp } from 'lucide-react';
import './style.css'; // Você pode mover os estilos para um arquivo separado também

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top ${showButton ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronsUp className="scroll-icon" />
    </button>
  );
};

export default ScrollToTop;