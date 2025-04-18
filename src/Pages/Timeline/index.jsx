// TimelineSection.jsx
import React, { useState, useEffect } from 'react';
import './Timeline.css';

const TimelineSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  // Dados da timeline
  const timelineData = [
    {
      year: '1985-1996',
      title: 'Raízes e Despertar Artístico',
      description: 'Nascido em Goiânia e criado por mulheres fortes vindas do Maranhão. Desde cedo, mostrava talento como orador, representante de sala, e interesse por bastidores e processos criativos.',
      milestones: ['Nascimento em Goiânia (1985)', 'Criação matriarcal', 'Primeiros sinais artísticos']
    },
    {
      year: '1996-2003',
      title: 'Início Profissional e Formação',
      description: 'Aos 10 anos, iniciei na carreira de modelo, estudando passarela, postura e atuação. Participei de audições nacionais e aprendi que o talento precisa de direção e preparo.',
      milestones: ['Início na agência de modelos', 'Audição para Chiquititas', 'Descoberta do circo e pirofagia']
    },
    {
      year: '2003-2008',
      title: 'Flocos de Mel e TV',
      description: 'Integrei o grupo infantil-juvenil Flocos de Mel, interpretando o personagem Cornetinha. Lançamos o álbum "Planeta da Alegria", fizemos turnês pelo Brasil e tivemos um programa na TV Cultura.',
      milestones: ['Personagem Cornetinha', 'Programa na TV Cultura', 'Direção artística aos 17 anos']
    },
    {
      year: '2008-2013',
      title: 'Internacionalização - Turquia e Europa',
      description: 'Após uma audição internacional, fui selecionado para trabalhar com entretenimento na rede hoteleira TUI Magic Life. Deixei tudo para trás e mergulhei na experiência internacional, aprendendo idiomas e desenvolvendo novas habilidades.',
      milestones: ['Seleção TUI Magic Life', 'Trabalho na Turquia e Espanha', 'Aprendizado de 5 idiomas']
    },
    {
      year: '2013-2020',
      title: 'São Paulo e o Mercado Nacional',
      description: 'Em São Paulo, trabalhei com grandes nomes da música brasileira como Anitta, Ivete Sangalo e Junior Lima. Criei o IDANCETY (City of Dancers) e me consolidei como coreógrafo e diretor artístico no mercado nacional.',
      milestones: ['DVDs de Anitta e Ivete', 'Criação do IDANCETY', 'Direção com Lucenzo e outros artistas']
    },
    {
      year: '2020-2025',
      title: 'Expansão Global e Connect360',
      description: 'Retornei ao mercado internacional da hotelaria, agora como consultor, estrategista e especialista em hospitalidade. Fundei a Connect360, plataforma corporativa de entretenimento global que conecta artistas, marcas e ideias.',
      milestones: ['Consultoria em hotelaria de luxo', 'Lançamento Connect360', 'Projetos na Costa Rica']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.timeline-item').forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="jornada" className="timeline-section">
      <div className="timeline-container">
        <h2 className="section-title">
          <span className="highlight">Minha</span> Jornada
        </h2>
        
        <div className="timeline-navigation">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              className={`timeline-nav-item ${activePhase === index ? 'active' : ''}`}
              onClick={() => setActivePhase(index)}
            >
              <span className="timeline-year">{item.year}</span>
              <span className="timeline-dot"></span>
            </div>
          ))}
        </div>
        
        <div className="timeline-content">
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${activePhase === index ? 'active' : ''}`}
            >
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
              <ul className="timeline-milestones">
                {item.milestones.map((milestone, i) => (
                  <li key={i}>{milestone}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="timeline-controls">
          <button 
            className="timeline-btn prev" 
            onClick={() => setActivePhase(prev => (prev > 0 ? prev - 1 : prev))}
            disabled={activePhase === 0}
          >
            &larr; Anterior
          </button>
          <button 
            className="timeline-btn next" 
            onClick={() => setActivePhase(prev => (prev < timelineData.length - 1 ? prev + 1 : prev))}
            disabled={activePhase === timelineData.length - 1}
          >
            Próximo &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;