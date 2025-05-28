// AboutSection.jsx
import React, { useEffect, useState, useRef } from 'react';
import './AboutSection.css';
import profileImage from '../../assets/klaus.webp'; // Substitua pelo seu caminho real

const AboutSection = () => {
  const [counters, setCounters] = useState({
    countries: 0,
    years: 0,
    languages: 0,
    projects: 0
  });
  const [startedCounting, setStartedCounting] = useState(false);
  const countersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (entry.target === countersRef.current && !startedCounting) {
            setStartedCounting(true);
            startCountingAnimation();
          }
        }
      });
    }, { threshold: 0.3 });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [startedCounting]);

  const startCountingAnimation = () => {
    const targetValues = {
      countries: 40,
      years: 20,
      languages: 5,
      projects: 100
    };

    const duration = 2500; // 2.5 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    const animate = (start, end, update, onComplete) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const current = Math.round(start + (progress * (end - start)));
        
        update(current);
        
        if (frame === totalFrames) {
          clearInterval(counter);
          if (onComplete) onComplete();
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    };

    Object.keys(targetValues).forEach(key => {
      animate(0, targetValues[key], (value) => {
        setCounters(prev => ({
          ...prev,
          [key]: value
        }));
      });
    });
  };

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title fade-in">
            <span className="highlight">Fazendo Sonhos</span> Virarem Realidade
          </h2>
          
          <div className="about-quote fade-in">
            <p className='impact'>"Cada minuto não volta nunca mais."</p>
          </div>
          
          <div className="about-text fade-in">
            <p>Nascido em 07 de janeiro de 1985 em Goiânia, fui criado por mulheres fortes - minha avó Maria do Socorro e minha mãe Lenita Penha Moreira - vindas de São Luís do Maranhão, que me ensinaram sobre amor, sabedoria e a força de acreditar nos sonhos.</p>
            
            <p>Desde cedo, meus olhos buscavam o que estava por trás das cortinas. O espetáculo sim, mas também o processo — o coração do que faz algo mágico acontecer. Esta curiosidade me levou dos palcos de Goiânia aos maiores resorts da Europa, dos bastidores da TV brasileira às produções internacionais.</p>
            
            <p>Hoje, como diretor artístico, coreógrafo e especialista em experiências de hospitalidade, transformo lugares e pessoas através da arte, empatia e estratégia, conectando talentos em uma rede global de oportunidades.</p>
          </div>
          
          <div className="about-highlights fade-in" ref={countersRef}>
            <div className="highlight-item">
              <span className="highlight-number">{counters.countries}+</span>
              <span className="highlight-label">Países Visitados</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">{counters.years}+</span>
              <span className="highlight-label">Anos de Carreira</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">{counters.languages}</span>
              <span className="highlight-label">Idiomas Fluentes</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">{counters.projects}+</span>
              <span className="highlight-label">Projetos Internacionais</span>
            </div>
          </div>
        </div>
        
        <div className="about-image fade-in">
          <div className="image-container">
            <img src={profileImage} alt="Klaus Duarte" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;