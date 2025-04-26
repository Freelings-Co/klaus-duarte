import React, { useState, useEffect } from 'react';
import './style.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('artistic');
  const [isVisible, setIsVisible] = useState(false);

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
            onClick={() => setActiveTab('artistic')}
          >
            Artístico
          </button>
          <button 
            className={`tab-button ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            Negócios
          </button>
          <button 
            className={`tab-button ${activeTab === 'languages' ? 'active' : ''}`}
            onClick={() => setActiveTab('languages')}
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
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
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