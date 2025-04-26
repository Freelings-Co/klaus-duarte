// AboutSection.jsx
import React, { useEffect } from 'react';
import './AboutSection.css';
import profileImage from '../../assets/klaus.webp'; // Substitua pelo seu caminho real

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

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
          
          <div className="about-highlights fade-in">
            <div className="highlight-item">
              <span className="highlight-number">40+</span>
              <span className="highlight-label">Países Visitados</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">20+</span>
              <span className="highlight-label">Anos de Carreira</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">5</span>
              <span className="highlight-label">Idiomas Fluentes</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">100+</span>
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