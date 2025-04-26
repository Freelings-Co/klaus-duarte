import React, { useState, useEffect } from 'react';
import './style.css';
import SandyEJr from '../../assets/sandy_e_jr.webp'
import Anitta from '../../assets/anitta.webp'
import Kuduro from '../../assets/kuduro.webp'
import Olimpicos from '../../assets/olimpiadas-inverno.webp'
import Idancety from '../../assets/idancety.webp'
import Projects1 from '../../assets/projects1.webp'
import Suica from '../../assets/suica.webp'
import Projects2 from '../../assets/projects2.webp'
// import Projects3 from '../../assets/projects3.webp'

const projectsData = [
  {
    id: 1,
    title: "Flocos de Mel",
    category: "TV & Entretenimento Infantil",
    description: "Programa na TV Cultura com direção artística e atuação como personagem Cornetinha",
    image: Projects2,
    year: "2003-2005"
  },
  {
    id: 2,
    title: "Miss Suíça",
    category: "Coreografia Internacional",
    description: "Coreografia para o Miss Suíça em Genebra, elevando o nível das apresentações",
    image: Suica,
    year: "2008"
  },
  {
    id: 3,
    title: "Jogos Olímpicos de Inverno",
    category: "Evento Internacional",
    description: "Atuação na abertura do Biathlon nos Jogos Olímpicos de Inverno na Alemanha",
    image: Olimpicos,
    year: "2010"
  },
  {
    id: 4,
    title: "Brasilin",
    category: "Agência de Talentos",
    description: "Agência em Istambul que conectou talentos brasileiros ao mercado euro-asiático",
    image: Projects1,
    year: "2011-2013"
  },
  {
    id: 5,
    title: "DVD 'Meu Lugar' - Anitta",
    category: "Direção Artística",
    description: "Trabalho como coreógrafo e diretor no DVD icônico da artista",
    image: Anitta,
    year: "2014"
  },
  {
    id: 6,
    title: "Lucenzo - Danza Kuduro",
    category: "Coreografia Internacional",
    description: "Direção e coreografia para o hit mundial 'Danza Kuduro'",
    image: Kuduro,
    year: "2015"
  },
  {
    id: 7,
    title: "Sandy & Júnior - Turnê",
    category: "Preparação Artística",
    description: "Treinamento direto com Júnior Lima para a turnê de retorno da dupla",
    image: SandyEJr,
    year: "2019"
  },
  {
    id: 8,
    title: "IDANCETY",
    category: "Formação Artística",
    description: "Projeto City of Dancers para descobrir e desenvolver novos talentos",
    image: Idancety,
    year: "2016-Presente"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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

    const element = document.querySelector('.projects-container');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-title"><span>Projetos</span> Marcantes</h2>
        <p className="projects-subtitle">
          Uma trajetória de arte, impacto e transformação ao redor do mundo
        </p>
        
        <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
          {projectsData.map((project, index) => (
            <div 
              className="project-card" 
              key={project.id}
              onClick={() => openProjectDetail(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-year">{project.year}</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeProjectDetail}>×</button>
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-info">
              <h2>{selectedProject.title}</h2>
              <span className="modal-category">{selectedProject.category}</span>
              <span className="modal-year">{selectedProject.year}</span>
              <p className="modal-description">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;