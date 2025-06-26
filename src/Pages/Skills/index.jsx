import React, { useState, useEffect, useRef, useCallback } from 'react';
import './style.css';

const AnimatedSkillBar = React.memo(({ level, tabKey }) => {
  const [width, setWidth] = useState(0);
  const animationRef = useRef(null);
  const barRef = useRef(null);

  // Função para animar a barra
  const startAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setWidth(0);
    
    let startTimestamp = null;
    const duration = 2500; // 2.5 segundos
    
    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function para suavizar a animação
      const easeOutQuad = t => t * (2 - t);
      
      // Atualiza a largura baseada no progresso
      setWidth(Math.floor(easeOutQuad(progress) * level));
      
      // Continua a animação se não terminou
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    // Pequeno atraso para garantir que o componente foi renderizado
    const timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [level]);

  // Inicia a animação quando o componente é montado ou quando a aba muda
  useEffect(() => {
    startAnimation();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startAnimation, tabKey]);

  return (
    <div className="skill-bar-container">
      <div 
        ref={barRef}
        className="skill-bar" 
        style={{ 
          width: `${width}%`,
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  );
});

const Skills = () => {
  const [activeTab, setActiveTab] = useState('artistic');
  const [isVisible, setIsVisible] = useState(false);
  const [tabChangeKey, setTabChangeKey] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTabChangeKey(prev => prev + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.skills-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillsData = {
    artistic: [
      { name: "Dança", level: 98, description: "Hip-hop, Jazz, Contemporâneo e mais" },
      { name: "Coreografia", level: 95, description: "Criação de espetáculos e performances" },
      { name: "Direção Artística", level: 92, description: "Concepção e execução de projetos" },
      { name: "Teatro", level: 90, description: "Atuação e interpretação" },
      { name: "Acrobacia", level: 85, description: "Tecido acrobático e pirofagia" }
    ],
    business: [
      { name: "Gestão de Projetos", level: 90, description: "Planejamento e execução" },
      { name: "Consultoria Artística", level: 95, description: "Para marcas e corporações" },
      { name: "Produção de Eventos", level: 88, description: "Nacionais e internacionais" },
      { name: "Empreendedorismo", level: 92, description: "Criação e gestão de negócios" },
      { name: "Hospitalidade", level: 96, description: "Experiências sensoriais em hotelaria" }
    ],
    languages: [
      { name: "Português", level: 100, description: "Nativo" },
      { name: "Inglês", level: 95, description: "Fluente" },
      { name: "Espanhol", level: 90, description: "Fluente" },
      { name: "Alemão", level: 85, description: "Avançado" },
      { name: "Turco", level: 80, description: "Intermediário" },
      { name: "Francês", level: 60, description: "Em desenvolvimento" }
    ]
  };

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title" id='skill-title'><span>Skills</span> & Expertise</h2>
        <p id='skill-subtitle'>
          Uma combinação única de talentos artísticos e visão estratégica
        </p>

        <div className="skills-tabs">
          <button 
            className={`tab-button ${activeTab === 'artistic' ? 'active' : ''}`}
            onClick={() => handleTabChange('artistic')}
          >
            Artístico
          </button>
          <button 
            className={`tab-button ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => handleTabChange('business')}
          >
            Negócios
          </button>
          <button 
            className={`tab-button ${activeTab === 'languages' ? 'active' : ''}`}
            onClick={() => handleTabChange('languages')}
          >
            Idiomas
          </button>
        </div>

        <div className="skills-content">
          {skillsData[activeTab].map((skill, index) => (
            <div className="skill-item" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-container">
                <AnimatedSkillBar 
                  level={skill.level} 
                  tabKey={`${activeTab}-${tabChangeKey}`} 
                />
              </div>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;