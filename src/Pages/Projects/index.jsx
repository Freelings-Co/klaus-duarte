import React, { useState, useEffect } from 'react';
import './style.css';
import SandyEJr from '../../assets/jrk.webp'
import Anitta from '../../assets/anittadvd.webp'
import Kuduro from '../../assets/kuduro.webp'
import Olimpicos from '../../assets/olimpiadas-inverno.webp'
import Idancety from '../../assets/idancety.webp'
import Projects1 from '../../assets/projects1.webp'
import Suica from '../../assets/suica.webp'
import Projects2 from '../../assets/projects2.webp'
import FanFeat from '../../assets/fanfeatcoke.webp'
import Milenium from '../../assets/mileniumdance.webp'
import Coke from '../../assets/coke.webp'
import MLevel from '../../assets/mlevelup.webp'
import Tui from '../../assets/tuimagic.webp'

const projectsData = [
  {
    id: 1,
    title: "Flocos de Mel",
    category: "TV & Entretenimento Infantil",
    description: "Programa na TV Cultura com direção artística e atuação como personagem Cornetinha",
    image: Projects2,
    year: "1997-2003"
  },
  {
    id: 2,
    title: "Tui Magic Life",
    category: "Supervisor de Entretenimento",
    description: "Iniciei minha trajetória no Tui Magic Life, onde evoluí de assistente de gerente a supervisor de entretenimento na área de hotelaria, desenvolvendo habilidades de liderança, gestão de equipes e criação de experiências para o público.",
    image: Tui,
    year: "2003-2007"
  },
  {
    id: 3,
    title: "Brasilim",
    category: "Agência de Talentos",
    description: "Agência em Istambul que conectou talentos brasileiros ao mercado euro-asiático",
    image: Projects1,
    year: "2007-2008"
  },
  {
    id: 4,
    title: "Miss Suíça",
    category: "Coreografia Internacional",
    description: "Coreografia para o Miss Suíça em Genebra, elevando o nível das apresentações",
    image: Suica,
    year: "2008"
  },
  {
    id: 5,
    title: "Jogos Olímpicos de Inverno",
    category: "Evento Internacional",
    description: "Atuação na abertura do Biathlon nos Jogos Olímpicos de Inverno na Alemanha",
    image: Olimpicos,
    year: "2010"
  },
  
  {
    id: 6,
    title: "DVD 'Meu Lugar' - Anitta",
    category: "Bailarino Criativo",
    description: "Atuei como bailarino criativo, colaborando na criação dos números masculinos ao lado das coreógrafas Katia Barros e Arielle Macedo, durante os 45 dias de ensaios e gravação do DVD.",
    image: Anitta,
    year: "2014"
  },
  {
    id: 7,
    title: "Coca Cola X Klaus Duarte",
    category: "Coreografia",
    description: "Atuei como coreógrafo para a Coca-Cola Hospitality Center durante a Copa do Mundo no Brasil 2014 e no lançamento da Tocha Olímpica no Rio 2016, liderando o meu elenco — o City of Dancers Brasil.",
    image: Coke,
    year: "2014 e 2016"
  },
  {
    id: 8,
    title: "Coca Cola Fan-Feat",
    category: "Coreografia",
    description: "Assinei a coreografia do Coca-Cola FanFeat, um projeto grandioso que uniu Luan Santana, Pabllo Vittar e Maiara & Maraisa na performance do hit Hasta La Vista, celebrando a energia e a diversidade da música brasileira",
    image: FanFeat,
    year: "2018"
  },
  {
    id: 9,
    title: "Lucenzo - Danza Kuduro",
    category: "Coreografia Internacional",
    description: "Direção e coreografia para o hit mundial 'Danza Kuduro'",
    image: Kuduro,
    year: "2015"
  },
  {
    id: 10,
    title: "Millennium Dance Complez Brasil",
    category: "Diretor Artístico e Coreógrafo / Professor",
    description: "Atuei como diretor artístico, coreógrafo e professor na Millennium Dance Complez Brasil, franquia internacional da icônica escola de dança de Hollywood. Fiz parte da equipe desde a fundação da unidade no Brasil, contribuindo para sua construção e consolidação no mercado, até iniciar um novo capítulo com a criação do meu próprio espaço, o Connect 360.",
    image: Milenium,
    year: "2015-2019"
  },
  {
    id: 11,
    title: "Sandy & Júnior - Turnê",
    category: "Preparação Artística",
    description: "Participei do treinamento artístico diretamente com Júnior Lima para a turnê de retorno da dupla, contribuindo para a preparação e desenvolvimento da performance.",
    image: SandyEJr,
    year: "2019"
  },
  {
    id: 12,
    title: "M. Levell Up",
    category: "Host",
    description: "Atuei como host na abertura da M.Level Up, apresentando o workshop do renomado Nick Cooper, vocal coach de artistas como Beyoncé, Usher, Katy Perry e dos programas The Voice e American Idol.",
    image: MLevel,
    year: "2021"
  },
  {
    id: 13,
    title: "IDANCETY",
    category: "Formação Artística",
    description: "Projeto City of Dancers para descobrir e desenvolver novos talentos",
    image: Idancety,
    year: "2010-Presente"
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